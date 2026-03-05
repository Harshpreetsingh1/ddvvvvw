import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { APIKeyCreateRequest } from "../models/APIKeyCreateRequest";
import { APIKeyResponse } from "../models/APIKeyResponse";
import { APIKeysResponse } from "../models/APIKeysResponse";
import { APIKeysSort } from "../models/APIKeysSort";
import { APIKeyUpdateRequest } from "../models/APIKeyUpdateRequest";
import { ApplicationKeyCreateRequest } from "../models/ApplicationKeyCreateRequest";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
import { ApplicationKeysSort } from "../models/ApplicationKeysSort";
import { ApplicationKeyUpdateRequest } from "../models/ApplicationKeyUpdateRequest";
import { ListApplicationKeysResponse } from "../models/ListApplicationKeysResponse";
export declare class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {
    createAPIKey(body: APIKeyCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createCurrentUserApplicationKey(body: ApplicationKeyCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAPIKey(apiKeyId: string, _options?: Configuration): Promise<RequestContext>;
    deleteApplicationKey(appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    deleteCurrentUserApplicationKey(appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    getAPIKey(apiKeyId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getApplicationKey(appKeyId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getCurrentUserApplicationKey(appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    listAPIKeys(pageSize?: number, pageNumber?: number, sort?: APIKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, filterModifiedAtStart?: string, filterModifiedAtEnd?: string, include?: string, filterRemoteConfigReadEnabled?: boolean, filterCategory?: string, _options?: Configuration): Promise<RequestContext>;
    listApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    listCurrentUserApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateAPIKey(apiKeyId: string, body: APIKeyUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateCurrentUserApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class KeyManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAPIKey(response: ResponseContext): Promise<APIKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCurrentUserApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAPIKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCurrentUserApplicationKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIKey(response: ResponseContext): Promise<APIKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCurrentUserApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIKeys(response: ResponseContext): Promise<APIKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationKeys(response: ResponseContext): Promise<ListApplicationKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCurrentUserApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCurrentUserApplicationKeys(response: ResponseContext): Promise<ListApplicationKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPIKey(response: ResponseContext): Promise<APIKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCurrentUserApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
}
export interface KeyManagementApiCreateAPIKeyRequest {
    /**
     * @type APIKeyCreateRequest
     */
    body: APIKeyCreateRequest;
}
export interface KeyManagementApiCreateCurrentUserApplicationKeyRequest {
    /**
     * @type ApplicationKeyCreateRequest
     */
    body: ApplicationKeyCreateRequest;
}
export interface KeyManagementApiDeleteAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     */
    apiKeyId: string;
}
export interface KeyManagementApiDeleteApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
}
export interface KeyManagementApiDeleteCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
}
export interface KeyManagementApiGetAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     */
    apiKeyId: string;
    /**
     * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`.
     * @type string
     */
    include?: string;
}
export interface KeyManagementApiGetApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
    /**
     * Resource path for related resources to include in the response. Only `owned_by` is supported.
     * @type string
     */
    include?: string;
}
export interface KeyManagementApiGetCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     */
    appKeyId: string;
}
export interface KeyManagementApiListAPIKeysRequest {
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
     * API key attribute used to sort results. Sort order is ascending
     * by default. In order to specify a descending sort, prefix the
     * attribute with a minus sign.
     * @type APIKeysSort
     */
    sort?: APIKeysSort;
    /**
     * Filter API keys by the specified string.
     * @type string
     */
    filter?: string;
    /**
     * Only include API keys created on or after the specified date.
     * @type string
     */
    filterCreatedAtStart?: string;
    /**
     * Only include API keys created on or before the specified date.
     * @type string
     */
    filterCreatedAtEnd?: string;
    /**
     * Only include API keys modified on or after the specified date.
     * @type string
     */
    filterModifiedAtStart?: string;
    /**
     * Only include API keys modified on or before the specified date.
     * @type string
     */
    filterModifiedAtEnd?: string;
    /**
     * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`.
     * @type string
     */
    include?: string;
    /**
     * Filter API keys by remote config read enabled status.
     * @type boolean
     */
    filterRemoteConfigReadEnabled?: boolean;
    /**
     * Filter API keys by category.
     * @type string
     */
    filterCategory?: string;
}
export interface KeyManagementApiListApplicationKeysRequest {
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
    /**
     * Resource path for related resources to include in the response. Only `owned_by` is supported.
     * @type string
     */
    include?: string;
}
export interface KeyManagementApiListCurrentUserApplicationKeysRequest {
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
    /**
     * Resource path for related resources to include in the response. Only `owned_by` is supported.
     * @type string
     */
    include?: string;
}
export interface KeyManagementApiUpdateAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     */
    apiKeyId: string;
    /**
     * @type APIKeyUpdateRequest
     */
    body: APIKeyUpdateRequest;
}
export interface KeyManagementApiUpdateApplicationKeyRequest {
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
export interface KeyManagementApiUpdateCurrentUserApplicationKeyRequest {
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
export declare class KeyManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor);
    /**
     * Create an API key.
     * @param param The request object
     */
    createAPIKey(param: KeyManagementApiCreateAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse>;
    /**
     * Create an application key for current user
     * @param param The request object
     */
    createCurrentUserApplicationKey(param: KeyManagementApiCreateCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Delete an API key.
     * @param param The request object
     */
    deleteAPIKey(param: KeyManagementApiDeleteAPIKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an application key
     * @param param The request object
     */
    deleteApplicationKey(param: KeyManagementApiDeleteApplicationKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an application key owned by current user
     * @param param The request object
     */
    deleteCurrentUserApplicationKey(param: KeyManagementApiDeleteCurrentUserApplicationKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Get an API key.
     * @param param The request object
     */
    getAPIKey(param: KeyManagementApiGetAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse>;
    /**
     * Get an application key for your org.
     * @param param The request object
     */
    getApplicationKey(param: KeyManagementApiGetApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Get an application key owned by current user.
     * The `key` field is not returned for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    getCurrentUserApplicationKey(param: KeyManagementApiGetCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * List all API keys available for your account.
     * @param param The request object
     */
    listAPIKeys(param?: KeyManagementApiListAPIKeysRequest, options?: Configuration): Promise<APIKeysResponse>;
    /**
     * List all application keys available for your org
     * @param param The request object
     */
    listApplicationKeys(param?: KeyManagementApiListApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse>;
    /**
     * List all application keys available for current user
     * @param param The request object
     */
    listCurrentUserApplicationKeys(param?: KeyManagementApiListCurrentUserApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse>;
    /**
     * Update an API key.
     * @param param The request object
     */
    updateAPIKey(param: KeyManagementApiUpdateAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse>;
    /**
     * Edit an application key
     * @param param The request object
     */
    updateApplicationKey(param: KeyManagementApiUpdateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Edit an application key owned by current user.
     * The `key` field is not returned for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    updateCurrentUserApplicationKey(param: KeyManagementApiUpdateCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
}
