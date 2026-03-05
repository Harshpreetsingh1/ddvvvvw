"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogQueryDefinitionSearch = void 0;
/**
 * The query being made on the logs.
 */
class LogQueryDefinitionSearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogQueryDefinitionSearch.attributeTypeMap;
    }
}
exports.LogQueryDefinitionSearch = LogQueryDefinitionSearch;
/**
 * @ignore
 */
LogQueryDefinitionSearch.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogQueryDefinitionSearch.js.map