import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ServiceDefinitionCreateResponse } from "../models/ServiceDefinitionCreateResponse";
import { ServiceDefinitionData } from "../models/ServiceDefinitionData";
import { ServiceDefinitionGetResponse } from "../models/ServiceDefinitionGetResponse";
import { ServiceDefinitionSchemaVersions } from "../models/ServiceDefinitionSchemaVersions";
import { ServiceDefinitionsCreateRequest } from "../models/ServiceDefinitionsCreateRequest";
import { ServiceDefinitionsListResponse } from "../models/ServiceDefinitionsListResponse";
export declare class ServiceDefinitionApiRequestFactory extends BaseAPIRequestFactory {
    createOrUpdateServiceDefinitions(body: ServiceDefinitionsCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteServiceDefinition(serviceName: string, _options?: Configuration): Promise<RequestContext>;
    getServiceDefinition(serviceName: string, schemaVersion?: ServiceDefinitionSchemaVersions, _options?: Configuration): Promise<RequestContext>;
    listServiceDefinitions(pageSize?: number, pageNumber?: number, schemaVersion?: ServiceDefinitionSchemaVersions, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceDefinitionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrUpdateServiceDefinitions
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOrUpdateServiceDefinitions(response: ResponseContext): Promise<ServiceDefinitionCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServiceDefinition
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteServiceDefinition(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceDefinition
     * @throws ApiException if the response code was not in [200, 299]
     */
    getServiceDefinition(response: ResponseContext): Promise<ServiceDefinitionGetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServiceDefinitions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceDefinitions(response: ResponseContext): Promise<ServiceDefinitionsListResponse>;
}
export interface ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest {
    /**
     * Service Definition YAML/JSON.
     * @type ServiceDefinitionsCreateRequest
     */
    body: ServiceDefinitionsCreateRequest;
}
export interface ServiceDefinitionApiDeleteServiceDefinitionRequest {
    /**
     * The name of the service.
     * @type string
     */
    serviceName: string;
}
export interface ServiceDefinitionApiGetServiceDefinitionRequest {
    /**
     * The name of the service.
     * @type string
     */
    serviceName: string;
    /**
     * The schema version desired in the response.
     * @type ServiceDefinitionSchemaVersions
     */
    schemaVersion?: ServiceDefinitionSchemaVersions;
}
export interface ServiceDefinitionApiListServiceDefinitionsRequest {
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     */
    pageNumber?: number;
    /**
     * The schema version desired in the response.
     * @type ServiceDefinitionSchemaVersions
     */
    schemaVersion?: ServiceDefinitionSchemaVersions;
}
export declare class ServiceDefinitionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceDefinitionApiRequestFactory, responseProcessor?: ServiceDefinitionApiResponseProcessor);
    /**
     * Create or update service definition in the Datadog Service Catalog.
     * @param param The request object
     */
    createOrUpdateServiceDefinitions(param: ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest, options?: Configuration): Promise<ServiceDefinitionCreateResponse>;
    /**
     * Delete a single service definition in the Datadog Service Catalog.
     * @param param The request object
     */
    deleteServiceDefinition(param: ServiceDefinitionApiDeleteServiceDefinitionRequest, options?: Configuration): Promise<void>;
    /**
     * Get a single service definition from the Datadog Service Catalog.
     * @param param The request object
     */
    getServiceDefinition(param: ServiceDefinitionApiGetServiceDefinitionRequest, options?: Configuration): Promise<ServiceDefinitionGetResponse>;
    /**
     * Get a list of all service definitions from the Datadog Service Catalog.
     * @param param The request object
     */
    listServiceDefinitions(param?: ServiceDefinitionApiListServiceDefinitionsRequest, options?: Configuration): Promise<ServiceDefinitionsListResponse>;
    /**
     * Provide a paginated version of listServiceDefinitions returning a generator with all the items.
     */
    listServiceDefinitionsWithPagination(param?: ServiceDefinitionApiListServiceDefinitionsRequest, options?: Configuration): AsyncGenerator<ServiceDefinitionData>;
}
