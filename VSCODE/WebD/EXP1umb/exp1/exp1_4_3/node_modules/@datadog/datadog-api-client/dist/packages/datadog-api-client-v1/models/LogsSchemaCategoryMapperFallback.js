"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaCategoryMapperFallback = void 0;
/**
 * Used to override hardcoded category values with a value pulled from a source attribute on the log.
 */
class LogsSchemaCategoryMapperFallback {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaCategoryMapperFallback.attributeTypeMap;
    }
}
exports.LogsSchemaCategoryMapperFallback = LogsSchemaCategoryMapperFallback;
/**
 * @ignore
 */
LogsSchemaCategoryMapperFallback.attributeTypeMap = {
    sources: {
        baseName: "sources",
        type: "{ [key: string]: Array<string>; }",
    },
    values: {
        baseName: "values",
        type: "{ [key: string]: string; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsSchemaCategoryMapperFallback.js.map