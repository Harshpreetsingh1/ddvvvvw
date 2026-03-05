"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDimensionsMappingBodyItemAttributes = void 0;
/**
 * Mapping of billing dimensions to endpoint keys.
 */
class BillingDimensionsMappingBodyItemAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BillingDimensionsMappingBodyItemAttributes.attributeTypeMap;
    }
}
exports.BillingDimensionsMappingBodyItemAttributes = BillingDimensionsMappingBodyItemAttributes;
/**
 * @ignore
 */
BillingDimensionsMappingBodyItemAttributes.attributeTypeMap = {
    endpoints: {
        baseName: "endpoints",
        type: "Array<BillingDimensionsMappingBodyItemAttributesEndpointsItems>",
    },
    inAppLabel: {
        baseName: "in_app_label",
        type: "string",
    },
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BillingDimensionsMappingBodyItemAttributes.js.map