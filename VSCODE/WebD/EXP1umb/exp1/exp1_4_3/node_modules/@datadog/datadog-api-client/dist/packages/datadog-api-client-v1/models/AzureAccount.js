"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureAccount = void 0;
/**
 * Datadog-Azure integrations configured for your organization.
 */
class AzureAccount {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureAccount.attributeTypeMap;
    }
}
exports.AzureAccount = AzureAccount;
/**
 * @ignore
 */
AzureAccount.attributeTypeMap = {
    appServicePlanFilters: {
        baseName: "app_service_plan_filters",
        type: "string",
    },
    automute: {
        baseName: "automute",
        type: "boolean",
    },
    clientId: {
        baseName: "client_id",
        type: "string",
    },
    clientSecret: {
        baseName: "client_secret",
        type: "string",
    },
    containerAppFilters: {
        baseName: "container_app_filters",
        type: "string",
    },
    cspmEnabled: {
        baseName: "cspm_enabled",
        type: "boolean",
    },
    customMetricsEnabled: {
        baseName: "custom_metrics_enabled",
        type: "boolean",
    },
    errors: {
        baseName: "errors",
        type: "Array<string>",
    },
    hostFilters: {
        baseName: "host_filters",
        type: "string",
    },
    metricsEnabled: {
        baseName: "metrics_enabled",
        type: "boolean",
    },
    metricsEnabledDefault: {
        baseName: "metrics_enabled_default",
        type: "boolean",
    },
    newClientId: {
        baseName: "new_client_id",
        type: "string",
    },
    newTenantName: {
        baseName: "new_tenant_name",
        type: "string",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
    },
    resourceProviderConfigs: {
        baseName: "resource_provider_configs",
        type: "Array<ResourceProviderConfig>",
    },
    tenantName: {
        baseName: "tenant_name",
        type: "string",
    },
    usageMetricsEnabled: {
        baseName: "usage_metrics_enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AzureAccount.js.map