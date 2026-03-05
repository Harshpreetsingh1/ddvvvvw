import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { PutBearerTokenAuthenticationRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutBearerTokenAuthenticationCommandInput
  extends PutBearerTokenAuthenticationRequest {}
export interface PutBearerTokenAuthenticationCommandOutput
  extends __MetadataBearer {}
declare const PutBearerTokenAuthenticationCommand_base: {
  new (
    input: PutBearerTokenAuthenticationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutBearerTokenAuthenticationCommandInput,
    PutBearerTokenAuthenticationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutBearerTokenAuthenticationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutBearerTokenAuthenticationCommandInput,
    PutBearerTokenAuthenticationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutBearerTokenAuthenticationCommand extends PutBearerTokenAuthenticationCommand_base {
  protected static __types: {
    api: {
      input: PutBearerTokenAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: PutBearerTokenAuthenticationCommandInput;
      output: PutBearerTokenAuthenticationCommandOutput;
    };
  };
}
