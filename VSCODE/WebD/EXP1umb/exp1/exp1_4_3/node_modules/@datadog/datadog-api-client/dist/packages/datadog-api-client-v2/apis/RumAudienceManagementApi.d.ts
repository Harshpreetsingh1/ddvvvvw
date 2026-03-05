import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateConnectionRequest } from "../models/CreateConnectionRequest";
import { FacetInfoRequest } from "../models/FacetInfoRequest";
import { FacetInfoResponse } from "../models/FacetInfoResponse";
import { GetMappingResponse } from "../models/GetMappingResponse";
import { ListConnectionsResponse } from "../models/ListConnectionsResponse";
import { QueryAccountRequest } from "../models/QueryAccountRequest";
import { QueryEventFilteredUsersRequest } from "../models/QueryEventFilteredUsersRequest";
import { QueryResponse } from "../models/QueryResponse";
import { QueryUsersRequest } from "../models/QueryUsersRequest";
import { UpdateConnectionRequest } from "../models/UpdateConnectionRequest";
export declare class RumAudienceManagementApiRequestFactory extends BaseAPIRequestFactory {
    createConnection(entity: string, body: CreateConnectionRequest, _options?: Configuration): Promise<RequestContext>;
    deleteConnection(id: string, entity: string, _options?: Configuration): Promise<RequestContext>;
    getAccountFacetInfo(body: FacetInfoRequest, _options?: Configuration): Promise<RequestContext>;
    getMapping(entity: string, _options?: Configuration): Promise<RequestContext>;
    getUserFacetInfo(body: FacetInfoRequest, _options?: Configuration): Promise<RequestContext>;
    listConnections(entity: string, _options?: Configuration): Promise<RequestContext>;
    queryAccounts(body: QueryAccountRequest, _options?: Configuration): Promise<RequestContext>;
    queryEventFilteredUsers(body: QueryEventFilteredUsersRequest, _options?: Configuration): Promise<RequestContext>;
    queryUsers(body: QueryUsersRequest, _options?: Configuration): Promise<RequestContext>;
    updateConnection(entity: string, body: UpdateConnectionRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumAudienceManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    createConnection(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteConnection(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccountFacetInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAccountFacetInfo(response: ResponseContext): Promise<FacetInfoResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMapping(response: ResponseContext): Promise<GetMappingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserFacetInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUserFacetInfo(response: ResponseContext): Promise<FacetInfoResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    listConnections(response: ResponseContext): Promise<ListConnectionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryAccounts(response: ResponseContext): Promise<QueryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryEventFilteredUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryEventFilteredUsers(response: ResponseContext): Promise<QueryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryUsers(response: ResponseContext): Promise<QueryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateConnection(response: ResponseContext): Promise<void>;
}
export interface RumAudienceManagementApiCreateConnectionRequest {
    /**
     * The entity for which to create the connection
     * @type string
     */
    entity: string;
    /**
     * @type CreateConnectionRequest
     */
    body: CreateConnectionRequest;
}
export interface RumAudienceManagementApiDeleteConnectionRequest {
    /**
     * The connection ID to delete
     * @type string
     */
    id: string;
    /**
     * The entity for which to delete the connection
     * @type string
     */
    entity: string;
}
export interface RumAudienceManagementApiGetAccountFacetInfoRequest {
    /**
     * @type FacetInfoRequest
     */
    body: FacetInfoRequest;
}
export interface RumAudienceManagementApiGetMappingRequest {
    /**
     * The entity for which to get the mapping
     * @type string
     */
    entity: string;
}
export interface RumAudienceManagementApiGetUserFacetInfoRequest {
    /**
     * @type FacetInfoRequest
     */
    body: FacetInfoRequest;
}
export interface RumAudienceManagementApiListConnectionsRequest {
    /**
     * The entity for which to list connections
     * @type string
     */
    entity: string;
}
export interface RumAudienceManagementApiQueryAccountsRequest {
    /**
     * @type QueryAccountRequest
     */
    body: QueryAccountRequest;
}
export interface RumAudienceManagementApiQueryEventFilteredUsersRequest {
    /**
     * @type QueryEventFilteredUsersRequest
     */
    body: QueryEventFilteredUsersRequest;
}
export interface RumAudienceManagementApiQueryUsersRequest {
    /**
     * @type QueryUsersRequest
     */
    body: QueryUsersRequest;
}
export interface RumAudienceManagementApiUpdateConnectionRequest {
    /**
     * The entity for which to update the connection
     * @type string
     */
    entity: string;
    /**
     * @type UpdateConnectionRequest
     */
    body: UpdateConnectionRequest;
}
export declare class RumAudienceManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumAudienceManagementApiRequestFactory, responseProcessor?: RumAudienceManagementApiResponseProcessor);
    /**
     * Create a new data connection and its fields for an entity
     * @param param The request object
     */
    createConnection(param: RumAudienceManagementApiCreateConnectionRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an existing data connection for an entity
     * @param param The request object
     */
    deleteConnection(param: RumAudienceManagementApiDeleteConnectionRequest, options?: Configuration): Promise<void>;
    /**
     * Get facet information for account attributes including possible values and counts
     * @param param The request object
     */
    getAccountFacetInfo(param: RumAudienceManagementApiGetAccountFacetInfoRequest, options?: Configuration): Promise<FacetInfoResponse>;
    /**
     * Get entity mapping configuration including all available attributes and their properties
     * @param param The request object
     */
    getMapping(param: RumAudienceManagementApiGetMappingRequest, options?: Configuration): Promise<GetMappingResponse>;
    /**
     * Get facet information for user attributes including possible values and counts
     * @param param The request object
     */
    getUserFacetInfo(param: RumAudienceManagementApiGetUserFacetInfoRequest, options?: Configuration): Promise<FacetInfoResponse>;
    /**
     * List all data connections for an entity
     * @param param The request object
     */
    listConnections(param: RumAudienceManagementApiListConnectionsRequest, options?: Configuration): Promise<ListConnectionsResponse>;
    /**
     * Query accounts with flexible filtering by account properties
     * @param param The request object
     */
    queryAccounts(param: RumAudienceManagementApiQueryAccountsRequest, options?: Configuration): Promise<QueryResponse>;
    /**
     * Query users filtered by both user properties and event platform data
     * @param param The request object
     */
    queryEventFilteredUsers(param: RumAudienceManagementApiQueryEventFilteredUsersRequest, options?: Configuration): Promise<QueryResponse>;
    /**
     * Query users with flexible filtering by user properties, with optional wildcard search
     * @param param The request object
     */
    queryUsers(param: RumAudienceManagementApiQueryUsersRequest, options?: Configuration): Promise<QueryResponse>;
    /**
     * Update an existing data connection by adding, updating, or deleting fields
     * @param param The request object
     */
    updateConnection(param: RumAudienceManagementApiUpdateConnectionRequest, options?: Configuration): Promise<void>;
}
