"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationBilling = void 0;
/**
 * A JSON array of billing type.
 */
class OrganizationBilling {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationBilling.attributeTypeMap;
    }
}
exports.OrganizationBilling = OrganizationBilling;
/**
 * @ignore
 */
OrganizationBilling.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationBilling.js.map