"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypeResponse = void 0;
/**
 * Case type response
 */
class CaseTypeResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTypeResponse.attributeTypeMap;
    }
}
exports.CaseTypeResponse = CaseTypeResponse;
/**
 * @ignore
 */
CaseTypeResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseTypeResource",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTypeResponse.js.map