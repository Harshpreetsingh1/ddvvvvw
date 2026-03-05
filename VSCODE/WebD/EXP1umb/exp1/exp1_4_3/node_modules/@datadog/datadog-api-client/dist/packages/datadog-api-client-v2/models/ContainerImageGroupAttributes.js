"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageGroupAttributes = void 0;
/**
 * Attributes for a Container Image Group.
 */
class ContainerImageGroupAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageGroupAttributes.attributeTypeMap;
    }
}
exports.ContainerImageGroupAttributes = ContainerImageGroupAttributes;
/**
 * @ignore
 */
ContainerImageGroupAttributes.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
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
//# sourceMappingURL=ContainerImageGroupAttributes.js.map