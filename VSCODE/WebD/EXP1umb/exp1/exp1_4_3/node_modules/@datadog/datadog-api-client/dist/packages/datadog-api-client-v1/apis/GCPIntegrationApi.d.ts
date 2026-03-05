import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { GCPAccount } from "../models/GCPAccount";
export declare class GCPIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createGCPIntegration(body: GCPAccount, _options?: Configuration): Promise<RequestContext>;
    deleteGCPIntegration(body: GCPAccount, _options?: Configuration): Promise<RequestContext>;
    listGCPIntegration(_options?: Configuration): Promise<RequestContext>;
    updateGCPIntegration(body: GCPAccount, _options?: Configuration): Promise<RequestContext>;
}
export declare class GCPIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createGCPIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteGCPIntegration(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    listGCPIntegration(response: ResponseContext): Promise<Array<GCPAccount>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGCPIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateGCPIntegration(response: ResponseContext): Promise<any>;
}
export interface GCPIntegrationApiCreateGCPIntegrationRequest {
    /**
     * Create a Datadog-GCP integration.
     * @type GCPAccount
     */
    body: GCPAccount;
}
export interface GCPIntegrationApiDeleteGCPIntegrationRequest {
    /**
     * Delete a given Datadog-GCP integration.
     * @type GCPAccount
     */
    body: GCPAccount;
}
export interface GCPIntegrationApiUpdateGCPIntegrationRequest {
    /**
     * Update a Datadog-GCP integration.
     * @type GCPAccount
     */
    body: GCPAccount;
}
export declare class GCPIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GCPIntegrationApiRequestFactory, responseProcessor?: GCPIntegrationApiResponseProcessor);
    /**
     * This endpoint is deprecated – use the V2 endpoints instead. Create a Datadog-GCP integration.
     * @param param The request object
     */
    createGCPIntegration(param: GCPIntegrationApiCreateGCPIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * This endpoint is deprecated – use the V2 endpoints instead. Delete a given Datadog-GCP integration.
     * @param param The request object
     */
    deleteGCPIntegration(param: GCPIntegrationApiDeleteGCPIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * This endpoint is deprecated – use the V2 endpoints instead. List all Datadog-GCP integrations configured in your Datadog account.
     * @param param The request object
     */
    listGCPIntegration(options?: Configuration): Promise<Array<GCPAccount>>;
    /**
     * This endpoint is deprecated – use the V2 endpoints instead. Update a Datadog-GCP integrations host_filters and/or auto-mute.
     * Requires a `project_id` and `client_email`, however these fields cannot be updated.
     * If you need to update these fields, delete and use the create (`POST`) endpoint.
     * The unspecified fields will keep their original values.
     * @param param The request object
     */
    updateGCPIntegration(param: GCPIntegrationApiUpdateGCPIntegrationRequest, options?: Configuration): Promise<any>;
}
