"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetVersion = void 0;
/**
 * Asset version.
 */
class AssetVersion {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssetVersion.attributeTypeMap;
    }
}
exports.AssetVersion = AssetVersion;
/**
 * @ignore
 */
AssetVersion.attributeTypeMap = {
    first: {
        baseName: "first",
        type: "string",
    },
    last: {
        baseName: "last",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AssetVersion.js.map