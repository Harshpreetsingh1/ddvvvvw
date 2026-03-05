"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyUsageAttributionMetadata = void 0;
/**
 * The object containing document metadata.
 */
class MonthlyUsageAttributionMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyUsageAttributionMetadata.attributeTypeMap;
    }
}
exports.MonthlyUsageAttributionMetadata = MonthlyUsageAttributionMetadata;
/**
 * @ignore
 */
MonthlyUsageAttributionMetadata.attributeTypeMap = {
    aggregates: {
        baseName: "aggregates",
        type: "Array<UsageAttributionAggregatesBody>",
    },
    pagination: {
        baseName: "pagination",
        type: "MonthlyUsageAttributionPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyUsageAttributionMetadata.js.map