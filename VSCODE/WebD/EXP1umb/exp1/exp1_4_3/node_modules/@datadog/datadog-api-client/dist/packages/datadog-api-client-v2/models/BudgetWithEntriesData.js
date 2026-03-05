"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetWithEntriesData = void 0;
/**
 * A budget and all its entries.
 */
class BudgetWithEntriesData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetWithEntriesData.attributeTypeMap;
    }
}
exports.BudgetWithEntriesData = BudgetWithEntriesData;
/**
 * @ignore
 */
BudgetWithEntriesData.attributeTypeMap = {
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
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetWithEntriesData.js.map