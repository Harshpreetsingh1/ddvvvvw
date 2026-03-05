import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { GCPSTSDelegateAccountResponse } from "../models/GCPSTSDelegateAccountResponse";
import { GCPSTSServiceAccountCreateRequest } from "../models/GCPSTSServiceAccountCreateRequest";
import { GCPSTSServiceAccountResponse } from "../models/GCPSTSServiceAccountResponse";
import { GCPSTSServiceAccountsResponse } from "../models/GCPSTSServiceAccountsResponse";
import { GCPSTSServiceAccountUpdateRequest } from "../models/GCPSTSServiceAccountUpdateRequest";
export declare class GCPIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createGCPSTSAccount(body: GCPSTSServiceAccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteGCPSTSAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getGCPSTSDelegate(_options?: Configuration): Promise<RequestContext>;
    listGCPSTSAccounts(_options?: Configuration): Promise<RequestContext>;
    makeGCPSTSDelegate(body?: any, _options?: Configuration): Promise<RequestContext>;
    updateGCPSTSAccount(accountId: string, body: GCPSTSServiceAccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class GCPIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGCPSTSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createGCPSTSAccount(response: ResponseContext): Promise<GCPSTSServiceAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGCPSTSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteGCPSTSAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGCPSTSDelegate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getGCPSTSDelegate(response: ResponseContext): Promise<GCPSTSDelegateAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGCPSTSAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listGCPSTSAccounts(response: ResponseContext): Promise<GCPSTSServiceAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to makeGCPSTSDelegate
     * @throws ApiException if the response code was not in [200, 299]
     */
    makeGCPSTSDelegate(response: ResponseContext): Promise<GCPSTSDelegateAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGCPSTSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateGCPSTSAccount(response: ResponseContext): Promise<GCPSTSServiceAccountResponse>;
}
export interface GCPIntegrationApiCreateGCPSTSAccountRequest {
    /**
     * @type GCPSTSServiceAccountCreateRequest
     */
    body: GCPSTSServiceAccountCreateRequest;
}
export interface GCPIntegrationApiDeleteGCPSTSAccountRequest {
    /**
     * Your GCP STS enabled service account's unique ID.
     * @type string
     */
    accountId: string;
}
export interface GCPIntegrationApiMakeGCPSTSDelegateRequest {
    /**
     * Create a delegate service account within Datadog.
     * @type any
     */
    body?: any;
}
export interface GCPIntegrationApiUpdateGCPSTSAccountRequest {
    /**
     * Your GCP STS enabled service account's unique ID.
     * @type string
     */
    accountId: string;
    /**
     * @type GCPSTSServiceAccountUpdateRequest
     */
    body: GCPSTSServiceAccountUpdateRequest;
}
export declare class GCPIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GCPIntegrationApiRequestFactory, responseProcessor?: GCPIntegrationApiResponseProcessor);
    /**
     * Create a new entry within Datadog for your STS enabled service account.
     * @param param The request object
     */
    createGCPSTSAccount(param: GCPIntegrationApiCreateGCPSTSAccountRequest, options?: Configuration): Promise<GCPSTSServiceAccountResponse>;
    /**
     * Delete an STS enabled GCP account from within Datadog.
     * @param param The request object
     */
    deleteGCPSTSAccount(param: GCPIntegrationApiDeleteGCPSTSAccountRequest, options?: Configuration): Promise<void>;
    /**
     * List your Datadog-GCP STS delegate account configured in your Datadog account.
     * @param param The request object
     */
    getGCPSTSDelegate(options?: Configuration): Promise<GCPSTSDelegateAccountResponse>;
    /**
     * List all GCP STS-enabled service accounts configured in your Datadog account.
     * @param param The request object
     */
    listGCPSTSAccounts(options?: Configuration): Promise<GCPSTSServiceAccountsResponse>;
    /**
     * Create a Datadog GCP principal.
     * @param param The request object
     */
    makeGCPSTSDelegate(param?: GCPIntegrationApiMakeGCPSTSDelegateRequest, options?: Configuration): Promise<GCPSTSDelegateAccountResponse>;
    /**
     * Update an STS enabled service account.
     * @param param The request object
     */
    updateGCPSTSAccount(param: GCPIntegrationApiUpdateGCPSTSAccountRequest, options?: Configuration): Promise<GCPSTSServiceAccountResponse>;
}
