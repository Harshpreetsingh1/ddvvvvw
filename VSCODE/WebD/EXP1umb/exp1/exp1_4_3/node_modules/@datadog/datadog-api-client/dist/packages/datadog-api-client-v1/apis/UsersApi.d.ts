import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { User } from "../models/User";
import { UserDisableResponse } from "../models/UserDisableResponse";
import { UserListResponse } from "../models/UserListResponse";
import { UserResponse } from "../models/UserResponse";
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    createUser(body: User, _options?: Configuration): Promise<RequestContext>;
    disableUser(userHandle: string, _options?: Configuration): Promise<RequestContext>;
    getUser(userHandle: string, _options?: Configuration): Promise<RequestContext>;
    listUsers(_options?: Configuration): Promise<RequestContext>;
    updateUser(userHandle: string, body: User, _options?: Configuration): Promise<RequestContext>;
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
    disableUser(response: ResponseContext): Promise<UserDisableResponse>;
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
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUsers(response: ResponseContext): Promise<UserListResponse>;
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
     * User object that needs to be created.
     * @type User
     */
    body: User;
}
export interface UsersApiDisableUserRequest {
    /**
     * The handle of the user.
     * @type string
     */
    userHandle: string;
}
export interface UsersApiGetUserRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userHandle: string;
}
export interface UsersApiUpdateUserRequest {
    /**
     * The ID of the user.
     * @type string
     */
    userHandle: string;
    /**
     * Description of the update.
     * @type User
     */
    body: User;
}
export declare class UsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    /**
     * Create a user for your organization.
     *
     * **Note**: Users can only be created with the admin access role
     * if application keys belong to administrators.
     * @param param The request object
     */
    createUser(param: UsersApiCreateUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Delete a user from an organization.
     *
     * **Note**: This endpoint can only be used with application keys belonging to
     * administrators.
     * @param param The request object
     */
    disableUser(param: UsersApiDisableUserRequest, options?: Configuration): Promise<UserDisableResponse>;
    /**
     * Get a user's details.
     * @param param The request object
     */
    getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * List all users for your organization.
     * @param param The request object
     */
    listUsers(options?: Configuration): Promise<UserListResponse>;
    /**
     * Update a user information.
     *
     * **Note**: It can only be used with application keys belonging to administrators.
     * @param param The request object
     */
    updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<UserResponse>;
}
