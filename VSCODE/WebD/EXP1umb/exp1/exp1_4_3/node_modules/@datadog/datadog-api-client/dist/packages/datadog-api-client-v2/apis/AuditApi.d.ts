import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AuditLogsEvent } from "../models/AuditLogsEvent";
import { AuditLogsEventsResponse } from "../models/AuditLogsEventsResponse";
import { AuditLogsSearchEventsRequest } from "../models/AuditLogsSearchEventsRequest";
import { AuditLogsSort } from "../models/AuditLogsSort";
export declare class AuditApiRequestFactory extends BaseAPIRequestFactory {
    listAuditLogs(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: AuditLogsSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    searchAuditLogs(body?: AuditLogsSearchEventsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuditApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAuditLogs(response: ResponseContext): Promise<AuditLogsEventsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchAuditLogs(response: ResponseContext): Promise<AuditLogsEventsResponse>;
}
export interface AuditApiListAuditLogsRequest {
    /**
     * Search query following Audit Logs syntax.
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
     * @type AuditLogsSort
     */
    sort?: AuditLogsSort;
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
export interface AuditApiSearchAuditLogsRequest {
    /**
     * @type AuditLogsSearchEventsRequest
     */
    body?: AuditLogsSearchEventsRequest;
}
export declare class AuditApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuditApiRequestFactory, responseProcessor?: AuditApiResponseProcessor);
    /**
     * List endpoint returns events that match a Audit Logs search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to see your latest Audit Logs events.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    listAuditLogs(param?: AuditApiListAuditLogsRequest, options?: Configuration): Promise<AuditLogsEventsResponse>;
    /**
     * Provide a paginated version of listAuditLogs returning a generator with all the items.
     */
    listAuditLogsWithPagination(param?: AuditApiListAuditLogsRequest, options?: Configuration): AsyncGenerator<AuditLogsEvent>;
    /**
     * List endpoint returns Audit Logs events that match an Audit search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to build complex Audit Logs events filtering and search.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    searchAuditLogs(param?: AuditApiSearchAuditLogsRequest, options?: Configuration): Promise<AuditLogsEventsResponse>;
    /**
     * Provide a paginated version of searchAuditLogs returning a generator with all the items.
     */
    searchAuditLogsWithPagination(param?: AuditApiSearchAuditLogsRequest, options?: Configuration): AsyncGenerator<AuditLogsEvent>;
}
