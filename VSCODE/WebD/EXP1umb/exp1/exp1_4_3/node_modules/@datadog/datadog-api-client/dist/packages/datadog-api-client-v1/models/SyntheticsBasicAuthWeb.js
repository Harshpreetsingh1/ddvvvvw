"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBasicAuthWeb = void 0;
/**
 * Object to handle basic authentication when performing the test.
 */
class SyntheticsBasicAuthWeb {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBasicAuthWeb.attributeTypeMap;
    }
}
exports.SyntheticsBasicAuthWeb = SyntheticsBasicAuthWeb;
/**
 * @ignore
 */
SyntheticsBasicAuthWeb.attributeTypeMap = {
    password: {
        baseName: "password",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SyntheticsBasicAuthWebType",
    },
    username: {
        baseName: "username",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBasicAuthWeb.js.map