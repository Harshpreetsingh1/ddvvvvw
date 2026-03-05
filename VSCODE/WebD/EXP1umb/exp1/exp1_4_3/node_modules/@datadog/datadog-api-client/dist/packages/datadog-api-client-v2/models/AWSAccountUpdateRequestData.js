"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountUpdateRequestData = void 0;
/**
 * AWS Account Update Request data.
 */
class AWSAccountUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountUpdateRequestData.attributeTypeMap;
    }
}
exports.AWSAccountUpdateRequestData = AWSAccountUpdateRequestData;
/**
 * @ignore
 */
AWSAccountUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSAccountUpdateRequestAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AWSAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountUpdateRequestData.js.map