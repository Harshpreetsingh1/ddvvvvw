"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetWithEntries = void 0;
/**
 * The definition of the `BudgetWithEntries` object.
 */
class BudgetWithEntries {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetWithEntries.attributeTypeMap;
    }
}
exports.BudgetWithEntries = BudgetWithEntries;
/**
 * @ignore
 */
BudgetWithEntries.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "BudgetWithEntriesData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetWithEntries.js.map