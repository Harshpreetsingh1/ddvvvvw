import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CloudflareAccountCreateRequest } from "../models/CloudflareAccountCreateRequest";
import { CloudflareAccountResponse } from "../models/CloudflareAccountResponse";
import { CloudflareAccountsResponse } from "../models/CloudflareAccountsResponse";
import { CloudflareAccountUpdateRequest } from "../models/CloudflareAccountUpdateRequest";
export declare class CloudflareIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createCloudflareAccount(body: CloudflareAccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCloudflareAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getCloudflareAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    listCloudflareAccounts(_options?: Configuration): Promise<RequestContext>;
    updateCloudflareAccount(accountId: string, body: CloudflareAccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CloudflareIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCloudflareAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCloudflareAccount(response: ResponseContext): Promise<CloudflareAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCloudflareAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCloudflareAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCloudflareAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCloudflareAccount(response: ResponseContext): Promise<CloudflareAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCloudflareAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCloudflareAccounts(response: ResponseContext): Promise<CloudflareAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCloudflareAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCloudflareAccount(response: ResponseContext): Promise<CloudflareAccountResponse>;
}
export interface CloudflareIntegrationApiCreateCloudflareAccountRequest {
    /**
     * @type CloudflareAccountCreateRequest
     */
    body: CloudflareAccountCreateRequest;
}
export interface CloudflareIntegrationApiDeleteCloudflareAccountRequest {
    /**
     * None
     * @type string
     */
    accountId: string;
}
export interface CloudflareIntegrationApiGetCloudflareAccountRequest {
    /**
     * None
     * @type string
     */
    accountId: string;
}
export interface CloudflareIntegrationApiUpdateCloudflareAccountRequest {
    /**
     * None
     * @type string
     */
    accountId: string;
    /**
     * @type CloudflareAccountUpdateRequest
     */
    body: CloudflareAccountUpdateRequest;
}
export declare class CloudflareIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CloudflareIntegrationApiRequestFactory, responseProcessor?: CloudflareIntegrationApiResponseProcessor);
    /**
     * Create a Cloudflare account.
     * @param param The request object
     */
    createCloudflareAccount(param: CloudflareIntegrationApiCreateCloudflareAccountRequest, options?: Configuration): Promise<CloudflareAccountResponse>;
    /**
     * Delete a Cloudflare account.
     * @param param The request object
     */
    deleteCloudflareAccount(param: CloudflareIntegrationApiDeleteCloudflareAccountRequest, options?: Configuration): Promise<void>;
    /**
     * Get a Cloudflare account.
     * @param param The request object
     */
    getCloudflareAccount(param: CloudflareIntegrationApiGetCloudflareAccountRequest, options?: Configuration): Promise<CloudflareAccountResponse>;
    /**
     * List Cloudflare accounts.
     * @param param The request object
     */
    listCloudflareAccounts(options?: Configuration): Promise<CloudflareAccountsResponse>;
    /**
     * Update a Cloudflare account.
     * @param param The request object
     */
    updateCloudflareAccount(param: CloudflareIntegrationApiUpdateCloudflareAccountRequest, options?: Configuration): Promise<CloudflareAccountResponse>;
}
