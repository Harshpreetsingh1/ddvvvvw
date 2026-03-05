"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLogsResponse = void 0;
/**
 * Response containing the number of logs for each hour.
 */
class UsageLogsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLogsResponse.attributeTypeMap;
    }
}
exports.UsageLogsResponse = UsageLogsResponse;
/**
 * @ignore
 */
UsageLogsResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageLogsHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLogsResponse.js.map