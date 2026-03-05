"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAnalyzedLogsResponse = void 0;
/**
 * A response containing the number of analyzed logs for each hour for a given organization.
 */
class UsageAnalyzedLogsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAnalyzedLogsResponse.attributeTypeMap;
    }
}
exports.UsageAnalyzedLogsResponse = UsageAnalyzedLogsResponse;
/**
 * @ignore
 */
UsageAnalyzedLogsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageAnalyzedLogsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageAnalyzedLogsResponse.js.map