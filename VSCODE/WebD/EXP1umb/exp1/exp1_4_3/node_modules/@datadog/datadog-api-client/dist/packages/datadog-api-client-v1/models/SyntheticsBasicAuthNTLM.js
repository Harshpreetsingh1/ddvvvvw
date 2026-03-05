"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBasicAuthNTLM = void 0;
/**
 * Object to handle `NTLM` authentication when performing the test.
 */
class SyntheticsBasicAuthNTLM {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBasicAuthNTLM.attributeTypeMap;
    }
}
exports.SyntheticsBasicAuthNTLM = SyntheticsBasicAuthNTLM;
/**
 * @ignore
 */
SyntheticsBasicAuthNTLM.attributeTypeMap = {
    domain: {
        baseName: "domain",
        type: "string",
    },
    password: {
        baseName: "password",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SyntheticsBasicAuthNTLMType",
        required: true,
    },
    username: {
        baseName: "username",
        type: "string",
    },
    workstation: {
        baseName: "workstation",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBasicAuthNTLM.js.map