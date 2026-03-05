"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateAttributesRequest = void 0;
/**
 * Case update attributes request
 */
class CaseUpdateAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateAttributesRequest.attributeTypeMap;
    }
}
exports.CaseUpdateAttributesRequest = CaseUpdateAttributesRequest;
/**
 * @ignore
 */
CaseUpdateAttributesRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseUpdateAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateAttributesRequest.js.map