/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response with hourly report of all data billed by Datadog all organizations.
 */
export declare class UsageSummaryDate {
    /**
     * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
     */
    "agentHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
     */
    "apmAzureAppServiceHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current date for the given org.
     */
    "apmDevsecopsHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all distinct standalone Enterprise hosts over all hours in the current date for all organizations.
     */
    "apmEnterpriseStandaloneHostsTop99p"?: number;
    /**
     * Shows the average of all APM ECS Fargate tasks over all hours in the current date for all organizations.
     */
    "apmFargateCountAvg"?: number;
    /**
     * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
     */
    "apmHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all distinct standalone Pro hosts over all hours in the current date for all organizations.
     */
    "apmProStandaloneHostsTop99p"?: number;
    /**
     * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current date for all organizations.
     */
    "appsecFargateCountAvg"?: number;
    /**
     * Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current date for all organizations.
     */
    "asmServerlessSum"?: number;
    /**
     * Shows the sum of audit logs lines indexed over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "auditLogsLinesIndexedSum"?: number;
    /**
     * Shows the number of organizations that had Audit Trail enabled in the current date.
     */
    "auditTrailEnabledHwm"?: number;
    /**
     * The average total count for Fargate Container Profiler over all hours in the current date for all organizations.
     */
    "avgProfiledFargateTasks"?: number;
    /**
     * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
     */
    "awsHostTop99p"?: number;
    /**
     * Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.
     */
    "awsLambdaFuncCount"?: number;
    /**
     * Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.
     */
    "awsLambdaInvocationsSum"?: number;
    /**
     * Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.
     */
    "azureAppServiceTop99p"?: number;
    /**
     * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
     */
    "billableIngestedBytesSum"?: number;
    /**
     * Shows the sum of all Bits AI Investigations over all hours in the current date for all organizations.
     */
    "bitsAiInvestigationsSum"?: number;
    /**
     * Shows the sum of all browser lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "browserRumLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all browser replay sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "browserRumReplaySessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "browserRumUnitsSum"?: number;
    /**
     * Shows the last value of the amount of cloud spend monitored for Enterprise over all hours in the current date for all organizations.
     */
    "ccmSpendMonitoredEntLast"?: number;
    /**
     * Shows the last value of the amount of cloud spend monitored for Pro over all hours in the current date for all organizations.
     */
    "ccmSpendMonitoredProLast"?: number;
    /**
     * Shows the sum of all CI pipeline indexed spans over all hours in the current month for all organizations.
     */
    "ciPipelineIndexedSpansSum"?: number;
    /**
     * Shows the sum of all CI test indexed spans over all hours in the current month for all organizations.
     */
    "ciTestIndexedSpansSum"?: number;
    /**
     * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current month for all organizations.
     */
    "ciVisibilityItrCommittersHwm"?: number;
    /**
     * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.
     */
    "ciVisibilityPipelineCommittersHwm"?: number;
    /**
     * Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.
     */
    "ciVisibilityTestCommittersHwm"?: number;
    /**
     * Host count average of Cloud Cost Management for AWS for the given date and given organization.
     */
    "cloudCostManagementAwsHostCountAvg"?: number;
    /**
     * Host count average of Cloud Cost Management for Azure for the given date and given organization.
     */
    "cloudCostManagementAzureHostCountAvg"?: number;
    /**
     * Host count average of Cloud Cost Management for GCP for the given date and given organization.
     */
    "cloudCostManagementGcpHostCountAvg"?: number;
    /**
     * Host count average of Cloud Cost Management for all cloud providers for the given date and given organization.
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
     * Shows the average of all distinct containers over all hours in the current date for all organizations.
     */
    "containerAvg"?: number;
    /**
     * Shows the average of containers without the Datadog Agent over all hours in the current date for all organizations.
     */
    "containerExclAgentAvg"?: number;
    /**
     * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
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
     * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current date for all organizations.
     */
    "cspmAasHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current date for all organizations.
     */
    "cspmAwsHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current date for all organizations.
     */
    "cspmAzureHostTop99p"?: number;
    /**
     * Shows the average number of Cloud Security Management Pro containers over all hours in the current date for all organizations.
     */
    "cspmContainerAvg"?: number;
    /**
     * Shows the high-water mark of Cloud Security Management Pro containers over all hours in the current date for all organizations.
     */
    "cspmContainerHwm"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current date for all organizations.
     */
    "cspmGcpHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current date for all organizations.
     */
    "cspmHostTop99p"?: number;
    /**
     * Shows the average number of distinct custom metrics over all hours in the current date for all organizations.
     */
    "customTsAvg"?: number;
    /**
     * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for all organizations.
     */
    "cwsContainerCountAvg"?: number;
    /**
     * Shows the average of all distinct Cloud Workload Security Fargate tasks over all hours in the current date for all organizations.
     */
    "cwsFargateTaskAvg"?: number;
    /**
     * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for all organizations.
     */
    "cwsHostTop99p"?: number;
    /**
     * Shows the sum of all Data Jobs Monitoring hosts over all hours in the current date for the given org.
     */
    "dataJobsMonitoringHostHrSum"?: number;
    /**
     * The date for the usage.
     */
    "date"?: Date;
    /**
     * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current date for all organizations.
     */
    "dbmHostTop99p"?: number;
    /**
     * Shows the average of all normalized Database Monitoring queries over all hours in the current date for all organizations.
     */
    "dbmQueriesCountAvg"?: number;
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
     * Sum of all ephemeral infrastructure hosts for Proxmox over all hours in the current date for all organizations.
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
     * Shows the sum of all Event Management correlated events over all hours in the current date for all organizations.
     */
    "eventManagementCorrelationCorrelatedEventsSum"?: number;
    /**
     * Shows the sum of all Event Management correlated related events over all hours in the current date for all organizations.
     */
    "eventManagementCorrelationCorrelatedRelatedEventsSum"?: number;
    /**
     * Shows the sum of all Event Management correlations over all hours in the current date for all organizations.
     */
    "eventManagementCorrelationSum"?: number;
    /**
     * The average number of Profiling Fargate tasks over all hours in the current date for all organizations.
     */
    "fargateContainerProfilerProfilingFargateAvg"?: number;
    /**
     * The average number of Profiling Fargate Elastic Kubernetes Service tasks over all hours in the current date for all organizations.
     */
    "fargateContainerProfilerProfilingFargateEksAvg"?: number;
    /**
     * Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.
     */
    "fargateTasksCountAvg"?: number;
    /**
     * Shows the average of all Fargate tasks over all hours in the current date for all organizations.
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
     * Shows the sum of all log bytes forwarded over all hours in the current date for all organizations.
     */
    "forwardingEventsBytesSum"?: number;
    /**
     * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
     */
    "gcpHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
     */
    "herokuHostTop99p"?: number;
    /**
     * Shows the high-water mark of incident management monthly active users over all hours in the current date for all organizations.
     */
    "incidentManagementMonthlyActiveUsersHwm"?: number;
    /**
     * Shows the high-water mark of Incident Management seats over all hours on the current date for all organizations.
     */
    "incidentManagementSeatsHwm"?: number;
    /**
     * Shows the sum of all log events indexed over all hours in the current date for all organizations.
     */
    "indexedEventsCountSum"?: number;
    /**
     * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.
     */
    "infraHostTop99p"?: number;
    /**
     * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
     */
    "ingestedEventsBytesSum"?: number;
    /**
     * Shows the sum of all IoT devices over all hours in the current date for all organizations.
     */
    "iotDeviceSum"?: number;
    /**
     * Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.
     */
    "iotDeviceTop99p"?: number;
    /**
     * Sum of all LLM observability minimum spend over all hours in the current date for all organizations.
     */
    "llmObservabilityMinSpendSum"?: number;
    /**
     * Sum of all LLM observability sessions over all hours in the current date for all organizations.
     */
    "llmObservabilitySum"?: number;
    /**
     * Shows the sum of all mobile lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Android over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Flutter over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountFlutterSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on iOS over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on React Native over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions on Roku over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountRokuSum"?: number;
    /**
     * Shows the sum of all mobile RUM sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumSessionCountSum"?: number;
    /**
     * Shows the sum of all mobile RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "mobileRumUnitsSum"?: number;
    /**
     * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current date for the given org.
     */
    "ndmNetflowEventsSum"?: number;
    /**
     * Shows the sum of all Network flows indexed over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "netflowIndexedEventsCountSum"?: number;
    /**
     * Shows the 99th percentile of all Network Device Monitoring wireless devices over all hours in the current date for all organizations.
     */
    "networkDeviceWirelessTop99p"?: number;
    /**
     * Shows the 99th percentile of all distinct Cloud Network Monitoring hosts (formerly known as Network hosts) over all hours in the current date for all organizations.
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
     * Shows the high-water mark of On-Call seats over all hours in the current date for all organizations.
     */
    "onCallSeatHwm"?: number;
    /**
     * Sum of all online archived events over all hours in the current date for all organizations.
     */
    "onlineArchiveEventsCountSum"?: number;
    /**
     * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
     */
    "opentelemetryApmHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
     */
    "opentelemetryHostTop99p"?: number;
    /**
     * Organizations associated with a user.
     */
    "orgs"?: Array<UsageSummaryDateOrg>;
    /**
     * Sum of all product analytics sessions over all hours in the current date for all organizations.
     */
    "productAnalyticsSum"?: number;
    /**
     * Shows the 99th percentile of all profiled Azure app services over all hours in the current date for all organizations.
     */
    "profilingAasCountTop99p"?: number;
    /**
     * Shows the 99th percentile of all profiled hosts over all hours within the current date for all organizations.
     */
    "profilingHostTop99p"?: number;
    /**
     * Sum of all Proxmox hosts over all hours in the current date for all organizations.
     */
    "proxmoxHostSum"?: number;
    /**
     * 99th percentile of all Proxmox hosts over all hours in the current date for all organizations.
     */
    "proxmoxHostTop99p"?: number;
    /**
     * Shows the high-water mark of all published applications over all hours in the current date for all organizations.
     */
    "publishedAppHwm"?: number;
    /**
     * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations (To be deprecated on October 1st, 2024).
     */
    "rumBrowserAndMobileSessionCount"?: number;
    /**
     * Shows the sum of all browser RUM legacy sessions over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumBrowserLegacySessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM lite sessions over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumBrowserLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM Session Replay counts over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumBrowserReplaySessionCountSum"?: number;
    /**
     * Sum of all RUM indexed sessions over all hours in the current date for all organizations.
     */
    "rumIndexedSessionsSum"?: number;
    /**
     * Sum of all RUM ingested sessions over all hours in the current date for all organizations.
     */
    "rumIngestedSessionsSum"?: number;
    /**
     * Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumLiteSessionCountSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy Sessions on Flutter over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountFlutterSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLegacySessionCountRokuSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Android over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountAndroidSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountFlutterSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountIosSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Kotlin Multiplatform over all hours within the current date for all organizations.
     */
    "rumMobileLiteSessionCountKotlinmultiplatformSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Roku over all hours within the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumMobileLiteSessionCountRokuSum"?: number;
    /**
     * Shows the sum of all mobile RUM lite sessions on Unity over all hours within the current date for all organizations.
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
     * Shows the sum of all mobile RUM replay sessions on Kotlin Multiplatform over all hours within the current date for all organizations.
     */
    "rumMobileReplaySessionCountKotlinmultiplatformSum"?: number;
    /**
     * Shows the sum of all mobile RUM replay sessions on React Native over all hours within the current date for the given org.
     */
    "rumMobileReplaySessionCountReactnativeSum"?: number;
    /**
     * Shows the sum of all RUM Session Replay counts over all hours in the current date for all organizations (To be introduced on October 1st, 2024).
     */
    "rumReplaySessionCountSum"?: number;
    /**
     * Shows the sum of all browser RUM lite sessions over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
     */
    "rumSessionCountSum"?: number;
    /**
     * Sum of all RUM session replay add-on sessions over all hours in the current date for all organizations.
     */
    "rumSessionReplayAddOnSum"?: number;
    /**
     * Shows the sum of RUM sessions (browser and mobile) over all hours in the current date for all organizations.
     */
    "rumTotalSessionCountSum"?: number;
    /**
     * Shows the sum of all browser and mobile RUM units over all hours in the current date for all organizations (To be deprecated on October 1st, 2024).
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
     * Sum of all APM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
     */
    "sdsApmScannedBytesSum"?: number;
    /**
     * Sum of all event stream events bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
     */
    "sdsEventsScannedBytesSum"?: number;
    /**
     * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
     */
    "sdsLogsScannedBytesSum"?: number;
    /**
     * Sum of all RUM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
     */
    "sdsRumScannedBytesSum"?: number;
    /**
     * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
     */
    "sdsTotalScannedBytesSum"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure App Service instances for the current date for all organizations.
     */
    "serverlessAppsApmApmAzureAppserviceInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Function instances for the current date for all organizations.
     */
    "serverlessAppsApmApmAzureAzurefunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Azure Container App instances for the current date for all organizations.
     */
    "serverlessAppsApmApmAzureContainerappInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Fargate Elastic Container Service tasks for the current date for all organizations.
     */
    "serverlessAppsApmApmFargateEcsTasksAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Function instances for the current date for all organizations.
     */
    "serverlessAppsApmApmGcpCloudfunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for Google Cloud Platform Cloud Run instances for the current date for all organizations.
     */
    "serverlessAppsApmApmGcpCloudrunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring for the current date for all organizations.
     */
    "serverlessAppsApmAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure App Service instances for the current date for all organizations.
     */
    "serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Function instances for the current date for all organizations.
     */
    "serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Azure Container App instances for the current date for all organizations.
     */
    "serverlessAppsApmExclFargateApmAzureContainerappInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Function instances for the current date for all organizations.
     */
    "serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for Google Cloud Platform Cloud Run instances for the current date for all organizations.
     */
    "serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps with Application Performance Monitoring excluding Fargate for the current date for all organizations.
     */
    "serverlessAppsApmExclFargateAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure Container App instances for the current date for all organizations.
     */
    "serverlessAppsAzureContainerAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure for the given date and given org.
     */
    "serverlessAppsAzureCountAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure Function App instances for the current date for all organizations.
     */
    "serverlessAppsAzureFunctionAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Azure Web App instances for the current date for all organizations.
     */
    "serverlessAppsAzureWebAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Elastic Container Service for the current date for all organizations.
     */
    "serverlessAppsEcsAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Elastic Kubernetes Service for the current date for all organizations.
     */
    "serverlessAppsEksAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for the current date for all organizations.
     */
    "serverlessAppsExclFargateAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Azure Container App instances for the current date for all organizations.
     */
    "serverlessAppsExclFargateAzureContainerAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Azure Function App instances for the current date for all organizations.
     */
    "serverlessAppsExclFargateAzureFunctionAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Azure Web App instances for the current date for all organizations.
     */
    "serverlessAppsExclFargateAzureWebAppInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Functions instances for the current date for all organizations.
     */
    "serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps excluding Fargate for Google Cloud Platform Cloud Run instances for the current date for all organizations.
     */
    "serverlessAppsExclFargateGoogleCloudRunInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Google Cloud Platform Cloud Functions instances for the current date for all organizations.
     */
    "serverlessAppsGoogleCloudFunctionsInstancesAvg"?: number;
    /**
     * Shows the average number of Serverless Apps for Google Cloud Platform Cloud Run instances for the current date for all organizations.
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
     * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
     */
    "syntheticsBrowserCheckCallsCountSum"?: number;
    /**
     * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
     */
    "syntheticsCheckCallsCountSum"?: number;
    /**
     * Shows the sum of all Synthetic mobile application tests over all hours in the current date for all organizations.
     */
    "syntheticsMobileTestRunsSum"?: number;
    /**
     * Shows the high-water mark of used synthetics parallel testing slots over all hours in the current date for all organizations.
     */
    "syntheticsParallelTestingMaxSlotsHwm"?: number;
    /**
     * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
     */
    "traceSearchIndexedEventsCountSum"?: number;
    /**
     * Shows the sum of all ingested APM span bytes over all hours in the current date for all organizations.
     */
    "twolIngestedEventsBytesSum"?: number;
    /**
     * Shows the 99th percentile of all universal service management hosts over all hours in the current date for the given org.
     */
    "universalServiceMonitoringHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.
     */
    "vsphereHostTop99p"?: number;
    /**
     * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current date for the given org.
     */
    "vulnManagementHostCountTop99p"?: number;
    /**
     * Sum of all workflows executed over all hours in the current date for all organizations.
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
