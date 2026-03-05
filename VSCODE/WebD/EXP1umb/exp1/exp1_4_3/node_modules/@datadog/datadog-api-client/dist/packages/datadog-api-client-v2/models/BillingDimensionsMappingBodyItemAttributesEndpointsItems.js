"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDimensionsMappingBodyItemAttributesEndpointsItems = void 0;
/**
 * An endpoint's keys mapped to the billing_dimension.
 */
class BillingDimensionsMappingBodyItemAttributesEndpointsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BillingDimensionsMappingBodyItemAttributesEndpointsItems.attributeTypeMap;
    }
}
exports.BillingDimensionsMappingBodyItemAttributesEndpointsItems = BillingDimensionsMappingBodyItemAttributesEndpointsItems;
/**
 * @ignore
 */
BillingDimensionsMappingBodyItemAttributesEndpointsItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    keys: {
        baseName: "keys",
        type: "Array<string>",
    },
    status: {
        baseName: "status",
        type: "BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BillingDimensionsMappingBodyItemAttributesEndpointsItems.js.map