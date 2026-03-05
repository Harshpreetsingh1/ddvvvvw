import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AppsSortField } from "../models/AppsSortField";
import { CreateAppRequest } from "../models/CreateAppRequest";
import { CreateAppResponse } from "../models/CreateAppResponse";
import { DeleteAppResponse } from "../models/DeleteAppResponse";
import { DeleteAppsRequest } from "../models/DeleteAppsRequest";
import { DeleteAppsResponse } from "../models/DeleteAppsResponse";
import { GetAppResponse } from "../models/GetAppResponse";
import { ListAppsResponse } from "../models/ListAppsResponse";
import { PublishAppResponse } from "../models/PublishAppResponse";
import { UnpublishAppResponse } from "../models/UnpublishAppResponse";
import { UpdateAppRequest } from "../models/UpdateAppRequest";
import { UpdateAppResponse } from "../models/UpdateAppResponse";
export declare class AppBuilderApiRequestFactory extends BaseAPIRequestFactory {
    createApp(body: CreateAppRequest, _options?: Configuration): Promise<RequestContext>;
    deleteApp(appId: string, _options?: Configuration): Promise<RequestContext>;
    deleteApps(body: DeleteAppsRequest, _options?: Configuration): Promise<RequestContext>;
    getApp(appId: string, version?: string, _options?: Configuration): Promise<RequestContext>;
    listApps(limit?: number, page?: number, filterUserName?: string, filterUserUuid?: string, filterName?: string, filterQuery?: string, filterDeployed?: boolean, filterTags?: string, filterFavorite?: boolean, filterSelfService?: boolean, sort?: Array<AppsSortField>, _options?: Configuration): Promise<RequestContext>;
    publishApp(appId: string, _options?: Configuration): Promise<RequestContext>;
    unpublishApp(appId: string, _options?: Configuration): Promise<RequestContext>;
    updateApp(appId: string, body: UpdateAppRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AppBuilderApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApp(response: ResponseContext): Promise<CreateAppResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApp(response: ResponseContext): Promise<DeleteAppResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApps
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApps(response: ResponseContext): Promise<DeleteAppsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApp(response: ResponseContext): Promise<GetAppResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApps
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApps(response: ResponseContext): Promise<ListAppsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    publishApp(response: ResponseContext): Promise<PublishAppResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unpublishApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    unpublishApp(response: ResponseContext): Promise<UnpublishAppResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApp(response: ResponseContext): Promise<UpdateAppResponse>;
}
export interface AppBuilderApiCreateAppRequest {
    /**
     * @type CreateAppRequest
     */
    body: CreateAppRequest;
}
export interface AppBuilderApiDeleteAppRequest {
    /**
     * The ID of the app to delete.
     * @type string
     */
    appId: string;
}
export interface AppBuilderApiDeleteAppsRequest {
    /**
     * @type DeleteAppsRequest
     */
    body: DeleteAppsRequest;
}
export interface AppBuilderApiGetAppRequest {
    /**
     * The ID of the app to retrieve.
     * @type string
     */
    appId: string;
    /**
     * The version number of the app to retrieve. If not specified, the latest version is returned. Version numbers start at 1 and increment with each update. The special values `latest` and `deployed` can be used to retrieve the latest version or the published version, respectively.
     * @type string
     */
    version?: string;
}
export interface AppBuilderApiListAppsRequest {
    /**
     * The number of apps to return per page.
     * @type number
     */
    limit?: number;
    /**
     * The page number to return.
     * @type number
     */
    page?: number;
    /**
     * Filter apps by the app creator. Usually the user's email.
     * @type string
     */
    filterUserName?: string;
    /**
     * Filter apps by the app creator's UUID.
     * @type string
     */
    filterUserUuid?: string;
    /**
     * Filter by app name.
     * @type string
     */
    filterName?: string;
    /**
     * Filter apps by the app name or the app creator.
     * @type string
     */
    filterQuery?: string;
    /**
     * Filter apps by whether they are published.
     * @type boolean
     */
    filterDeployed?: boolean;
    /**
     * Filter apps by tags.
     * @type string
     */
    filterTags?: string;
    /**
     * Filter apps by whether you have added them to your favorites.
     * @type boolean
     */
    filterFavorite?: boolean;
    /**
     * Filter apps by whether they are enabled for self-service.
     * @type boolean
     */
    filterSelfService?: boolean;
    /**
     * The fields and direction to sort apps by.
     * @type Array<AppsSortField>
     */
    sort?: Array<AppsSortField>;
}
export interface AppBuilderApiPublishAppRequest {
    /**
     * The ID of the app to publish.
     * @type string
     */
    appId: string;
}
export interface AppBuilderApiUnpublishAppRequest {
    /**
     * The ID of the app to unpublish.
     * @type string
     */
    appId: string;
}
export interface AppBuilderApiUpdateAppRequest {
    /**
     * The ID of the app to update.
     * @type string
     */
    appId: string;
    /**
     * @type UpdateAppRequest
     */
    body: UpdateAppRequest;
}
export declare class AppBuilderApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AppBuilderApiRequestFactory, responseProcessor?: AppBuilderApiResponseProcessor);
    /**
     * Create a new app, returning the app ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    createApp(param: AppBuilderApiCreateAppRequest, options?: Configuration): Promise<CreateAppResponse>;
    /**
     * Delete a single app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    deleteApp(param: AppBuilderApiDeleteAppRequest, options?: Configuration): Promise<DeleteAppResponse>;
    /**
     * Delete multiple apps in a single request from a list of app IDs. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    deleteApps(param: AppBuilderApiDeleteAppsRequest, options?: Configuration): Promise<DeleteAppsResponse>;
    /**
     * Get the full definition of an app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    getApp(param: AppBuilderApiGetAppRequest, options?: Configuration): Promise<GetAppResponse>;
    /**
     * List all apps, with optional filters and sorting. This endpoint is paginated. Only basic app information such as the app ID, name, and description is returned by this endpoint. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    listApps(param?: AppBuilderApiListAppsRequest, options?: Configuration): Promise<ListAppsResponse>;
    /**
     * Publish an app for use by other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    publishApp(param: AppBuilderApiPublishAppRequest, options?: Configuration): Promise<PublishAppResponse>;
    /**
     * Unpublish an app, removing the live version of the app. Unpublishing creates a new instance of a `deployment` object on the app, with a nil `app_version_id` (`00000000-0000-0000-0000-000000000000`). The app can still be updated and published again in the future. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    unpublishApp(param: AppBuilderApiUnpublishAppRequest, options?: Configuration): Promise<UnpublishAppResponse>;
    /**
     * Update an existing app. This creates a new version of the app. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    updateApp(param: AppBuilderApiUpdateAppRequest, options?: Configuration): Promise<UpdateAppResponse>;
}
