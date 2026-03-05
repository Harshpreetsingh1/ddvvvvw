import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ApiKey } from "../models/ApiKey";
import { ApiKeyListResponse } from "../models/ApiKeyListResponse";
import { ApiKeyResponse } from "../models/ApiKeyResponse";
import { ApplicationKey } from "../models/ApplicationKey";
import { ApplicationKeyListResponse } from "../models/ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
export declare class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {
    createAPIKey(body: ApiKey, _options?: Configuration): Promise<RequestContext>;
    createApplicationKey(body: ApplicationKey, _options?: Configuration): Promise<RequestContext>;
    deleteAPIKey(key: string, _options?: Configuration): Promise<RequestContext>;
    deleteApplicationKey(key: string, _options?: Configuration): Promise<RequestContext>;
    getAPIKey(key: string, _options?: Configuration): Promise<RequestContext>;
    getApplicationKey(key: string, _options?: Configuration): Promise<RequestContext>;
    listAPIKeys(_options?: Configuration): Promise<RequestContext>;
    listApplicationKeys(_options?: Configuration): Promise<RequestContext>;
    updateAPIKey(key: string, body: ApiKey, _options?: Configuration): Promise<RequestContext>;
    updateApplicationKey(key: string, body: ApplicationKey, _options?: Configuration): Promise<RequestContext>;
}
export declare class KeyManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
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
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIKeys(response: ResponseContext): Promise<ApiKeyListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationKeys(response: ResponseContext): Promise<ApplicationKeyListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
}
export interface KeyManagementApiCreateAPIKeyRequest {
    /**
     * @type ApiKey
     */
    body: ApiKey;
}
export interface KeyManagementApiCreateApplicationKeyRequest {
    /**
     * @type ApplicationKey
     */
    body: ApplicationKey;
}
export interface KeyManagementApiDeleteAPIKeyRequest {
    /**
     * The specific API key you are working with.
     * @type string
     */
    key: string;
}
export interface KeyManagementApiDeleteApplicationKeyRequest {
    /**
     * The specific APP key you are working with.
     * @type string
     */
    key: string;
}
export interface KeyManagementApiGetAPIKeyRequest {
    /**
     * The specific API key you are working with.
     * @type string
     */
    key: string;
}
export interface KeyManagementApiGetApplicationKeyRequest {
    /**
     * The specific APP key you are working with.
     * @type string
     */
    key: string;
}
export interface KeyManagementApiUpdateAPIKeyRequest {
    /**
     * The specific API key you are working with.
     * @type string
     */
    key: string;
    /**
     * @type ApiKey
     */
    body: ApiKey;
}
export interface KeyManagementApiUpdateApplicationKeyRequest {
    /**
     * The specific APP key you are working with.
     * @type string
     */
    key: string;
    /**
     * @type ApplicationKey
     */
    body: ApplicationKey;
}
export declare class KeyManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor);
    /**
     * Creates an API key with a given name.
     * @param param The request object
     */
    createAPIKey(param: KeyManagementApiCreateAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Create an application key with a given name.
     * This endpoint is disabled for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    createApplicationKey(param: KeyManagementApiCreateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Delete a given API key.
     * @param param The request object
     */
    deleteAPIKey(param: KeyManagementApiDeleteAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Delete a given application key.
     * This endpoint is disabled for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    deleteApplicationKey(param: KeyManagementApiDeleteApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Get a given API key.
     * @param param The request object
     */
    getAPIKey(param: KeyManagementApiGetAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Get a given application key.
     * This endpoint is disabled for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    getApplicationKey(param: KeyManagementApiGetApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Get all API keys available for your account.
     * @param param The request object
     */
    listAPIKeys(options?: Configuration): Promise<ApiKeyListResponse>;
    /**
     * Get all application keys available for your Datadog account.
     * This endpoint is disabled for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    listApplicationKeys(options?: Configuration): Promise<ApplicationKeyListResponse>;
    /**
     * Edit an API key name.
     * @param param The request object
     */
    updateAPIKey(param: KeyManagementApiUpdateAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Edit an application key name.
     * This endpoint is disabled for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    updateApplicationKey(param: KeyManagementApiUpdateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
}
