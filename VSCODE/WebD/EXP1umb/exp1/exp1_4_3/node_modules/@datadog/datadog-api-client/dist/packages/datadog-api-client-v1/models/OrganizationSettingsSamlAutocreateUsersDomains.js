"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSettingsSamlAutocreateUsersDomains = void 0;
/**
 * Has two properties, `enabled` (boolean) and `domains`, which is a list of domains without the @ symbol.
 */
class OrganizationSettingsSamlAutocreateUsersDomains {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationSettingsSamlAutocreateUsersDomains.attributeTypeMap;
    }
}
exports.OrganizationSettingsSamlAutocreateUsersDomains = OrganizationSettingsSamlAutocreateUsersDomains;
/**
 * @ignore
 */
OrganizationSettingsSamlAutocreateUsersDomains.attributeTypeMap = {
    domains: {
        baseName: "domains",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationSettingsSamlAutocreateUsersDomains.js.map