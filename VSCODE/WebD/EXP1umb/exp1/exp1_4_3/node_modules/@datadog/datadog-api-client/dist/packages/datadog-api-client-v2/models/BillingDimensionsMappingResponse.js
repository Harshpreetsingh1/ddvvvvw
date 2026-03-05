"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDimensionsMappingResponse = void 0;
/**
 * Billing dimensions mapping response.
 */
class BillingDimensionsMappingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BillingDimensionsMappingResponse.attributeTypeMap;
    }
}
exports.BillingDimensionsMappingResponse = BillingDimensionsMappingResponse;
/**
 * @ignore
 */
BillingDimensionsMappingResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<BillingDimensionsMappingBodyItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BillingDimensionsMappingResponse.js.map