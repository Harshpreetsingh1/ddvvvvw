import { Paginator } from "@smithy/types";
import {
  ListAlarmMuteRulesCommandInput,
  ListAlarmMuteRulesCommandOutput,
} from "../commands/ListAlarmMuteRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
export declare const paginateListAlarmMuteRules: (
  config: CloudWatchPaginationConfiguration,
  input: ListAlarmMuteRulesCommandInput,
  ...rest: any[]
) => Paginator<ListAlarmMuteRulesCommandOutput>;
