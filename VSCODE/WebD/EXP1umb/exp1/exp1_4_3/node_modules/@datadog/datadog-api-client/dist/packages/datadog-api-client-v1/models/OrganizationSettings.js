"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSettings = void 0;
/**
 * A JSON array of settings.
 */
class OrganizationSettings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationSettings.attributeTypeMap;
    }
}
exports.OrganizationSettings = OrganizationSettings;
/**
 * @ignore
 */
OrganizationSettings.attributeTypeMap = {
    privateWidgetShare: {
        baseName: "private_widget_share",
        type: "boolean",
    },
    saml: {
        baseName: "saml",
        type: "OrganizationSettingsSaml",
    },
    samlAutocreateAccessRole: {
        baseName: "saml_autocreate_access_role",
        type: "AccessRole",
    },
    samlAutocreateUsersDomains: {
        baseName: "saml_autocreate_users_domains",
        type: "OrganizationSettingsSamlAutocreateUsersDomains",
    },
    samlCanBeEnabled: {
        baseName: "saml_can_be_enabled",
        type: "boolean",
    },
    samlIdpEndpoint: {
        baseName: "saml_idp_endpoint",
        type: "string",
    },
    samlIdpInitiatedLogin: {
        baseName: "saml_idp_initiated_login",
        type: "OrganizationSettingsSamlIdpInitiatedLogin",
    },
    samlIdpMetadataUploaded: {
        baseName: "saml_idp_metadata_uploaded",
        type: "boolean",
    },
    samlLoginUrl: {
        baseName: "saml_login_url",
        type: "string",
    },
    samlStrictMode: {
        baseName: "saml_strict_mode",
        type: "OrganizationSettingsSamlStrictMode",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationSettings.js.map