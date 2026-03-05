import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { LogsIndex } from "../models/LogsIndex";
import { LogsIndexesOrder } from "../models/LogsIndexesOrder";
import { LogsIndexListResponse } from "../models/LogsIndexListResponse";
import { LogsIndexUpdateRequest } from "../models/LogsIndexUpdateRequest";
export declare class LogsIndexesApiRequestFactory extends BaseAPIRequestFactory {
    createLogsIndex(body: LogsIndex, _options?: Configuration): Promise<RequestContext>;
    deleteLogsIndex(name: string, _options?: Configuration): Promise<RequestContext>;
    getLogsIndex(name: string, _options?: Configuration): Promise<RequestContext>;
    getLogsIndexOrder(_options?: Configuration): Promise<RequestContext>;
    listLogIndexes(_options?: Configuration): Promise<RequestContext>;
    updateLogsIndex(name: string, body: LogsIndexUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateLogsIndexOrder(body: LogsIndexesOrder, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsIndexesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsIndex(response: ResponseContext): Promise<LogsIndex>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsIndex(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsIndex(response: ResponseContext): Promise<LogsIndex>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsIndexOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsIndexOrder(response: ResponseContext): Promise<LogsIndexesOrder>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogIndexes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogIndexes(response: ResponseContext): Promise<LogsIndexListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsIndex(response: ResponseContext): Promise<LogsIndex>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsIndexOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsIndexOrder(response: ResponseContext): Promise<LogsIndexesOrder>;
}
export interface LogsIndexesApiCreateLogsIndexRequest {
    /**
     * Object containing the new index.
     * @type LogsIndex
     */
    body: LogsIndex;
}
export interface LogsIndexesApiDeleteLogsIndexRequest {
    /**
     * Name of the log index.
     * @type string
     */
    name: string;
}
export interface LogsIndexesApiGetLogsIndexRequest {
    /**
     * Name of the log index.
     * @type string
     */
    name: string;
}
export interface LogsIndexesApiUpdateLogsIndexRequest {
    /**
     * Name of the log index.
     * @type string
     */
    name: string;
    /**
     * Object containing the new `LogsIndexUpdateRequest`.
     * @type LogsIndexUpdateRequest
     */
    body: LogsIndexUpdateRequest;
}
export interface LogsIndexesApiUpdateLogsIndexOrderRequest {
    /**
     * Object containing the new ordered list of index names
     * @type LogsIndexesOrder
     */
    body: LogsIndexesOrder;
}
export declare class LogsIndexesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsIndexesApiRequestFactory, responseProcessor?: LogsIndexesApiResponseProcessor);
    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * @param param The request object
     */
    createLogsIndex(param: LogsIndexesApiCreateLogsIndexRequest, options?: Configuration): Promise<LogsIndex>;
    /**
     * Delete an existing index from your organization. Index deletions are permanent and cannot be reverted.
     * You cannot recreate an index with the same name as deleted ones.
     * @param param The request object
     */
    deleteLogsIndex(param: LogsIndexesApiDeleteLogsIndexRequest, options?: Configuration): Promise<void>;
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * @param param The request object
     */
    getLogsIndex(param: LogsIndexesApiGetLogsIndexRequest, options?: Configuration): Promise<LogsIndex>;
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * @param param The request object
     */
    getLogsIndexOrder(options?: Configuration): Promise<LogsIndexesOrder>;
    /**
     * The Index object describes the configuration of a log index.
     * This endpoint returns an array of the `LogIndex` objects of your organization.
     * @param param The request object
     */
    listLogIndexes(options?: Configuration): Promise<LogsIndexListResponse>;
    /**
     * Update an index as identified by its name.
     * Returns the Index object passed in the request body when the request is successful.
     *
     * Using the `PUT` method updates your index’s configuration by **replacing**
     * your current configuration with the new one sent to your Datadog organization.
     * @param param The request object
     */
    updateLogsIndex(param: LogsIndexesApiUpdateLogsIndexRequest, options?: Configuration): Promise<LogsIndex>;
    /**
     * This endpoint updates the index order of your organization.
     * It returns the index order object passed in the request body when the request is successful.
     * @param param The request object
     */
    updateLogsIndexOrder(param: LogsIndexesApiUpdateLogsIndexOrderRequest, options?: Configuration): Promise<LogsIndexesOrder>;
}
