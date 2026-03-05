"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachCaseRequest = void 0;
/**
 * Request for attaching security findings to a case.
 */
class AttachCaseRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachCaseRequest.attributeTypeMap;
    }
}
exports.AttachCaseRequest = AttachCaseRequest;
/**
 * @ignore
 */
AttachCaseRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AttachCaseRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachCaseRequest.js.map