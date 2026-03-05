import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { RumRetentionFilterCreateRequest } from "../models/RumRetentionFilterCreateRequest";
import { RumRetentionFilterResponse } from "../models/RumRetentionFilterResponse";
import { RumRetentionFiltersOrderRequest } from "../models/RumRetentionFiltersOrderRequest";
import { RumRetentionFiltersOrderResponse } from "../models/RumRetentionFiltersOrderResponse";
import { RumRetentionFiltersResponse } from "../models/RumRetentionFiltersResponse";
import { RumRetentionFilterUpdateRequest } from "../models/RumRetentionFilterUpdateRequest";
export declare class RumRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {
    createRetentionFilter(appId: string, body: RumRetentionFilterCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteRetentionFilter(appId: string, rfId: string, _options?: Configuration): Promise<RequestContext>;
    getRetentionFilter(appId: string, rfId: string, _options?: Configuration): Promise<RequestContext>;
    listRetentionFilters(appId: string, _options?: Configuration): Promise<RequestContext>;
    orderRetentionFilters(appId: string, body: RumRetentionFiltersOrderRequest, _options?: Configuration): Promise<RequestContext>;
    updateRetentionFilter(appId: string, rfId: string, body: RumRetentionFilterUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumRetentionFiltersApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRetentionFilter(response: ResponseContext): Promise<RumRetentionFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRetentionFilter(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRetentionFilter(response: ResponseContext): Promise<RumRetentionFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRetentionFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRetentionFilters(response: ResponseContext): Promise<RumRetentionFiltersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderRetentionFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    orderRetentionFilters(response: ResponseContext): Promise<RumRetentionFiltersOrderResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRetentionFilter(response: ResponseContext): Promise<RumRetentionFilterResponse>;
}
export interface RumRetentionFiltersApiCreateRetentionFilterRequest {
    /**
     * RUM application ID.
     * @type string
     */
    appId: string;
    /**
     * The definition of the new RUM retention filter.
     * @type RumRetentionFilterCreateRequest
     */
    body: RumRetentionFilterCreateRequest;
}
export interface RumRetentionFiltersApiDeleteRetentionFilterRequest {
    /**
     * RUM application ID.
     * @type string
     */
    appId: string;
    /**
     * Retention filter ID.
     * @type string
     */
    rfId: string;
}
export interface RumRetentionFiltersApiGetRetentionFilterRequest {
    /**
     * RUM application ID.
     * @type string
     */
    appId: string;
    /**
     * Retention filter ID.
     * @type string
     */
    rfId: string;
}
export interface RumRetentionFiltersApiListRetentionFiltersRequest {
    /**
     * RUM application ID.
     * @type string
     */
    appId: string;
}
export interface RumRetentionFiltersApiOrderRetentionFiltersRequest {
    /**
     * RUM application ID.
     * @type string
     */
    appId: string;
    /**
     * New definition of the RUM retention filter.
     * @type RumRetentionFiltersOrderRequest
     */
    body: RumRetentionFiltersOrderRequest;
}
export interface RumRetentionFiltersApiUpdateRetentionFilterRequest {
    /**
     * RUM application ID.
     * @type string
     */
    appId: string;
    /**
     * Retention filter ID.
     * @type string
     */
    rfId: string;
    /**
     * New definition of the RUM retention filter.
     * @type RumRetentionFilterUpdateRequest
     */
    body: RumRetentionFilterUpdateRequest;
}
export declare class RumRetentionFiltersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumRetentionFiltersApiRequestFactory, responseProcessor?: RumRetentionFiltersApiResponseProcessor);
    /**
     * Create a RUM retention filter for a RUM application.
     * Returns RUM retention filter objects from the request body when the request is successful.
     * @param param The request object
     */
    createRetentionFilter(param: RumRetentionFiltersApiCreateRetentionFilterRequest, options?: Configuration): Promise<RumRetentionFilterResponse>;
    /**
     * Delete a RUM retention filter for a RUM application.
     * @param param The request object
     */
    deleteRetentionFilter(param: RumRetentionFiltersApiDeleteRetentionFilterRequest, options?: Configuration): Promise<void>;
    /**
     * Get a RUM retention filter for a RUM application.
     * @param param The request object
     */
    getRetentionFilter(param: RumRetentionFiltersApiGetRetentionFilterRequest, options?: Configuration): Promise<RumRetentionFilterResponse>;
    /**
     * Get the list of RUM retention filters for a RUM application.
     * @param param The request object
     */
    listRetentionFilters(param: RumRetentionFiltersApiListRetentionFiltersRequest, options?: Configuration): Promise<RumRetentionFiltersResponse>;
    /**
     * Order RUM retention filters for a RUM application.
     * Returns RUM retention filter objects without attributes from the request body when the request is successful.
     * @param param The request object
     */
    orderRetentionFilters(param: RumRetentionFiltersApiOrderRetentionFiltersRequest, options?: Configuration): Promise<RumRetentionFiltersOrderResponse>;
    /**
     * Update a RUM retention filter for a RUM application.
     * Returns RUM retention filter objects from the request body when the request is successful.
     * @param param The request object
     */
    updateRetentionFilter(param: RumRetentionFiltersApiUpdateRetentionFilterRequest, options?: Configuration): Promise<RumRetentionFilterResponse>;
}
