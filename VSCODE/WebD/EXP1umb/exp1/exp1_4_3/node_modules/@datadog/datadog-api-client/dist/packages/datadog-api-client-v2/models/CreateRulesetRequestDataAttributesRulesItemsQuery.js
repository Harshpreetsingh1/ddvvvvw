"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestDataAttributesRulesItemsQuery = void 0;
/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItemsQuery` object.
 */
class CreateRulesetRequestDataAttributesRulesItemsQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestDataAttributesRulesItemsQuery.attributeTypeMap;
    }
}
exports.CreateRulesetRequestDataAttributesRulesItemsQuery = CreateRulesetRequestDataAttributesRulesItemsQuery;
/**
 * @ignore
 */
CreateRulesetRequestDataAttributesRulesItemsQuery.attributeTypeMap = {
    addition: {
        baseName: "addition",
        type: "CreateRulesetRequestDataAttributesRulesItemsQueryAddition",
        required: true,
    },
    caseInsensitivity: {
        baseName: "case_insensitivity",
        type: "boolean",
    },
    ifNotExists: {
        baseName: "if_not_exists",
        type: "boolean",
    },
    ifTagExists: {
        baseName: "if_tag_exists",
        type: "DataAttributesRulesItemsIfTagExists",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestDataAttributesRulesItemsQuery.js.map