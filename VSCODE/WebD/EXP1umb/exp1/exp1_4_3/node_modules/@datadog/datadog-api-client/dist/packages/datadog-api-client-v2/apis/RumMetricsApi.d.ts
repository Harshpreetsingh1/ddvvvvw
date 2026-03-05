import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { RumMetricCreateRequest } from "../models/RumMetricCreateRequest";
import { RumMetricResponse } from "../models/RumMetricResponse";
import { RumMetricsResponse } from "../models/RumMetricsResponse";
import { RumMetricUpdateRequest } from "../models/RumMetricUpdateRequest";
export declare class RumMetricsApiRequestFactory extends BaseAPIRequestFactory {
    createRumMetric(body: RumMetricCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteRumMetric(metricId: string, _options?: Configuration): Promise<RequestContext>;
    getRumMetric(metricId: string, _options?: Configuration): Promise<RequestContext>;
    listRumMetrics(_options?: Configuration): Promise<RequestContext>;
    updateRumMetric(metricId: string, body: RumMetricUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumMetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRumMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRumMetric(response: ResponseContext): Promise<RumMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRumMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRumMetric(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRumMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRumMetric(response: ResponseContext): Promise<RumMetricResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRumMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumMetrics(response: ResponseContext): Promise<RumMetricsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRumMetric
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRumMetric(response: ResponseContext): Promise<RumMetricResponse>;
}
export interface RumMetricsApiCreateRumMetricRequest {
    /**
     * The definition of the new rum-based metric.
     * @type RumMetricCreateRequest
     */
    body: RumMetricCreateRequest;
}
export interface RumMetricsApiDeleteRumMetricRequest {
    /**
     * The name of the rum-based metric.
     * @type string
     */
    metricId: string;
}
export interface RumMetricsApiGetRumMetricRequest {
    /**
     * The name of the rum-based metric.
     * @type string
     */
    metricId: string;
}
export interface RumMetricsApiUpdateRumMetricRequest {
    /**
     * The name of the rum-based metric.
     * @type string
     */
    metricId: string;
    /**
     * New definition of the rum-based metric.
     * @type RumMetricUpdateRequest
     */
    body: RumMetricUpdateRequest;
}
export declare class RumMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumMetricsApiRequestFactory, responseProcessor?: RumMetricsApiResponseProcessor);
    /**
     * Create a metric based on your organization's RUM data.
     * Returns the rum-based metric object from the request body when the request is successful.
     * @param param The request object
     */
    createRumMetric(param: RumMetricsApiCreateRumMetricRequest, options?: Configuration): Promise<RumMetricResponse>;
    /**
     * Delete a specific rum-based metric from your organization.
     * @param param The request object
     */
    deleteRumMetric(param: RumMetricsApiDeleteRumMetricRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific rum-based metric from your organization.
     * @param param The request object
     */
    getRumMetric(param: RumMetricsApiGetRumMetricRequest, options?: Configuration): Promise<RumMetricResponse>;
    /**
     * Get the list of configured rum-based metrics with their definitions.
     * @param param The request object
     */
    listRumMetrics(options?: Configuration): Promise<RumMetricsResponse>;
    /**
     * Update a specific rum-based metric from your organization.
     * Returns the rum-based metric object from the request body when the request is successful.
     * @param param The request object
     */
    updateRumMetric(param: RumMetricsApiUpdateRumMetricRequest, options?: Configuration): Promise<RumMetricResponse>;
}
