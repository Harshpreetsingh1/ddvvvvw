"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRuleRequestData = void 0;
/**
 * Scorecard create rule request data.
 */
class CreateRuleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRuleRequestData.attributeTypeMap;
    }
}
exports.CreateRuleRequestData = CreateRuleRequestData;
/**
 * @ignore
 */
CreateRuleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RuleAttributes",
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
//# sourceMappingURL=CreateRuleRequestData.js.map