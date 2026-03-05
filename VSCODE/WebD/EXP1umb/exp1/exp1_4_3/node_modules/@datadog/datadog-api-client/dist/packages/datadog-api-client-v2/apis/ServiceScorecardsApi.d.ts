import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateRuleRequest } from "../models/CreateRuleRequest";
import { CreateRuleResponse } from "../models/CreateRuleResponse";
import { ListRulesResponse } from "../models/ListRulesResponse";
import { ListRulesResponseDataItem } from "../models/ListRulesResponseDataItem";
import { OutcomesBatchRequest } from "../models/OutcomesBatchRequest";
import { OutcomesBatchResponse } from "../models/OutcomesBatchResponse";
import { OutcomesResponse } from "../models/OutcomesResponse";
import { OutcomesResponseDataItem } from "../models/OutcomesResponseDataItem";
import { UpdateOutcomesAsyncRequest } from "../models/UpdateOutcomesAsyncRequest";
import { UpdateRuleRequest } from "../models/UpdateRuleRequest";
import { UpdateRuleResponse } from "../models/UpdateRuleResponse";
export declare class ServiceScorecardsApiRequestFactory extends BaseAPIRequestFactory {
    createScorecardOutcomesBatch(body: OutcomesBatchRequest, _options?: Configuration): Promise<RequestContext>;
    createScorecardRule(body: CreateRuleRequest, _options?: Configuration): Promise<RequestContext>;
    deleteScorecardRule(ruleId: string, _options?: Configuration): Promise<RequestContext>;
    listScorecardOutcomes(pageSize?: number, pageOffset?: number, include?: string, fieldsOutcome?: string, fieldsRule?: string, filterOutcomeServiceName?: string, filterOutcomeState?: string, filterRuleEnabled?: boolean, filterRuleId?: string, filterRuleName?: string, _options?: Configuration): Promise<RequestContext>;
    listScorecardRules(pageSize?: number, pageOffset?: number, include?: string, filterRuleId?: string, filterRuleEnabled?: boolean, filterRuleCustom?: boolean, filterRuleName?: string, filterRuleDescription?: string, fieldsRule?: string, fieldsScorecard?: string, _options?: Configuration): Promise<RequestContext>;
    updateScorecardOutcomesAsync(body: UpdateOutcomesAsyncRequest, _options?: Configuration): Promise<RequestContext>;
    updateScorecardRule(ruleId: string, body: UpdateRuleRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceScorecardsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createScorecardOutcomesBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    createScorecardOutcomesBatch(response: ResponseContext): Promise<OutcomesBatchResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createScorecardRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createScorecardRule(response: ResponseContext): Promise<CreateRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteScorecardRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteScorecardRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listScorecardOutcomes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listScorecardOutcomes(response: ResponseContext): Promise<OutcomesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listScorecardRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listScorecardRules(response: ResponseContext): Promise<ListRulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateScorecardOutcomesAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateScorecardOutcomesAsync(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateScorecardRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateScorecardRule(response: ResponseContext): Promise<UpdateRuleResponse>;
}
export interface ServiceScorecardsApiCreateScorecardOutcomesBatchRequest {
    /**
     * Set of scorecard outcomes.
     * @type OutcomesBatchRequest
     */
    body: OutcomesBatchRequest;
}
export interface ServiceScorecardsApiCreateScorecardRuleRequest {
    /**
     * Rule attributes.
     * @type CreateRuleRequest
     */
    body: CreateRuleRequest;
}
export interface ServiceScorecardsApiDeleteScorecardRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     */
    ruleId: string;
}
export interface ServiceScorecardsApiListScorecardOutcomesRequest {
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Include related rule details in the response.
     * @type string
     */
    include?: string;
    /**
     * Return only specified values in the outcome attributes.
     * @type string
     */
    fieldsOutcome?: string;
    /**
     * Return only specified values in the included rule details.
     * @type string
     */
    fieldsRule?: string;
    /**
     * Filter the outcomes on a specific service name.
     * @type string
     */
    filterOutcomeServiceName?: string;
    /**
     * Filter the outcomes by a specific state.
     * @type string
     */
    filterOutcomeState?: string;
    /**
     * Filter outcomes on whether a rule is enabled/disabled.
     * @type boolean
     */
    filterRuleEnabled?: boolean;
    /**
     * Filter outcomes based on rule ID.
     * @type string
     */
    filterRuleId?: string;
    /**
     * Filter outcomes based on rule name.
     * @type string
     */
    filterRuleName?: string;
}
export interface ServiceScorecardsApiListScorecardRulesRequest {
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Include related scorecard details in the response.
     * @type string
     */
    include?: string;
    /**
     * Filter the rules on a rule ID.
     * @type string
     */
    filterRuleId?: string;
    /**
     * Filter for enabled rules only.
     * @type boolean
     */
    filterRuleEnabled?: boolean;
    /**
     * Filter for custom rules only.
     * @type boolean
     */
    filterRuleCustom?: boolean;
    /**
     * Filter rules on the rule name.
     * @type string
     */
    filterRuleName?: string;
    /**
     * Filter rules on the rule description.
     * @type string
     */
    filterRuleDescription?: string;
    /**
     * Return only specific fields in the response for rule attributes.
     * @type string
     */
    fieldsRule?: string;
    /**
     * Return only specific fields in the included response for scorecard attributes.
     * @type string
     */
    fieldsScorecard?: string;
}
export interface ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest {
    /**
     * Set of scorecard outcomes.
     * @type UpdateOutcomesAsyncRequest
     */
    body: UpdateOutcomesAsyncRequest;
}
export interface ServiceScorecardsApiUpdateScorecardRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     */
    ruleId: string;
    /**
     * Rule attributes.
     * @type UpdateRuleRequest
     */
    body: UpdateRuleRequest;
}
export declare class ServiceScorecardsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceScorecardsApiRequestFactory, responseProcessor?: ServiceScorecardsApiResponseProcessor);
    /**
     * Sets multiple service-rule outcomes in a single batched request.
     * @param param The request object
     */
    createScorecardOutcomesBatch(param: ServiceScorecardsApiCreateScorecardOutcomesBatchRequest, options?: Configuration): Promise<OutcomesBatchResponse>;
    /**
     * Creates a new rule.
     * @param param The request object
     */
    createScorecardRule(param: ServiceScorecardsApiCreateScorecardRuleRequest, options?: Configuration): Promise<CreateRuleResponse>;
    /**
     * Deletes a single rule.
     * @param param The request object
     */
    deleteScorecardRule(param: ServiceScorecardsApiDeleteScorecardRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Fetches all rule outcomes.
     * @param param The request object
     */
    listScorecardOutcomes(param?: ServiceScorecardsApiListScorecardOutcomesRequest, options?: Configuration): Promise<OutcomesResponse>;
    /**
     * Provide a paginated version of listScorecardOutcomes returning a generator with all the items.
     */
    listScorecardOutcomesWithPagination(param?: ServiceScorecardsApiListScorecardOutcomesRequest, options?: Configuration): AsyncGenerator<OutcomesResponseDataItem>;
    /**
     * Fetch all rules.
     * @param param The request object
     */
    listScorecardRules(param?: ServiceScorecardsApiListScorecardRulesRequest, options?: Configuration): Promise<ListRulesResponse>;
    /**
     * Provide a paginated version of listScorecardRules returning a generator with all the items.
     */
    listScorecardRulesWithPagination(param?: ServiceScorecardsApiListScorecardRulesRequest, options?: Configuration): AsyncGenerator<ListRulesResponseDataItem>;
    /**
     * Updates multiple scorecard rule outcomes in a single batched request.
     * @param param The request object
     */
    updateScorecardOutcomesAsync(param: ServiceScorecardsApiUpdateScorecardOutcomesAsyncRequest, options?: Configuration): Promise<void>;
    /**
     * Updates an existing rule.
     * @param param The request object
     */
    updateScorecardRule(param: ServiceScorecardsApiUpdateScorecardRuleRequest, options?: Configuration): Promise<UpdateRuleResponse>;
}
