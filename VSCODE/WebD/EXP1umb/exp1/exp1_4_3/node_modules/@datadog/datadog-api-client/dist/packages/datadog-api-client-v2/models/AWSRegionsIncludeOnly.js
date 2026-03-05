"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSRegionsIncludeOnly = void 0;
/**
 * Include only these regions.
 */
class AWSRegionsIncludeOnly {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSRegionsIncludeOnly.attributeTypeMap;
    }
}
exports.AWSRegionsIncludeOnly = AWSRegionsIncludeOnly;
/**
 * @ignore
 */
AWSRegionsIncludeOnly.attributeTypeMap = {
    includeOnly: {
        baseName: "include_only",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSRegionsIncludeOnly.js.map