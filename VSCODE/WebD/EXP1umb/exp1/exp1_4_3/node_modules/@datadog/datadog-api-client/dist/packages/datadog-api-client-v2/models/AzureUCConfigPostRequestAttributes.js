"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureUCConfigPostRequestAttributes = void 0;
/**
 * Attributes for Azure config Post Request.
 */
class AzureUCConfigPostRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureUCConfigPostRequestAttributes.attributeTypeMap;
    }
}
exports.AzureUCConfigPostRequestAttributes = AzureUCConfigPostRequestAttributes;
/**
 * @ignore
 */
AzureUCConfigPostRequestAttributes.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    actualBillConfig: {
        baseName: "actual_bill_config",
        type: "BillConfig",
        required: true,
    },
    amortizedBillConfig: {
        baseName: "amortized_bill_config",
        type: "BillConfig",
        required: true,
    },
    clientId: {
        baseName: "client_id",
        type: "string",
        required: true,
    },
    scope: {
        baseName: "scope",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureUCConfigPostRequestAttributes.js.map