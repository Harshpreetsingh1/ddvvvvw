"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCurConfigResponseData = void 0;
/**
 * The definition of `AwsCurConfigResponseData` object.
 */
class AwsCurConfigResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCurConfigResponseData.attributeTypeMap;
    }
}
exports.AwsCurConfigResponseData = AwsCurConfigResponseData;
/**
 * @ignore
 */
AwsCurConfigResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AwsCurConfigResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AwsCurConfigResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCurConfigResponseData.js.map