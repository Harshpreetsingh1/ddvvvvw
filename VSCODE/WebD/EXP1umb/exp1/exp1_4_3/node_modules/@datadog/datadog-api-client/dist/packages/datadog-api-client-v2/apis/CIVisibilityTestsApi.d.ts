import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CIAppSort } from "../models/CIAppSort";
import { CIAppTestEvent } from "../models/CIAppTestEvent";
import { CIAppTestEventsRequest } from "../models/CIAppTestEventsRequest";
import { CIAppTestEventsResponse } from "../models/CIAppTestEventsResponse";
import { CIAppTestsAggregateRequest } from "../models/CIAppTestsAggregateRequest";
import { CIAppTestsAnalyticsAggregateResponse } from "../models/CIAppTestsAnalyticsAggregateResponse";
export declare class CIVisibilityTestsApiRequestFactory extends BaseAPIRequestFactory {
    aggregateCIAppTestEvents(body: CIAppTestsAggregateRequest, _options?: Configuration): Promise<RequestContext>;
    listCIAppTestEvents(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: CIAppSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    searchCIAppTestEvents(body?: CIAppTestEventsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CIVisibilityTestsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateCIAppTestEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateCIAppTestEvents(response: ResponseContext): Promise<CIAppTestsAnalyticsAggregateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCIAppTestEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCIAppTestEvents(response: ResponseContext): Promise<CIAppTestEventsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchCIAppTestEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchCIAppTestEvents(response: ResponseContext): Promise<CIAppTestEventsResponse>;
}
export interface CIVisibilityTestsApiAggregateCIAppTestEventsRequest {
    /**
     * @type CIAppTestsAggregateRequest
     */
    body: CIAppTestsAggregateRequest;
}
export interface CIVisibilityTestsApiListCIAppTestEventsRequest {
    /**
     * Search query following log syntax.
     * @type string
     */
    filterQuery?: string;
    /**
     * Minimum timestamp for requested events.
     * @type Date
     */
    filterFrom?: Date;
    /**
     * Maximum timestamp for requested events.
     * @type Date
     */
    filterTo?: Date;
    /**
     * Order of events in results.
     * @type CIAppSort
     */
    sort?: CIAppSort;
    /**
     * List following results with a cursor provided in the previous query.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of events in the response.
     * @type number
     */
    pageLimit?: number;
}
export interface CIVisibilityTestsApiSearchCIAppTestEventsRequest {
    /**
     * @type CIAppTestEventsRequest
     */
    body?: CIAppTestEventsRequest;
}
export declare class CIVisibilityTestsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CIVisibilityTestsApiRequestFactory, responseProcessor?: CIVisibilityTestsApiResponseProcessor);
    /**
     * The API endpoint to aggregate CI Visibility test events into buckets of computed metrics and timeseries.
     * @param param The request object
     */
    aggregateCIAppTestEvents(param: CIVisibilityTestsApiAggregateCIAppTestEventsRequest, options?: Configuration): Promise<CIAppTestsAnalyticsAggregateResponse>;
    /**
     * List endpoint returns CI Visibility test events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to see your latest test events.
     * @param param The request object
     */
    listCIAppTestEvents(param?: CIVisibilityTestsApiListCIAppTestEventsRequest, options?: Configuration): Promise<CIAppTestEventsResponse>;
    /**
     * Provide a paginated version of listCIAppTestEvents returning a generator with all the items.
     */
    listCIAppTestEventsWithPagination(param?: CIVisibilityTestsApiListCIAppTestEventsRequest, options?: Configuration): AsyncGenerator<CIAppTestEvent>;
    /**
     * List endpoint returns CI Visibility test events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to build complex events filtering and search.
     * @param param The request object
     */
    searchCIAppTestEvents(param?: CIVisibilityTestsApiSearchCIAppTestEventsRequest, options?: Configuration): Promise<CIAppTestEventsResponse>;
    /**
     * Provide a paginated version of searchCIAppTestEvents returning a generator with all the items.
     */
    searchCIAppTestEventsWithPagination(param?: CIVisibilityTestsApiSearchCIAppTestEventsRequest, options?: Configuration): AsyncGenerator<CIAppTestEvent>;
}
