"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseComment = void 0;
/**
 * Case comment
 */
class CaseComment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseComment.attributeTypeMap;
    }
}
exports.CaseComment = CaseComment;
/**
 * @ignore
 */
CaseComment.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseCommentAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CaseResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseComment.js.map