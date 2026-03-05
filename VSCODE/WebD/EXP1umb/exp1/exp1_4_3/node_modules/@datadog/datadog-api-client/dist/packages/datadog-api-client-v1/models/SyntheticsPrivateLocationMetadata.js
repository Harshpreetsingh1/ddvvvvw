"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPrivateLocationMetadata = void 0;
/**
 * Object containing metadata about the private location.
 */
class SyntheticsPrivateLocationMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationMetadata.attributeTypeMap;
    }
}
exports.SyntheticsPrivateLocationMetadata = SyntheticsPrivateLocationMetadata;
/**
 * @ignore
 */
SyntheticsPrivateLocationMetadata.attributeTypeMap = {
    restrictedRoles: {
        baseName: "restricted_roles",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPrivateLocationMetadata.js.map