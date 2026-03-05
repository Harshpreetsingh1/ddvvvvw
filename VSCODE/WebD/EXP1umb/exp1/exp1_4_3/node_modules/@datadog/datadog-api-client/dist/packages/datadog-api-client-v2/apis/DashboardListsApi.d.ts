import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { DashboardListAddItemsRequest } from "../models/DashboardListAddItemsRequest";
import { DashboardListAddItemsResponse } from "../models/DashboardListAddItemsResponse";
import { DashboardListDeleteItemsRequest } from "../models/DashboardListDeleteItemsRequest";
import { DashboardListDeleteItemsResponse } from "../models/DashboardListDeleteItemsResponse";
import { DashboardListItems } from "../models/DashboardListItems";
import { DashboardListUpdateItemsRequest } from "../models/DashboardListUpdateItemsRequest";
import { DashboardListUpdateItemsResponse } from "../models/DashboardListUpdateItemsResponse";
export declare class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
    createDashboardListItems(dashboardListId: number, body: DashboardListAddItemsRequest, _options?: Configuration): Promise<RequestContext>;
    deleteDashboardListItems(dashboardListId: number, body: DashboardListDeleteItemsRequest, _options?: Configuration): Promise<RequestContext>;
    getDashboardListItems(dashboardListId: number, _options?: Configuration): Promise<RequestContext>;
    updateDashboardListItems(dashboardListId: number, body: DashboardListUpdateItemsRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DashboardListsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDashboardListItems(response: ResponseContext): Promise<DashboardListAddItemsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboardListItems(response: ResponseContext): Promise<DashboardListDeleteItemsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDashboardListItems(response: ResponseContext): Promise<DashboardListItems>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDashboardListItems(response: ResponseContext): Promise<DashboardListUpdateItemsResponse>;
}
export interface DashboardListsApiCreateDashboardListItemsRequest {
    /**
     * ID of the dashboard list to add items to.
     * @type number
     */
    dashboardListId: number;
    /**
     * Dashboards to add to the dashboard list.
     * @type DashboardListAddItemsRequest
     */
    body: DashboardListAddItemsRequest;
}
export interface DashboardListsApiDeleteDashboardListItemsRequest {
    /**
     * ID of the dashboard list to delete items from.
     * @type number
     */
    dashboardListId: number;
    /**
     * Dashboards to delete from the dashboard list.
     * @type DashboardListDeleteItemsRequest
     */
    body: DashboardListDeleteItemsRequest;
}
export interface DashboardListsApiGetDashboardListItemsRequest {
    /**
     * ID of the dashboard list to get items from.
     * @type number
     */
    dashboardListId: number;
}
export interface DashboardListsApiUpdateDashboardListItemsRequest {
    /**
     * ID of the dashboard list to update items from.
     * @type number
     */
    dashboardListId: number;
    /**
     * New dashboards of the dashboard list.
     * @type DashboardListUpdateItemsRequest
     */
    body: DashboardListUpdateItemsRequest;
}
export declare class DashboardListsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor);
    /**
     * Add dashboards to an existing dashboard list.
     * @param param The request object
     */
    createDashboardListItems(param: DashboardListsApiCreateDashboardListItemsRequest, options?: Configuration): Promise<DashboardListAddItemsResponse>;
    /**
     * Delete dashboards from an existing dashboard list.
     * @param param The request object
     */
    deleteDashboardListItems(param: DashboardListsApiDeleteDashboardListItemsRequest, options?: Configuration): Promise<DashboardListDeleteItemsResponse>;
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * @param param The request object
     */
    getDashboardListItems(param: DashboardListsApiGetDashboardListItemsRequest, options?: Configuration): Promise<DashboardListItems>;
    /**
     * Update dashboards of an existing dashboard list.
     * @param param The request object
     */
    updateDashboardListItems(param: DashboardListsApiUpdateDashboardListItemsRequest, options?: Configuration): Promise<DashboardListUpdateItemsResponse>;
}
