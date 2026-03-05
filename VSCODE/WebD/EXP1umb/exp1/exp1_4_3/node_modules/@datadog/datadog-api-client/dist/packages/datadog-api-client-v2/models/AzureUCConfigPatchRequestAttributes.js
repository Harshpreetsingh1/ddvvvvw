"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPatchRequestAttributes = void 0;
/**
 * Attributes for Azure config Patch Request.
 */
class AzureUCConfigPatchRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPatchRequestAttributes.attributeTypeMap;
    }
}
exports.AzureUCConfigPatchRequestAttributes = AzureUCConfigPatchRequestAttributes;
/**
 * @ignore
 */
AzureUCConfigPatchRequestAttributes.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPatchRequestAttributes.js.map