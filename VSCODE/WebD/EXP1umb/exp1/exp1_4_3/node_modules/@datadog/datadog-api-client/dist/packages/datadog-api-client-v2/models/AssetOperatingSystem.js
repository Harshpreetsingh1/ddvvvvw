"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetOperatingSystem = void 0;
/**
 * Asset operating system.
 */
class AssetOperatingSystem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssetOperatingSystem.attributeTypeMap;
    }
}
exports.AssetOperatingSystem = AssetOperatingSystem;
/**
 * @ignore
 */
AssetOperatingSystem.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AssetOperatingSystem.js.map