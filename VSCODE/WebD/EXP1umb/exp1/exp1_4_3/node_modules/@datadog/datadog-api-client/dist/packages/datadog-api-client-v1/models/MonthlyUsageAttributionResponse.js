"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyUsageAttributionResponse = void 0;
/**
 * Response containing the monthly Usage Summary by tag(s).
 */
class MonthlyUsageAttributionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyUsageAttributionResponse.attributeTypeMap;
    }
}
exports.MonthlyUsageAttributionResponse = MonthlyUsageAttributionResponse;
/**
 * @ignore
 */
MonthlyUsageAttributionResponse.attributeTypeMap = {
    metadata: {
        baseName: "metadata",
        type: "MonthlyUsageAttributionMetadata",
    },
    usage: {
        baseName: "usage",
        type: "Array<MonthlyUsageAttributionBody>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyUsageAttributionResponse.js.map