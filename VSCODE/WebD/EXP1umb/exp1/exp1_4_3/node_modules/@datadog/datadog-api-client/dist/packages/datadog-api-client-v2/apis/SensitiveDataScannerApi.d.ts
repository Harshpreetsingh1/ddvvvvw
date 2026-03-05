import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SensitiveDataScannerConfigRequest } from "../models/SensitiveDataScannerConfigRequest";
import { SensitiveDataScannerCreateGroupResponse } from "../models/SensitiveDataScannerCreateGroupResponse";
import { SensitiveDataScannerCreateRuleResponse } from "../models/SensitiveDataScannerCreateRuleResponse";
import { SensitiveDataScannerGetConfigResponse } from "../models/SensitiveDataScannerGetConfigResponse";
import { SensitiveDataScannerGroupCreateRequest } from "../models/SensitiveDataScannerGroupCreateRequest";
import { SensitiveDataScannerGroupDeleteRequest } from "../models/SensitiveDataScannerGroupDeleteRequest";
import { SensitiveDataScannerGroupDeleteResponse } from "../models/SensitiveDataScannerGroupDeleteResponse";
import { SensitiveDataScannerGroupUpdateRequest } from "../models/SensitiveDataScannerGroupUpdateRequest";
import { SensitiveDataScannerGroupUpdateResponse } from "../models/SensitiveDataScannerGroupUpdateResponse";
import { SensitiveDataScannerReorderGroupsResponse } from "../models/SensitiveDataScannerReorderGroupsResponse";
import { SensitiveDataScannerRuleCreateRequest } from "../models/SensitiveDataScannerRuleCreateRequest";
import { SensitiveDataScannerRuleDeleteRequest } from "../models/SensitiveDataScannerRuleDeleteRequest";
import { SensitiveDataScannerRuleDeleteResponse } from "../models/SensitiveDataScannerRuleDeleteResponse";
import { SensitiveDataScannerRuleUpdateRequest } from "../models/SensitiveDataScannerRuleUpdateRequest";
import { SensitiveDataScannerRuleUpdateResponse } from "../models/SensitiveDataScannerRuleUpdateResponse";
import { SensitiveDataScannerStandardPatternsResponseData } from "../models/SensitiveDataScannerStandardPatternsResponseData";
export declare class SensitiveDataScannerApiRequestFactory extends BaseAPIRequestFactory {
    createScanningGroup(body: SensitiveDataScannerGroupCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createScanningRule(body: SensitiveDataScannerRuleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteScanningGroup(groupId: string, body: SensitiveDataScannerGroupDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    deleteScanningRule(ruleId: string, body: SensitiveDataScannerRuleDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    listScanningGroups(_options?: Configuration): Promise<RequestContext>;
    listStandardPatterns(_options?: Configuration): Promise<RequestContext>;
    reorderScanningGroups(body: SensitiveDataScannerConfigRequest, _options?: Configuration): Promise<RequestContext>;
    updateScanningGroup(groupId: string, body: SensitiveDataScannerGroupUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateScanningRule(ruleId: string, body: SensitiveDataScannerRuleUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SensitiveDataScannerApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createScanningGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
    createScanningGroup(response: ResponseContext): Promise<SensitiveDataScannerCreateGroupResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createScanningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createScanningRule(response: ResponseContext): Promise<SensitiveDataScannerCreateRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteScanningGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteScanningGroup(response: ResponseContext): Promise<SensitiveDataScannerGroupDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteScanningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteScanningRule(response: ResponseContext): Promise<SensitiveDataScannerRuleDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listScanningGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
    listScanningGroups(response: ResponseContext): Promise<SensitiveDataScannerGetConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listStandardPatterns
     * @throws ApiException if the response code was not in [200, 299]
     */
    listStandardPatterns(response: ResponseContext): Promise<SensitiveDataScannerStandardPatternsResponseData>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reorderScanningGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
    reorderScanningGroups(response: ResponseContext): Promise<SensitiveDataScannerReorderGroupsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateScanningGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateScanningGroup(response: ResponseContext): Promise<SensitiveDataScannerGroupUpdateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateScanningRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateScanningRule(response: ResponseContext): Promise<SensitiveDataScannerRuleUpdateResponse>;
}
export interface SensitiveDataScannerApiCreateScanningGroupRequest {
    /**
     * @type SensitiveDataScannerGroupCreateRequest
     */
    body: SensitiveDataScannerGroupCreateRequest;
}
export interface SensitiveDataScannerApiCreateScanningRuleRequest {
    /**
     * @type SensitiveDataScannerRuleCreateRequest
     */
    body: SensitiveDataScannerRuleCreateRequest;
}
export interface SensitiveDataScannerApiDeleteScanningGroupRequest {
    /**
     * The ID of a group of rules.
     * @type string
     */
    groupId: string;
    /**
     * @type SensitiveDataScannerGroupDeleteRequest
     */
    body: SensitiveDataScannerGroupDeleteRequest;
}
export interface SensitiveDataScannerApiDeleteScanningRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     */
    ruleId: string;
    /**
     * @type SensitiveDataScannerRuleDeleteRequest
     */
    body: SensitiveDataScannerRuleDeleteRequest;
}
export interface SensitiveDataScannerApiReorderScanningGroupsRequest {
    /**
     * @type SensitiveDataScannerConfigRequest
     */
    body: SensitiveDataScannerConfigRequest;
}
export interface SensitiveDataScannerApiUpdateScanningGroupRequest {
    /**
     * The ID of a group of rules.
     * @type string
     */
    groupId: string;
    /**
     * @type SensitiveDataScannerGroupUpdateRequest
     */
    body: SensitiveDataScannerGroupUpdateRequest;
}
export interface SensitiveDataScannerApiUpdateScanningRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     */
    ruleId: string;
    /**
     * @type SensitiveDataScannerRuleUpdateRequest
     */
    body: SensitiveDataScannerRuleUpdateRequest;
}
export declare class SensitiveDataScannerApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SensitiveDataScannerApiRequestFactory, responseProcessor?: SensitiveDataScannerApiResponseProcessor);
    /**
     * Create a scanning group.
     * The request MAY include a configuration relationship.
     * A rules relationship can be omitted entirely, but if it is included it MUST be
     * null or an empty array (rules cannot be created at the same time).
     * The new group will be ordered last within the configuration.
     * @param param The request object
     */
    createScanningGroup(param: SensitiveDataScannerApiCreateScanningGroupRequest, options?: Configuration): Promise<SensitiveDataScannerCreateGroupResponse>;
    /**
     * Create a scanning rule in a sensitive data scanner group, ordered last.
     * The posted rule MUST include a group relationship.
     * It MUST include either a standard_pattern relationship or a regex attribute, but not both.
     * If included_attributes is empty or missing, we will scan all attributes except
     * excluded_attributes. If both are missing, we will scan the whole event.
     * @param param The request object
     */
    createScanningRule(param: SensitiveDataScannerApiCreateScanningRuleRequest, options?: Configuration): Promise<SensitiveDataScannerCreateRuleResponse>;
    /**
     * Delete a given group.
     * @param param The request object
     */
    deleteScanningGroup(param: SensitiveDataScannerApiDeleteScanningGroupRequest, options?: Configuration): Promise<SensitiveDataScannerGroupDeleteResponse>;
    /**
     * Delete a given rule.
     * @param param The request object
     */
    deleteScanningRule(param: SensitiveDataScannerApiDeleteScanningRuleRequest, options?: Configuration): Promise<SensitiveDataScannerRuleDeleteResponse>;
    /**
     * List all the Scanning groups in your organization.
     * @param param The request object
     */
    listScanningGroups(options?: Configuration): Promise<SensitiveDataScannerGetConfigResponse>;
    /**
     * Returns all standard patterns.
     * @param param The request object
     */
    listStandardPatterns(options?: Configuration): Promise<SensitiveDataScannerStandardPatternsResponseData>;
    /**
     * Reorder the list of groups.
     * @param param The request object
     */
    reorderScanningGroups(param: SensitiveDataScannerApiReorderScanningGroupsRequest, options?: Configuration): Promise<SensitiveDataScannerReorderGroupsResponse>;
    /**
     * Update a group, including the order of the rules.
     * Rules within the group are reordered by including a rules relationship. If the rules
     * relationship is present, its data section MUST contain linkages for all of the rules
     * currently in the group, and MUST NOT contain any others.
     * @param param The request object
     */
    updateScanningGroup(param: SensitiveDataScannerApiUpdateScanningGroupRequest, options?: Configuration): Promise<SensitiveDataScannerGroupUpdateResponse>;
    /**
     * Update a scanning rule.
     * The request body MUST NOT include a standard_pattern relationship, as that relationship
     * is non-editable. Trying to edit the regex attribute of a rule with a standard_pattern
     * relationship will also result in an error.
     * @param param The request object
     */
    updateScanningRule(param: SensitiveDataScannerApiUpdateScanningRuleRequest, options?: Configuration): Promise<SensitiveDataScannerRuleUpdateResponse>;
}
