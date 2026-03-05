"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesResponse = void 0;
/**
 * Response with cases
 */
class CasesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CasesResponse.attributeTypeMap;
    }
}
exports.CasesResponse = CasesResponse;
/**
 * @ignore
 */
CasesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Case>",
    },
    meta: {
        baseName: "meta",
        type: "CasesResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CasesResponse.js.map