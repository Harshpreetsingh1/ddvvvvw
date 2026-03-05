import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { DashboardList } from "../models/DashboardList";
import { DashboardListDeleteResponse } from "../models/DashboardListDeleteResponse";
import { DashboardListListResponse } from "../models/DashboardListListResponse";
export declare class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
    createDashboardList(body: DashboardList, _options?: Configuration): Promise<RequestContext>;
    deleteDashboardList(listId: number, _options?: Configuration): Promise<RequestContext>;
    getDashboardList(listId: number, _options?: Configuration): Promise<RequestContext>;
    listDashboardLists(_options?: Configuration): Promise<RequestContext>;
    updateDashboardList(listId: number, body: DashboardList, _options?: Configuration): Promise<RequestContext>;
}
export declare class DashboardListsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDashboardList(response: ResponseContext): Promise<DashboardList>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboardList(response: ResponseContext): Promise<DashboardListDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDashboardList(response: ResponseContext): Promise<DashboardList>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDashboardLists
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDashboardLists(response: ResponseContext): Promise<DashboardListListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDashboardList(response: ResponseContext): Promise<DashboardList>;
}
export interface DashboardListsApiCreateDashboardListRequest {
    /**
     * Create a dashboard list request body.
     * @type DashboardList
     */
    body: DashboardList;
}
export interface DashboardListsApiDeleteDashboardListRequest {
    /**
     * ID of the dashboard list to delete.
     * @type number
     */
    listId: number;
}
export interface DashboardListsApiGetDashboardListRequest {
    /**
     * ID of the dashboard list to fetch.
     * @type number
     */
    listId: number;
}
export interface DashboardListsApiUpdateDashboardListRequest {
    /**
     * ID of the dashboard list to update.
     * @type number
     */
    listId: number;
    /**
     * Update a dashboard list request body.
     * @type DashboardList
     */
    body: DashboardList;
}
export declare class DashboardListsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor);
    /**
     * Create an empty dashboard list.
     * @param param The request object
     */
    createDashboardList(param: DashboardListsApiCreateDashboardListRequest, options?: Configuration): Promise<DashboardList>;
    /**
     * Delete a dashboard list.
     * @param param The request object
     */
    deleteDashboardList(param: DashboardListsApiDeleteDashboardListRequest, options?: Configuration): Promise<DashboardListDeleteResponse>;
    /**
     * Fetch an existing dashboard list's definition.
     * @param param The request object
     */
    getDashboardList(param: DashboardListsApiGetDashboardListRequest, options?: Configuration): Promise<DashboardList>;
    /**
     * Fetch all of your existing dashboard list definitions.
     * @param param The request object
     */
    listDashboardLists(options?: Configuration): Promise<DashboardListListResponse>;
    /**
     * Update the name of a dashboard list.
     * @param param The request object
     */
    updateDashboardList(param: DashboardListsApiUpdateDashboardListRequest, options?: Configuration): Promise<DashboardList>;
}
