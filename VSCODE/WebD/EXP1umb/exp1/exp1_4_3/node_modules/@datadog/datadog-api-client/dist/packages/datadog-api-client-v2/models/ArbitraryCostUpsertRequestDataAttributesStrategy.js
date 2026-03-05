"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryCostUpsertRequestDataAttributesStrategy = void 0;
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategy` object.
 */
class ArbitraryCostUpsertRequestDataAttributesStrategy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryCostUpsertRequestDataAttributesStrategy.attributeTypeMap;
    }
}
exports.ArbitraryCostUpsertRequestDataAttributesStrategy = ArbitraryCostUpsertRequestDataAttributesStrategy;
/**
 * @ignore
 */
ArbitraryCostUpsertRequestDataAttributesStrategy.attributeTypeMap = {
    allocatedBy: {
        baseName: "allocated_by",
        type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems>",
    },
    allocatedByFilters: {
        baseName: "allocated_by_filters",
        type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems>",
    },
    allocatedByTagKeys: {
        baseName: "allocated_by_tag_keys",
        type: "Array<string>",
    },
    basedOnCosts: {
        baseName: "based_on_costs",
        type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems>",
    },
    basedOnTimeseries: {
        baseName: "based_on_timeseries",
        type: "{ [key: string]: any; }",
    },
    evaluateGroupedByFilters: {
        baseName: "evaluate_grouped_by_filters",
        type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems>",
    },
    evaluateGroupedByTagKeys: {
        baseName: "evaluate_grouped_by_tag_keys",
        type: "Array<string>",
    },
    granularity: {
        baseName: "granularity",
        type: "string",
    },
    method: {
        baseName: "method",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryCostUpsertRequestDataAttributesStrategy.js.map