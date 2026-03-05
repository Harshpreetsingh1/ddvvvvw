"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterMetadata = void 0;
/**
 * Extra information about the exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterMetadata.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterMetadata = ApplicationSecurityWafExclusionFilterMetadata;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterMetadata.attributeTypeMap = {
    addedAt: {
        baseName: "added_at",
        type: "Date",
        format: "date-time",
    },
    addedBy: {
        baseName: "added_by",
        type: "string",
    },
    addedByName: {
        baseName: "added_by_name",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "string",
    },
    modifiedByName: {
        baseName: "modified_by_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterMetadata.js.map