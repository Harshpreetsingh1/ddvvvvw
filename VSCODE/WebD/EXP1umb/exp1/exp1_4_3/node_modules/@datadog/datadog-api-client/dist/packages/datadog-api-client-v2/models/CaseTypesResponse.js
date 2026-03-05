"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTypesResponse = void 0;
/**
 * Case types response.
 */
class CaseTypesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseTypesResponse.attributeTypeMap;
    }
}
exports.CaseTypesResponse = CaseTypesResponse;
/**
 * @ignore
 */
CaseTypesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CaseTypeResource>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseTypesResponse.js.map