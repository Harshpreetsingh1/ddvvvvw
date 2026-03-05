import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ApplicationSecurityWafCustomRuleCreateRequest } from "../models/ApplicationSecurityWafCustomRuleCreateRequest";
import { ApplicationSecurityWafCustomRuleListResponse } from "../models/ApplicationSecurityWafCustomRuleListResponse";
import { ApplicationSecurityWafCustomRuleResponse } from "../models/ApplicationSecurityWafCustomRuleResponse";
import { ApplicationSecurityWafCustomRuleUpdateRequest } from "../models/ApplicationSecurityWafCustomRuleUpdateRequest";
import { ApplicationSecurityWafExclusionFilterCreateRequest } from "../models/ApplicationSecurityWafExclusionFilterCreateRequest";
import { ApplicationSecurityWafExclusionFilterResponse } from "../models/ApplicationSecurityWafExclusionFilterResponse";
import { ApplicationSecurityWafExclusionFiltersResponse } from "../models/ApplicationSecurityWafExclusionFiltersResponse";
import { ApplicationSecurityWafExclusionFilterUpdateRequest } from "../models/ApplicationSecurityWafExclusionFilterUpdateRequest";
export declare class ApplicationSecurityApiRequestFactory extends BaseAPIRequestFactory {
    createApplicationSecurityWafCustomRule(body: ApplicationSecurityWafCustomRuleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createApplicationSecurityWafExclusionFilter(body: ApplicationSecurityWafExclusionFilterCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteApplicationSecurityWafCustomRule(customRuleId: string, _options?: Configuration): Promise<RequestContext>;
    deleteApplicationSecurityWafExclusionFilter(exclusionFilterId: string, _options?: Configuration): Promise<RequestContext>;
    getApplicationSecurityWafCustomRule(customRuleId: string, _options?: Configuration): Promise<RequestContext>;
    getApplicationSecurityWafExclusionFilter(exclusionFilterId: string, _options?: Configuration): Promise<RequestContext>;
    listApplicationSecurityWAFCustomRules(_options?: Configuration): Promise<RequestContext>;
    listApplicationSecurityWafExclusionFilters(_options?: Configuration): Promise<RequestContext>;
    updateApplicationSecurityWafCustomRule(customRuleId: string, body: ApplicationSecurityWafCustomRuleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateApplicationSecurityWafExclusionFilter(exclusionFilterId: string, body: ApplicationSecurityWafExclusionFilterUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ApplicationSecurityApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApplicationSecurityWafCustomRule(response: ResponseContext): Promise<ApplicationSecurityWafCustomRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApplicationSecurityWafExclusionFilter(response: ResponseContext): Promise<ApplicationSecurityWafExclusionFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationSecurityWafCustomRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationSecurityWafExclusionFilter(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationSecurityWafCustomRule(response: ResponseContext): Promise<ApplicationSecurityWafCustomRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationSecurityWafExclusionFilter(response: ResponseContext): Promise<ApplicationSecurityWafExclusionFilterResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationSecurityWAFCustomRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationSecurityWAFCustomRules(response: ResponseContext): Promise<ApplicationSecurityWafCustomRuleListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationSecurityWafExclusionFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationSecurityWafExclusionFilters(response: ResponseContext): Promise<ApplicationSecurityWafExclusionFiltersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationSecurityWafCustomRule(response: ResponseContext): Promise<ApplicationSecurityWafCustomRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationSecurityWafExclusionFilter(response: ResponseContext): Promise<ApplicationSecurityWafExclusionFilterResponse>;
}
export interface ApplicationSecurityApiCreateApplicationSecurityWafCustomRuleRequest {
    /**
     * The definition of the new WAF Custom Rule.
     * @type ApplicationSecurityWafCustomRuleCreateRequest
     */
    body: ApplicationSecurityWafCustomRuleCreateRequest;
}
export interface ApplicationSecurityApiCreateApplicationSecurityWafExclusionFilterRequest {
    /**
     * The definition of the new WAF exclusion filter.
     * @type ApplicationSecurityWafExclusionFilterCreateRequest
     */
    body: ApplicationSecurityWafExclusionFilterCreateRequest;
}
export interface ApplicationSecurityApiDeleteApplicationSecurityWafCustomRuleRequest {
    /**
     * The ID of the custom rule.
     * @type string
     */
    customRuleId: string;
}
export interface ApplicationSecurityApiDeleteApplicationSecurityWafExclusionFilterRequest {
    /**
     * The identifier of the WAF exclusion filter.
     * @type string
     */
    exclusionFilterId: string;
}
export interface ApplicationSecurityApiGetApplicationSecurityWafCustomRuleRequest {
    /**
     * The ID of the custom rule.
     * @type string
     */
    customRuleId: string;
}
export interface ApplicationSecurityApiGetApplicationSecurityWafExclusionFilterRequest {
    /**
     * The identifier of the WAF exclusion filter.
     * @type string
     */
    exclusionFilterId: string;
}
export interface ApplicationSecurityApiUpdateApplicationSecurityWafCustomRuleRequest {
    /**
     * The ID of the custom rule.
     * @type string
     */
    customRuleId: string;
    /**
     * New definition of the WAF Custom Rule.
     * @type ApplicationSecurityWafCustomRuleUpdateRequest
     */
    body: ApplicationSecurityWafCustomRuleUpdateRequest;
}
export interface ApplicationSecurityApiUpdateApplicationSecurityWafExclusionFilterRequest {
    /**
     * The identifier of the WAF exclusion filter.
     * @type string
     */
    exclusionFilterId: string;
    /**
     * The exclusion filter to update.
     * @type ApplicationSecurityWafExclusionFilterUpdateRequest
     */
    body: ApplicationSecurityWafExclusionFilterUpdateRequest;
}
export declare class ApplicationSecurityApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ApplicationSecurityApiRequestFactory, responseProcessor?: ApplicationSecurityApiResponseProcessor);
    /**
     * Create a new WAF custom rule with the given parameters.
     * @param param The request object
     */
    createApplicationSecurityWafCustomRule(param: ApplicationSecurityApiCreateApplicationSecurityWafCustomRuleRequest, options?: Configuration): Promise<ApplicationSecurityWafCustomRuleResponse>;
    /**
     * Create a new WAF exclusion filter with the given parameters.
     *
     * A request matched by an exclusion filter will be ignored by the Application Security WAF product.
     * Go to https://app.datadoghq.com/security/appsec/passlist to review existing exclusion filters (also called passlist entries).
     * @param param The request object
     */
    createApplicationSecurityWafExclusionFilter(param: ApplicationSecurityApiCreateApplicationSecurityWafExclusionFilterRequest, options?: Configuration): Promise<ApplicationSecurityWafExclusionFilterResponse>;
    /**
     * Delete a specific WAF custom rule.
     * @param param The request object
     */
    deleteApplicationSecurityWafCustomRule(param: ApplicationSecurityApiDeleteApplicationSecurityWafCustomRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a specific WAF exclusion filter using its identifier.
     * @param param The request object
     */
    deleteApplicationSecurityWafExclusionFilter(param: ApplicationSecurityApiDeleteApplicationSecurityWafExclusionFilterRequest, options?: Configuration): Promise<void>;
    /**
     * Retrieve a WAF custom rule by ID.
     * @param param The request object
     */
    getApplicationSecurityWafCustomRule(param: ApplicationSecurityApiGetApplicationSecurityWafCustomRuleRequest, options?: Configuration): Promise<ApplicationSecurityWafCustomRuleResponse>;
    /**
     * Retrieve a specific WAF exclusion filter using its identifier.
     * @param param The request object
     */
    getApplicationSecurityWafExclusionFilter(param: ApplicationSecurityApiGetApplicationSecurityWafExclusionFilterRequest, options?: Configuration): Promise<ApplicationSecurityWafExclusionFilterResponse>;
    /**
     * Retrieve a list of WAF custom rule.
     * @param param The request object
     */
    listApplicationSecurityWAFCustomRules(options?: Configuration): Promise<ApplicationSecurityWafCustomRuleListResponse>;
    /**
     * Retrieve a list of WAF exclusion filters.
     * @param param The request object
     */
    listApplicationSecurityWafExclusionFilters(options?: Configuration): Promise<ApplicationSecurityWafExclusionFiltersResponse>;
    /**
     * Update a specific WAF custom Rule.
     * Returns the Custom Rule object when the request is successful.
     * @param param The request object
     */
    updateApplicationSecurityWafCustomRule(param: ApplicationSecurityApiUpdateApplicationSecurityWafCustomRuleRequest, options?: Configuration): Promise<ApplicationSecurityWafCustomRuleResponse>;
    /**
     * Update a specific WAF exclusion filter using its identifier.
     * Returns the exclusion filter object when the request is successful.
     * @param param The request object
     */
    updateApplicationSecurityWafExclusionFilter(param: ApplicationSecurityApiUpdateApplicationSecurityWafExclusionFilterRequest, options?: Configuration): Promise<ApplicationSecurityWafExclusionFilterResponse>;
}
