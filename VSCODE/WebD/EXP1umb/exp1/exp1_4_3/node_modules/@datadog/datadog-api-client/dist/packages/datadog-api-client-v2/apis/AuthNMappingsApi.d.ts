import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AuthNMappingCreateRequest } from "../models/AuthNMappingCreateRequest";
import { AuthNMappingResourceType } from "../models/AuthNMappingResourceType";
import { AuthNMappingResponse } from "../models/AuthNMappingResponse";
import { AuthNMappingsResponse } from "../models/AuthNMappingsResponse";
import { AuthNMappingsSort } from "../models/AuthNMappingsSort";
import { AuthNMappingUpdateRequest } from "../models/AuthNMappingUpdateRequest";
export declare class AuthNMappingsApiRequestFactory extends BaseAPIRequestFactory {
    createAuthNMapping(body: AuthNMappingCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAuthNMapping(authnMappingId: string, _options?: Configuration): Promise<RequestContext>;
    getAuthNMapping(authnMappingId: string, _options?: Configuration): Promise<RequestContext>;
    listAuthNMappings(pageSize?: number, pageNumber?: number, sort?: AuthNMappingsSort, filter?: string, resourceType?: AuthNMappingResourceType, _options?: Configuration): Promise<RequestContext>;
    updateAuthNMapping(authnMappingId: string, body: AuthNMappingUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AuthNMappingsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthNMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAuthNMapping(response: ResponseContext): Promise<AuthNMappingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAuthNMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAuthNMapping(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthNMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAuthNMapping(response: ResponseContext): Promise<AuthNMappingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuthNMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAuthNMappings(response: ResponseContext): Promise<AuthNMappingsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAuthNMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAuthNMapping(response: ResponseContext): Promise<AuthNMappingResponse>;
}
export interface AuthNMappingsApiCreateAuthNMappingRequest {
    /**
     * @type AuthNMappingCreateRequest
     */
    body: AuthNMappingCreateRequest;
}
export interface AuthNMappingsApiDeleteAuthNMappingRequest {
    /**
     * The UUID of the AuthN Mapping.
     * @type string
     */
    authnMappingId: string;
}
export interface AuthNMappingsApiGetAuthNMappingRequest {
    /**
     * The UUID of the AuthN Mapping.
     * @type string
     */
    authnMappingId: string;
}
export interface AuthNMappingsApiListAuthNMappingsRequest {
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
     * Sort AuthN Mappings depending on the given field.
     * @type AuthNMappingsSort
     */
    sort?: AuthNMappingsSort;
    /**
     * Filter all mappings by the given string.
     * @type string
     */
    filter?: string;
    /**
     * Filter by mapping resource type. Defaults to "role" if not specified.
     * @type AuthNMappingResourceType
     */
    resourceType?: AuthNMappingResourceType;
}
export interface AuthNMappingsApiUpdateAuthNMappingRequest {
    /**
     * The UUID of the AuthN Mapping.
     * @type string
     */
    authnMappingId: string;
    /**
     * @type AuthNMappingUpdateRequest
     */
    body: AuthNMappingUpdateRequest;
}
export declare class AuthNMappingsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthNMappingsApiRequestFactory, responseProcessor?: AuthNMappingsApiResponseProcessor);
    /**
     * Create an AuthN Mapping.
     * @param param The request object
     */
    createAuthNMapping(param: AuthNMappingsApiCreateAuthNMappingRequest, options?: Configuration): Promise<AuthNMappingResponse>;
    /**
     * Delete an AuthN Mapping specified by AuthN Mapping UUID.
     * @param param The request object
     */
    deleteAuthNMapping(param: AuthNMappingsApiDeleteAuthNMappingRequest, options?: Configuration): Promise<void>;
    /**
     * Get an AuthN Mapping specified by the AuthN Mapping UUID.
     * @param param The request object
     */
    getAuthNMapping(param: AuthNMappingsApiGetAuthNMappingRequest, options?: Configuration): Promise<AuthNMappingResponse>;
    /**
     * List all AuthN Mappings in the org.
     * @param param The request object
     */
    listAuthNMappings(param?: AuthNMappingsApiListAuthNMappingsRequest, options?: Configuration): Promise<AuthNMappingsResponse>;
    /**
     * Edit an AuthN Mapping.
     * @param param The request object
     */
    updateAuthNMapping(param: AuthNMappingsApiUpdateAuthNMappingRequest, options?: Configuration): Promise<AuthNMappingResponse>;
}
