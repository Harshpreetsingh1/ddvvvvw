import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudWatchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchClient";
import { DeleteAlarmMuteRuleInput } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteAlarmMuteRuleCommandInput
  extends DeleteAlarmMuteRuleInput {}
export interface DeleteAlarmMuteRuleCommandOutput extends __MetadataBearer {}
declare const DeleteAlarmMuteRuleCommand_base: {
  new (
    input: DeleteAlarmMuteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAlarmMuteRuleCommandInput,
    DeleteAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteAlarmMuteRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteAlarmMuteRuleCommandInput,
    DeleteAlarmMuteRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteAlarmMuteRuleCommand extends DeleteAlarmMuteRuleCommand_base {
  protected static __types: {
    api: {
      input: DeleteAlarmMuteRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteAlarmMuteRuleCommandInput;
      output: DeleteAlarmMuteRuleCommandOutput;
    };
  };
}
