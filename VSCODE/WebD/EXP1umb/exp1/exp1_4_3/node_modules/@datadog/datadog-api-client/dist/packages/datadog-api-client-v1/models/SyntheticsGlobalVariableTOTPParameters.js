"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGlobalVariableTOTPParameters = void 0;
/**
 * Parameters for the TOTP/MFA variable
 */
class SyntheticsGlobalVariableTOTPParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGlobalVariableTOTPParameters.attributeTypeMap;
    }
}
exports.SyntheticsGlobalVariableTOTPParameters = SyntheticsGlobalVariableTOTPParameters;
/**
 * @ignore
 */
SyntheticsGlobalVariableTOTPParameters.attributeTypeMap = {
    digits: {
        baseName: "digits",
        type: "number",
        format: "int32",
    },
    refreshInterval: {
        baseName: "refresh_interval",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGlobalVariableTOTPParameters.js.map