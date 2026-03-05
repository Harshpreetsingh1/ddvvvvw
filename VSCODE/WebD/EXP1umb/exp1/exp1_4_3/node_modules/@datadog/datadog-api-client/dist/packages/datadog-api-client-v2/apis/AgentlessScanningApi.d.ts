import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AwsOnDemandCreateRequest } from "../models/AwsOnDemandCreateRequest";
import { AwsOnDemandListResponse } from "../models/AwsOnDemandListResponse";
import { AwsOnDemandResponse } from "../models/AwsOnDemandResponse";
import { AwsScanOptionsCreateRequest } from "../models/AwsScanOptionsCreateRequest";
import { AwsScanOptionsListResponse } from "../models/AwsScanOptionsListResponse";
import { AwsScanOptionsResponse } from "../models/AwsScanOptionsResponse";
import { AwsScanOptionsUpdateRequest } from "../models/AwsScanOptionsUpdateRequest";
import { AzureScanOptions } from "../models/AzureScanOptions";
import { AzureScanOptionsArray } from "../models/AzureScanOptionsArray";
import { AzureScanOptionsInputUpdate } from "../models/AzureScanOptionsInputUpdate";
import { GcpScanOptions } from "../models/GcpScanOptions";
import { GcpScanOptionsArray } from "../models/GcpScanOptionsArray";
import { GcpScanOptionsInputUpdate } from "../models/GcpScanOptionsInputUpdate";
export declare class AgentlessScanningApiRequestFactory extends BaseAPIRequestFactory {
    createAwsOnDemandTask(body: AwsOnDemandCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createAwsScanOptions(body: AwsScanOptionsCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createAzureScanOptions(body: AzureScanOptions, _options?: Configuration): Promise<RequestContext>;
    createGcpScanOptions(body: GcpScanOptions, _options?: Configuration): Promise<RequestContext>;
    deleteAwsScanOptions(accountId: string, _options?: Configuration): Promise<RequestContext>;
    deleteAzureScanOptions(subscriptionId: string, _options?: Configuration): Promise<RequestContext>;
    deleteGcpScanOptions(projectId: string, _options?: Configuration): Promise<RequestContext>;
    getAwsOnDemandTask(taskId: string, _options?: Configuration): Promise<RequestContext>;
    getAwsScanOptions(accountId: string, _options?: Configuration): Promise<RequestContext>;
    getAzureScanOptions(subscriptionId: string, _options?: Configuration): Promise<RequestContext>;
    getGcpScanOptions(projectId: string, _options?: Configuration): Promise<RequestContext>;
    listAwsOnDemandTasks(_options?: Configuration): Promise<RequestContext>;
    listAwsScanOptions(_options?: Configuration): Promise<RequestContext>;
    listAzureScanOptions(_options?: Configuration): Promise<RequestContext>;
    listGcpScanOptions(_options?: Configuration): Promise<RequestContext>;
    updateAwsScanOptions(accountId: string, body: AwsScanOptionsUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateAzureScanOptions(subscriptionId: string, body: AzureScanOptionsInputUpdate, _options?: Configuration): Promise<RequestContext>;
    updateGcpScanOptions(projectId: string, body: GcpScanOptionsInputUpdate, _options?: Configuration): Promise<RequestContext>;
}
export declare class AgentlessScanningApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAwsOnDemandTask
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAwsOnDemandTask(response: ResponseContext): Promise<AwsOnDemandResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAwsScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAwsScanOptions(response: ResponseContext): Promise<AwsScanOptionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAzureScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAzureScanOptions(response: ResponseContext): Promise<AzureScanOptions>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGcpScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    createGcpScanOptions(response: ResponseContext): Promise<GcpScanOptions>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAwsScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAwsScanOptions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAzureScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAzureScanOptions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteGcpScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteGcpScanOptions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAwsOnDemandTask
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAwsOnDemandTask(response: ResponseContext): Promise<AwsOnDemandResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAwsScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAwsScanOptions(response: ResponseContext): Promise<AwsScanOptionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAzureScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAzureScanOptions(response: ResponseContext): Promise<AzureScanOptions>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGcpScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getGcpScanOptions(response: ResponseContext): Promise<GcpScanOptions>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAwsOnDemandTasks
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAwsOnDemandTasks(response: ResponseContext): Promise<AwsOnDemandListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAwsScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAwsScanOptions(response: ResponseContext): Promise<AwsScanOptionsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAzureScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAzureScanOptions(response: ResponseContext): Promise<AzureScanOptionsArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listGcpScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listGcpScanOptions(response: ResponseContext): Promise<GcpScanOptionsArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAwsScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAwsScanOptions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAzureScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAzureScanOptions(response: ResponseContext): Promise<AzureScanOptions>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateGcpScanOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateGcpScanOptions(response: ResponseContext): Promise<GcpScanOptions>;
}
export interface AgentlessScanningApiCreateAwsOnDemandTaskRequest {
    /**
     * The definition of the on demand task.
     * @type AwsOnDemandCreateRequest
     */
    body: AwsOnDemandCreateRequest;
}
export interface AgentlessScanningApiCreateAwsScanOptionsRequest {
    /**
     * The definition of the new scan options.
     * @type AwsScanOptionsCreateRequest
     */
    body: AwsScanOptionsCreateRequest;
}
export interface AgentlessScanningApiCreateAzureScanOptionsRequest {
    /**
     * @type AzureScanOptions
     */
    body: AzureScanOptions;
}
export interface AgentlessScanningApiCreateGcpScanOptionsRequest {
    /**
     * The definition of the new scan options.
     * @type GcpScanOptions
     */
    body: GcpScanOptions;
}
export interface AgentlessScanningApiDeleteAwsScanOptionsRequest {
    /**
     * The ID of an AWS account.
     * @type string
     */
    accountId: string;
}
export interface AgentlessScanningApiDeleteAzureScanOptionsRequest {
    /**
     * The Azure subscription ID.
     * @type string
     */
    subscriptionId: string;
}
export interface AgentlessScanningApiDeleteGcpScanOptionsRequest {
    /**
     * The GCP project ID.
     * @type string
     */
    projectId: string;
}
export interface AgentlessScanningApiGetAwsOnDemandTaskRequest {
    /**
     * The UUID of the task.
     * @type string
     */
    taskId: string;
}
export interface AgentlessScanningApiGetAwsScanOptionsRequest {
    /**
     * The ID of an AWS account.
     * @type string
     */
    accountId: string;
}
export interface AgentlessScanningApiGetAzureScanOptionsRequest {
    /**
     * The Azure subscription ID.
     * @type string
     */
    subscriptionId: string;
}
export interface AgentlessScanningApiGetGcpScanOptionsRequest {
    /**
     * The GCP project ID.
     * @type string
     */
    projectId: string;
}
export interface AgentlessScanningApiUpdateAwsScanOptionsRequest {
    /**
     * The ID of an AWS account.
     * @type string
     */
    accountId: string;
    /**
     * New definition of the scan options.
     * @type AwsScanOptionsUpdateRequest
     */
    body: AwsScanOptionsUpdateRequest;
}
export interface AgentlessScanningApiUpdateAzureScanOptionsRequest {
    /**
     * The Azure subscription ID.
     * @type string
     */
    subscriptionId: string;
    /**
     * @type AzureScanOptionsInputUpdate
     */
    body: AzureScanOptionsInputUpdate;
}
export interface AgentlessScanningApiUpdateGcpScanOptionsRequest {
    /**
     * The GCP project ID.
     * @type string
     */
    projectId: string;
    /**
     * New definition of the scan options.
     * @type GcpScanOptionsInputUpdate
     */
    body: GcpScanOptionsInputUpdate;
}
export declare class AgentlessScanningApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AgentlessScanningApiRequestFactory, responseProcessor?: AgentlessScanningApiResponseProcessor);
    /**
     * Trigger the scan of an AWS resource with a high priority. Agentless scanning must be activated for the AWS account containing the resource to scan.
     * @param param The request object
     */
    createAwsOnDemandTask(param: AgentlessScanningApiCreateAwsOnDemandTaskRequest, options?: Configuration): Promise<AwsOnDemandResponse>;
    /**
     * Activate Agentless scan options for an AWS account.
     * @param param The request object
     */
    createAwsScanOptions(param: AgentlessScanningApiCreateAwsScanOptionsRequest, options?: Configuration): Promise<AwsScanOptionsResponse>;
    /**
     * Activate Agentless scan options for an Azure subscription.
     * @param param The request object
     */
    createAzureScanOptions(param: AgentlessScanningApiCreateAzureScanOptionsRequest, options?: Configuration): Promise<AzureScanOptions>;
    /**
     * Activate Agentless scan options for a GCP project.
     * @param param The request object
     */
    createGcpScanOptions(param: AgentlessScanningApiCreateGcpScanOptionsRequest, options?: Configuration): Promise<GcpScanOptions>;
    /**
     * Delete Agentless scan options for an AWS account.
     * @param param The request object
     */
    deleteAwsScanOptions(param: AgentlessScanningApiDeleteAwsScanOptionsRequest, options?: Configuration): Promise<void>;
    /**
     * Delete Agentless scan options for an Azure subscription.
     * @param param The request object
     */
    deleteAzureScanOptions(param: AgentlessScanningApiDeleteAzureScanOptionsRequest, options?: Configuration): Promise<void>;
    /**
     * Delete Agentless scan options for a GCP project.
     * @param param The request object
     */
    deleteGcpScanOptions(param: AgentlessScanningApiDeleteGcpScanOptionsRequest, options?: Configuration): Promise<void>;
    /**
     * Fetch the data of a specific on demand task.
     * @param param The request object
     */
    getAwsOnDemandTask(param: AgentlessScanningApiGetAwsOnDemandTaskRequest, options?: Configuration): Promise<AwsOnDemandResponse>;
    /**
     * Fetches the Agentless scan options for an activated account.
     * @param param The request object
     */
    getAwsScanOptions(param: AgentlessScanningApiGetAwsScanOptionsRequest, options?: Configuration): Promise<AwsScanOptionsResponse>;
    /**
     * Fetches the Agentless scan options for an activated subscription.
     * @param param The request object
     */
    getAzureScanOptions(param: AgentlessScanningApiGetAzureScanOptionsRequest, options?: Configuration): Promise<AzureScanOptions>;
    /**
     * Fetches the Agentless scan options for an activated GCP project.
     * @param param The request object
     */
    getGcpScanOptions(param: AgentlessScanningApiGetGcpScanOptionsRequest, options?: Configuration): Promise<GcpScanOptions>;
    /**
     * Fetches the most recent 1000 AWS on demand tasks.
     * @param param The request object
     */
    listAwsOnDemandTasks(options?: Configuration): Promise<AwsOnDemandListResponse>;
    /**
     * Fetches the scan options configured for AWS accounts.
     * @param param The request object
     */
    listAwsScanOptions(options?: Configuration): Promise<AwsScanOptionsListResponse>;
    /**
     * Fetches the scan options configured for Azure accounts.
     * @param param The request object
     */
    listAzureScanOptions(options?: Configuration): Promise<AzureScanOptionsArray>;
    /**
     * Fetches the scan options configured for all GCP projects.
     * @param param The request object
     */
    listGcpScanOptions(options?: Configuration): Promise<GcpScanOptionsArray>;
    /**
     * Update the Agentless scan options for an activated account.
     * @param param The request object
     */
    updateAwsScanOptions(param: AgentlessScanningApiUpdateAwsScanOptionsRequest, options?: Configuration): Promise<void>;
    /**
     * Update the Agentless scan options for an activated subscription.
     * @param param The request object
     */
    updateAzureScanOptions(param: AgentlessScanningApiUpdateAzureScanOptionsRequest, options?: Configuration): Promise<AzureScanOptions>;
    /**
     * Update the Agentless scan options for an activated GCP project.
     * @param param The request object
     */
    updateGcpScanOptions(param: AgentlessScanningApiUpdateGcpScanOptionsRequest, options?: Configuration): Promise<GcpScanOptions>;
}
