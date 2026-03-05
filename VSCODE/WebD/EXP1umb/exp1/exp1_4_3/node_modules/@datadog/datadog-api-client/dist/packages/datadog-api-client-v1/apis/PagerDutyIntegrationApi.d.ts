import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { PagerDutyService } from "../models/PagerDutyService";
import { PagerDutyServiceKey } from "../models/PagerDutyServiceKey";
import { PagerDutyServiceName } from "../models/PagerDutyServiceName";
export declare class PagerDutyIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createPagerDutyIntegrationService(body: PagerDutyService, _options?: Configuration): Promise<RequestContext>;
    deletePagerDutyIntegrationService(serviceName: string, _options?: Configuration): Promise<RequestContext>;
    getPagerDutyIntegrationService(serviceName: string, _options?: Configuration): Promise<RequestContext>;
    updatePagerDutyIntegrationService(serviceName: string, body: PagerDutyServiceKey, _options?: Configuration): Promise<RequestContext>;
}
export declare class PagerDutyIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPagerDutyIntegrationService(response: ResponseContext): Promise<PagerDutyServiceName>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePagerDutyIntegrationService(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPagerDutyIntegrationService(response: ResponseContext): Promise<PagerDutyServiceName>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePagerDutyIntegrationService(response: ResponseContext): Promise<void>;
}
export interface PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest {
    /**
     * Create a new service object request body.
     * @type PagerDutyService
     */
    body: PagerDutyService;
}
export interface PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest {
    /**
     * The service name
     * @type string
     */
    serviceName: string;
}
export interface PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest {
    /**
     * The service name.
     * @type string
     */
    serviceName: string;
}
export interface PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest {
    /**
     * The service name
     * @type string
     */
    serviceName: string;
    /**
     * Update an existing service object request body.
     * @type PagerDutyServiceKey
     */
    body: PagerDutyServiceKey;
}
export declare class PagerDutyIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PagerDutyIntegrationApiRequestFactory, responseProcessor?: PagerDutyIntegrationApiResponseProcessor);
    /**
     * Create a new service object in the PagerDuty integration.
     * @param param The request object
     */
    createPagerDutyIntegrationService(param: PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest, options?: Configuration): Promise<PagerDutyServiceName>;
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * @param param The request object
     */
    deletePagerDutyIntegrationService(param: PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest, options?: Configuration): Promise<void>;
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * @param param The request object
     */
    getPagerDutyIntegrationService(param: PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest, options?: Configuration): Promise<PagerDutyServiceName>;
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * @param param The request object
     */
    updatePagerDutyIntegrationService(param: PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest, options?: Configuration): Promise<void>;
}
