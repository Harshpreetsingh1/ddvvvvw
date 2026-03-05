"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageFlavor = void 0;
/**
 * Container Image breakdown by supported platform.
 */
class ContainerImageFlavor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageFlavor.attributeTypeMap;
    }
}
exports.ContainerImageFlavor = ContainerImageFlavor;
/**
 * @ignore
 */
ContainerImageFlavor.attributeTypeMap = {
    builtAt: {
        baseName: "built_at",
        type: "string",
    },
    osArchitecture: {
        baseName: "os_architecture",
        type: "string",
    },
    osName: {
        baseName: "os_name",
        type: "string",
    },
    osVersion: {
        baseName: "os_version",
        type: "string",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageFlavor.js.map