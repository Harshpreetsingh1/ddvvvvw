"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRuleRequest = void 0;
/**
 * Scorecard create rule request.
 */
class CreateRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRuleRequest.attributeTypeMap;
    }
}
exports.CreateRuleRequest = CreateRuleRequest;
/**
 * @ignore
 */
CreateRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateRuleRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRuleRequest.js.map