import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ActiveBillingDimensionsResponse } from "../models/ActiveBillingDimensionsResponse";
import { BillingDimensionsMappingResponse } from "../models/BillingDimensionsMappingResponse";
import { CostByOrgResponse } from "../models/CostByOrgResponse";
import { HourlyUsageResponse } from "../models/HourlyUsageResponse";
import { MonthlyCostAttributionResponse } from "../models/MonthlyCostAttributionResponse";
import { ProjectedCostResponse } from "../models/ProjectedCostResponse";
import { SortDirection } from "../models/SortDirection";
import { UsageApplicationSecurityMonitoringResponse } from "../models/UsageApplicationSecurityMonitoringResponse";
import { UsageLambdaTracedInvocationsResponse } from "../models/UsageLambdaTracedInvocationsResponse";
import { UsageObservabilityPipelinesResponse } from "../models/UsageObservabilityPipelinesResponse";
export declare class UsageMeteringApiRequestFactory extends BaseAPIRequestFactory {
    getActiveBillingDimensions(_options?: Configuration): Promise<RequestContext>;
    getBillingDimensionMapping(filterMonth?: Date, filterView?: string, _options?: Configuration): Promise<RequestContext>;
    getCostByOrg(startMonth: Date, endMonth?: Date, _options?: Configuration): Promise<RequestContext>;
    getEstimatedCostByOrg(view?: string, startMonth?: Date, endMonth?: Date, startDate?: Date, endDate?: Date, includeConnectedAccounts?: boolean, _options?: Configuration): Promise<RequestContext>;
    getHistoricalCostByOrg(startMonth: Date, view?: string, endMonth?: Date, includeConnectedAccounts?: boolean, _options?: Configuration): Promise<RequestContext>;
    getHourlyUsage(filterTimestampStart: Date, filterProductFamilies: string, filterTimestampEnd?: Date, filterIncludeDescendants?: boolean, filterIncludeConnectedAccounts?: boolean, filterIncludeBreakdown?: boolean, filterVersions?: string, pageLimit?: number, pageNextRecordId?: string, _options?: Configuration): Promise<RequestContext>;
    getMonthlyCostAttribution(startMonth: Date, fields: string, endMonth?: Date, sortDirection?: SortDirection, sortName?: string, tagBreakdownKeys?: string, nextRecordId?: string, includeDescendants?: boolean, _options?: Configuration): Promise<RequestContext>;
    getProjectedCost(view?: string, includeConnectedAccounts?: boolean, _options?: Configuration): Promise<RequestContext>;
    getUsageApplicationSecurityMonitoring(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageLambdaTracedInvocations(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
    getUsageObservabilityPipelines(startHr: Date, endHr?: Date, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsageMeteringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActiveBillingDimensions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getActiveBillingDimensions(response: ResponseContext): Promise<ActiveBillingDimensionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBillingDimensionMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBillingDimensionMapping(response: ResponseContext): Promise<BillingDimensionsMappingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCostByOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCostByOrg(response: ResponseContext): Promise<CostByOrgResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEstimatedCostByOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getEstimatedCostByOrg(response: ResponseContext): Promise<CostByOrgResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHistoricalCostByOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHistoricalCostByOrg(response: ResponseContext): Promise<CostByOrgResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHourlyUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHourlyUsage(response: ResponseContext): Promise<HourlyUsageResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonthlyCostAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyCostAttribution(response: ResponseContext): Promise<MonthlyCostAttributionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectedCost
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProjectedCost(response: ResponseContext): Promise<ProjectedCostResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageApplicationSecurityMonitoring
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageApplicationSecurityMonitoring(response: ResponseContext): Promise<UsageApplicationSecurityMonitoringResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageLambdaTracedInvocations
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLambdaTracedInvocations(response: ResponseContext): Promise<UsageLambdaTracedInvocationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageObservabilityPipelines
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageObservabilityPipelines(response: ResponseContext): Promise<UsageObservabilityPipelinesResponse>;
}
export interface UsageMeteringApiGetBillingDimensionMappingRequest {
    /**
     * Datetime in ISO-8601 format, UTC, and for mappings beginning this month. Defaults to the current month.
     * @type Date
     */
    filterMonth?: Date;
    /**
     * String to specify whether to retrieve active billing dimension mappings for the contract or for all available mappings. Allowed views have the string `active` or `all`. Defaults to `active`.
     * @type string
     */
    filterView?: string;
}
export interface UsageMeteringApiGetCostByOrgRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.
     * @type Date
     */
    startMonth: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
     * @type Date
     */
    endMonth?: Date;
}
export interface UsageMeteringApiGetEstimatedCostByOrgRequest {
    /**
     * String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.
     * @type string
     */
    view?: string;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month. **Either start_month or start_date should be specified, but not both.** (start_month cannot go beyond two months in the past). Provide an `end_month` to view month-over-month cost.
     * @type Date
     */
    startMonth?: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
     * @type Date
     */
    endMonth?: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. **Either start_month or start_date should be specified, but not both.** (start_date cannot go beyond two months in the past). Provide an `end_date` to view day-over-day cumulative cost.
     * @type Date
     */
    startDate?: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost ending this day.
     * @type Date
     */
    endDate?: Date;
    /**
     * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
     * @type boolean
     */
    includeConnectedAccounts?: boolean;
}
export interface UsageMeteringApiGetHistoricalCostByOrgRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning this month.
     * @type Date
     */
    startMonth: Date;
    /**
     * String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`.  Defaults to `summary`.
     * @type string
     */
    view?: string;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
     * @type Date
     */
    endMonth?: Date;
    /**
     * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
     * @type boolean
     */
    includeConnectedAccounts?: boolean;
}
export interface UsageMeteringApiGetHourlyUsageRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     */
    filterTimestampStart: Date;
    /**
     * Comma separated list of product families to retrieve. Available families are `all`, `analyzed_logs`,
     * `application_security`, `audit_trail`, `bits_ai`, `serverless`, `ci_app`, `cloud_cost_management`, `cloud_siem`,
     * `csm_container_enterprise`, `csm_host_enterprise`, `cspm`, `custom_events`, `cws`, `dbm`, `error_tracking`,
     * `fargate`, `infra_hosts`, `incident_management`, `indexed_logs`, `indexed_spans`, `ingested_spans`, `iot`,
     * `lambda_traced_invocations`, `llm_observability`, `logs`, `network_flows`, `network_hosts`, `network_monitoring`,
     * `observability_pipelines`, `online_archive`, `profiling`, `product_analytics`, `rum`, `rum_browser_sessions`,
     * `rum_mobile_sessions`, `sds`, `snmp`, `software_delivery`, `synthetics_api`, `synthetics_browser`,
     * `synthetics_mobile`, `synthetics_parallel_testing`, `timeseries`, `vuln_management` and `workflow_executions`.
     * The following product family has been **deprecated**: `audit_logs`.
     * @type string
     */
    filterProductFamilies: string;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     */
    filterTimestampEnd?: Date;
    /**
     * Include child org usage in the response. Defaults to false.
     * @type boolean
     */
    filterIncludeDescendants?: boolean;
    /**
     * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to false.
     * @type boolean
     */
    filterIncludeConnectedAccounts?: boolean;
    /**
     * Include breakdown of usage by subcategories where applicable (for product family logs only). Defaults to false.
     * @type boolean
     */
    filterIncludeBreakdown?: boolean;
    /**
     * Comma separated list of product family versions to use in the format `product_family:version`. For example,
     * `infra_hosts:1.0.0`. If this parameter is not used, the API will use the latest version of each requested
     * product family. Currently all families have one version `1.0.0`.
     * @type string
     */
    filterVersions?: string;
    /**
     * Maximum number of results to return (between 1 and 500) - defaults to 500 if limit not specified.
     * @type number
     */
    pageLimit?: number;
    /**
     * List following results with a next_record_id provided in the previous query.
     * @type string
     */
    pageNextRecordId?: string;
}
export interface UsageMeteringApiGetMonthlyCostAttributionRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost beginning in this month.
     * @type Date
     */
    startMonth: Date;
    /**
     * Comma-separated list specifying cost types (e.g., `<billing_dimension>_on_demand_cost`, `<billing_dimension>_committed_cost`, `<billing_dimension>_total_cost`) and the
     * proportions (`<billing_dimension>_percentage_in_org`, `<billing_dimension>_percentage_in_account`). Use `*` to retrieve all fields.
     * Example: `infra_host_on_demand_cost,infra_host_percentage_in_account`
     * To obtain the complete list of active billing dimensions that can be used to replace
     * `<billing_dimension>` in the field names, make a request to the [Get active billing dimensions API](https://docs.datadoghq.com/api/latest/usage-metering/#get-active-billing-dimensions-for-cost-attribution).
     * @type string
     */
    fields: string;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for cost ending this month.
     * @type Date
     */
    endMonth?: Date;
    /**
     * The direction to sort by: `[desc, asc]`.
     * @type SortDirection
     */
    sortDirection?: SortDirection;
    /**
     * The billing dimension to sort by. Always sorted by total cost. Example: `infra_host`.
     * @type string
     */
    sortName?: string;
    /**
     * Comma separated list of tag keys used to group cost. If no value is provided the cost will not be broken down by tags.
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
     * Include child org cost in the response. Defaults to `true`.
     * @type boolean
     */
    includeDescendants?: boolean;
}
export interface UsageMeteringApiGetProjectedCostRequest {
    /**
     * String to specify whether cost is broken down at a parent-org level or at the sub-org level. Available views are `summary` and `sub-org`. Defaults to `summary`.
     * @type string
     */
    view?: string;
    /**
     * Boolean to specify whether to include accounts connected to the current account as partner customers in the Datadog partner network program. Defaults to `false`.
     * @type boolean
     */
    includeConnectedAccounts?: boolean;
}
export interface UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest {
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
export interface UsageMeteringApiGetUsageLambdaTracedInvocationsRequest {
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
export interface UsageMeteringApiGetUsageObservabilityPipelinesRequest {
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
export declare class UsageMeteringApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsageMeteringApiRequestFactory, responseProcessor?: UsageMeteringApiResponseProcessor);
    /**
     * Get active billing dimensions for cost attribution. Cost data for a given month becomes available no later than the 19th of the following month.
     * @param param The request object
     */
    getActiveBillingDimensions(options?: Configuration): Promise<ActiveBillingDimensionsResponse>;
    /**
     * Get a mapping of billing dimensions to the corresponding keys for the supported usage metering public API endpoints.
     * Mapping data is updated on a monthly cadence.
     *
     * This endpoint is only accessible to [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getBillingDimensionMapping(param?: UsageMeteringApiGetBillingDimensionMappingRequest, options?: Configuration): Promise<BillingDimensionsMappingResponse>;
    /**
     * Get cost across multi-org account.
     * Cost by org data for a given month becomes available no later than the 16th of the following month.
     * **Note:** This endpoint has been deprecated. Please use the new endpoint
     * [`/historical_cost`](https://docs.datadoghq.com/api/latest/usage-metering/#get-historical-cost-across-your-account)
     * instead.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getCostByOrg(param: UsageMeteringApiGetCostByOrgRequest, options?: Configuration): Promise<CostByOrgResponse>;
    /**
     * Get estimated cost across multi-org and single root-org accounts.
     * Estimated cost data is only available for the current month and previous month
     * and is delayed by up to 72 hours from when it was incurred.
     * To access historical costs prior to this, use the `/historical_cost` endpoint.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getEstimatedCostByOrg(param?: UsageMeteringApiGetEstimatedCostByOrgRequest, options?: Configuration): Promise<CostByOrgResponse>;
    /**
     * Get historical cost across multi-org and single root-org accounts.
     * Cost data for a given month becomes available no later than the 16th of the following month.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getHistoricalCostByOrg(param: UsageMeteringApiGetHistoricalCostByOrgRequest, options?: Configuration): Promise<CostByOrgResponse>;
    /**
     * Get hourly usage by product family.
     * @param param The request object
     */
    getHourlyUsage(param: UsageMeteringApiGetHourlyUsageRequest, options?: Configuration): Promise<HourlyUsageResponse>;
    /**
     * Get monthly cost attribution by tag across multi-org and single root-org accounts.
     * Cost Attribution data for a given month becomes available no later than the 19th of the following month.
     * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
     * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
     * Pseudo code example:
     * ```
     * response := GetMonthlyCostAttribution(start_month, end_month)
     * cursor := response.metadata.pagination.next_record_id
     * WHILE cursor != null BEGIN
     *   sleep(5 seconds)  # Avoid running into rate limit
     *   response := GetMonthlyCostAttribution(start_month, end_month, next_record_id=cursor)
     *   cursor := response.metadata.pagination.next_record_id
     * END
     * ```
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/). This endpoint is not available in the Government (US1-FED) site.
     * @param param The request object
     */
    getMonthlyCostAttribution(param: UsageMeteringApiGetMonthlyCostAttributionRequest, options?: Configuration): Promise<MonthlyCostAttributionResponse>;
    /**
     * Get projected cost across multi-org and single root-org accounts.
     * Projected cost data is only available for the current month and becomes available around the 12th of the month.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getProjectedCost(param?: UsageMeteringApiGetProjectedCostRequest, options?: Configuration): Promise<ProjectedCostResponse>;
    /**
     * Get hourly usage for application security .
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
     * @param param The request object
     */
    getUsageApplicationSecurityMonitoring(param: UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest, options?: Configuration): Promise<UsageApplicationSecurityMonitoringResponse>;
    /**
     * Get hourly usage for Lambda traced invocations.
     * **Note:** This endpoint has been deprecated.. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
     * @param param The request object
     */
    getUsageLambdaTracedInvocations(param: UsageMeteringApiGetUsageLambdaTracedInvocationsRequest, options?: Configuration): Promise<UsageLambdaTracedInvocationsResponse>;
    /**
     * Get hourly usage for observability pipelines.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
     * @param param The request object
     */
    getUsageObservabilityPipelines(param: UsageMeteringApiGetUsageObservabilityPipelinesRequest, options?: Configuration): Promise<UsageObservabilityPipelinesResponse>;
}
