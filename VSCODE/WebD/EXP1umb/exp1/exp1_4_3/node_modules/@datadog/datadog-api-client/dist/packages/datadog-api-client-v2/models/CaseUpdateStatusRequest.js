"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateStatusRequest = void 0;
/**
 * Case update status request
 */
class CaseUpdateStatusRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateStatusRequest.attributeTypeMap;
    }
}
exports.CaseUpdateStatusRequest = CaseUpdateStatusRequest;
/**
 * @ignore
 */
CaseUpdateStatusRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseUpdateStatus",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateStatusRequest.js.map