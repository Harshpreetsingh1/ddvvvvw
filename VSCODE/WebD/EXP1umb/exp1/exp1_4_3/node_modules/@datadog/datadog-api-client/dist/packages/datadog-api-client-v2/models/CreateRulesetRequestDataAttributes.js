"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestDataAttributes = void 0;
/**
 * The definition of `CreateRulesetRequestDataAttributes` object.
 */
class CreateRulesetRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateRulesetRequestDataAttributes = CreateRulesetRequestDataAttributes;
/**
 * @ignore
 */
CreateRulesetRequestDataAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    rules: {
        baseName: "rules",
        type: "Array<CreateRulesetRequestDataAttributesRulesItems>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestDataAttributes.js.map