"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems = void 0;
/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems` object.
 */
class ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems.attributeTypeMap;
    }
}
exports.ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems = ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems;
/**
 * @ignore
 */
ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems.attributeTypeMap = {
    allocatedTags: {
        baseName: "allocated_tags",
        type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>",
        required: true,
    },
    percentage: {
        baseName: "percentage",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems.js.map