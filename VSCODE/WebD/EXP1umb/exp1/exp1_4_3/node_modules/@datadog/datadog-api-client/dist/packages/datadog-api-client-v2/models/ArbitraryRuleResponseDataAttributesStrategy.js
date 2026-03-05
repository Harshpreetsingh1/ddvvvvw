"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryRuleResponseDataAttributesStrategy = void 0;
/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategy` object.
 */
class ArbitraryRuleResponseDataAttributesStrategy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryRuleResponseDataAttributesStrategy.attributeTypeMap;
    }
}
exports.ArbitraryRuleResponseDataAttributesStrategy = ArbitraryRuleResponseDataAttributesStrategy;
/**
 * @ignore
 */
ArbitraryRuleResponseDataAttributesStrategy.attributeTypeMap = {
    allocatedBy: {
        baseName: "allocated_by",
        type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems>",
    },
    allocatedByFilters: {
        baseName: "allocated_by_filters",
        type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems>",
    },
    allocatedByTagKeys: {
        baseName: "allocated_by_tag_keys",
        type: "Array<string>",
    },
    basedOnCosts: {
        baseName: "based_on_costs",
        type: "Array<ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems>",
    },
    basedOnTimeseries: {
        baseName: "based_on_timeseries",
        type: "{ [key: string]: any; }",
    },
    evaluateGroupedByFilters: {
        baseName: "evaluate_grouped_by_filters",
        type: "Array<ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems>",
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
//# sourceMappingURL=ArbitraryRuleResponseDataAttributesStrategy.js.map