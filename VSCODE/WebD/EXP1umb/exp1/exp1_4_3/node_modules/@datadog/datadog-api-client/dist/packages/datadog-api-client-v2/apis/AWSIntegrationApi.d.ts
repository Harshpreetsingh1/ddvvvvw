import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AWSAccountCreateRequest } from "../models/AWSAccountCreateRequest";
import { AWSAccountResponse } from "../models/AWSAccountResponse";
import { AWSAccountsResponse } from "../models/AWSAccountsResponse";
import { AWSAccountUpdateRequest } from "../models/AWSAccountUpdateRequest";
import { AWSEventBridgeCreateRequest } from "../models/AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateResponse } from "../models/AWSEventBridgeCreateResponse";
import { AWSEventBridgeDeleteRequest } from "../models/AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteResponse } from "../models/AWSEventBridgeDeleteResponse";
import { AWSEventBridgeListResponse } from "../models/AWSEventBridgeListResponse";
import { AWSIntegrationIamPermissionsResponse } from "../models/AWSIntegrationIamPermissionsResponse";
import { AWSNamespacesResponse } from "../models/AWSNamespacesResponse";
import { AWSNewExternalIDResponse } from "../models/AWSNewExternalIDResponse";
export declare class AWSIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createAWSAccount(body: AWSAccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createAWSEventBridgeSource(body: AWSEventBridgeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createNewAWSExternalID(_options?: Configuration): Promise<RequestContext>;
    deleteAWSAccount(awsAccountConfigId: string, _options?: Configuration): Promise<RequestContext>;
    deleteAWSEventBridgeSource(body: AWSEventBridgeDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    getAWSAccount(awsAccountConfigId: string, _options?: Configuration): Promise<RequestContext>;
    getAWSIntegrationIAMPermissions(_options?: Configuration): Promise<RequestContext>;
    getAWSIntegrationIAMPermissionsResourceCollection(_options?: Configuration): Promise<RequestContext>;
    getAWSIntegrationIAMPermissionsStandard(_options?: Configuration): Promise<RequestContext>;
    listAWSAccounts(awsAccountId?: string, _options?: Configuration): Promise<RequestContext>;
    listAWSEventBridgeSources(_options?: Configuration): Promise<RequestContext>;
    listAWSNamespaces(_options?: Configuration): Promise<RequestContext>;
    updateAWSAccount(awsAccountConfigId: string, body: AWSAccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AWSIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSAccount(response: ResponseContext): Promise<AWSAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSEventBridgeSource
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSEventBridgeSource(response: ResponseContext): Promise<AWSEventBridgeCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewAWSExternalID
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNewAWSExternalID(response: ResponseContext): Promise<AWSNewExternalIDResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSAccount(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSEventBridgeSource
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSEventBridgeSource(response: ResponseContext): Promise<AWSEventBridgeDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAWSAccount(response: ResponseContext): Promise<AWSAccountResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAWSIntegrationIAMPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAWSIntegrationIAMPermissions(response: ResponseContext): Promise<AWSIntegrationIamPermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAWSIntegrationIAMPermissionsResourceCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAWSIntegrationIAMPermissionsResourceCollection(response: ResponseContext): Promise<AWSIntegrationIamPermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAWSIntegrationIAMPermissionsStandard
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAWSIntegrationIAMPermissionsStandard(response: ResponseContext): Promise<AWSIntegrationIamPermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSAccounts(response: ResponseContext): Promise<AWSAccountsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSEventBridgeSources
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSEventBridgeSources(response: ResponseContext): Promise<AWSEventBridgeListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSNamespaces(response: ResponseContext): Promise<AWSNamespacesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAWSAccount(response: ResponseContext): Promise<AWSAccountResponse>;
}
export interface AWSIntegrationApiCreateAWSAccountRequest {
    /**
     * @type AWSAccountCreateRequest
     */
    body: AWSAccountCreateRequest;
}
export interface AWSIntegrationApiCreateAWSEventBridgeSourceRequest {
    /**
     * Create an Amazon EventBridge source for an AWS account with a given name and region.
     * @type AWSEventBridgeCreateRequest
     */
    body: AWSEventBridgeCreateRequest;
}
export interface AWSIntegrationApiDeleteAWSAccountRequest {
    /**
     * Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the
     * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.
     * @type string
     */
    awsAccountConfigId: string;
}
export interface AWSIntegrationApiDeleteAWSEventBridgeSourceRequest {
    /**
     * Delete the Amazon EventBridge source with the given name, region, and associated AWS account.
     * @type AWSEventBridgeDeleteRequest
     */
    body: AWSEventBridgeDeleteRequest;
}
export interface AWSIntegrationApiGetAWSAccountRequest {
    /**
     * Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the
     * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.
     * @type string
     */
    awsAccountConfigId: string;
}
export interface AWSIntegrationApiListAWSAccountsRequest {
    /**
     * Optional query parameter to filter accounts by AWS Account ID.
     * If not provided, all accounts are returned.
     * @type string
     */
    awsAccountId?: string;
}
export interface AWSIntegrationApiUpdateAWSAccountRequest {
    /**
     * Unique Datadog ID of the AWS Account Integration Config. To get the config ID for an account, use the
     * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations) endpoint and query by AWS Account ID.
     * @type string
     */
    awsAccountConfigId: string;
    /**
     * @type AWSAccountUpdateRequest
     */
    body: AWSAccountUpdateRequest;
}
export declare class AWSIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AWSIntegrationApiRequestFactory, responseProcessor?: AWSIntegrationApiResponseProcessor);
    /**
     * Create a new AWS Account Integration Config.
     * @param param The request object
     */
    createAWSAccount(param: AWSIntegrationApiCreateAWSAccountRequest, options?: Configuration): Promise<AWSAccountResponse>;
    /**
     * Create an Amazon EventBridge source.
     * @param param The request object
     */
    createAWSEventBridgeSource(param: AWSIntegrationApiCreateAWSEventBridgeSourceRequest, options?: Configuration): Promise<AWSEventBridgeCreateResponse>;
    /**
     * Generate a new external ID for AWS role-based authentication.
     * @param param The request object
     */
    createNewAWSExternalID(options?: Configuration): Promise<AWSNewExternalIDResponse>;
    /**
     * Delete an AWS Account Integration Config by config ID.
     * @param param The request object
     */
    deleteAWSAccount(param: AWSIntegrationApiDeleteAWSAccountRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an Amazon EventBridge source.
     * @param param The request object
     */
    deleteAWSEventBridgeSource(param: AWSIntegrationApiDeleteAWSEventBridgeSourceRequest, options?: Configuration): Promise<AWSEventBridgeDeleteResponse>;
    /**
     * Get an AWS Account Integration Config by config ID.
     * @param param The request object
     */
    getAWSAccount(param: AWSIntegrationApiGetAWSAccountRequest, options?: Configuration): Promise<AWSAccountResponse>;
    /**
     * Get all AWS IAM permissions required for the AWS integration.
     * @param param The request object
     */
    getAWSIntegrationIAMPermissions(options?: Configuration): Promise<AWSIntegrationIamPermissionsResponse>;
    /**
     * Get all resource collection AWS IAM permissions required for the AWS integration.
     * @param param The request object
     */
    getAWSIntegrationIAMPermissionsResourceCollection(options?: Configuration): Promise<AWSIntegrationIamPermissionsResponse>;
    /**
     * Get all standard AWS IAM permissions required for the AWS integration.
     * @param param The request object
     */
    getAWSIntegrationIAMPermissionsStandard(options?: Configuration): Promise<AWSIntegrationIamPermissionsResponse>;
    /**
     * Get a list of AWS Account Integration Configs.
     * @param param The request object
     */
    listAWSAccounts(param?: AWSIntegrationApiListAWSAccountsRequest, options?: Configuration): Promise<AWSAccountsResponse>;
    /**
     * Get all Amazon EventBridge sources.
     * @param param The request object
     */
    listAWSEventBridgeSources(options?: Configuration): Promise<AWSEventBridgeListResponse>;
    /**
     * Get a list of available AWS CloudWatch namespaces that can send metrics to Datadog.
     * @param param The request object
     */
    listAWSNamespaces(options?: Configuration): Promise<AWSNamespacesResponse>;
    /**
     * Update an AWS Account Integration Config by config ID.
     * @param param The request object
     */
    updateAWSAccount(param: AWSIntegrationApiUpdateAWSAccountRequest, options?: Configuration): Promise<AWSAccountResponse>;
}
