import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import { PutAlarmMuteRuleInput } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface PutAlarmMuteRuleCommandInput extends PutAlarmMuteRuleInput {}
export interface PutAlarmMuteRuleCommandOutput extends __MetadataBearer {}
declare const PutAlarmMuteRuleCommand_base: {
  new (
    input: PutAlarmMuteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutAlarmMuteRuleCommandInput,
    PutAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutAlarmMuteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    PutAlarmMuteRuleCommandInput,
    PutAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class PutAlarmMuteRuleCommand extends PutAlarmMuteRuleCommand_base {
  protected static __types: {
    api: {
      input: PutAlarmMuteRuleInput;
      output: {};
    };
    sdk: {
      input: PutAlarmMuteRuleCommandInput;
      output: PutAlarmMuteRuleCommandOutput;
    };
  };
}
