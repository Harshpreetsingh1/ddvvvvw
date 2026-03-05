"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSummaryDate = void 0;
/**
 * Response with hourly report of all data billed by Datadog all organizations.
 */
class UsageSummaryDate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSummaryDate.attributeTypeMap;
    }
}
exports.UsageSummaryDate = UsageSummaryDate;
/**
 * @ignore
 */
UsageSummaryDate.attributeTypeMap = {
    agentHostTop99p: {
        baseName: "agent_host_top99p",
        type: "number",
        format: "int64",
    },
    apmAzureAppServiceHostTop99p: {
        baseName: "apm_azure_app_service_host_top99p",
        type: "number",
        format: "int64",
    },
    apmDevsecopsHostTop99p: {
        baseName: "apm_devsecops_host_top99p",
        type: "number",
        format: "int64",
    },
    apmEnterpriseStandaloneHostsTop99p: {
        baseName: "apm_enterprise_standalone_hosts_top99p",
        type: "number",
        format: "int64",
    },
    apmFargateCountAvg: {
        baseName: "apm_fargate_count_avg",
        type: "number",
        format: "int64",
    },
    apmHostTop99p: {
        baseName: "apm_host_top99p",
        type: "number",
        format: "int64",
    },
    apmProStandaloneHostsTop99p: {
        baseName: "apm_pro_standalone_hosts_top99p",
        type: "number",
        format: "int64",
    },
    appsecFargateCountAvg: {
        baseName: "appsec_fargate_count_avg",
        type: "number",
        format: "int64",
    },
    asmServerlessSum: {
        baseName: "asm_serverless_sum",
        type: "number",
        format: "int64",
    },
    auditLogsLinesIndexedSum: {
        baseName: "audit_logs_lines_indexed_sum",
        type: "number",
        format: "int64",
    },
    auditTrailEnabledHwm: {
        baseName: "audit_trail_enabled_hwm",
        type: "number",
        format: "int64",
    },
    avgProfiledFargateTasks: {
        baseName: "avg_profiled_fargate_tasks",
        type: "number",
        format: "int64",
    },
    awsHostTop99p: {
        baseName: "aws_host_top99p",
        type: "number",
        format: "int64",
    },
    awsLambdaFuncCount: {
        baseName: "aws_lambda_func_count",
        type: "number",
        format: "int64",
    },
    awsLambdaInvocationsSum: {
        baseName: "aws_lambda_invocations_sum",
        type: "number",
        format: "int64",
    },
    azureAppServiceTop99p: {
        baseName: "azure_app_service_top99p",
        type: "number",
        format: "int64",
    },
    billableIngestedBytesSum: {
        baseName: "billable_ingested_bytes_sum",
        type: "number",
        format: "int64",
    },
    bitsAiInvestigationsSum: {
        baseName: "bits_ai_investigations_sum",
        type: "number",
        format: "int64",
    },
    browserRumLiteSessionCountSum: {
        baseName: "browser_rum_lite_session_count_sum",
        type: "number",
        format: "int64",
    },
    browserRumReplaySessionCountSum: {
        baseName: "browser_rum_replay_session_count_sum",
        type: "number",
        format: "int64",
    },
    browserRumUnitsSum: {
        baseName: "browser_rum_units_sum",
        type: "number",
        format: "int64",
    },
    ccmSpendMonitoredEntLast: {
        baseName: "ccm_spend_monitored_ent_last",
        type: "number",
        format: "int64",
    },
    ccmSpendMonitoredProLast: {
        baseName: "ccm_spend_monitored_pro_last",
        type: "number",
        format: "int64",
    },
    ciPipelineIndexedSpansSum: {
        baseName: "ci_pipeline_indexed_spans_sum",
        type: "number",
        format: "int64",
    },
    ciTestIndexedSpansSum: {
        baseName: "ci_test_indexed_spans_sum",
        type: "number",
        format: "int64",
    },
    ciVisibilityItrCommittersHwm: {
        baseName: "ci_visibility_itr_committers_hwm",
        type: "number",
        format: "int64",
    },
    ciVisibilityPipelineCommittersHwm: {
        baseName: "ci_visibility_pipeline_committers_hwm",
        type: "number",
        format: "int64",
    },
    ciVisibilityTestCommittersHwm: {
        baseName: "ci_visibility_test_committers_hwm",
        type: "number",
        format: "int64",
    },
    cloudCostManagementAwsHostCountAvg: {
        baseName: "cloud_cost_management_aws_host_count_avg",
        type: "number",
        format: "int64",
    },
    cloudCostManagementAzureHostCountAvg: {
        baseName: "cloud_cost_management_azure_host_count_avg",
        type: "number",
        format: "int64",
    },
    cloudCostManagementGcpHostCountAvg: {
        baseName: "cloud_cost_management_gcp_host_count_avg",
        type: "number",
        format: "int64",
    },
    cloudCostManagementHostCountAvg: {
        baseName: "cloud_cost_management_host_count_avg",
        type: "number",
        format: "int64",
    },
    cloudCostManagementOciHostCountAvg: {
        baseName: "cloud_cost_management_oci_host_count_avg",
        type: "number",
        format: "int64",
    },
    cloudSiemEventsSum: {
        baseName: "cloud_siem_events_sum",
        type: "number",
        format: "int64",
    },
    codeAnalysisSaCommittersHwm: {
        baseName: "code_analysis_sa_committers_hwm",
        type: "number",
        format: "int64",
    },
    codeAnalysisScaCommittersHwm: {
        baseName: "code_analysis_sca_committers_hwm",
        type: "number",
        format: "int64",
    },
    codeSecurityHostTop99p: {
        baseName: "code_security_host_top99p",
        type: "number",
        format: "int64",
    },
    containerAvg: {
        baseName: "container_avg",
        type: "number",
        format: "int64",
    },
    containerExclAgentAvg: {
        baseName: "container_excl_agent_avg",
        type: "number",
        format: "int64",
    },
    containerHwm: {
        baseName: "container_hwm",
        type: "number",
        format: "int64",
    },
    csmContainerEnterpriseComplianceCountSum: {
        baseName: "csm_container_enterprise_compliance_count_sum",
        type: "number",
        format: "int64",
    },
    csmContainerEnterpriseCwsCountSum: {
        baseName: "csm_container_enterprise_cws_count_sum",
        type: "number",
        format: "int64",
    },
    csmContainerEnterpriseTotalCountSum: {
        baseName: "csm_container_enterprise_total_count_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseAasHostCountTop99p: {
        baseName: "csm_host_enterprise_aas_host_count_top99p",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseAwsHostCountTop99p: {
        baseName: "csm_host_enterprise_aws_host_count_top99p",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseAzureHostCountTop99p: {
        baseName: "csm_host_enterprise_azure_host_count_top99p",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseComplianceHostCountTop99p: {
        baseName: "csm_host_enterprise_compliance_host_count_top99p",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseCwsHostCountTop99p: {
        baseName: "csm_host_enterprise_cws_host_count_top99p",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseGcpHostCountTop99p: {
        baseName: "csm_host_enterprise_gcp_host_count_top99p",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseTotalHostCountTop99p: {
        baseName: "csm_host_enterprise_total_host_count_top99p",
        type: "number",
        format: "int64",
    },
    cspmAasHostTop99p: {
        baseName: "cspm_aas_host_top99p",
        type: "number",
        format: "int64",
    },
    cspmAwsHostTop99p: {
        baseName: "cspm_aws_host_top99p",
        type: "number",
        format: "int64",
    },
    cspmAzureHostTop99p: {
        baseName: "cspm_azure_host_top99p",
        type: "number",
        format: "int64",
    },
    cspmContainerAvg: {
        baseName: "cspm_container_avg",
        type: "number",
        format: "int64",
    },
    cspmContainerHwm: {
        baseName: "cspm_container_hwm",
        type: "number",
        format: "int64",
    },
    cspmGcpHostTop99p: {
        baseName: "cspm_gcp_host_top99p",
        type: "number",
        format: "int64",
    },
    cspmHostTop99p: {
        baseName: "cspm_host_top99p",
        type: "number",
        format: "int64",
    },
    customTsAvg: {
        baseName: "custom_ts_avg",
        type: "number",
        format: "int64",
    },
    cwsContainerCountAvg: {
        baseName: "cws_container_count_avg",
        type: "number",
        format: "int64",
    },
    cwsFargateTaskAvg: {
        baseName: "cws_fargate_task_avg",
        type: "number",
        format: "int64",
    },
    cwsHostTop99p: {
        baseName: "cws_host_top99p",
        type: "number",
        format: "int64",
    },
    dataJobsMonitoringHostHrSum: {
        baseName: "data_jobs_monitoring_host_hr_sum",
        type: "number",
        format: "int64",
    },
    date: {
        baseName: "date",
        type: "Date",
        format: "date-time",
    },
    dbmHostTop99p: {
        baseName: "dbm_host_top99p",
        type: "number",
        format: "int64",
    },
    dbmQueriesCountAvg: {
        baseName: "dbm_queries_count_avg",
        type: "number",
        format: "int64",
    },
    ephInfraHostAgentSum: {
        baseName: "eph_infra_host_agent_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostAlibabaSum: {
        baseName: "eph_infra_host_alibaba_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostAwsSum: {
        baseName: "eph_infra_host_aws_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostAzureSum: {
        baseName: "eph_infra_host_azure_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostEntSum: {
        baseName: "eph_infra_host_ent_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostGcpSum: {
        baseName: "eph_infra_host_gcp_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostHerokuSum: {
        baseName: "eph_infra_host_heroku_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOnlyAasSum: {
        baseName: "eph_infra_host_only_aas_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOnlyVsphereSum: {
        baseName: "eph_infra_host_only_vsphere_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOpentelemetryApmSum: {
        baseName: "eph_infra_host_opentelemetry_apm_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOpentelemetrySum: {
        baseName: "eph_infra_host_opentelemetry_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostProSum: {
        baseName: "eph_infra_host_pro_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostProplusSum: {
        baseName: "eph_infra_host_proplus_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostProxmoxSum: {
        baseName: "eph_infra_host_proxmox_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingApmErrorEventsSum: {
        baseName: "error_tracking_apm_error_events_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingErrorEventsSum: {
        baseName: "error_tracking_error_events_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingEventsSum: {
        baseName: "error_tracking_events_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingRumErrorEventsSum: {
        baseName: "error_tracking_rum_error_events_sum",
        type: "number",
        format: "int64",
    },
    eventManagementCorrelationCorrelatedEventsSum: {
        baseName: "event_management_correlation_correlated_events_sum",
        type: "number",
        format: "int64",
    },
    eventManagementCorrelationCorrelatedRelatedEventsSum: {
        baseName: "event_management_correlation_correlated_related_events_sum",
        type: "number",
        format: "int64",
    },
    eventManagementCorrelationSum: {
        baseName: "event_management_correlation_sum",
        type: "number",
        format: "int64",
    },
    fargateContainerProfilerProfilingFargateAvg: {
        baseName: "fargate_container_profiler_profiling_fargate_avg",
        type: "number",
        format: "int64",
    },
    fargateContainerProfilerProfilingFargateEksAvg: {
        baseName: "fargate_container_profiler_profiling_fargate_eks_avg",
        type: "number",
        format: "int64",
    },
    fargateTasksCountAvg: {
        baseName: "fargate_tasks_count_avg",
        type: "number",
        format: "int64",
    },
    fargateTasksCountHwm: {
        baseName: "fargate_tasks_count_hwm",
        type: "number",
        format: "int64",
    },
    flexLogsComputeLargeAvg: {
        baseName: "flex_logs_compute_large_avg",
        type: "number",
        format: "int64",
    },
    flexLogsComputeMediumAvg: {
        baseName: "flex_logs_compute_medium_avg",
        type: "number",
        format: "int64",
    },
    flexLogsComputeSmallAvg: {
        baseName: "flex_logs_compute_small_avg",
        type: "number",
        format: "int64",
    },
    flexLogsComputeXlargeAvg: {
        baseName: "flex_logs_compute_xlarge_avg",
        type: "number",
        format: "int64",
    },
    flexLogsComputeXsmallAvg: {
        baseName: "flex_logs_compute_xsmall_avg",
        type: "number",
        format: "int64",
    },
    flexLogsStarterAvg: {
        baseName: "flex_logs_starter_avg",
        type: "number",
        format: "int64",
    },
    flexLogsStarterStorageIndexAvg: {
        baseName: "flex_logs_starter_storage_index_avg",
        type: "number",
        format: "int64",
    },
    flexLogsStarterStorageRetentionAdjustmentAvg: {
        baseName: "flex_logs_starter_storage_retention_adjustment_avg",
        type: "number",
        format: "int64",
    },
    flexStoredLogsAvg: {
        baseName: "flex_stored_logs_avg",
        type: "number",
        format: "int64",
    },
    forwardingEventsBytesSum: {
        baseName: "forwarding_events_bytes_sum",
        type: "number",
        format: "int64",
    },
    gcpHostTop99p: {
        baseName: "gcp_host_top99p",
        type: "number",
        format: "int64",
    },
    herokuHostTop99p: {
        baseName: "heroku_host_top99p",
        type: "number",
        format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwm: {
        baseName: "incident_management_monthly_active_users_hwm",
        type: "number",
        format: "int64",
    },
    incidentManagementSeatsHwm: {
        baseName: "incident_management_seats_hwm",
        type: "number",
        format: "int64",
    },
    indexedEventsCountSum: {
        baseName: "indexed_events_count_sum",
        type: "number",
        format: "int64",
    },
    infraHostTop99p: {
        baseName: "infra_host_top99p",
        type: "number",
        format: "int64",
    },
    ingestedEventsBytesSum: {
        baseName: "ingested_events_bytes_sum",
        type: "number",
        format: "int64",
    },
    iotDeviceSum: {
        baseName: "iot_device_sum",
        type: "number",
        format: "int64",
    },
    iotDeviceTop99p: {
        baseName: "iot_device_top99p",
        type: "number",
        format: "int64",
    },
    llmObservabilityMinSpendSum: {
        baseName: "llm_observability_min_spend_sum",
        type: "number",
        format: "int64",
    },
    llmObservabilitySum: {
        baseName: "llm_observability_sum",
        type: "number",
        format: "int64",
    },
    mobileRumLiteSessionCountSum: {
        baseName: "mobile_rum_lite_session_count_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountAndroidSum: {
        baseName: "mobile_rum_session_count_android_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountFlutterSum: {
        baseName: "mobile_rum_session_count_flutter_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountIosSum: {
        baseName: "mobile_rum_session_count_ios_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountReactnativeSum: {
        baseName: "mobile_rum_session_count_reactnative_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountRokuSum: {
        baseName: "mobile_rum_session_count_roku_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountSum: {
        baseName: "mobile_rum_session_count_sum",
        type: "number",
        format: "int64",
    },
    mobileRumUnitsSum: {
        baseName: "mobile_rum_units_sum",
        type: "number",
        format: "int64",
    },
    ndmNetflowEventsSum: {
        baseName: "ndm_netflow_events_sum",
        type: "number",
        format: "int64",
    },
    netflowIndexedEventsCountSum: {
        baseName: "netflow_indexed_events_count_sum",
        type: "number",
        format: "int64",
    },
    networkDeviceWirelessTop99p: {
        baseName: "network_device_wireless_top99p",
        type: "number",
        format: "int64",
    },
    npmHostTop99p: {
        baseName: "npm_host_top99p",
        type: "number",
        format: "int64",
    },
    observabilityPipelinesBytesProcessedSum: {
        baseName: "observability_pipelines_bytes_processed_sum",
        type: "number",
        format: "int64",
    },
    ociHostSum: {
        baseName: "oci_host_sum",
        type: "number",
        format: "int64",
    },
    ociHostTop99p: {
        baseName: "oci_host_top99p",
        type: "number",
        format: "int64",
    },
    onCallSeatHwm: {
        baseName: "on_call_seat_hwm",
        type: "number",
        format: "int64",
    },
    onlineArchiveEventsCountSum: {
        baseName: "online_archive_events_count_sum",
        type: "number",
        format: "int64",
    },
    opentelemetryApmHostTop99p: {
        baseName: "opentelemetry_apm_host_top99p",
        type: "number",
        format: "int64",
    },
    opentelemetryHostTop99p: {
        baseName: "opentelemetry_host_top99p",
        type: "number",
        format: "int64",
    },
    orgs: {
        baseName: "orgs",
        type: "Array<UsageSummaryDateOrg>",
    },
    productAnalyticsSum: {
        baseName: "product_analytics_sum",
        type: "number",
        format: "int64",
    },
    profilingAasCountTop99p: {
        baseName: "profiling_aas_count_top99p",
        type: "number",
        format: "int64",
    },
    profilingHostTop99p: {
        baseName: "profiling_host_top99p",
        type: "number",
        format: "int64",
    },
    proxmoxHostSum: {
        baseName: "proxmox_host_sum",
        type: "number",
        format: "int64",
    },
    proxmoxHostTop99p: {
        baseName: "proxmox_host_top99p",
        type: "number",
        format: "int64",
    },
    publishedAppHwm: {
        baseName: "published_app_hwm",
        type: "number",
        format: "int64",
    },
    rumBrowserAndMobileSessionCount: {
        baseName: "rum_browser_and_mobile_session_count",
        type: "number",
        format: "int64",
    },
    rumBrowserLegacySessionCountSum: {
        baseName: "rum_browser_legacy_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumBrowserLiteSessionCountSum: {
        baseName: "rum_browser_lite_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumBrowserReplaySessionCountSum: {
        baseName: "rum_browser_replay_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumIndexedSessionsSum: {
        baseName: "rum_indexed_sessions_sum",
        type: "number",
        format: "int64",
    },
    rumIngestedSessionsSum: {
        baseName: "rum_ingested_sessions_sum",
        type: "number",
        format: "int64",
    },
    rumLiteSessionCountSum: {
        baseName: "rum_lite_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountAndroidSum: {
        baseName: "rum_mobile_legacy_session_count_android_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountFlutterSum: {
        baseName: "rum_mobile_legacy_session_count_flutter_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountIosSum: {
        baseName: "rum_mobile_legacy_session_count_ios_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountReactnativeSum: {
        baseName: "rum_mobile_legacy_session_count_reactnative_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountRokuSum: {
        baseName: "rum_mobile_legacy_session_count_roku_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountAndroidSum: {
        baseName: "rum_mobile_lite_session_count_android_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountFlutterSum: {
        baseName: "rum_mobile_lite_session_count_flutter_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountIosSum: {
        baseName: "rum_mobile_lite_session_count_ios_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountKotlinmultiplatformSum: {
        baseName: "rum_mobile_lite_session_count_kotlinmultiplatform_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountReactnativeSum: {
        baseName: "rum_mobile_lite_session_count_reactnative_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountRokuSum: {
        baseName: "rum_mobile_lite_session_count_roku_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountUnitySum: {
        baseName: "rum_mobile_lite_session_count_unity_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountAndroidSum: {
        baseName: "rum_mobile_replay_session_count_android_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountIosSum: {
        baseName: "rum_mobile_replay_session_count_ios_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountKotlinmultiplatformSum: {
        baseName: "rum_mobile_replay_session_count_kotlinmultiplatform_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountReactnativeSum: {
        baseName: "rum_mobile_replay_session_count_reactnative_sum",
        type: "number",
        format: "int64",
    },
    rumReplaySessionCountSum: {
        baseName: "rum_replay_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumSessionCountSum: {
        baseName: "rum_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumSessionReplayAddOnSum: {
        baseName: "rum_session_replay_add_on_sum",
        type: "number",
        format: "int64",
    },
    rumTotalSessionCountSum: {
        baseName: "rum_total_session_count_sum",
        type: "number",
        format: "int64",
    },
    rumUnitsSum: {
        baseName: "rum_units_sum",
        type: "number",
        format: "int64",
    },
    scaFargateCountAvg: {
        baseName: "sca_fargate_count_avg",
        type: "number",
        format: "int64",
    },
    scaFargateCountHwm: {
        baseName: "sca_fargate_count_hwm",
        type: "number",
        format: "int64",
    },
    sdsApmScannedBytesSum: {
        baseName: "sds_apm_scanned_bytes_sum",
        type: "number",
        format: "int64",
    },
    sdsEventsScannedBytesSum: {
        baseName: "sds_events_scanned_bytes_sum",
        type: "number",
        format: "int64",
    },
    sdsLogsScannedBytesSum: {
        baseName: "sds_logs_scanned_bytes_sum",
        type: "number",
        format: "int64",
    },
    sdsRumScannedBytesSum: {
        baseName: "sds_rum_scanned_bytes_sum",
        type: "number",
        format: "int64",
    },
    sdsTotalScannedBytesSum: {
        baseName: "sds_total_scanned_bytes_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmAzureAppserviceInstancesAvg: {
        baseName: "serverless_apps_apm_apm_azure_appservice_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmAzureAzurefunctionInstancesAvg: {
        baseName: "serverless_apps_apm_apm_azure_azurefunction_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmAzureContainerappInstancesAvg: {
        baseName: "serverless_apps_apm_apm_azure_containerapp_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmFargateEcsTasksAvg: {
        baseName: "serverless_apps_apm_apm_fargate_ecs_tasks_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmGcpCloudfunctionInstancesAvg: {
        baseName: "serverless_apps_apm_apm_gcp_cloudfunction_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmGcpCloudrunInstancesAvg: {
        baseName: "serverless_apps_apm_apm_gcp_cloudrun_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmAvg: {
        baseName: "serverless_apps_apm_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvg: {
        baseName: "serverless_apps_apm_excl_fargate_apm_azure_appservice_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvg: {
        baseName: "serverless_apps_apm_excl_fargate_apm_azure_azurefunction_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureContainerappInstancesAvg: {
        baseName: "serverless_apps_apm_excl_fargate_apm_azure_containerapp_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvg: {
        baseName: "serverless_apps_apm_excl_fargate_apm_gcp_cloudfunction_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvg: {
        baseName: "serverless_apps_apm_excl_fargate_apm_gcp_cloudrun_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateAvg: {
        baseName: "serverless_apps_apm_excl_fargate_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureContainerAppInstancesAvg: {
        baseName: "serverless_apps_azure_container_app_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureCountAvg: {
        baseName: "serverless_apps_azure_count_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureFunctionAppInstancesAvg: {
        baseName: "serverless_apps_azure_function_app_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureWebAppInstancesAvg: {
        baseName: "serverless_apps_azure_web_app_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsEcsAvg: {
        baseName: "serverless_apps_ecs_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsEksAvg: {
        baseName: "serverless_apps_eks_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAvg: {
        baseName: "serverless_apps_excl_fargate_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAzureContainerAppInstancesAvg: {
        baseName: "serverless_apps_excl_fargate_azure_container_app_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAzureFunctionAppInstancesAvg: {
        baseName: "serverless_apps_excl_fargate_azure_function_app_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAzureWebAppInstancesAvg: {
        baseName: "serverless_apps_excl_fargate_azure_web_app_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvg: {
        baseName: "serverless_apps_excl_fargate_google_cloud_functions_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudRunInstancesAvg: {
        baseName: "serverless_apps_excl_fargate_google_cloud_run_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsGoogleCloudFunctionsInstancesAvg: {
        baseName: "serverless_apps_google_cloud_functions_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsGoogleCloudRunInstancesAvg: {
        baseName: "serverless_apps_google_cloud_run_instances_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsGoogleCountAvg: {
        baseName: "serverless_apps_google_count_avg",
        type: "number",
        format: "int64",
    },
    serverlessAppsTotalCountAvg: {
        baseName: "serverless_apps_total_count_avg",
        type: "number",
        format: "int64",
    },
    siemAnalyzedLogsAddOnCountSum: {
        baseName: "siem_analyzed_logs_add_on_count_sum",
        type: "number",
        format: "int64",
    },
    syntheticsBrowserCheckCallsCountSum: {
        baseName: "synthetics_browser_check_calls_count_sum",
        type: "number",
        format: "int64",
    },
    syntheticsCheckCallsCountSum: {
        baseName: "synthetics_check_calls_count_sum",
        type: "number",
        format: "int64",
    },
    syntheticsMobileTestRunsSum: {
        baseName: "synthetics_mobile_test_runs_sum",
        type: "number",
        format: "int64",
    },
    syntheticsParallelTestingMaxSlotsHwm: {
        baseName: "synthetics_parallel_testing_max_slots_hwm",
        type: "number",
        format: "int64",
    },
    traceSearchIndexedEventsCountSum: {
        baseName: "trace_search_indexed_events_count_sum",
        type: "number",
        format: "int64",
    },
    twolIngestedEventsBytesSum: {
        baseName: "twol_ingested_events_bytes_sum",
        type: "number",
        format: "int64",
    },
    universalServiceMonitoringHostTop99p: {
        baseName: "universal_service_monitoring_host_top99p",
        type: "number",
        format: "int64",
    },
    vsphereHostTop99p: {
        baseName: "vsphere_host_top99p",
        type: "number",
        format: "int64",
    },
    vulnManagementHostCountTop99p: {
        baseName: "vuln_management_host_count_top99p",
        type: "number",
        format: "int64",
    },
    workflowExecutionsUsageSum: {
        baseName: "workflow_executions_usage_sum",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSummaryDate.js.map