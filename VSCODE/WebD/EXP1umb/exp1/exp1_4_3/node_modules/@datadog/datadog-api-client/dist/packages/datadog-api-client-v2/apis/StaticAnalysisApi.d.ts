import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CustomRuleRequest } from "../models/CustomRuleRequest";
import { CustomRuleResponse } from "../models/CustomRuleResponse";
import { CustomRuleRevision } from "../models/CustomRuleRevision";
import { CustomRuleRevisionRequest } from "../models/CustomRuleRevisionRequest";
import { CustomRuleRevisionResponse } from "../models/CustomRuleRevisionResponse";
import { CustomRuleRevisionsResponse } from "../models/CustomRuleRevisionsResponse";
import { CustomRulesetRequest } from "../models/CustomRulesetRequest";
import { CustomRulesetResponse } from "../models/CustomRulesetResponse";
import { ResolveVulnerableSymbolsRequest } from "../models/ResolveVulnerableSymbolsRequest";
import { ResolveVulnerableSymbolsResponse } from "../models/ResolveVulnerableSymbolsResponse";
import { RevertCustomRuleRevisionRequest } from "../models/RevertCustomRuleRevisionRequest";
import { ScaRequest } from "../models/ScaRequest";
export declare class StaticAnalysisApiRequestFactory extends BaseAPIRequestFactory {
    createCustomRule(rulesetName: string, body: CustomRuleRequest, _options?: Configuration): Promise<RequestContext>;
    createCustomRuleRevision(rulesetName: string, ruleName: string, body: CustomRuleRevisionRequest, _options?: Configuration): Promise<RequestContext>;
    createSCAResolveVulnerableSymbols(body: ResolveVulnerableSymbolsRequest, _options?: Configuration): Promise<RequestContext>;
    createSCAResult(body: ScaRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCustomRule(rulesetName: string, ruleName: string, _options?: Configuration): Promise<RequestContext>;
    deleteCustomRuleset(rulesetName: string, _options?: Configuration): Promise<RequestContext>;
    getCustomRule(rulesetName: string, ruleName: string, _options?: Configuration): Promise<RequestContext>;
    getCustomRuleRevision(rulesetName: string, ruleName: string, id: string, _options?: Configuration): Promise<RequestContext>;
    getCustomRuleset(rulesetName: string, _options?: Configuration): Promise<RequestContext>;
    listCustomRuleRevisions(rulesetName: string, ruleName: string, pageOffset?: number, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    revertCustomRuleRevision(rulesetName: string, ruleName: string, body: RevertCustomRuleRevisionRequest, _options?: Configuration): Promise<RequestContext>;
    updateCustomRuleset(rulesetName: string, body: CustomRulesetRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class StaticAnalysisApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCustomRule(response: ResponseContext): Promise<CustomRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomRuleRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCustomRuleRevision(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSCAResolveVulnerableSymbols
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSCAResolveVulnerableSymbols(response: ResponseContext): Promise<ResolveVulnerableSymbolsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSCAResult
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSCAResult(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCustomRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCustomRuleset(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCustomRule(response: ResponseContext): Promise<CustomRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomRuleRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCustomRuleRevision(response: ResponseContext): Promise<CustomRuleRevisionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCustomRuleset(response: ResponseContext): Promise<CustomRulesetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCustomRuleRevisions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCustomRuleRevisions(response: ResponseContext): Promise<CustomRuleRevisionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revertCustomRuleRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    revertCustomRuleRevision(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCustomRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCustomRuleset(response: ResponseContext): Promise<CustomRulesetResponse>;
}
export interface StaticAnalysisApiCreateCustomRuleRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * @type CustomRuleRequest
     */
    body: CustomRuleRequest;
}
export interface StaticAnalysisApiCreateCustomRuleRevisionRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * The rule name
     * @type string
     */
    ruleName: string;
    /**
     * @type CustomRuleRevisionRequest
     */
    body: CustomRuleRevisionRequest;
}
export interface StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest {
    /**
     * @type ResolveVulnerableSymbolsRequest
     */
    body: ResolveVulnerableSymbolsRequest;
}
export interface StaticAnalysisApiCreateSCAResultRequest {
    /**
     * @type ScaRequest
     */
    body: ScaRequest;
}
export interface StaticAnalysisApiDeleteCustomRuleRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * The rule name
     * @type string
     */
    ruleName: string;
}
export interface StaticAnalysisApiDeleteCustomRulesetRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
}
export interface StaticAnalysisApiGetCustomRuleRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * The rule name
     * @type string
     */
    ruleName: string;
}
export interface StaticAnalysisApiGetCustomRuleRevisionRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * The rule name
     * @type string
     */
    ruleName: string;
    /**
     * The revision ID
     * @type string
     */
    id: string;
}
export interface StaticAnalysisApiGetCustomRulesetRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
}
export interface StaticAnalysisApiListCustomRuleRevisionsRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * The rule name
     * @type string
     */
    ruleName: string;
    /**
     * Pagination offset
     * @type number
     */
    pageOffset?: number;
    /**
     * Pagination limit
     * @type number
     */
    pageLimit?: number;
}
export interface StaticAnalysisApiRevertCustomRuleRevisionRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * The rule name
     * @type string
     */
    ruleName: string;
    /**
     * @type RevertCustomRuleRevisionRequest
     */
    body: RevertCustomRuleRevisionRequest;
}
export interface StaticAnalysisApiUpdateCustomRulesetRequest {
    /**
     * The ruleset name
     * @type string
     */
    rulesetName: string;
    /**
     * @type CustomRulesetRequest
     */
    body: CustomRulesetRequest;
}
export declare class StaticAnalysisApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: StaticAnalysisApiRequestFactory, responseProcessor?: StaticAnalysisApiResponseProcessor);
    /**
     * Create a new custom rule within a ruleset
     * @param param The request object
     */
    createCustomRule(param: StaticAnalysisApiCreateCustomRuleRequest, options?: Configuration): Promise<CustomRuleResponse>;
    /**
     * Create a new revision for a custom rule
     * @param param The request object
     */
    createCustomRuleRevision(param: StaticAnalysisApiCreateCustomRuleRevisionRequest, options?: Configuration): Promise<void>;
    /**
     * @param param The request object
     */
    createSCAResolveVulnerableSymbols(param: StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest, options?: Configuration): Promise<ResolveVulnerableSymbolsResponse>;
    /**
     * @param param The request object
     */
    createSCAResult(param: StaticAnalysisApiCreateSCAResultRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a custom rule
     * @param param The request object
     */
    deleteCustomRule(param: StaticAnalysisApiDeleteCustomRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a custom ruleset
     * @param param The request object
     */
    deleteCustomRuleset(param: StaticAnalysisApiDeleteCustomRulesetRequest, options?: Configuration): Promise<void>;
    /**
     * Get a custom rule by name
     * @param param The request object
     */
    getCustomRule(param: StaticAnalysisApiGetCustomRuleRequest, options?: Configuration): Promise<CustomRuleResponse>;
    /**
     * Get a specific revision of a custom rule
     * @param param The request object
     */
    getCustomRuleRevision(param: StaticAnalysisApiGetCustomRuleRevisionRequest, options?: Configuration): Promise<CustomRuleRevisionResponse>;
    /**
     * Get a custom ruleset by name
     * @param param The request object
     */
    getCustomRuleset(param: StaticAnalysisApiGetCustomRulesetRequest, options?: Configuration): Promise<CustomRulesetResponse>;
    /**
     * Get all revisions for a custom rule
     * @param param The request object
     */
    listCustomRuleRevisions(param: StaticAnalysisApiListCustomRuleRevisionsRequest, options?: Configuration): Promise<CustomRuleRevisionsResponse>;
    /**
     * Provide a paginated version of listCustomRuleRevisions returning a generator with all the items.
     */
    listCustomRuleRevisionsWithPagination(param: StaticAnalysisApiListCustomRuleRevisionsRequest, options?: Configuration): AsyncGenerator<CustomRuleRevision>;
    /**
     * Revert a custom rule to a previous revision
     * @param param The request object
     */
    revertCustomRuleRevision(param: StaticAnalysisApiRevertCustomRuleRevisionRequest, options?: Configuration): Promise<void>;
    /**
     * Update an existing custom ruleset
     * @param param The request object
     */
    updateCustomRuleset(param: StaticAnalysisApiUpdateCustomRulesetRequest, options?: Configuration): Promise<CustomRulesetResponse>;
}
