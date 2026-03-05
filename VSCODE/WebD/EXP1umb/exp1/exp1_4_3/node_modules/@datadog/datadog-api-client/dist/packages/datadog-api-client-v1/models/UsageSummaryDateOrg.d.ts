/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Global hourly report of all data billed by Datadog for a given organization.
 */
export declare class UsageSummaryDateOrg {
    /**
     * The account name.
     */
    "accountName"?: string;
    /**
     * The account public id.
     */
    "accountPublicId"?: string;
    /**
     * Shows the 99th percentile of all agent hosts over all hours in the current date for the given org.
     */
    "agentHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Azure app services using APM over all hours in the current date for the given org.
     */
    "apmAzureAppServiceHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current date for the given org.
     */
    "apmDevsecopsHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all distinct standalone Enterprise hosts over all hours in the current date for the given org.
     */
    "apmEnterpriseStandaloneHostsTop99p"?: number;
    /**
     * Shows the average of all APM ECS Fargate tasks over all hours in the current month for the given org.
     */
    "apmFargateCountAvg"?: number;
    /**
     * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for the given org.
     */
    "apmHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all distinct standalone Pro hosts over all hours in the current date for the given org.
     */
    "apmProStandaloneHostsTop99p"?: number;
    /**
     * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current month for the given org.
     */
    "appsecFargateCountAvg"?: number;
    /**
     * Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current month for the given org.
     */
    "asmServerlessSum"?: number;
    /**
     * Shows the sum of all audit logs lines indexed over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "auditLogsLinesIndexedSum"?: number;
    /**
     * Shows whether Audit Trail is enabled for the current date for the given org.
     */
    "auditTrailEnabledHwm"?: number;
    /**
     * The average total count for Fargate Container Profiler over all hours in the current month for the given org.
     */
    "avgProfiledFargateTasks"?: number;
    /**
     * Shows the 99th percentile of all AWS hosts over all hours in the current date for the given org.
     */
    "awsHostTop99p"?: number;
    /**
     * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
     */
    "awsLambdaFuncCount"?: number;
    /**
     * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
     */
    "awsLambdaInvocationsSum"?: number;
    /**
     * Shows the 99th percentile of all Azure app services over all hours in the current date for the given org.
     */
    "azureAppServiceTop99p"?: number;
    /**
     * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
     */
    "billableIngestedBytesSum"?: number;
    /**
     * Shows the sum of all Bits AI Investigations over all hours in the current date for the given org.
     */
    "bitsAiInvestigationsSum"?: number;
    /**
     * Shows the sum of all browser lite sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "browserRumLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all browser replay sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "browserRumReplaySessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM units over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "browserRumUnitsSum"?: number;
    /**
     * Shows the last value of the amount of cloud spend monitored for Enterprise over all hours in the current date for the given org.
     */
    "ccmSpendMonitoredEntLast"?: number;
    /**
     * Shows the last value of the amount of cloud spend monitored for Pro over all hours in the current date for the given org.
     */
    "ccmSpendMonitoredProLast"?: number;
    /**
     * Shows the sum of all CI pipeline indexed spans over all hours in the current date for the given org.
     */
    "ciPipelineIndexedSpansSum"?: number;
    /**
     * Shows the sum of all CI test indexed spans over all hours in the current date for the given org.
     */
    "ciTestIndexedSpansSum"?: number;
    /**
     * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current date for the given org.
     */
    "ciVisibilityItrCommittersHwm"?: number;
    /**
     * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current date for the given org.
     */
    "ciVisibilityPipelineCommittersHwm"?: number;
    /**
     * Shows the high-water mark of all CI visibility test committers over all hours in the current date for the given org.
     */
    "ciVisibilityTestCommittersHwm"?: number;
    /**
     * Host count average of Cloud Cost Management for AWS for the given date and given org.
     */
    "cloudCostManagementAwsHostCountAvg"?: number;
    /**
     * Host count average of Cloud Cost Management for Azure for the given date and given org.
     */
    "cloudCostManagementAzureHostCountAvg"?: number;
    /**
     * Host count average of Cloud Cost Management for GCP for the given date and given org.
     */
    "cloudCostManagementGcpHostCountAvg"?: number;
    /**
     * Host count average of Cloud Cost Management for all cloud providers for the given date and given org.
     */
    "cloudCostManagementHostCountAvg"?: number;
    /**
     * Average host count for Cloud Cost Management on OCI for the given date and organization.
     */
    "cloudCostManagementOciHostCountAvg"?: number;
    /**
     * Shows the sum of all Cloud Security Information and Event Management events over all hours in the current date for the given org.
     */
    "cloudSiemEventsSum"?: number;
    /**
     * Shows the high-water mark of all Static Analysis committers over all hours in the current date for the given org.
     */
    "codeAnalysisSaCommittersHwm"?: number;
    /**
     * Shows the high-water mark of all static Software Composition Analysis committers over all hours in the current date for the given org.
     */
    "codeAnalysisScaCommittersHwm"?: number;
    /**
     * Shows the 99th percentile of all Code Security hosts over all hours in the current date for the given org.
     */
    "codeSecurityHostTop99p"?: number;
    /**
     * Shows the average of all distinct containers over all hours in the current date for the given org.
     */
    "containerAvg"?: number;
    /**
     * Shows the average of containers without the Datadog Agent over all hours in the current date for the given organization.
     */
    "containerExclAgentAvg"?: number;
    /**
     * Shows the high-water mark of all distinct containers over all hours in the current date for the given org.
     */
    "containerHwm"?: number;
    /**
     * Shows the sum of all Cloud Security Management Enterprise compliance containers over all hours in the current date for the given org.
     */
    "csmContainerEnterpriseComplianceCountSum"?: number;
    /**
     * Shows the sum of all Cloud Security Management Enterprise Cloud Workload Security containers over all hours in the current date for the given org.
     */
    "csmContainerEnterpriseCwsCountSum"?: number;
    /**
     * Shows the sum of all Cloud Security Management Enterprise containers over all hours in the current date for the given org.
     */
    "csmContainerEnterpriseTotalCountSum"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise Azure app services hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseAasHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise AWS hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseAwsHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise Azure hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseAzureHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise compliance hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseComplianceHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise Cloud Workload Security hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseCwsHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise GCP hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseGcpHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Enterprise hosts over all hours in the current date for the given org.
     */
    "csmHostEnterpriseTotalHostCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current date for the given org.
     */
    "cspmAasHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current date for the given org.
     */
    "cspmAwsHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current date for the given org.
     */
    "cspmAzureHostTop99p"?: number;
    /**
     * Shows the average number of Cloud Security Management Pro containers over all hours in the current date for the given org.
     */
    "cspmContainerAvg"?: number;
    /**
     * Shows the high-water mark of Cloud Security Management Pro containers over all hours in the current date for the given org.
     */
    "cspmContainerHwm"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current date for the given org.
     */
    "cspmGcpHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current date for the given org.
     */
    "cspmHostTop99p"?: number;
    /**
     * Shows the average number of distinct historical custom metrics over all hours in the current date for the given org.
     */
    "customHistoricalTsAvg"?: number;
    /**
     * Shows the average number of distinct live custom metrics over all hours in the current date for the given org.
     */
    "customLiveTsAvg"?: number;
    /**
     * Shows the average number of distinct custom metrics over all hours in the current date for the given org.
     */
    "customTsAvg"?: number;
    /**
     * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for the given org.
     */
    "cwsContainerCountAvg"?: number;
    /**
     * Shows the average of all distinct Cloud Workload Security Fargate tasks over all hours in the current date for the given org.
     */
    "cwsFargateTaskAvg"?: number;
    /**
     * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for the given org.
     */
    "cwsHostTop99p"?: number;
    /**
     * Shows the sum of all Data Jobs Monitoring hosts over all hours in the current date for the given org.
     */
    "dataJobsMonitoringHostHrSum"?: number;
    /**
     * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current month for the given org.
     */
    "dbmHostTop99pSum"?: number;
    /**
     * Shows the average of all distinct Database Monitoring normalized queries over all hours in the current month for the given org.
     */
    "dbmQueriesAvgSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts with the Datadog Agent over all hours in the current date for the given org.
     */
    "ephInfraHostAgentSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on Alibaba over all hours in the current date for the given org.
     */
    "ephInfraHostAlibabaSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on AWS over all hours in the current date for the given org.
     */
    "ephInfraHostAwsSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on Azure over all hours in the current date for the given org.
     */
    "ephInfraHostAzureSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts for Enterprise over all hours in the current date for the given org.
     */
    "ephInfraHostEntSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on GCP over all hours in the current date for the given org.
     */
    "ephInfraHostGcpSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts on Heroku over all hours in the current date for the given org.
     */
    "ephInfraHostHerokuSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts with only Azure App Services over all hours in the current date for the given org.
     */
    "ephInfraHostOnlyAasSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts with only vSphere over all hours in the current date for the given org.
     */
    "ephInfraHostOnlyVsphereSum"?: number;
    /**
     * Shows the sum of all ephemeral APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
     */
    "ephInfraHostOpentelemetryApmSum"?: number;
    /**
     * Shows the sum of all ephemeral hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
     */
    "ephInfraHostOpentelemetrySum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts for Pro over all hours in the current date for the given org.
     */
    "ephInfraHostProSum"?: number;
    /**
     * Shows the sum of all ephemeral infrastructure hosts for Pro Plus over all hours in the current date for the given org.
     */
    "ephInfraHostProplusSum"?: number;
    /**
     * Sum of all ephemeral infrastructure hosts for Proxmox over all hours in the current date for the given organization.
     */
    "ephInfraHostProxmoxSum"?: number;
    /**
     * Shows the sum of all Error Tracking APM error events over all hours in the current date for the given org.
     */
    "errorTrackingApmErrorEventsSum"?: number;
    /**
     * Shows the sum of all Error Tracking error events over all hours in the current date for the given org.
     */
    "errorTrackingErrorEventsSum"?: number;
    /**
     * Shows the sum of all Error Tracking events over all hours in the current date for the given org.
     */
    "errorTrackingEventsSum"?: number;
    /**
     * Shows the sum of all Error Tracking RUM error events over all hours in the current date for the given org.
     */
    "errorTrackingRumErrorEventsSum"?: number;
    /**
     * Shows the sum of all Event Management correlated events over all hours in the current date for the given org.
     */
    "eventManagementCorrelationCorrelatedEventsSum"?: number;
    /**
     * Shows the sum of all Event Management correlated related events over all hours in the current date for the given org.
     */
    "eventManagementCorrelationCorrelatedRelatedEventsSum"?: number;
    /**
     * Shows the sum of all Event Management correlations over all hours in the current date for the given org.
     */
    "eventManagementCorrelationSum"?: number;
    /**
     * The average number of Profiling Fargate tasks over all hours in the current month for the given org.
     */
    "fargateContainerProfilerProfilingFargateAvg"?: number;
    /**
     * The average number of Profiling Fargate Elastic Kubernetes Service tasks over all hours in the current month for the given org.
     */
    "fargateContainerProfilerProfilingFargateEksAvg"?: number;
    /**
     * The average task count for Fargate.
     */
    "fargateTasksCountAvg"?: number;
    /**
     * Shows the high-water mark of all Fargate tasks over all hours in the current date for the given org.
     */
    "fargateTasksCountHwm"?: number;
    /**
     * Shows the average number of Flex Logs Compute Large Instances over all hours in the current date for the given org.
     */
    "flexLogsComputeLargeAvg"?: number;
    /**
     * Shows the average number of Flex Logs Compute Medium Instances over all hours in the current date for the given org.
     */
    "flexLogsComputeMediumAvg"?: number;
    /**
     * Shows the average number of Flex Logs Compute Small Instances over all hours in the current date for the given org.
     */
    "flexLogsComputeSmallAvg"?: number;
    /**
     * Shows the average number of Flex Logs Compute Extra Large Instances over all hours in the current date for the given org.
     */
    "flexLogsComputeXlargeAvg"?: number;
    /**
     * Shows the average number of Flex Logs Compute Extra Small Instances over all hours in the current date for the given org.
     */
    "flexLogsComputeXsmallAvg"?: number;
    /**
     * Shows the average number of Flex Logs Starter Instances over all hours in the current date for the given org.
     */
    "flexLogsStarterAvg"?: number;
    /**
     * Shows the average number of Flex Logs Starter Storage Index Instances over all hours in the current date for the given org.
     */
    "flexLogsStarterStorageIndexAvg"?: number;
    /**
     * Shows the average number of Flex Logs Starter Storage Retention Adjustment Instances over all hours in the current date for the given org.
     */
    "flexLogsStarterStorageRetentionAdjustmentAvg"?: number;
    /**
     * Shows the average of all Flex Stored Logs over all hours in the current date for the given org.
     */
    "flexStoredLogsAvg"?: number;
    /**
     * Shows the sum of all log bytes forwarded over all hours in the current date for the given org.
     */
    "forwardingEventsBytesSum"?: number;
    /**
     * Shows the 99th percentile of all GCP hosts over all hours in the current date for the given org.
     */
    "gcpHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Heroku dynos over all hours in the current date for the given org.
     */
    "herokuHostTop99p"?: number;
    /**
     * The organization id.
     */
    "id"?: string;
    /**
     * Shows the high-water mark of incident management monthly active users over all hours in the current date for the given org.
     */
    "incidentManagementMonthlyActiveUsersHwm"?: number;
    /**
     * Shows the high-water mark of Incident Management seats over all hours on the current date for the given organization.
     */
    "incidentManagementSeatsHwm"?: number;
    /**
     * Shows the sum of all log events indexed over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "indexedEventsCountSum"?: number;
    /**
     * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for the given org.
     */
    "infraHostTop99p"?: number;
    /**
     * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
     */
    "ingestedEventsBytesSum"?: number;
    /**
     * Shows the sum of all IoT devices over all hours in the current date for the given org.
     */
    "iotDeviceAggSum"?: number;
    /**
     * Shows the 99th percentile of all IoT devices over all hours in the current date for the given org.
     */
    "iotDeviceTop99pSum"?: number;
    /**
     * Shows the sum of all LLM Observability minimum spend over all hours in the current date for the given org.
     */
    "llmObservabilityMinSpendSum"?: number;
    /**
     * Shows the sum of all LLM observability sessions over all hours in the current date for the given org.
     */
    "llmObservabilitySum"?: number;
    /**
     * Shows the sum of all mobile lite sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Android over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Flutter over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountFlutterSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on iOS over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on React Native over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Roku over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountRokuSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountSum"?: number;
    /**
     * Shows the sum of all mobile RUM units over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "mobileRumUnitsSum"?: number;
    /**
     * The organization name.
     */
    "name"?: string;
    /**
     * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current date for the given org.
     */
    "ndmNetflowEventsSum"?: number;
    /**
     * Shows the sum of all Network flows indexed over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "netflowIndexedEventsCountSum"?: number;
    /**
     * Shows the 99th percentile of all Network Device Monitoring wireless devices over all hours in the current date for the given org.
     */
    "networkDeviceWirelessTop99p"?: number;
    /**
     * Shows the 99th percentile of all distinct Cloud Network Monitoring hosts (formerly known as Network hosts) over all hours in the current date for the given org.
     */
    "npmHostTop99p"?: number;
    /**
     * Sum of all observability pipelines bytes processed over all hours in the current date for the given org.
     */
    "observabilityPipelinesBytesProcessedSum"?: number;
    /**
     * Shows the sum of all Oracle Cloud Infrastructure hosts over all hours in the current date for the given org.
     */
    "ociHostSum"?: number;
    /**
     * Shows the 99th percentile of all Oracle Cloud Infrastructure hosts over all hours in the current date for the given org.
     */
    "ociHostTop99p"?: number;
    /**
     * Shows the high-water mark of On-Call seats over all hours in the current date for the given org.
     */
    "onCallSeatHwm"?: number;
    /**
     * Sum of all online archived events over all hours in the current date for the given org.
     */
    "onlineArchiveEventsCountSum"?: number;
    /**
     * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
     */
    "opentelemetryApmHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
     */
    "opentelemetryHostTop99p"?: number;
    /**
     * Shows the sum of all product analytics sessions over all hours in the current date for the given org.
     */
    "productAnalyticsSum"?: number;
    /**
     * Shows the 99th percentile of all profiled Azure app services over all hours in the current date for all organizations.
     */
    "profilingAasCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all profiled hosts over all hours within the current date for the given org.
     */
    "profilingHostTop99p"?: number;
    /**
     * Sum of all Proxmox hosts over all hours in the current date for the given organization.
     */
    "proxmoxHostSum"?: number;
    /**
     * 99th percentile of all Proxmox hosts over all hours in the current date for the given organization.
     */
    "proxmoxHostTop99p"?: number;
    /**
     * The organization public id.
     */
    "publicId"?: string;
    /**
     * Shows the high-water mark of all published applications over all hours in the current date for the given org.
     */
    "publishedAppHwm"?: number;
    /**
     * The region of the organization.
     */
    "region"?: string;
    /**
     * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "rumBrowserAndMobileSessionCount"?: number;
    /**
     * Shows the sum of all browser RUM legacy sessions over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumBrowserLegacySessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM lite sessions over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumBrowserLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM Session Replay counts over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumBrowserReplaySessionCountSum"?: number;
    /**
     * Shows the sum of all RUM indexed sessions over all hours in the current date for the given org.
     */
    "rumIndexedSessionsSum"?: number;
    /**
     * Shows the sum of all RUM ingested sessions over all hours in the current date for the given org.
     */
    "rumIngestedSessionsSum"?: number;
    /**
     * Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Flutter over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountFlutterSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountRokuSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Android over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountFlutterSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Kotlin Multiplatform over all hours within the current date for the given org.
     */
    "rumMobileLiteSessionCountKotlinmultiplatformSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Roku over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountRokuSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Unity over all hours within the current date for the given org.
     */
    "rumMobileLiteSessionCountUnitySum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on Android over all hours within the current date for the given org.
     */
    "rumMobileReplaySessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on iOS over all hours within the current date for the given org.
     */
    "rumMobileReplaySessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on Kotlin Multiplatform over all hours within the current date for the given org.
     */
    "rumMobileReplaySessionCountKotlinmultiplatformSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on React Native over all hours within the current date for the given org.
     */
    "rumMobileReplaySessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all RUM Session Replay counts over all hours in the current date for the given org (To be introduced on October 1st, 2024).
     */
    "rumReplaySessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM lite sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "rumSessionCountSum"?: number;
    /**
     * Shows the sum of all RUM session replay add-on sessions over all hours in the current date for the given org.
     */
    "rumSessionReplayAddOnSum"?: number;
    /**
     * Shows the sum of RUM sessions (browser and mobile) over all hours in the current date for the given org.
     */
    "rumTotalSessionCountSum"?: number;
    /**
     * Shows the sum of all browser and mobile RUM units over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
     */
    "rumUnitsSum"?: number;
    /**
     * Shows the average of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.
     */
    "scaFargateCountAvg"?: number;
    /**
     * Shows the sum of the high-water marks of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.
     */
    "scaFargateCountHwm"?: number;
    /**
     * Sum of all APM bytes scanned with sensitive data scanner over all hours in the current date for the given org.
     */
    "sdsApmScannedBytesSum"?: number;
    /**
     * Sum of all event stream events bytes scanned with sensitive data scanner over all hours in the current date for the given org.
     */
    "sdsEventsScannedBytesSum"?: number;
    /**
     * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for the given org.
     */
    "sdsLogsScannedBytesSum"?: number;
    /**
     * Sum of all RUM bytes scanned with sensitive data scanner over all hours in the current date for the given org.
     */
    "sdsRumScannedBytesSum"?: number;
    /**
     * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for the given org.
     */
    "sdsTotalScannedBytesSum"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure App Service instances for the given date and given org.
     */
    "serverlessAppsApmApmAzureAppserviceInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Function instances for the given date and given org.
     */
    "serverlessAppsApmApmAzureAzurefunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Container App instances for the given date and given org.
     */
    "serverlessAppsApmApmAzureContainerappInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Fargate Elastic Container Service tasks for the given date and given org.
     */
    "serverlessAppsApmApmFargateEcsTasksAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Function instances for the given date and given org.
     */
    "serverlessAppsApmApmGcpCloudfunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Run instances for the given date and given org.
     */
    "serverlessAppsApmApmGcpCloudrunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for the given date and given org.
     */
    "serverlessAppsApmAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure App Service instances for the given date and given org.
     */
    "serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Function instances for the given date and given org.
     */
    "serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Container App instances for the given date and given org.
     */
    "serverlessAppsApmExclFargateApmAzureContainerappInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Function instances for the given date and given org.
     */
    "serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Run instances for the given date and given org.
     */
    "serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for the given date and given org.
     */
    "serverlessAppsApmExclFargateAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure Container App instances for the given date and given org.
     */
    "serverlessAppsAzureContainerAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure for the given date and given org.
     */
    "serverlessAppsAzureCountAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure Function App instances for the given date and given org.
     */
    "serverlessAppsAzureFunctionAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure Web App instances for the given date and given org.
     */
    "serverlessAppsAzureWebAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Elastic Container Service for the given date and given org.
     */
    "serverlessAppsEcsAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Elastic Kubernetes Service for the given date and given org.
     */
    "serverlessAppsEksAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for the given date and given org.
     */
    "serverlessAppsExclFargateAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Azure Container App instances for the given date and given org.
     */
    "serverlessAppsExclFargateAzureContainerAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Azure Function App instances for the given date and given org.
     */
    "serverlessAppsExclFargateAzureFunctionAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Azure Web App instances for the given date and given org.
     */
    "serverlessAppsExclFargateAzureWebAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Functions instances for the given date and given org.
     */
    "serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Run instances for the given date and given org.
     */
    "serverlessAppsExclFargateGoogleCloudRunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Google Cloud Platform Cloud Functions instances for the given date and given org.
     */
    "serverlessAppsGoogleCloudFunctionsInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Google Cloud Platform Cloud Run instances for the given date and given org.
     */
    "serverlessAppsGoogleCloudRunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Google Cloud for the given date and given org.
     */
    "serverlessAppsGoogleCountAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure and Google Cloud for the given date and given org.
     */
    "serverlessAppsTotalCountAvg"?: number;
    /**
     * Shows the sum of all log events analyzed by Cloud SIEM over all hours in the current date for the given org.
     */
    "siemAnalyzedLogsAddOnCountSum"?: number;
    /**
     * Shows the sum of all Synthetic browser tests over all hours in the current date for the given org.
     */
    "syntheticsBrowserCheckCallsCountSum"?: number;
    /**
     * Shows the sum of all Synthetic API tests over all hours in the current date for the given org.
     */
    "syntheticsCheckCallsCountSum"?: number;
    /**
     * Shows the sum of all Synthetic mobile application tests over all hours in the current date for the given org.
     */
    "syntheticsMobileTestRunsSum"?: number;
    /**
     * Shows the high-water mark of used synthetics parallel testing slots over all hours in the current date for the given org.
     */
    "syntheticsParallelTestingMaxSlotsHwm"?: number;
    /**
     * Shows the sum of all Indexed Spans indexed over all hours in the current date for the given org.
     */
    "traceSearchIndexedEventsCountSum"?: number;
    /**
     * Shows the sum of all ingested APM span bytes over all hours in the current date for the given org.
     */
    "twolIngestedEventsBytesSum"?: number;
    /**
     * Shows the 99th percentile of all Universal Service Monitoring hosts over all hours in the current date for the given org.
     */
    "universalServiceMonitoringHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all vSphere hosts over all hours in the current date for the given org.
     */
    "vsphereHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current date for the given org.
     */
    "vulnManagementHostCountTop99p"?: number;
    /**
     * Sum of all workflows executed over all hours in the current date for the given org.
     */
    "workflowExecutionsUsageSum"?: number;
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
