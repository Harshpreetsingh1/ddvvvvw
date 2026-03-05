"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseEmptyRequest = void 0;
/**
 * Case empty request
 */
class CaseEmptyRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseEmptyRequest.attributeTypeMap;
    }
}
exports.CaseEmptyRequest = CaseEmptyRequest;
/**
 * @ignore
 */
CaseEmptyRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseEmpty",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseEmptyRequest.js.map