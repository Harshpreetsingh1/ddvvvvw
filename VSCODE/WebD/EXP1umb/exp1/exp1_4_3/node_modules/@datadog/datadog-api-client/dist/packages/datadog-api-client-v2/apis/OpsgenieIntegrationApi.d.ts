import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { OpsgenieServiceCreateRequest } from "../models/OpsgenieServiceCreateRequest";
import { OpsgenieServiceResponse } from "../models/OpsgenieServiceResponse";
import { OpsgenieServicesResponse } from "../models/OpsgenieServicesResponse";
import { OpsgenieServiceUpdateRequest } from "../models/OpsgenieServiceUpdateRequest";
export declare class OpsgenieIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createOpsgenieService(body: OpsgenieServiceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOpsgenieService(integrationServiceId: string, _options?: Configuration): Promise<RequestContext>;
    getOpsgenieService(integrationServiceId: string, _options?: Configuration): Promise<RequestContext>;
    listOpsgenieServices(_options?: Configuration): Promise<RequestContext>;
    updateOpsgenieService(integrationServiceId: string, body: OpsgenieServiceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class OpsgenieIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOpsgenieService
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOpsgenieService(response: ResponseContext): Promise<OpsgenieServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOpsgenieService
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOpsgenieService(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOpsgenieService
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOpsgenieService(response: ResponseContext): Promise<OpsgenieServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOpsgenieServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOpsgenieServices(response: ResponseContext): Promise<OpsgenieServicesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOpsgenieService
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOpsgenieService(response: ResponseContext): Promise<OpsgenieServiceResponse>;
}
export interface OpsgenieIntegrationApiCreateOpsgenieServiceRequest {
    /**
     * Opsgenie service payload
     * @type OpsgenieServiceCreateRequest
     */
    body: OpsgenieServiceCreateRequest;
}
export interface OpsgenieIntegrationApiDeleteOpsgenieServiceRequest {
    /**
     * The UUID of the service.
     * @type string
     */
    integrationServiceId: string;
}
export interface OpsgenieIntegrationApiGetOpsgenieServiceRequest {
    /**
     * The UUID of the service.
     * @type string
     */
    integrationServiceId: string;
}
export interface OpsgenieIntegrationApiUpdateOpsgenieServiceRequest {
    /**
     * The UUID of the service.
     * @type string
     */
    integrationServiceId: string;
    /**
     * Opsgenie service payload.
     * @type OpsgenieServiceUpdateRequest
     */
    body: OpsgenieServiceUpdateRequest;
}
export declare class OpsgenieIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OpsgenieIntegrationApiRequestFactory, responseProcessor?: OpsgenieIntegrationApiResponseProcessor);
    /**
     * Create a new service object in the Opsgenie integration.
     * @param param The request object
     */
    createOpsgenieService(param: OpsgenieIntegrationApiCreateOpsgenieServiceRequest, options?: Configuration): Promise<OpsgenieServiceResponse>;
    /**
     * Delete a single service object in the Datadog Opsgenie integration.
     * @param param The request object
     */
    deleteOpsgenieService(param: OpsgenieIntegrationApiDeleteOpsgenieServiceRequest, options?: Configuration): Promise<void>;
    /**
     * Get a single service from the Datadog Opsgenie integration.
     * @param param The request object
     */
    getOpsgenieService(param: OpsgenieIntegrationApiGetOpsgenieServiceRequest, options?: Configuration): Promise<OpsgenieServiceResponse>;
    /**
     * Get a list of all services from the Datadog Opsgenie integration.
     * @param param The request object
     */
    listOpsgenieServices(options?: Configuration): Promise<OpsgenieServicesResponse>;
    /**
     * Update a single service object in the Datadog Opsgenie integration.
     * @param param The request object
     */
    updateOpsgenieService(param: OpsgenieIntegrationApiUpdateOpsgenieServiceRequest, options?: Configuration): Promise<OpsgenieServiceResponse>;
}
