"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionEventQueryDefinitionSearch = void 0;
/**
 * Search options.
 */
class MonitorFormulaAndFunctionEventQueryDefinitionSearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionEventQueryDefinitionSearch.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionEventQueryDefinitionSearch = MonitorFormulaAndFunctionEventQueryDefinitionSearch;
/**
 * @ignore
 */
MonitorFormulaAndFunctionEventQueryDefinitionSearch.attributeTypeMap = {
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
//# sourceMappingURL=MonitorFormulaAndFunctionEventQueryDefinitionSearch.js.map