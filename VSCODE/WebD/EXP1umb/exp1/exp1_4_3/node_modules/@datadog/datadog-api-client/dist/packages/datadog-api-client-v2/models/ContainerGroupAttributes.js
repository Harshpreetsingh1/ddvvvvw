"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerGroupAttributes = void 0;
/**
 * Attributes for a container group.
 */
class ContainerGroupAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerGroupAttributes.attributeTypeMap;
    }
}
exports.ContainerGroupAttributes = ContainerGroupAttributes;
/**
 * @ignore
 */
ContainerGroupAttributes.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    tags: {
        baseName: "tags",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerGroupAttributes.js.map