import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SpansMetricCreateRequest } from "../models/SpansMetricCreateRequest";
import { SpansMetricResponse } from "../models/SpansMetricResponse";
import { SpansMetricsResponse } from "../models/SpansMetricsResponse";
import { SpansMetricUpdateRequest } from "../models/SpansMetricUpdateRequest";
export declare class SpansMetricsApiRequestFactory extends BaseAPIRequestFactory {
    createSpansMetric(body: SpansMetricCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteSpansMetric(metricId: string, _options?: Configuration): Promise<RequestContext>;
    getSpansMetric(metricId: string, _options?: Configuration): Promise<RequestContext>;
    listSpansMetrics(_options?: Configuration): Promise<RequestContext>;
    updateSpansMetric(metricId: string, body: SpansMetricUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SpansMetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSpansMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSpansMetric(response: ResponseContext): Promise<SpansMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSpansMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSpansMetric(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpansMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpansMetric(response: ResponseContext): Promise<SpansMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSpansMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSpansMetrics(response: ResponseContext): Promise<SpansMetricsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSpansMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSpansMetric(response: ResponseContext): Promise<SpansMetricResponse>;
}
export interface SpansMetricsApiCreateSpansMetricRequest {
    /**
     * The definition of the new span-based metric.
     * @type SpansMetricCreateRequest
     */
    body: SpansMetricCreateRequest;
}
export interface SpansMetricsApiDeleteSpansMetricRequest {
    /**
     * The name of the span-based metric.
     * @type string
     */
    metricId: string;
}
export interface SpansMetricsApiGetSpansMetricRequest {
    /**
     * The name of the span-based metric.
     * @type string
     */
    metricId: string;
}
export interface SpansMetricsApiUpdateSpansMetricRequest {
    /**
     * The name of the span-based metric.
     * @type string
     */
    metricId: string;
    /**
     * New definition of the span-based metric.
     * @type SpansMetricUpdateRequest
     */
    body: SpansMetricUpdateRequest;
}
export declare class SpansMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SpansMetricsApiRequestFactory, responseProcessor?: SpansMetricsApiResponseProcessor);
    /**
     * Create a metric based on your ingested spans in your organization.
     * Returns the span-based metric object from the request body when the request is successful.
     * @param param The request object
     */
    createSpansMetric(param: SpansMetricsApiCreateSpansMetricRequest, options?: Configuration): Promise<SpansMetricResponse>;
    /**
     * Delete a specific span-based metric from your organization.
     * @param param The request object
     */
    deleteSpansMetric(param: SpansMetricsApiDeleteSpansMetricRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific span-based metric from your organization.
     * @param param The request object
     */
    getSpansMetric(param: SpansMetricsApiGetSpansMetricRequest, options?: Configuration): Promise<SpansMetricResponse>;
    /**
     * Get the list of configured span-based metrics with their definitions.
     * @param param The request object
     */
    listSpansMetrics(options?: Configuration): Promise<SpansMetricsResponse>;
    /**
     * Update a specific span-based metric from your organization.
     * Returns the span-based metric object from the request body when the request is successful.
     * @param param The request object
     */
    updateSpansMetric(param: SpansMetricsApiUpdateSpansMetricRequest, options?: Configuration): Promise<SpansMetricResponse>;
}
