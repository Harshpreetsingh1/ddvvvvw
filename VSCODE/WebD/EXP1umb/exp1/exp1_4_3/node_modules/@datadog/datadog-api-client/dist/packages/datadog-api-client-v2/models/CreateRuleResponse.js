"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRuleResponse = void 0;
/**
 * Created rule in response.
 */
class CreateRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRuleResponse.attributeTypeMap;
    }
}
exports.CreateRuleResponse = CreateRuleResponse;
/**
 * @ignore
 */
CreateRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateRuleResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRuleResponse.js.map