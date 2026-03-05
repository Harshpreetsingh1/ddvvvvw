"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfluentResourceResponseAttributes = void 0;
/**
 * Model representation of a Confluent Cloud resource.
 */
class ConfluentResourceResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConfluentResourceResponseAttributes.attributeTypeMap;
    }
}
exports.ConfluentResourceResponseAttributes = ConfluentResourceResponseAttributes;
/**
 * @ignore
 */
ConfluentResourceResponseAttributes.attributeTypeMap = {
    enableCustomMetrics: {
        baseName: "enable_custom_metrics",
        type: "boolean",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=ConfluentResourceResponseAttributes.js.map