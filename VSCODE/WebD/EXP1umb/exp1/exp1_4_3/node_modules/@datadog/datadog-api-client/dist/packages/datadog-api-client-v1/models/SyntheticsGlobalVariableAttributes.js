"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGlobalVariableAttributes = void 0;
/**
 * Attributes of the global variable.
 */
class SyntheticsGlobalVariableAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGlobalVariableAttributes.attributeTypeMap;
    }
}
exports.SyntheticsGlobalVariableAttributes = SyntheticsGlobalVariableAttributes;
/**
 * @ignore
 */
SyntheticsGlobalVariableAttributes.attributeTypeMap = {
    restrictedRoles: {
        baseName: "restricted_roles",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGlobalVariableAttributes.js.map