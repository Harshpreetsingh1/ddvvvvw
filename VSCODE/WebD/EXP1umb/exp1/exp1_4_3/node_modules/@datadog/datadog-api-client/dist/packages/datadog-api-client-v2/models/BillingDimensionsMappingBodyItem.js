"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDimensionsMappingBodyItem = void 0;
/**
 * The mapping data for each billing dimension.
 */
class BillingDimensionsMappingBodyItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BillingDimensionsMappingBodyItem.attributeTypeMap;
    }
}
exports.BillingDimensionsMappingBodyItem = BillingDimensionsMappingBodyItem;
/**
 * @ignore
 */
BillingDimensionsMappingBodyItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BillingDimensionsMappingBodyItemAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ActiveBillingDimensionsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BillingDimensionsMappingBodyItem.js.map