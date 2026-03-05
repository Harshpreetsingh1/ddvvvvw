"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureTenantUpdate = void 0;
/**
 * The definition of the `AzureTenant` object.
 */
class AzureTenantUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureTenantUpdate.attributeTypeMap;
    }
}
exports.AzureTenantUpdate = AzureTenantUpdate;
/**
 * @ignore
 */
AzureTenantUpdate.attributeTypeMap = {
    appClientId: {
        baseName: "app_client_id",
        type: "string",
    },
    clientSecret: {
        baseName: "client_secret",
        type: "string",
    },
    customScopes: {
        baseName: "custom_scopes",
        type: "string",
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
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
//# sourceMappingURL=AzureTenantUpdate.js.map