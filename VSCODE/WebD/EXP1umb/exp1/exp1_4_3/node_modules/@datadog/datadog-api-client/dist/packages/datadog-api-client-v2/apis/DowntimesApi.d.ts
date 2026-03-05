import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { DowntimeCreateRequest } from "../models/DowntimeCreateRequest";
import { DowntimeResponse } from "../models/DowntimeResponse";
import { DowntimeResponseData } from "../models/DowntimeResponseData";
import { DowntimeUpdateRequest } from "../models/DowntimeUpdateRequest";
import { ListDowntimesResponse } from "../models/ListDowntimesResponse";
import { MonitorDowntimeMatchResponse } from "../models/MonitorDowntimeMatchResponse";
import { MonitorDowntimeMatchResponseData } from "../models/MonitorDowntimeMatchResponseData";
export declare class DowntimesApiRequestFactory extends BaseAPIRequestFactory {
    cancelDowntime(downtimeId: string, _options?: Configuration): Promise<RequestContext>;
    createDowntime(body: DowntimeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    getDowntime(downtimeId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    listDowntimes(currentOnly?: boolean, include?: string, pageOffset?: number, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    listMonitorDowntimes(monitorId: number, pageOffset?: number, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    updateDowntime(downtimeId: string, body: DowntimeUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DowntimesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelDowntime(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDowntime(response: ResponseContext): Promise<DowntimeResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDowntime(response: ResponseContext): Promise<DowntimeResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDowntimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDowntimes(response: ResponseContext): Promise<ListDowntimesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMonitorDowntimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMonitorDowntimes(response: ResponseContext): Promise<MonitorDowntimeMatchResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDowntime(response: ResponseContext): Promise<DowntimeResponse>;
}
export interface DowntimesApiCancelDowntimeRequest {
    /**
     * ID of the downtime to cancel.
     * @type string
     */
    downtimeId: string;
}
export interface DowntimesApiCreateDowntimeRequest {
    /**
     * Schedule a downtime request body.
     * @type DowntimeCreateRequest
     */
    body: DowntimeCreateRequest;
}
export interface DowntimesApiGetDowntimeRequest {
    /**
     * ID of the downtime to fetch.
     * @type string
     */
    downtimeId: string;
    /**
     * Comma-separated list of resource paths for related resources to include in the response. Supported resource
     * paths are `created_by` and `monitor`.
     * @type string
     */
    include?: string;
}
export interface DowntimesApiListDowntimesRequest {
    /**
     * Only return downtimes that are active when the request is made.
     * @type boolean
     */
    currentOnly?: boolean;
    /**
     * Comma-separated list of resource paths for related resources to include in the response. Supported resource
     * paths are `created_by` and `monitor`.
     * @type string
     */
    include?: string;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Maximum number of downtimes in the response.
     * @type number
     */
    pageLimit?: number;
}
export interface DowntimesApiListMonitorDowntimesRequest {
    /**
     * The id of the monitor.
     * @type number
     */
    monitorId: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Maximum number of downtimes in the response.
     * @type number
     */
    pageLimit?: number;
}
export interface DowntimesApiUpdateDowntimeRequest {
    /**
     * ID of the downtime to update.
     * @type string
     */
    downtimeId: string;
    /**
     * Update a downtime request body.
     * @type DowntimeUpdateRequest
     */
    body: DowntimeUpdateRequest;
}
export declare class DowntimesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DowntimesApiRequestFactory, responseProcessor?: DowntimesApiResponseProcessor);
    /**
     * Cancel a downtime.
     *
     * **Note**: Downtimes canceled through the API are no longer active, but are retained for approximately two days before being permanently removed. The downtime may still appear in search results until it is permanently removed.
     * @param param The request object
     */
    cancelDowntime(param: DowntimesApiCancelDowntimeRequest, options?: Configuration): Promise<void>;
    /**
     * Schedule a downtime.
     * @param param The request object
     */
    createDowntime(param: DowntimesApiCreateDowntimeRequest, options?: Configuration): Promise<DowntimeResponse>;
    /**
     * Get downtime detail by `downtime_id`.
     * @param param The request object
     */
    getDowntime(param: DowntimesApiGetDowntimeRequest, options?: Configuration): Promise<DowntimeResponse>;
    /**
     * Get all scheduled downtimes.
     * @param param The request object
     */
    listDowntimes(param?: DowntimesApiListDowntimesRequest, options?: Configuration): Promise<ListDowntimesResponse>;
    /**
     * Provide a paginated version of listDowntimes returning a generator with all the items.
     */
    listDowntimesWithPagination(param?: DowntimesApiListDowntimesRequest, options?: Configuration): AsyncGenerator<DowntimeResponseData>;
    /**
     * Get all active downtimes for the specified monitor.
     * @param param The request object
     */
    listMonitorDowntimes(param: DowntimesApiListMonitorDowntimesRequest, options?: Configuration): Promise<MonitorDowntimeMatchResponse>;
    /**
     * Provide a paginated version of listMonitorDowntimes returning a generator with all the items.
     */
    listMonitorDowntimesWithPagination(param: DowntimesApiListMonitorDowntimesRequest, options?: Configuration): AsyncGenerator<MonitorDowntimeMatchResponseData>;
    /**
     * Update a downtime by `downtime_id`.
     * @param param The request object
     */
    updateDowntime(param: DowntimesApiUpdateDowntimeRequest, options?: Configuration): Promise<DowntimeResponse>;
}
