"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseAssign = void 0;
/**
 * Case assign
 */
class CaseAssign {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseAssign.attributeTypeMap;
    }
}
exports.CaseAssign = CaseAssign;
/**
 * @ignore
 */
CaseAssign.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseAssignAttributes",
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
//# sourceMappingURL=CaseAssign.js.map