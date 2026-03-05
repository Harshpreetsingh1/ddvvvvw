"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSettingsSaml = void 0;
/**
 * Set the boolean property enabled to enable or disable single sign on with SAML.
 * See the SAML documentation for more information about all SAML settings.
 */
class OrganizationSettingsSaml {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationSettingsSaml.attributeTypeMap;
    }
}
exports.OrganizationSettingsSaml = OrganizationSettingsSaml;
/**
 * @ignore
 */
OrganizationSettingsSaml.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationSettingsSaml.js.map