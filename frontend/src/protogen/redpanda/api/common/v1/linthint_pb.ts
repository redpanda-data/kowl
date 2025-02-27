// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/common/v1/linthint.proto (package redpanda.api.common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * LintHint is a generic linting hint.
 *
 * @generated from message redpanda.api.common.v1.LintHint
 */
export class LintHint extends Message<LintHint> {
  /**
   * Line number of the lint.
   *
   * @generated from field: int32 line = 1;
   */
  line = 0;

  /**
   * Column number of the lint.
   *
   * @generated from field: int32 column = 2;
   */
  column = 0;

  /**
   * The hint message.
   *
   * @generated from field: string hint = 3;
   */
  hint = "";

  /**
   * Optional lint type or enum.
   *
   * @generated from field: string lint_type = 4;
   */
  lintType = "";

  constructor(data?: PartialMessage<LintHint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.common.v1.LintHint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "line", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "column", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "hint", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "lint_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LintHint {
    return new LintHint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LintHint {
    return new LintHint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LintHint {
    return new LintHint().fromJsonString(jsonString, options);
  }

  static equals(a: LintHint | PlainMessage<LintHint> | undefined, b: LintHint | PlainMessage<LintHint> | undefined): boolean {
    return proto3.util.equals(LintHint, a, b);
  }
}

