"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSRegionsIncludeAll = void 0;
/**
 * Include all regions. Defaults to `true`.
 */
class AWSRegionsIncludeAll {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSRegionsIncludeAll.attributeTypeMap;
    }
}
exports.AWSRegionsIncludeAll = AWSRegionsIncludeAll;
/**
 * @ignore
 */
AWSRegionsIncludeAll.attributeTypeMap = {
    includeAll: {
        baseName: "include_all",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSRegionsIncludeAll.js.map