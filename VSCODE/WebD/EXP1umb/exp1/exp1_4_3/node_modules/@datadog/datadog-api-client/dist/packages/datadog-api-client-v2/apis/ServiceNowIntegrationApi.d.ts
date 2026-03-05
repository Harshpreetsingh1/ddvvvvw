import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ServiceNowAssignmentGroupsResponse } from "../models/ServiceNowAssignmentGroupsResponse";
import { ServiceNowBusinessServicesResponse } from "../models/ServiceNowBusinessServicesResponse";
import { ServiceNowInstancesResponse } from "../models/ServiceNowInstancesResponse";
import { ServiceNowTemplateCreateRequest } from "../models/ServiceNowTemplateCreateRequest";
import { ServiceNowTemplateResponse } from "../models/ServiceNowTemplateResponse";
import { ServiceNowTemplatesResponse } from "../models/ServiceNowTemplatesResponse";
import { ServiceNowTemplateUpdateRequest } from "../models/ServiceNowTemplateUpdateRequest";
import { ServiceNowUsersResponse } from "../models/ServiceNowUsersResponse";
export declare class ServiceNowIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createServiceNowTemplate(body: ServiceNowTemplateCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteServiceNowTemplate(templateId: string, _options?: Configuration): Promise<RequestContext>;
    getServiceNowTemplate(templateId: string, _options?: Configuration): Promise<RequestContext>;
    listServiceNowAssignmentGroups(instanceId: string, _options?: Configuration): Promise<RequestContext>;
    listServiceNowBusinessServices(instanceId: string, _options?: Configuration): Promise<RequestContext>;
    listServiceNowInstances(_options?: Configuration): Promise<RequestContext>;
    listServiceNowTemplates(_options?: Configuration): Promise<RequestContext>;
    listServiceNowUsers(instanceId: string, _options?: Configuration): Promise<RequestContext>;
    updateServiceNowTemplate(templateId: string, body: ServiceNowTemplateUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceNowIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServiceNowTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    createServiceNowTemplate(response: ResponseContext): Promise<ServiceNowTemplateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServiceNowTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteServiceNowTemplate(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceNowTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getServiceNowTemplate(response: ResponseContext): Promise<ServiceNowTemplateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceNowAssignmentGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceNowAssignmentGroups(response: ResponseContext): Promise<ServiceNowAssignmentGroupsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceNowBusinessServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceNowBusinessServices(response: ResponseContext): Promise<ServiceNowBusinessServicesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceNowInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceNowInstances(response: ResponseContext): Promise<ServiceNowInstancesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceNowTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceNowTemplates(response: ResponseContext): Promise<ServiceNowTemplatesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceNowUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceNowUsers(response: ResponseContext): Promise<ServiceNowUsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateServiceNowTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateServiceNowTemplate(response: ResponseContext): Promise<ServiceNowTemplateResponse>;
}
export interface ServiceNowIntegrationApiCreateServiceNowTemplateRequest {
    /**
     * @type ServiceNowTemplateCreateRequest
     */
    body: ServiceNowTemplateCreateRequest;
}
export interface ServiceNowIntegrationApiDeleteServiceNowTemplateRequest {
    /**
     * The ID of the ServiceNow template to delete
     * @type string
     */
    templateId: string;
}
export interface ServiceNowIntegrationApiGetServiceNowTemplateRequest {
    /**
     * The ID of the ServiceNow template to retrieve
     * @type string
     */
    templateId: string;
}
export interface ServiceNowIntegrationApiListServiceNowAssignmentGroupsRequest {
    /**
     * The ID of the ServiceNow instance
     * @type string
     */
    instanceId: string;
}
export interface ServiceNowIntegrationApiListServiceNowBusinessServicesRequest {
    /**
     * The ID of the ServiceNow instance
     * @type string
     */
    instanceId: string;
}
export interface ServiceNowIntegrationApiListServiceNowUsersRequest {
    /**
     * The ID of the ServiceNow instance
     * @type string
     */
    instanceId: string;
}
export interface ServiceNowIntegrationApiUpdateServiceNowTemplateRequest {
    /**
     * The ID of the ServiceNow template to update
     * @type string
     */
    templateId: string;
    /**
     * @type ServiceNowTemplateUpdateRequest
     */
    body: ServiceNowTemplateUpdateRequest;
}
export declare class ServiceNowIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceNowIntegrationApiRequestFactory, responseProcessor?: ServiceNowIntegrationApiResponseProcessor);
    /**
     * Create a new ServiceNow template.
     * @param param The request object
     */
    createServiceNowTemplate(param: ServiceNowIntegrationApiCreateServiceNowTemplateRequest, options?: Configuration): Promise<ServiceNowTemplateResponse>;
    /**
     * Delete a ServiceNow template by ID.
     * @param param The request object
     */
    deleteServiceNowTemplate(param: ServiceNowIntegrationApiDeleteServiceNowTemplateRequest, options?: Configuration): Promise<void>;
    /**
     * Get a ServiceNow template by ID.
     * @param param The request object
     */
    getServiceNowTemplate(param: ServiceNowIntegrationApiGetServiceNowTemplateRequest, options?: Configuration): Promise<ServiceNowTemplateResponse>;
    /**
     * Get all assignment groups for a ServiceNow instance.
     * @param param The request object
     */
    listServiceNowAssignmentGroups(param: ServiceNowIntegrationApiListServiceNowAssignmentGroupsRequest, options?: Configuration): Promise<ServiceNowAssignmentGroupsResponse>;
    /**
     * Get all business services for a ServiceNow instance.
     * @param param The request object
     */
    listServiceNowBusinessServices(param: ServiceNowIntegrationApiListServiceNowBusinessServicesRequest, options?: Configuration): Promise<ServiceNowBusinessServicesResponse>;
    /**
     * Get all ServiceNow instances for the organization.
     * @param param The request object
     */
    listServiceNowInstances(options?: Configuration): Promise<ServiceNowInstancesResponse>;
    /**
     * Get all ServiceNow templates for the organization.
     * @param param The request object
     */
    listServiceNowTemplates(options?: Configuration): Promise<ServiceNowTemplatesResponse>;
    /**
     * Get all users for a ServiceNow instance.
     * @param param The request object
     */
    listServiceNowUsers(param: ServiceNowIntegrationApiListServiceNowUsersRequest, options?: Configuration): Promise<ServiceNowUsersResponse>;
    /**
     * Update a ServiceNow template by ID.
     * @param param The request object
     */
    updateServiceNowTemplate(param: ServiceNowIntegrationApiUpdateServiceNowTemplateRequest, options?: Configuration): Promise<ServiceNowTemplateResponse>;
}
