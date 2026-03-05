"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCloudSecurityPostureManagementHour = void 0;
/**
 * Cloud Security Management Pro usage for a given organization for a given hour.
 */
class UsageCloudSecurityPostureManagementHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCloudSecurityPostureManagementHour.attributeTypeMap;
    }
}
exports.UsageCloudSecurityPostureManagementHour = UsageCloudSecurityPostureManagementHour;
/**
 * @ignore
 */
UsageCloudSecurityPostureManagementHour.attributeTypeMap = {
    aasHostCount: {
        baseName: "aas_host_count",
        type: "number",
        format: "double",
    },
    awsHostCount: {
        baseName: "aws_host_count",
        type: "number",
        format: "double",
    },
    azureHostCount: {
        baseName: "azure_host_count",
        type: "number",
        format: "double",
    },
    complianceHostCount: {
        baseName: "compliance_host_count",
        type: "number",
        format: "double",
    },
    containerCount: {
        baseName: "container_count",
        type: "number",
        format: "double",
    },
    gcpHostCount: {
        baseName: "gcp_host_count",
        type: "number",
        format: "double",
    },
    hostCount: {
        baseName: "host_count",
        type: "number",
        format: "double",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCloudSecurityPostureManagementHour.js.map