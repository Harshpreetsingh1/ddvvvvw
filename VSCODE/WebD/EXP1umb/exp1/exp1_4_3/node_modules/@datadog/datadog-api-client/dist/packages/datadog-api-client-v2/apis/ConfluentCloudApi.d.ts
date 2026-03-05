import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ConfluentAccountCreateRequest } from "../models/ConfluentAccountCreateRequest";
import { ConfluentAccountResponse } from "../models/ConfluentAccountResponse";
import { ConfluentAccountsResponse } from "../models/ConfluentAccountsResponse";
import { ConfluentAccountUpdateRequest } from "../models/ConfluentAccountUpdateRequest";
import { ConfluentResourceRequest } from "../models/ConfluentResourceRequest";
import { ConfluentResourceResponse } from "../models/ConfluentResourceResponse";
import { ConfluentResourcesResponse } from "../models/ConfluentResourcesResponse";
export declare class ConfluentCloudApiRequestFactory extends BaseAPIRequestFactory {
    createConfluentAccount(body: ConfluentAccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createConfluentResource(accountId: string, body: ConfluentResourceRequest, _options?: Configuration): Promise<RequestContext>;
    deleteConfluentAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    deleteConfluentResource(accountId: string, resourceId: string, _options?: Configuration): Promise<RequestContext>;
    getConfluentAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getConfluentResource(accountId: string, resourceId: string, _options?: Configuration): Promise<RequestContext>;
    listConfluentAccount(_options?: Configuration): Promise<RequestContext>;
    listConfluentResource(accountId: string, _options?: Configuration): Promise<RequestContext>;
    updateConfluentAccount(accountId: string, body: ConfluentAccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateConfluentResource(accountId: string, resourceId: string, body: ConfluentResourceRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ConfluentCloudApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConfluentAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createConfluentAccount(response: ResponseContext): Promise<ConfluentAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConfluentResource
     * @throws ApiException if the response code was not in [200, 299]
     */
    createConfluentResource(response: ResponseContext): Promise<ConfluentResourceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteConfluentAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteConfluentAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteConfluentResource
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteConfluentResource(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConfluentAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    getConfluentAccount(response: ResponseContext): Promise<ConfluentAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConfluentResource
     * @throws ApiException if the response code was not in [200, 299]
     */
    getConfluentResource(response: ResponseContext): Promise<ConfluentResourceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConfluentAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    listConfluentAccount(response: ResponseContext): Promise<ConfluentAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConfluentResource
     * @throws ApiException if the response code was not in [200, 299]
     */
    listConfluentResource(response: ResponseContext): Promise<ConfluentResourcesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateConfluentAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateConfluentAccount(response: ResponseContext): Promise<ConfluentAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateConfluentResource
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateConfluentResource(response: ResponseContext): Promise<ConfluentResourceResponse>;
}
export interface ConfluentCloudApiCreateConfluentAccountRequest {
    /**
     * Confluent payload
     * @type ConfluentAccountCreateRequest
     */
    body: ConfluentAccountCreateRequest;
}
export interface ConfluentCloudApiCreateConfluentResourceRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
    /**
     * Confluent payload
     * @type ConfluentResourceRequest
     */
    body: ConfluentResourceRequest;
}
export interface ConfluentCloudApiDeleteConfluentAccountRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
}
export interface ConfluentCloudApiDeleteConfluentResourceRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
    /**
     * Confluent Account Resource ID.
     * @type string
     */
    resourceId: string;
}
export interface ConfluentCloudApiGetConfluentAccountRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
}
export interface ConfluentCloudApiGetConfluentResourceRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
    /**
     * Confluent Account Resource ID.
     * @type string
     */
    resourceId: string;
}
export interface ConfluentCloudApiListConfluentResourceRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
}
export interface ConfluentCloudApiUpdateConfluentAccountRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
    /**
     * Confluent payload
     * @type ConfluentAccountUpdateRequest
     */
    body: ConfluentAccountUpdateRequest;
}
export interface ConfluentCloudApiUpdateConfluentResourceRequest {
    /**
     * Confluent Account ID.
     * @type string
     */
    accountId: string;
    /**
     * Confluent Account Resource ID.
     * @type string
     */
    resourceId: string;
    /**
     * Confluent payload
     * @type ConfluentResourceRequest
     */
    body: ConfluentResourceRequest;
}
export declare class ConfluentCloudApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ConfluentCloudApiRequestFactory, responseProcessor?: ConfluentCloudApiResponseProcessor);
    /**
     * Create a Confluent account.
     * @param param The request object
     */
    createConfluentAccount(param: ConfluentCloudApiCreateConfluentAccountRequest, options?: Configuration): Promise<ConfluentAccountResponse>;
    /**
     * Create a Confluent resource for the account associated with the provided ID.
     * @param param The request object
     */
    createConfluentResource(param: ConfluentCloudApiCreateConfluentResourceRequest, options?: Configuration): Promise<ConfluentResourceResponse>;
    /**
     * Delete a Confluent account with the provided account ID.
     * @param param The request object
     */
    deleteConfluentAccount(param: ConfluentCloudApiDeleteConfluentAccountRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a Confluent resource with the provided resource id for the account associated with the provided account ID.
     * @param param The request object
     */
    deleteConfluentResource(param: ConfluentCloudApiDeleteConfluentResourceRequest, options?: Configuration): Promise<void>;
    /**
     * Get the Confluent account with the provided account ID.
     * @param param The request object
     */
    getConfluentAccount(param: ConfluentCloudApiGetConfluentAccountRequest, options?: Configuration): Promise<ConfluentAccountResponse>;
    /**
     * Get a Confluent resource with the provided resource id for the account associated with the provided account ID.
     * @param param The request object
     */
    getConfluentResource(param: ConfluentCloudApiGetConfluentResourceRequest, options?: Configuration): Promise<ConfluentResourceResponse>;
    /**
     * List Confluent accounts.
     * @param param The request object
     */
    listConfluentAccount(options?: Configuration): Promise<ConfluentAccountsResponse>;
    /**
     * Get a Confluent resource for the account associated with the provided ID.
     * @param param The request object
     */
    listConfluentResource(param: ConfluentCloudApiListConfluentResourceRequest, options?: Configuration): Promise<ConfluentResourcesResponse>;
    /**
     * Update the Confluent account with the provided account ID.
     * @param param The request object
     */
    updateConfluentAccount(param: ConfluentCloudApiUpdateConfluentAccountRequest, options?: Configuration): Promise<ConfluentAccountResponse>;
    /**
     * Update a Confluent resource with the provided resource id for the account associated with the provided account ID.
     * @param param The request object
     */
    updateConfluentResource(param: ConfluentCloudApiUpdateConfluentResourceRequest, options?: Configuration): Promise<ConfluentResourceResponse>;
}
