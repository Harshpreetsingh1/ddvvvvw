import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AzureAccount } from "../models/AzureAccount";
export declare class AzureIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createAzureIntegration(body: AzureAccount, _options?: Configuration): Promise<RequestContext>;
    deleteAzureIntegration(body: AzureAccount, _options?: Configuration): Promise<RequestContext>;
    listAzureIntegration(_options?: Configuration): Promise<RequestContext>;
    updateAzureHostFilters(body: AzureAccount, _options?: Configuration): Promise<RequestContext>;
    updateAzureIntegration(body: AzureAccount, _options?: Configuration): Promise<RequestContext>;
}
export declare class AzureIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAzureIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAzureIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAzureIntegration(response: ResponseContext): Promise<Array<AzureAccount>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAzureHostFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAzureHostFilters(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAzureIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAzureIntegration(response: ResponseContext): Promise<any>;
}
export interface AzureIntegrationApiCreateAzureIntegrationRequest {
    /**
     * Create a Datadog-Azure integration for your Datadog account request body.
     * @type AzureAccount
     */
    body: AzureAccount;
}
export interface AzureIntegrationApiDeleteAzureIntegrationRequest {
    /**
     * Delete a given Datadog-Azure integration request body.
     * @type AzureAccount
     */
    body: AzureAccount;
}
export interface AzureIntegrationApiUpdateAzureHostFiltersRequest {
    /**
     * Update a Datadog-Azure integration's host filters request body.
     * @type AzureAccount
     */
    body: AzureAccount;
}
export interface AzureIntegrationApiUpdateAzureIntegrationRequest {
    /**
     * Update a Datadog-Azure integration request body.
     * @type AzureAccount
     */
    body: AzureAccount;
}
export declare class AzureIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AzureIntegrationApiRequestFactory, responseProcessor?: AzureIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-Azure integration.
     *
     * Using the `POST` method updates your integration configuration by adding your new
     * configuration to the existing one in your Datadog organization.
     *
     * Using the `PUT` method updates your integration configuration by replacing your
     * current configuration with the new one sent to your Datadog organization.
     * @param param The request object
     */
    createAzureIntegration(param: AzureIntegrationApiCreateAzureIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * @param param The request object
     */
    deleteAzureIntegration(param: AzureIntegrationApiDeleteAzureIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * @param param The request object
     */
    listAzureIntegration(options?: Configuration): Promise<Array<AzureAccount>>;
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * @param param The request object
     */
    updateAzureHostFilters(param: AzureIntegrationApiUpdateAzureHostFiltersRequest, options?: Configuration): Promise<any>;
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`.
     * Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`,
     * use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * @param param The request object
     */
    updateAzureIntegration(param: AzureIntegrationApiUpdateAzureIntegrationRequest, options?: Configuration): Promise<any>;
}
