import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { JiraAccountsResponse } from "../models/JiraAccountsResponse";
import { JiraIssueTemplateCreateRequest } from "../models/JiraIssueTemplateCreateRequest";
import { JiraIssueTemplateResponse } from "../models/JiraIssueTemplateResponse";
import { JiraIssueTemplatesResponse } from "../models/JiraIssueTemplatesResponse";
import { JiraIssueTemplateUpdateRequest } from "../models/JiraIssueTemplateUpdateRequest";
export declare class JiraIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createJiraIssueTemplate(body: JiraIssueTemplateCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteJiraAccount(accountId: string, _options?: Configuration): Promise<RequestContext>;
    deleteJiraIssueTemplate(issueTemplateId: string, _options?: Configuration): Promise<RequestContext>;
    getJiraIssueTemplate(issueTemplateId: string, _options?: Configuration): Promise<RequestContext>;
    listJiraAccounts(_options?: Configuration): Promise<RequestContext>;
    listJiraIssueTemplates(_options?: Configuration): Promise<RequestContext>;
    updateJiraIssueTemplate(issueTemplateId: string, body: JiraIssueTemplateUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class JiraIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createJiraIssueTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    createJiraIssueTemplate(response: ResponseContext): Promise<JiraIssueTemplateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteJiraAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteJiraAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteJiraIssueTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteJiraIssueTemplate(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJiraIssueTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getJiraIssueTemplate(response: ResponseContext): Promise<JiraIssueTemplateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listJiraAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listJiraAccounts(response: ResponseContext): Promise<JiraAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listJiraIssueTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
    listJiraIssueTemplates(response: ResponseContext): Promise<JiraIssueTemplatesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateJiraIssueTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateJiraIssueTemplate(response: ResponseContext): Promise<JiraIssueTemplateResponse>;
}
export interface JiraIntegrationApiCreateJiraIssueTemplateRequest {
    /**
     * @type JiraIssueTemplateCreateRequest
     */
    body: JiraIssueTemplateCreateRequest;
}
export interface JiraIntegrationApiDeleteJiraAccountRequest {
    /**
     * The ID of the Jira account to delete
     * @type string
     */
    accountId: string;
}
export interface JiraIntegrationApiDeleteJiraIssueTemplateRequest {
    /**
     * The ID of the Jira issue template to delete
     * @type string
     */
    issueTemplateId: string;
}
export interface JiraIntegrationApiGetJiraIssueTemplateRequest {
    /**
     * The ID of the Jira issue template to retrieve
     * @type string
     */
    issueTemplateId: string;
}
export interface JiraIntegrationApiUpdateJiraIssueTemplateRequest {
    /**
     * The ID of the Jira issue template to update
     * @type string
     */
    issueTemplateId: string;
    /**
     * @type JiraIssueTemplateUpdateRequest
     */
    body: JiraIssueTemplateUpdateRequest;
}
export declare class JiraIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: JiraIntegrationApiRequestFactory, responseProcessor?: JiraIntegrationApiResponseProcessor);
    /**
     * Create a new Jira issue template.
     * @param param The request object
     */
    createJiraIssueTemplate(param: JiraIntegrationApiCreateJiraIssueTemplateRequest, options?: Configuration): Promise<JiraIssueTemplateResponse>;
    /**
     * Delete a Jira account by ID.
     * @param param The request object
     */
    deleteJiraAccount(param: JiraIntegrationApiDeleteJiraAccountRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a Jira issue template by ID.
     * @param param The request object
     */
    deleteJiraIssueTemplate(param: JiraIntegrationApiDeleteJiraIssueTemplateRequest, options?: Configuration): Promise<void>;
    /**
     * Get a Jira issue template by ID.
     * @param param The request object
     */
    getJiraIssueTemplate(param: JiraIntegrationApiGetJiraIssueTemplateRequest, options?: Configuration): Promise<JiraIssueTemplateResponse>;
    /**
     * Get all Jira accounts for the organization.
     * @param param The request object
     */
    listJiraAccounts(options?: Configuration): Promise<JiraAccountsResponse>;
    /**
     * Get all Jira issue templates for the organization.
     * @param param The request object
     */
    listJiraIssueTemplates(options?: Configuration): Promise<JiraIssueTemplatesResponse>;
    /**
     * Update a Jira issue template by ID.
     * @param param The request object
     */
    updateJiraIssueTemplate(param: JiraIntegrationApiUpdateJiraIssueTemplateRequest, options?: Configuration): Promise<JiraIssueTemplateResponse>;
}
