"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountCreateRequestData = void 0;
/**
 * AWS Account Create Request data.
 */
class AWSAccountCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountCreateRequestData.attributeTypeMap;
    }
}
exports.AWSAccountCreateRequestData = AWSAccountCreateRequestData;
/**
 * @ignore
 */
AWSAccountCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSAccountCreateRequestAttributes",
        required: true,
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
//# sourceMappingURL=AWSAccountCreateRequestData.js.map