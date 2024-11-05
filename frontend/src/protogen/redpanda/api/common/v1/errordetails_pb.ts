// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/common/v1/errordetails.proto (package redpanda.api.common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Status } from "../../../../google/rpc/status_pb";

/**
 * AttemptInfo contains information about retryable actions and their specific attempts.
 *
 * @generated from message redpanda.api.common.v1.AttemptInfo
 */
export class AttemptInfo extends Message<AttemptInfo> {
  /**
   * @generated from field: repeated redpanda.api.common.v1.AttemptInfo.Attempt attempts = 1;
   */
  attempts: AttemptInfo_Attempt[] = [];

  constructor(data?: PartialMessage<AttemptInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.common.v1.AttemptInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "attempts", kind: "message", T: AttemptInfo_Attempt, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttemptInfo {
    return new AttemptInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttemptInfo {
    return new AttemptInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttemptInfo {
    return new AttemptInfo().fromJsonString(jsonString, options);
  }

  static equals(a: AttemptInfo | PlainMessage<AttemptInfo> | undefined, b: AttemptInfo | PlainMessage<AttemptInfo> | undefined): boolean {
    return proto3.util.equals(AttemptInfo, a, b);
  }
}

/**
 * @generated from message redpanda.api.common.v1.AttemptInfo.Attempt
 */
export class AttemptInfo_Attempt extends Message<AttemptInfo_Attempt> {
  /**
   * @generated from field: int32 number = 1;
   */
  number = 0;

  /**
   * @generated from field: google.rpc.Status status = 2;
   */
  status?: Status;

  constructor(data?: PartialMessage<AttemptInfo_Attempt>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.common.v1.AttemptInfo.Attempt";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "status", kind: "message", T: Status },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttemptInfo_Attempt {
    return new AttemptInfo_Attempt().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttemptInfo_Attempt {
    return new AttemptInfo_Attempt().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttemptInfo_Attempt {
    return new AttemptInfo_Attempt().fromJsonString(jsonString, options);
  }

  static equals(a: AttemptInfo_Attempt | PlainMessage<AttemptInfo_Attempt> | undefined, b: AttemptInfo_Attempt | PlainMessage<AttemptInfo_Attempt> | undefined): boolean {
    return proto3.util.equals(AttemptInfo_Attempt, a, b);
  }
}

/**
 * ExternalError is an error that may be returned to external users. Other
 * errors thrown by internal systems are discarded by default, so internal
 * errors with sensitive information are not exposed.
 *
 * @generated from message redpanda.api.common.v1.ExternalError
 */
export class ExternalError extends Message<ExternalError> {
  /**
   * @generated from field: string message = 1;
   */
  message = "";

  /**
   * @generated from field: repeated google.protobuf.Any details = 2;
   */
  details: Any[] = [];

  constructor(data?: PartialMessage<ExternalError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.common.v1.ExternalError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExternalError {
    return new ExternalError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExternalError {
    return new ExternalError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExternalError {
    return new ExternalError().fromJsonString(jsonString, options);
  }

  static equals(a: ExternalError | PlainMessage<ExternalError> | undefined, b: ExternalError | PlainMessage<ExternalError> | undefined): boolean {
    return proto3.util.equals(ExternalError, a, b);
  }
}

