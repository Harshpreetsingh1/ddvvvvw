"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMetaAttributes = void 0;
/**
 * Object describing meta attributes of response.
 */
class ResponseMetaAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResponseMetaAttributes.attributeTypeMap;
    }
}
exports.ResponseMetaAttributes = ResponseMetaAttributes;
/**
 * @ignore
 */
ResponseMetaAttributes.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "Pagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResponseMetaAttributes.js.map