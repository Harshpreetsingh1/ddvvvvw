"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGlobalVariableOptions = void 0;
/**
 * Options for the Global Variable for MFA.
 */
class SyntheticsGlobalVariableOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGlobalVariableOptions.attributeTypeMap;
    }
}
exports.SyntheticsGlobalVariableOptions = SyntheticsGlobalVariableOptions;
/**
 * @ignore
 */
SyntheticsGlobalVariableOptions.attributeTypeMap = {
    totpParameters: {
        baseName: "totp_parameters",
        type: "SyntheticsGlobalVariableTOTPParameters",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGlobalVariableOptions.js.map