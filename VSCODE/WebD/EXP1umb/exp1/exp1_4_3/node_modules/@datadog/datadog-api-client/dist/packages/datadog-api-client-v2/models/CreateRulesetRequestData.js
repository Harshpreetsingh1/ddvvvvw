"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequestData = void 0;
/**
 * The definition of `CreateRulesetRequestData` object.
 */
class CreateRulesetRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequestData.attributeTypeMap;
    }
}
exports.CreateRulesetRequestData = CreateRulesetRequestData;
/**
 * @ignore
 */
CreateRulesetRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateRulesetRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CreateRulesetRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequestData.js.map