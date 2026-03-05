"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetAttributes = void 0;
/**
 * The attributes of a budget.
 */
class BudgetAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BudgetAttributes.attributeTypeMap;
    }
}
exports.BudgetAttributes = BudgetAttributes;
/**
 * @ignore
 */
BudgetAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "number",
        format: "int64",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    endMonth: {
        baseName: "end_month",
        type: "number",
        format: "int64",
    },
    entries: {
        baseName: "entries",
        type: "Array<BudgetWithEntriesDataAttributesEntriesItems>",
    },
    metricsQuery: {
        baseName: "metrics_query",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        format: "int64",
    },
    startMonth: {
        baseName: "start_month",
        type: "number",
        format: "int64",
    },
    totalAmount: {
        baseName: "total_amount",
        type: "number",
        format: "double",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "number",
        format: "int64",
    },
    updatedBy: {
        baseName: "updated_by",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BudgetAttributes.js.map