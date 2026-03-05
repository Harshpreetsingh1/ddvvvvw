import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { IncidentRelatedObject } from "../models/IncidentRelatedObject";
import { IncidentServiceCreateRequest } from "../models/IncidentServiceCreateRequest";
import { IncidentServiceResponse } from "../models/IncidentServiceResponse";
import { IncidentServicesResponse } from "../models/IncidentServicesResponse";
import { IncidentServiceUpdateRequest } from "../models/IncidentServiceUpdateRequest";
export declare class IncidentServicesApiRequestFactory extends BaseAPIRequestFactory {
    createIncidentService(body: IncidentServiceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteIncidentService(serviceId: string, _options?: Configuration): Promise<RequestContext>;
    getIncidentService(serviceId: string, include?: IncidentRelatedObject, _options?: Configuration): Promise<RequestContext>;
    listIncidentServices(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, _options?: Configuration): Promise<RequestContext>;
    updateIncidentService(serviceId: string, body: IncidentServiceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class IncidentServicesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    createIncidentService(response: ResponseContext): Promise<IncidentServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIncidentService(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentService(response: ResponseContext): Promise<IncidentServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidentServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIncidentServices(response: ResponseContext): Promise<IncidentServicesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIncidentService(response: ResponseContext): Promise<IncidentServiceResponse>;
}
export interface IncidentServicesApiCreateIncidentServiceRequest {
    /**
     * Incident Service Payload.
     * @type IncidentServiceCreateRequest
     */
    body: IncidentServiceCreateRequest;
}
export interface IncidentServicesApiDeleteIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     */
    serviceId: string;
}
export interface IncidentServicesApiGetIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     */
    serviceId: string;
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     */
    include?: IncidentRelatedObject;
}
export interface IncidentServicesApiListIncidentServicesRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     */
    include?: IncidentRelatedObject;
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * A search query that filters services by name.
     * @type string
     */
    filter?: string;
}
export interface IncidentServicesApiUpdateIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     */
    serviceId: string;
    /**
     * Incident Service Payload.
     * @type IncidentServiceUpdateRequest
     */
    body: IncidentServiceUpdateRequest;
}
export declare class IncidentServicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IncidentServicesApiRequestFactory, responseProcessor?: IncidentServicesApiResponseProcessor);
    /**
     * Creates a new incident service.
     * @param param The request object
     */
    createIncidentService(param: IncidentServicesApiCreateIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse>;
    /**
     * Deletes an existing incident service.
     * @param param The request object
     */
    deleteIncidentService(param: IncidentServicesApiDeleteIncidentServiceRequest, options?: Configuration): Promise<void>;
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided,
     * the included attribute will contain the users related to these incident services.
     * @param param The request object
     */
    getIncidentService(param: IncidentServicesApiGetIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse>;
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * @param param The request object
     */
    listIncidentServices(param?: IncidentServicesApiListIncidentServicesRequest, options?: Configuration): Promise<IncidentServicesResponse>;
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * @param param The request object
     */
    updateIncidentService(param: IncidentServicesApiUpdateIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse>;
}
