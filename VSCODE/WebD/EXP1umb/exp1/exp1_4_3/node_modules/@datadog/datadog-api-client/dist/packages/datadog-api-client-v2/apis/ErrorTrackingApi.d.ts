import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { GetIssueIncludeQueryParameterItem } from "../models/GetIssueIncludeQueryParameterItem";
import { IssueResponse } from "../models/IssueResponse";
import { IssuesSearchRequest } from "../models/IssuesSearchRequest";
import { IssuesSearchResponse } from "../models/IssuesSearchResponse";
import { IssueUpdateAssigneeRequest } from "../models/IssueUpdateAssigneeRequest";
import { IssueUpdateStateRequest } from "../models/IssueUpdateStateRequest";
import { SearchIssuesIncludeQueryParameterItem } from "../models/SearchIssuesIncludeQueryParameterItem";
export declare class ErrorTrackingApiRequestFactory extends BaseAPIRequestFactory {
    deleteIssueAssignee(issueId: string, _options?: Configuration): Promise<RequestContext>;
    getIssue(issueId: string, include?: Array<GetIssueIncludeQueryParameterItem>, _options?: Configuration): Promise<RequestContext>;
    searchIssues(body: IssuesSearchRequest, include?: Array<SearchIssuesIncludeQueryParameterItem>, _options?: Configuration): Promise<RequestContext>;
    updateIssueAssignee(issueId: string, body: IssueUpdateAssigneeRequest, _options?: Configuration): Promise<RequestContext>;
    updateIssueState(issueId: string, body: IssueUpdateStateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ErrorTrackingApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIssueAssignee
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIssueAssignee(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIssue
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIssue(response: ResponseContext): Promise<IssueResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchIssues
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchIssues(response: ResponseContext): Promise<IssuesSearchResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIssueAssignee
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIssueAssignee(response: ResponseContext): Promise<IssueResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIssueState
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIssueState(response: ResponseContext): Promise<IssueResponse>;
}
export interface ErrorTrackingApiDeleteIssueAssigneeRequest {
    /**
     * The identifier of the issue.
     * @type string
     */
    issueId: string;
}
export interface ErrorTrackingApiGetIssueRequest {
    /**
     * The identifier of the issue.
     * @type string
     */
    issueId: string;
    /**
     * Comma-separated list of relationship objects that should be included in the response. Possible values are `assignee`, `case`, and `team_owners`.
     * @type Array<GetIssueIncludeQueryParameterItem>
     */
    include?: Array<GetIssueIncludeQueryParameterItem>;
}
export interface ErrorTrackingApiSearchIssuesRequest {
    /**
     * Search issues request payload.
     * @type IssuesSearchRequest
     */
    body: IssuesSearchRequest;
    /**
     * Comma-separated list of relationship objects that should be included in the response. Possible values are `issue`, `issue.assignee`, `issue.case`, and `issue.team_owners`.
     * @type Array<SearchIssuesIncludeQueryParameterItem>
     */
    include?: Array<SearchIssuesIncludeQueryParameterItem>;
}
export interface ErrorTrackingApiUpdateIssueAssigneeRequest {
    /**
     * The identifier of the issue.
     * @type string
     */
    issueId: string;
    /**
     * Update issue assignee request payload.
     * @type IssueUpdateAssigneeRequest
     */
    body: IssueUpdateAssigneeRequest;
}
export interface ErrorTrackingApiUpdateIssueStateRequest {
    /**
     * The identifier of the issue.
     * @type string
     */
    issueId: string;
    /**
     * Update issue state request payload.
     * @type IssueUpdateStateRequest
     */
    body: IssueUpdateStateRequest;
}
export declare class ErrorTrackingApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ErrorTrackingApiRequestFactory, responseProcessor?: ErrorTrackingApiResponseProcessor);
    /**
     * Remove the assignee of an issue by `issue_id`.
     * @param param The request object
     */
    deleteIssueAssignee(param: ErrorTrackingApiDeleteIssueAssigneeRequest, options?: Configuration): Promise<void>;
    /**
     * Retrieve the full details for a specific error tracking issue, including attributes and relationships.
     * @param param The request object
     */
    getIssue(param: ErrorTrackingApiGetIssueRequest, options?: Configuration): Promise<IssueResponse>;
    /**
     * Search issues endpoint allows you to programmatically search for issues within your organization. This endpoint returns a list of issues that match a given search query, following the event search syntax. The search results are limited to a maximum of 100 issues per request.
     * @param param The request object
     */
    searchIssues(param: ErrorTrackingApiSearchIssuesRequest, options?: Configuration): Promise<IssuesSearchResponse>;
    /**
     * Update the assignee of an issue by `issue_id`.
     * @param param The request object
     */
    updateIssueAssignee(param: ErrorTrackingApiUpdateIssueAssigneeRequest, options?: Configuration): Promise<IssueResponse>;
    /**
     * Update the state of an issue by `issue_id`. Use this endpoint to move an issue between states such as `OPEN`, `RESOLVED`, or `IGNORED`.
     * @param param The request object
     */
    updateIssueState(param: ErrorTrackingApiUpdateIssueStateRequest, options?: Configuration): Promise<IssueResponse>;
}
