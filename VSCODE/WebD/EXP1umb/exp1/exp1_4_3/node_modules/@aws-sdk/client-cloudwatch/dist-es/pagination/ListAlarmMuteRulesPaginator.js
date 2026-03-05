import { createPaginator } from "@smithy/core";
import { CloudWatchClient } from "../CloudWatchClient";
import { ListAlarmMuteRulesCommand, } from "../commands/ListAlarmMuteRulesCommand";
export const paginateListAlarmMuteRules = createPaginator(CloudWatchClient, ListAlarmMuteRulesCommand, "NextToken", "NextToken", "MaxRecords");
