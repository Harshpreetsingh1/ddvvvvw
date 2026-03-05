"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageAttributionResponse = void 0;
/**
 * Response containing the hourly usage attribution by tag(s).
 */
class HourlyUsageAttributionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageAttributionResponse.attributeTypeMap;
    }
}
exports.HourlyUsageAttributionResponse = HourlyUsageAttributionResponse;
/**
 * @ignore
 */
HourlyUsageAttributionResponse.attributeTypeMap = {
    metadata: {
        baseName: "metadata",
        type: "HourlyUsageAttributionMetadata",
    },
    usage: {
        baseName: "usage",
        type: "Array<HourlyUsageAttributionBody>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageAttributionResponse.js.map