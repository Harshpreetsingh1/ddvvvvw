"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestDataAttributesRulesItemsReferenceTable = void 0;
/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
 */
class CreateRulesetRequestDataAttributesRulesItemsReferenceTable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestDataAttributesRulesItemsReferenceTable.attributeTypeMap;
    }
}
exports.CreateRulesetRequestDataAttributesRulesItemsReferenceTable = CreateRulesetRequestDataAttributesRulesItemsReferenceTable;
/**
 * @ignore
 */
CreateRulesetRequestDataAttributesRulesItemsReferenceTable.attributeTypeMap = {
    caseInsensitivity: {
        baseName: "case_insensitivity",
        type: "boolean",
    },
    fieldPairs: {
        baseName: "field_pairs",
        type: "Array<CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems>",
        required: true,
    },
    ifNotExists: {
        baseName: "if_not_exists",
        type: "boolean",
    },
    ifTagExists: {
        baseName: "if_tag_exists",
        type: "DataAttributesRulesItemsIfTagExists",
    },
    sourceKeys: {
        baseName: "source_keys",
        type: "Array<string>",
        required: true,
    },
    tableName: {
        baseName: "table_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestDataAttributesRulesItemsReferenceTable.js.map