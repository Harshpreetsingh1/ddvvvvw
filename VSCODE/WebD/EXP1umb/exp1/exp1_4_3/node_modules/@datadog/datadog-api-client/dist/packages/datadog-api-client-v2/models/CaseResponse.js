"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseResponse = void 0;
/**
 * Case response
 */
class CaseResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseResponse.attributeTypeMap;
    }
}
exports.CaseResponse = CaseResponse;
/**
 * @ignore
 */
CaseResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Case",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseResponse.js.map