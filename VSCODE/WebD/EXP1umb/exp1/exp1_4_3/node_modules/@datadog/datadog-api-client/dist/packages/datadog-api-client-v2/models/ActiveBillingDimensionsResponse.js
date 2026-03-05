"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveBillingDimensionsResponse = void 0;
/**
 * Active billing dimensions response.
 */
class ActiveBillingDimensionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActiveBillingDimensionsResponse.attributeTypeMap;
    }
}
exports.ActiveBillingDimensionsResponse = ActiveBillingDimensionsResponse;
/**
 * @ignore
 */
ActiveBillingDimensionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ActiveBillingDimensionsBody",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActiveBillingDimensionsResponse.js.map