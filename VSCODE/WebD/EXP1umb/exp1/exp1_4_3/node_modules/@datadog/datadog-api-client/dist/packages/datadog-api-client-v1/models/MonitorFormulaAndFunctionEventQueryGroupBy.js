"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionEventQueryGroupBy = void 0;
/**
 * List of objects used to group by.
 */
class MonitorFormulaAndFunctionEventQueryGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionEventQueryGroupBy.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionEventQueryGroupBy = MonitorFormulaAndFunctionEventQueryGroupBy;
/**
 * @ignore
 */
MonitorFormulaAndFunctionEventQueryGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    sort: {
        baseName: "sort",
        type: "MonitorFormulaAndFunctionEventQueryGroupBySort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorFormulaAndFunctionEventQueryGroupBy.js.map