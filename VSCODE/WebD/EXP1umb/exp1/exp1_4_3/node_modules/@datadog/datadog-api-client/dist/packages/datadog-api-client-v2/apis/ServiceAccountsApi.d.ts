import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ApplicationKeyCreateRequest } from "../models/ApplicationKeyCreateRequest";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
import { ApplicationKeysSort } from "../models/ApplicationKeysSort";
import { ApplicationKeyUpdateRequest } from "../models/ApplicationKeyUpdateRequest";
import { ListApplicationKeysResponse } from "../models/ListApplicationKeysResponse";
import { PartialApplicationKeyResponse } from "../models/PartialApplicationKeyResponse";
import { ServiceAccountCreateRequest } from "../models/ServiceAccountCreateRequest";
import { UserResponse } from "../models/UserResponse";
export declare class ServiceAccountsApiRequestFactory extends BaseAPIRequestFactory {
    createServiceAccount(body: ServiceAccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createServiceAccountApplicationKey(serviceAccountId: string, body: ApplicationKeyCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteServiceAccountApplicationKey(serviceAccountId: string, appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    getServiceAccountApplicationKey(serviceAccountId: string, appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    listServiceAccountApplicationKeys(serviceAccountId: string, pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, _options?: Configuration): Promise<RequestContext>;
    updateServiceAccountApplicationKey(serviceAccountId: string, appKeyId: string, body: ApplicationKeyUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceAccountsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createServiceAccount(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createServiceAccountApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteServiceAccountApplicationKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getServiceAccountApplicationKey(response: ResponseContext): Promise<PartialApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceAccountApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceAccountApplicationKeys(response: ResponseContext): Promise<ListApplicationKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateServiceAccountApplicationKey(response: ResponseContext): Promise<PartialApplicationKeyResponse>;
}
export interface ServiceAccountsApiCreateServiceAccountRequest {
    /**
     * @type ServiceAccountCreateRequest
     */
    body: ServiceAccountCreateRequest;
}
export interface ServiceAccountsApiCreateServiceAccountApplicationKeyRequest {
    /**
     * The ID of the service account.
     * @type string
     */
    serviceAccountId: string;
    /**
     * @type ApplicationKeyCreateRequest
     */
    body: ApplicationKeyCreateRequest;
}
export interface ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest {
    /**
     * The ID of the service account.
     * @type string
     */
    serviceAccountId: string;
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
}
export interface ServiceAccountsApiGetServiceAccountApplicationKeyRequest {
    /**
     * The ID of the service account.
     * @type string
     */
    serviceAccountId: string;
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
}
export interface ServiceAccountsApiListServiceAccountApplicationKeysRequest {
    /**
     * The ID of the service account.
     * @type string
     */
    serviceAccountId: string;
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     */
    pageNumber?: number;
    /**
     * Application key attribute used to sort results. Sort order is ascending
     * by default. In order to specify a descending sort, prefix the
     * attribute with a minus sign.
     * @type ApplicationKeysSort
     */
    sort?: ApplicationKeysSort;
    /**
     * Filter application keys by the specified string.
     * @type string
     */
    filter?: string;
    /**
     * Only include application keys created on or after the specified date.
     * @type string
     */
    filterCreatedAtStart?: string;
    /**
     * Only include application keys created on or before the specified date.
     * @type string
     */
    filterCreatedAtEnd?: string;
}
export interface ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest {
    /**
     * The ID of the service account.
     * @type string
     */
    serviceAccountId: string;
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
    /**
     * @type ApplicationKeyUpdateRequest
     */
    body: ApplicationKeyUpdateRequest;
}
export declare class ServiceAccountsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceAccountsApiRequestFactory, responseProcessor?: ServiceAccountsApiResponseProcessor);
    /**
     * Create a service account for your organization.
     * @param param The request object
     */
    createServiceAccount(param: ServiceAccountsApiCreateServiceAccountRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Create an application key for this service account.
     * @param param The request object
     */
    createServiceAccountApplicationKey(param: ServiceAccountsApiCreateServiceAccountApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Delete an application key owned by this service account.
     * @param param The request object
     */
    deleteServiceAccountApplicationKey(param: ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Get an application key owned by this service account.
     * @param param The request object
     */
    getServiceAccountApplicationKey(param: ServiceAccountsApiGetServiceAccountApplicationKeyRequest, options?: Configuration): Promise<PartialApplicationKeyResponse>;
    /**
     * List all application keys available for this service account.
     * @param param The request object
     */
    listServiceAccountApplicationKeys(param: ServiceAccountsApiListServiceAccountApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse>;
    /**
     * Edit an application key owned by this service account.
     * @param param The request object
     */
    updateServiceAccountApplicationKey(param: ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest, options?: Configuration): Promise<PartialApplicationKeyResponse>;
}
