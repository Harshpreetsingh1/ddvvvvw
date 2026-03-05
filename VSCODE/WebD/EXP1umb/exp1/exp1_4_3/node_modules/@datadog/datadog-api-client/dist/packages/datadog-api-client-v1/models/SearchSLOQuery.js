"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOQuery = void 0;
/**
 * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
 * to be used because this will sum up all request counts instead of averaging them, or taking the max or
 * min of all of those requests.
 */
class SearchSLOQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOQuery.attributeTypeMap;
    }
}
exports.SearchSLOQuery = SearchSLOQuery;
/**
 * @ignore
 */
SearchSLOQuery.attributeTypeMap = {
    denominator: {
        baseName: "denominator",
        type: "string",
    },
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    numerator: {
        baseName: "numerator",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOQuery.js.map