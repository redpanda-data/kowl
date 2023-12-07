// @generated by protoc-gen-connect-es v1.1.4 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/dataplane/v1alpha1/user.proto (package redpanda.api.dataplane.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, DeleteUserResponse, ListUsersRequest, ListUsersResponse, UpdateUserRequest, UpdateUserResponse } from "./user_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service redpanda.api.dataplane.v1alpha1.UserService
 */
export const UserService = {
  typeName: "redpanda.api.dataplane.v1alpha1.UserService",
  methods: {
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.UpdateUser
     */
    updateUser: {
      name: "UpdateUser",
      I: UpdateUserRequest,
      O: UpdateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUsersRequest,
      O: ListUsersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.DeleteUser
     */
    deleteUser: {
      name: "DeleteUser",
      I: DeleteUserRequest,
      O: DeleteUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

