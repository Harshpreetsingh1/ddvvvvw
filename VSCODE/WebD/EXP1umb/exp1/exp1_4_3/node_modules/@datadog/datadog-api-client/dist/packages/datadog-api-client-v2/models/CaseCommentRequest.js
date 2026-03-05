"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCommentRequest = void 0;
/**
 * Case comment request
 */
class CaseCommentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseCommentRequest.attributeTypeMap;
    }
}
exports.CaseCommentRequest = CaseCommentRequest;
/**
 * @ignore
 */
CaseCommentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseComment",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseCommentRequest.js.map