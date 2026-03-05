"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeCreateRequest = void 0;
/**
 * Case type create request
 */
class CaseTypeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTypeCreateRequest.attributeTypeMap;
    }
}
exports.CaseTypeCreateRequest = CaseTypeCreateRequest;
/**
 * @ignore
 */
CaseTypeCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseTypeCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTypeCreateRequest.js.map