"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterScope = void 0;
/**
 * Deploy on services based on their environment and/or service name.
 */
class ApplicationSecurityWafExclusionFilterScope {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterScope.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterScope = ApplicationSecurityWafExclusionFilterScope;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterScope.attributeTypeMap = {
    env: {
        baseName: "env",
        type: "string",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterScope.js.map