import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { DistributionPointsContentEncoding } from "../models/DistributionPointsContentEncoding";
import { DistributionPointsPayload } from "../models/DistributionPointsPayload";
import { IntakePayloadAccepted } from "../models/IntakePayloadAccepted";
import { MetricContentEncoding } from "../models/MetricContentEncoding";
import { MetricMetadata } from "../models/MetricMetadata";
import { MetricSearchResponse } from "../models/MetricSearchResponse";
import { MetricsListResponse } from "../models/MetricsListResponse";
import { MetricsPayload } from "../models/MetricsPayload";
import { MetricsQueryResponse } from "../models/MetricsQueryResponse";
export declare class MetricsApiRequestFactory extends BaseAPIRequestFactory {
    getMetricMetadata(metricName: string, _options?: Configuration): Promise<RequestContext>;
    listActiveMetrics(from: number, host?: string, tagFilter?: string, _options?: Configuration): Promise<RequestContext>;
    listMetrics(q: string, _options?: Configuration): Promise<RequestContext>;
    queryMetrics(from: number, to: number, query: string, _options?: Configuration): Promise<RequestContext>;
    submitDistributionPoints(body: DistributionPointsPayload, contentEncoding?: DistributionPointsContentEncoding, _options?: Configuration): Promise<RequestContext>;
    submitMetrics(body: MetricsPayload, contentEncoding?: MetricContentEncoding, _options?: Configuration): Promise<RequestContext>;
    updateMetricMetadata(metricName: string, body: MetricMetadata, _options?: Configuration): Promise<RequestContext>;
}
export declare class MetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMetricMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMetricMetadata(response: ResponseContext): Promise<MetricMetadata>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listActiveMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listActiveMetrics(response: ResponseContext): Promise<MetricsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMetrics(response: ResponseContext): Promise<MetricSearchResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryMetrics(response: ResponseContext): Promise<MetricsQueryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitDistributionPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitDistributionPoints(response: ResponseContext): Promise<IntakePayloadAccepted>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitMetrics(response: ResponseContext): Promise<IntakePayloadAccepted>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMetricMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMetricMetadata(response: ResponseContext): Promise<MetricMetadata>;
}
export interface MetricsApiGetMetricMetadataRequest {
    /**
     * Name of the metric for which to get metadata.
     * @type string
     */
    metricName: string;
}
export interface MetricsApiListActiveMetricsRequest {
    /**
     * Seconds since the Unix epoch.
     * @type number
     */
    from: number;
    /**
     * Hostname for filtering the list of metrics returned.
     * If set, metrics retrieved are those with the corresponding hostname tag.
     * @type string
     */
    host?: string;
    /**
     * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions.
     * Cannot be combined with other filters.
     * @type string
     */
    tagFilter?: string;
}
export interface MetricsApiListMetricsRequest {
    /**
     * Query string to search metrics upon. Can optionally be prefixed with `metrics:`.
     * @type string
     */
    q: string;
}
export interface MetricsApiQueryMetricsRequest {
    /**
     * Start of the queried time period, seconds since the Unix epoch.
     * @type number
     */
    from: number;
    /**
     * End of the queried time period, seconds since the Unix epoch.
     * @type number
     */
    to: number;
    /**
     * Query string.
     * @type string
     */
    query: string;
}
export interface MetricsApiSubmitDistributionPointsRequest {
    /**
     * @type DistributionPointsPayload
     */
    body: DistributionPointsPayload;
    /**
     * HTTP header used to compress the media-type.
     * @type DistributionPointsContentEncoding
     */
    contentEncoding?: DistributionPointsContentEncoding;
}
export interface MetricsApiSubmitMetricsRequest {
    /**
     * @type MetricsPayload
     */
    body: MetricsPayload;
    /**
     * HTTP header used to compress the media-type.
     * @type MetricContentEncoding
     */
    contentEncoding?: MetricContentEncoding;
}
export interface MetricsApiUpdateMetricMetadataRequest {
    /**
     * Name of the metric for which to edit metadata.
     * @type string
     */
    metricName: string;
    /**
     * New metadata.
     * @type MetricMetadata
     */
    body: MetricMetadata;
}
export declare class MetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    /**
     * Get metadata about a specific metric.
     * @param param The request object
     */
    getMetricMetadata(param: MetricsApiGetMetricMetadataRequest, options?: Configuration): Promise<MetricMetadata>;
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * @param param The request object
     */
    listActiveMetrics(param: MetricsApiListActiveMetricsRequest, options?: Configuration): Promise<MetricsListResponse>;
    /**
     * **Note**: This endpoint is deprecated. Use `/api/v2/metrics` instead.
     *
     * Search for metrics from the last 24 hours in Datadog.
     * @param param The request object
     */
    listMetrics(param: MetricsApiListMetricsRequest, options?: Configuration): Promise<MetricSearchResponse>;
    /**
     * Query timeseries points.
     * @param param The request object
     */
    queryMetrics(param: MetricsApiQueryMetricsRequest, options?: Configuration): Promise<MetricsQueryResponse>;
    /**
     * The distribution points end-point allows you to post distribution data that can be graphed on Datadog’s dashboards.
     * @param param The request object
     */
    submitDistributionPoints(param: MetricsApiSubmitDistributionPointsRequest, options?: Configuration): Promise<IntakePayloadAccepted>;
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.
     * The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).
     *
     * If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:
     *
     * - 64 bits for the timestamp
     * - 64 bits for the value
     * - 40 bytes for the metric names
     * - 50 bytes for the timeseries
     * - The full payload is approximately 100 bytes. However, with the DogStatsD API,
     * compression is applied, which reduces the payload size.
     * @param param The request object
     */
    submitMetrics(param: MetricsApiSubmitMetricsRequest, options?: Configuration): Promise<IntakePayloadAccepted>;
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * @param param The request object
     */
    updateMetricMetadata(param: MetricsApiUpdateMetricMetadataRequest, options?: Configuration): Promise<MetricMetadata>;
}
