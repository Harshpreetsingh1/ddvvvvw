import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { LogsMetricCreateRequest } from "../models/LogsMetricCreateRequest";
import { LogsMetricResponse } from "../models/LogsMetricResponse";
import { LogsMetricsResponse } from "../models/LogsMetricsResponse";
import { LogsMetricUpdateRequest } from "../models/LogsMetricUpdateRequest";
export declare class LogsMetricsApiRequestFactory extends BaseAPIRequestFactory {
    createLogsMetric(body: LogsMetricCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLogsMetric(metricId: string, _options?: Configuration): Promise<RequestContext>;
    getLogsMetric(metricId: string, _options?: Configuration): Promise<RequestContext>;
    listLogsMetrics(_options?: Configuration): Promise<RequestContext>;
    updateLogsMetric(metricId: string, body: LogsMetricUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsMetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsMetric(response: ResponseContext): Promise<LogsMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsMetric(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsMetric(response: ResponseContext): Promise<LogsMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsMetrics(response: ResponseContext): Promise<LogsMetricsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsMetric(response: ResponseContext): Promise<LogsMetricResponse>;
}
export interface LogsMetricsApiCreateLogsMetricRequest {
    /**
     * The definition of the new log-based metric.
     * @type LogsMetricCreateRequest
     */
    body: LogsMetricCreateRequest;
}
export interface LogsMetricsApiDeleteLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     */
    metricId: string;
}
export interface LogsMetricsApiGetLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     */
    metricId: string;
}
export interface LogsMetricsApiUpdateLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     */
    metricId: string;
    /**
     * New definition of the log-based metric.
     * @type LogsMetricUpdateRequest
     */
    body: LogsMetricUpdateRequest;
}
export declare class LogsMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsMetricsApiRequestFactory, responseProcessor?: LogsMetricsApiResponseProcessor);
    /**
     * Create a metric based on your ingested logs in your organization.
     * Returns the log-based metric object from the request body when the request is successful.
     * @param param The request object
     */
    createLogsMetric(param: LogsMetricsApiCreateLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse>;
    /**
     * Delete a specific log-based metric from your organization.
     * @param param The request object
     */
    deleteLogsMetric(param: LogsMetricsApiDeleteLogsMetricRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific log-based metric from your organization.
     * @param param The request object
     */
    getLogsMetric(param: LogsMetricsApiGetLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse>;
    /**
     * Get the list of configured log-based metrics with their definitions.
     * @param param The request object
     */
    listLogsMetrics(options?: Configuration): Promise<LogsMetricsResponse>;
    /**
     * Update a specific log-based metric from your organization.
     * Returns the log-based metric object from the request body when the request is successful.
     * @param param The request object
     */
    updateLogsMetric(param: LogsMetricsApiUpdateLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse>;
}
