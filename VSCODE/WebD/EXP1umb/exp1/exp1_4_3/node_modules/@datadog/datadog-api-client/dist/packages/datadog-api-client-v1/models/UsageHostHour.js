"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageHostHour = void 0;
/**
 * Number of hosts/containers recorded for each hour for a given organization.
 */
class UsageHostHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageHostHour.attributeTypeMap;
    }
}
exports.UsageHostHour = UsageHostHour;
/**
 * @ignore
 */
UsageHostHour.attributeTypeMap = {
    agentHostCount: {
        baseName: "agent_host_count",
        type: "number",
        format: "int64",
    },
    alibabaHostCount: {
        baseName: "alibaba_host_count",
        type: "number",
        format: "int64",
    },
    apmAzureAppServiceHostCount: {
        baseName: "apm_azure_app_service_host_count",
        type: "number",
        format: "int64",
    },
    apmHostCount: {
        baseName: "apm_host_count",
        type: "number",
        format: "int64",
    },
    awsHostCount: {
        baseName: "aws_host_count",
        type: "number",
        format: "int64",
    },
    azureHostCount: {
        baseName: "azure_host_count",
        type: "number",
        format: "int64",
    },
    containerCount: {
        baseName: "container_count",
        type: "number",
        format: "int64",
    },
    gcpHostCount: {
        baseName: "gcp_host_count",
        type: "number",
        format: "int64",
    },
    herokuHostCount: {
        baseName: "heroku_host_count",
        type: "number",
        format: "int64",
    },
    hostCount: {
        baseName: "host_count",
        type: "number",
        format: "int64",
    },
    hour: {
        baseName: "hour",
        type: "Date",
        format: "date-time",
    },
    infraAzureAppService: {
        baseName: "infra_azure_app_service",
        type: "number",
        format: "int64",
    },
    opentelemetryApmHostCount: {
        baseName: "opentelemetry_apm_host_count",
        type: "number",
        format: "int64",
    },
    opentelemetryHostCount: {
        baseName: "opentelemetry_host_count",
        type: "number",
        format: "int64",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    vsphereHostCount: {
        baseName: "vsphere_host_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageHostHour.js.map