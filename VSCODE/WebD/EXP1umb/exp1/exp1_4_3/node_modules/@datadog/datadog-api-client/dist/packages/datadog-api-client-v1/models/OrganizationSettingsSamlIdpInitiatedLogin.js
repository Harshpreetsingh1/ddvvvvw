"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSettingsSamlIdpInitiatedLogin = void 0;
/**
 * Has one property enabled (boolean).
 */
class OrganizationSettingsSamlIdpInitiatedLogin {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap;
    }
}
exports.OrganizationSettingsSamlIdpInitiatedLogin = OrganizationSettingsSamlIdpInitiatedLogin;
/**
 * @ignore
 */
OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationSettingsSamlIdpInitiatedLogin.js.map