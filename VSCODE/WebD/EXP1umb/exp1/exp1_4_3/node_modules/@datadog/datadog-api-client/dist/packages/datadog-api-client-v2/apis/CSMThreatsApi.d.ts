import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext, HttpFile } from "../../datadog-api-client-common/http/http";
import { CloudWorkloadSecurityAgentPoliciesListResponse } from "../models/CloudWorkloadSecurityAgentPoliciesListResponse";
import { CloudWorkloadSecurityAgentPolicyCreateRequest } from "../models/CloudWorkloadSecurityAgentPolicyCreateRequest";
import { CloudWorkloadSecurityAgentPolicyResponse } from "../models/CloudWorkloadSecurityAgentPolicyResponse";
import { CloudWorkloadSecurityAgentPolicyUpdateRequest } from "../models/CloudWorkloadSecurityAgentPolicyUpdateRequest";
import { CloudWorkloadSecurityAgentRuleCreateRequest } from "../models/CloudWorkloadSecurityAgentRuleCreateRequest";
import { CloudWorkloadSecurityAgentRuleResponse } from "../models/CloudWorkloadSecurityAgentRuleResponse";
import { CloudWorkloadSecurityAgentRulesListResponse } from "../models/CloudWorkloadSecurityAgentRulesListResponse";
import { CloudWorkloadSecurityAgentRuleUpdateRequest } from "../models/CloudWorkloadSecurityAgentRuleUpdateRequest";
export declare class CSMThreatsApiRequestFactory extends BaseAPIRequestFactory {
    createCloudWorkloadSecurityAgentRule(body: CloudWorkloadSecurityAgentRuleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createCSMThreatsAgentPolicy(body: CloudWorkloadSecurityAgentPolicyCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createCSMThreatsAgentRule(body: CloudWorkloadSecurityAgentRuleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCloudWorkloadSecurityAgentRule(agentRuleId: string, _options?: Configuration): Promise<RequestContext>;
    deleteCSMThreatsAgentPolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
    deleteCSMThreatsAgentRule(agentRuleId: string, policyId?: string, _options?: Configuration): Promise<RequestContext>;
    downloadCloudWorkloadPolicyFile(_options?: Configuration): Promise<RequestContext>;
    downloadCSMThreatsPolicy(_options?: Configuration): Promise<RequestContext>;
    getCloudWorkloadSecurityAgentRule(agentRuleId: string, _options?: Configuration): Promise<RequestContext>;
    getCSMThreatsAgentPolicy(policyId: string, _options?: Configuration): Promise<RequestContext>;
    getCSMThreatsAgentRule(agentRuleId: string, policyId?: string, _options?: Configuration): Promise<RequestContext>;
    listCloudWorkloadSecurityAgentRules(_options?: Configuration): Promise<RequestContext>;
    listCSMThreatsAgentPolicies(_options?: Configuration): Promise<RequestContext>;
    listCSMThreatsAgentRules(policyId?: string, _options?: Configuration): Promise<RequestContext>;
    updateCloudWorkloadSecurityAgentRule(agentRuleId: string, body: CloudWorkloadSecurityAgentRuleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateCSMThreatsAgentPolicy(policyId: string, body: CloudWorkloadSecurityAgentPolicyUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateCSMThreatsAgentRule(agentRuleId: string, body: CloudWorkloadSecurityAgentRuleUpdateRequest, policyId?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CSMThreatsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCSMThreatsAgentPolicy(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCSMThreatsAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCSMThreatsAgentPolicy(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCSMThreatsAgentRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadCloudWorkloadPolicyFile
     * @throws ApiException if the response code was not in [200, 299]
     */
    downloadCloudWorkloadPolicyFile(response: ResponseContext): Promise<HttpFile>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadCSMThreatsPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    downloadCSMThreatsPolicy(response: ResponseContext): Promise<HttpFile>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMThreatsAgentPolicy(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMThreatsAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCloudWorkloadSecurityAgentRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCloudWorkloadSecurityAgentRules(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRulesListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCSMThreatsAgentPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCSMThreatsAgentPolicies(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPoliciesListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCSMThreatsAgentRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCSMThreatsAgentRules(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRulesListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCloudWorkloadSecurityAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCSMThreatsAgentPolicy(response: ResponseContext): Promise<CloudWorkloadSecurityAgentPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCSMThreatsAgentRule(response: ResponseContext): Promise<CloudWorkloadSecurityAgentRuleResponse>;
}
export interface CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest {
    /**
     * The definition of the new agent rule
     * @type CloudWorkloadSecurityAgentRuleCreateRequest
     */
    body: CloudWorkloadSecurityAgentRuleCreateRequest;
}
export interface CSMThreatsApiCreateCSMThreatsAgentPolicyRequest {
    /**
     * The definition of the new Agent policy
     * @type CloudWorkloadSecurityAgentPolicyCreateRequest
     */
    body: CloudWorkloadSecurityAgentPolicyCreateRequest;
}
export interface CSMThreatsApiCreateCSMThreatsAgentRuleRequest {
    /**
     * The definition of the new agent rule
     * @type CloudWorkloadSecurityAgentRuleCreateRequest
     */
    body: CloudWorkloadSecurityAgentRuleCreateRequest;
}
export interface CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest {
    /**
     * The ID of the Agent rule
     * @type string
     */
    agentRuleId: string;
}
export interface CSMThreatsApiDeleteCSMThreatsAgentPolicyRequest {
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId: string;
}
export interface CSMThreatsApiDeleteCSMThreatsAgentRuleRequest {
    /**
     * The ID of the Agent rule
     * @type string
     */
    agentRuleId: string;
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId?: string;
}
export interface CSMThreatsApiGetCloudWorkloadSecurityAgentRuleRequest {
    /**
     * The ID of the Agent rule
     * @type string
     */
    agentRuleId: string;
}
export interface CSMThreatsApiGetCSMThreatsAgentPolicyRequest {
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId: string;
}
export interface CSMThreatsApiGetCSMThreatsAgentRuleRequest {
    /**
     * The ID of the Agent rule
     * @type string
     */
    agentRuleId: string;
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId?: string;
}
export interface CSMThreatsApiListCSMThreatsAgentRulesRequest {
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId?: string;
}
export interface CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest {
    /**
     * The ID of the Agent rule
     * @type string
     */
    agentRuleId: string;
    /**
     * New definition of the agent rule
     * @type CloudWorkloadSecurityAgentRuleUpdateRequest
     */
    body: CloudWorkloadSecurityAgentRuleUpdateRequest;
}
export interface CSMThreatsApiUpdateCSMThreatsAgentPolicyRequest {
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId: string;
    /**
     * New definition of the Agent policy
     * @type CloudWorkloadSecurityAgentPolicyUpdateRequest
     */
    body: CloudWorkloadSecurityAgentPolicyUpdateRequest;
}
export interface CSMThreatsApiUpdateCSMThreatsAgentRuleRequest {
    /**
     * The ID of the Agent rule
     * @type string
     */
    agentRuleId: string;
    /**
     * New definition of the agent rule
     * @type CloudWorkloadSecurityAgentRuleUpdateRequest
     */
    body: CloudWorkloadSecurityAgentRuleUpdateRequest;
    /**
     * The ID of the Agent policy
     * @type string
     */
    policyId?: string;
}
export declare class CSMThreatsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CSMThreatsApiRequestFactory, responseProcessor?: CSMThreatsApiResponseProcessor);
    /**
     * Create a new agent rule with the given parameters.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    createCloudWorkloadSecurityAgentRule(param: CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Create a new Workload Protection policy with the given parameters.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    createCSMThreatsAgentPolicy(param: CSMThreatsApiCreateCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentPolicyResponse>;
    /**
     * Create a new Workload Protection agent rule with the given parameters.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    createCSMThreatsAgentRule(param: CSMThreatsApiCreateCSMThreatsAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Delete a specific agent rule.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    deleteCloudWorkloadSecurityAgentRule(param: CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a specific Workload Protection policy.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    deleteCSMThreatsAgentPolicy(param: CSMThreatsApiDeleteCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a specific Workload Protection agent rule.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    deleteCSMThreatsAgentRule(param: CSMThreatsApiDeleteCSMThreatsAgentRuleRequest, options?: Configuration): Promise<void>;
    /**
     * The download endpoint generates a Workload Protection policy file from your currently active
     * Workload Protection agent rules, and downloads them as a `.policy` file. This file can then be deployed to
     * your agents to update the policy running in your environment.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    downloadCloudWorkloadPolicyFile(options?: Configuration): Promise<HttpFile>;
    /**
     * The download endpoint generates a Workload Protection policy file from your currently active
     * Workload Protection agent rules, and downloads them as a `.policy` file. This file can then be deployed to
     * your agents to update the policy running in your environment.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    downloadCSMThreatsPolicy(options?: Configuration): Promise<HttpFile>;
    /**
     * Get the details of a specific agent rule.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    getCloudWorkloadSecurityAgentRule(param: CSMThreatsApiGetCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Get the details of a specific Workload Protection policy.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    getCSMThreatsAgentPolicy(param: CSMThreatsApiGetCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentPolicyResponse>;
    /**
     * Get the details of a specific Workload Protection agent rule.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    getCSMThreatsAgentRule(param: CSMThreatsApiGetCSMThreatsAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Get the list of agent rules.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    listCloudWorkloadSecurityAgentRules(options?: Configuration): Promise<CloudWorkloadSecurityAgentRulesListResponse>;
    /**
     * Get the list of Workload Protection policies.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    listCSMThreatsAgentPolicies(options?: Configuration): Promise<CloudWorkloadSecurityAgentPoliciesListResponse>;
    /**
     * Get the list of Workload Protection agent rules.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    listCSMThreatsAgentRules(param?: CSMThreatsApiListCSMThreatsAgentRulesRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRulesListResponse>;
    /**
     * Update a specific agent rule.
     * Returns the agent rule object when the request is successful.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    updateCloudWorkloadSecurityAgentRule(param: CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse>;
    /**
     * Update a specific Workload Protection policy.
     * Returns the policy object when the request is successful.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    updateCSMThreatsAgentPolicy(param: CSMThreatsApiUpdateCSMThreatsAgentPolicyRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentPolicyResponse>;
    /**
     * Update a specific Workload Protection Agent rule.
     * Returns the agent rule object when the request is successful.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    updateCSMThreatsAgentRule(param: CSMThreatsApiUpdateCSMThreatsAgentRuleRequest, options?: Configuration): Promise<CloudWorkloadSecurityAgentRuleResponse>;
}
