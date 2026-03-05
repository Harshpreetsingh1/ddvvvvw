"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeysResponseMeta = void 0;
/**
 * Additional information related to api keys response.
 */
class APIKeysResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeysResponseMeta.attributeTypeMap;
    }
}
exports.APIKeysResponseMeta = APIKeysResponseMeta;
/**
 * @ignore
 */
APIKeysResponseMeta.attributeTypeMap = {
    maxAllowed: {
        baseName: "max_allowed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "APIKeysResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeysResponseMeta.js.map