import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { RUMAggregateRequest } from "../models/RUMAggregateRequest";
import { RUMAnalyticsAggregateResponse } from "../models/RUMAnalyticsAggregateResponse";
import { RUMApplicationCreateRequest } from "../models/RUMApplicationCreateRequest";
import { RUMApplicationResponse } from "../models/RUMApplicationResponse";
import { RUMApplicationsResponse } from "../models/RUMApplicationsResponse";
import { RUMApplicationUpdateRequest } from "../models/RUMApplicationUpdateRequest";
import { RUMEvent } from "../models/RUMEvent";
import { RUMEventsResponse } from "../models/RUMEventsResponse";
import { RUMSearchEventsRequest } from "../models/RUMSearchEventsRequest";
import { RUMSort } from "../models/RUMSort";
export declare class RUMApiRequestFactory extends BaseAPIRequestFactory {
    aggregateRUMEvents(body: RUMAggregateRequest, _options?: Configuration): Promise<RequestContext>;
    createRUMApplication(body: RUMApplicationCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteRUMApplication(id: string, _options?: Configuration): Promise<RequestContext>;
    getRUMApplication(id: string, _options?: Configuration): Promise<RequestContext>;
    getRUMApplications(_options?: Configuration): Promise<RequestContext>;
    listRUMEvents(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: RUMSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    searchRUMEvents(body: RUMSearchEventsRequest, _options?: Configuration): Promise<RequestContext>;
    updateRUMApplication(id: string, body: RUMApplicationUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RUMApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateRUMEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateRUMEvents(response: ResponseContext): Promise<RUMAnalyticsAggregateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRUMApplication(response: ResponseContext): Promise<RUMApplicationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRUMApplication(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRUMApplication(response: ResponseContext): Promise<RUMApplicationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRUMApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRUMApplications(response: ResponseContext): Promise<RUMApplicationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRUMEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRUMEvents(response: ResponseContext): Promise<RUMEventsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchRUMEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchRUMEvents(response: ResponseContext): Promise<RUMEventsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRUMApplication(response: ResponseContext): Promise<RUMApplicationResponse>;
}
export interface RUMApiAggregateRUMEventsRequest {
    /**
     * @type RUMAggregateRequest
     */
    body: RUMAggregateRequest;
}
export interface RUMApiCreateRUMApplicationRequest {
    /**
     * @type RUMApplicationCreateRequest
     */
    body: RUMApplicationCreateRequest;
}
export interface RUMApiDeleteRUMApplicationRequest {
    /**
     * RUM application ID.
     * @type string
     */
    id: string;
}
export interface RUMApiGetRUMApplicationRequest {
    /**
     * RUM application ID.
     * @type string
     */
    id: string;
}
export interface RUMApiListRUMEventsRequest {
    /**
     * Search query following RUM syntax.
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
     * @type RUMSort
     */
    sort?: RUMSort;
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
export interface RUMApiSearchRUMEventsRequest {
    /**
     * @type RUMSearchEventsRequest
     */
    body: RUMSearchEventsRequest;
}
export interface RUMApiUpdateRUMApplicationRequest {
    /**
     * RUM application ID.
     * @type string
     */
    id: string;
    /**
     * @type RUMApplicationUpdateRequest
     */
    body: RUMApplicationUpdateRequest;
}
export declare class RUMApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RUMApiRequestFactory, responseProcessor?: RUMApiResponseProcessor);
    /**
     * The API endpoint to aggregate RUM events into buckets of computed metrics and timeseries.
     * @param param The request object
     */
    aggregateRUMEvents(param: RUMApiAggregateRUMEventsRequest, options?: Configuration): Promise<RUMAnalyticsAggregateResponse>;
    /**
     * Create a new RUM application in your organization.
     * @param param The request object
     */
    createRUMApplication(param: RUMApiCreateRUMApplicationRequest, options?: Configuration): Promise<RUMApplicationResponse>;
    /**
     * Delete an existing RUM application in your organization.
     * @param param The request object
     */
    deleteRUMApplication(param: RUMApiDeleteRUMApplicationRequest, options?: Configuration): Promise<void>;
    /**
     * Get the RUM application with given ID in your organization.
     * @param param The request object
     */
    getRUMApplication(param: RUMApiGetRUMApplicationRequest, options?: Configuration): Promise<RUMApplicationResponse>;
    /**
     * List all the RUM applications in your organization.
     * @param param The request object
     */
    getRUMApplications(options?: Configuration): Promise<RUMApplicationsResponse>;
    /**
     * List endpoint returns events that match a RUM search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to see your latest RUM events.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    listRUMEvents(param?: RUMApiListRUMEventsRequest, options?: Configuration): Promise<RUMEventsResponse>;
    /**
     * Provide a paginated version of listRUMEvents returning a generator with all the items.
     */
    listRUMEventsWithPagination(param?: RUMApiListRUMEventsRequest, options?: Configuration): AsyncGenerator<RUMEvent>;
    /**
     * List endpoint returns RUM events that match a RUM search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to build complex RUM events filtering and search.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    searchRUMEvents(param: RUMApiSearchRUMEventsRequest, options?: Configuration): Promise<RUMEventsResponse>;
    /**
     * Provide a paginated version of searchRUMEvents returning a generator with all the items.
     */
    searchRUMEventsWithPagination(param: RUMApiSearchRUMEventsRequest, options?: Configuration): AsyncGenerator<RUMEvent>;
    /**
     * Update the RUM application with given ID in your organization.
     * @param param The request object
     */
    updateRUMApplication(param: RUMApiUpdateRUMApplicationRequest, options?: Configuration): Promise<RUMApplicationResponse>;
}
