import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CancelDowntimesByScopeRequest } from "../models/CancelDowntimesByScopeRequest";
import { CanceledDowntimesIds } from "../models/CanceledDowntimesIds";
import { Downtime } from "../models/Downtime";
export declare class DowntimesApiRequestFactory extends BaseAPIRequestFactory {
    cancelDowntime(downtimeId: number, _options?: Configuration): Promise<RequestContext>;
    cancelDowntimesByScope(body: CancelDowntimesByScopeRequest, _options?: Configuration): Promise<RequestContext>;
    createDowntime(body: Downtime, _options?: Configuration): Promise<RequestContext>;
    getDowntime(downtimeId: number, _options?: Configuration): Promise<RequestContext>;
    listDowntimes(currentOnly?: boolean, withCreator?: boolean, _options?: Configuration): Promise<RequestContext>;
    listMonitorDowntimes(monitorId: number, _options?: Configuration): Promise<RequestContext>;
    updateDowntime(downtimeId: number, body: Downtime, _options?: Configuration): Promise<RequestContext>;
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
     * @params response Response returned by the server for a request to cancelDowntimesByScope
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelDowntimesByScope(response: ResponseContext): Promise<CanceledDowntimesIds>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDowntime(response: ResponseContext): Promise<Downtime>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDowntime(response: ResponseContext): Promise<Downtime>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDowntimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDowntimes(response: ResponseContext): Promise<Array<Downtime>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMonitorDowntimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMonitorDowntimes(response: ResponseContext): Promise<Array<Downtime>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDowntime(response: ResponseContext): Promise<Downtime>;
}
export interface DowntimesApiCancelDowntimeRequest {
    /**
     * ID of the downtime to cancel.
     * @type number
     */
    downtimeId: number;
}
export interface DowntimesApiCancelDowntimesByScopeRequest {
    /**
     * Scope to cancel downtimes for.
     * @type CancelDowntimesByScopeRequest
     */
    body: CancelDowntimesByScopeRequest;
}
export interface DowntimesApiCreateDowntimeRequest {
    /**
     * Schedule a downtime request body.
     * @type Downtime
     */
    body: Downtime;
}
export interface DowntimesApiGetDowntimeRequest {
    /**
     * ID of the downtime to fetch.
     * @type number
     */
    downtimeId: number;
}
export interface DowntimesApiListDowntimesRequest {
    /**
     * Only return downtimes that are active when the request is made.
     * @type boolean
     */
    currentOnly?: boolean;
    /**
     * Return creator information.
     * @type boolean
     */
    withCreator?: boolean;
}
export interface DowntimesApiListMonitorDowntimesRequest {
    /**
     * The id of the monitor
     * @type number
     */
    monitorId: number;
}
export interface DowntimesApiUpdateDowntimeRequest {
    /**
     * ID of the downtime to update.
     * @type number
     */
    downtimeId: number;
    /**
     * Update a downtime request body.
     * @type Downtime
     */
    body: Downtime;
}
export declare class DowntimesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DowntimesApiRequestFactory, responseProcessor?: DowntimesApiResponseProcessor);
    /**
     * Cancel a downtime. **Note:** This endpoint has been deprecated. Please use v2 endpoints.
     * @param param The request object
     */
    cancelDowntime(param: DowntimesApiCancelDowntimeRequest, options?: Configuration): Promise<void>;
    /**
     * Delete all downtimes that match the scope of `X`. **Note:** This only interacts with Downtimes created using v1 endpoints. This endpoint has been deprecated and will not be replaced. Please use v2 endpoints to find and cancel downtimes.
     * @param param The request object
     */
    cancelDowntimesByScope(param: DowntimesApiCancelDowntimesByScopeRequest, options?: Configuration): Promise<CanceledDowntimesIds>;
    /**
     * Schedule a downtime. **Note:** This endpoint has been deprecated. Please use v2 endpoints.
     * @param param The request object
     */
    createDowntime(param: DowntimesApiCreateDowntimeRequest, options?: Configuration): Promise<Downtime>;
    /**
     * Get downtime detail by `downtime_id`. **Note:** This endpoint has been deprecated. Please use v2 endpoints.
     * @param param The request object
     */
    getDowntime(param: DowntimesApiGetDowntimeRequest, options?: Configuration): Promise<Downtime>;
    /**
     * Get all scheduled downtimes. **Note:** This endpoint has been deprecated. Please use v2 endpoints.
     * @param param The request object
     */
    listDowntimes(param?: DowntimesApiListDowntimesRequest, options?: Configuration): Promise<Array<Downtime>>;
    /**
     * Get all active v1 downtimes for the specified monitor. **Note:** This endpoint has been deprecated. Please use v2 endpoints.
     * @param param The request object
     */
    listMonitorDowntimes(param: DowntimesApiListMonitorDowntimesRequest, options?: Configuration): Promise<Array<Downtime>>;
    /**
     * Update a single downtime by `downtime_id`. **Note:** This endpoint has been deprecated. Please use v2 endpoints.
     * @param param The request object
     */
    updateDowntime(param: DowntimesApiUpdateDowntimeRequest, options?: Configuration): Promise<Downtime>;
}
