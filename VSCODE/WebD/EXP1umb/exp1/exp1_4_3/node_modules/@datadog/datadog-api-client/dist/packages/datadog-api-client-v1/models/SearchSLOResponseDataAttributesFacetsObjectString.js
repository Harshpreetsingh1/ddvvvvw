"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponseDataAttributesFacetsObjectString = void 0;
/**
 * Facet
 */
class SearchSLOResponseDataAttributesFacetsObjectString {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponseDataAttributesFacetsObjectString.attributeTypeMap;
    }
}
exports.SearchSLOResponseDataAttributesFacetsObjectString = SearchSLOResponseDataAttributesFacetsObjectString;
/**
 * @ignore
 */
SearchSLOResponseDataAttributesFacetsObjectString.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=SearchSLOResponseDataAttributesFacetsObjectString.js.map