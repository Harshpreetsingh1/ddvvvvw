"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRisks = void 0;
/**
 * Asset risks.
 */
class AssetRisks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssetRisks.attributeTypeMap;
    }
}
exports.AssetRisks = AssetRisks;
/**
 * @ignore
 */
AssetRisks.attributeTypeMap = {
    hasAccessToSensitiveData: {
        baseName: "has_access_to_sensitive_data",
        type: "boolean",
    },
    hasPrivilegedAccess: {
        baseName: "has_privileged_access",
        type: "boolean",
    },
    inProduction: {
        baseName: "in_production",
        type: "boolean",
        required: true,
    },
    isPubliclyAccessible: {
        baseName: "is_publicly_accessible",
        type: "boolean",
    },
    underAttack: {
        baseName: "under_attack",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AssetRisks.js.map