"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppQueryOptions = void 0;
/**
 * Global query options that are used during the query.
 * Only supply timezone or time offset, not both. Otherwise, the query fails.
 */
class CIAppQueryOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppQueryOptions.attributeTypeMap;
    }
}
exports.CIAppQueryOptions = CIAppQueryOptions;
/**
 * @ignore
 */
CIAppQueryOptions.attributeTypeMap = {
    timeOffset: {
        baseName: "time_offset",
        type: "number",
        format: "int64",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppQueryOptions.js.map