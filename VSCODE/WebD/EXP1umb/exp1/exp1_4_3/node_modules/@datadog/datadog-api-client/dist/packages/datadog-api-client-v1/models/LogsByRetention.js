"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsByRetention = void 0;
/**
 * Object containing logs usage data broken down by retention period.
 */
class LogsByRetention {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsByRetention.attributeTypeMap;
    }
}
exports.LogsByRetention = LogsByRetention;
/**
 * @ignore
 */
LogsByRetention.attributeTypeMap = {
    orgs: {
        baseName: "orgs",
        type: "LogsByRetentionOrgs",
    },
    usage: {
        baseName: "usage",
        type: "Array<LogsRetentionAggSumUsage>",
    },
    usageByMonth: {
        baseName: "usage_by_month",
        type: "LogsByRetentionMonthlyUsage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsByRetention.js.map