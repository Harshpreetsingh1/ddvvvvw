"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageVulnerabilities = void 0;
/**
 * Vulnerability counts associated with the Container Image.
 */
class ContainerImageVulnerabilities {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageVulnerabilities.attributeTypeMap;
    }
}
exports.ContainerImageVulnerabilities = ContainerImageVulnerabilities;
/**
 * @ignore
 */
ContainerImageVulnerabilities.attributeTypeMap = {
    assetId: {
        baseName: "asset_id",
        type: "string",
    },
    critical: {
        baseName: "critical",
        type: "number",
        format: "int64",
    },
    high: {
        baseName: "high",
        type: "number",
        format: "int64",
    },
    low: {
        baseName: "low",
        type: "number",
        format: "int64",
    },
    medium: {
        baseName: "medium",
        type: "number",
        format: "int64",
    },
    none: {
        baseName: "none",
        type: "number",
        format: "int64",
    },
    unknown: {
        baseName: "unknown",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageVulnerabilities.js.map