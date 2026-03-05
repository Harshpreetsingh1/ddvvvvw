"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImagesResponseLinks = void 0;
/**
 * Pagination links.
 */
class ContainerImagesResponseLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImagesResponseLinks.attributeTypeMap;
    }
}
exports.ContainerImagesResponseLinks = ContainerImagesResponseLinks;
/**
 * @ignore
 */
ContainerImagesResponseLinks.attributeTypeMap = {
    first: {
        baseName: "first",
        type: "string",
    },
    last: {
        baseName: "last",
        type: "string",
    },
    next: {
        baseName: "next",
        type: "string",
    },
    prev: {
        baseName: "prev",
        type: "string",
    },
    self: {
        baseName: "self",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImagesResponseLinks.js.map