"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostByOrgAttributes = void 0;
/**
 * Cost attributes data.
 */
class CostByOrgAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CostByOrgAttributes.attributeTypeMap;
    }
}
exports.CostByOrgAttributes = CostByOrgAttributes;
/**
 * @ignore
 */
CostByOrgAttributes.attributeTypeMap = {
    accountName: {
        baseName: "account_name",
        type: "string",
    },
    accountPublicId: {
        baseName: "account_public_id",
        type: "string",
    },
    charges: {
        baseName: "charges",
        type: "Array<ChargebackBreakdown>",
    },
    date: {
        baseName: "date",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    totalCost: {
        baseName: "total_cost",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CostByOrgAttributes.js.map