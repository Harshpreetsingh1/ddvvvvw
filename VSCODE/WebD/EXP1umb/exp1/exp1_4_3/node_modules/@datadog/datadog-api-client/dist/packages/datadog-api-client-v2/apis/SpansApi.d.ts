import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { Span } from "../models/Span";
import { SpansAggregateRequest } from "../models/SpansAggregateRequest";
import { SpansAggregateResponse } from "../models/SpansAggregateResponse";
import { SpansListRequest } from "../models/SpansListRequest";
import { SpansListResponse } from "../models/SpansListResponse";
import { SpansSort } from "../models/SpansSort";
export declare class SpansApiRequestFactory extends BaseAPIRequestFactory {
    aggregateSpans(body: SpansAggregateRequest, _options?: Configuration): Promise<RequestContext>;
    listSpans(body: SpansListRequest, _options?: Configuration): Promise<RequestContext>;
    listSpansGet(filterQuery?: string, filterFrom?: string, filterTo?: string, sort?: SpansSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class SpansApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateSpans(response: ResponseContext): Promise<SpansAggregateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSpans(response: ResponseContext): Promise<SpansListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSpansGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSpansGet(response: ResponseContext): Promise<SpansListResponse>;
}
export interface SpansApiAggregateSpansRequest {
    /**
     * @type SpansAggregateRequest
     */
    body: SpansAggregateRequest;
}
export interface SpansApiListSpansRequest {
    /**
     * @type SpansListRequest
     */
    body: SpansListRequest;
}
export interface SpansApiListSpansGetRequest {
    /**
     * Search query following spans syntax.
     * @type string
     */
    filterQuery?: string;
    /**
     * Minimum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds).
     * @type string
     */
    filterFrom?: string;
    /**
     * Maximum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds).
     * @type string
     */
    filterTo?: string;
    /**
     * Order of spans in results.
     * @type SpansSort
     */
    sort?: SpansSort;
    /**
     * List following results with a cursor provided in the previous query.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of spans in the response.
     * @type number
     */
    pageLimit?: number;
}
export declare class SpansApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SpansApiRequestFactory, responseProcessor?: SpansApiResponseProcessor);
    /**
     * The API endpoint to aggregate spans into buckets and compute metrics and timeseries.
     * This endpoint is rate limited to `300` requests per hour.
     * @param param The request object
     */
    aggregateSpans(param: SpansApiAggregateSpansRequest, options?: Configuration): Promise<SpansAggregateResponse>;
    /**
     * List endpoint returns spans that match a span search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to build complex spans filtering and search.
     * This endpoint is rate limited to `300` requests per hour.
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api
     * @param param The request object
     */
    listSpans(param: SpansApiListSpansRequest, options?: Configuration): Promise<SpansListResponse>;
    /**
     * Provide a paginated version of listSpans returning a generator with all the items.
     */
    listSpansWithPagination(param: SpansApiListSpansRequest, options?: Configuration): AsyncGenerator<Span>;
    /**
     * List endpoint returns spans that match a span search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to see your latest spans.
     * This endpoint is rate limited to `300` requests per hour.
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api
     * @param param The request object
     */
    listSpansGet(param?: SpansApiListSpansGetRequest, options?: Configuration): Promise<SpansListResponse>;
    /**
     * Provide a paginated version of listSpansGet returning a generator with all the items.
     */
    listSpansGetWithPagination(param?: SpansApiListSpansGetRequest, options?: Configuration): AsyncGenerator<Span>;
}
