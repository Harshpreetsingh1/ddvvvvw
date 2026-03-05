"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRuleResponseData = void 0;
/**
 * Create rule response data.
 */
class CreateRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRuleResponseData.attributeTypeMap;
    }
}
exports.CreateRuleResponseData = CreateRuleResponseData;
/**
 * @ignore
 */
CreateRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RelationshipToRule",
    },
    type: {
        baseName: "type",
        type: "RuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRuleResponseData.js.map