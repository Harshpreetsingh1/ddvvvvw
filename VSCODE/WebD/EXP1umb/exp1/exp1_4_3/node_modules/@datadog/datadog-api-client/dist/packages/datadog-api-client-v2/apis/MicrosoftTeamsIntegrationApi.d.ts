import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { MicrosoftTeamsCreateTenantBasedHandleRequest } from "../models/MicrosoftTeamsCreateTenantBasedHandleRequest";
import { MicrosoftTeamsCreateWorkflowsWebhookHandleRequest } from "../models/MicrosoftTeamsCreateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsGetChannelByNameResponse } from "../models/MicrosoftTeamsGetChannelByNameResponse";
import { MicrosoftTeamsTenantBasedHandleResponse } from "../models/MicrosoftTeamsTenantBasedHandleResponse";
import { MicrosoftTeamsTenantBasedHandlesResponse } from "../models/MicrosoftTeamsTenantBasedHandlesResponse";
import { MicrosoftTeamsUpdateTenantBasedHandleRequest } from "../models/MicrosoftTeamsUpdateTenantBasedHandleRequest";
import { MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest } from "../models/MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest";
import { MicrosoftTeamsWorkflowsWebhookHandleResponse } from "../models/MicrosoftTeamsWorkflowsWebhookHandleResponse";
import { MicrosoftTeamsWorkflowsWebhookHandlesResponse } from "../models/MicrosoftTeamsWorkflowsWebhookHandlesResponse";
export declare class MicrosoftTeamsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createTenantBasedHandle(body: MicrosoftTeamsCreateTenantBasedHandleRequest, _options?: Configuration): Promise<RequestContext>;
    createWorkflowsWebhookHandle(body: MicrosoftTeamsCreateWorkflowsWebhookHandleRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTenantBasedHandle(handleId: string, _options?: Configuration): Promise<RequestContext>;
    deleteWorkflowsWebhookHandle(handleId: string, _options?: Configuration): Promise<RequestContext>;
    getChannelByName(tenantName: string, teamName: string, channelName: string, _options?: Configuration): Promise<RequestContext>;
    getTenantBasedHandle(handleId: string, _options?: Configuration): Promise<RequestContext>;
    getWorkflowsWebhookHandle(handleId: string, _options?: Configuration): Promise<RequestContext>;
    listTenantBasedHandles(tenantId?: string, name?: string, _options?: Configuration): Promise<RequestContext>;
    listWorkflowsWebhookHandles(name?: string, _options?: Configuration): Promise<RequestContext>;
    updateTenantBasedHandle(handleId: string, body: MicrosoftTeamsUpdateTenantBasedHandleRequest, _options?: Configuration): Promise<RequestContext>;
    updateWorkflowsWebhookHandle(handleId: string, body: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class MicrosoftTeamsIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTenantBasedHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTenantBasedHandle(response: ResponseContext): Promise<MicrosoftTeamsTenantBasedHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWorkflowsWebhookHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    createWorkflowsWebhookHandle(response: ResponseContext): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTenantBasedHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTenantBasedHandle(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWorkflowsWebhookHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteWorkflowsWebhookHandle(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChannelByName
     * @throws ApiException if the response code was not in [200, 299]
     */
    getChannelByName(response: ResponseContext): Promise<MicrosoftTeamsGetChannelByNameResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTenantBasedHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTenantBasedHandle(response: ResponseContext): Promise<MicrosoftTeamsTenantBasedHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorkflowsWebhookHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    getWorkflowsWebhookHandle(response: ResponseContext): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTenantBasedHandles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTenantBasedHandles(response: ResponseContext): Promise<MicrosoftTeamsTenantBasedHandlesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listWorkflowsWebhookHandles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listWorkflowsWebhookHandles(response: ResponseContext): Promise<MicrosoftTeamsWorkflowsWebhookHandlesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTenantBasedHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTenantBasedHandle(response: ResponseContext): Promise<MicrosoftTeamsTenantBasedHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateWorkflowsWebhookHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateWorkflowsWebhookHandle(response: ResponseContext): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;
}
export interface MicrosoftTeamsIntegrationApiCreateTenantBasedHandleRequest {
    /**
     * Tenant-based handle payload.
     * @type MicrosoftTeamsCreateTenantBasedHandleRequest
     */
    body: MicrosoftTeamsCreateTenantBasedHandleRequest;
}
export interface MicrosoftTeamsIntegrationApiCreateWorkflowsWebhookHandleRequest {
    /**
     * Workflows Webhook handle payload.
     * @type MicrosoftTeamsCreateWorkflowsWebhookHandleRequest
     */
    body: MicrosoftTeamsCreateWorkflowsWebhookHandleRequest;
}
export interface MicrosoftTeamsIntegrationApiDeleteTenantBasedHandleRequest {
    /**
     * Your tenant-based handle id.
     * @type string
     */
    handleId: string;
}
export interface MicrosoftTeamsIntegrationApiDeleteWorkflowsWebhookHandleRequest {
    /**
     * Your Workflows webhook handle id.
     * @type string
     */
    handleId: string;
}
export interface MicrosoftTeamsIntegrationApiGetChannelByNameRequest {
    /**
     * Your tenant name.
     * @type string
     */
    tenantName: string;
    /**
     * Your team name.
     * @type string
     */
    teamName: string;
    /**
     * Your channel name.
     * @type string
     */
    channelName: string;
}
export interface MicrosoftTeamsIntegrationApiGetTenantBasedHandleRequest {
    /**
     * Your tenant-based handle id.
     * @type string
     */
    handleId: string;
}
export interface MicrosoftTeamsIntegrationApiGetWorkflowsWebhookHandleRequest {
    /**
     * Your Workflows webhook handle id.
     * @type string
     */
    handleId: string;
}
export interface MicrosoftTeamsIntegrationApiListTenantBasedHandlesRequest {
    /**
     * Your tenant id.
     * @type string
     */
    tenantId?: string;
    /**
     * Your tenant-based handle name.
     * @type string
     */
    name?: string;
}
export interface MicrosoftTeamsIntegrationApiListWorkflowsWebhookHandlesRequest {
    /**
     * Your Workflows webhook handle name.
     * @type string
     */
    name?: string;
}
export interface MicrosoftTeamsIntegrationApiUpdateTenantBasedHandleRequest {
    /**
     * Your tenant-based handle id.
     * @type string
     */
    handleId: string;
    /**
     * Tenant-based handle payload.
     * @type MicrosoftTeamsUpdateTenantBasedHandleRequest
     */
    body: MicrosoftTeamsUpdateTenantBasedHandleRequest;
}
export interface MicrosoftTeamsIntegrationApiUpdateWorkflowsWebhookHandleRequest {
    /**
     * Your Workflows webhook handle id.
     * @type string
     */
    handleId: string;
    /**
     * Workflows Webhook handle payload.
     * @type MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest
     */
    body: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest;
}
export declare class MicrosoftTeamsIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MicrosoftTeamsIntegrationApiRequestFactory, responseProcessor?: MicrosoftTeamsIntegrationApiResponseProcessor);
    /**
     * Create a tenant-based handle in the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    createTenantBasedHandle(param: MicrosoftTeamsIntegrationApiCreateTenantBasedHandleRequest, options?: Configuration): Promise<MicrosoftTeamsTenantBasedHandleResponse>;
    /**
     * Create a Workflows webhook handle in the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    createWorkflowsWebhookHandle(param: MicrosoftTeamsIntegrationApiCreateWorkflowsWebhookHandleRequest, options?: Configuration): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;
    /**
     * Delete a tenant-based handle from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    deleteTenantBasedHandle(param: MicrosoftTeamsIntegrationApiDeleteTenantBasedHandleRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a Workflows webhook handle from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    deleteWorkflowsWebhookHandle(param: MicrosoftTeamsIntegrationApiDeleteWorkflowsWebhookHandleRequest, options?: Configuration): Promise<void>;
    /**
     * Get the tenant, team, and channel ID of a channel in the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    getChannelByName(param: MicrosoftTeamsIntegrationApiGetChannelByNameRequest, options?: Configuration): Promise<MicrosoftTeamsGetChannelByNameResponse>;
    /**
     * Get the tenant, team, and channel information of a tenant-based handle from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    getTenantBasedHandle(param: MicrosoftTeamsIntegrationApiGetTenantBasedHandleRequest, options?: Configuration): Promise<MicrosoftTeamsTenantBasedHandleResponse>;
    /**
     * Get the name of a Workflows webhook handle from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    getWorkflowsWebhookHandle(param: MicrosoftTeamsIntegrationApiGetWorkflowsWebhookHandleRequest, options?: Configuration): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;
    /**
     * Get a list of all tenant-based handles from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    listTenantBasedHandles(param?: MicrosoftTeamsIntegrationApiListTenantBasedHandlesRequest, options?: Configuration): Promise<MicrosoftTeamsTenantBasedHandlesResponse>;
    /**
     * Get a list of all Workflows webhook handles from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    listWorkflowsWebhookHandles(param?: MicrosoftTeamsIntegrationApiListWorkflowsWebhookHandlesRequest, options?: Configuration): Promise<MicrosoftTeamsWorkflowsWebhookHandlesResponse>;
    /**
     * Update a tenant-based handle from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    updateTenantBasedHandle(param: MicrosoftTeamsIntegrationApiUpdateTenantBasedHandleRequest, options?: Configuration): Promise<MicrosoftTeamsTenantBasedHandleResponse>;
    /**
     * Update a Workflows webhook handle from the Datadog Microsoft Teams integration.
     * @param param The request object
     */
    updateWorkflowsWebhookHandle(param: MicrosoftTeamsIntegrationApiUpdateWorkflowsWebhookHandleRequest, options?: Configuration): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>;
}
