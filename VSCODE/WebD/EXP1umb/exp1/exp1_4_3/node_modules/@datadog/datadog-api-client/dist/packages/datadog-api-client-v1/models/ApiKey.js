"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKey = void 0;
/**
 * Datadog API key.
 */
class ApiKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApiKey.attributeTypeMap;
    }
}
exports.ApiKey = ApiKey;
/**
 * @ignore
 */
ApiKey.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "string",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApiKey.js.map