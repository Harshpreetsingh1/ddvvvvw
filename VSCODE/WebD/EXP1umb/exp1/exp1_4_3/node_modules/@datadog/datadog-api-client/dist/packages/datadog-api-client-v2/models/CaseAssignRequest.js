"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseAssignRequest = void 0;
/**
 * Case assign request
 */
class CaseAssignRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseAssignRequest.attributeTypeMap;
    }
}
exports.CaseAssignRequest = CaseAssignRequest;
/**
 * @ignore
 */
CaseAssignRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseAssign",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseAssignRequest.js.map