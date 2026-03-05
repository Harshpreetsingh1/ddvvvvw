import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { FastlyAccountCreateRequest } from "../models/FastlyAccountCreateRequest";
import { FastlyAccountResponse } from "../models/FastlyAccountResponse";
import { FastlyAccountsResponse } from "../models/FastlyAccountsResponse";
import { FastlyAccountUpdateRequest } from "../models/FastlyAccountUpdateRequest";
import { FastlyServiceRequest } from "../models/FastlyServiceRequest";
import { FastlyServiceResponse } from "../models/FastlyServiceResponse";
import { FastlyServicesResponse } from "../models/FastlyServicesResponse";
export declare class FastlyIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createFastlyAccount(body: FastlyAccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createFastlyService(accountId: string, body: FastlyServiceRequest, _options?: Configuration): Promise<RequestContext>;
    deleteFastlyAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    deleteFastlyService(accountId: string, serviceId: string, _options?: Configuration): Promise<RequestContext>;
    getFastlyAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getFastlyService(accountId: string, serviceId: string, _options?: Configuration): Promise<RequestContext>;
    listFastlyAccounts(_options?: Configuration): Promise<RequestContext>;
    listFastlyServices(accountId: string, _options?: Configuration): Promise<RequestContext>;
    updateFastlyAccount(accountId: string, body: FastlyAccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateFastlyService(accountId: string, serviceId: string, body: FastlyServiceRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class FastlyIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFastlyAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFastlyAccount(response: ResponseContext): Promise<FastlyAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFastlyService
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFastlyService(response: ResponseContext): Promise<FastlyServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFastlyAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteFastlyAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFastlyService
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteFastlyService(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFastlyAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFastlyAccount(response: ResponseContext): Promise<FastlyAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFastlyService
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFastlyService(response: ResponseContext): Promise<FastlyServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFastlyAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFastlyAccounts(response: ResponseContext): Promise<FastlyAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFastlyServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFastlyServices(response: ResponseContext): Promise<FastlyServicesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFastlyAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateFastlyAccount(response: ResponseContext): Promise<FastlyAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFastlyService
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateFastlyService(response: ResponseContext): Promise<FastlyServiceResponse>;
}
export interface FastlyIntegrationApiCreateFastlyAccountRequest {
    /**
     * @type FastlyAccountCreateRequest
     */
    body: FastlyAccountCreateRequest;
}
export interface FastlyIntegrationApiCreateFastlyServiceRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
    /**
     * @type FastlyServiceRequest
     */
    body: FastlyServiceRequest;
}
export interface FastlyIntegrationApiDeleteFastlyAccountRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
}
export interface FastlyIntegrationApiDeleteFastlyServiceRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
    /**
     * Fastly Service ID.
     * @type string
     */
    serviceId: string;
}
export interface FastlyIntegrationApiGetFastlyAccountRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
}
export interface FastlyIntegrationApiGetFastlyServiceRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
    /**
     * Fastly Service ID.
     * @type string
     */
    serviceId: string;
}
export interface FastlyIntegrationApiListFastlyServicesRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
}
export interface FastlyIntegrationApiUpdateFastlyAccountRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
    /**
     * @type FastlyAccountUpdateRequest
     */
    body: FastlyAccountUpdateRequest;
}
export interface FastlyIntegrationApiUpdateFastlyServiceRequest {
    /**
     * Fastly Account id.
     * @type string
     */
    accountId: string;
    /**
     * Fastly Service ID.
     * @type string
     */
    serviceId: string;
    /**
     * @type FastlyServiceRequest
     */
    body: FastlyServiceRequest;
}
export declare class FastlyIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FastlyIntegrationApiRequestFactory, responseProcessor?: FastlyIntegrationApiResponseProcessor);
    /**
     * Create a Fastly account.
     * @param param The request object
     */
    createFastlyAccount(param: FastlyIntegrationApiCreateFastlyAccountRequest, options?: Configuration): Promise<FastlyAccountResponse>;
    /**
     * Create a Fastly service for an account.
     * @param param The request object
     */
    createFastlyService(param: FastlyIntegrationApiCreateFastlyServiceRequest, options?: Configuration): Promise<FastlyServiceResponse>;
    /**
     * Delete a Fastly account.
     * @param param The request object
     */
    deleteFastlyAccount(param: FastlyIntegrationApiDeleteFastlyAccountRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a Fastly service for an account.
     * @param param The request object
     */
    deleteFastlyService(param: FastlyIntegrationApiDeleteFastlyServiceRequest, options?: Configuration): Promise<void>;
    /**
     * Get a Fastly account.
     * @param param The request object
     */
    getFastlyAccount(param: FastlyIntegrationApiGetFastlyAccountRequest, options?: Configuration): Promise<FastlyAccountResponse>;
    /**
     * Get a Fastly service for an account.
     * @param param The request object
     */
    getFastlyService(param: FastlyIntegrationApiGetFastlyServiceRequest, options?: Configuration): Promise<FastlyServiceResponse>;
    /**
     * List Fastly accounts.
     * @param param The request object
     */
    listFastlyAccounts(options?: Configuration): Promise<FastlyAccountsResponse>;
    /**
     * List Fastly services for an account.
     * @param param The request object
     */
    listFastlyServices(param: FastlyIntegrationApiListFastlyServicesRequest, options?: Configuration): Promise<FastlyServicesResponse>;
    /**
     * Update a Fastly account.
     * @param param The request object
     */
    updateFastlyAccount(param: FastlyIntegrationApiUpdateFastlyAccountRequest, options?: Configuration): Promise<FastlyAccountResponse>;
    /**
     * Update a Fastly service for an account.
     * @param param The request object
     */
    updateFastlyService(param: FastlyIntegrationApiUpdateFastlyServiceRequest, options?: Configuration): Promise<FastlyServiceResponse>;
}
