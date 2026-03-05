import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { PermissionsResponse } from "../models/PermissionsResponse";
import { RelationshipToPermission } from "../models/RelationshipToPermission";
import { RelationshipToUser } from "../models/RelationshipToUser";
import { RoleCloneRequest } from "../models/RoleCloneRequest";
import { RoleCreateRequest } from "../models/RoleCreateRequest";
import { RoleCreateResponse } from "../models/RoleCreateResponse";
import { RoleResponse } from "../models/RoleResponse";
import { RolesResponse } from "../models/RolesResponse";
import { RolesSort } from "../models/RolesSort";
import { RoleTemplateArray } from "../models/RoleTemplateArray";
import { RoleUpdateRequest } from "../models/RoleUpdateRequest";
import { RoleUpdateResponse } from "../models/RoleUpdateResponse";
import { UsersResponse } from "../models/UsersResponse";
export declare class RolesApiRequestFactory extends BaseAPIRequestFactory {
    addPermissionToRole(roleId: string, body: RelationshipToPermission, _options?: Configuration): Promise<RequestContext>;
    addUserToRole(roleId: string, body: RelationshipToUser, _options?: Configuration): Promise<RequestContext>;
    cloneRole(roleId: string, body: RoleCloneRequest, _options?: Configuration): Promise<RequestContext>;
    createRole(body: RoleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteRole(roleId: string, _options?: Configuration): Promise<RequestContext>;
    getRole(roleId: string, _options?: Configuration): Promise<RequestContext>;
    listPermissions(_options?: Configuration): Promise<RequestContext>;
    listRolePermissions(roleId: string, _options?: Configuration): Promise<RequestContext>;
    listRoles(pageSize?: number, pageNumber?: number, sort?: RolesSort, filter?: string, filterId?: string, _options?: Configuration): Promise<RequestContext>;
    listRoleTemplates(_options?: Configuration): Promise<RequestContext>;
    listRoleUsers(roleId: string, pageSize?: number, pageNumber?: number, sort?: string, filter?: string, _options?: Configuration): Promise<RequestContext>;
    removePermissionFromRole(roleId: string, body: RelationshipToPermission, _options?: Configuration): Promise<RequestContext>;
    removeUserFromRole(roleId: string, body: RelationshipToUser, _options?: Configuration): Promise<RequestContext>;
    updateRole(roleId: string, body: RoleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RolesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addPermissionToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    addPermissionToRole(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    addUserToRole(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    cloneRole(response: ResponseContext): Promise<RoleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRole(response: ResponseContext): Promise<RoleCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRole(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRole(response: ResponseContext): Promise<RoleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listPermissions(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRolePermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRolePermissions(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRoles(response: ResponseContext): Promise<RolesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRoleTemplates(response: ResponseContext): Promise<RoleTemplateArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRoleUsers(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removePermissionFromRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    removePermissionFromRole(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserFromRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeUserFromRole(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRole(response: ResponseContext): Promise<RoleUpdateResponse>;
}
export interface RolesApiAddPermissionToRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
    /**
     * @type RelationshipToPermission
     */
    body: RelationshipToPermission;
}
export interface RolesApiAddUserToRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
    /**
     * @type RelationshipToUser
     */
    body: RelationshipToUser;
}
export interface RolesApiCloneRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
    /**
     * @type RoleCloneRequest
     */
    body: RoleCloneRequest;
}
export interface RolesApiCreateRoleRequest {
    /**
     * @type RoleCreateRequest
     */
    body: RoleCreateRequest;
}
export interface RolesApiDeleteRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
}
export interface RolesApiGetRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
}
export interface RolesApiListRolePermissionsRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
}
export interface RolesApiListRolesRequest {
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
     * Sort roles depending on the given field. Sort order is **ascending** by default.
     * Sort order is **descending** if the field is prefixed by a negative sign, for example:
     * `sort=-name`.
     * @type RolesSort
     */
    sort?: RolesSort;
    /**
     * Filter all roles by the given string.
     * @type string
     */
    filter?: string;
    /**
     * Filter all roles by the given list of role IDs.
     * @type string
     */
    filterId?: string;
}
export interface RolesApiListRoleUsersRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
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
     * User attribute to order results by. Sort order is **ascending** by default.
     * Sort order is **descending** if the field is prefixed by a negative sign,
     * for example `sort=-name`. Options: `name`, `email`, `status`.
     * @type string
     */
    sort?: string;
    /**
     * Filter all users by the given string. Defaults to no filtering.
     * @type string
     */
    filter?: string;
}
export interface RolesApiRemovePermissionFromRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
    /**
     * @type RelationshipToPermission
     */
    body: RelationshipToPermission;
}
export interface RolesApiRemoveUserFromRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
    /**
     * @type RelationshipToUser
     */
    body: RelationshipToUser;
}
export interface RolesApiUpdateRoleRequest {
    /**
     * The unique identifier of the role.
     * @type string
     */
    roleId: string;
    /**
     * @type RoleUpdateRequest
     */
    body: RoleUpdateRequest;
}
export declare class RolesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor);
    /**
     * Adds a permission to a role.
     * @param param The request object
     */
    addPermissionToRole(param: RolesApiAddPermissionToRoleRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Adds a user to a role.
     * @param param The request object
     */
    addUserToRole(param: RolesApiAddUserToRoleRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Clone an existing role
     * @param param The request object
     */
    cloneRole(param: RolesApiCloneRoleRequest, options?: Configuration): Promise<RoleResponse>;
    /**
     * Create a new role for your organization.
     * @param param The request object
     */
    createRole(param: RolesApiCreateRoleRequest, options?: Configuration): Promise<RoleCreateResponse>;
    /**
     * Disables a role.
     * @param param The request object
     */
    deleteRole(param: RolesApiDeleteRoleRequest, options?: Configuration): Promise<void>;
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * @param param The request object
     */
    getRole(param: RolesApiGetRoleRequest, options?: Configuration): Promise<RoleResponse>;
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * @param param The request object
     */
    listPermissions(options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Returns a list of all permissions for a single role.
     * @param param The request object
     */
    listRolePermissions(param: RolesApiListRolePermissionsRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Returns all roles, including their names and their unique identifiers.
     * @param param The request object
     */
    listRoles(param?: RolesApiListRolesRequest, options?: Configuration): Promise<RolesResponse>;
    /**
     * List all role templates
     * @param param The request object
     */
    listRoleTemplates(options?: Configuration): Promise<RoleTemplateArray>;
    /**
     * Gets all users of a role.
     * @param param The request object
     */
    listRoleUsers(param: RolesApiListRoleUsersRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Removes a permission from a role.
     * @param param The request object
     */
    removePermissionFromRole(param: RolesApiRemovePermissionFromRoleRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Removes a user from a role.
     * @param param The request object
     */
    removeUserFromRole(param: RolesApiRemoveUserFromRoleRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * @param param The request object
     */
    updateRole(param: RolesApiUpdateRoleRequest, options?: Configuration): Promise<RoleUpdateResponse>;
}
