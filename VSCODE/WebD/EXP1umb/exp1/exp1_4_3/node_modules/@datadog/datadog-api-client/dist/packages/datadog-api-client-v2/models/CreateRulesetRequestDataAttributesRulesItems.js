"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestDataAttributesRulesItems = void 0;
/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItems` object.
 */
class CreateRulesetRequestDataAttributesRulesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestDataAttributesRulesItems.attributeTypeMap;
    }
}
exports.CreateRulesetRequestDataAttributesRulesItems = CreateRulesetRequestDataAttributesRulesItems;
/**
 * @ignore
 */
CreateRulesetRequestDataAttributesRulesItems.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    mapping: {
        baseName: "mapping",
        type: "DataAttributesRulesItemsMapping",
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: string; }",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "CreateRulesetRequestDataAttributesRulesItemsQuery",
    },
    referenceTable: {
        baseName: "reference_table",
        type: "CreateRulesetRequestDataAttributesRulesItemsReferenceTable",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestDataAttributesRulesItems.js.map