"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetWithEntriesDataAttributesEntriesItems = void 0;
class BudgetWithEntriesDataAttributesEntriesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetWithEntriesDataAttributesEntriesItems.attributeTypeMap;
    }
}
exports.BudgetWithEntriesDataAttributesEntriesItems = BudgetWithEntriesDataAttributesEntriesItems;
/**
 * @ignore
 */
BudgetWithEntriesDataAttributesEntriesItems.attributeTypeMap = {
    amount: {
        baseName: "amount",
        type: "number",
        format: "double",
    },
    month: {
        baseName: "month",
        type: "number",
        format: "int64",
    },
    tagFilters: {
        baseName: "tag_filters",
        type: "Array<BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetWithEntriesDataAttributesEntriesItems.js.map