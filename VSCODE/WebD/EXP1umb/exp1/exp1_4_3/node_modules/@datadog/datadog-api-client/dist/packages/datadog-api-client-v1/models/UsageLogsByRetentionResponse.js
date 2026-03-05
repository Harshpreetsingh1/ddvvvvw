"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageLogsByRetentionResponse = void 0;
/**
 * Response containing the indexed logs usage broken down by retention period for an organization during a given hour.
 */
class UsageLogsByRetentionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageLogsByRetentionResponse.attributeTypeMap;
    }
}
exports.UsageLogsByRetentionResponse = UsageLogsByRetentionResponse;
/**
 * @ignore
 */
UsageLogsByRetentionResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageLogsByRetentionHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageLogsByRetentionResponse.js.map