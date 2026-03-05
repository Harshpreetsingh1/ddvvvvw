"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems = void 0;
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems` object.
 */
class ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems.attributeTypeMap;
    }
}
exports.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems = ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems;
/**
 * @ignore
 */
ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems.attributeTypeMap = {
    allocatedTags: {
        baseName: "allocated_tags",
        type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>",
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
//# sourceMappingURL=ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems.js.map