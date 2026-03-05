"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyCreateData = void 0;
/**
 * Object used to create an API key.
 */
class APIKeyCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyCreateData.attributeTypeMap;
    }
}
exports.APIKeyCreateData = APIKeyCreateData;
/**
 * @ignore
 */
APIKeyCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "APIKeyCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "APIKeysType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeyCreateData.js.map