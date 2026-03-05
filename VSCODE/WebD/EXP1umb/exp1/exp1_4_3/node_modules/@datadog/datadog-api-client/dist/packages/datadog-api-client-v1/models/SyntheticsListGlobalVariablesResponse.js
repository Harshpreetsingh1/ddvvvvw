"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsListGlobalVariablesResponse = void 0;
/**
 * Object containing an array of Synthetic global variables.
 */
class SyntheticsListGlobalVariablesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsListGlobalVariablesResponse.attributeTypeMap;
    }
}
exports.SyntheticsListGlobalVariablesResponse = SyntheticsListGlobalVariablesResponse;
/**
 * @ignore
 */
SyntheticsListGlobalVariablesResponse.attributeTypeMap = {
    variables: {
        baseName: "variables",
        type: "Array<SyntheticsGlobalVariable>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsListGlobalVariablesResponse.js.map