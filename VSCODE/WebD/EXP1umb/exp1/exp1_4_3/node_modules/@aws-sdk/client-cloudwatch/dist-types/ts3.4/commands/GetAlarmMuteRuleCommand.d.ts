import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import {
  GetAlarmMuteRuleInput,
  GetAlarmMuteRuleOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetAlarmMuteRuleCommandInput extends GetAlarmMuteRuleInput {}
export interface GetAlarmMuteRuleCommandOutput
  extends GetAlarmMuteRuleOutput,
    __MetadataBearer {}
declare const GetAlarmMuteRuleCommand_base: {
  new (
    input: GetAlarmMuteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAlarmMuteRuleCommandInput,
    GetAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetAlarmMuteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetAlarmMuteRuleCommandInput,
    GetAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetAlarmMuteRuleCommand extends GetAlarmMuteRuleCommand_base {
  protected static __types: {
    api: {
      input: GetAlarmMuteRuleInput;
      output: GetAlarmMuteRuleOutput;
    };
    sdk: {
      input: GetAlarmMuteRuleCommandInput;
      output: GetAlarmMuteRuleCommandOutput;
    };
  };
}
