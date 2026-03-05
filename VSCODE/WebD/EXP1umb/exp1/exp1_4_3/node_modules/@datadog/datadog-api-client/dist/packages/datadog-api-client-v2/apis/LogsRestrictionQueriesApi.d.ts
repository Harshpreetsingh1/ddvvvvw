import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { RelationshipToRole } from "../models/RelationshipToRole";
import { RestrictionQueryCreatePayload } from "../models/RestrictionQueryCreatePayload";
import { RestrictionQueryListResponse } from "../models/RestrictionQueryListResponse";
import { RestrictionQueryRolesResponse } from "../models/RestrictionQueryRolesResponse";
import { RestrictionQueryUpdatePayload } from "../models/RestrictionQueryUpdatePayload";
import { RestrictionQueryWithoutRelationshipsResponse } from "../models/RestrictionQueryWithoutRelationshipsResponse";
import { RestrictionQueryWithRelationshipsResponse } from "../models/RestrictionQueryWithRelationshipsResponse";
export declare class LogsRestrictionQueriesApiRequestFactory extends BaseAPIRequestFactory {
    addRoleToRestrictionQuery(restrictionQueryId: string, body: RelationshipToRole, _options?: Configuration): Promise<RequestContext>;
    createRestrictionQuery(body: RestrictionQueryCreatePayload, _options?: Configuration): Promise<RequestContext>;
    deleteRestrictionQuery(restrictionQueryId: string, _options?: Configuration): Promise<RequestContext>;
    getRestrictionQuery(restrictionQueryId: string, _options?: Configuration): Promise<RequestContext>;
    getRoleRestrictionQuery(roleId: string, _options?: Configuration): Promise<RequestContext>;
    listRestrictionQueries(pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    listRestrictionQueryRoles(restrictionQueryId: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    listUserRestrictionQueries(userId: string, _options?: Configuration): Promise<RequestContext>;
    removeRoleFromRestrictionQuery(restrictionQueryId: string, body: RelationshipToRole, _options?: Configuration): Promise<RequestContext>;
    replaceRestrictionQuery(restrictionQueryId: string, body: RestrictionQueryUpdatePayload, _options?: Configuration): Promise<RequestContext>;
    updateRestrictionQuery(restrictionQueryId: string, body: RestrictionQueryUpdatePayload, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsRestrictionQueriesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRoleToRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    addRoleToRestrictionQuery(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRestrictionQuery(response: ResponseContext): Promise<RestrictionQueryWithoutRelationshipsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRestrictionQuery(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRestrictionQuery(response: ResponseContext): Promise<RestrictionQueryWithRelationshipsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRoleRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRoleRestrictionQuery(response: ResponseContext): Promise<RestrictionQueryListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRestrictionQueries
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRestrictionQueries(response: ResponseContext): Promise<RestrictionQueryListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRestrictionQueryRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRestrictionQueryRoles(response: ResponseContext): Promise<RestrictionQueryRolesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserRestrictionQueries
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserRestrictionQueries(response: ResponseContext): Promise<RestrictionQueryListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRoleFromRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeRoleFromRestrictionQuery(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceRestrictionQuery(response: ResponseContext): Promise<RestrictionQueryWithoutRelationshipsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRestrictionQuery(response: ResponseContext): Promise<RestrictionQueryWithoutRelationshipsResponse>;
}
export interface LogsRestrictionQueriesApiAddRoleToRestrictionQueryRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
    /**
     * @type RelationshipToRole
     */
    body: RelationshipToRole;
}
export interface LogsRestrictionQueriesApiCreateRestrictionQueryRequest {
    /**
     * @type RestrictionQueryCreatePayload
     */
    body: RestrictionQueryCreatePayload;
}
export interface LogsRestrictionQueriesApiDeleteRestrictionQueryRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
}
export interface LogsRestrictionQueriesApiGetRestrictionQueryRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
}
export interface LogsRestrictionQueriesApiGetRoleRestrictionQueryRequest {
    /**
     * The ID of the role.
     * @type string
     */
    roleId: string;
}
export interface LogsRestrictionQueriesApiListRestrictionQueriesRequest {
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
}
export interface LogsRestrictionQueriesApiListRestrictionQueryRolesRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
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
}
export interface LogsRestrictionQueriesApiListUserRestrictionQueriesRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userId: string;
}
export interface LogsRestrictionQueriesApiRemoveRoleFromRestrictionQueryRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
    /**
     * @type RelationshipToRole
     */
    body: RelationshipToRole;
}
export interface LogsRestrictionQueriesApiReplaceRestrictionQueryRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
    /**
     * @type RestrictionQueryUpdatePayload
     */
    body: RestrictionQueryUpdatePayload;
}
export interface LogsRestrictionQueriesApiUpdateRestrictionQueryRequest {
    /**
     * The ID of the restriction query.
     * @type string
     */
    restrictionQueryId: string;
    /**
     * @type RestrictionQueryUpdatePayload
     */
    body: RestrictionQueryUpdatePayload;
}
export declare class LogsRestrictionQueriesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsRestrictionQueriesApiRequestFactory, responseProcessor?: LogsRestrictionQueriesApiResponseProcessor);
    /**
     * Adds a role to a restriction query.
     *
     * **Note**: This operation automatically grants the `logs_read_data` permission to the role if it doesn't already have it.
     * @param param The request object
     */
    addRoleToRestrictionQuery(param: LogsRestrictionQueriesApiAddRoleToRestrictionQueryRequest, options?: Configuration): Promise<void>;
    /**
     * Create a new restriction query for your organization.
     * @param param The request object
     */
    createRestrictionQuery(param: LogsRestrictionQueriesApiCreateRestrictionQueryRequest, options?: Configuration): Promise<RestrictionQueryWithoutRelationshipsResponse>;
    /**
     * Deletes a restriction query.
     * @param param The request object
     */
    deleteRestrictionQuery(param: LogsRestrictionQueriesApiDeleteRestrictionQueryRequest, options?: Configuration): Promise<void>;
    /**
     * Get a restriction query in the organization specified by the restriction query's `restriction_query_id`.
     * @param param The request object
     */
    getRestrictionQuery(param: LogsRestrictionQueriesApiGetRestrictionQueryRequest, options?: Configuration): Promise<RestrictionQueryWithRelationshipsResponse>;
    /**
     * Get restriction query for a given role.
     * @param param The request object
     */
    getRoleRestrictionQuery(param: LogsRestrictionQueriesApiGetRoleRestrictionQueryRequest, options?: Configuration): Promise<RestrictionQueryListResponse>;
    /**
     * Returns all restriction queries, including their names and IDs.
     * @param param The request object
     */
    listRestrictionQueries(param?: LogsRestrictionQueriesApiListRestrictionQueriesRequest, options?: Configuration): Promise<RestrictionQueryListResponse>;
    /**
     * Returns all roles that have a given restriction query.
     * @param param The request object
     */
    listRestrictionQueryRoles(param: LogsRestrictionQueriesApiListRestrictionQueryRolesRequest, options?: Configuration): Promise<RestrictionQueryRolesResponse>;
    /**
     * Get all restriction queries for a given user.
     * @param param The request object
     */
    listUserRestrictionQueries(param: LogsRestrictionQueriesApiListUserRestrictionQueriesRequest, options?: Configuration): Promise<RestrictionQueryListResponse>;
    /**
     * Removes a role from a restriction query.
     * @param param The request object
     */
    removeRoleFromRestrictionQuery(param: LogsRestrictionQueriesApiRemoveRoleFromRestrictionQueryRequest, options?: Configuration): Promise<void>;
    /**
     * Replace a restriction query.
     * @param param The request object
     */
    replaceRestrictionQuery(param: LogsRestrictionQueriesApiReplaceRestrictionQueryRequest, options?: Configuration): Promise<RestrictionQueryWithoutRelationshipsResponse>;
    /**
     * Edit a restriction query.
     * @param param The request object
     */
    updateRestrictionQuery(param: LogsRestrictionQueriesApiUpdateRestrictionQueryRequest, options?: Configuration): Promise<RestrictionQueryWithoutRelationshipsResponse>;
}
