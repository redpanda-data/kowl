// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/console/v1alpha1/pipeline.proto (package redpanda.api.console.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreatePipelineRequest, CreatePipelineResponse, DeletePipelineRequest, DeletePipelineResponse, GetPipelineRequest, GetPipelineResponse, GetPipelinesBySecretsRequest, GetPipelinesBySecretsResponse, GetPipelineServiceConfigSchemaRequest, GetPipelineServiceConfigSchemaResponse, GetPipelinesForSecretRequest, GetPipelinesForSecretResponse, ListPipelinesRequest, ListPipelinesResponse, StartPipelineRequest, StartPipelineResponse, StopPipelineRequest, StopPipelineResponse, UpdatePipelineRequest, UpdatePipelineResponse } from "./pipeline_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service redpanda.api.console.v1alpha1.PipelineService
 */
export const PipelineService = {
  typeName: "redpanda.api.console.v1alpha1.PipelineService",
  methods: {
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.CreatePipeline
     */
    createPipeline: {
      name: "CreatePipeline",
      I: CreatePipelineRequest,
      O: CreatePipelineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.GetPipeline
     */
    getPipeline: {
      name: "GetPipeline",
      I: GetPipelineRequest,
      O: GetPipelineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.DeletePipeline
     */
    deletePipeline: {
      name: "DeletePipeline",
      I: DeletePipelineRequest,
      O: DeletePipelineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.ListPipelines
     */
    listPipelines: {
      name: "ListPipelines",
      I: ListPipelinesRequest,
      O: ListPipelinesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.UpdatePipeline
     */
    updatePipeline: {
      name: "UpdatePipeline",
      I: UpdatePipelineRequest,
      O: UpdatePipelineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.StopPipeline
     */
    stopPipeline: {
      name: "StopPipeline",
      I: StopPipelineRequest,
      O: StopPipelineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.StartPipeline
     */
    startPipeline: {
      name: "StartPipeline",
      I: StartPipelineRequest,
      O: StartPipelineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.GetPipelineServiceConfigSchema
     */
    getPipelineServiceConfigSchema: {
      name: "GetPipelineServiceConfigSchema",
      I: GetPipelineServiceConfigSchemaRequest,
      O: GetPipelineServiceConfigSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.GetPipelinesForSecret
     */
    getPipelinesForSecret: {
      name: "GetPipelinesForSecret",
      I: GetPipelinesForSecretRequest,
      O: GetPipelinesForSecretResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.console.v1alpha1.PipelineService.GetPipelinesBySecrets
     */
    getPipelinesBySecrets: {
      name: "GetPipelinesBySecrets",
      I: GetPipelinesBySecretsRequest,
      O: GetPipelinesBySecretsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

