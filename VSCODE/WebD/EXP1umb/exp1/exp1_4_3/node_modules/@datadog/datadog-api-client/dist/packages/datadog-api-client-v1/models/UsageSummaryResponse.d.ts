/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsByRetention } from "./LogsByRetention";
import { UsageSummaryDate } from "./UsageSummaryDate";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response summarizing all usage aggregated across the months in the request for all organizations, and broken down by month and by organization.
 */
export declare class UsageSummaryResponse {
    /**
     * Shows the 99th percentile of all agent hosts over all hours in the current month for all organizations.
     */
    "agentHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Azure app services using APM over all hours in the current month all organizations.
     */
    "apmAzureAppServiceHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current month for all organizations.
     */
    "apmDevsecopsHostTop99pSum"?: number;
    /**
     * Shows the sum of the 99th percentile of all distinct standalone Enterprise hosts over all hours in the current month for all organizations.
     */
    "apmEnterpriseStandaloneHostsTop99pSum"?: number;
    /**
     * Shows the average of all APM ECS Fargate tasks over all hours in the current month for all organizations.
     */
    "apmFargateCountAvgSum"?: number;
    /**
     * Shows the 99th percentile of all distinct APM hosts over all hours in the current month for all organizations.
     */
    "apmHostTop99pSum"?: number;
    /**
     * Shows the sum of the 99th percentile of all distinct standalone Pro hosts over all hours in the current month for all organizations.
     */
    "apmProStandaloneHostsTop99pSum"?: number;
    /**
     * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current month for all organizations.
     */
    "appsecFargateCountAvgSum"?: number;
    /**
     * Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current months for all organizations.
     */
    "asmServerlessAggSum"?: number;
    /**
     * Shows the sum of all audit logs lines indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "auditLogsLinesIndexedAggSum"?: number;
    /**
     * Shows the total number of organizations that had Audit Trail enabled over a specific number of months.
     */
    "auditTrailEnabledHwmSum"?: number;
    /**
     * The average total count for Fargate Container Profiler over all hours in the current month for all organizations.
     */
    "avgProfiledFargateTasksSum"?: number;
    /**
     * Shows the 99th percentile of all AWS hosts over all hours in the current month for all organizations.
     */
    "awsHostTop99pSum"?: number;
    /**
     * Shows the average of the number of functions that executed 1 or more times each hour in the current month for all organizations.
     */
    "awsLambdaFuncCount"?: number;
    /**
     * Shows the sum of all AWS Lambda invocations over all hours in the current month for all organizations.
     */
    "awsLambdaInvocationsSum"?: number;
    /**
     * Shows the 99th percentile of all Azure app services over all hours in the current month for all organizations.
     */
    "azureAppServiceTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Azure hosts over all hours in the current month for all organizations.
     */
    "azureHostTop99pSum"?: number;
    /**
     * Shows the sum of all log bytes ingested over all hours in the current month for all organizations.
     */
    "billableIngestedBytesAggSum"?: number;
    /**
     * Shows the sum of all Bits AI Investigations over all hours in the current month for all organizations.
     */
    "bitsAiInvestigationsAggSum"?: number;
    /**
     * Shows the sum of all browser lite sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "browserRumLiteSessionCountAggSum"?: number;
    /**
     * Shows the sum of all browser replay sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "browserRumReplaySessionCountAggSum"?: number;
    /**
     * Shows the sum of all browser RUM units over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "browserRumUnitsAggSum"?: number;
    /**
     * Shows the sum of the last value of the amount of cloud spend monitored for Enterprise in the current month for all organizations.
     */
    "ccmSpendMonitoredEntLastSum"?: number;
    /**
     * Shows the sum of the last value of the amount of cloud spend monitored for Pro in the current month for all organizations.
     */
    "ccmSpendMonitoredProLastSum"?: number;
    /**
     * Shows the sum of all CI pipeline indexed spans over all hours in the current month for all organizations.
     */
    "ciPipelineIndexedSpansAggSum"?: number;
    /**
     * Shows the sum of all CI test indexed spans over all hours in the current month for all organizations.
     */
    "ciTestIndexedSpansAggSum"?: number;
    /**
     * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current month for all organizations.
     */
    "ciVisibilityItrCommittersHwmSum"?: number;
    /**
     * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.
     */
    "ciVisibilityPipelineCommittersHwmSum"?: number;
    /**
     * Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.
     */
    "ciVisibilityTestCommittersHwmSum"?: number;
    /**
     * Sum of the host count average for Cloud Cost Management for AWS.
     */
    "cloudCostManagementAwsHostCountAvgSum"?: number;
    /**
     * Sum of the host count average for Cloud Cost Management for Azure.
     */
    "cloudCostManagementAzureHostCountAvgSum"?: number;
    /**
     * Sum of the host count average for Cloud Cost Management for GCP.
     */
    "cloudCostManagementGcpHostCountAvgSum"?: number;
    /**
     * Sum of the host count average for Cloud Cost Management for all cloud providers.
     */
    "cloudCostManagementHostCountAvgSum"?: number;
    /**
     * Sum of the average host counts for Cloud Cost Management on OCI.
     */
    "cloudCostManagementOciHostCountAvgSum"?: number;
    /**
     * Shows the sum of all Cloud Security Information and Event Management events over all hours in the current month for all organizations.
     */
    "cloudSiemEventsAggSum"?: number;
    /**
     * Shows the high-water mark of all Static Analysis committers over all hours in the current month for all organizations.
     */
    "codeAnalysisSaCommittersHwmSum"?: number;
    /**
     * Shows the high-water mark of all static Software Composition Analysis committers over all hours in the current month for all organizations.
     */
    "codeAnalysisScaCommittersHwmSum"?: number;
    /**
     * Shows the 99th percentile of all Code Security hosts over all hours in the current month for all organizations.
     */
    "codeSecurityHostTop99pSum"?: number;
    /**
     * Shows the average of all distinct containers over all hours in the current month for all organizations.
     */
    "containerAvgSum"?: number;
    /**
     * Shows the average of the containers without the Datadog Agent over all hours in the current month for all organizations.
     */
    "containerExclAgentAvgSum"?: number;
    /**
     * Shows the sum of the high-water marks of all distinct containers over all hours in the current month for all organizations.
     */
    "containerHwmSum"?: number;
    /**
     * Shows the sum of all Cloud Security Management Enterprise compliance containers over all hours in the current month for all organizations.
     */
    "csmContainerEnterpriseComplianceCountAggSum"?: number;
    /**
     * Shows the sum of all Cloud Security Management Enterprise Cloud Workload Security containers over all hours in the current month for all organizations.
     */
    "csmContainerEnterpriseCwsCountAggSum"?: number;
    /**
     * Shows the sum of all Cloud Security Management Enterprise containers over all hours in the current month for all organizations.
     */
    "csmContainerEnterpriseTotalCountAggSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise Azure app services hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseAasHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise AWS hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseAwsHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise Azure hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseAzureHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise compliance hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseComplianceHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise Cloud Workload Security hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseCwsHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise GCP hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseGcpHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise hosts over all hours in the current month for all organizations.
     */
    "csmHostEnterpriseTotalHostCountTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current month for all organizations.
     */
    "cspmAasHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current month for all organizations.
     */
    "cspmAwsHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current month for all organizations.
     */
    "cspmAzureHostTop99pSum"?: number;
    /**
     * Shows the average number of Cloud Security Management Pro containers over all hours in the current month for all organizations.
     */
    "cspmContainerAvgSum"?: number;
    /**
     * Shows the sum of the high-water marks of Cloud Security Management Pro containers over all hours in the current month for all organizations.
     */
    "cspmContainerHwmSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current month for all organizations.
     */
    "cspmGcpHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current month for all organizations.
     */
    "cspmHostTop99pSum"?: number;
    /**
     * Shows the average number of distinct historical custom metrics over all hours in the current month for all organizations.
     */
    "customHistoricalTsSum"?: number;
    /**
     * Shows the average number of distinct live custom metrics over all hours in the current month for all organizations.
     */
    "customLiveTsSum"?: number;
    /**
     * Shows the average number of distinct custom metrics over all hours in the current month for all organizations.
     */
    "customTsSum"?: number;
    /**
     * Shows the average of all distinct Cloud Workload Security containers over all hours in the current month for all organizations.
     */
    "cwsContainerAvgSum"?: number;
    /**
     * Shows the average of all distinct Cloud Workload Security Fargate tasks over all hours in the current month for all organizations.
     */
    "cwsFargateTaskAvgSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current month for all organizations.
     */
    "cwsHostTop99pSum"?: number;
    /**
     * Shows the sum of Data Jobs Monitoring hosts over all hours in the current months for all organizations
     */
    "dataJobsMonitoringHostHrAggSum"?: number;
    /**
     * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current month for all organizations.
     */
    "dbmHostTop99pSum"?: number;
    /**
     * Shows the average of all distinct Database Monitoring Normalized Queries over all hours in the current month for all organizations.
     */
    "dbmQueriesAvgSum"?: number;
    /**
     * Shows the last date of usage in the current month for all organizations.
     */
    "endDate"?: Date;
    /**
     * Shows the sum of all ephemeral infrastructure hosts with the Datadog Agent over all hours in the current month for all organizations.
     */
    "ephInfraHostAgentAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on Alibaba over all hours in the current month for all organizations.
     */
    "ephInfraHostAlibabaAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on AWS over all hours in the current month for all organizations.
     */
    "ephInfraHostAwsAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on Azure over all hours in the current month for all organizations.
     */
    "ephInfraHostAzureAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts for Enterprise over all hours in the current month for all organizations.
     */
    "ephInfraHostEntAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on GCP over all hours in the current month for all organizations.
     */
    "ephInfraHostGcpAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on Heroku over all hours in the current month for all organizations.
     */
    "ephInfraHostHerokuAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts with only Azure App Services over all hours in the current month for all organizations.
     */
    "ephInfraHostOnlyAasAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts with only vSphere over all hours in the current month for all organizations.
     */
    "ephInfraHostOnlyVsphereAggSum"?: number;
    /**
     * Shows the sum of all ephemeral hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
     */
    "ephInfraHostOpentelemetryAggSum"?: number;
    /**
     * Shows the sum of all ephemeral APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
     */
    "ephInfraHostOpentelemetryApmAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts for Pro over all hours in the current month for all organizations.
     */
    "ephInfraHostProAggSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts for Pro Plus over all hours in the current month for all organizations.
     */
    "ephInfraHostProplusAggSum"?: number;
    /**
     * Sum of all ephemeral infrastructure hosts for Proxmox over all hours in the current month for all organizations.
     */
    "ephInfraHostProxmoxAggSum"?: number;
    /**
     * Shows the sum of all Error Tracking APM error events over all hours in the current month for all organizations.
     */
    "errorTrackingApmErrorEventsAggSum"?: number;
    /**
     * Shows the sum of all Error Tracking error events over all hours in the current month for all organizations.
     */
    "errorTrackingErrorEventsAggSum"?: number;
    /**
     * Shows the sum of all Error Tracking events over all hours in the current months for all organizations.
     */
    "errorTrackingEventsAggSum"?: number;
    /**
     * Shows the sum of all Error Tracking RUM error events over all hours in the current month for all organizations.
     */
    "errorTrackingRumErrorEventsAggSum"?: number;
    /**
     * Shows the sum of all Event Management correlations over all hours in the current month for all organizations.
     */
    "eventManagementCorrelationAggSum"?: number;
    /**
     * Shows the sum of all Event Management correlated events over all hours in the current month for all organizations.
     */
    "eventManagementCorrelationCorrelatedEventsAggSum"?: number;
    /**
     * Shows the sum of all Event Management correlated related events over all hours in the current month for all organizations.
     */
    "eventManagementCorrelationCorrelatedRelatedEventsAggSum"?: number;
    /**
     * The average number of Profiling Fargate tasks over all hours in the current month for all organizations.
     */
    "fargateContainerProfilerProfilingFargateAvgSum"?: number;
    /**
     * The average number of Profiling Fargate Elastic Kubernetes Service tasks over all hours in the current month for all organizations.
     */
    "fargateContainerProfilerProfilingFargateEksAvgSum"?: number;
    /**
     * Shows the average of all Fargate tasks over all hours in the current month for all organizations.
     */
    "fargateTasksCountAvgSum"?: number;
    /**
     * Shows the sum of the high-water marks of all Fargate tasks over all hours in the current month for all organizations.
     */
    "fargateTasksCountHwmSum"?: number;
    /**
     * Shows the average number of Flex Logs Compute Large Instances over all hours in the current months for all organizations.
     */
    "flexLogsComputeLargeAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Compute Medium Instances over all hours in the current months for all organizations.
     */
    "flexLogsComputeMediumAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Compute Small Instances over all hours in the current months for all organizations.
     */
    "flexLogsComputeSmallAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Compute Extra Large Instances over all hours in the current months for all organizations.
     */
    "flexLogsComputeXlargeAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Compute Extra Small Instances over all hours in the current months for all organizations.
     */
    "flexLogsComputeXsmallAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Starter Instances over all hours in the current months for all organizations.
     */
    "flexLogsStarterAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Starter Storage Index Instances over all hours in the current months for all organizations.
     */
    "flexLogsStarterStorageIndexAvgSum"?: number;
    /**
     * Shows the average number of Flex Logs Starter Storage Retention Adjustment Instances over all hours in the current months for all organizations.
     */
    "flexLogsStarterStorageRetentionAdjustmentAvgSum"?: number;
    /**
     * Shows the average of all Flex Stored Logs over all hours in the current months for all organizations.
     */
    "flexStoredLogsAvgSum"?: number;
    /**
     * Shows the sum of all logs forwarding bytes over all hours in the current month for all organizations (data available as of April 1, 2023)
     */
    "forwardingEventsBytesAggSum"?: number;
    /**
     * Shows the 99th percentile of all GCP hosts over all hours in the current month for all organizations.
     */
    "gcpHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Heroku dynos over all hours in the current month for all organizations.
     */
    "herokuHostTop99pSum"?: number;
    /**
     * Shows sum of the high-water marks of incident management monthly active users in the current month for all organizations.
     */
    "incidentManagementMonthlyActiveUsersHwmSum"?: number;
    /**
     * Shows the sum of the high-water marks of Incident Management seats over all hours in the current month for all organizations.
     */
    "incidentManagementSeatsHwmSum"?: number;
    /**
     * Shows the sum of all log events indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "indexedEventsCountAggSum"?: number;
    /**
     * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current month for all organizations.
     */
    "infraHostTop99pSum"?: number;
    /**
     * Shows the sum of all log bytes ingested over all hours in the current month for all organizations.
     */
    "ingestedEventsBytesAggSum"?: number;
    /**
     * Shows the sum of all IoT devices over all hours in the current month for all organizations.
     */
    "iotDeviceAggSum"?: number;
    /**
     * Shows the 99th percentile of all IoT devices over all hours in the current month of all organizations.
     */
    "iotDeviceTop99pSum"?: number;
    /**
     * Shows the most recent hour in the current month for all organizations for which all usages were calculated.
     */
    "lastUpdated"?: Date;
    /**
     * Shows the sum of all live logs indexed over all hours in the current month for all organization (To be deprecated on October 1st, 2024).
     */
    "liveIndexedEventsAggSum"?: number;
    /**
     * Shows the sum of all live logs bytes ingested over all hours in the current month for all organizations (data available as of December 1, 2020).
     */
    "liveIngestedBytesAggSum"?: number;
    /**
     * Sum of all LLM observability sessions for all hours in the current month for all organizations.
     */
    "llmObservabilityAggSum"?: number;
    /**
     * Minimum spend for LLM observability sessions for all hours in the current month for all organizations.
     */
    "llmObservabilityMinSpendAggSum"?: number;
    /**
     * Object containing logs usage data broken down by retention period.
     */
    "logsByRetention"?: LogsByRetention;
    /**
     * Shows the sum of all mobile lite sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumLiteSessionCountAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Android over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountAndroidAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Flutter over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountFlutterAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on iOS over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountIosAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on React Native over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountReactnativeAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Roku over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountRokuAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM units over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumUnitsAggSum"?: number;
    /**
     * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current month for all organizations.
     */
    "ndmNetflowEventsAggSum"?: number;
    /**
     * Shows the sum of all Network flows indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "netflowIndexedEventsCountAggSum"?: number;
    /**
     * Shows the 99th percentile of all Network Device Monitoring wireless devices over all hours in the current month for all organizations.
     */
    "networkDeviceWirelessTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all distinct Cloud Network Monitoring hosts (formerly known as Network hosts) over all hours in the current month for all organizations.
     */
    "npmHostTop99pSum"?: number;
    /**
     * Sum of all observability pipelines bytes processed over all hours in the current month for all organizations.
     */
    "observabilityPipelinesBytesProcessedAggSum"?: number;
    /**
     * Shows the sum of Oracle Cloud Infrastructure hosts over all hours in the current months for all organizations
     */
    "ociHostAggSum"?: number;
    /**
     * Shows the 99th percentile of Oracle Cloud Infrastructure hosts over all hours in the current months for all organizations
     */
    "ociHostTop99pSum"?: number;
    /**
     * Shows the sum of the high-water marks of On-Call seats over all hours in the current month for all organizations.
     */
    "onCallSeatHwmSum"?: number;
    /**
     * Sum of all online archived events over all hours in the current month for all organizations.
     */
    "onlineArchiveEventsCountAggSum"?: number;
    /**
     * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
     */
    "opentelemetryApmHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current month for all organizations.
     */
    "opentelemetryHostTop99pSum"?: number;
    /**
     * Sum of all product analytics sessions for all hours in the current month for all organizations.
     */
    "productAnalyticsAggSum"?: number;
    /**
     * Shows the 99th percentile of all profiled Azure app services over all hours in the current month for all organizations.
     */
    "profilingAasCountTop99pSum"?: number;
    /**
     * Shows the average number of profiled containers over all hours in the current month for all organizations.
     */
    "profilingContainerAgentCountAvg"?: number;
    /**
     * Shows the 99th percentile of all profiled hosts over all hours in the current month for all organizations.
     */
    "profilingHostCountTop99pSum"?: number;
    /**
     * Sum of all Proxmox hosts over all hours in the current month for all organizations.
     */
    "proxmoxHostAggSum"?: number;
    /**
     * Sum of the 99th percentile of all Proxmox hosts over all hours in the current month for all organizations.
     */
    "proxmoxHostTop99pSum"?: number;
    /**
     * Shows the high-water mark of all published applications over all hours in the current month for all organizations.
     */
    "publishedAppHwmSum"?: number;
    /**
     * Shows the sum of all rehydrated logs indexed over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "rehydratedIndexedEventsAggSum"?: number;
    /**
     * Shows the sum of all rehydrated logs bytes ingested over all hours in the current month for all organizations (data available as of December 1, 2020).
     */
    "rehydratedIngestedBytesAggSum"?: number;
    /**
     * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "rumBrowserAndMobileSessionCount"?: number;
    /**
     * Shows the sum of all browser RUM legacy sessions over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumBrowserLegacySessionCountAggSum"?: number;
    /**
     * Shows the sum of all browser RUM lite sessions over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumBrowserLiteSessionCountAggSum"?: number;
    /**
     * Shows the sum of all browser RUM Session Replay counts over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumBrowserReplaySessionCountAggSum"?: number;
    /**
     * Sum of all RUM indexed sessions for all hours in the current month for all organizations.
     */
    "rumIndexedSessionsAggSum"?: number;
    /**
     * Sum of all RUM ingested sessions for all hours in the current month for all organizations.
     */
    "rumIngestedSessionsAggSum"?: number;
    /**
     * Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumLiteSessionCountAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountAndroidAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Flutter over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountFlutterAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountIosAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountReactnativeAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountRokuAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Android over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountAndroidAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountFlutterAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountIosAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Kotlin Multiplatform over all hours within the current month for all organizations.
     */
    "rumMobileLiteSessionCountKotlinmultiplatformAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountReactnativeAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Roku over all hours within the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountRokuAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Unity over all hours within the current month for all organizations.
     */
    "rumMobileLiteSessionCountUnityAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on Android over all hours within the current month for all organizations.
     */
    "rumMobileReplaySessionCountAndroidAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on iOS over all hours within the current month for all organizations.
     */
    "rumMobileReplaySessionCountIosAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on Kotlin Multiplatform over all hours within the current month for all organizations.
     */
    "rumMobileReplaySessionCountKotlinmultiplatformAggSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on React Native over all hours within the current month for all organizations.
     */
    "rumMobileReplaySessionCountReactnativeAggSum"?: number;
    /**
     * Shows the sum of all RUM Session Replay counts over all hours in the current month for all organizations (To be introduced on October 1st, 2024).
     */
    "rumReplaySessionCountAggSum"?: number;
    /**
     * Shows the sum of all browser RUM lite sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "rumSessionCountAggSum"?: number;
    /**
     * Sum of all RUM session replay add-on sessions for all hours in the current month for all organizations.
     */
    "rumSessionReplayAddOnAggSum"?: number;
    /**
     * Shows the sum of RUM sessions (browser and mobile) over all hours in the current month for all organizations.
     */
    "rumTotalSessionCountAggSum"?: number;
    /**
     * Shows the sum of all browser and mobile RUM units over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "rumUnitsAggSum"?: number;
    /**
     * Shows the average of all Software Composition Analysis Fargate tasks over all hours in the current months for all organizations.
     */
    "scaFargateCountAvgSum"?: number;
    /**
     * Shows the sum of the high-water marks of all Software Composition Analysis Fargate tasks over all hours in the current months for all organizations.
     */
    "scaFargateCountHwmSum"?: number;
    /**
     * Sum of all APM bytes scanned with sensitive data scanner in the current month for all organizations.
     */
    "sdsApmScannedBytesSum"?: number;
    /**
     * Sum of all event stream events bytes scanned with sensitive data scanner in the current month for all organizations.
     */
    "sdsEventsScannedBytesSum"?: number;
    /**
     * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
     */
    "sdsLogsScannedBytesSum"?: number;
    /**
     * Sum of all RUM bytes scanned with sensitive data scanner in the current month for all organizations.
     */
    "sdsRumScannedBytesSum"?: number;
    /**
     * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
     */
    "sdsTotalScannedBytesSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring for Azure App Service instances in the current month for all organizations.
     */
    "serverlessAppsApmApmAzureAppserviceInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring for Azure Function instances in the current month for all organizations.
     */
    "serverlessAppsApmApmAzureAzurefunctionInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring for Azure Container App instances in the current month for all organizations.
     */
    "serverlessAppsApmApmAzureContainerappInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring for Fargate Elastic Container Service tasks in the current month for all organizations.
     */
    "serverlessAppsApmApmFargateEcsTasksAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Function instances in the current month for all organizations.
     */
    "serverlessAppsApmApmGcpCloudfunctionInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Run instances in the current month for all organizations.
     */
    "serverlessAppsApmApmGcpCloudrunInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring in the current month for all organizations.
     */
    "serverlessAppsApmAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure App Service instances in the current month for all organizations.
     */
    "serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Function instances in the current month for all organizations.
     */
    "serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Container App instances in the current month for all organizations.
     */
    "serverlessAppsApmExclFargateApmAzureContainerappInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Function instances in the current month for all organizations.
     */
    "serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Run instances in the current month for all organizations.
     */
    "serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps with Application Performance Monitoring excluding Fargate in the current month for all organizations.
     */
    "serverlessAppsApmExclFargateAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Azure Container App instances in the current month for all organizations.
     */
    "serverlessAppsAzureContainerAppInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Azure in the current month for all organizations.
     */
    "serverlessAppsAzureCountAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Azure Function App instances in the current month for all organizations.
     */
    "serverlessAppsAzureFunctionAppInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Azure Web App instances in the current month for all organizations.
     */
    "serverlessAppsAzureWebAppInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Elastic Container Service in the current month for all organizations.
     */
    "serverlessAppsEcsAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Elastic Kubernetes Service in the current month for all organizations.
     */
    "serverlessAppsEksAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps excluding Fargate in the current month for all organizations.
     */
    "serverlessAppsExclFargateAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps excluding Fargate for Azure Container App instances in the current month for all organizations.
     */
    "serverlessAppsExclFargateAzureContainerAppInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps excluding Fargate for Azure Function App instances in the current month for all organizations.
     */
    "serverlessAppsExclFargateAzureFunctionAppInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps excluding Fargate for Azure Web App instances in the current month for all organizations.
     */
    "serverlessAppsExclFargateAzureWebAppInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Functions instances in the current month for all organizations.
     */
    "serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Run instances in the current month for all organizations.
     */
    "serverlessAppsExclFargateGoogleCloudRunInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Google Cloud Platform Cloud Functions instances in the current month for all organizations.
     */
    "serverlessAppsGoogleCloudFunctionsInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Google Cloud Platform Cloud Run instances in the current month for all organizations.
     */
    "serverlessAppsGoogleCloudRunInstancesAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Google Cloud in the current month for all organizations.
     */
    "serverlessAppsGoogleCountAvgSum"?: number;
    /**
     * Sum of the average number of Serverless Apps for Azure and Google Cloud in the current month for all organizations.
     */
    "serverlessAppsTotalCountAvgSum"?: number;
    /**
     * Shows the sum of all log events analyzed by Cloud SIEM over all hours in the current month for all organizations.
     */
    "siemAnalyzedLogsAddOnCountAggSum"?: number;
    /**
     * Shows the first date of usage in the current month for all organizations.
     */
    "startDate"?: Date;
    /**
     * Shows the sum of all Synthetic browser tests over all hours in the current month for all organizations.
     */
    "syntheticsBrowserCheckCallsCountAggSum"?: number;
    /**
     * Shows the sum of all Synthetic API tests over all hours in the current month for all organizations.
     */
    "syntheticsCheckCallsCountAggSum"?: number;
    /**
     * Shows the sum of Synthetic mobile application tests over all hours in the current month for all organizations.
     */
    "syntheticsMobileTestRunsAggSum"?: number;
    /**
     * Shows the sum of the high-water marks of used synthetics parallel testing slots over all hours in the current month for all organizations.
     */
    "syntheticsParallelTestingMaxSlotsHwmSum"?: number;
    /**
     * Shows the sum of all Indexed Spans indexed over all hours in the current month for all organizations.
     */
    "traceSearchIndexedEventsCountAggSum"?: number;
    /**
     * Shows the sum of all ingested APM span bytes over all hours in the current month for all organizations.
     */
    "twolIngestedEventsBytesAggSum"?: number;
    /**
     * Shows the 99th percentile of all Universal Service Monitoring hosts over all hours in the current month for all organizations.
     */
    "universalServiceMonitoringHostTop99pSum"?: number;
    /**
     * An array of objects regarding hourly usage.
     */
    "usage"?: Array<UsageSummaryDate>;
    /**
     * Shows the 99th percentile of all vSphere hosts over all hours in the current month for all organizations.
     */
    "vsphereHostTop99pSum"?: number;
    /**
     * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current month for all organizations.
     */
    "vulnManagementHostCountTop99pSum"?: number;
    /**
     * Sum of all workflows executed over all hours in the current month for all organizations.
     */
    "workflowExecutionsUsageAggSum"?: number;
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
