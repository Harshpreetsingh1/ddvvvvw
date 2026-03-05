"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSResourcesConfig = void 0;
/**
 * AWS Resources Collection config.
 */
class AWSResourcesConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSResourcesConfig.attributeTypeMap;
    }
}
exports.AWSResourcesConfig = AWSResourcesConfig;
/**
 * @ignore
 */
AWSResourcesConfig.attributeTypeMap = {
    cloudSecurityPostureManagementCollection: {
        baseName: "cloud_security_posture_management_collection",
        type: "boolean",
    },
    extendedCollection: {
        baseName: "extended_collection",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSResourcesConfig.js.map