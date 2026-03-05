import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { MonitorConfigPolicyCreateRequest } from "../models/MonitorConfigPolicyCreateRequest";
import { MonitorConfigPolicyEditRequest } from "../models/MonitorConfigPolicyEditRequest";
import { MonitorConfigPolicyListResponse } from "../models/MonitorConfigPolicyListResponse";
import { MonitorConfigPolicyResponse } from "../models/MonitorConfigPolicyResponse";
import { MonitorNotificationRuleCreateRequest } from "../models/MonitorNotificationRuleCreateRequest";
import { MonitorNotificationRuleListResponse } from "../models/MonitorNotificationRuleListResponse";
import { MonitorNotificationRuleResponse } from "../models/MonitorNotificationRuleResponse";
import { MonitorNotificationRuleUpdateRequest } from "../models/MonitorNotificationRuleUpdateRequest";
import { MonitorUserTemplateCreateRequest } from "../models/MonitorUserTemplateCreateRequest";
import { MonitorUserTemplateCreateResponse } from "../models/MonitorUserTemplateCreateResponse";
import { MonitorUserTemplateListResponse } from "../models/MonitorUserTemplateListResponse";
import { MonitorUserTemplateResponse } from "../models/MonitorUserTemplateResponse";
import { MonitorUserTemplateUpdateRequest } from "../models/MonitorUserTemplateUpdateRequest";
export declare class MonitorsApiRequestFactory extends BaseAPIRequestFactory {
    createMonitorConfigPolicy(body: MonitorConfigPolicyCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createMonitorNotificationRule(body: MonitorNotificationRuleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createMonitorUserTemplate(body: MonitorUserTemplateCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteMonitorConfigPolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
    deleteMonitorNotificationRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
    deleteMonitorUserTemplate(templateId: string, _options?: Configuration): Promise<RequestContext>;
    getMonitorConfigPolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
    getMonitorNotificationRule(ruleId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getMonitorNotificationRules(page?: number, perPage?: number, sort?: string, filters?: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getMonitorUserTemplate(templateId: string, withAllVersions?: boolean, _options?: Configuration): Promise<RequestContext>;
    listMonitorConfigPolicies(_options?: Configuration): Promise<RequestContext>;
    listMonitorUserTemplates(_options?: Configuration): Promise<RequestContext>;
    updateMonitorConfigPolicy(policyId: string, body: MonitorConfigPolicyEditRequest, _options?: Configuration): Promise<RequestContext>;
    updateMonitorNotificationRule(ruleId: string, body: MonitorNotificationRuleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateMonitorUserTemplate(templateId: string, body: MonitorUserTemplateUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    validateExistingMonitorUserTemplate(templateId: string, body: MonitorUserTemplateUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    validateMonitorUserTemplate(body: MonitorUserTemplateCreateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class MonitorsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMonitorConfigPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    createMonitorConfigPolicy(response: ResponseContext): Promise<MonitorConfigPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMonitorNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createMonitorNotificationRule(response: ResponseContext): Promise<MonitorNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMonitorUserTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    createMonitorUserTemplate(response: ResponseContext): Promise<MonitorUserTemplateCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMonitorConfigPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteMonitorConfigPolicy(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMonitorNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteMonitorNotificationRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMonitorUserTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteMonitorUserTemplate(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonitorConfigPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonitorConfigPolicy(response: ResponseContext): Promise<MonitorConfigPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonitorNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonitorNotificationRule(response: ResponseContext): Promise<MonitorNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonitorNotificationRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonitorNotificationRules(response: ResponseContext): Promise<MonitorNotificationRuleListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonitorUserTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonitorUserTemplate(response: ResponseContext): Promise<MonitorUserTemplateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMonitorConfigPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMonitorConfigPolicies(response: ResponseContext): Promise<MonitorConfigPolicyListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMonitorUserTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMonitorUserTemplates(response: ResponseContext): Promise<MonitorUserTemplateListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMonitorConfigPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMonitorConfigPolicy(response: ResponseContext): Promise<MonitorConfigPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMonitorNotificationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMonitorNotificationRule(response: ResponseContext): Promise<MonitorNotificationRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMonitorUserTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMonitorUserTemplate(response: ResponseContext): Promise<MonitorUserTemplateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateExistingMonitorUserTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateExistingMonitorUserTemplate(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateMonitorUserTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateMonitorUserTemplate(response: ResponseContext): Promise<void>;
}
export interface MonitorsApiCreateMonitorConfigPolicyRequest {
    /**
     * Create a monitor configuration policy request body.
     * @type MonitorConfigPolicyCreateRequest
     */
    body: MonitorConfigPolicyCreateRequest;
}
export interface MonitorsApiCreateMonitorNotificationRuleRequest {
    /**
     * Request body to create a monitor notification rule.
     * @type MonitorNotificationRuleCreateRequest
     */
    body: MonitorNotificationRuleCreateRequest;
}
export interface MonitorsApiCreateMonitorUserTemplateRequest {
    /**
     * @type MonitorUserTemplateCreateRequest
     */
    body: MonitorUserTemplateCreateRequest;
}
export interface MonitorsApiDeleteMonitorConfigPolicyRequest {
    /**
     * ID of the monitor configuration policy.
     * @type string
     */
    policyId: string;
}
export interface MonitorsApiDeleteMonitorNotificationRuleRequest {
    /**
     * ID of the monitor notification rule to delete.
     * @type string
     */
    ruleId: string;
}
export interface MonitorsApiDeleteMonitorUserTemplateRequest {
    /**
     * ID of the monitor user template.
     * @type string
     */
    templateId: string;
}
export interface MonitorsApiGetMonitorConfigPolicyRequest {
    /**
     * ID of the monitor configuration policy.
     * @type string
     */
    policyId: string;
}
export interface MonitorsApiGetMonitorNotificationRuleRequest {
    /**
     * ID of the monitor notification rule to fetch.
     * @type string
     */
    ruleId: string;
    /**
     * Comma-separated list of resource paths for related resources to include in the response. Supported resource
     * path is `created_by`.
     * @type string
     */
    include?: string;
}
export interface MonitorsApiGetMonitorNotificationRulesRequest {
    /**
     * The page to start paginating from. If `page` is not specified, the argument defaults to the first page.
     * @type number
     */
    page?: number;
    /**
     * The number of rules to return per page. If `per_page` is not specified, the argument defaults to 100.
     * @type number
     */
    perPage?: number;
    /**
     * String for sort order, composed of field and sort order separated by a colon, for example `name:asc`. Supported sort directions: `asc`, `desc`. Supported fields: `name`, `created_at`.
     * @type string
     */
    sort?: string;
    /**
     * JSON-encoded filter object. Supported keys:
     * * `text`: Free-text query matched against rule name, tags, and recipients.
     * * `tags`: Array of strings. Return rules that have any of these tags.
     * * `recipients`: Array of strings. Return rules that have any of these recipients.
     * @type string
     */
    filters?: string;
    /**
     * Comma-separated list of resource paths for related resources to include in the response. Supported resource
     * path is `created_by`.
     * @type string
     */
    include?: string;
}
export interface MonitorsApiGetMonitorUserTemplateRequest {
    /**
     * ID of the monitor user template.
     * @type string
     */
    templateId: string;
    /**
     * Whether to include all versions of the template in the response in the versions field.
     * @type boolean
     */
    withAllVersions?: boolean;
}
export interface MonitorsApiUpdateMonitorConfigPolicyRequest {
    /**
     * ID of the monitor configuration policy.
     * @type string
     */
    policyId: string;
    /**
     * Description of the update.
     * @type MonitorConfigPolicyEditRequest
     */
    body: MonitorConfigPolicyEditRequest;
}
export interface MonitorsApiUpdateMonitorNotificationRuleRequest {
    /**
     * ID of the monitor notification rule to update.
     * @type string
     */
    ruleId: string;
    /**
     * Request body to update the monitor notification rule.
     * @type MonitorNotificationRuleUpdateRequest
     */
    body: MonitorNotificationRuleUpdateRequest;
}
export interface MonitorsApiUpdateMonitorUserTemplateRequest {
    /**
     * ID of the monitor user template.
     * @type string
     */
    templateId: string;
    /**
     * @type MonitorUserTemplateUpdateRequest
     */
    body: MonitorUserTemplateUpdateRequest;
}
export interface MonitorsApiValidateExistingMonitorUserTemplateRequest {
    /**
     * ID of the monitor user template.
     * @type string
     */
    templateId: string;
    /**
     * @type MonitorUserTemplateUpdateRequest
     */
    body: MonitorUserTemplateUpdateRequest;
}
export interface MonitorsApiValidateMonitorUserTemplateRequest {
    /**
     * @type MonitorUserTemplateCreateRequest
     */
    body: MonitorUserTemplateCreateRequest;
}
export declare class MonitorsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MonitorsApiRequestFactory, responseProcessor?: MonitorsApiResponseProcessor);
    /**
     * Create a monitor configuration policy.
     * @param param The request object
     */
    createMonitorConfigPolicy(param: MonitorsApiCreateMonitorConfigPolicyRequest, options?: Configuration): Promise<MonitorConfigPolicyResponse>;
    /**
     * Creates a monitor notification rule.
     * @param param The request object
     */
    createMonitorNotificationRule(param: MonitorsApiCreateMonitorNotificationRuleRequest, options?: Configuration): Promise<MonitorNotificationRuleResponse>;
    /**
     * Create a new monitor user template.
     * @param param The request object
     */
    createMonitorUserTemplate(param: MonitorsApiCreateMonitorUserTemplateRequest, options?: Configuration): Promise<MonitorUserTemplateCreateResponse>;
    /**
     * Delete a monitor configuration policy.
     * @param param The request object
     */
    deleteMonitorConfigPolicy(param: MonitorsApiDeleteMonitorConfigPolicyRequest, options?: Configuration): Promise<void>;
    /**
     * Deletes a monitor notification rule by `rule_id`.
     * @param param The request object
     */
    deleteMonitorNotificationRule(param: MonitorsApiDeleteMonitorNotificationRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an existing monitor user template by its ID.
     * @param param The request object
     */
    deleteMonitorUserTemplate(param: MonitorsApiDeleteMonitorUserTemplateRequest, options?: Configuration): Promise<void>;
    /**
     * Get a monitor configuration policy by `policy_id`.
     * @param param The request object
     */
    getMonitorConfigPolicy(param: MonitorsApiGetMonitorConfigPolicyRequest, options?: Configuration): Promise<MonitorConfigPolicyResponse>;
    /**
     * Returns a monitor notification rule by `rule_id`.
     * @param param The request object
     */
    getMonitorNotificationRule(param: MonitorsApiGetMonitorNotificationRuleRequest, options?: Configuration): Promise<MonitorNotificationRuleResponse>;
    /**
     * Returns a list of all monitor notification rules.
     * @param param The request object
     */
    getMonitorNotificationRules(param?: MonitorsApiGetMonitorNotificationRulesRequest, options?: Configuration): Promise<MonitorNotificationRuleListResponse>;
    /**
     * Retrieve a monitor user template by its ID.
     * @param param The request object
     */
    getMonitorUserTemplate(param: MonitorsApiGetMonitorUserTemplateRequest, options?: Configuration): Promise<MonitorUserTemplateResponse>;
    /**
     * Get all monitor configuration policies.
     * @param param The request object
     */
    listMonitorConfigPolicies(options?: Configuration): Promise<MonitorConfigPolicyListResponse>;
    /**
     * Retrieve all monitor user templates.
     * @param param The request object
     */
    listMonitorUserTemplates(options?: Configuration): Promise<MonitorUserTemplateListResponse>;
    /**
     * Edit a monitor configuration policy.
     * @param param The request object
     */
    updateMonitorConfigPolicy(param: MonitorsApiUpdateMonitorConfigPolicyRequest, options?: Configuration): Promise<MonitorConfigPolicyResponse>;
    /**
     * Updates a monitor notification rule by `rule_id`.
     * @param param The request object
     */
    updateMonitorNotificationRule(param: MonitorsApiUpdateMonitorNotificationRuleRequest, options?: Configuration): Promise<MonitorNotificationRuleResponse>;
    /**
     * Creates a new version of an existing monitor user template.
     * @param param The request object
     */
    updateMonitorUserTemplate(param: MonitorsApiUpdateMonitorUserTemplateRequest, options?: Configuration): Promise<MonitorUserTemplateResponse>;
    /**
     * Validate the structure and content of an existing monitor user template being updated to a new version.
     * @param param The request object
     */
    validateExistingMonitorUserTemplate(param: MonitorsApiValidateExistingMonitorUserTemplateRequest, options?: Configuration): Promise<void>;
    /**
     * Validate the structure and content of a monitor user template.
     * @param param The request object
     */
    validateMonitorUserTemplate(param: MonitorsApiValidateMonitorUserTemplateRequest, options?: Configuration): Promise<void>;
}
