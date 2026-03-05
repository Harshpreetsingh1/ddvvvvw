import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAlarmMuteRule$ } from "../schemas/schemas_0";
export { $Command };
export class GetAlarmMuteRuleCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("GraniteServiceVersion20100801", "GetAlarmMuteRule", {})
    .n("CloudWatchClient", "GetAlarmMuteRuleCommand")
    .sc(GetAlarmMuteRule$)
    .build() {
}
