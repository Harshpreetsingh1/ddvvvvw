"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageIngestedSpansResponse = void 0;
/**
 * Response containing the ingested spans usage for each hour for a given organization.
 */
class UsageIngestedSpansResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageIngestedSpansResponse.attributeTypeMap;
    }
}
exports.UsageIngestedSpansResponse = UsageIngestedSpansResponse;
/**
 * @ignore
 */
UsageIngestedSpansResponse.attributeTypeMap = {
    usage: {
        baseName: "usage",
        type: "Array<UsageIngestedSpansHour>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageIngestedSpansResponse.js.map