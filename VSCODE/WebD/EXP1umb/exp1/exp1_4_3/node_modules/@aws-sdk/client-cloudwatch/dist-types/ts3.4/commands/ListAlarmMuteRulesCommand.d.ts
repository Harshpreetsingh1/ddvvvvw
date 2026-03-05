import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import {
  ListAlarmMuteRulesInput,
  ListAlarmMuteRulesOutput,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListAlarmMuteRulesCommandInput
  extends ListAlarmMuteRulesInput {}
export interface ListAlarmMuteRulesCommandOutput
  extends ListAlarmMuteRulesOutput,
    __MetadataBearer {}
declare const ListAlarmMuteRulesCommand_base: {
  new (
    input: ListAlarmMuteRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListAlarmMuteRulesCommandInput,
    ListAlarmMuteRulesCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListAlarmMuteRulesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListAlarmMuteRulesCommandInput,
    ListAlarmMuteRulesCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListAlarmMuteRulesCommand extends ListAlarmMuteRulesCommand_base {
  protected static __types: {
    api: {
      input: ListAlarmMuteRulesInput;
      output: ListAlarmMuteRulesOutput;
    };
    sdk: {
      input: ListAlarmMuteRulesCommandInput;
      output: ListAlarmMuteRulesCommandOutput;
    };
  };
}
