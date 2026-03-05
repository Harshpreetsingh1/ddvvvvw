"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourceRequestAttributes = void 0;
/**
 * Attributes object for updating a Confluent resource.
 */
class ConfluentResourceRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourceRequestAttributes.attributeTypeMap;
    }
}
exports.ConfluentResourceRequestAttributes = ConfluentResourceRequestAttributes;
/**
 * @ignore
 */
ConfluentResourceRequestAttributes.attributeTypeMap = {
    enableCustomMetrics: {
        baseName: "enable_custom_metrics",
        type: "boolean",
    },
    resourceType: {
        baseName: "resource_type",
        type: "string",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConfluentResourceRequestAttributes.js.map