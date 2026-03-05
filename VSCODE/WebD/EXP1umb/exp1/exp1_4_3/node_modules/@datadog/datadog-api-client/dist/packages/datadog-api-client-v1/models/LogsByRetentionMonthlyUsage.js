"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsByRetentionMonthlyUsage = void 0;
/**
 * Object containing a summary of indexed logs usage by retention period for a single month.
 */
class LogsByRetentionMonthlyUsage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsByRetentionMonthlyUsage.attributeTypeMap;
    }
}
exports.LogsByRetentionMonthlyUsage = LogsByRetentionMonthlyUsage;
/**
 * @ignore
 */
LogsByRetentionMonthlyUsage.attributeTypeMap = {
    date: {
        baseName: "date",
        type: "Date",
        format: "date-time",
    },
    usage: {
        baseName: "usage",
        type: "Array<LogsRetentionSumUsage>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsByRetentionMonthlyUsage.js.map