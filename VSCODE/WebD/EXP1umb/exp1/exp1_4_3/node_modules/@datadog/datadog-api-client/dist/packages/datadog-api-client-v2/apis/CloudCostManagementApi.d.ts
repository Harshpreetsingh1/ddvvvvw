import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ArbitraryCostUpsertRequest } from "../models/ArbitraryCostUpsertRequest";
import { ArbitraryRuleResponse } from "../models/ArbitraryRuleResponse";
import { ArbitraryRuleResponseArray } from "../models/ArbitraryRuleResponseArray";
import { AwsCURConfigPatchRequest } from "../models/AwsCURConfigPatchRequest";
import { AwsCURConfigPostRequest } from "../models/AwsCURConfigPostRequest";
import { AwsCurConfigResponse } from "../models/AwsCurConfigResponse";
import { AwsCURConfigsResponse } from "../models/AwsCURConfigsResponse";
import { AzureUCConfigPairsResponse } from "../models/AzureUCConfigPairsResponse";
import { AzureUCConfigPatchRequest } from "../models/AzureUCConfigPatchRequest";
import { AzureUCConfigPostRequest } from "../models/AzureUCConfigPostRequest";
import { AzureUCConfigsResponse } from "../models/AzureUCConfigsResponse";
import { BudgetArray } from "../models/BudgetArray";
import { BudgetValidationRequest } from "../models/BudgetValidationRequest";
import { BudgetValidationResponse } from "../models/BudgetValidationResponse";
import { BudgetWithEntries } from "../models/BudgetWithEntries";
import { CreateRulesetRequest } from "../models/CreateRulesetRequest";
import { CustomCostsFileGetResponse } from "../models/CustomCostsFileGetResponse";
import { CustomCostsFileLineItem } from "../models/CustomCostsFileLineItem";
import { CustomCostsFileListResponse } from "../models/CustomCostsFileListResponse";
import { CustomCostsFileUploadResponse } from "../models/CustomCostsFileUploadResponse";
import { GcpUcConfigResponse } from "../models/GcpUcConfigResponse";
import { GCPUsageCostConfigPatchRequest } from "../models/GCPUsageCostConfigPatchRequest";
import { GCPUsageCostConfigPostRequest } from "../models/GCPUsageCostConfigPostRequest";
import { GCPUsageCostConfigResponse } from "../models/GCPUsageCostConfigResponse";
import { GCPUsageCostConfigsResponse } from "../models/GCPUsageCostConfigsResponse";
import { ReorderRuleResourceArray } from "../models/ReorderRuleResourceArray";
import { ReorderRulesetResourceArray } from "../models/ReorderRulesetResourceArray";
import { RulesetResp } from "../models/RulesetResp";
import { RulesetRespArray } from "../models/RulesetRespArray";
import { RulesValidateQueryRequest } from "../models/RulesValidateQueryRequest";
import { RulesValidateQueryResponse } from "../models/RulesValidateQueryResponse";
import { UCConfigPair } from "../models/UCConfigPair";
import { UpdateRulesetRequest } from "../models/UpdateRulesetRequest";
import { ValidationResponse } from "../models/ValidationResponse";
export declare class CloudCostManagementApiRequestFactory extends BaseAPIRequestFactory {
    createCostAWSCURConfig(body: AwsCURConfigPostRequest, _options?: Configuration): Promise<RequestContext>;
    createCostAzureUCConfigs(body: AzureUCConfigPostRequest, _options?: Configuration): Promise<RequestContext>;
    createCostGCPUsageCostConfig(body: GCPUsageCostConfigPostRequest, _options?: Configuration): Promise<RequestContext>;
    createCustomAllocationRule(body: ArbitraryCostUpsertRequest, _options?: Configuration): Promise<RequestContext>;
    createTagPipelinesRuleset(body: CreateRulesetRequest, _options?: Configuration): Promise<RequestContext>;
    deleteBudget(budgetId: string, _options?: Configuration): Promise<RequestContext>;
    deleteCostAWSCURConfig(cloudAccountId: number, _options?: Configuration): Promise<RequestContext>;
    deleteCostAzureUCConfig(cloudAccountId: number, _options?: Configuration): Promise<RequestContext>;
    deleteCostGCPUsageCostConfig(cloudAccountId: number, _options?: Configuration): Promise<RequestContext>;
    deleteCustomAllocationRule(ruleId: number, _options?: Configuration): Promise<RequestContext>;
    deleteCustomCostsFile(fileId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTagPipelinesRuleset(rulesetId: string, _options?: Configuration): Promise<RequestContext>;
    getBudget(budgetId: string, _options?: Configuration): Promise<RequestContext>;
    getCostAWSCURConfig(cloudAccountId: number, _options?: Configuration): Promise<RequestContext>;
    getCostAzureUCConfig(cloudAccountId: number, _options?: Configuration): Promise<RequestContext>;
    getCostGCPUsageCostConfig(cloudAccountId: number, _options?: Configuration): Promise<RequestContext>;
    getCustomAllocationRule(ruleId: number, _options?: Configuration): Promise<RequestContext>;
    getCustomCostsFile(fileId: string, _options?: Configuration): Promise<RequestContext>;
    getTagPipelinesRuleset(rulesetId: string, _options?: Configuration): Promise<RequestContext>;
    listBudgets(_options?: Configuration): Promise<RequestContext>;
    listCostAWSCURConfigs(_options?: Configuration): Promise<RequestContext>;
    listCostAzureUCConfigs(_options?: Configuration): Promise<RequestContext>;
    listCostGCPUsageCostConfigs(_options?: Configuration): Promise<RequestContext>;
    listCustomAllocationRules(_options?: Configuration): Promise<RequestContext>;
    listCustomCostsFiles(pageNumber?: number, pageSize?: number, filterStatus?: string, sort?: string, _options?: Configuration): Promise<RequestContext>;
    listTagPipelinesRulesets(_options?: Configuration): Promise<RequestContext>;
    reorderCustomAllocationRules(body: ReorderRuleResourceArray, _options?: Configuration): Promise<RequestContext>;
    reorderTagPipelinesRulesets(body: ReorderRulesetResourceArray, _options?: Configuration): Promise<RequestContext>;
    updateCostAWSCURConfig(cloudAccountId: number, body: AwsCURConfigPatchRequest, _options?: Configuration): Promise<RequestContext>;
    updateCostAzureUCConfigs(cloudAccountId: number, body: AzureUCConfigPatchRequest, _options?: Configuration): Promise<RequestContext>;
    updateCostGCPUsageCostConfig(cloudAccountId: number, body: GCPUsageCostConfigPatchRequest, _options?: Configuration): Promise<RequestContext>;
    updateCustomAllocationRule(ruleId: number, body: ArbitraryCostUpsertRequest, _options?: Configuration): Promise<RequestContext>;
    updateTagPipelinesRuleset(rulesetId: string, body: UpdateRulesetRequest, _options?: Configuration): Promise<RequestContext>;
    uploadCustomCostsFile(body: Array<CustomCostsFileLineItem>, _options?: Configuration): Promise<RequestContext>;
    upsertBudget(body: BudgetWithEntries, _options?: Configuration): Promise<RequestContext>;
    validateBudget(body: BudgetValidationRequest, _options?: Configuration): Promise<RequestContext>;
    validateCsvBudget(_options?: Configuration): Promise<RequestContext>;
    validateQuery(body: RulesValidateQueryRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class CloudCostManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCostAWSCURConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCostAWSCURConfig(response: ResponseContext): Promise<AwsCurConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCostAzureUCConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCostAzureUCConfigs(response: ResponseContext): Promise<AzureUCConfigPairsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCostGCPUsageCostConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCostGCPUsageCostConfig(response: ResponseContext): Promise<GCPUsageCostConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomAllocationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCustomAllocationRule(response: ResponseContext): Promise<ArbitraryRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTagPipelinesRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTagPipelinesRuleset(response: ResponseContext): Promise<RulesetResp>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBudget
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteBudget(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCostAWSCURConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCostAWSCURConfig(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCostAzureUCConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCostAzureUCConfig(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCostGCPUsageCostConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCostGCPUsageCostConfig(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomAllocationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCustomAllocationRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomCostsFile
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCustomCostsFile(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTagPipelinesRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTagPipelinesRuleset(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBudget
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBudget(response: ResponseContext): Promise<BudgetWithEntries>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCostAWSCURConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCostAWSCURConfig(response: ResponseContext): Promise<AwsCurConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCostAzureUCConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCostAzureUCConfig(response: ResponseContext): Promise<UCConfigPair>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCostGCPUsageCostConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCostGCPUsageCostConfig(response: ResponseContext): Promise<GcpUcConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomAllocationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCustomAllocationRule(response: ResponseContext): Promise<ArbitraryRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCustomCostsFile
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCustomCostsFile(response: ResponseContext): Promise<CustomCostsFileGetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTagPipelinesRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTagPipelinesRuleset(response: ResponseContext): Promise<RulesetResp>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBudgets
     * @throws ApiException if the response code was not in [200, 299]
     */
    listBudgets(response: ResponseContext): Promise<BudgetArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCostAWSCURConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCostAWSCURConfigs(response: ResponseContext): Promise<AwsCURConfigsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCostAzureUCConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCostAzureUCConfigs(response: ResponseContext): Promise<AzureUCConfigsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCostGCPUsageCostConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCostGCPUsageCostConfigs(response: ResponseContext): Promise<GCPUsageCostConfigsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCustomAllocationRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCustomAllocationRules(response: ResponseContext): Promise<ArbitraryRuleResponseArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCustomCostsFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCustomCostsFiles(response: ResponseContext): Promise<CustomCostsFileListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTagPipelinesRulesets
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTagPipelinesRulesets(response: ResponseContext): Promise<RulesetRespArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reorderCustomAllocationRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    reorderCustomAllocationRules(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reorderTagPipelinesRulesets
     * @throws ApiException if the response code was not in [200, 299]
     */
    reorderTagPipelinesRulesets(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCostAWSCURConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCostAWSCURConfig(response: ResponseContext): Promise<AwsCURConfigsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCostAzureUCConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCostAzureUCConfigs(response: ResponseContext): Promise<AzureUCConfigPairsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCostGCPUsageCostConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCostGCPUsageCostConfig(response: ResponseContext): Promise<GCPUsageCostConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCustomAllocationRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCustomAllocationRule(response: ResponseContext): Promise<ArbitraryRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTagPipelinesRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTagPipelinesRuleset(response: ResponseContext): Promise<RulesetResp>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadCustomCostsFile
     * @throws ApiException if the response code was not in [200, 299]
     */
    uploadCustomCostsFile(response: ResponseContext): Promise<CustomCostsFileUploadResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertBudget
     * @throws ApiException if the response code was not in [200, 299]
     */
    upsertBudget(response: ResponseContext): Promise<BudgetWithEntries>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateBudget
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateBudget(response: ResponseContext): Promise<BudgetValidationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateCsvBudget
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateCsvBudget(response: ResponseContext): Promise<ValidationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateQuery(response: ResponseContext): Promise<RulesValidateQueryResponse>;
}
export interface CloudCostManagementApiCreateCostAWSCURConfigRequest {
    /**
     * @type AwsCURConfigPostRequest
     */
    body: AwsCURConfigPostRequest;
}
export interface CloudCostManagementApiCreateCostAzureUCConfigsRequest {
    /**
     * @type AzureUCConfigPostRequest
     */
    body: AzureUCConfigPostRequest;
}
export interface CloudCostManagementApiCreateCostGCPUsageCostConfigRequest {
    /**
     * @type GCPUsageCostConfigPostRequest
     */
    body: GCPUsageCostConfigPostRequest;
}
export interface CloudCostManagementApiCreateCustomAllocationRuleRequest {
    /**
     * @type ArbitraryCostUpsertRequest
     */
    body: ArbitraryCostUpsertRequest;
}
export interface CloudCostManagementApiCreateTagPipelinesRulesetRequest {
    /**
     * @type CreateRulesetRequest
     */
    body: CreateRulesetRequest;
}
export interface CloudCostManagementApiDeleteBudgetRequest {
    /**
     * Budget id.
     * @type string
     */
    budgetId: string;
}
export interface CloudCostManagementApiDeleteCostAWSCURConfigRequest {
    /**
     * Cloud Account id.
     * @type number
     */
    cloudAccountId: number;
}
export interface CloudCostManagementApiDeleteCostAzureUCConfigRequest {
    /**
     * Cloud Account id.
     * @type number
     */
    cloudAccountId: number;
}
export interface CloudCostManagementApiDeleteCostGCPUsageCostConfigRequest {
    /**
     * Cloud Account id.
     * @type number
     */
    cloudAccountId: number;
}
export interface CloudCostManagementApiDeleteCustomAllocationRuleRequest {
    /**
     * The unique identifier of the custom allocation rule
     * @type number
     */
    ruleId: number;
}
export interface CloudCostManagementApiDeleteCustomCostsFileRequest {
    /**
     * File ID.
     * @type string
     */
    fileId: string;
}
export interface CloudCostManagementApiDeleteTagPipelinesRulesetRequest {
    /**
     * The unique identifier of the ruleset
     * @type string
     */
    rulesetId: string;
}
export interface CloudCostManagementApiGetBudgetRequest {
    /**
     * Budget id.
     * @type string
     */
    budgetId: string;
}
export interface CloudCostManagementApiGetCostAWSCURConfigRequest {
    /**
     * The unique identifier of the cloud account
     * @type number
     */
    cloudAccountId: number;
}
export interface CloudCostManagementApiGetCostAzureUCConfigRequest {
    /**
     * The unique identifier of the cloud account
     * @type number
     */
    cloudAccountId: number;
}
export interface CloudCostManagementApiGetCostGCPUsageCostConfigRequest {
    /**
     * The unique identifier of the cloud account
     * @type number
     */
    cloudAccountId: number;
}
export interface CloudCostManagementApiGetCustomAllocationRuleRequest {
    /**
     * The unique identifier of the custom allocation rule
     * @type number
     */
    ruleId: number;
}
export interface CloudCostManagementApiGetCustomCostsFileRequest {
    /**
     * File ID.
     * @type string
     */
    fileId: string;
}
export interface CloudCostManagementApiGetTagPipelinesRulesetRequest {
    /**
     * The unique identifier of the ruleset
     * @type string
     */
    rulesetId: string;
}
export interface CloudCostManagementApiListCustomCostsFilesRequest {
    /**
     * Page number for pagination
     * @type number
     */
    pageNumber?: number;
    /**
     * Page size for pagination
     * @type number
     */
    pageSize?: number;
    /**
     * Filter by file status
     * @type string
     */
    filterStatus?: string;
    /**
     * Sort key with optional descending prefix
     * @type string
     */
    sort?: string;
}
export interface CloudCostManagementApiReorderCustomAllocationRulesRequest {
    /**
     * @type ReorderRuleResourceArray
     */
    body: ReorderRuleResourceArray;
}
export interface CloudCostManagementApiReorderTagPipelinesRulesetsRequest {
    /**
     * @type ReorderRulesetResourceArray
     */
    body: ReorderRulesetResourceArray;
}
export interface CloudCostManagementApiUpdateCostAWSCURConfigRequest {
    /**
     * Cloud Account id.
     * @type number
     */
    cloudAccountId: number;
    /**
     * @type AwsCURConfigPatchRequest
     */
    body: AwsCURConfigPatchRequest;
}
export interface CloudCostManagementApiUpdateCostAzureUCConfigsRequest {
    /**
     * Cloud Account id.
     * @type number
     */
    cloudAccountId: number;
    /**
     * @type AzureUCConfigPatchRequest
     */
    body: AzureUCConfigPatchRequest;
}
export interface CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest {
    /**
     * Cloud Account id.
     * @type number
     */
    cloudAccountId: number;
    /**
     * @type GCPUsageCostConfigPatchRequest
     */
    body: GCPUsageCostConfigPatchRequest;
}
export interface CloudCostManagementApiUpdateCustomAllocationRuleRequest {
    /**
     * The unique identifier of the custom allocation rule
     * @type number
     */
    ruleId: number;
    /**
     * @type ArbitraryCostUpsertRequest
     */
    body: ArbitraryCostUpsertRequest;
}
export interface CloudCostManagementApiUpdateTagPipelinesRulesetRequest {
    /**
     * The unique identifier of the ruleset
     * @type string
     */
    rulesetId: string;
    /**
     * @type UpdateRulesetRequest
     */
    body: UpdateRulesetRequest;
}
export interface CloudCostManagementApiUploadCustomCostsFileRequest {
    /**
     * @type Array<CustomCostsFileLineItem>
     */
    body: Array<CustomCostsFileLineItem>;
}
export interface CloudCostManagementApiUpsertBudgetRequest {
    /**
     * @type BudgetWithEntries
     */
    body: BudgetWithEntries;
}
export interface CloudCostManagementApiValidateBudgetRequest {
    /**
     * @type BudgetValidationRequest
     */
    body: BudgetValidationRequest;
}
export interface CloudCostManagementApiValidateQueryRequest {
    /**
     * @type RulesValidateQueryRequest
     */
    body: RulesValidateQueryRequest;
}
export declare class CloudCostManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CloudCostManagementApiRequestFactory, responseProcessor?: CloudCostManagementApiResponseProcessor);
    /**
     * Create a Cloud Cost Management account for an AWS CUR config.
     * @param param The request object
     */
    createCostAWSCURConfig(param: CloudCostManagementApiCreateCostAWSCURConfigRequest, options?: Configuration): Promise<AwsCurConfigResponse>;
    /**
     * Create a Cloud Cost Management account for an Azure config.
     * @param param The request object
     */
    createCostAzureUCConfigs(param: CloudCostManagementApiCreateCostAzureUCConfigsRequest, options?: Configuration): Promise<AzureUCConfigPairsResponse>;
    /**
     * Create a Cloud Cost Management account for an Google Cloud Usage Cost config.
     * @param param The request object
     */
    createCostGCPUsageCostConfig(param: CloudCostManagementApiCreateCostGCPUsageCostConfigRequest, options?: Configuration): Promise<GCPUsageCostConfigResponse>;
    /**
     * Create a new custom allocation rule with the specified filters and allocation strategy.
     *
     * **Strategy Methods:**
     * - **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.
     * - **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.
     * - **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).
     *
     * **Filter Conditions:**
     * - Use **value** for single-value conditions: "is", "is not", "contains", "does not contain", "=", "!=", "like", "not like", "is all values", "is untagged"
     * - Use **values** for multi-value conditions: "in", "not in"
     * - Cannot use both value and values simultaneously.
     *
     * **Supported operators**: is, is not, is all values, is untagged, contains, does not contain, in, not in, =, !=, like, not like
     * @param param The request object
     */
    createCustomAllocationRule(param: CloudCostManagementApiCreateCustomAllocationRuleRequest, options?: Configuration): Promise<ArbitraryRuleResponse>;
    /**
     * Create a new tag pipeline ruleset with the specified rules and configuration
     * @param param The request object
     */
    createTagPipelinesRuleset(param: CloudCostManagementApiCreateTagPipelinesRulesetRequest, options?: Configuration): Promise<RulesetResp>;
    /**
     * Delete a budget
     * @param param The request object
     */
    deleteBudget(param: CloudCostManagementApiDeleteBudgetRequest, options?: Configuration): Promise<void>;
    /**
     * Archive a Cloud Cost Management Account.
     * @param param The request object
     */
    deleteCostAWSCURConfig(param: CloudCostManagementApiDeleteCostAWSCURConfigRequest, options?: Configuration): Promise<void>;
    /**
     * Archive a Cloud Cost Management Account.
     * @param param The request object
     */
    deleteCostAzureUCConfig(param: CloudCostManagementApiDeleteCostAzureUCConfigRequest, options?: Configuration): Promise<void>;
    /**
     * Archive a Cloud Cost Management account.
     * @param param The request object
     */
    deleteCostGCPUsageCostConfig(param: CloudCostManagementApiDeleteCostGCPUsageCostConfigRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a custom allocation rule - Delete an existing custom allocation rule by its ID
     * @param param The request object
     */
    deleteCustomAllocationRule(param: CloudCostManagementApiDeleteCustomAllocationRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete the specified Custom Costs file.
     * @param param The request object
     */
    deleteCustomCostsFile(param: CloudCostManagementApiDeleteCustomCostsFileRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a tag pipeline ruleset - Delete an existing tag pipeline ruleset by its ID
     * @param param The request object
     */
    deleteTagPipelinesRuleset(param: CloudCostManagementApiDeleteTagPipelinesRulesetRequest, options?: Configuration): Promise<void>;
    /**
     * Get a budget
     * @param param The request object
     */
    getBudget(param: CloudCostManagementApiGetBudgetRequest, options?: Configuration): Promise<BudgetWithEntries>;
    /**
     * Get a specific AWS CUR config.
     * @param param The request object
     */
    getCostAWSCURConfig(param: CloudCostManagementApiGetCostAWSCURConfigRequest, options?: Configuration): Promise<AwsCurConfigResponse>;
    /**
     * Get a specific Azure config.
     * @param param The request object
     */
    getCostAzureUCConfig(param: CloudCostManagementApiGetCostAzureUCConfigRequest, options?: Configuration): Promise<UCConfigPair>;
    /**
     * Get a specific Google Cloud Usage Cost config.
     * @param param The request object
     */
    getCostGCPUsageCostConfig(param: CloudCostManagementApiGetCostGCPUsageCostConfigRequest, options?: Configuration): Promise<GcpUcConfigResponse>;
    /**
     * Get a specific custom allocation rule - Retrieve a specific custom allocation rule by its ID
     * @param param The request object
     */
    getCustomAllocationRule(param: CloudCostManagementApiGetCustomAllocationRuleRequest, options?: Configuration): Promise<ArbitraryRuleResponse>;
    /**
     * Fetch the specified Custom Costs file.
     * @param param The request object
     */
    getCustomCostsFile(param: CloudCostManagementApiGetCustomCostsFileRequest, options?: Configuration): Promise<CustomCostsFileGetResponse>;
    /**
     * Get a specific tag pipeline ruleset - Retrieve a specific tag pipeline ruleset by its ID
     * @param param The request object
     */
    getTagPipelinesRuleset(param: CloudCostManagementApiGetTagPipelinesRulesetRequest, options?: Configuration): Promise<RulesetResp>;
    /**
     * List budgets.
     * @param param The request object
     */
    listBudgets(options?: Configuration): Promise<BudgetArray>;
    /**
     * List the AWS CUR configs.
     * @param param The request object
     */
    listCostAWSCURConfigs(options?: Configuration): Promise<AwsCURConfigsResponse>;
    /**
     * List the Azure configs.
     * @param param The request object
     */
    listCostAzureUCConfigs(options?: Configuration): Promise<AzureUCConfigsResponse>;
    /**
     * List the Google Cloud Usage Cost configs.
     * @param param The request object
     */
    listCostGCPUsageCostConfigs(options?: Configuration): Promise<GCPUsageCostConfigsResponse>;
    /**
     * List all custom allocation rules - Retrieve a list of all custom allocation rules for the organization
     * @param param The request object
     */
    listCustomAllocationRules(options?: Configuration): Promise<ArbitraryRuleResponseArray>;
    /**
     * List the Custom Costs files.
     * @param param The request object
     */
    listCustomCostsFiles(param?: CloudCostManagementApiListCustomCostsFilesRequest, options?: Configuration): Promise<CustomCostsFileListResponse>;
    /**
     * List all tag pipeline rulesets - Retrieve a list of all tag pipeline rulesets for the organization
     * @param param The request object
     */
    listTagPipelinesRulesets(options?: Configuration): Promise<RulesetRespArray>;
    /**
     * Reorder custom allocation rules - Change the execution order of custom allocation rules.
     *
     * **Important**: You must provide the **complete list** of all rule IDs in the desired execution order. The API will reorder ALL rules according to the provided sequence.
     *
     * Rules are executed in the order specified, with lower indices (earlier in the array) having higher priority.
     *
     * **Example**: If you have rules with IDs [123, 456, 789] and want to change order from 123→456→789 to 456→123→789, send: [{"id": "456"}, {"id": "123"}, {"id": "789"}]
     * @param param The request object
     */
    reorderCustomAllocationRules(param: CloudCostManagementApiReorderCustomAllocationRulesRequest, options?: Configuration): Promise<void>;
    /**
     * Reorder tag pipeline rulesets - Change the execution order of tag pipeline rulesets
     * @param param The request object
     */
    reorderTagPipelinesRulesets(param: CloudCostManagementApiReorderTagPipelinesRulesetsRequest, options?: Configuration): Promise<void>;
    /**
     * Update the status (active/archived) and/or account filtering configuration of an AWS CUR config.
     * @param param The request object
     */
    updateCostAWSCURConfig(param: CloudCostManagementApiUpdateCostAWSCURConfigRequest, options?: Configuration): Promise<AwsCURConfigsResponse>;
    /**
     * Update the status of an  Azure config (active/archived).
     * @param param The request object
     */
    updateCostAzureUCConfigs(param: CloudCostManagementApiUpdateCostAzureUCConfigsRequest, options?: Configuration): Promise<AzureUCConfigPairsResponse>;
    /**
     * Update the status of an Google Cloud Usage Cost config (active/archived).
     * @param param The request object
     */
    updateCostGCPUsageCostConfig(param: CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest, options?: Configuration): Promise<GCPUsageCostConfigResponse>;
    /**
     * Update an existing custom allocation rule with new filters and allocation strategy.
     *
     * **Strategy Methods:**
     * - **PROPORTIONAL/EVEN**: Allocates costs proportionally/evenly based on existing costs. Requires: granularity, allocated_by_tag_keys. Optional: based_on_costs, allocated_by_filters, evaluate_grouped_by_tag_keys, evaluate_grouped_by_filters.
     * - **PROPORTIONAL_TIMESERIES/EVEN_TIMESERIES**: Allocates based on timeseries data. Requires: granularity, based_on_timeseries. Optional: evaluate_grouped_by_tag_keys.
     * - **PERCENT**: Allocates fixed percentages to specific tags. Requires: allocated_by (array of percentage allocations).
     * - **USAGE_METRIC**: Allocates based on usage metrics (implementation varies).
     *
     * **Filter Conditions:**
     * - Use **value** for single-value conditions: "is", "is not", "contains", "does not contain", "=", "!=", "like", "not like", "is all values", "is untagged"
     * - Use **values** for multi-value conditions: "in", "not in"
     * - Cannot use both value and values simultaneously.
     *
     * **Supported operators**: is, is not, is all values, is untagged, contains, does not contain, in, not in, =, !=, like, not like
     * @param param The request object
     */
    updateCustomAllocationRule(param: CloudCostManagementApiUpdateCustomAllocationRuleRequest, options?: Configuration): Promise<ArbitraryRuleResponse>;
    /**
     * Update a tag pipeline ruleset - Update an existing tag pipeline ruleset with new rules and configuration
     * @param param The request object
     */
    updateTagPipelinesRuleset(param: CloudCostManagementApiUpdateTagPipelinesRulesetRequest, options?: Configuration): Promise<RulesetResp>;
    /**
     * Upload a Custom Costs file.
     * @param param The request object
     */
    uploadCustomCostsFile(param: CloudCostManagementApiUploadCustomCostsFileRequest, options?: Configuration): Promise<CustomCostsFileUploadResponse>;
    /**
     * Create a new budget or update an existing one.
     * @param param The request object
     */
    upsertBudget(param: CloudCostManagementApiUpsertBudgetRequest, options?: Configuration): Promise<BudgetWithEntries>;
    /**
     * Validate a budget configuration without creating or modifying it
     * @param param The request object
     */
    validateBudget(param: CloudCostManagementApiValidateBudgetRequest, options?: Configuration): Promise<BudgetValidationResponse>;
    /**
     * @param param The request object
     */
    validateCsvBudget(options?: Configuration): Promise<ValidationResponse>;
    /**
     * Validate a tag pipeline query - Validate the syntax and structure of a tag pipeline query
     * @param param The request object
     */
    validateQuery(param: CloudCostManagementApiValidateQueryRequest, options?: Configuration): Promise<RulesValidateQueryResponse>;
}
