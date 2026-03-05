"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRulesetRequest = void 0;
/**
 * The definition of `CreateRulesetRequest` object.
 */
class CreateRulesetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateRulesetRequest.attributeTypeMap;
    }
}
exports.CreateRulesetRequest = CreateRulesetRequest;
/**
 * @ignore
 */
CreateRulesetRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateRulesetRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateRulesetRequest.js.map