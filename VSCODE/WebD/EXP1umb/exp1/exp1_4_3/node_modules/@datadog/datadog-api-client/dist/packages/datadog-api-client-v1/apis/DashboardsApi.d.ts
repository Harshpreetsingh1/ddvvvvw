import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { Dashboard } from "../models/Dashboard";
import { DashboardBulkDeleteRequest } from "../models/DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "../models/DashboardDeleteResponse";
import { DashboardRestoreRequest } from "../models/DashboardRestoreRequest";
import { DashboardSummary } from "../models/DashboardSummary";
import { DashboardSummaryDefinition } from "../models/DashboardSummaryDefinition";
import { DeleteSharedDashboardResponse } from "../models/DeleteSharedDashboardResponse";
import { SharedDashboard } from "../models/SharedDashboard";
import { SharedDashboardInvites } from "../models/SharedDashboardInvites";
import { SharedDashboardUpdateRequest } from "../models/SharedDashboardUpdateRequest";
export declare class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
    createDashboard(body: Dashboard, _options?: Configuration): Promise<RequestContext>;
    createPublicDashboard(body: SharedDashboard, _options?: Configuration): Promise<RequestContext>;
    deleteDashboard(dashboardId: string, _options?: Configuration): Promise<RequestContext>;
    deleteDashboards(body: DashboardBulkDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    deletePublicDashboard(token: string, _options?: Configuration): Promise<RequestContext>;
    deletePublicDashboardInvitation(token: string, body: SharedDashboardInvites, _options?: Configuration): Promise<RequestContext>;
    getDashboard(dashboardId: string, _options?: Configuration): Promise<RequestContext>;
    getPublicDashboard(token: string, _options?: Configuration): Promise<RequestContext>;
    getPublicDashboardInvitations(token: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    listDashboards(filterShared?: boolean, filterDeleted?: boolean, count?: number, start?: number, _options?: Configuration): Promise<RequestContext>;
    restoreDashboards(body: DashboardRestoreRequest, _options?: Configuration): Promise<RequestContext>;
    sendPublicDashboardInvitation(token: string, body: SharedDashboardInvites, _options?: Configuration): Promise<RequestContext>;
    updateDashboard(dashboardId: string, body: Dashboard, _options?: Configuration): Promise<RequestContext>;
    updatePublicDashboard(token: string, body: SharedDashboardUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DashboardsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDashboard(response: ResponseContext): Promise<Dashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPublicDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPublicDashboard(response: ResponseContext): Promise<SharedDashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboard(response: ResponseContext): Promise<DashboardDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboards
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboards(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePublicDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePublicDashboard(response: ResponseContext): Promise<DeleteSharedDashboardResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePublicDashboardInvitation
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePublicDashboardInvitation(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDashboard(response: ResponseContext): Promise<Dashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPublicDashboard(response: ResponseContext): Promise<SharedDashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicDashboardInvitations
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPublicDashboardInvitations(response: ResponseContext): Promise<SharedDashboardInvites>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDashboards
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDashboards(response: ResponseContext): Promise<DashboardSummary>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restoreDashboards
     * @throws ApiException if the response code was not in [200, 299]
     */
    restoreDashboards(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendPublicDashboardInvitation
     * @throws ApiException if the response code was not in [200, 299]
     */
    sendPublicDashboardInvitation(response: ResponseContext): Promise<SharedDashboardInvites>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDashboard(response: ResponseContext): Promise<Dashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePublicDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePublicDashboard(response: ResponseContext): Promise<SharedDashboard>;
}
export interface DashboardsApiCreateDashboardRequest {
    /**
     * Create a dashboard request body.
     * @type Dashboard
     */
    body: Dashboard;
}
export interface DashboardsApiCreatePublicDashboardRequest {
    /**
     * Create a shared dashboard request body.
     * @type SharedDashboard
     */
    body: SharedDashboard;
}
export interface DashboardsApiDeleteDashboardRequest {
    /**
     * The ID of the dashboard.
     * @type string
     */
    dashboardId: string;
}
export interface DashboardsApiDeleteDashboardsRequest {
    /**
     * Delete dashboards request body.
     * @type DashboardBulkDeleteRequest
     */
    body: DashboardBulkDeleteRequest;
}
export interface DashboardsApiDeletePublicDashboardRequest {
    /**
     * The token of the shared dashboard.
     * @type string
     */
    token: string;
}
export interface DashboardsApiDeletePublicDashboardInvitationRequest {
    /**
     * The token of the shared dashboard.
     * @type string
     */
    token: string;
    /**
     * Shared Dashboard Invitation deletion request body.
     * @type SharedDashboardInvites
     */
    body: SharedDashboardInvites;
}
export interface DashboardsApiGetDashboardRequest {
    /**
     * The ID of the dashboard.
     * @type string
     */
    dashboardId: string;
}
export interface DashboardsApiGetPublicDashboardRequest {
    /**
     * The token of the shared dashboard. Generated when a dashboard is shared.
     * @type string
     */
    token: string;
}
export interface DashboardsApiGetPublicDashboardInvitationsRequest {
    /**
     * Token of the shared dashboard for which to fetch invitations.
     * @type string
     */
    token: string;
    /**
     * The number of records to return in a single request.
     * @type number
     */
    pageSize?: number;
    /**
     * The page to access (base 0).
     * @type number
     */
    pageNumber?: number;
}
export interface DashboardsApiListDashboardsRequest {
    /**
     * When `true`, this query only returns shared custom created
     * or cloned dashboards.
     * @type boolean
     */
    filterShared?: boolean;
    /**
     * When `true`, this query returns only deleted custom-created
     * or cloned dashboards. This parameter is incompatible with `filter[shared]`.
     * @type boolean
     */
    filterDeleted?: boolean;
    /**
     * The maximum number of dashboards returned in the list.
     * @type number
     */
    count?: number;
    /**
     * The specific offset to use as the beginning of the returned response.
     * @type number
     */
    start?: number;
}
export interface DashboardsApiRestoreDashboardsRequest {
    /**
     * Restore dashboards request body.
     * @type DashboardRestoreRequest
     */
    body: DashboardRestoreRequest;
}
export interface DashboardsApiSendPublicDashboardInvitationRequest {
    /**
     * The token of the shared dashboard.
     * @type string
     */
    token: string;
    /**
     * Shared Dashboard Invitation request body.
     * @type SharedDashboardInvites
     */
    body: SharedDashboardInvites;
}
export interface DashboardsApiUpdateDashboardRequest {
    /**
     * The ID of the dashboard.
     * @type string
     */
    dashboardId: string;
    /**
     * Update Dashboard request body.
     * @type Dashboard
     */
    body: Dashboard;
}
export interface DashboardsApiUpdatePublicDashboardRequest {
    /**
     * The token of the shared dashboard.
     * @type string
     */
    token: string;
    /**
     * Update Dashboard request body.
     * @type SharedDashboardUpdateRequest
     */
    body: SharedDashboardUpdateRequest;
}
export declare class DashboardsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DashboardsApiRequestFactory, responseProcessor?: DashboardsApiResponseProcessor);
    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended.
     * Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * @param param The request object
     */
    createDashboard(param: DashboardsApiCreateDashboardRequest, options?: Configuration): Promise<Dashboard>;
    /**
     * Share a specified private dashboard, generating a URL at which it can be publicly viewed.
     * @param param The request object
     */
    createPublicDashboard(param: DashboardsApiCreatePublicDashboardRequest, options?: Configuration): Promise<SharedDashboard>;
    /**
     * Delete a dashboard using the specified ID.
     * @param param The request object
     */
    deleteDashboard(param: DashboardsApiDeleteDashboardRequest, options?: Configuration): Promise<DashboardDeleteResponse>;
    /**
     * Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).
     * @param param The request object
     */
    deleteDashboards(param: DashboardsApiDeleteDashboardsRequest, options?: Configuration): Promise<void>;
    /**
     * Revoke the public URL for a dashboard (rendering it private) associated with the specified token.
     * @param param The request object
     */
    deletePublicDashboard(param: DashboardsApiDeletePublicDashboardRequest, options?: Configuration): Promise<DeleteSharedDashboardResponse>;
    /**
     * Revoke previously sent invitation emails and active sessions used to access a given shared dashboard for specific email addresses.
     * @param param The request object
     */
    deletePublicDashboardInvitation(param: DashboardsApiDeletePublicDashboardInvitationRequest, options?: Configuration): Promise<void>;
    /**
     * Get a dashboard using the specified ID.
     * @param param The request object
     */
    getDashboard(param: DashboardsApiGetDashboardRequest, options?: Configuration): Promise<Dashboard>;
    /**
     * Fetch an existing shared dashboard's sharing metadata associated with the specified token.
     * @param param The request object
     */
    getPublicDashboard(param: DashboardsApiGetPublicDashboardRequest, options?: Configuration): Promise<SharedDashboard>;
    /**
     * Describe the invitations that exist for the given shared dashboard (paginated).
     * @param param The request object
     */
    getPublicDashboardInvitations(param: DashboardsApiGetPublicDashboardInvitationsRequest, options?: Configuration): Promise<SharedDashboardInvites>;
    /**
     * Get all dashboards.
     *
     * **Note**: This query will only return custom created or cloned dashboards.
     * This query will not return preset dashboards.
     * @param param The request object
     */
    listDashboards(param?: DashboardsApiListDashboardsRequest, options?: Configuration): Promise<DashboardSummary>;
    /**
     * Provide a paginated version of listDashboards returning a generator with all the items.
     */
    listDashboardsWithPagination(param?: DashboardsApiListDashboardsRequest, options?: Configuration): AsyncGenerator<DashboardSummaryDefinition>;
    /**
     * Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).
     * @param param The request object
     */
    restoreDashboards(param: DashboardsApiRestoreDashboardsRequest, options?: Configuration): Promise<void>;
    /**
     * Send emails to specified email addresses containing links to access a given authenticated shared dashboard. Email addresses must already belong to the authenticated shared dashboard's share_list.
     * @param param The request object
     */
    sendPublicDashboardInvitation(param: DashboardsApiSendPublicDashboardInvitationRequest, options?: Configuration): Promise<SharedDashboardInvites>;
    /**
     * Update a dashboard using the specified ID.
     * @param param The request object
     */
    updateDashboard(param: DashboardsApiUpdateDashboardRequest, options?: Configuration): Promise<Dashboard>;
    /**
     * Update a shared dashboard associated with the specified token.
     * @param param The request object
     */
    updatePublicDashboard(param: DashboardsApiUpdatePublicDashboardRequest, options?: Configuration): Promise<SharedDashboard>;
}
