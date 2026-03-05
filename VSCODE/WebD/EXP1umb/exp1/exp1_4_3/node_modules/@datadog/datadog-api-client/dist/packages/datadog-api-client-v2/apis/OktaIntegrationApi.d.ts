import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { OktaAccountRequest } from "../models/OktaAccountRequest";
import { OktaAccountResponse } from "../models/OktaAccountResponse";
import { OktaAccountsResponse } from "../models/OktaAccountsResponse";
import { OktaAccountUpdateRequest } from "../models/OktaAccountUpdateRequest";
export declare class OktaIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createOktaAccount(body: OktaAccountRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOktaAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getOktaAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    listOktaAccounts(_options?: Configuration): Promise<RequestContext>;
    updateOktaAccount(accountId: string, body: OktaAccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class OktaIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOktaAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOktaAccount(response: ResponseContext): Promise<OktaAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOktaAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOktaAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOktaAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOktaAccount(response: ResponseContext): Promise<OktaAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOktaAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOktaAccounts(response: ResponseContext): Promise<OktaAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOktaAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOktaAccount(response: ResponseContext): Promise<OktaAccountResponse>;
}
export interface OktaIntegrationApiCreateOktaAccountRequest {
    /**
     * @type OktaAccountRequest
     */
    body: OktaAccountRequest;
}
export interface OktaIntegrationApiDeleteOktaAccountRequest {
    /**
     * None
     * @type string
     */
    accountId: string;
}
export interface OktaIntegrationApiGetOktaAccountRequest {
    /**
     * None
     * @type string
     */
    accountId: string;
}
export interface OktaIntegrationApiUpdateOktaAccountRequest {
    /**
     * None
     * @type string
     */
    accountId: string;
    /**
     * @type OktaAccountUpdateRequest
     */
    body: OktaAccountUpdateRequest;
}
export declare class OktaIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OktaIntegrationApiRequestFactory, responseProcessor?: OktaIntegrationApiResponseProcessor);
    /**
     * Create an Okta account.
     * @param param The request object
     */
    createOktaAccount(param: OktaIntegrationApiCreateOktaAccountRequest, options?: Configuration): Promise<OktaAccountResponse>;
    /**
     * Delete an Okta account.
     * @param param The request object
     */
    deleteOktaAccount(param: OktaIntegrationApiDeleteOktaAccountRequest, options?: Configuration): Promise<void>;
    /**
     * Get an Okta account.
     * @param param The request object
     */
    getOktaAccount(param: OktaIntegrationApiGetOktaAccountRequest, options?: Configuration): Promise<OktaAccountResponse>;
    /**
     * List Okta accounts.
     * @param param The request object
     */
    listOktaAccounts(options?: Configuration): Promise<OktaAccountsResponse>;
    /**
     * Update an Okta account.
     * @param param The request object
     */
    updateOktaAccount(param: OktaIntegrationApiUpdateOktaAccountRequest, options?: Configuration): Promise<OktaAccountResponse>;
}
