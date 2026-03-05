"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostByOrgResponse = void 0;
/**
 * Chargeback Summary response.
 */
class CostByOrgResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CostByOrgResponse.attributeTypeMap;
    }
}
exports.CostByOrgResponse = CostByOrgResponse;
/**
 * @ignore
 */
CostByOrgResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CostByOrg>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CostByOrgResponse.js.map