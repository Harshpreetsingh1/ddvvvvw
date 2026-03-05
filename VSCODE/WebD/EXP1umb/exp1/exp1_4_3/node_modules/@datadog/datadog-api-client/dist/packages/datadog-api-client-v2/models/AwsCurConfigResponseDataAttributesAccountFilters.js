"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCurConfigResponseDataAttributesAccountFilters = void 0;
/**
 * The definition of `AwsCurConfigResponseDataAttributesAccountFilters` object.
 */
class AwsCurConfigResponseDataAttributesAccountFilters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCurConfigResponseDataAttributesAccountFilters.attributeTypeMap;
    }
}
exports.AwsCurConfigResponseDataAttributesAccountFilters = AwsCurConfigResponseDataAttributesAccountFilters;
/**
 * @ignore
 */
AwsCurConfigResponseDataAttributesAccountFilters.attributeTypeMap = {
    excludedAccounts: {
        baseName: "excluded_accounts",
        type: "Array<string>",
    },
    includeNewAccounts: {
        baseName: "include_new_accounts",
        type: "boolean",
    },
    includedAccounts: {
        baseName: "included_accounts",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCurConfigResponseDataAttributesAccountFilters.js.map