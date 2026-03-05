import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateActionConnectionRequest } from "../models/CreateActionConnectionRequest";
import { CreateActionConnectionResponse } from "../models/CreateActionConnectionResponse";
import { GetActionConnectionResponse } from "../models/GetActionConnectionResponse";
import { GetAppKeyRegistrationResponse } from "../models/GetAppKeyRegistrationResponse";
import { ListAppKeyRegistrationsResponse } from "../models/ListAppKeyRegistrationsResponse";
import { RegisterAppKeyResponse } from "../models/RegisterAppKeyResponse";
import { UpdateActionConnectionRequest } from "../models/UpdateActionConnectionRequest";
import { UpdateActionConnectionResponse } from "../models/UpdateActionConnectionResponse";
export declare class ActionConnectionApiRequestFactory extends BaseAPIRequestFactory {
    createActionConnection(body: CreateActionConnectionRequest, _options?: Configuration): Promise<RequestContext>;
    deleteActionConnection(connectionId: string, _options?: Configuration): Promise<RequestContext>;
    getActionConnection(connectionId: string, _options?: Configuration): Promise<RequestContext>;
    getAppKeyRegistration(appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    listAppKeyRegistrations(pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    registerAppKey(appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    unregisterAppKey(appKeyId: string, _options?: Configuration): Promise<RequestContext>;
    updateActionConnection(connectionId: string, body: UpdateActionConnectionRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ActionConnectionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createActionConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    createActionConnection(response: ResponseContext): Promise<CreateActionConnectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteActionConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteActionConnection(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActionConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    getActionConnection(response: ResponseContext): Promise<GetActionConnectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppKeyRegistration
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAppKeyRegistration(response: ResponseContext): Promise<GetAppKeyRegistrationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAppKeyRegistrations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAppKeyRegistrations(response: ResponseContext): Promise<ListAppKeyRegistrationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to registerAppKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    registerAppKey(response: ResponseContext): Promise<RegisterAppKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unregisterAppKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    unregisterAppKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateActionConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateActionConnection(response: ResponseContext): Promise<UpdateActionConnectionResponse>;
}
export interface ActionConnectionApiCreateActionConnectionRequest {
    /**
     * @type CreateActionConnectionRequest
     */
    body: CreateActionConnectionRequest;
}
export interface ActionConnectionApiDeleteActionConnectionRequest {
    /**
     * The ID of the action connection
     * @type string
     */
    connectionId: string;
}
export interface ActionConnectionApiGetActionConnectionRequest {
    /**
     * The ID of the action connection
     * @type string
     */
    connectionId: string;
}
export interface ActionConnectionApiGetAppKeyRegistrationRequest {
    /**
     * The ID of the app key
     * @type string
     */
    appKeyId: string;
}
export interface ActionConnectionApiListAppKeyRegistrationsRequest {
    /**
     * The number of App Key Registrations to return per page.
     * @type number
     */
    pageSize?: number;
    /**
     * The page number to return.
     * @type number
     */
    pageNumber?: number;
}
export interface ActionConnectionApiRegisterAppKeyRequest {
    /**
     * The ID of the app key
     * @type string
     */
    appKeyId: string;
}
export interface ActionConnectionApiUnregisterAppKeyRequest {
    /**
     * The ID of the app key
     * @type string
     */
    appKeyId: string;
}
export interface ActionConnectionApiUpdateActionConnectionRequest {
    /**
     * The ID of the action connection
     * @type string
     */
    connectionId: string;
    /**
     * Update an existing Action Connection request body
     * @type UpdateActionConnectionRequest
     */
    body: UpdateActionConnectionRequest;
}
export declare class ActionConnectionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ActionConnectionApiRequestFactory, responseProcessor?: ActionConnectionApiResponseProcessor);
    /**
     * Create a new Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).
     * @param param The request object
     */
    createActionConnection(param: ActionConnectionApiCreateActionConnectionRequest, options?: Configuration): Promise<CreateActionConnectionResponse>;
    /**
     * Delete an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    deleteActionConnection(param: ActionConnectionApiDeleteActionConnectionRequest, options?: Configuration): Promise<void>;
    /**
     * Get an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).
     * @param param The request object
     */
    getActionConnection(param: ActionConnectionApiGetActionConnectionRequest, options?: Configuration): Promise<GetActionConnectionResponse>;
    /**
     * Get an existing App Key Registration
     * @param param The request object
     */
    getAppKeyRegistration(param: ActionConnectionApiGetAppKeyRegistrationRequest, options?: Configuration): Promise<GetAppKeyRegistrationResponse>;
    /**
     * List App Key Registrations
     * @param param The request object
     */
    listAppKeyRegistrations(param?: ActionConnectionApiListAppKeyRegistrationsRequest, options?: Configuration): Promise<ListAppKeyRegistrationsResponse>;
    /**
     * Register a new App Key
     * @param param The request object
     */
    registerAppKey(param: ActionConnectionApiRegisterAppKeyRequest, options?: Configuration): Promise<RegisterAppKeyResponse>;
    /**
     * Unregister an App Key
     * @param param The request object
     */
    unregisterAppKey(param: ActionConnectionApiUnregisterAppKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Update an existing Action Connection. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key).
     * @param param The request object
     */
    updateActionConnection(param: ActionConnectionApiUpdateActionConnectionRequest, options?: Configuration): Promise<UpdateActionConnectionResponse>;
}
