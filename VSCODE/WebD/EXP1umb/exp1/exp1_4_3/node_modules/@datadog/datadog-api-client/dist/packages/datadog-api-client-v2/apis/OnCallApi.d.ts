import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateOnCallNotificationRuleRequest } from "../models/CreateOnCallNotificationRuleRequest";
import { CreateUserNotificationChannelRequest } from "../models/CreateUserNotificationChannelRequest";
import { EscalationPolicy } from "../models/EscalationPolicy";
import { EscalationPolicyCreateRequest } from "../models/EscalationPolicyCreateRequest";
import { EscalationPolicyUpdateRequest } from "../models/EscalationPolicyUpdateRequest";
import { ListNotificationChannelsResponse } from "../models/ListNotificationChannelsResponse";
import { ListOnCallNotificationRulesResponse } from "../models/ListOnCallNotificationRulesResponse";
import { NotificationChannel } from "../models/NotificationChannel";
import { OnCallNotificationRule } from "../models/OnCallNotificationRule";
import { Schedule } from "../models/Schedule";
import { ScheduleCreateRequest } from "../models/ScheduleCreateRequest";
import { ScheduleUpdateRequest } from "../models/ScheduleUpdateRequest";
import { Shift } from "../models/Shift";
import { TeamOnCallResponders } from "../models/TeamOnCallResponders";
import { TeamRoutingRules } from "../models/TeamRoutingRules";
import { TeamRoutingRulesRequest } from "../models/TeamRoutingRulesRequest";
import { UpdateOnCallNotificationRuleRequest } from "../models/UpdateOnCallNotificationRuleRequest";
export declare class OnCallApiRequestFactory extends BaseAPIRequestFactory {
    createOnCallEscalationPolicy(body: EscalationPolicyCreateRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    createOnCallSchedule(body: ScheduleCreateRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    createUserNotificationChannel(userId: string, body: CreateUserNotificationChannelRequest, _options?: Configuration): Promise<RequestContext>;
    createUserNotificationRule(userId: string, body: CreateOnCallNotificationRuleRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOnCallEscalationPolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
    deleteOnCallSchedule(scheduleId: string, _options?: Configuration): Promise<RequestContext>;
    deleteUserNotificationChannel(userId: string, channelId: string, _options?: Configuration): Promise<RequestContext>;
    deleteUserNotificationRule(userId: string, ruleId: string, _options?: Configuration): Promise<RequestContext>;
    getOnCallEscalationPolicy(policyId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getOnCallSchedule(scheduleId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getOnCallTeamRoutingRules(teamId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getScheduleOnCallUser(scheduleId: string, include?: string, filterAtTs?: string, _options?: Configuration): Promise<RequestContext>;
    getTeamOnCallUsers(teamId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getUserNotificationChannel(userId: string, channelId: string, _options?: Configuration): Promise<RequestContext>;
    getUserNotificationRule(userId: string, ruleId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    listUserNotificationChannels(userId: string, _options?: Configuration): Promise<RequestContext>;
    listUserNotificationRules(userId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    setOnCallTeamRoutingRules(teamId: string, body: TeamRoutingRulesRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateOnCallEscalationPolicy(policyId: string, body: EscalationPolicyUpdateRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateOnCallSchedule(scheduleId: string, body: ScheduleUpdateRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateUserNotificationRule(userId: string, ruleId: string, body: UpdateOnCallNotificationRuleRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class OnCallApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOnCallEscalationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOnCallEscalationPolicy(response: ResponseContext): Promise<EscalationPolicy>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOnCallSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOnCallSchedule(response: ResponseContext): Promise<Schedule>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUserNotificationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    createUserNotificationChannel(response: ResponseContext): Promise<NotificationChannel>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUserNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createUserNotificationRule(response: ResponseContext): Promise<OnCallNotificationRule>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOnCallEscalationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOnCallEscalationPolicy(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOnCallSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOnCallSchedule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserNotificationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteUserNotificationChannel(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteUserNotificationRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOnCallEscalationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOnCallEscalationPolicy(response: ResponseContext): Promise<EscalationPolicy>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOnCallSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOnCallSchedule(response: ResponseContext): Promise<Schedule>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOnCallTeamRoutingRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOnCallTeamRoutingRules(response: ResponseContext): Promise<TeamRoutingRules>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getScheduleOnCallUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    getScheduleOnCallUser(response: ResponseContext): Promise<Shift>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamOnCallUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTeamOnCallUsers(response: ResponseContext): Promise<TeamOnCallResponders>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserNotificationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUserNotificationChannel(response: ResponseContext): Promise<NotificationChannel>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUserNotificationRule(response: ResponseContext): Promise<OnCallNotificationRule>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserNotificationChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserNotificationChannels(response: ResponseContext): Promise<ListNotificationChannelsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserNotificationRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserNotificationRules(response: ResponseContext): Promise<ListOnCallNotificationRulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setOnCallTeamRoutingRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    setOnCallTeamRoutingRules(response: ResponseContext): Promise<TeamRoutingRules>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOnCallEscalationPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOnCallEscalationPolicy(response: ResponseContext): Promise<EscalationPolicy>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOnCallSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOnCallSchedule(response: ResponseContext): Promise<Schedule>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUserNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateUserNotificationRule(response: ResponseContext): Promise<OnCallNotificationRule>;
}
export interface OnCallApiCreateOnCallEscalationPolicyRequest {
    /**
     * @type EscalationPolicyCreateRequest
     */
    body: EscalationPolicyCreateRequest;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiCreateOnCallScheduleRequest {
    /**
     * @type ScheduleCreateRequest
     */
    body: ScheduleCreateRequest;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiCreateUserNotificationChannelRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * @type CreateUserNotificationChannelRequest
     */
    body: CreateUserNotificationChannelRequest;
}
export interface OnCallApiCreateUserNotificationRuleRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * @type CreateOnCallNotificationRuleRequest
     */
    body: CreateOnCallNotificationRuleRequest;
}
export interface OnCallApiDeleteOnCallEscalationPolicyRequest {
    /**
     * The ID of the escalation policy
     * @type string
     */
    policyId: string;
}
export interface OnCallApiDeleteOnCallScheduleRequest {
    /**
     * The ID of the schedule
     * @type string
     */
    scheduleId: string;
}
export interface OnCallApiDeleteUserNotificationChannelRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * The channel ID
     * @type string
     */
    channelId: string;
}
export interface OnCallApiDeleteUserNotificationRuleRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * The rule ID
     * @type string
     */
    ruleId: string;
}
export interface OnCallApiGetOnCallEscalationPolicyRequest {
    /**
     * The ID of the escalation policy
     * @type string
     */
    policyId: string;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiGetOnCallScheduleRequest {
    /**
     * The ID of the schedule
     * @type string
     */
    scheduleId: string;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiGetOnCallTeamRoutingRulesRequest {
    /**
     * The team ID
     * @type string
     */
    teamId: string;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiGetScheduleOnCallUserRequest {
    /**
     * The ID of the schedule.
     * @type string
     */
    scheduleId: string;
    /**
     * Specifies related resources to include in the response as a comma-separated list. Allowed value: `user`.
     * @type string
     */
    include?: string;
    /**
     * Retrieves the on-call user at the given timestamp in RFC3339 format (for example, `2025-05-07T02:53:01Z` or `2025-05-07T02:53:01+00:00`). When using timezone offsets with `+` or `-`, ensure proper URL encoding (`+` should be encoded as `%2B`). Defaults to the current time if omitted.
     * @type string
     */
    filterAtTs?: string;
}
export interface OnCallApiGetTeamOnCallUsersRequest {
    /**
     * The team ID
     * @type string
     */
    teamId: string;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `responders`, `escalations`, `escalations.responders`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiGetUserNotificationChannelRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * The channel ID
     * @type string
     */
    channelId: string;
}
export interface OnCallApiGetUserNotificationRuleRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * The rule ID
     * @type string
     */
    ruleId: string;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `channel`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiListUserNotificationChannelsRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
}
export interface OnCallApiListUserNotificationRulesRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `channel`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiSetOnCallTeamRoutingRulesRequest {
    /**
     * The team ID
     * @type string
     */
    teamId: string;
    /**
     * @type TeamRoutingRulesRequest
     */
    body: TeamRoutingRulesRequest;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `rules`, `rules.policy`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiUpdateOnCallEscalationPolicyRequest {
    /**
     * The ID of the escalation policy
     * @type string
     */
    policyId: string;
    /**
     * @type EscalationPolicyUpdateRequest
     */
    body: EscalationPolicyUpdateRequest;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `steps`, `steps.targets`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiUpdateOnCallScheduleRequest {
    /**
     * The ID of the schedule
     * @type string
     */
    scheduleId: string;
    /**
     * @type ScheduleUpdateRequest
     */
    body: ScheduleUpdateRequest;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`.
     * @type string
     */
    include?: string;
}
export interface OnCallApiUpdateUserNotificationRuleRequest {
    /**
     * The user ID
     * @type string
     */
    userId: string;
    /**
     * The rule ID
     * @type string
     */
    ruleId: string;
    /**
     * @type UpdateOnCallNotificationRuleRequest
     */
    body: UpdateOnCallNotificationRuleRequest;
    /**
     * Comma-separated list of included relationships to be returned. Allowed values: `channel`.
     * @type string
     */
    include?: string;
}
export declare class OnCallApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OnCallApiRequestFactory, responseProcessor?: OnCallApiResponseProcessor);
    /**
     * Create a new On-Call escalation policy
     * @param param The request object
     */
    createOnCallEscalationPolicy(param: OnCallApiCreateOnCallEscalationPolicyRequest, options?: Configuration): Promise<EscalationPolicy>;
    /**
     * Create a new On-Call schedule
     * @param param The request object
     */
    createOnCallSchedule(param: OnCallApiCreateOnCallScheduleRequest, options?: Configuration): Promise<Schedule>;
    /**
     * Create a new notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    createUserNotificationChannel(param: OnCallApiCreateUserNotificationChannelRequest, options?: Configuration): Promise<NotificationChannel>;
    /**
     * Create a new notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    createUserNotificationRule(param: OnCallApiCreateUserNotificationRuleRequest, options?: Configuration): Promise<OnCallNotificationRule>;
    /**
     * Delete an On-Call escalation policy
     * @param param The request object
     */
    deleteOnCallEscalationPolicy(param: OnCallApiDeleteOnCallEscalationPolicyRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an On-Call schedule
     * @param param The request object
     */
    deleteOnCallSchedule(param: OnCallApiDeleteOnCallScheduleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    deleteUserNotificationChannel(param: OnCallApiDeleteUserNotificationChannelRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    deleteUserNotificationRule(param: OnCallApiDeleteUserNotificationRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Get an On-Call escalation policy
     * @param param The request object
     */
    getOnCallEscalationPolicy(param: OnCallApiGetOnCallEscalationPolicyRequest, options?: Configuration): Promise<EscalationPolicy>;
    /**
     * Get an On-Call schedule
     * @param param The request object
     */
    getOnCallSchedule(param: OnCallApiGetOnCallScheduleRequest, options?: Configuration): Promise<Schedule>;
    /**
     * Get a team's On-Call routing rules
     * @param param The request object
     */
    getOnCallTeamRoutingRules(param: OnCallApiGetOnCallTeamRoutingRulesRequest, options?: Configuration): Promise<TeamRoutingRules>;
    /**
     * Retrieves the user who is on-call for the specified schedule at a given time.
     * @param param The request object
     */
    getScheduleOnCallUser(param: OnCallApiGetScheduleOnCallUserRequest, options?: Configuration): Promise<Shift>;
    /**
     * Get a team's on-call users at a given time
     * @param param The request object
     */
    getTeamOnCallUsers(param: OnCallApiGetTeamOnCallUsersRequest, options?: Configuration): Promise<TeamOnCallResponders>;
    /**
     * Get a notification channel for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    getUserNotificationChannel(param: OnCallApiGetUserNotificationChannelRequest, options?: Configuration): Promise<NotificationChannel>;
    /**
     * Get a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    getUserNotificationRule(param: OnCallApiGetUserNotificationRuleRequest, options?: Configuration): Promise<OnCallNotificationRule>;
    /**
     * List the notification channels for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    listUserNotificationChannels(param: OnCallApiListUserNotificationChannelsRequest, options?: Configuration): Promise<ListNotificationChannelsResponse>;
    /**
     * List the notification rules for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    listUserNotificationRules(param: OnCallApiListUserNotificationRulesRequest, options?: Configuration): Promise<ListOnCallNotificationRulesResponse>;
    /**
     * Set a team's On-Call routing rules
     * @param param The request object
     */
    setOnCallTeamRoutingRules(param: OnCallApiSetOnCallTeamRoutingRulesRequest, options?: Configuration): Promise<TeamRoutingRules>;
    /**
     * Update an On-Call escalation policy
     * @param param The request object
     */
    updateOnCallEscalationPolicy(param: OnCallApiUpdateOnCallEscalationPolicyRequest, options?: Configuration): Promise<EscalationPolicy>;
    /**
     * Update a new On-Call schedule
     * @param param The request object
     */
    updateOnCallSchedule(param: OnCallApiUpdateOnCallScheduleRequest, options?: Configuration): Promise<Schedule>;
    /**
     * Update a notification rule for a user. The authenticated user must be the target user or have the `on_call_admin` permission
     * @param param The request object
     */
    updateUserNotificationRule(param: OnCallApiUpdateUserNotificationRuleRequest, options?: Configuration): Promise<OnCallNotificationRule>;
}
