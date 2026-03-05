import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { Case } from "../models/Case";
import { CaseAssignRequest } from "../models/CaseAssignRequest";
import { CaseCommentRequest } from "../models/CaseCommentRequest";
import { CaseCreateRequest } from "../models/CaseCreateRequest";
import { CaseEmptyRequest } from "../models/CaseEmptyRequest";
import { CaseNotificationRuleCreateRequest } from "../models/CaseNotificationRuleCreateRequest";
import { CaseNotificationRuleResponse } from "../models/CaseNotificationRuleResponse";
import { CaseNotificationRulesResponse } from "../models/CaseNotificationRulesResponse";
import { CaseNotificationRuleUpdateRequest } from "../models/CaseNotificationRuleUpdateRequest";
import { CaseResponse } from "../models/CaseResponse";
import { CaseSortableField } from "../models/CaseSortableField";
import { CasesResponse } from "../models/CasesResponse";
import { CaseUpdateAttributesRequest } from "../models/CaseUpdateAttributesRequest";
import { CaseUpdateCustomAttributeRequest } from "../models/CaseUpdateCustomAttributeRequest";
import { CaseUpdateDescriptionRequest } from "../models/CaseUpdateDescriptionRequest";
import { CaseUpdatePriorityRequest } from "../models/CaseUpdatePriorityRequest";
import { CaseUpdateStatusRequest } from "../models/CaseUpdateStatusRequest";
import { CaseUpdateTitleRequest } from "../models/CaseUpdateTitleRequest";
import { JiraIssueCreateRequest } from "../models/JiraIssueCreateRequest";
import { JiraIssueLinkRequest } from "../models/JiraIssueLinkRequest";
import { NotebookCreateRequest } from "../models/NotebookCreateRequest";
import { ProjectCreateRequest } from "../models/ProjectCreateRequest";
import { ProjectRelationship } from "../models/ProjectRelationship";
import { ProjectResponse } from "../models/ProjectResponse";
import { ProjectsResponse } from "../models/ProjectsResponse";
import { ProjectUpdateRequest } from "../models/ProjectUpdateRequest";
import { RelationshipToIncidentRequest } from "../models/RelationshipToIncidentRequest";
import { ServiceNowTicketCreateRequest } from "../models/ServiceNowTicketCreateRequest";
import { TimelineResponse } from "../models/TimelineResponse";
export declare class CaseManagementApiRequestFactory extends BaseAPIRequestFactory {
    archiveCase(caseId: string, body: CaseEmptyRequest, _options?: Configuration): Promise<RequestContext>;
    assignCase(caseId: string, body: CaseAssignRequest, _options?: Configuration): Promise<RequestContext>;
    commentCase(caseId: string, body: CaseCommentRequest, _options?: Configuration): Promise<RequestContext>;
    createCase(body: CaseCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createCaseJiraIssue(caseId: string, body: JiraIssueCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createCaseNotebook(caseId: string, body: NotebookCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createCaseServiceNowTicket(caseId: string, body: ServiceNowTicketCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createProject(body: ProjectCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createProjectNotificationRule(projectId: string, body: CaseNotificationRuleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCaseComment(caseId: string, cellId: string, _options?: Configuration): Promise<RequestContext>;
    deleteCaseCustomAttribute(caseId: string, customAttributeKey: string, _options?: Configuration): Promise<RequestContext>;
    deleteProject(projectId: string, _options?: Configuration): Promise<RequestContext>;
    deleteProjectNotificationRule(projectId: string, notificationRuleId: string, _options?: Configuration): Promise<RequestContext>;
    getCase(caseId: string, _options?: Configuration): Promise<RequestContext>;
    getProject(projectId: string, _options?: Configuration): Promise<RequestContext>;
    getProjectNotificationRules(projectId: string, _options?: Configuration): Promise<RequestContext>;
    getProjects(_options?: Configuration): Promise<RequestContext>;
    linkIncident(caseId: string, body: RelationshipToIncidentRequest, _options?: Configuration): Promise<RequestContext>;
    linkJiraIssueToCase(caseId: string, body: JiraIssueLinkRequest, _options?: Configuration): Promise<RequestContext>;
    moveCaseToProject(caseId: string, body: ProjectRelationship, _options?: Configuration): Promise<RequestContext>;
    searchCases(pageSize?: number, pageNumber?: number, sortField?: CaseSortableField, filter?: string, sortAsc?: boolean, _options?: Configuration): Promise<RequestContext>;
    unarchiveCase(caseId: string, body: CaseEmptyRequest, _options?: Configuration): Promise<RequestContext>;
    unassignCase(caseId: string, body: CaseEmptyRequest, _options?: Configuration): Promise<RequestContext>;
    unlinkJiraIssue(caseId: string, _options?: Configuration): Promise<RequestContext>;
    updateAttributes(caseId: string, body: CaseUpdateAttributesRequest, _options?: Configuration): Promise<RequestContext>;
    updateCaseCustomAttribute(caseId: string, customAttributeKey: string, body: CaseUpdateCustomAttributeRequest, _options?: Configuration): Promise<RequestContext>;
    updateCaseDescription(caseId: string, body: CaseUpdateDescriptionRequest, _options?: Configuration): Promise<RequestContext>;
    updateCaseTitle(caseId: string, body: CaseUpdateTitleRequest, _options?: Configuration): Promise<RequestContext>;
    updatePriority(caseId: string, body: CaseUpdatePriorityRequest, _options?: Configuration): Promise<RequestContext>;
    updateProject(projectId: string, body: ProjectUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateProjectNotificationRule(projectId: string, notificationRuleId: string, body: CaseNotificationRuleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateStatus(caseId: string, body: CaseUpdateStatusRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CaseManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    archiveCase(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    assignCase(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    commentCase(response: ResponseContext): Promise<TimelineResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCase(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCaseJiraIssue
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCaseJiraIssue(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCaseNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCaseNotebook(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCaseServiceNowTicket
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCaseServiceNowTicket(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    createProject(response: ResponseContext): Promise<ProjectResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProjectNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createProjectNotificationRule(response: ResponseContext): Promise<CaseNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCaseComment
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCaseComment(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCaseCustomAttribute
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCaseCustomAttribute(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteProject(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProjectNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteProjectNotificationRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCase(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProject(response: ResponseContext): Promise<ProjectResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectNotificationRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProjectNotificationRules(response: ResponseContext): Promise<CaseNotificationRulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProjects(response: ResponseContext): Promise<ProjectsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to linkIncident
     * @throws ApiException if the response code was not in [200, 299]
     */
    linkIncident(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to linkJiraIssueToCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    linkJiraIssueToCase(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to moveCaseToProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    moveCaseToProject(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchCases
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchCases(response: ResponseContext): Promise<CasesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unarchiveCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    unarchiveCase(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignCase
     * @throws ApiException if the response code was not in [200, 299]
     */
    unassignCase(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unlinkJiraIssue
     * @throws ApiException if the response code was not in [200, 299]
     */
    unlinkJiraIssue(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAttributes
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAttributes(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCaseCustomAttribute
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCaseCustomAttribute(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCaseDescription
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCaseDescription(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCaseTitle
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCaseTitle(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePriority
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePriority(response: ResponseContext): Promise<CaseResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateProject(response: ResponseContext): Promise<ProjectResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProjectNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateProjectNotificationRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateStatus(response: ResponseContext): Promise<CaseResponse>;
}
export interface CaseManagementApiArchiveCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Archive case payload
     * @type CaseEmptyRequest
     */
    body: CaseEmptyRequest;
}
export interface CaseManagementApiAssignCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Assign case payload
     * @type CaseAssignRequest
     */
    body: CaseAssignRequest;
}
export interface CaseManagementApiCommentCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case comment payload
     * @type CaseCommentRequest
     */
    body: CaseCommentRequest;
}
export interface CaseManagementApiCreateCaseRequest {
    /**
     * Case payload
     * @type CaseCreateRequest
     */
    body: CaseCreateRequest;
}
export interface CaseManagementApiCreateCaseJiraIssueRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Jira issue creation request
     * @type JiraIssueCreateRequest
     */
    body: JiraIssueCreateRequest;
}
export interface CaseManagementApiCreateCaseNotebookRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Notebook creation request
     * @type NotebookCreateRequest
     */
    body: NotebookCreateRequest;
}
export interface CaseManagementApiCreateCaseServiceNowTicketRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * ServiceNow ticket creation request
     * @type ServiceNowTicketCreateRequest
     */
    body: ServiceNowTicketCreateRequest;
}
export interface CaseManagementApiCreateProjectRequest {
    /**
     * Project payload
     * @type ProjectCreateRequest
     */
    body: ProjectCreateRequest;
}
export interface CaseManagementApiCreateProjectNotificationRuleRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
    /**
     * Notification rule payload
     * @type CaseNotificationRuleCreateRequest
     */
    body: CaseNotificationRuleCreateRequest;
}
export interface CaseManagementApiDeleteCaseCommentRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Timeline cell's UUID
     * @type string
     */
    cellId: string;
}
export interface CaseManagementApiDeleteCaseCustomAttributeRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case Custom attribute's key
     * @type string
     */
    customAttributeKey: string;
}
export interface CaseManagementApiDeleteProjectRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
}
export interface CaseManagementApiDeleteProjectNotificationRuleRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
    /**
     * Notification Rule UUID
     * @type string
     */
    notificationRuleId: string;
}
export interface CaseManagementApiGetCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
}
export interface CaseManagementApiGetProjectRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
}
export interface CaseManagementApiGetProjectNotificationRulesRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
}
export interface CaseManagementApiLinkIncidentRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Incident link request
     * @type RelationshipToIncidentRequest
     */
    body: RelationshipToIncidentRequest;
}
export interface CaseManagementApiLinkJiraIssueToCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Jira issue link request
     * @type JiraIssueLinkRequest
     */
    body: JiraIssueLinkRequest;
}
export interface CaseManagementApiMoveCaseToProjectRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Project update request
     * @type ProjectRelationship
     */
    body: ProjectRelationship;
}
export interface CaseManagementApiSearchCasesRequest {
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
     * Specify which field to sort
     * @type CaseSortableField
     */
    sortField?: CaseSortableField;
    /**
     * Search query
     * @type string
     */
    filter?: string;
    /**
     * Specify if order is ascending or not
     * @type boolean
     */
    sortAsc?: boolean;
}
export interface CaseManagementApiUnarchiveCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Unarchive case payload
     * @type CaseEmptyRequest
     */
    body: CaseEmptyRequest;
}
export interface CaseManagementApiUnassignCaseRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Unassign case payload
     * @type CaseEmptyRequest
     */
    body: CaseEmptyRequest;
}
export interface CaseManagementApiUnlinkJiraIssueRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
}
export interface CaseManagementApiUpdateAttributesRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case attributes update payload
     * @type CaseUpdateAttributesRequest
     */
    body: CaseUpdateAttributesRequest;
}
export interface CaseManagementApiUpdateCaseCustomAttributeRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case Custom attribute's key
     * @type string
     */
    customAttributeKey: string;
    /**
     * Update case custom attribute payload
     * @type CaseUpdateCustomAttributeRequest
     */
    body: CaseUpdateCustomAttributeRequest;
}
export interface CaseManagementApiUpdateCaseDescriptionRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case description update payload
     * @type CaseUpdateDescriptionRequest
     */
    body: CaseUpdateDescriptionRequest;
}
export interface CaseManagementApiUpdateCaseTitleRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case title update payload
     * @type CaseUpdateTitleRequest
     */
    body: CaseUpdateTitleRequest;
}
export interface CaseManagementApiUpdatePriorityRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case priority update payload
     * @type CaseUpdatePriorityRequest
     */
    body: CaseUpdatePriorityRequest;
}
export interface CaseManagementApiUpdateProjectRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
    /**
     * Project payload
     * @type ProjectUpdateRequest
     */
    body: ProjectUpdateRequest;
}
export interface CaseManagementApiUpdateProjectNotificationRuleRequest {
    /**
     * Project UUID
     * @type string
     */
    projectId: string;
    /**
     * Notification Rule UUID
     * @type string
     */
    notificationRuleId: string;
    /**
     * Notification rule payload
     * @type CaseNotificationRuleUpdateRequest
     */
    body: CaseNotificationRuleUpdateRequest;
}
export interface CaseManagementApiUpdateStatusRequest {
    /**
     * Case's UUID or key
     * @type string
     */
    caseId: string;
    /**
     * Case status update payload
     * @type CaseUpdateStatusRequest
     */
    body: CaseUpdateStatusRequest;
}
export declare class CaseManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CaseManagementApiRequestFactory, responseProcessor?: CaseManagementApiResponseProcessor);
    /**
     * Archive case
     * @param param The request object
     */
    archiveCase(param: CaseManagementApiArchiveCaseRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Assign case to a user
     * @param param The request object
     */
    assignCase(param: CaseManagementApiAssignCaseRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Comment case
     * @param param The request object
     */
    commentCase(param: CaseManagementApiCommentCaseRequest, options?: Configuration): Promise<TimelineResponse>;
    /**
     * Create a Case
     * @param param The request object
     */
    createCase(param: CaseManagementApiCreateCaseRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Create a new Jira issue and link it to a case
     * @param param The request object
     */
    createCaseJiraIssue(param: CaseManagementApiCreateCaseJiraIssueRequest, options?: Configuration): Promise<void>;
    /**
     * Create a new investigation notebook and link it to a case
     * @param param The request object
     */
    createCaseNotebook(param: CaseManagementApiCreateCaseNotebookRequest, options?: Configuration): Promise<void>;
    /**
     * Create a new ServiceNow incident ticket and link it to a case
     * @param param The request object
     */
    createCaseServiceNowTicket(param: CaseManagementApiCreateCaseServiceNowTicketRequest, options?: Configuration): Promise<void>;
    /**
     * Create a project.
     * @param param The request object
     */
    createProject(param: CaseManagementApiCreateProjectRequest, options?: Configuration): Promise<ProjectResponse>;
    /**
     * Create a notification rule for a project.
     * @param param The request object
     */
    createProjectNotificationRule(param: CaseManagementApiCreateProjectNotificationRuleRequest, options?: Configuration): Promise<CaseNotificationRuleResponse>;
    /**
     * Delete case comment
     * @param param The request object
     */
    deleteCaseComment(param: CaseManagementApiDeleteCaseCommentRequest, options?: Configuration): Promise<void>;
    /**
     * Delete custom attribute from case
     * @param param The request object
     */
    deleteCaseCustomAttribute(param: CaseManagementApiDeleteCaseCustomAttributeRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Remove a project using the project's `id`.
     * @param param The request object
     */
    deleteProject(param: CaseManagementApiDeleteProjectRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a notification rule using the notification rule's `id`.
     * @param param The request object
     */
    deleteProjectNotificationRule(param: CaseManagementApiDeleteProjectNotificationRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Get the details of case by `case_id`
     * @param param The request object
     */
    getCase(param: CaseManagementApiGetCaseRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Get the details of a project by `project_id`.
     * @param param The request object
     */
    getProject(param: CaseManagementApiGetProjectRequest, options?: Configuration): Promise<ProjectResponse>;
    /**
     * Get all notification rules for a project.
     * @param param The request object
     */
    getProjectNotificationRules(param: CaseManagementApiGetProjectNotificationRulesRequest, options?: Configuration): Promise<CaseNotificationRulesResponse>;
    /**
     * Get all projects.
     * @param param The request object
     */
    getProjects(options?: Configuration): Promise<ProjectsResponse>;
    /**
     * Link an incident to a case
     * @param param The request object
     */
    linkIncident(param: CaseManagementApiLinkIncidentRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Link an existing Jira issue to a case
     * @param param The request object
     */
    linkJiraIssueToCase(param: CaseManagementApiLinkJiraIssueToCaseRequest, options?: Configuration): Promise<void>;
    /**
     * Update the project associated with a case
     * @param param The request object
     */
    moveCaseToProject(param: CaseManagementApiMoveCaseToProjectRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Search cases.
     * @param param The request object
     */
    searchCases(param?: CaseManagementApiSearchCasesRequest, options?: Configuration): Promise<CasesResponse>;
    /**
     * Provide a paginated version of searchCases returning a generator with all the items.
     */
    searchCasesWithPagination(param?: CaseManagementApiSearchCasesRequest, options?: Configuration): AsyncGenerator<Case>;
    /**
     * Unarchive case
     * @param param The request object
     */
    unarchiveCase(param: CaseManagementApiUnarchiveCaseRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Unassign case
     * @param param The request object
     */
    unassignCase(param: CaseManagementApiUnassignCaseRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Remove the link between a Jira issue and a case
     * @param param The request object
     */
    unlinkJiraIssue(param: CaseManagementApiUnlinkJiraIssueRequest, options?: Configuration): Promise<void>;
    /**
     * Update case attributes
     * @param param The request object
     */
    updateAttributes(param: CaseManagementApiUpdateAttributesRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Update case custom attribute
     * @param param The request object
     */
    updateCaseCustomAttribute(param: CaseManagementApiUpdateCaseCustomAttributeRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Update case description
     * @param param The request object
     */
    updateCaseDescription(param: CaseManagementApiUpdateCaseDescriptionRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Update case title
     * @param param The request object
     */
    updateCaseTitle(param: CaseManagementApiUpdateCaseTitleRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Update case priority
     * @param param The request object
     */
    updatePriority(param: CaseManagementApiUpdatePriorityRequest, options?: Configuration): Promise<CaseResponse>;
    /**
     * Update a project.
     * @param param The request object
     */
    updateProject(param: CaseManagementApiUpdateProjectRequest, options?: Configuration): Promise<ProjectResponse>;
    /**
     * Update a notification rule.
     * @param param The request object
     */
    updateProjectNotificationRule(param: CaseManagementApiUpdateProjectNotificationRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Update case status
     * @param param The request object
     */
    updateStatus(param: CaseManagementApiUpdateStatusRequest, options?: Configuration): Promise<CaseResponse>;
}
