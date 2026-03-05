/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Number of hosts/containers recorded for each hour for a given organization.
 */
export declare class UsageHostHour {
    /**
     * Contains the total number of infrastructure hosts reporting
     * during a given hour that were running the Datadog Agent.
     */
    "agentHostCount"?: number;
    /**
     * Contains the total number of hosts that reported through Alibaba integration
     * (and were NOT running the Datadog Agent).
     */
    "alibabaHostCount"?: number;
    /**
     * Contains the total number of Azure App Services hosts using APM.
     */
    "apmAzureAppServiceHostCount"?: number;
    /**
     * Shows the total number of hosts using APM during the hour,
     * these are counted as billable (except during trial periods).
     */
    "apmHostCount"?: number;
    /**
     * Contains the total number of hosts that reported through the AWS integration
     * (and were NOT running the Datadog Agent).
     */
    "awsHostCount"?: number;
    /**
     * Contains the total number of hosts that reported through Azure integration
     * (and were NOT running the Datadog Agent).
     */
    "azureHostCount"?: number;
    /**
     * Shows the total number of containers reported by the Docker integration during the hour.
     */
    "containerCount"?: number;
    /**
     * Contains the total number of hosts that reported through the Google Cloud integration
     * (and were NOT running the Datadog Agent).
     */
    "gcpHostCount"?: number;
    /**
     * Contains the total number of Heroku dynos reported by the Datadog Agent.
     */
    "herokuHostCount"?: number;
    /**
     * Contains the total number of billable infrastructure hosts reporting during a given hour.
     * This is the sum of `agent_host_count`, `aws_host_count`, and `gcp_host_count`.
     */
    "hostCount"?: number;
    /**
     * The hour for the usage.
     */
    "hour"?: Date;
    /**
     * Contains the total number of hosts that reported through the Azure App Services integration
     * (and were NOT running the Datadog Agent).
     */
    "infraAzureAppService"?: number;
    /**
     * Contains the total number of hosts using APM reported by Datadog exporter for the OpenTelemetry Collector.
     */
    "opentelemetryApmHostCount"?: number;
    /**
     * Contains the total number of hosts reported by Datadog exporter for the OpenTelemetry Collector.
     */
    "opentelemetryHostCount"?: number;
    /**
     * The organization name.
     */
    "orgName"?: string;
    /**
     * The organization public ID.
     */
    "publicId"?: string;
    /**
     * Contains the total number of hosts that reported through vSphere integration
     * (and were NOT running the Datadog Agent).
     */
    "vsphereHostCount"?: number;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
