import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ReorderRetentionFiltersRequest } from "../models/ReorderRetentionFiltersRequest";
import { RetentionFilterCreateRequest } from "../models/RetentionFilterCreateRequest";
import { RetentionFilterCreateResponse } from "../models/RetentionFilterCreateResponse";
import { RetentionFilterResponse } from "../models/RetentionFilterResponse";
import { RetentionFiltersResponse } from "../models/RetentionFiltersResponse";
import { RetentionFilterUpdateRequest } from "../models/RetentionFilterUpdateRequest";
export declare class APMRetentionFiltersApiRequestFactory extends BaseAPIRequestFactory {
    createApmRetentionFilter(body: RetentionFilterCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteApmRetentionFilter(filterId: string, _options?: Configuration): Promise<RequestContext>;
    getApmRetentionFilter(filterId: string, _options?: Configuration): Promise<RequestContext>;
    listApmRetentionFilters(_options?: Configuration): Promise<RequestContext>;
    reorderApmRetentionFilters(body: ReorderRetentionFiltersRequest, _options?: Configuration): Promise<RequestContext>;
    updateApmRetentionFilter(filterId: string, body: RetentionFilterUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class APMRetentionFiltersApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApmRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApmRetentionFilter(response: ResponseContext): Promise<RetentionFilterCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApmRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApmRetentionFilter(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApmRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApmRetentionFilter(response: ResponseContext): Promise<RetentionFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApmRetentionFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApmRetentionFilters(response: ResponseContext): Promise<RetentionFiltersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reorderApmRetentionFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    reorderApmRetentionFilters(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApmRetentionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApmRetentionFilter(response: ResponseContext): Promise<RetentionFilterResponse>;
}
export interface APMRetentionFiltersApiCreateApmRetentionFilterRequest {
    /**
     * The definition of the new retention filter.
     * @type RetentionFilterCreateRequest
     */
    body: RetentionFilterCreateRequest;
}
export interface APMRetentionFiltersApiDeleteApmRetentionFilterRequest {
    /**
     * The ID of the retention filter.
     * @type string
     */
    filterId: string;
}
export interface APMRetentionFiltersApiGetApmRetentionFilterRequest {
    /**
     * The ID of the retention filter.
     * @type string
     */
    filterId: string;
}
export interface APMRetentionFiltersApiReorderApmRetentionFiltersRequest {
    /**
     * The list of retention filters in the new order.
     * @type ReorderRetentionFiltersRequest
     */
    body: ReorderRetentionFiltersRequest;
}
export interface APMRetentionFiltersApiUpdateApmRetentionFilterRequest {
    /**
     * The ID of the retention filter.
     * @type string
     */
    filterId: string;
    /**
     * The updated definition of the retention filter.
     * @type RetentionFilterUpdateRequest
     */
    body: RetentionFilterUpdateRequest;
}
export declare class APMRetentionFiltersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: APMRetentionFiltersApiRequestFactory, responseProcessor?: APMRetentionFiltersApiResponseProcessor);
    /**
     * Create a retention filter to index spans in your organization.
     * Returns the retention filter definition when the request is successful.
     *
     * Default filters with types spans-errors-sampling-processor and spans-appsec-sampling-processor cannot be created.
     * @param param The request object
     */
    createApmRetentionFilter(param: APMRetentionFiltersApiCreateApmRetentionFilterRequest, options?: Configuration): Promise<RetentionFilterCreateResponse>;
    /**
     * Delete a specific retention filter from your organization.
     *
     * Default filters with types spans-errors-sampling-processor and spans-appsec-sampling-processor cannot be deleted.
     * @param param The request object
     */
    deleteApmRetentionFilter(param: APMRetentionFiltersApiDeleteApmRetentionFilterRequest, options?: Configuration): Promise<void>;
    /**
     * Get an APM retention filter.
     * @param param The request object
     */
    getApmRetentionFilter(param: APMRetentionFiltersApiGetApmRetentionFilterRequest, options?: Configuration): Promise<RetentionFilterResponse>;
    /**
     * Get the list of APM retention filters.
     * @param param The request object
     */
    listApmRetentionFilters(options?: Configuration): Promise<RetentionFiltersResponse>;
    /**
     * Re-order the execution order of retention filters.
     * @param param The request object
     */
    reorderApmRetentionFilters(param: APMRetentionFiltersApiReorderApmRetentionFiltersRequest, options?: Configuration): Promise<void>;
    /**
     * Update a retention filter from your organization.
     *
     * Default filters (filters with types spans-errors-sampling-processor and spans-appsec-sampling-processor) cannot be renamed or removed.
     * @param param The request object
     */
    updateApmRetentionFilter(param: APMRetentionFiltersApiUpdateApmRetentionFilterRequest, options?: Configuration): Promise<RetentionFilterResponse>;
}
