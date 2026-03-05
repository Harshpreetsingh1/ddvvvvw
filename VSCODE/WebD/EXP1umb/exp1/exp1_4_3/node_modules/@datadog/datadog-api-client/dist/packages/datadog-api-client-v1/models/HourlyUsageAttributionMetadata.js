"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageAttributionMetadata = void 0;
/**
 * The object containing document metadata.
 */
class HourlyUsageAttributionMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageAttributionMetadata.attributeTypeMap;
    }
}
exports.HourlyUsageAttributionMetadata = HourlyUsageAttributionMetadata;
/**
 * @ignore
 */
HourlyUsageAttributionMetadata.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "HourlyUsageAttributionPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageAttributionMetadata.js.map