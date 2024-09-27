// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/console/v1alpha1/debug_bundle.proto (package redpanda.api.console.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Error code enum.
 *
 * @generated from enum redpanda.api.console.v1alpha1.BundleErrorCode
 */
export enum BundleErrorCode {
  /**
   * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
   * OK. No Error.
   *
   * @generated from enum value: BUNDLE_ERROR_CODE_OK = 0;
   */
  OK = 0,

  /**
   * Debug bundle process already running
   *
   * @generated from enum value: BUNDLE_ERROR_CODE_PROCESS_ALREADY_RUNNING = 1;
   */
  PROCESS_ALREADY_RUNNING = 1,

  /**
   * Debug bundle process not running.
   *
   * @generated from enum value: BUNDLE_ERROR_CODE_PROCESS_NOT_RUNNING = 2;
   */
  PROCESS_NOT_RUNNING = 2,

  /**
   * Job ID not recognized.
   *
   * @generated from enum value: BUNDLE_ERROR_CODE_INVALID_JOB_ID = 3;
   */
  INVALID_JOB_ID = 3,

  /**
   * Debug bundle process was never started.
   *
   * @generated from enum value: BUNDLE_ERROR_CODE_PROCESS_NOT_STARTED = 4;
   */
  PROCESS_NOT_STARTED = 4,

  /**
   * Internal error.
   *
   * @generated from enum value: BUNDLE_ERROR_CODE_INTERNAL_ERROR = 5;
   */
  INTERNAL_ERROR = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(BundleErrorCode)
proto3.util.setEnumType(BundleErrorCode, "redpanda.api.console.v1alpha1.BundleErrorCode", [
  { no: 0, name: "BUNDLE_ERROR_CODE_OK" },
  { no: 1, name: "BUNDLE_ERROR_CODE_PROCESS_ALREADY_RUNNING" },
  { no: 2, name: "BUNDLE_ERROR_CODE_PROCESS_NOT_RUNNING" },
  { no: 3, name: "BUNDLE_ERROR_CODE_INVALID_JOB_ID" },
  { no: 4, name: "BUNDLE_ERROR_CODE_PROCESS_NOT_STARTED" },
  { no: 5, name: "BUNDLE_ERROR_CODE_INTERNAL_ERROR" },
]);

/**
 * SCRAM Auth settings.
 *
 * @generated from message redpanda.api.console.v1alpha1.SCRAMAuth
 */
export class SCRAMAuth extends Message<SCRAMAuth> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  /**
   * @generated from field: redpanda.api.console.v1alpha1.SCRAMAuth.Mechanism mechanism = 3;
   */
  mechanism = SCRAMAuth_Mechanism.UNSPECIFIED;

  constructor(data?: PartialMessage<SCRAMAuth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.SCRAMAuth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "mechanism", kind: "enum", T: proto3.getEnumType(SCRAMAuth_Mechanism) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SCRAMAuth {
    return new SCRAMAuth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SCRAMAuth {
    return new SCRAMAuth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SCRAMAuth {
    return new SCRAMAuth().fromJsonString(jsonString, options);
  }

  static equals(a: SCRAMAuth | PlainMessage<SCRAMAuth> | undefined, b: SCRAMAuth | PlainMessage<SCRAMAuth> | undefined): boolean {
    return proto3.util.equals(SCRAMAuth, a, b);
  }
}

/**
 * @generated from enum redpanda.api.console.v1alpha1.SCRAMAuth.Mechanism
 */
export enum SCRAMAuth_Mechanism {
  /**
   * @generated from enum value: MECHANISM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MECHANISM_SCRAM_SHA_256 = 1;
   */
  SCRAM_SHA_256 = 1,

  /**
   * @generated from enum value: MECHANISM_SCRAM_SHA_512 = 2;
   */
  SCRAM_SHA_512 = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SCRAMAuth_Mechanism)
proto3.util.setEnumType(SCRAMAuth_Mechanism, "redpanda.api.console.v1alpha1.SCRAMAuth.Mechanism", [
  { no: 0, name: "MECHANISM_UNSPECIFIED" },
  { no: 1, name: "MECHANISM_SCRAM_SHA_256" },
  { no: 2, name: "MECHANISM_SCRAM_SHA_512" },
]);

/**
 * Request to start the creation of debug bundle process with given configuration parameters.
 *
 * @generated from message redpanda.api.console.v1alpha1.CreateDebugBundleRequest
 */
export class CreateDebugBundleRequest extends Message<CreateDebugBundleRequest> {
  /**
   * Optional authentication settings to use for the request.
   *
   * @generated from oneof redpanda.api.console.v1alpha1.CreateDebugBundleRequest.authentication
   */
  authentication: {
    /**
     * @generated from field: redpanda.api.console.v1alpha1.SCRAMAuth scram = 1;
     */
    value: SCRAMAuth;
    case: "scram";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * Optional broker IDs. Do not set / leave empty to create for all.
   *
   * @generated from field: repeated int32 broker_ids = 3;
   */
  brokerIds: number[] = [];

  /**
   * The size limit of the controller logs that can be stored in the bundle.
   *
   * @generated from field: int32 controller_logs_size_limit_bytes = 4;
   */
  controllerLogsSizeLimitBytes = 0;

  /**
   * For how long to collect samples for the CPU profiler
   *
   * @generated from field: optional int32 cpu_profiler_wait_seconds = 5;
   */
  cpuProfilerWaitSeconds?: number;

  /**
   * Include logs dated from specified date onward.
   *
   * @generated from field: google.protobuf.Timestamp logs_since = 6;
   */
  logsSince?: Timestamp;

  /**
   * Read the logs until the given size is reached.
   *
   * @generated from field: int32 logs_size_limit_bytes = 7;
   */
  logsSizeLimitBytes = 0;

  /**
   * Include logs older than the specified date.
   *
   * @generated from field: google.protobuf.Timestamp logs_until = 8;
   */
  logsUntil?: Timestamp;

  /**
   * Interval between metrics snapshots.
   *
   * @generated from field: int32 metrics_interval_seconds = 9;
   */
  metricsIntervalSeconds = 0;

  /**
   * Partitions. When provided, rpk saves extra admin API requests for those partitions.
   * Optional.
   * In format {namespace/}topic/{partition ids} where namespace is optional and will be replaced with "kafka" if not provided.
   * Partition IDs is comma separated numbers.
   * kafka/foo/1,2,3. also there can be multiple of those so
   * ['kafka/foo/1,2,3', 'private/baz/3.4.5']
   *
   * @generated from field: repeated string partitions = 10;
   */
  partitions: string[] = [];

  constructor(data?: PartialMessage<CreateDebugBundleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.CreateDebugBundleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "scram", kind: "message", T: SCRAMAuth, oneof: "authentication" },
    { no: 3, name: "broker_ids", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 4, name: "controller_logs_size_limit_bytes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "cpu_profiler_wait_seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 6, name: "logs_since", kind: "message", T: Timestamp },
    { no: 7, name: "logs_size_limit_bytes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "logs_until", kind: "message", T: Timestamp },
    { no: 9, name: "metrics_interval_seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "partitions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDebugBundleRequest {
    return new CreateDebugBundleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDebugBundleRequest {
    return new CreateDebugBundleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDebugBundleRequest {
    return new CreateDebugBundleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDebugBundleRequest | PlainMessage<CreateDebugBundleRequest> | undefined, b: CreateDebugBundleRequest | PlainMessage<CreateDebugBundleRequest> | undefined): boolean {
    return proto3.util.equals(CreateDebugBundleRequest, a, b);
  }
}

/**
 * Response to CreateDebugBundle.
 *
 * @generated from message redpanda.api.console.v1alpha1.CreateDebugBundleResponse
 */
export class CreateDebugBundleResponse extends Message<CreateDebugBundleResponse> {
  /**
   * Job ID. UUID.
   *
   * @generated from field: string job_id = 1;
   */
  jobId = "";

  constructor(data?: PartialMessage<CreateDebugBundleResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.CreateDebugBundleResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDebugBundleResponse {
    return new CreateDebugBundleResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDebugBundleResponse {
    return new CreateDebugBundleResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDebugBundleResponse {
    return new CreateDebugBundleResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateDebugBundleResponse | PlainMessage<CreateDebugBundleResponse> | undefined, b: CreateDebugBundleResponse | PlainMessage<CreateDebugBundleResponse> | undefined): boolean {
    return proto3.util.equals(CreateDebugBundleResponse, a, b);
  }
}

/**
 * Gets status of debug bundle progress.
 *
 * @generated from message redpanda.api.console.v1alpha1.GetDebugBundleStatusRequest
 */
export class GetDebugBundleStatusRequest extends Message<GetDebugBundleStatusRequest> {
  /**
   * Optional broker IDs to get. If not set / empty get all.
   *
   * @generated from field: repeated int32 broker_ids = 1;
   */
  brokerIds: number[] = [];

  constructor(data?: PartialMessage<GetDebugBundleStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.GetDebugBundleStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "broker_ids", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDebugBundleStatusRequest {
    return new GetDebugBundleStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDebugBundleStatusRequest {
    return new GetDebugBundleStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDebugBundleStatusRequest {
    return new GetDebugBundleStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetDebugBundleStatusRequest | PlainMessage<GetDebugBundleStatusRequest> | undefined, b: GetDebugBundleStatusRequest | PlainMessage<GetDebugBundleStatusRequest> | undefined): boolean {
    return proto3.util.equals(GetDebugBundleStatusRequest, a, b);
  }
}

/**
 * @generated from message redpanda.api.console.v1alpha1.DebugBundleStatus
 */
export class DebugBundleStatus extends Message<DebugBundleStatus> {
  /**
   * The broker ID.
   *
   * @generated from field: int32 broker_id = 1;
   */
  brokerId = 0;

  /**
   * The job UUID of this process.
   *
   * @generated from field: string job_id = 2;
   */
  jobId = "";

  /**
   * The status of the job.
   *
   * @generated from field: redpanda.api.console.v1alpha1.DebugBundleStatus.Status status = 3;
   */
  status = DebugBundleStatus_Status.UNSPECIFIED;

  /**
   * When the job was started.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * Path in API to get the file.
   *
   * @generated from field: string filename = 5;
   */
  filename = "";

  /**
   * Only filled in once the process completes.  Content of stdout from rpk.
   *
   * @generated from field: repeated string stdout = 6;
   */
  stdout: string[] = [];

  /**
   * Only filled in once the process completes.  Content of stderr from rpk.
   *
   * @generated from field: repeated string stderr = 7;
   */
  stderr: string[] = [];

  constructor(data?: PartialMessage<DebugBundleStatus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.DebugBundleStatus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "broker_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(DebugBundleStatus_Status) },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "stdout", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "stderr", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DebugBundleStatus {
    return new DebugBundleStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DebugBundleStatus {
    return new DebugBundleStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DebugBundleStatus {
    return new DebugBundleStatus().fromJsonString(jsonString, options);
  }

  static equals(a: DebugBundleStatus | PlainMessage<DebugBundleStatus> | undefined, b: DebugBundleStatus | PlainMessage<DebugBundleStatus> | undefined): boolean {
    return proto3.util.equals(DebugBundleStatus, a, b);
  }
}

/**
 * @generated from enum redpanda.api.console.v1alpha1.DebugBundleStatus.Status
 */
export enum DebugBundleStatus_Status {
  /**
   * @generated from enum value: STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATUS_RUNNING = 1;
   */
  RUNNING = 1,

  /**
   * @generated from enum value: STATUS_SUCCESS = 2;
   */
  SUCCESS = 2,

  /**
   * @generated from enum value: STATUS_ERROR = 3;
   */
  ERROR = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(DebugBundleStatus_Status)
proto3.util.setEnumType(DebugBundleStatus_Status, "redpanda.api.console.v1alpha1.DebugBundleStatus.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_RUNNING" },
  { no: 2, name: "STATUS_SUCCESS" },
  { no: 3, name: "STATUS_ERROR" },
]);

/**
 * The response to GetDebugBundleStatus.
 *
 * @generated from message redpanda.api.console.v1alpha1.GetDebugBundleStatusResponse
 */
export class GetDebugBundleStatusResponse extends Message<GetDebugBundleStatusResponse> {
  /**
   * @generated from field: repeated redpanda.api.console.v1alpha1.DebugBundleStatus statuses = 1;
   */
  statuses: DebugBundleStatus[] = [];

  constructor(data?: PartialMessage<GetDebugBundleStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.GetDebugBundleStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "statuses", kind: "message", T: DebugBundleStatus, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDebugBundleStatusResponse {
    return new GetDebugBundleStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDebugBundleStatusResponse {
    return new GetDebugBundleStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDebugBundleStatusResponse {
    return new GetDebugBundleStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetDebugBundleStatusResponse | PlainMessage<GetDebugBundleStatusResponse> | undefined, b: GetDebugBundleStatusResponse | PlainMessage<GetDebugBundleStatusResponse> | undefined): boolean {
    return proto3.util.equals(GetDebugBundleStatusResponse, a, b);
  }
}

/**
 * @generated from message redpanda.api.console.v1alpha1.DeleteDebugBundleRequest
 */
export class DeleteDebugBundleRequest extends Message<DeleteDebugBundleRequest> {
  /**
   * @generated from field: string job_id = 1;
   */
  jobId = "";

  /**
   * Optional broker IDs. Do not set / empty for all.
   *
   * @generated from field: repeated int32 broker_ids = 2;
   */
  brokerIds: number[] = [];

  constructor(data?: PartialMessage<DeleteDebugBundleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.DeleteDebugBundleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "broker_ids", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDebugBundleRequest {
    return new DeleteDebugBundleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDebugBundleRequest {
    return new DeleteDebugBundleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDebugBundleRequest {
    return new DeleteDebugBundleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteDebugBundleRequest | PlainMessage<DeleteDebugBundleRequest> | undefined, b: DeleteDebugBundleRequest | PlainMessage<DeleteDebugBundleRequest> | undefined): boolean {
    return proto3.util.equals(DeleteDebugBundleRequest, a, b);
  }
}

/**
 * Response for DeleteDebugBundle.
 *
 * @generated from message redpanda.api.console.v1alpha1.DeleteDebugBundleResponse
 */
export class DeleteDebugBundleResponse extends Message<DeleteDebugBundleResponse> {
  /**
   * @generated from field: repeated redpanda.api.console.v1alpha1.BundleError errors = 1;
   */
  errors: BundleError[] = [];

  constructor(data?: PartialMessage<DeleteDebugBundleResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.DeleteDebugBundleResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "errors", kind: "message", T: BundleError, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDebugBundleResponse {
    return new DeleteDebugBundleResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDebugBundleResponse {
    return new DeleteDebugBundleResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDebugBundleResponse {
    return new DeleteDebugBundleResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteDebugBundleResponse | PlainMessage<DeleteDebugBundleResponse> | undefined, b: DeleteDebugBundleResponse | PlainMessage<DeleteDebugBundleResponse> | undefined): boolean {
    return proto3.util.equals(DeleteDebugBundleResponse, a, b);
  }
}

/**
 * Request for DeleteDebugBundleFile.
 *
 * @generated from message redpanda.api.console.v1alpha1.DeleteDebugBundleFileRequest
 */
export class DeleteDebugBundleFileRequest extends Message<DeleteDebugBundleFileRequest> {
  /**
   * @generated from field: repeated redpanda.api.console.v1alpha1.DeleteDebugBundleFile files = 1;
   */
  files: DeleteDebugBundleFile[] = [];

  constructor(data?: PartialMessage<DeleteDebugBundleFileRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.DeleteDebugBundleFileRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "files", kind: "message", T: DeleteDebugBundleFile, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDebugBundleFileRequest {
    return new DeleteDebugBundleFileRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDebugBundleFileRequest {
    return new DeleteDebugBundleFileRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDebugBundleFileRequest {
    return new DeleteDebugBundleFileRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteDebugBundleFileRequest | PlainMessage<DeleteDebugBundleFileRequest> | undefined, b: DeleteDebugBundleFileRequest | PlainMessage<DeleteDebugBundleFileRequest> | undefined): boolean {
    return proto3.util.equals(DeleteDebugBundleFileRequest, a, b);
  }
}

/**
 * @generated from message redpanda.api.console.v1alpha1.DeleteDebugBundleFile
 */
export class DeleteDebugBundleFile extends Message<DeleteDebugBundleFile> {
  /**
   * @generated from field: int32 broker_id = 1;
   */
  brokerId = 0;

  /**
   * @generated from field: string filename = 2;
   */
  filename = "";

  constructor(data?: PartialMessage<DeleteDebugBundleFile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.DeleteDebugBundleFile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "broker_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDebugBundleFile {
    return new DeleteDebugBundleFile().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDebugBundleFile {
    return new DeleteDebugBundleFile().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDebugBundleFile {
    return new DeleteDebugBundleFile().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteDebugBundleFile | PlainMessage<DeleteDebugBundleFile> | undefined, b: DeleteDebugBundleFile | PlainMessage<DeleteDebugBundleFile> | undefined): boolean {
    return proto3.util.equals(DeleteDebugBundleFile, a, b);
  }
}

/**
 * Response for DeleteDebugBundleFile.
 *
 * @generated from message redpanda.api.console.v1alpha1.DeleteDebugBundleFileResponse
 */
export class DeleteDebugBundleFileResponse extends Message<DeleteDebugBundleFileResponse> {
  /**
   * @generated from field: repeated redpanda.api.console.v1alpha1.BundleError errors = 1;
   */
  errors: BundleError[] = [];

  constructor(data?: PartialMessage<DeleteDebugBundleFileResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.DeleteDebugBundleFileResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "errors", kind: "message", T: BundleError, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDebugBundleFileResponse {
    return new DeleteDebugBundleFileResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDebugBundleFileResponse {
    return new DeleteDebugBundleFileResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDebugBundleFileResponse {
    return new DeleteDebugBundleFileResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteDebugBundleFileResponse | PlainMessage<DeleteDebugBundleFileResponse> | undefined, b: DeleteDebugBundleFileResponse | PlainMessage<DeleteDebugBundleFileResponse> | undefined): boolean {
    return proto3.util.equals(DeleteDebugBundleFileResponse, a, b);
  }
}

/**
 * Error details for various responses and operations.
 *
 * @generated from message redpanda.api.console.v1alpha1.BundleError
 */
export class BundleError extends Message<BundleError> {
  /**
   * The broker ID.
   *
   * @generated from field: int32 broker_id = 1;
   */
  brokerId = 0;

  /**
   * The error code.
   *
   * @generated from field: redpanda.api.console.v1alpha1.BundleErrorCode code = 2;
   */
  code = BundleErrorCode.OK;

  /**
   * Additional information
   *
   * @generated from field: string message = 3;
   */
  message = "";

  constructor(data?: PartialMessage<BundleError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.console.v1alpha1.BundleError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "broker_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "code", kind: "enum", T: proto3.getEnumType(BundleErrorCode) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BundleError {
    return new BundleError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BundleError {
    return new BundleError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BundleError {
    return new BundleError().fromJsonString(jsonString, options);
  }

  static equals(a: BundleError | PlainMessage<BundleError> | undefined, b: BundleError | PlainMessage<BundleError> | undefined): boolean {
    return proto3.util.equals(BundleError, a, b);
  }
}

