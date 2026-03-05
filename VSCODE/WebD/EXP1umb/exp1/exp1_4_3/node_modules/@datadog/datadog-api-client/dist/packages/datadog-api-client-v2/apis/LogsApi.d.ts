import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ContentEncoding } from "../models/ContentEncoding";
import { HTTPLogItem } from "../models/HTTPLogItem";
import { Log } from "../models/Log";
import { LogsAggregateRequest } from "../models/LogsAggregateRequest";
import { LogsAggregateResponse } from "../models/LogsAggregateResponse";
import { LogsListRequest } from "../models/LogsListRequest";
import { LogsListResponse } from "../models/LogsListResponse";
import { LogsSort } from "../models/LogsSort";
import { LogsStorageTier } from "../models/LogsStorageTier";
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    aggregateLogs(body: LogsAggregateRequest, _options?: Configuration): Promise<RequestContext>;
    listLogs(body?: LogsListRequest, _options?: Configuration): Promise<RequestContext>;
    listLogsGet(filterQuery?: string, filterIndexes?: Array<string>, filterFrom?: Date, filterTo?: Date, filterStorageTier?: LogsStorageTier, sort?: LogsSort, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    submitLog(body: Array<HTTPLogItem>, contentEncoding?: ContentEncoding, ddtags?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateLogs(response: ResponseContext): Promise<LogsAggregateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogs(response: ResponseContext): Promise<LogsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsGet(response: ResponseContext): Promise<LogsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitLog
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitLog(response: ResponseContext): Promise<any>;
}
export interface LogsApiAggregateLogsRequest {
    /**
     * @type LogsAggregateRequest
     */
    body: LogsAggregateRequest;
}
export interface LogsApiListLogsRequest {
    /**
     * @type LogsListRequest
     */
    body?: LogsListRequest;
}
export interface LogsApiListLogsGetRequest {
    /**
     * Search query following logs syntax.
     * @type string
     */
    filterQuery?: string;
    /**
     * For customers with multiple indexes, the indexes to search.
     * Defaults to '*' which means all indexes
     * @type Array<string>
     */
    filterIndexes?: Array<string>;
    /**
     * Minimum timestamp for requested logs.
     * @type Date
     */
    filterFrom?: Date;
    /**
     * Maximum timestamp for requested logs.
     * @type Date
     */
    filterTo?: Date;
    /**
     * Specifies the storage type to be used
     * @type LogsStorageTier
     */
    filterStorageTier?: LogsStorageTier;
    /**
     * Order of logs in results.
     * @type LogsSort
     */
    sort?: LogsSort;
    /**
     * List following results with a cursor provided in the previous query.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of logs in the response.
     * @type number
     */
    pageLimit?: number;
}
export interface LogsApiSubmitLogRequest {
    /**
     * Log to send (JSON format).
     * @type Array<HTTPLogItem>
     */
    body: Array<HTTPLogItem>;
    /**
     * HTTP header used to compress the media-type.
     * @type ContentEncoding
     */
    contentEncoding?: ContentEncoding;
    /**
     * Log tags can be passed as query parameters with `text/plain` content type.
     * @type string
     */
    ddtags?: string;
}
export declare class LogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * @param param The request object
     */
    aggregateLogs(param: LogsApiAggregateLogsRequest, options?: Configuration): Promise<LogsAggregateResponse>;
    /**
     * List endpoint returns logs that match a log search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to search and filter your logs.
     *
     * **If you are considering archiving logs for your organization,
     * consider use of the Datadog archive capabilities instead of the log list API.
     * See [Datadog Logs Archive documentation][2].**
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination
     * [2]: https://docs.datadoghq.com/logs/archives
     * @param param The request object
     */
    listLogs(param?: LogsApiListLogsRequest, options?: Configuration): Promise<LogsListResponse>;
    /**
     * Provide a paginated version of listLogs returning a generator with all the items.
     */
    listLogsWithPagination(param?: LogsApiListLogsRequest, options?: Configuration): AsyncGenerator<Log>;
    /**
     * List endpoint returns logs that match a log search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to search and filter your logs.
     *
     * **If you are considering archiving logs for your organization,
     * consider use of the Datadog archive capabilities instead of the log list API.
     * See [Datadog Logs Archive documentation][2].**
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination
     * [2]: https://docs.datadoghq.com/logs/archives
     * @param param The request object
     */
    listLogsGet(param?: LogsApiListLogsGetRequest, options?: Configuration): Promise<LogsListResponse>;
    /**
     * Provide a paginated version of listLogsGet returning a generator with all the items.
     */
    listLogsGetWithPagination(param?: LogsApiListLogsGetRequest, options?: Configuration): AsyncGenerator<Log>;
    /**
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:
     *
     * - Maximum content size per payload (uncompressed): 5MB
     * - Maximum size for a single log: 1MB
     * - Maximum array size if sending multiple logs in an array: 1000 entries
     *
     * Any log exceeding 1MB is accepted and truncated by Datadog:
     * - For a single log request, the API truncates the log at 1MB and returns a 2xx.
     * - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.
     *
     * Datadog recommends sending your logs compressed.
     * Add the `Content-Encoding: gzip` header to the request when sending compressed logs.
     * Log events can be submitted with a timestamp that is up to 18 hours in the past.
     *
     * The status codes answered by the HTTP API are:
     * - 202: Accepted: the request has been accepted for processing
     * - 400: Bad request (likely an issue in the payload formatting)
     * - 401: Unauthorized (likely a missing API Key)
     * - 403: Permission issue (likely using an invalid API Key)
     * - 408: Request Timeout, request should be retried after some time
     * - 413: Payload too large (batch is above 5MB uncompressed)
     * - 429: Too Many Requests, request should be retried after some time
     * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
     * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
     * @param param The request object
     */
    submitLog(param: LogsApiSubmitLogRequest, options?: Configuration): Promise<any>;
}
