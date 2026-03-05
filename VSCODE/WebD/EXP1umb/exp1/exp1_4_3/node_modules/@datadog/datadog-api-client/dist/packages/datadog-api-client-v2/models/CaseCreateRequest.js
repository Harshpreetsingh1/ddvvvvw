"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCreateRequest = void 0;
/**
 * Case create request
 */
class CaseCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseCreateRequest.attributeTypeMap;
    }
}
exports.CaseCreateRequest = CaseCreateRequest;
/**
 * @ignore
 */
CaseCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseCreateRequest.js.map