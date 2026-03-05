"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSummaryResponse = void 0;
/**
 * Response summarizing all usage aggregated across the months in the request for all organizations, and broken down by month and by organization.
 */
class UsageSummaryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSummaryResponse.attributeTypeMap;
    }
}
exports.UsageSummaryResponse = UsageSummaryResponse;
/**
 * @ignore
 */
UsageSummaryResponse.attributeTypeMap = {
    agentHostTop99pSum: {
        baseName: "agent_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    apmAzureAppServiceHostTop99pSum: {
        baseName: "apm_azure_app_service_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    apmDevsecopsHostTop99pSum: {
        baseName: "apm_devsecops_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    apmEnterpriseStandaloneHostsTop99pSum: {
        baseName: "apm_enterprise_standalone_hosts_top99p_sum",
        type: "number",
        format: "int64",
    },
    apmFargateCountAvgSum: {
        baseName: "apm_fargate_count_avg_sum",
        type: "number",
        format: "int64",
    },
    apmHostTop99pSum: {
        baseName: "apm_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    apmProStandaloneHostsTop99pSum: {
        baseName: "apm_pro_standalone_hosts_top99p_sum",
        type: "number",
        format: "int64",
    },
    appsecFargateCountAvgSum: {
        baseName: "appsec_fargate_count_avg_sum",
        type: "number",
        format: "int64",
    },
    asmServerlessAggSum: {
        baseName: "asm_serverless_agg_sum",
        type: "number",
        format: "int64",
    },
    auditLogsLinesIndexedAggSum: {
        baseName: "audit_logs_lines_indexed_agg_sum",
        type: "number",
        format: "int64",
    },
    auditTrailEnabledHwmSum: {
        baseName: "audit_trail_enabled_hwm_sum",
        type: "number",
        format: "int64",
    },
    avgProfiledFargateTasksSum: {
        baseName: "avg_profiled_fargate_tasks_sum",
        type: "number",
        format: "int64",
    },
    awsHostTop99pSum: {
        baseName: "aws_host_top99p_sum",
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
    azureAppServiceTop99pSum: {
        baseName: "azure_app_service_top99p_sum",
        type: "number",
        format: "int64",
    },
    azureHostTop99pSum: {
        baseName: "azure_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    billableIngestedBytesAggSum: {
        baseName: "billable_ingested_bytes_agg_sum",
        type: "number",
        format: "int64",
    },
    bitsAiInvestigationsAggSum: {
        baseName: "bits_ai_investigations_agg_sum",
        type: "number",
        format: "int64",
    },
    browserRumLiteSessionCountAggSum: {
        baseName: "browser_rum_lite_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    browserRumReplaySessionCountAggSum: {
        baseName: "browser_rum_replay_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    browserRumUnitsAggSum: {
        baseName: "browser_rum_units_agg_sum",
        type: "number",
        format: "int64",
    },
    ccmSpendMonitoredEntLastSum: {
        baseName: "ccm_spend_monitored_ent_last_sum",
        type: "number",
        format: "int64",
    },
    ccmSpendMonitoredProLastSum: {
        baseName: "ccm_spend_monitored_pro_last_sum",
        type: "number",
        format: "int64",
    },
    ciPipelineIndexedSpansAggSum: {
        baseName: "ci_pipeline_indexed_spans_agg_sum",
        type: "number",
        format: "int64",
    },
    ciTestIndexedSpansAggSum: {
        baseName: "ci_test_indexed_spans_agg_sum",
        type: "number",
        format: "int64",
    },
    ciVisibilityItrCommittersHwmSum: {
        baseName: "ci_visibility_itr_committers_hwm_sum",
        type: "number",
        format: "int64",
    },
    ciVisibilityPipelineCommittersHwmSum: {
        baseName: "ci_visibility_pipeline_committers_hwm_sum",
        type: "number",
        format: "int64",
    },
    ciVisibilityTestCommittersHwmSum: {
        baseName: "ci_visibility_test_committers_hwm_sum",
        type: "number",
        format: "int64",
    },
    cloudCostManagementAwsHostCountAvgSum: {
        baseName: "cloud_cost_management_aws_host_count_avg_sum",
        type: "number",
        format: "int64",
    },
    cloudCostManagementAzureHostCountAvgSum: {
        baseName: "cloud_cost_management_azure_host_count_avg_sum",
        type: "number",
        format: "int64",
    },
    cloudCostManagementGcpHostCountAvgSum: {
        baseName: "cloud_cost_management_gcp_host_count_avg_sum",
        type: "number",
        format: "int64",
    },
    cloudCostManagementHostCountAvgSum: {
        baseName: "cloud_cost_management_host_count_avg_sum",
        type: "number",
        format: "int64",
    },
    cloudCostManagementOciHostCountAvgSum: {
        baseName: "cloud_cost_management_oci_host_count_avg_sum",
        type: "number",
        format: "int64",
    },
    cloudSiemEventsAggSum: {
        baseName: "cloud_siem_events_agg_sum",
        type: "number",
        format: "int64",
    },
    codeAnalysisSaCommittersHwmSum: {
        baseName: "code_analysis_sa_committers_hwm_sum",
        type: "number",
        format: "int64",
    },
    codeAnalysisScaCommittersHwmSum: {
        baseName: "code_analysis_sca_committers_hwm_sum",
        type: "number",
        format: "int64",
    },
    codeSecurityHostTop99pSum: {
        baseName: "code_security_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    containerAvgSum: {
        baseName: "container_avg_sum",
        type: "number",
        format: "int64",
    },
    containerExclAgentAvgSum: {
        baseName: "container_excl_agent_avg_sum",
        type: "number",
        format: "int64",
    },
    containerHwmSum: {
        baseName: "container_hwm_sum",
        type: "number",
        format: "int64",
    },
    csmContainerEnterpriseComplianceCountAggSum: {
        baseName: "csm_container_enterprise_compliance_count_agg_sum",
        type: "number",
        format: "int64",
    },
    csmContainerEnterpriseCwsCountAggSum: {
        baseName: "csm_container_enterprise_cws_count_agg_sum",
        type: "number",
        format: "int64",
    },
    csmContainerEnterpriseTotalCountAggSum: {
        baseName: "csm_container_enterprise_total_count_agg_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseAasHostCountTop99pSum: {
        baseName: "csm_host_enterprise_aas_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseAwsHostCountTop99pSum: {
        baseName: "csm_host_enterprise_aws_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseAzureHostCountTop99pSum: {
        baseName: "csm_host_enterprise_azure_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseComplianceHostCountTop99pSum: {
        baseName: "csm_host_enterprise_compliance_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseCwsHostCountTop99pSum: {
        baseName: "csm_host_enterprise_cws_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseGcpHostCountTop99pSum: {
        baseName: "csm_host_enterprise_gcp_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    csmHostEnterpriseTotalHostCountTop99pSum: {
        baseName: "csm_host_enterprise_total_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    cspmAasHostTop99pSum: {
        baseName: "cspm_aas_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    cspmAwsHostTop99pSum: {
        baseName: "cspm_aws_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    cspmAzureHostTop99pSum: {
        baseName: "cspm_azure_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    cspmContainerAvgSum: {
        baseName: "cspm_container_avg_sum",
        type: "number",
        format: "int64",
    },
    cspmContainerHwmSum: {
        baseName: "cspm_container_hwm_sum",
        type: "number",
        format: "int64",
    },
    cspmGcpHostTop99pSum: {
        baseName: "cspm_gcp_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    cspmHostTop99pSum: {
        baseName: "cspm_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    customHistoricalTsSum: {
        baseName: "custom_historical_ts_sum",
        type: "number",
        format: "int64",
    },
    customLiveTsSum: {
        baseName: "custom_live_ts_sum",
        type: "number",
        format: "int64",
    },
    customTsSum: {
        baseName: "custom_ts_sum",
        type: "number",
        format: "int64",
    },
    cwsContainerAvgSum: {
        baseName: "cws_container_avg_sum",
        type: "number",
        format: "int64",
    },
    cwsFargateTaskAvgSum: {
        baseName: "cws_fargate_task_avg_sum",
        type: "number",
        format: "int64",
    },
    cwsHostTop99pSum: {
        baseName: "cws_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    dataJobsMonitoringHostHrAggSum: {
        baseName: "data_jobs_monitoring_host_hr_agg_sum",
        type: "number",
        format: "int64",
    },
    dbmHostTop99pSum: {
        baseName: "dbm_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    dbmQueriesAvgSum: {
        baseName: "dbm_queries_avg_sum",
        type: "number",
        format: "int64",
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    ephInfraHostAgentAggSum: {
        baseName: "eph_infra_host_agent_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostAlibabaAggSum: {
        baseName: "eph_infra_host_alibaba_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostAwsAggSum: {
        baseName: "eph_infra_host_aws_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostAzureAggSum: {
        baseName: "eph_infra_host_azure_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostEntAggSum: {
        baseName: "eph_infra_host_ent_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostGcpAggSum: {
        baseName: "eph_infra_host_gcp_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostHerokuAggSum: {
        baseName: "eph_infra_host_heroku_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOnlyAasAggSum: {
        baseName: "eph_infra_host_only_aas_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOnlyVsphereAggSum: {
        baseName: "eph_infra_host_only_vsphere_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOpentelemetryAggSum: {
        baseName: "eph_infra_host_opentelemetry_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostOpentelemetryApmAggSum: {
        baseName: "eph_infra_host_opentelemetry_apm_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostProAggSum: {
        baseName: "eph_infra_host_pro_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostProplusAggSum: {
        baseName: "eph_infra_host_proplus_agg_sum",
        type: "number",
        format: "int64",
    },
    ephInfraHostProxmoxAggSum: {
        baseName: "eph_infra_host_proxmox_agg_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingApmErrorEventsAggSum: {
        baseName: "error_tracking_apm_error_events_agg_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingErrorEventsAggSum: {
        baseName: "error_tracking_error_events_agg_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingEventsAggSum: {
        baseName: "error_tracking_events_agg_sum",
        type: "number",
        format: "int64",
    },
    errorTrackingRumErrorEventsAggSum: {
        baseName: "error_tracking_rum_error_events_agg_sum",
        type: "number",
        format: "int64",
    },
    eventManagementCorrelationAggSum: {
        baseName: "event_management_correlation_agg_sum",
        type: "number",
        format: "int64",
    },
    eventManagementCorrelationCorrelatedEventsAggSum: {
        baseName: "event_management_correlation_correlated_events_agg_sum",
        type: "number",
        format: "int64",
    },
    eventManagementCorrelationCorrelatedRelatedEventsAggSum: {
        baseName: "event_management_correlation_correlated_related_events_agg_sum",
        type: "number",
        format: "int64",
    },
    fargateContainerProfilerProfilingFargateAvgSum: {
        baseName: "fargate_container_profiler_profiling_fargate_avg_sum",
        type: "number",
        format: "int64",
    },
    fargateContainerProfilerProfilingFargateEksAvgSum: {
        baseName: "fargate_container_profiler_profiling_fargate_eks_avg_sum",
        type: "number",
        format: "int64",
    },
    fargateTasksCountAvgSum: {
        baseName: "fargate_tasks_count_avg_sum",
        type: "number",
        format: "int64",
    },
    fargateTasksCountHwmSum: {
        baseName: "fargate_tasks_count_hwm_sum",
        type: "number",
        format: "int64",
    },
    flexLogsComputeLargeAvgSum: {
        baseName: "flex_logs_compute_large_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsComputeMediumAvgSum: {
        baseName: "flex_logs_compute_medium_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsComputeSmallAvgSum: {
        baseName: "flex_logs_compute_small_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsComputeXlargeAvgSum: {
        baseName: "flex_logs_compute_xlarge_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsComputeXsmallAvgSum: {
        baseName: "flex_logs_compute_xsmall_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsStarterAvgSum: {
        baseName: "flex_logs_starter_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsStarterStorageIndexAvgSum: {
        baseName: "flex_logs_starter_storage_index_avg_sum",
        type: "number",
        format: "int64",
    },
    flexLogsStarterStorageRetentionAdjustmentAvgSum: {
        baseName: "flex_logs_starter_storage_retention_adjustment_avg_sum",
        type: "number",
        format: "int64",
    },
    flexStoredLogsAvgSum: {
        baseName: "flex_stored_logs_avg_sum",
        type: "number",
        format: "int64",
    },
    forwardingEventsBytesAggSum: {
        baseName: "forwarding_events_bytes_agg_sum",
        type: "number",
        format: "int64",
    },
    gcpHostTop99pSum: {
        baseName: "gcp_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    herokuHostTop99pSum: {
        baseName: "heroku_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwmSum: {
        baseName: "incident_management_monthly_active_users_hwm_sum",
        type: "number",
        format: "int64",
    },
    incidentManagementSeatsHwmSum: {
        baseName: "incident_management_seats_hwm_sum",
        type: "number",
        format: "int64",
    },
    indexedEventsCountAggSum: {
        baseName: "indexed_events_count_agg_sum",
        type: "number",
        format: "int64",
    },
    infraHostTop99pSum: {
        baseName: "infra_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    ingestedEventsBytesAggSum: {
        baseName: "ingested_events_bytes_agg_sum",
        type: "number",
        format: "int64",
    },
    iotDeviceAggSum: {
        baseName: "iot_device_agg_sum",
        type: "number",
        format: "int64",
    },
    iotDeviceTop99pSum: {
        baseName: "iot_device_top99p_sum",
        type: "number",
        format: "int64",
    },
    lastUpdated: {
        baseName: "last_updated",
        type: "Date",
        format: "date-time",
    },
    liveIndexedEventsAggSum: {
        baseName: "live_indexed_events_agg_sum",
        type: "number",
        format: "int64",
    },
    liveIngestedBytesAggSum: {
        baseName: "live_ingested_bytes_agg_sum",
        type: "number",
        format: "int64",
    },
    llmObservabilityAggSum: {
        baseName: "llm_observability_agg_sum",
        type: "number",
        format: "int64",
    },
    llmObservabilityMinSpendAggSum: {
        baseName: "llm_observability_min_spend_agg_sum",
        type: "number",
        format: "int64",
    },
    logsByRetention: {
        baseName: "logs_by_retention",
        type: "LogsByRetention",
    },
    mobileRumLiteSessionCountAggSum: {
        baseName: "mobile_rum_lite_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountAggSum: {
        baseName: "mobile_rum_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountAndroidAggSum: {
        baseName: "mobile_rum_session_count_android_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountFlutterAggSum: {
        baseName: "mobile_rum_session_count_flutter_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountIosAggSum: {
        baseName: "mobile_rum_session_count_ios_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountReactnativeAggSum: {
        baseName: "mobile_rum_session_count_reactnative_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumSessionCountRokuAggSum: {
        baseName: "mobile_rum_session_count_roku_agg_sum",
        type: "number",
        format: "int64",
    },
    mobileRumUnitsAggSum: {
        baseName: "mobile_rum_units_agg_sum",
        type: "number",
        format: "int64",
    },
    ndmNetflowEventsAggSum: {
        baseName: "ndm_netflow_events_agg_sum",
        type: "number",
        format: "int64",
    },
    netflowIndexedEventsCountAggSum: {
        baseName: "netflow_indexed_events_count_agg_sum",
        type: "number",
        format: "int64",
    },
    networkDeviceWirelessTop99pSum: {
        baseName: "network_device_wireless_top99p_sum",
        type: "number",
        format: "int64",
    },
    npmHostTop99pSum: {
        baseName: "npm_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    observabilityPipelinesBytesProcessedAggSum: {
        baseName: "observability_pipelines_bytes_processed_agg_sum",
        type: "number",
        format: "int64",
    },
    ociHostAggSum: {
        baseName: "oci_host_agg_sum",
        type: "number",
        format: "int64",
    },
    ociHostTop99pSum: {
        baseName: "oci_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    onCallSeatHwmSum: {
        baseName: "on_call_seat_hwm_sum",
        type: "number",
        format: "int64",
    },
    onlineArchiveEventsCountAggSum: {
        baseName: "online_archive_events_count_agg_sum",
        type: "number",
        format: "int64",
    },
    opentelemetryApmHostTop99pSum: {
        baseName: "opentelemetry_apm_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    opentelemetryHostTop99pSum: {
        baseName: "opentelemetry_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    productAnalyticsAggSum: {
        baseName: "product_analytics_agg_sum",
        type: "number",
        format: "int64",
    },
    profilingAasCountTop99pSum: {
        baseName: "profiling_aas_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    profilingContainerAgentCountAvg: {
        baseName: "profiling_container_agent_count_avg",
        type: "number",
        format: "int64",
    },
    profilingHostCountTop99pSum: {
        baseName: "profiling_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    proxmoxHostAggSum: {
        baseName: "proxmox_host_agg_sum",
        type: "number",
        format: "int64",
    },
    proxmoxHostTop99pSum: {
        baseName: "proxmox_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    publishedAppHwmSum: {
        baseName: "published_app_hwm_sum",
        type: "number",
        format: "int64",
    },
    rehydratedIndexedEventsAggSum: {
        baseName: "rehydrated_indexed_events_agg_sum",
        type: "number",
        format: "int64",
    },
    rehydratedIngestedBytesAggSum: {
        baseName: "rehydrated_ingested_bytes_agg_sum",
        type: "number",
        format: "int64",
    },
    rumBrowserAndMobileSessionCount: {
        baseName: "rum_browser_and_mobile_session_count",
        type: "number",
        format: "int64",
    },
    rumBrowserLegacySessionCountAggSum: {
        baseName: "rum_browser_legacy_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumBrowserLiteSessionCountAggSum: {
        baseName: "rum_browser_lite_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumBrowserReplaySessionCountAggSum: {
        baseName: "rum_browser_replay_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumIndexedSessionsAggSum: {
        baseName: "rum_indexed_sessions_agg_sum",
        type: "number",
        format: "int64",
    },
    rumIngestedSessionsAggSum: {
        baseName: "rum_ingested_sessions_agg_sum",
        type: "number",
        format: "int64",
    },
    rumLiteSessionCountAggSum: {
        baseName: "rum_lite_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountAndroidAggSum: {
        baseName: "rum_mobile_legacy_session_count_android_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountFlutterAggSum: {
        baseName: "rum_mobile_legacy_session_count_flutter_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountIosAggSum: {
        baseName: "rum_mobile_legacy_session_count_ios_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountReactnativeAggSum: {
        baseName: "rum_mobile_legacy_session_count_reactnative_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLegacySessionCountRokuAggSum: {
        baseName: "rum_mobile_legacy_session_count_roku_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountAndroidAggSum: {
        baseName: "rum_mobile_lite_session_count_android_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountFlutterAggSum: {
        baseName: "rum_mobile_lite_session_count_flutter_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountIosAggSum: {
        baseName: "rum_mobile_lite_session_count_ios_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountKotlinmultiplatformAggSum: {
        baseName: "rum_mobile_lite_session_count_kotlinmultiplatform_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountReactnativeAggSum: {
        baseName: "rum_mobile_lite_session_count_reactnative_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountRokuAggSum: {
        baseName: "rum_mobile_lite_session_count_roku_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileLiteSessionCountUnityAggSum: {
        baseName: "rum_mobile_lite_session_count_unity_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountAndroidAggSum: {
        baseName: "rum_mobile_replay_session_count_android_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountIosAggSum: {
        baseName: "rum_mobile_replay_session_count_ios_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountKotlinmultiplatformAggSum: {
        baseName: "rum_mobile_replay_session_count_kotlinmultiplatform_agg_sum",
        type: "number",
        format: "int64",
    },
    rumMobileReplaySessionCountReactnativeAggSum: {
        baseName: "rum_mobile_replay_session_count_reactnative_agg_sum",
        type: "number",
        format: "int64",
    },
    rumReplaySessionCountAggSum: {
        baseName: "rum_replay_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumSessionCountAggSum: {
        baseName: "rum_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumSessionReplayAddOnAggSum: {
        baseName: "rum_session_replay_add_on_agg_sum",
        type: "number",
        format: "int64",
    },
    rumTotalSessionCountAggSum: {
        baseName: "rum_total_session_count_agg_sum",
        type: "number",
        format: "int64",
    },
    rumUnitsAggSum: {
        baseName: "rum_units_agg_sum",
        type: "number",
        format: "int64",
    },
    scaFargateCountAvgSum: {
        baseName: "sca_fargate_count_avg_sum",
        type: "number",
        format: "int64",
    },
    scaFargateCountHwmSum: {
        baseName: "sca_fargate_count_hwm_sum",
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
    serverlessAppsApmApmAzureAppserviceInstancesAvgSum: {
        baseName: "serverless_apps_apm_apm_azure_appservice_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmAzureAzurefunctionInstancesAvgSum: {
        baseName: "serverless_apps_apm_apm_azure_azurefunction_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmAzureContainerappInstancesAvgSum: {
        baseName: "serverless_apps_apm_apm_azure_containerapp_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmFargateEcsTasksAvgSum: {
        baseName: "serverless_apps_apm_apm_fargate_ecs_tasks_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmGcpCloudfunctionInstancesAvgSum: {
        baseName: "serverless_apps_apm_apm_gcp_cloudfunction_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmApmGcpCloudrunInstancesAvgSum: {
        baseName: "serverless_apps_apm_apm_gcp_cloudrun_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmAvgSum: {
        baseName: "serverless_apps_apm_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAppserviceInstancesAvgSum: {
        baseName: "serverless_apps_apm_excl_fargate_apm_azure_appservice_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureAzurefunctionInstancesAvgSum: {
        baseName: "serverless_apps_apm_excl_fargate_apm_azure_azurefunction_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmAzureContainerappInstancesAvgSum: {
        baseName: "serverless_apps_apm_excl_fargate_apm_azure_containerapp_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudfunctionInstancesAvgSum: {
        baseName: "serverless_apps_apm_excl_fargate_apm_gcp_cloudfunction_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateApmGcpCloudrunInstancesAvgSum: {
        baseName: "serverless_apps_apm_excl_fargate_apm_gcp_cloudrun_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsApmExclFargateAvgSum: {
        baseName: "serverless_apps_apm_excl_fargate_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureContainerAppInstancesAvgSum: {
        baseName: "serverless_apps_azure_container_app_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureCountAvgSum: {
        baseName: "serverless_apps_azure_count_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureFunctionAppInstancesAvgSum: {
        baseName: "serverless_apps_azure_function_app_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsAzureWebAppInstancesAvgSum: {
        baseName: "serverless_apps_azure_web_app_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsEcsAvgSum: {
        baseName: "serverless_apps_ecs_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsEksAvgSum: {
        baseName: "serverless_apps_eks_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAvgSum: {
        baseName: "serverless_apps_excl_fargate_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAzureContainerAppInstancesAvgSum: {
        baseName: "serverless_apps_excl_fargate_azure_container_app_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAzureFunctionAppInstancesAvgSum: {
        baseName: "serverless_apps_excl_fargate_azure_function_app_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateAzureWebAppInstancesAvgSum: {
        baseName: "serverless_apps_excl_fargate_azure_web_app_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudFunctionsInstancesAvgSum: {
        baseName: "serverless_apps_excl_fargate_google_cloud_functions_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsExclFargateGoogleCloudRunInstancesAvgSum: {
        baseName: "serverless_apps_excl_fargate_google_cloud_run_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsGoogleCloudFunctionsInstancesAvgSum: {
        baseName: "serverless_apps_google_cloud_functions_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsGoogleCloudRunInstancesAvgSum: {
        baseName: "serverless_apps_google_cloud_run_instances_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsGoogleCountAvgSum: {
        baseName: "serverless_apps_google_count_avg_sum",
        type: "number",
        format: "int64",
    },
    serverlessAppsTotalCountAvgSum: {
        baseName: "serverless_apps_total_count_avg_sum",
        type: "number",
        format: "int64",
    },
    siemAnalyzedLogsAddOnCountAggSum: {
        baseName: "siem_analyzed_logs_add_on_count_agg_sum",
        type: "number",
        format: "int64",
    },
    startDate: {
        baseName: "start_date",
        type: "Date",
        format: "date-time",
    },
    syntheticsBrowserCheckCallsCountAggSum: {
        baseName: "synthetics_browser_check_calls_count_agg_sum",
        type: "number",
        format: "int64",
    },
    syntheticsCheckCallsCountAggSum: {
        baseName: "synthetics_check_calls_count_agg_sum",
        type: "number",
        format: "int64",
    },
    syntheticsMobileTestRunsAggSum: {
        baseName: "synthetics_mobile_test_runs_agg_sum",
        type: "number",
        format: "int64",
    },
    syntheticsParallelTestingMaxSlotsHwmSum: {
        baseName: "synthetics_parallel_testing_max_slots_hwm_sum",
        type: "number",
        format: "int64",
    },
    traceSearchIndexedEventsCountAggSum: {
        baseName: "trace_search_indexed_events_count_agg_sum",
        type: "number",
        format: "int64",
    },
    twolIngestedEventsBytesAggSum: {
        baseName: "twol_ingested_events_bytes_agg_sum",
        type: "number",
        format: "int64",
    },
    universalServiceMonitoringHostTop99pSum: {
        baseName: "universal_service_monitoring_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    usage: {
        baseName: "usage",
        type: "Array<UsageSummaryDate>",
    },
    vsphereHostTop99pSum: {
        baseName: "vsphere_host_top99p_sum",
        type: "number",
        format: "int64",
    },
    vulnManagementHostCountTop99pSum: {
        baseName: "vuln_management_host_count_top99p_sum",
        type: "number",
        format: "int64",
    },
    workflowExecutionsUsageAggSum: {
        baseName: "workflow_executions_usage_agg_sum",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSummaryResponse.js.map