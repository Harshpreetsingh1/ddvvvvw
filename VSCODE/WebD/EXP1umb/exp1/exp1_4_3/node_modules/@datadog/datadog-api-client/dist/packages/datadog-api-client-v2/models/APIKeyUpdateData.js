"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyUpdateData = void 0;
/**
 * Object used to update an API key.
 */
class APIKeyUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyUpdateData.attributeTypeMap;
    }
}
exports.APIKeyUpdateData = APIKeyUpdateData;
/**
 * @ignore
 */
APIKeyUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "APIKeyUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=APIKeyUpdateData.js.map