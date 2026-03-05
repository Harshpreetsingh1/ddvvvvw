"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateCustomAttributeRequest = void 0;
/**
 * Case update custom attribute request
 */
class CaseUpdateCustomAttributeRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateCustomAttributeRequest.attributeTypeMap;
    }
}
exports.CaseUpdateCustomAttributeRequest = CaseUpdateCustomAttributeRequest;
/**
 * @ignore
 */
CaseUpdateCustomAttributeRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseUpdateCustomAttribute",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateCustomAttributeRequest.js.map