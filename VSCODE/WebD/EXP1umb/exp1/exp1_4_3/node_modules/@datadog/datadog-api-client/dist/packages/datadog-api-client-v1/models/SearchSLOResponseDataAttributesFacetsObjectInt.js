"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponseDataAttributesFacetsObjectInt = void 0;
/**
 * Facet
 */
class SearchSLOResponseDataAttributesFacetsObjectInt {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponseDataAttributesFacetsObjectInt.attributeTypeMap;
    }
}
exports.SearchSLOResponseDataAttributesFacetsObjectInt = SearchSLOResponseDataAttributesFacetsObjectInt;
/**
 * @ignore
 */
SearchSLOResponseDataAttributesFacetsObjectInt.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOResponseDataAttributesFacetsObjectInt.js.map