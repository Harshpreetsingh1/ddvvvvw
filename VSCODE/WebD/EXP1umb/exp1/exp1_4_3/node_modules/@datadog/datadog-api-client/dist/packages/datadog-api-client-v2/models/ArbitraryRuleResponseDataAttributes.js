"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitraryRuleResponseDataAttributes = void 0;
/**
 * The definition of `ArbitraryRuleResponseDataAttributes` object.
 */
class ArbitraryRuleResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ArbitraryRuleResponseDataAttributes.attributeTypeMap;
    }
}
exports.ArbitraryRuleResponseDataAttributes = ArbitraryRuleResponseDataAttributes;
/**
 * @ignore
 */
ArbitraryRuleResponseDataAttributes.attributeTypeMap = {
    costsToAllocate: {
        baseName: "costs_to_allocate",
        type: "Array<ArbitraryRuleResponseDataAttributesCostsToAllocateItems>",
        required: true,
    },
    created: {
        baseName: "created",
        type: "Date",
        required: true,
        format: "date-time",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    lastModifiedUserUuid: {
        baseName: "last_modified_user_uuid",
        type: "string",
        required: true,
    },
    orderId: {
        baseName: "order_id",
        type: "number",
        required: true,
        format: "int64",
    },
    processingStatus: {
        baseName: "processing_status",
        type: "string",
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
        type: "ArbitraryRuleResponseDataAttributesStrategy",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    updated: {
        baseName: "updated",
        type: "Date",
        required: true,
        format: "date-time",
    },
    version: {
        baseName: "version",
        type: "number",
        required: true,
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ArbitraryRuleResponseDataAttributes.js.map