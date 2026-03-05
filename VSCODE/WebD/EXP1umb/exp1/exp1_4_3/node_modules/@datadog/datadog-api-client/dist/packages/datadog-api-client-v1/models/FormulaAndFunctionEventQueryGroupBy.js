"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionEventQueryGroupBy = void 0;
/**
 * List of objects used to group by.
 */
class FormulaAndFunctionEventQueryGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryGroupBy.attributeTypeMap;
    }
}
exports.FormulaAndFunctionEventQueryGroupBy = FormulaAndFunctionEventQueryGroupBy;
/**
 * @ignore
 */
FormulaAndFunctionEventQueryGroupBy.attributeTypeMap = {
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
        type: "FormulaAndFunctionEventQueryGroupBySort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionEventQueryGroupBy.js.map