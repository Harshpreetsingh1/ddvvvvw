"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesResponseMeta = void 0;
/**
 * Cases response metadata
 */
class CasesResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CasesResponseMeta.attributeTypeMap;
    }
}
exports.CasesResponseMeta = CasesResponseMeta;
/**
 * @ignore
 */
CasesResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "CasesResponseMetaPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CasesResponseMeta.js.map