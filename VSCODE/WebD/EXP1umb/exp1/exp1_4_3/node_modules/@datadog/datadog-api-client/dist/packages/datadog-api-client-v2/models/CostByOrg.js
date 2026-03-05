"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostByOrg = void 0;
/**
 * Cost data.
 */
class CostByOrg {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CostByOrg.attributeTypeMap;
    }
}
exports.CostByOrg = CostByOrg;
/**
 * @ignore
 */
CostByOrg.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CostByOrgAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CostByOrgType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CostByOrg.js.map