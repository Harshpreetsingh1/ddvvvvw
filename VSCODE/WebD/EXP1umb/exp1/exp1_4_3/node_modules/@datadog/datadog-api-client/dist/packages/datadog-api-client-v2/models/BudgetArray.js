"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetArray = void 0;
/**
 * An array of budgets.
 */
class BudgetArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetArray.attributeTypeMap;
    }
}
exports.BudgetArray = BudgetArray;
/**
 * @ignore
 */
BudgetArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Budget>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetArray.js.map