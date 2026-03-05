import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AWSAccount } from "../models/AWSAccount";
import { AWSAccountCreateResponse } from "../models/AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "../models/AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "../models/AWSAccountListResponse";
import { AWSEventBridgeCreateRequest } from "../models/AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateResponse } from "../models/AWSEventBridgeCreateResponse";
import { AWSEventBridgeDeleteRequest } from "../models/AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteResponse } from "../models/AWSEventBridgeDeleteResponse";
import { AWSEventBridgeListResponse } from "../models/AWSEventBridgeListResponse";
import { AWSTagFilterCreateRequest } from "../models/AWSTagFilterCreateRequest";
import { AWSTagFilterDeleteRequest } from "../models/AWSTagFilterDeleteRequest";
import { AWSTagFilterListResponse } from "../models/AWSTagFilterListResponse";
export declare class AWSIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createAWSAccount(body: AWSAccount, _options?: Configuration): Promise<RequestContext>;
    createAWSEventBridgeSource(body: AWSEventBridgeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createAWSTagFilter(body: AWSTagFilterCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createNewAWSExternalID(body: AWSAccount, _options?: Configuration): Promise<RequestContext>;
    deleteAWSAccount(body: AWSAccountDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAWSEventBridgeSource(body: AWSEventBridgeDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAWSTagFilter(body: AWSTagFilterDeleteRequest, _options?: Configuration): Promise<RequestContext>;
    listAvailableAWSNamespaces(_options?: Configuration): Promise<RequestContext>;
    listAWSAccounts(accountId?: string, roleName?: string, accessKeyId?: string, _options?: Configuration): Promise<RequestContext>;
    listAWSEventBridgeSources(_options?: Configuration): Promise<RequestContext>;
    listAWSTagFilters(accountId: string, _options?: Configuration): Promise<RequestContext>;
    updateAWSAccount(body: AWSAccount, accountId?: string, roleName?: string, accessKeyId?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class AWSIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSAccount(response: ResponseContext): Promise<AWSAccountCreateResponse>;
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
     * @params response Response returned by the server for a request to createAWSTagFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSTagFilter(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewAWSExternalID
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNewAWSExternalID(response: ResponseContext): Promise<AWSAccountCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSAccount(response: ResponseContext): Promise<any>;
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
     * @params response Response returned by the server for a request to deleteAWSTagFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSTagFilter(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAvailableAWSNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAvailableAWSNamespaces(response: ResponseContext): Promise<Array<string>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSAccounts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSAccounts(response: ResponseContext): Promise<AWSAccountListResponse>;
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
     * @params response Response returned by the server for a request to listAWSTagFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSTagFilters(response: ResponseContext): Promise<AWSTagFilterListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAWSAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAWSAccount(response: ResponseContext): Promise<any>;
}
export interface AWSIntegrationApiCreateAWSAccountRequest {
    /**
     * AWS Request Object
     * @type AWSAccount
     */
    body: AWSAccount;
}
export interface AWSIntegrationApiCreateAWSEventBridgeSourceRequest {
    /**
     * Create an Amazon EventBridge source for an AWS account with a given name and region.
     * @type AWSEventBridgeCreateRequest
     */
    body: AWSEventBridgeCreateRequest;
}
export interface AWSIntegrationApiCreateAWSTagFilterRequest {
    /**
     * Set an AWS tag filter using an `aws_account_identifier`, `namespace`, and filtering string.
     * Namespace options are `application_elb`, `elb`, `lambda`, `network_elb`, `rds`, `sqs`, and `custom`.
     * @type AWSTagFilterCreateRequest
     */
    body: AWSTagFilterCreateRequest;
}
export interface AWSIntegrationApiCreateNewAWSExternalIDRequest {
    /**
     * Your Datadog role delegation name.
     * For more information about your AWS account Role name,
     * see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup).
     * @type AWSAccount
     */
    body: AWSAccount;
}
export interface AWSIntegrationApiDeleteAWSAccountRequest {
    /**
     * AWS request object
     * @type AWSAccountDeleteRequest
     */
    body: AWSAccountDeleteRequest;
}
export interface AWSIntegrationApiDeleteAWSEventBridgeSourceRequest {
    /**
     * Delete the Amazon EventBridge source with the given name, region, and associated AWS account.
     * @type AWSEventBridgeDeleteRequest
     */
    body: AWSEventBridgeDeleteRequest;
}
export interface AWSIntegrationApiDeleteAWSTagFilterRequest {
    /**
     * Delete a tag filtering entry for a given AWS account and `dd-aws` namespace.
     * @type AWSTagFilterDeleteRequest
     */
    body: AWSTagFilterDeleteRequest;
}
export interface AWSIntegrationApiListAWSAccountsRequest {
    /**
     * Only return AWS accounts that matches this `account_id`.
     * @type string
     */
    accountId?: string;
    /**
     * Only return AWS accounts that matches this role_name.
     * @type string
     */
    roleName?: string;
    /**
     * Only return AWS accounts that matches this `access_key_id`.
     * @type string
     */
    accessKeyId?: string;
}
export interface AWSIntegrationApiListAWSTagFiltersRequest {
    /**
     * Only return AWS filters that matches this `account_id`.
     * @type string
     */
    accountId: string;
}
export interface AWSIntegrationApiUpdateAWSAccountRequest {
    /**
     * AWS request object
     * @type AWSAccount
     */
    body: AWSAccount;
    /**
     * Only return AWS accounts that matches this `account_id`.
     * @type string
     */
    accountId?: string;
    /**
     * Only return AWS accounts that match this `role_name`.
     * Required if `account_id` is specified.
     * @type string
     */
    roleName?: string;
    /**
     * Only return AWS accounts that matches this `access_key_id`.
     * Required if none of the other two options are specified.
     * @type string
     */
    accessKeyId?: string;
}
export declare class AWSIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AWSIntegrationApiRequestFactory, responseProcessor?: AWSIntegrationApiResponseProcessor);
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Create a Datadog-Amazon Web Services integration.
     * Using the `POST` method updates your integration configuration
     * by adding your new configuration to the existing one in your Datadog organization.
     * A unique AWS Account ID for role based authentication.
     * @param param The request object
     */
    createAWSAccount(param: AWSIntegrationApiCreateAWSAccountRequest, options?: Configuration): Promise<AWSAccountCreateResponse>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Create an Amazon EventBridge source.
     * @param param The request object
     */
    createAWSEventBridgeSource(param: AWSIntegrationApiCreateAWSEventBridgeSourceRequest, options?: Configuration): Promise<AWSEventBridgeCreateResponse>;
    /**
     * Set an AWS tag filter.
     * @param param The request object
     */
    createAWSTagFilter(param: AWSIntegrationApiCreateAWSTagFilterRequest, options?: Configuration): Promise<any>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Generate a new AWS external ID for a given AWS account ID and role name pair.
     * @param param The request object
     */
    createNewAWSExternalID(param: AWSIntegrationApiCreateNewAWSExternalIDRequest, options?: Configuration): Promise<AWSAccountCreateResponse>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * @param param The request object
     */
    deleteAWSAccount(param: AWSIntegrationApiDeleteAWSAccountRequest, options?: Configuration): Promise<any>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Delete an Amazon EventBridge source.
     * @param param The request object
     */
    deleteAWSEventBridgeSource(param: AWSIntegrationApiDeleteAWSEventBridgeSourceRequest, options?: Configuration): Promise<AWSEventBridgeDeleteResponse>;
    /**
     * Delete a tag filtering entry.
     * @param param The request object
     */
    deleteAWSTagFilter(param: AWSIntegrationApiDeleteAWSTagFilterRequest, options?: Configuration): Promise<any>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * @param param The request object
     */
    listAvailableAWSNamespaces(options?: Configuration): Promise<Array<string>>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** List all Datadog-AWS integrations available in your Datadog organization.
     * @param param The request object
     */
    listAWSAccounts(param?: AWSIntegrationApiListAWSAccountsRequest, options?: Configuration): Promise<AWSAccountListResponse>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Get all Amazon EventBridge sources.
     * @param param The request object
     */
    listAWSEventBridgeSources(options?: Configuration): Promise<AWSEventBridgeListResponse>;
    /**
     * Get all AWS tag filters.
     * @param param The request object
     */
    listAWSTagFilters(param: AWSIntegrationApiListAWSTagFiltersRequest, options?: Configuration): Promise<AWSTagFilterListResponse>;
    /**
     * **This endpoint is deprecated - use the V2 endpoints instead.** Update a Datadog-Amazon Web Services integration.
     * @param param The request object
     */
    updateAWSAccount(param: AWSIntegrationApiUpdateAWSAccountRequest, options?: Configuration): Promise<any>;
}
