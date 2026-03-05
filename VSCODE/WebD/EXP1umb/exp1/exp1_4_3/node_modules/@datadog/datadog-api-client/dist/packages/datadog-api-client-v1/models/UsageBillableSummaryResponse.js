"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageBillableSummaryResponse = void 0;
/**
 * Response with monthly summary of data billed by Datadog.
 */
class UsageBillableSummaryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageBillableSummaryResponse.attributeTypeMap;
    }
}
exports.UsageBillableSummaryResponse = UsageBillableSummaryResponse;
/**
 * @ignore
 */
UsageBillableSummaryResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageBillableSummaryHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageBillableSummaryResponse.js.map