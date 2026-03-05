import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CIAppCreatePipelineEventRequest } from "../models/CIAppCreatePipelineEventRequest";
import { CIAppPipelineEvent } from "../models/CIAppPipelineEvent";
import { CIAppPipelineEventsRequest } from "../models/CIAppPipelineEventsRequest";
import { CIAppPipelineEventsResponse } from "../models/CIAppPipelineEventsResponse";
import { CIAppPipelinesAggregateRequest } from "../models/CIAppPipelinesAggregateRequest";
import { CIAppPipelinesAnalyticsAggregateResponse } from "../models/CIAppPipelinesAnalyticsAggregateResponse";
import { CIAppSort } from "../models/CIAppSort";
export declare class CIVisibilityPipelinesApiRequestFactory extends BaseAPIRequestFactory {
    aggregateCIAppPipelineEvents(body: CIAppPipelinesAggregateRequest, _options?: Configuration): Promise<RequestContext>;
    createCIAppPipelineEvent(body: CIAppCreatePipelineEventRequest, _options?: Configuration): Promise<RequestContext>;
    listCIAppPipelineEvents(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: CIAppSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    searchCIAppPipelineEvents(body?: CIAppPipelineEventsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CIVisibilityPipelinesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateCIAppPipelineEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateCIAppPipelineEvents(response: ResponseContext): Promise<CIAppPipelinesAnalyticsAggregateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCIAppPipelineEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCIAppPipelineEvent(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCIAppPipelineEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCIAppPipelineEvents(response: ResponseContext): Promise<CIAppPipelineEventsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchCIAppPipelineEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchCIAppPipelineEvents(response: ResponseContext): Promise<CIAppPipelineEventsResponse>;
}
export interface CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest {
    /**
     * @type CIAppPipelinesAggregateRequest
     */
    body: CIAppPipelinesAggregateRequest;
}
export interface CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest {
    /**
     * @type CIAppCreatePipelineEventRequest
     */
    body: CIAppCreatePipelineEventRequest;
}
export interface CIVisibilityPipelinesApiListCIAppPipelineEventsRequest {
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
export interface CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest {
    /**
     * @type CIAppPipelineEventsRequest
     */
    body?: CIAppPipelineEventsRequest;
}
export declare class CIVisibilityPipelinesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CIVisibilityPipelinesApiRequestFactory, responseProcessor?: CIVisibilityPipelinesApiResponseProcessor);
    /**
     * Use this API endpoint to aggregate CI Visibility pipeline events into buckets of computed metrics and timeseries.
     * @param param The request object
     */
    aggregateCIAppPipelineEvents(param: CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest, options?: Configuration): Promise<CIAppPipelinesAnalyticsAggregateResponse>;
    /**
     * Send your pipeline event to your Datadog platform over HTTP. For details about how pipeline executions are modeled and what execution types we support, see [Pipeline Data Model And Execution Types](https://docs.datadoghq.com/continuous_integration/guides/pipeline_data_model/).
     *
     * Multiple events can be sent in an array (up to 1000).
     *
     * Pipeline events can be submitted with a timestamp that is up to 18 hours in the past.
     * The duration between the event start and end times cannot exceed 1 year.
     * @param param The request object
     */
    createCIAppPipelineEvent(param: CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest, options?: Configuration): Promise<any>;
    /**
     * List endpoint returns CI Visibility pipeline events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to see your latest pipeline events.
     * @param param The request object
     */
    listCIAppPipelineEvents(param?: CIVisibilityPipelinesApiListCIAppPipelineEventsRequest, options?: Configuration): Promise<CIAppPipelineEventsResponse>;
    /**
     * Provide a paginated version of listCIAppPipelineEvents returning a generator with all the items.
     */
    listCIAppPipelineEventsWithPagination(param?: CIVisibilityPipelinesApiListCIAppPipelineEventsRequest, options?: Configuration): AsyncGenerator<CIAppPipelineEvent>;
    /**
     * List endpoint returns CI Visibility pipeline events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to build complex events filtering and search.
     * @param param The request object
     */
    searchCIAppPipelineEvents(param?: CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest, options?: Configuration): Promise<CIAppPipelineEventsResponse>;
    /**
     * Provide a paginated version of searchCIAppPipelineEvents returning a generator with all the items.
     */
    searchCIAppPipelineEventsWithPagination(param?: CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest, options?: Configuration): AsyncGenerator<CIAppPipelineEvent>;
}
