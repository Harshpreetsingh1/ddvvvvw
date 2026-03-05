"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTopAvgMetricsResponse = void 0;
/**
 * Response containing the number of hourly recorded custom metrics for a given organization.
 */
class UsageTopAvgMetricsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTopAvgMetricsResponse.attributeTypeMap;
    }
}
exports.UsageTopAvgMetricsResponse = UsageTopAvgMetricsResponse;
/**
 * @ignore
 */
UsageTopAvgMetricsResponse.attributeTypeMap = {
    metadata: {
        baseName: "metadata",
        type: "UsageTopAvgMetricsMetadata",
    },
    usage: {
        baseName: "usage",
        type: "Array<UsageTopAvgMetricsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageTopAvgMetricsResponse.js.map