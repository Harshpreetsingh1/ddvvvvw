"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceProviderConfig = void 0;
/**
 * Configuration settings applied to resources from the specified Azure resource provider.
 */
class ResourceProviderConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResourceProviderConfig.attributeTypeMap;
    }
}
exports.ResourceProviderConfig = ResourceProviderConfig;
/**
 * @ignore
 */
ResourceProviderConfig.attributeTypeMap = {
    metricsEnabled: {
        baseName: "metrics_enabled",
        type: "boolean",
    },
    namespace: {
        baseName: "namespace",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResourceProviderConfig.js.map