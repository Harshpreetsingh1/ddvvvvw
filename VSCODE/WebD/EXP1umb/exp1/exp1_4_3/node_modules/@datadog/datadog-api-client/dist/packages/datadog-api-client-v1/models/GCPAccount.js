"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPAccount = void 0;
/**
 * Your Google Cloud Platform Account.
 */
class GCPAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPAccount.attributeTypeMap;
    }
}
exports.GCPAccount = GCPAccount;
/**
 * @ignore
 */
GCPAccount.attributeTypeMap = {
    authProviderX509CertUrl: {
        baseName: "auth_provider_x509_cert_url",
        type: "string",
    },
    authUri: {
        baseName: "auth_uri",
        type: "string",
    },
    automute: {
        baseName: "automute",
        type: "boolean",
    },
    clientEmail: {
        baseName: "client_email",
        type: "string",
    },
    clientId: {
        baseName: "client_id",
        type: "string",
    },
    clientX509CertUrl: {
        baseName: "client_x509_cert_url",
        type: "string",
    },
    cloudRunRevisionFilters: {
        baseName: "cloud_run_revision_filters",
        type: "Array<string>",
    },
    errors: {
        baseName: "errors",
        type: "Array<string>",
    },
    hostFilters: {
        baseName: "host_filters",
        type: "string",
    },
    isCspmEnabled: {
        baseName: "is_cspm_enabled",
        type: "boolean",
    },
    isResourceChangeCollectionEnabled: {
        baseName: "is_resource_change_collection_enabled",
        type: "boolean",
    },
    isSecurityCommandCenterEnabled: {
        baseName: "is_security_command_center_enabled",
        type: "boolean",
    },
    monitoredResourceConfigs: {
        baseName: "monitored_resource_configs",
        type: "Array<GCPMonitoredResourceConfig>",
    },
    privateKey: {
        baseName: "private_key",
        type: "string",
    },
    privateKeyId: {
        baseName: "private_key_id",
        type: "string",
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
    },
    tokenUri: {
        baseName: "token_uri",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPAccount.js.map