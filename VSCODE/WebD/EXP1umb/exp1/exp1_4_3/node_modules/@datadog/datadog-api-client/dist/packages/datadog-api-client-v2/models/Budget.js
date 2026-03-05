"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
/**
 * A budget.
 */
class Budget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Budget.attributeTypeMap;
    }
}
exports.Budget = Budget;
/**
 * @ignore
 */
Budget.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BudgetAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Budget.js.map