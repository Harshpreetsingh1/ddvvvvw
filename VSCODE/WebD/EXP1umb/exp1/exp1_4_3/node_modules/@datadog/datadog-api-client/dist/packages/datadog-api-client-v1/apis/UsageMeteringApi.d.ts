import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { HourlyUsageAttributionResponse } from "../models/HourlyUsageAttributionResponse";
import { HourlyUsageAttributionUsageType } from "../models/HourlyUsageAttributionUsageType";
import { MonthlyUsageAttributionResponse } from "../models/MonthlyUsageAttributionResponse";
import { MonthlyUsageAttributionSupportedMetrics } from "../models/MonthlyUsageAttributionSupportedMetrics";
import { UsageAnalyzedLogsResponse } from "../models/UsageAnalyzedLogsResponse";
import { UsageAuditLogsResponse } from "../models/UsageAuditLogsResponse";
import { UsageBillableSummaryResponse } from "../models/UsageBillableSummaryResponse";
import { UsageCIVisibilityResponse } from "../models/UsageCIVisibilityResponse";
import { UsageCloudSecurityPostureManagementResponse } from "../models/UsageCloudSecurityPostureManagementResponse";
import { UsageCustomReportsResponse } from "../models/UsageCustomReportsResponse";
import { UsageCWSResponse } from "../models/UsageCWSResponse";
import { UsageDBMResponse } from "../models/UsageDBMResponse";
import { UsageFargateResponse } from "../models/UsageFargateResponse";
import { UsageHostsResponse } from "../models/UsageHostsResponse";
import { UsageIncidentManagementResponse } from "../models/UsageIncidentManagementResponse";
import { UsageIndexedSpansResponse } from "../models/UsageIndexedSpansResponse";
import { UsageIngestedSpansResponse } from "../models/UsageIngestedSpansResponse";
import { UsageIoTResponse } from "../models/UsageIoTResponse";
import { UsageLambdaResponse } from "../models/UsageLambdaResponse";
import { UsageLogsByIndexResponse } from "../models/UsageLogsByIndexResponse";
import { UsageLogsByRetentionResponse } from "../models/UsageLogsByRetentionResponse";
import { UsageLogsResponse } from "../models/UsageLogsResponse";
import { UsageNetworkFlowsResponse } from "../models/UsageNetworkFlowsResponse";
import { UsageNetworkHostsResponse } from "../models/UsageNetworkHostsResponse";
import { UsageOnlineArchiveResponse } from "../models/UsageOnlineArchiveResponse";
import { UsageProfilingResponse } from "../models/UsageProfilingResponse";
import { UsageRumSessionsResponse } from "../models/UsageRumSessionsResponse";
import { UsageRumUnitsResponse } from "../models/UsageRumUnitsResponse";
import { UsageSDSResponse } from "../models/UsageSDSResponse";
import { UsageSNMPResponse } from "../models/UsageSNMPResponse";
import { UsageSort } from "../models/UsageSort";
import { UsageSortDirection } from "../models/UsageSortDirection";
import { UsageSpecifiedCustomReportsResponse } from "../models/UsageSpecifiedCustomReportsResponse";
import { UsageSummaryResponse } from "../models/UsageSummaryResponse";
import { UsageSyntheticsAPIResponse } from "../models/UsageSyntheticsAPIResponse";
import { UsageSyntheticsBrowserResponse } from "../models/UsageSyntheticsBrowserResponse";
import { UsageSyntheticsResponse } from "../models/UsageSyntheticsResponse";
import { UsageTimeseriesResponse } from "../models/UsageTimeseriesResponse";
import { UsageTopAvgMetricsResponse } from "../models/UsageTopAvgMetricsResponse";
export declare class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
    getDailyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, _options?: Configuration): Promise<RequestContext>;
    getHourlyUsageAttribution(startHr: Date, usageType: HourlyUsageAttributionUsageType, endHr?: Date, nextRecordId?: string, tagBreakdownKeys?: string, includeDescendants?: boolean, _options?: Configuration): Promise<RequestContext>;
    getIncidentManagement(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getIngestedSpans(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getMonthlyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, _options?: Configuration): Promise<RequestContext>;
    getMonthlyUsageAttribution(startMonth: Date, fields: MonthlyUsageAttributionSupportedMetrics, endMonth?: Date, sortDirection?: UsageSortDirection, sortName?: MonthlyUsageAttributionSupportedMetrics, tagBreakdownKeys?: string, nextRecordId?: string, includeDescendants?: boolean, _options?: Configuration): Promise<RequestContext>;
    getSpecifiedDailyCustomReports(reportId: string, _options?: Configuration): Promise<RequestContext>;
    getSpecifiedMonthlyCustomReports(reportId: string, _options?: Configuration): Promise<RequestContext>;
    getUsageAnalyzedLogs(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageAuditLogs(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageBillableSummary(month?: Date, includeConnectedAccounts?: boolean, _options?: Configuration): Promise<RequestContext>;
    getUsageCIApp(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageCloudSecurityPostureManagement(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageCWS(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageDBM(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageFargate(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageHosts(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageIndexedSpans(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageInternetOfThings(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageLambda(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageLogs(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageLogsByIndex(startHr: Date, endHr?: Date, indexName?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getUsageLogsByRetention(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageNetworkFlows(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageNetworkHosts(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageOnlineArchive(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageProfiling(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageRumSessions(startHr: Date, endHr?: Date, type?: string, _options?: Configuration): Promise<RequestContext>;
    getUsageRumUnits(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageSDS(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageSNMP(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageSummary(startMonth: Date, endMonth?: Date, includeOrgDetails?: boolean, includeConnectedAccounts?: boolean, _options?: Configuration): Promise<RequestContext>;
    getUsageSynthetics(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageSyntheticsAPI(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageSyntheticsBrowser(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageTimeseries(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageTopAvgMetrics(month?: Date, day?: Date, names?: Array<string>, limit?: number, nextRecordId?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsageMeteringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDailyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDailyCustomReports(response: ResponseContext): Promise<UsageCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHourlyUsageAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHourlyUsageAttribution(response: ResponseContext): Promise<HourlyUsageAttributionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentManagement
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentManagement(response: ResponseContext): Promise<UsageIncidentManagementResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIngestedSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIngestedSpans(response: ResponseContext): Promise<UsageIngestedSpansResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonthlyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyCustomReports(response: ResponseContext): Promise<UsageCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonthlyUsageAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyUsageAttribution(response: ResponseContext): Promise<MonthlyUsageAttributionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpecifiedDailyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpecifiedDailyCustomReports(response: ResponseContext): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpecifiedMonthlyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpecifiedMonthlyCustomReports(response: ResponseContext): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageAnalyzedLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageAnalyzedLogs(response: ResponseContext): Promise<UsageAnalyzedLogsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageAuditLogs(response: ResponseContext): Promise<UsageAuditLogsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageBillableSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageBillableSummary(response: ResponseContext): Promise<UsageBillableSummaryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageCIApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageCIApp(response: ResponseContext): Promise<UsageCIVisibilityResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageCloudSecurityPostureManagement
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageCloudSecurityPostureManagement(response: ResponseContext): Promise<UsageCloudSecurityPostureManagementResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageCWS
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageCWS(response: ResponseContext): Promise<UsageCWSResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageDBM
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageDBM(response: ResponseContext): Promise<UsageDBMResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageFargate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageFargate(response: ResponseContext): Promise<UsageFargateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageHosts(response: ResponseContext): Promise<UsageHostsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageIndexedSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageIndexedSpans(response: ResponseContext): Promise<UsageIndexedSpansResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageInternetOfThings
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageInternetOfThings(response: ResponseContext): Promise<UsageIoTResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLambda
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLambda(response: ResponseContext): Promise<UsageLambdaResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogs(response: ResponseContext): Promise<UsageLogsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLogsByIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogsByIndex(response: ResponseContext): Promise<UsageLogsByIndexResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLogsByRetention
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogsByRetention(response: ResponseContext): Promise<UsageLogsByRetentionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageNetworkFlows
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageNetworkFlows(response: ResponseContext): Promise<UsageNetworkFlowsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageNetworkHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageNetworkHosts(response: ResponseContext): Promise<UsageNetworkHostsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageOnlineArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageOnlineArchive(response: ResponseContext): Promise<UsageOnlineArchiveResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageProfiling
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageProfiling(response: ResponseContext): Promise<UsageProfilingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageRumSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageRumSessions(response: ResponseContext): Promise<UsageRumSessionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageRumUnits
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageRumUnits(response: ResponseContext): Promise<UsageRumUnitsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSDS
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSDS(response: ResponseContext): Promise<UsageSDSResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSNMP
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSNMP(response: ResponseContext): Promise<UsageSNMPResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSummary(response: ResponseContext): Promise<UsageSummaryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSynthetics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSynthetics(response: ResponseContext): Promise<UsageSyntheticsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSyntheticsAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSyntheticsAPI(response: ResponseContext): Promise<UsageSyntheticsAPIResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageSyntheticsBrowser
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSyntheticsBrowser(response: ResponseContext): Promise<UsageSyntheticsBrowserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageTimeseries
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTimeseries(response: ResponseContext): Promise<UsageTimeseriesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageTopAvgMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTopAvgMetrics(response: ResponseContext): Promise<UsageTopAvgMetricsResponse>;
}
export interface UsageMeteringApiGetDailyCustomReportsRequest {
    /**
     * The number of files to return in the response. `[default=60]`.
     * @type number
     */
    pageSize?: number;
    /**
     * The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`.
     * @type number
     */
    pageNumber?: number;
    /**
     * The direction to sort by: `[desc, asc]`.
     * @type UsageSortDirection
     */
    sortDir?: UsageSortDirection;
    /**
     * The field to sort by: `[computed_on, size, start_date, end_date]`.
     * @type UsageSort
     */
    sort?: UsageSort;
}
export interface UsageMeteringApiGetHourlyUsageAttributionRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Usage type to retrieve. The following values have been **deprecated**:
     * `estimated_indexed_spans_usage`, `estimated_ingested_spans_usage`.
     * @type HourlyUsageAttributionUsageType
     */
    usageType: HourlyUsageAttributionUsageType;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
    /**
     * List following results with a next_record_id provided in the previous query.
     * @type string
     */
    nextRecordId?: string;
    /**
     * Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags.
     *
     * To see which tags are available, look for the value of `tag_config_source` in the API response.
     * @type string
     */
    tagBreakdownKeys?: string;
    /**
     * Include child org usage in the response. Defaults to `true`.
     * @type boolean
     */
    includeDescendants?: boolean;
}
export interface UsageMeteringApiGetIncidentManagementRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetIngestedSpansRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetMonthlyCustomReportsRequest {
    /**
     * The number of files to return in the response `[default=60].`
     * @type number
     */
    pageSize?: number;
    /**
     * The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`.
     * @type number
     */
    pageNumber?: number;
    /**
     * The direction to sort by: `[desc, asc]`.
     * @type UsageSortDirection
     */
    sortDir?: UsageSortDirection;
    /**
     * The field to sort by: `[computed_on, size, start_date, end_date]`.
     * @type UsageSort
     */
    sort?: UsageSort;
}
export interface UsageMeteringApiGetMonthlyUsageAttributionRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month.
     * Maximum of 15 months ago.
     * @type Date
     */
    startMonth: Date;
    /**
     * Comma-separated list of usage types to return, or `*` for all usage types.
     * The following values have been **deprecated**:
     * `estimated_indexed_spans_usage`, `estimated_indexed_spans_percentage`, `estimated_ingested_spans_usage`, `estimated_ingested_spans_percentage`, `llm_observability_usage`, `llm_observability_percentage`.
     * @type MonthlyUsageAttributionSupportedMetrics
     */
    fields: MonthlyUsageAttributionSupportedMetrics;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month.
     * @type Date
     */
    endMonth?: Date;
    /**
     * The direction to sort by: `[desc, asc]`.
     * @type UsageSortDirection
     */
    sortDirection?: UsageSortDirection;
    /**
     * The field to sort by.
     * The following values have been **deprecated**:
     * `estimated_indexed_spans_usage`, `estimated_indexed_spans_percentage`, `estimated_ingested_spans_usage`, `estimated_ingested_spans_percentage`.
     * @type MonthlyUsageAttributionSupportedMetrics
     */
    sortName?: MonthlyUsageAttributionSupportedMetrics;
    /**
     * Comma separated list of tag keys used to group usage. If no value is provided the usage will not be broken down by tags.
     *
     * To see which tags are available, look for the value of `tag_config_source` in the API response.
     * @type string
     */
    tagBreakdownKeys?: string;
    /**
     * List following results with a next_record_id provided in the previous query.
     * @type string
     */
    nextRecordId?: string;
    /**
     * Include child org usage in the response. Defaults to `true`.
     * @type boolean
     */
    includeDescendants?: boolean;
}
export interface UsageMeteringApiGetSpecifiedDailyCustomReportsRequest {
    /**
     * Date of the report in the format `YYYY-MM-DD`.
     * @type string
     */
    reportId: string;
}
export interface UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest {
    /**
     * Date of the report in the format `YYYY-MM-DD`.
     * @type string
     */
    reportId: string;
}
export interface UsageMeteringApiGetUsageAnalyzedLogsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageAuditLogsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageBillableSummaryRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage starting this month.
     * @type Date
     */
    month?: Date;
    /**
     * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
     * @type boolean
     */
    includeConnectedAccounts?: boolean;
}
export interface UsageMeteringApiGetUsageCIAppRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageCWSRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageDBMRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageFargateRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageHostsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageIndexedSpansRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageInternetOfThingsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageLambdaRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageLogsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageLogsByIndexRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
    /**
     * Comma-separated list of log index names.
     * @type Array<string>
     */
    indexName?: Array<string>;
}
export interface UsageMeteringApiGetUsageLogsByRetentionRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageNetworkFlowsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageNetworkHostsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageOnlineArchiveRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageProfilingRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageRumSessionsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
    /**
     * RUM type: `[browser, mobile]`. Defaults to `browser`.
     * @type string
     */
    type?: string;
}
export interface UsageMeteringApiGetUsageRumUnitsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSDSRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSNMPRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending
     * **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSummaryRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month.
     * Maximum of 15 months ago.
     * @type Date
     */
    startMonth: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month.
     * @type Date
     */
    endMonth?: Date;
    /**
     * Include usage summaries for each sub-org.
     * @type boolean
     */
    includeOrgDetails?: boolean;
    /**
     * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
     * @type boolean
     */
    includeConnectedAccounts?: boolean;
}
export interface UsageMeteringApiGetUsageSyntheticsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSyntheticsAPIRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSyntheticsBrowserRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageTimeseriesRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageTopAvgMetricsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @type Date
     */
    month?: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @type Date
     */
    day?: Date;
    /**
     * Comma-separated list of metric names.
     * @type Array<string>
     */
    names?: Array<string>;
    /**
     * Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
     * @type number
     */
    limit?: number;
    /**
     * List following results with a next_record_id provided in the previous query.
     * @type string
     */
    nextRecordId?: string;
}
export declare class UsageMeteringApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsageMeteringApiRequestFactory, responseProcessor?: UsageMeteringApiResponseProcessor);
    /**
     * Get daily custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getDailyCustomReports(param?: UsageMeteringApiGetDailyCustomReportsRequest, options?: Configuration): Promise<UsageCustomReportsResponse>;
    /**
     * Get hourly usage attribution. Multi-region data is available starting March 1, 2023.
     *
     * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
     * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
     * Pseudo code example:
     *
     * ```
     * response := GetHourlyUsageAttribution(start_month)
     * cursor := response.metadata.pagination.next_record_id
     * WHILE cursor != null BEGIN
     *   sleep(5 seconds)  # Avoid running into rate limit
     *   response := GetHourlyUsageAttribution(start_month, next_record_id=cursor)
     *   cursor := response.metadata.pagination.next_record_id
     * END
     * ```
     * The following values have been **deprecated**:
     *     `estimated_indexed_spans_usage`, `estimated_indexed_spans_percentage`, `estimated_ingested_spans_usage`, `estimated_ingested_spans_percentage`, `llm_observability_usage`, `llm_observability_percentage`.
     * @param param The request object
     */
    getHourlyUsageAttribution(param: UsageMeteringApiGetHourlyUsageAttributionRequest, options?: Configuration): Promise<HourlyUsageAttributionResponse>;
    /**
     * Get hourly usage for incident management.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getIncidentManagement(param: UsageMeteringApiGetIncidentManagementRequest, options?: Configuration): Promise<UsageIncidentManagementResponse>;
    /**
     * Get hourly usage for ingested spans.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getIngestedSpans(param: UsageMeteringApiGetIngestedSpansRequest, options?: Configuration): Promise<UsageIngestedSpansResponse>;
    /**
     * Get monthly custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getMonthlyCustomReports(param?: UsageMeteringApiGetMonthlyCustomReportsRequest, options?: Configuration): Promise<UsageCustomReportsResponse>;
    /**
     * Get monthly usage attribution. Multi-region data is available starting March 1, 2023.
     *
     * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
     * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
     * Pseudo code example:
     *
     * ```
     * response := GetMonthlyUsageAttribution(start_month)
     * cursor := response.metadata.pagination.next_record_id
     * WHILE cursor != null BEGIN
     *   sleep(5 seconds)  # Avoid running into rate limit
     *   response := GetMonthlyUsageAttribution(start_month, next_record_id=cursor)
     *   cursor := response.metadata.pagination.next_record_id
     * END
     * ```
     * @param param The request object
     */
    getMonthlyUsageAttribution(param: UsageMeteringApiGetMonthlyUsageAttributionRequest, options?: Configuration): Promise<MonthlyUsageAttributionResponse>;
    /**
     * Get specified daily custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getSpecifiedDailyCustomReports(param: UsageMeteringApiGetSpecifiedDailyCustomReportsRequest, options?: Configuration): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Get specified monthly custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getSpecifiedMonthlyCustomReports(param: UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest, options?: Configuration): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageAnalyzedLogs(param: UsageMeteringApiGetUsageAnalyzedLogsRequest, options?: Configuration): Promise<UsageAnalyzedLogsResponse>;
    /**
     * Get hourly usage for audit logs.
     * **Note:** This endpoint has been deprecated.
     * @param param The request object
     */
    getUsageAuditLogs(param: UsageMeteringApiGetUsageAuditLogsRequest, options?: Configuration): Promise<UsageAuditLogsResponse>;
    /**
     * Get billable usage across your account.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getUsageBillableSummary(param?: UsageMeteringApiGetUsageBillableSummaryRequest, options?: Configuration): Promise<UsageBillableSummaryResponse>;
    /**
     * Get hourly usage for CI visibility (tests, pipeline, and spans).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageCIApp(param: UsageMeteringApiGetUsageCIAppRequest, options?: Configuration): Promise<UsageCIVisibilityResponse>;
    /**
     * Get hourly usage for cloud security management (CSM) pro.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageCloudSecurityPostureManagement(param: UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest, options?: Configuration): Promise<UsageCloudSecurityPostureManagementResponse>;
    /**
     * Get hourly usage for cloud workload security.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageCWS(param: UsageMeteringApiGetUsageCWSRequest, options?: Configuration): Promise<UsageCWSResponse>;
    /**
     * Get hourly usage for database monitoring
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageDBM(param: UsageMeteringApiGetUsageDBMRequest, options?: Configuration): Promise<UsageDBMResponse>;
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageFargate(param: UsageMeteringApiGetUsageFargateRequest, options?: Configuration): Promise<UsageFargateResponse>;
    /**
     * Get hourly usage for hosts and containers.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageHosts(param: UsageMeteringApiGetUsageHostsRequest, options?: Configuration): Promise<UsageHostsResponse>;
    /**
     * Get hourly usage for indexed spans.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageIndexedSpans(param: UsageMeteringApiGetUsageIndexedSpansRequest, options?: Configuration): Promise<UsageIndexedSpansResponse>;
    /**
     * Get hourly usage for IoT.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageInternetOfThings(param: UsageMeteringApiGetUsageInternetOfThingsRequest, options?: Configuration): Promise<UsageIoTResponse>;
    /**
     * Get hourly usage for Lambda.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageLambda(param: UsageMeteringApiGetUsageLambdaRequest, options?: Configuration): Promise<UsageLambdaResponse>;
    /**
     * Get hourly usage for logs.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageLogs(param: UsageMeteringApiGetUsageLogsRequest, options?: Configuration): Promise<UsageLogsResponse>;
    /**
     * Get hourly usage for logs by index.
     * @param param The request object
     */
    getUsageLogsByIndex(param: UsageMeteringApiGetUsageLogsByIndexRequest, options?: Configuration): Promise<UsageLogsByIndexResponse>;
    /**
     * Get hourly usage for indexed logs by retention period.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageLogsByRetention(param: UsageMeteringApiGetUsageLogsByRetentionRequest, options?: Configuration): Promise<UsageLogsByRetentionResponse>;
    /**
     * Get hourly usage for network flows.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageNetworkFlows(param: UsageMeteringApiGetUsageNetworkFlowsRequest, options?: Configuration): Promise<UsageNetworkFlowsResponse>;
    /**
     * Get hourly usage for network hosts.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageNetworkHosts(param: UsageMeteringApiGetUsageNetworkHostsRequest, options?: Configuration): Promise<UsageNetworkHostsResponse>;
    /**
     * Get hourly usage for online archive.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageOnlineArchive(param: UsageMeteringApiGetUsageOnlineArchiveRequest, options?: Configuration): Promise<UsageOnlineArchiveResponse>;
    /**
     * Get hourly usage for profiled hosts.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageProfiling(param: UsageMeteringApiGetUsageProfilingRequest, options?: Configuration): Promise<UsageProfilingResponse>;
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageRumSessions(param: UsageMeteringApiGetUsageRumSessionsRequest, options?: Configuration): Promise<UsageRumSessionsResponse>;
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Units.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageRumUnits(param: UsageMeteringApiGetUsageRumUnitsRequest, options?: Configuration): Promise<UsageRumUnitsResponse>;
    /**
     * Get hourly usage for sensitive data scanner.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSDS(param: UsageMeteringApiGetUsageSDSRequest, options?: Configuration): Promise<UsageSDSResponse>;
    /**
     * Get hourly usage for SNMP devices.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSNMP(param: UsageMeteringApiGetUsageSNMPRequest, options?: Configuration): Promise<UsageSNMPResponse>;
    /**
     * Get all usage across your account.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getUsageSummary(param: UsageMeteringApiGetUsageSummaryRequest, options?: Configuration): Promise<UsageSummaryResponse>;
    /**
     * Get hourly usage for [synthetics checks](https://docs.datadoghq.com/synthetics/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSynthetics(param: UsageMeteringApiGetUsageSyntheticsRequest, options?: Configuration): Promise<UsageSyntheticsResponse>;
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSyntheticsAPI(param: UsageMeteringApiGetUsageSyntheticsAPIRequest, options?: Configuration): Promise<UsageSyntheticsAPIResponse>;
    /**
     * Get hourly usage for synthetics browser checks.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSyntheticsBrowser(param: UsageMeteringApiGetUsageSyntheticsBrowserRequest, options?: Configuration): Promise<UsageSyntheticsBrowserResponse>;
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageTimeseries(param: UsageMeteringApiGetUsageTimeseriesRequest, options?: Configuration): Promise<UsageTimeseriesResponse>;
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * @param param The request object
     */
    getUsageTopAvgMetrics(param?: UsageMeteringApiGetUsageTopAvgMetricsRequest, options?: Configuration): Promise<UsageTopAvgMetricsResponse>;
}
