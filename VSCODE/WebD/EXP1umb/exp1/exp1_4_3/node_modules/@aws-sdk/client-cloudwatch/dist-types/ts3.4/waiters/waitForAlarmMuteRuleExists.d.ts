import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudWatchClient } from "../CloudWatchClient";
import { GetAlarmMuteRuleCommandInput } from "../commands/GetAlarmMuteRuleCommand";
export declare const waitForAlarmMuteRuleExists: (
  params: WaiterConfiguration<CloudWatchClient>,
  input: GetAlarmMuteRuleCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilAlarmMuteRuleExists: (
  params: WaiterConfiguration<CloudWatchClient>,
  input: GetAlarmMuteRuleCommandInput
) => Promise<WaiterResult>;
