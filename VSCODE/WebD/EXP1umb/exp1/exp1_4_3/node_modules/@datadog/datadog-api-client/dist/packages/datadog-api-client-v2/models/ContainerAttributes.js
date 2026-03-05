"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerAttributes = void 0;
/**
 * Attributes for a container.
 */
class ContainerAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerAttributes.attributeTypeMap;
    }
}
exports.ContainerAttributes = ContainerAttributes;
/**
 * @ignore
 */
ContainerAttributes.attributeTypeMap = {
    containerId: {
        baseName: "container_id",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    host: {
        baseName: "host",
        type: "string",
    },
    imageDigest: {
        baseName: "image_digest",
        type: "string",
    },
    imageName: {
        baseName: "image_name",
        type: "string",
    },
    imageTags: {
        baseName: "image_tags",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    startedAt: {
        baseName: "started_at",
        type: "string",
    },
    state: {
        baseName: "state",
        type: "string",
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
//# sourceMappingURL=ContainerAttributes.js.map