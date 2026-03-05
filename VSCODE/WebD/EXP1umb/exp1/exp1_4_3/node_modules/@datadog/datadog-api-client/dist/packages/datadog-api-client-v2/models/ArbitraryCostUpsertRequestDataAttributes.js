"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryCostUpsertRequestDataAttributes = void 0;
/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributes` object.
 */
class ArbitraryCostUpsertRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryCostUpsertRequestDataAttributes.attributeTypeMap;
    }
}
exports.ArbitraryCostUpsertRequestDataAttributes = ArbitraryCostUpsertRequestDataAttributes;
/**
 * @ignore
 */
ArbitraryCostUpsertRequestDataAttributes.attributeTypeMap = {
    costsToAllocate: {
        baseName: "costs_to_allocate",
        type: "Array<ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems>",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    orderId: {
        baseName: "order_id",
        type: "number",
        format: "int64",
    },
    provider: {
        baseName: "provider",
        type: "Array<string>",
        required: true,
    },
    rejected: {
        baseName: "rejected",
        type: "boolean",
    },
    ruleName: {
        baseName: "rule_name",
        type: "string",
        required: true,
    },
    strategy: {
        baseName: "strategy",
        type: "ArbitraryCostUpsertRequestDataAttributesStrategy",
        required: true,
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
//# sourceMappingURL=ArbitraryCostUpsertRequestDataAttributes.js.map