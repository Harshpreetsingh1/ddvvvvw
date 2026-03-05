import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { PermissionsResponse } from "../models/PermissionsResponse";
import { QuerySortOrder } from "../models/QuerySortOrder";
import { User } from "../models/User";
import { UserCreateRequest } from "../models/UserCreateRequest";
import { UserInvitationResponse } from "../models/UserInvitationResponse";
import { UserInvitationsRequest } from "../models/UserInvitationsRequest";
import { UserInvitationsResponse } from "../models/UserInvitationsResponse";
import { UserResponse } from "../models/UserResponse";
import { UsersResponse } from "../models/UsersResponse";
import { UserUpdateRequest } from "../models/UserUpdateRequest";
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    createUser(body: UserCreateRequest, _options?: Configuration): Promise<RequestContext>;
    disableUser(userId: string, _options?: Configuration): Promise<RequestContext>;
    getInvitation(userInvitationUuid: string, _options?: Configuration): Promise<RequestContext>;
    getUser(userId: string, _options?: Configuration): Promise<RequestContext>;
    listUserOrganizations(userId: string, _options?: Configuration): Promise<RequestContext>;
    listUserPermissions(userId: string, _options?: Configuration): Promise<RequestContext>;
    listUsers(pageSize?: number, pageNumber?: number, sort?: string, sortDir?: QuerySortOrder, filter?: string, filterStatus?: string, _options?: Configuration): Promise<RequestContext>;
    sendInvitations(body: UserInvitationsRequest, _options?: Configuration): Promise<RequestContext>;
    updateUser(userId: string, body: UserUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    createUser(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    disableUser(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInvitation
     * @throws ApiException if the response code was not in [200, 299]
     */
    getInvitation(response: ResponseContext): Promise<UserInvitationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUser(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserOrganizations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserOrganizations(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserPermissions(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUsers(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendInvitations
     * @throws ApiException if the response code was not in [200, 299]
     */
    sendInvitations(response: ResponseContext): Promise<UserInvitationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateUser(response: ResponseContext): Promise<UserResponse>;
}
export interface UsersApiCreateUserRequest {
    /**
     * @type UserCreateRequest
     */
    body: UserCreateRequest;
}
export interface UsersApiDisableUserRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userId: string;
}
export interface UsersApiGetInvitationRequest {
    /**
     * The UUID of the user invitation.
     * @type string
     */
    userInvitationUuid: string;
}
export interface UsersApiGetUserRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userId: string;
}
export interface UsersApiListUserOrganizationsRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userId: string;
}
export interface UsersApiListUserPermissionsRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userId: string;
}
export interface UsersApiListUsersRequest {
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
     * User attribute to order results by. Sort order is ascending by default.
     * Sort order is descending if the field
     * is prefixed by a negative sign, for example `sort=-name`. Options: `name`,
     * `modified_at`, `user_count`.
     * @type string
     */
    sort?: string;
    /**
     * Direction of sort. Options: `asc`, `desc`.
     * @type QuerySortOrder
     */
    sortDir?: QuerySortOrder;
    /**
     * Filter all users by the given string. Defaults to no filtering.
     * @type string
     */
    filter?: string;
    /**
     * Filter on status attribute.
     * Comma separated list, with possible values `Active`, `Pending`, and `Disabled`.
     * Defaults to no filtering.
     * @type string
     */
    filterStatus?: string;
}
export interface UsersApiSendInvitationsRequest {
    /**
     * @type UserInvitationsRequest
     */
    body: UserInvitationsRequest;
}
export interface UsersApiUpdateUserRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userId: string;
    /**
     * @type UserUpdateRequest
     */
    body: UserUpdateRequest;
}
export declare class UsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    /**
     * Create a user for your organization.
     * @param param The request object
     */
    createUser(param: UsersApiCreateUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Disable a user. Can only be used with an application key belonging
     * to an administrator user.
     * @param param The request object
     */
    disableUser(param: UsersApiDisableUserRequest, options?: Configuration): Promise<void>;
    /**
     * Returns a single user invitation by its UUID.
     * @param param The request object
     */
    getInvitation(param: UsersApiGetInvitationRequest, options?: Configuration): Promise<UserInvitationResponse>;
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * @param param The request object
     */
    getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Get a user organization. Returns the user information and all organizations
     * joined by this user.
     * @param param The request object
     */
    listUserOrganizations(param: UsersApiListUserOrganizationsRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Get a user permission set. Returns a list of the user’s permissions
     * granted by the associated user's roles.
     * @param param The request object
     */
    listUserPermissions(param: UsersApiListUserPermissionsRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Get the list of all users in the organization. This list includes
     * all users even if they are deactivated or unverified.
     * @param param The request object
     */
    listUsers(param?: UsersApiListUsersRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Provide a paginated version of listUsers returning a generator with all the items.
     */
    listUsersWithPagination(param?: UsersApiListUsersRequest, options?: Configuration): AsyncGenerator<User>;
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * @param param The request object
     */
    sendInvitations(param: UsersApiSendInvitationsRequest, options?: Configuration): Promise<UserInvitationsResponse>;
    /**
     * Edit a user. Can only be used with an application key belonging
     * to an administrator user.
     * @param param The request object
     */
    updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<UserResponse>;
}
