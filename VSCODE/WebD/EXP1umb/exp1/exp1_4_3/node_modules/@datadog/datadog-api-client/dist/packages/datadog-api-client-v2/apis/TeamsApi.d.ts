import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AddMemberTeamRequest } from "../models/AddMemberTeamRequest";
import { GetTeamMembershipsSort } from "../models/GetTeamMembershipsSort";
import { ListTeamsInclude } from "../models/ListTeamsInclude";
import { ListTeamsSort } from "../models/ListTeamsSort";
import { Team } from "../models/Team";
import { TeamConnection } from "../models/TeamConnection";
import { TeamConnectionCreateRequest } from "../models/TeamConnectionCreateRequest";
import { TeamConnectionDeleteRequest } from "../models/TeamConnectionDeleteRequest";
import { TeamConnectionsResponse } from "../models/TeamConnectionsResponse";
import { TeamCreateRequest } from "../models/TeamCreateRequest";
import { TeamHierarchyLink } from "../models/TeamHierarchyLink";
import { TeamHierarchyLinkCreateRequest } from "../models/TeamHierarchyLinkCreateRequest";
import { TeamHierarchyLinkResponse } from "../models/TeamHierarchyLinkResponse";
import { TeamHierarchyLinksResponse } from "../models/TeamHierarchyLinksResponse";
import { TeamLinkCreateRequest } from "../models/TeamLinkCreateRequest";
import { TeamLinkResponse } from "../models/TeamLinkResponse";
import { TeamLinksResponse } from "../models/TeamLinksResponse";
import { TeamNotificationRuleRequest } from "../models/TeamNotificationRuleRequest";
import { TeamNotificationRuleResponse } from "../models/TeamNotificationRuleResponse";
import { TeamNotificationRulesResponse } from "../models/TeamNotificationRulesResponse";
import { TeamPermissionSettingResponse } from "../models/TeamPermissionSettingResponse";
import { TeamPermissionSettingsResponse } from "../models/TeamPermissionSettingsResponse";
import { TeamPermissionSettingUpdateRequest } from "../models/TeamPermissionSettingUpdateRequest";
import { TeamResponse } from "../models/TeamResponse";
import { TeamsField } from "../models/TeamsField";
import { TeamsResponse } from "../models/TeamsResponse";
import { TeamSyncAttributesSource } from "../models/TeamSyncAttributesSource";
import { TeamSyncRequest } from "../models/TeamSyncRequest";
import { TeamSyncResponse } from "../models/TeamSyncResponse";
import { TeamUpdateRequest } from "../models/TeamUpdateRequest";
import { UserTeam } from "../models/UserTeam";
import { UserTeamRequest } from "../models/UserTeamRequest";
import { UserTeamResponse } from "../models/UserTeamResponse";
import { UserTeamsResponse } from "../models/UserTeamsResponse";
import { UserTeamUpdateRequest } from "../models/UserTeamUpdateRequest";
export declare class TeamsApiRequestFactory extends BaseAPIRequestFactory {
    addMemberTeam(superTeamId: string, body: AddMemberTeamRequest, _options?: Configuration): Promise<RequestContext>;
    addTeamHierarchyLink(body: TeamHierarchyLinkCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createTeam(body: TeamCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createTeamConnections(body: TeamConnectionCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createTeamLink(teamId: string, body: TeamLinkCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createTeamMembership(teamId: string, body: UserTeamRequest, _options?: Configuration): Promise<RequestContext>;
    createTeamNotificationRule(teamId: string, body: TeamNotificationRuleRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTeam(teamId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTeamConnections(body: TeamConnectionDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTeamLink(teamId: string, linkId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTeamMembership(teamId: string, userId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTeamNotificationRule(teamId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
    getTeam(teamId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamHierarchyLink(linkId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamLink(teamId: string, linkId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamLinks(teamId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamMemberships(teamId: string, pageSize?: number, pageNumber?: number, sort?: GetTeamMembershipsSort, filterKeyword?: string, _options?: Configuration): Promise<RequestContext>;
    getTeamNotificationRule(teamId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamNotificationRules(teamId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamPermissionSettings(teamId: string, _options?: Configuration): Promise<RequestContext>;
    getTeamSync(filterSource: TeamSyncAttributesSource, _options?: Configuration): Promise<RequestContext>;
    getUserMemberships(userUuid: string, _options?: Configuration): Promise<RequestContext>;
    listMemberTeams(superTeamId: string, pageSize?: number, pageNumber?: number, fieldsTeam?: Array<TeamsField>, _options?: Configuration): Promise<RequestContext>;
    listTeamConnections(pageSize?: number, pageNumber?: number, filterSources?: Array<string>, filterTeamIds?: Array<string>, filterConnectedTeamIds?: Array<string>, filterConnectionIds?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    listTeamHierarchyLinks(pageNumber?: number, pageSize?: number, filterParentTeam?: string, filterSubTeam?: string, _options?: Configuration): Promise<RequestContext>;
    listTeams(pageNumber?: number, pageSize?: number, sort?: ListTeamsSort, include?: Array<ListTeamsInclude>, filterKeyword?: string, filterMe?: boolean, fieldsTeam?: Array<TeamsField>, _options?: Configuration): Promise<RequestContext>;
    removeMemberTeam(superTeamId: string, memberTeamId: string, _options?: Configuration): Promise<RequestContext>;
    removeTeamHierarchyLink(linkId: string, _options?: Configuration): Promise<RequestContext>;
    syncTeams(body: TeamSyncRequest, _options?: Configuration): Promise<RequestContext>;
    updateTeam(teamId: string, body: TeamUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateTeamLink(teamId: string, linkId: string, body: TeamLinkCreateRequest, _options?: Configuration): Promise<RequestContext>;
    updateTeamMembership(teamId: string, userId: string, body: UserTeamUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateTeamNotificationRule(teamId: string, ruleId: string, body: TeamNotificationRuleRequest, _options?: Configuration): Promise<RequestContext>;
    updateTeamPermissionSetting(teamId: string, action: string, body: TeamPermissionSettingUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class TeamsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMemberTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    addMemberTeam(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addTeamHierarchyLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    addTeamHierarchyLink(response: ResponseContext): Promise<TeamHierarchyLinkResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTeam(response: ResponseContext): Promise<TeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTeamConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTeamConnections(response: ResponseContext): Promise<TeamConnectionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTeamLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTeamLink(response: ResponseContext): Promise<TeamLinkResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTeamMembership
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTeamMembership(response: ResponseContext): Promise<UserTeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTeamNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTeamNotificationRule(response: ResponseContext): Promise<TeamNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTeam(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTeamConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTeamConnections(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTeamLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTeamLink(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTeamMembership
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTeamMembership(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTeamNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTeamNotificationRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeam(response: ResponseContext): Promise<TeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamHierarchyLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamHierarchyLink(response: ResponseContext): Promise<TeamHierarchyLinkResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamLink(response: ResponseContext): Promise<TeamLinkResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamLinks(response: ResponseContext): Promise<TeamLinksResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamMemberships
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamMemberships(response: ResponseContext): Promise<UserTeamsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamNotificationRule(response: ResponseContext): Promise<TeamNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamNotificationRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamNotificationRules(response: ResponseContext): Promise<TeamNotificationRulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamPermissionSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamPermissionSettings(response: ResponseContext): Promise<TeamPermissionSettingsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamSync
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamSync(response: ResponseContext): Promise<TeamSyncResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserMemberships
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUserMemberships(response: ResponseContext): Promise<UserTeamsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMemberTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMemberTeams(response: ResponseContext): Promise<TeamsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTeamConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTeamConnections(response: ResponseContext): Promise<TeamConnectionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTeamHierarchyLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTeamHierarchyLinks(response: ResponseContext): Promise<TeamHierarchyLinksResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTeams(response: ResponseContext): Promise<TeamsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeMemberTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeMemberTeam(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeTeamHierarchyLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeTeamHierarchyLink(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to syncTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
    syncTeams(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTeam(response: ResponseContext): Promise<TeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTeamLink
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTeamLink(response: ResponseContext): Promise<TeamLinkResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTeamMembership
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTeamMembership(response: ResponseContext): Promise<UserTeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTeamNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTeamNotificationRule(response: ResponseContext): Promise<TeamNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTeamPermissionSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTeamPermissionSetting(response: ResponseContext): Promise<TeamPermissionSettingResponse>;
}
export interface TeamsApiAddMemberTeamRequest {
    /**
     * None
     * @type string
     */
    superTeamId: string;
    /**
     * @type AddMemberTeamRequest
     */
    body: AddMemberTeamRequest;
}
export interface TeamsApiAddTeamHierarchyLinkRequest {
    /**
     * @type TeamHierarchyLinkCreateRequest
     */
    body: TeamHierarchyLinkCreateRequest;
}
export interface TeamsApiCreateTeamRequest {
    /**
     * @type TeamCreateRequest
     */
    body: TeamCreateRequest;
}
export interface TeamsApiCreateTeamConnectionsRequest {
    /**
     * @type TeamConnectionCreateRequest
     */
    body: TeamConnectionCreateRequest;
}
export interface TeamsApiCreateTeamLinkRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * @type TeamLinkCreateRequest
     */
    body: TeamLinkCreateRequest;
}
export interface TeamsApiCreateTeamMembershipRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * @type UserTeamRequest
     */
    body: UserTeamRequest;
}
export interface TeamsApiCreateTeamNotificationRuleRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * @type TeamNotificationRuleRequest
     */
    body: TeamNotificationRuleRequest;
}
export interface TeamsApiDeleteTeamRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
}
export interface TeamsApiDeleteTeamConnectionsRequest {
    /**
     * @type TeamConnectionDeleteRequest
     */
    body: TeamConnectionDeleteRequest;
}
export interface TeamsApiDeleteTeamLinkRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    linkId: string;
}
export interface TeamsApiDeleteTeamMembershipRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    userId: string;
}
export interface TeamsApiDeleteTeamNotificationRuleRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    ruleId: string;
}
export interface TeamsApiGetTeamRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
}
export interface TeamsApiGetTeamHierarchyLinkRequest {
    /**
     * The team hierarchy link's identifier
     * @type string
     */
    linkId: string;
}
export interface TeamsApiGetTeamLinkRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    linkId: string;
}
export interface TeamsApiGetTeamLinksRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
}
export interface TeamsApiGetTeamMembershipsRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
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
     * Specifies the order of returned team memberships
     * @type GetTeamMembershipsSort
     */
    sort?: GetTeamMembershipsSort;
    /**
     * Search query, can be user email or name
     * @type string
     */
    filterKeyword?: string;
}
export interface TeamsApiGetTeamNotificationRuleRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    ruleId: string;
}
export interface TeamsApiGetTeamNotificationRulesRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
}
export interface TeamsApiGetTeamPermissionSettingsRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
}
export interface TeamsApiGetTeamSyncRequest {
    /**
     * Filter by the external source platform for team synchronization
     * @type TeamSyncAttributesSource
     */
    filterSource: TeamSyncAttributesSource;
}
export interface TeamsApiGetUserMembershipsRequest {
    /**
     * None
     * @type string
     */
    userUuid: string;
}
export interface TeamsApiListMemberTeamsRequest {
    /**
     * None
     * @type string
     */
    superTeamId: string;
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
     * List of fields that need to be fetched.
     * @type Array<TeamsField>
     */
    fieldsTeam?: Array<TeamsField>;
}
export interface TeamsApiListTeamConnectionsRequest {
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
     * Filter team connections by external source systems.
     * @type Array<string>
     */
    filterSources?: Array<string>;
    /**
     * Filter team connections by Datadog team IDs.
     * @type Array<string>
     */
    filterTeamIds?: Array<string>;
    /**
     * Filter team connections by connected team IDs from external systems.
     * @type Array<string>
     */
    filterConnectedTeamIds?: Array<string>;
    /**
     * Filter team connections by connection IDs.
     * @type Array<string>
     */
    filterConnectionIds?: Array<string>;
}
export interface TeamsApiListTeamHierarchyLinksRequest {
    /**
     * Specific page number to return.
     * @type number
     */
    pageNumber?: number;
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Filter by parent team ID
     * @type string
     */
    filterParentTeam?: string;
    /**
     * Filter by sub team ID
     * @type string
     */
    filterSubTeam?: string;
}
export interface TeamsApiListTeamsRequest {
    /**
     * Specific page number to return.
     * @type number
     */
    pageNumber?: number;
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specifies the order of the returned teams
     * @type ListTeamsSort
     */
    sort?: ListTeamsSort;
    /**
     * Included related resources optionally requested. Allowed enum values: `team_links, user_team_permissions`
     * @type Array<ListTeamsInclude>
     */
    include?: Array<ListTeamsInclude>;
    /**
     * Search query. Can be team name, team handle, or email of team member
     * @type string
     */
    filterKeyword?: string;
    /**
     * When true, only returns teams the current user belongs to
     * @type boolean
     */
    filterMe?: boolean;
    /**
     * List of fields that need to be fetched.
     * @type Array<TeamsField>
     */
    fieldsTeam?: Array<TeamsField>;
}
export interface TeamsApiRemoveMemberTeamRequest {
    /**
     * None
     * @type string
     */
    superTeamId: string;
    /**
     * None
     * @type string
     */
    memberTeamId: string;
}
export interface TeamsApiRemoveTeamHierarchyLinkRequest {
    /**
     * The team hierarchy link's identifier
     * @type string
     */
    linkId: string;
}
export interface TeamsApiSyncTeamsRequest {
    /**
     * @type TeamSyncRequest
     */
    body: TeamSyncRequest;
}
export interface TeamsApiUpdateTeamRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * @type TeamUpdateRequest
     */
    body: TeamUpdateRequest;
}
export interface TeamsApiUpdateTeamLinkRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    linkId: string;
    /**
     * @type TeamLinkCreateRequest
     */
    body: TeamLinkCreateRequest;
}
export interface TeamsApiUpdateTeamMembershipRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    userId: string;
    /**
     * @type UserTeamUpdateRequest
     */
    body: UserTeamUpdateRequest;
}
export interface TeamsApiUpdateTeamNotificationRuleRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    ruleId: string;
    /**
     * @type TeamNotificationRuleRequest
     */
    body: TeamNotificationRuleRequest;
}
export interface TeamsApiUpdateTeamPermissionSettingRequest {
    /**
     * None
     * @type string
     */
    teamId: string;
    /**
     * None
     * @type string
     */
    action: string;
    /**
     * @type TeamPermissionSettingUpdateRequest
     */
    body: TeamPermissionSettingUpdateRequest;
}
export declare class TeamsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor);
    /**
     * Add a member team.
     * Adds the team given by the `id` in the body as a member team of the super team.
     *
     * **Note**: This API is deprecated. For creating team hierarchy links, use the team hierarchy links API: `POST /api/v2/team-hierarchy-links`.
     * @param param The request object
     */
    addMemberTeam(param: TeamsApiAddMemberTeamRequest, options?: Configuration): Promise<void>;
    /**
     * Create a new team hierarchy link between a parent team and a sub team.
     * @param param The request object
     */
    addTeamHierarchyLink(param: TeamsApiAddTeamHierarchyLinkRequest, options?: Configuration): Promise<TeamHierarchyLinkResponse>;
    /**
     * Create a new team.
     * User IDs passed through the `users` relationship field are added to the team.
     * @param param The request object
     */
    createTeam(param: TeamsApiCreateTeamRequest, options?: Configuration): Promise<TeamResponse>;
    /**
     * Create multiple team connections.
     * @param param The request object
     */
    createTeamConnections(param: TeamsApiCreateTeamConnectionsRequest, options?: Configuration): Promise<TeamConnectionsResponse>;
    /**
     * Add a new link to a team.
     * @param param The request object
     */
    createTeamLink(param: TeamsApiCreateTeamLinkRequest, options?: Configuration): Promise<TeamLinkResponse>;
    /**
     * Add a user to a team.
     *
     * **Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see [Team Membership documentation](https://docs.datadoghq.com/account_management/teams/manage/#team-membership).
     * @param param The request object
     */
    createTeamMembership(param: TeamsApiCreateTeamMembershipRequest, options?: Configuration): Promise<UserTeamResponse>;
    /**
     * @param param The request object
     */
    createTeamNotificationRule(param: TeamsApiCreateTeamNotificationRuleRequest, options?: Configuration): Promise<TeamNotificationRuleResponse>;
    /**
     * Remove a team using the team's `id`.
     * @param param The request object
     */
    deleteTeam(param: TeamsApiDeleteTeamRequest, options?: Configuration): Promise<void>;
    /**
     * Delete multiple team connections.
     * @param param The request object
     */
    deleteTeamConnections(param: TeamsApiDeleteTeamConnectionsRequest, options?: Configuration): Promise<void>;
    /**
     * Remove a link from a team.
     * @param param The request object
     */
    deleteTeamLink(param: TeamsApiDeleteTeamLinkRequest, options?: Configuration): Promise<void>;
    /**
     * Remove a user from a team.
     *
     * **Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see [Team Membership documentation](https://docs.datadoghq.com/account_management/teams/manage/#team-membership).
     * @param param The request object
     */
    deleteTeamMembership(param: TeamsApiDeleteTeamMembershipRequest, options?: Configuration): Promise<void>;
    /**
     * @param param The request object
     */
    deleteTeamNotificationRule(param: TeamsApiDeleteTeamNotificationRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Get a single team using the team's `id`.
     * @param param The request object
     */
    getTeam(param: TeamsApiGetTeamRequest, options?: Configuration): Promise<TeamResponse>;
    /**
     * Get a single team hierarchy link for the given link_id.
     * @param param The request object
     */
    getTeamHierarchyLink(param: TeamsApiGetTeamHierarchyLinkRequest, options?: Configuration): Promise<TeamHierarchyLinkResponse>;
    /**
     * Get a single link for a team.
     * @param param The request object
     */
    getTeamLink(param: TeamsApiGetTeamLinkRequest, options?: Configuration): Promise<TeamLinkResponse>;
    /**
     * Get all links for a given team.
     * @param param The request object
     */
    getTeamLinks(param: TeamsApiGetTeamLinksRequest, options?: Configuration): Promise<TeamLinksResponse>;
    /**
     * Get a paginated list of members for a team
     * @param param The request object
     */
    getTeamMemberships(param: TeamsApiGetTeamMembershipsRequest, options?: Configuration): Promise<UserTeamsResponse>;
    /**
     * Provide a paginated version of getTeamMemberships returning a generator with all the items.
     */
    getTeamMembershipsWithPagination(param: TeamsApiGetTeamMembershipsRequest, options?: Configuration): AsyncGenerator<UserTeam>;
    /**
     * @param param The request object
     */
    getTeamNotificationRule(param: TeamsApiGetTeamNotificationRuleRequest, options?: Configuration): Promise<TeamNotificationRuleResponse>;
    /**
     * @param param The request object
     */
    getTeamNotificationRules(param: TeamsApiGetTeamNotificationRulesRequest, options?: Configuration): Promise<TeamNotificationRulesResponse>;
    /**
     * Get all permission settings for a given team.
     * @param param The request object
     */
    getTeamPermissionSettings(param: TeamsApiGetTeamPermissionSettingsRequest, options?: Configuration): Promise<TeamPermissionSettingsResponse>;
    /**
     * Get all team synchronization configurations.
     * Returns a list of configurations used for linking or provisioning teams with external sources like GitHub.
     * @param param The request object
     */
    getTeamSync(param: TeamsApiGetTeamSyncRequest, options?: Configuration): Promise<TeamSyncResponse>;
    /**
     * Get a list of memberships for a user
     * @param param The request object
     */
    getUserMemberships(param: TeamsApiGetUserMembershipsRequest, options?: Configuration): Promise<UserTeamsResponse>;
    /**
     * Get all member teams.
     *
     * **Note**: This API is deprecated. For team hierarchy relationships (parent-child
     * teams), use the team hierarchy links API: `GET /api/v2/team-hierarchy-links`.
     * @param param The request object
     */
    listMemberTeams(param: TeamsApiListMemberTeamsRequest, options?: Configuration): Promise<TeamsResponse>;
    /**
     * Provide a paginated version of listMemberTeams returning a generator with all the items.
     */
    listMemberTeamsWithPagination(param: TeamsApiListMemberTeamsRequest, options?: Configuration): AsyncGenerator<Team>;
    /**
     * Returns all team connections.
     * @param param The request object
     */
    listTeamConnections(param?: TeamsApiListTeamConnectionsRequest, options?: Configuration): Promise<TeamConnectionsResponse>;
    /**
     * Provide a paginated version of listTeamConnections returning a generator with all the items.
     */
    listTeamConnectionsWithPagination(param?: TeamsApiListTeamConnectionsRequest, options?: Configuration): AsyncGenerator<TeamConnection>;
    /**
     * List all team hierarchy links that match the provided filters.
     * @param param The request object
     */
    listTeamHierarchyLinks(param?: TeamsApiListTeamHierarchyLinksRequest, options?: Configuration): Promise<TeamHierarchyLinksResponse>;
    /**
     * Provide a paginated version of listTeamHierarchyLinks returning a generator with all the items.
     */
    listTeamHierarchyLinksWithPagination(param?: TeamsApiListTeamHierarchyLinksRequest, options?: Configuration): AsyncGenerator<TeamHierarchyLink>;
    /**
     * Get all teams.
     * Can be used to search for teams using the `filter[keyword]` and `filter[me]` query parameters.
     * @param param The request object
     */
    listTeams(param?: TeamsApiListTeamsRequest, options?: Configuration): Promise<TeamsResponse>;
    /**
     * Provide a paginated version of listTeams returning a generator with all the items.
     */
    listTeamsWithPagination(param?: TeamsApiListTeamsRequest, options?: Configuration): AsyncGenerator<Team>;
    /**
     * Remove a super team's member team identified by `member_team_id`.
     *
     * **Note**: This API is deprecated. For deleting team hierarchy links, use the team hierarchy links API: `DELETE /api/v2/team-hierarchy-links/{link_id}`.
     * @param param The request object
     */
    removeMemberTeam(param: TeamsApiRemoveMemberTeamRequest, options?: Configuration): Promise<void>;
    /**
     * Remove a team hierarchy link by the given link_id.
     * @param param The request object
     */
    removeTeamHierarchyLink(param: TeamsApiRemoveTeamHierarchyLinkRequest, options?: Configuration): Promise<void>;
    /**
     * This endpoint attempts to link your existing Datadog teams with GitHub teams by matching their names.
     * It evaluates all current Datadog teams and compares them against teams in the GitHub organization
     * connected to your Datadog account, based on Datadog Team handle and GitHub Team slug
     * (lowercased and kebab-cased).
     *
     * This operation is read-only on the GitHub side, no teams will be modified or created.
     *
     * [A GitHub organization must be connected to your Datadog account](https://docs.datadoghq.com/integrations/github/),
     * and the GitHub App integrated with Datadog must have the `Members Read` permission. Matching is performed by comparing the Datadog team handle to the GitHub team slug
     * using a normalized exact match; case is ignored and spaces are removed. No modifications are made
     * to teams in GitHub. This only creates new teams in Datadog when type is set to `provision`.
     * @param param The request object
     */
    syncTeams(param: TeamsApiSyncTeamsRequest, options?: Configuration): Promise<void>;
    /**
     * Update a team using the team's `id`.
     * If the `team_links` relationship is present, the associated links are updated to be in the order they appear in the array, and any existing team links not present are removed.
     * @param param The request object
     */
    updateTeam(param: TeamsApiUpdateTeamRequest, options?: Configuration): Promise<TeamResponse>;
    /**
     * Update a team link.
     * @param param The request object
     */
    updateTeamLink(param: TeamsApiUpdateTeamLinkRequest, options?: Configuration): Promise<TeamLinkResponse>;
    /**
     * Update a user's membership attributes on a team.
     *
     * **Note**: Each team has a setting that determines who is allowed to modify membership of the team. The `user_access_manage` permission generally grants access to modify membership of any team. To get the full picture, see [Team Membership documentation](https://docs.datadoghq.com/account_management/teams/manage/#team-membership).
     * @param param The request object
     */
    updateTeamMembership(param: TeamsApiUpdateTeamMembershipRequest, options?: Configuration): Promise<UserTeamResponse>;
    /**
     * @param param The request object
     */
    updateTeamNotificationRule(param: TeamsApiUpdateTeamNotificationRuleRequest, options?: Configuration): Promise<TeamNotificationRuleResponse>;
    /**
     * Update a team permission setting for a given team.
     * @param param The request object
     */
    updateTeamPermissionSetting(param: TeamsApiUpdateTeamPermissionSettingRequest, options?: Configuration): Promise<TeamPermissionSettingResponse>;
}
