"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePriorityRequest = void 0;
/**
 * Case update priority request
 */
class CaseUpdatePriorityRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdatePriorityRequest.attributeTypeMap;
    }
}
exports.CaseUpdatePriorityRequest = CaseUpdatePriorityRequest;
/**
 * @ignore
 */
CaseUpdatePriorityRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseUpdatePriority",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdatePriorityRequest.js.map