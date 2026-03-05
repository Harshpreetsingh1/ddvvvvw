"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureTenant = void 0;
/**
 * The definition of the `AzureTenant` object.
 */
class AzureTenant {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureTenant.attributeTypeMap;
    }
}
exports.AzureTenant = AzureTenant;
/**
 * @ignore
 */
AzureTenant.attributeTypeMap = {
    appClientId: {
        baseName: "app_client_id",
        type: "string",
        required: true,
    },
    clientSecret: {
        baseName: "client_secret",
        type: "string",
        required: true,
    },
    customScopes: {
        baseName: "custom_scopes",
        type: "string",
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AzureTenantType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureTenant.js.map