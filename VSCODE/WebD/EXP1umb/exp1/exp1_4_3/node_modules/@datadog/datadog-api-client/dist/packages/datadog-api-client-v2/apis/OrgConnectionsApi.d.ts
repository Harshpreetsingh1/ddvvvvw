import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { OrgConnectionCreateRequest } from "../models/OrgConnectionCreateRequest";
import { OrgConnectionListResponse } from "../models/OrgConnectionListResponse";
import { OrgConnectionResponse } from "../models/OrgConnectionResponse";
import { OrgConnectionUpdateRequest } from "../models/OrgConnectionUpdateRequest";
export declare class OrgConnectionsApiRequestFactory extends BaseAPIRequestFactory {
    createOrgConnections(body: OrgConnectionCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOrgConnections(connectionId: string, _options?: Configuration): Promise<RequestContext>;
    listOrgConnections(sinkOrgId?: string, sourceOrgId?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    updateOrgConnections(connectionId: string, body: OrgConnectionUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class OrgConnectionsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrgConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOrgConnections(response: ResponseContext): Promise<OrgConnectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrgConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOrgConnections(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrgConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOrgConnections(response: ResponseContext): Promise<OrgConnectionListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrgConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOrgConnections(response: ResponseContext): Promise<OrgConnectionResponse>;
}
export interface OrgConnectionsApiCreateOrgConnectionsRequest {
    /**
     * @type OrgConnectionCreateRequest
     */
    body: OrgConnectionCreateRequest;
}
export interface OrgConnectionsApiDeleteOrgConnectionsRequest {
    /**
     * The unique identifier of the org connection.
     * @type string
     */
    connectionId: string;
}
export interface OrgConnectionsApiListOrgConnectionsRequest {
    /**
     * The Org ID of the sink org.
     * @type string
     */
    sinkOrgId?: string;
    /**
     * The Org ID of the source org.
     * @type string
     */
    sourceOrgId?: string;
    /**
     * The limit of number of entries you want to return. Default is 1000.
     * @type number
     */
    limit?: number;
    /**
     * The pagination offset which you want to query from. Default is 0.
     * @type number
     */
    offset?: number;
}
export interface OrgConnectionsApiUpdateOrgConnectionsRequest {
    /**
     * The unique identifier of the org connection.
     * @type string
     */
    connectionId: string;
    /**
     * @type OrgConnectionUpdateRequest
     */
    body: OrgConnectionUpdateRequest;
}
export declare class OrgConnectionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OrgConnectionsApiRequestFactory, responseProcessor?: OrgConnectionsApiResponseProcessor);
    /**
     * Create a new org connection between the current org and a target org.
     * @param param The request object
     */
    createOrgConnections(param: OrgConnectionsApiCreateOrgConnectionsRequest, options?: Configuration): Promise<OrgConnectionResponse>;
    /**
     * Delete an existing org connection.
     * @param param The request object
     */
    deleteOrgConnections(param: OrgConnectionsApiDeleteOrgConnectionsRequest, options?: Configuration): Promise<void>;
    /**
     * Returns a list of org connections.
     * @param param The request object
     */
    listOrgConnections(param?: OrgConnectionsApiListOrgConnectionsRequest, options?: Configuration): Promise<OrgConnectionListResponse>;
    /**
     * Update an existing org connection.
     * @param param The request object
     */
    updateOrgConnections(param: OrgConnectionsApiUpdateOrgConnectionsRequest, options?: Configuration): Promise<OrgConnectionResponse>;
}
