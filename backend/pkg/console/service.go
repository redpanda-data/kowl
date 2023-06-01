// Copyright 2022 Redpanda Data, Inc.
//
// Use of this software is governed by the Business Source License
// included in the file https://github.com/redpanda-data/redpanda/blob/dev/licenses/bsl.md
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0

package console

//go:generate ifacemaker --file ./*.go --struct Service --iface Servicer --doc false --pkg console --output servicer.go -y "Servicer is an interface for the Console package that offers all methods to serve the responses for the API layer."

import (
	"context"
	"fmt"

	"go.uber.org/zap"

	"github.com/redpanda-data/console/backend/pkg/config"
	"github.com/redpanda-data/console/backend/pkg/connect"
	"github.com/redpanda-data/console/backend/pkg/git"
	"github.com/redpanda-data/console/backend/pkg/kafka"
	"github.com/redpanda-data/console/backend/pkg/redpanda"
)

// Service offers all methods to serve the responses for the REST API. This usually only involves fetching
// several responses from Kafka concurrently and constructing them so, that they are
type Service struct {
	kafkaSvc    *kafka.Service
	redpandaSvc *redpanda.Service
	gitSvc      *git.Service // Git service can be nil if not configured
	connectSvc  *connect.Service
	logger      *zap.Logger

	// configExtensionsByName contains additional metadata about Topic or BrokerWithLogDirs configs.
	// The additional information is used by the frontend to provide a good UX when
	// editing configs or creating new topics.
	configExtensionsByName map[string]ConfigEntryExtension
}

// NewService for the Console package
func NewService(
	cfg *config.Config,
	logger *zap.Logger,
	redpandaSvc *redpanda.Service,
	connectSvc *connect.Service,
) (Servicer, error) {
	var gitSvc *git.Service
	cfg.Console.TopicDocumentation.Git.AllowedFileExtensions = []string{"md"}
	if cfg.Console.TopicDocumentation.Enabled && cfg.Console.TopicDocumentation.Git.Enabled {
		svc, err := git.NewService(cfg.Console.TopicDocumentation.Git, logger, nil)
		if err != nil {
			return nil, fmt.Errorf("failed to create git service: %w", err)
		}
		gitSvc = svc
	}

	configExtensionsByName, err := loadConfigExtensions()
	if err != nil {
		return nil, fmt.Errorf("failed to load config extensions: %w", err)
	}

	kafkaSvc, err := kafka.NewService(cfg, logger, cfg.MetricsNamespace)
	if err != nil {
		return nil, fmt.Errorf("failed to create kafka svc: %w", err)
	}

	return &Service{
		kafkaSvc:    kafkaSvc,
		redpandaSvc: redpandaSvc,
		gitSvc:      gitSvc,
		connectSvc:  connectSvc,
		logger:      logger,

		configExtensionsByName: configExtensionsByName,
	}, nil
}

// Start starts all the (background) tasks which are required for this service to work properly. If any of these
// tasks can not be setup an error will be returned which will cause the application to exit.
func (s *Service) Start() error {
	if s.gitSvc == nil {
		return nil
	}

	if err := s.kafkaSvc.Start(); err != nil {
		return fmt.Errorf("failed to start kafka service: %w", err)
	}

	return s.gitSvc.Start()
}

// Stop stops running go routines and releases allocated resources.
func (s *Service) Stop() {
	s.kafkaSvc.KafkaClient.Close()
}

func (s *Service) IsHealthy(ctx context.Context) error {
	return s.kafkaSvc.IsHealthy(ctx)
}
