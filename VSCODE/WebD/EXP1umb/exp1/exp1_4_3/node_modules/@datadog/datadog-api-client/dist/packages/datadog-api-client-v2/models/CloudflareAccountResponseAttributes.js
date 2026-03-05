"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountResponseAttributes = void 0;
/**
 * Attributes object of a Cloudflare account.
 */
class CloudflareAccountResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountResponseAttributes.attributeTypeMap;
    }
}
exports.CloudflareAccountResponseAttributes = CloudflareAccountResponseAttributes;
/**
 * @ignore
 */
CloudflareAccountResponseAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    resources: {
        baseName: "resources",
        type: "Array<string>",
    },
    zones: {
        baseName: "zones",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountResponseAttributes.js.map