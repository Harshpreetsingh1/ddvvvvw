"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveBillingDimensionsBody = void 0;
/**
 * Active billing dimensions data.
 */
class ActiveBillingDimensionsBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActiveBillingDimensionsBody.attributeTypeMap;
    }
}
exports.ActiveBillingDimensionsBody = ActiveBillingDimensionsBody;
/**
 * @ignore
 */
ActiveBillingDimensionsBody.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ActiveBillingDimensionsAttributes",
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
//# sourceMappingURL=ActiveBillingDimensionsBody.js.map