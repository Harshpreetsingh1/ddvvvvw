import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SlackIntegrationChannel } from "../models/SlackIntegrationChannel";
export declare class SlackIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createSlackIntegrationChannel(accountName: string, body: SlackIntegrationChannel, _options?: Configuration): Promise<RequestContext>;
    getSlackIntegrationChannel(accountName: string, channelName: string, _options?: Configuration): Promise<RequestContext>;
    getSlackIntegrationChannels(accountName: string, _options?: Configuration): Promise<RequestContext>;
    removeSlackIntegrationChannel(accountName: string, channelName: string, _options?: Configuration): Promise<RequestContext>;
    updateSlackIntegrationChannel(accountName: string, channelName: string, body: SlackIntegrationChannel, _options?: Configuration): Promise<RequestContext>;
}
export declare class SlackIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSlackIntegrationChannel(response: ResponseContext): Promise<SlackIntegrationChannel>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSlackIntegrationChannel(response: ResponseContext): Promise<SlackIntegrationChannel>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSlackIntegrationChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSlackIntegrationChannels(response: ResponseContext): Promise<Array<SlackIntegrationChannel>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeSlackIntegrationChannel(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSlackIntegrationChannel(response: ResponseContext): Promise<SlackIntegrationChannel>;
}
export interface SlackIntegrationApiCreateSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     */
    accountName: string;
    /**
     * Payload describing Slack channel to be created
     * @type SlackIntegrationChannel
     */
    body: SlackIntegrationChannel;
}
export interface SlackIntegrationApiGetSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     */
    accountName: string;
    /**
     * The name of the Slack channel being operated on.
     * @type string
     */
    channelName: string;
}
export interface SlackIntegrationApiGetSlackIntegrationChannelsRequest {
    /**
     * Your Slack account name.
     * @type string
     */
    accountName: string;
}
export interface SlackIntegrationApiRemoveSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     */
    accountName: string;
    /**
     * The name of the Slack channel being operated on.
     * @type string
     */
    channelName: string;
}
export interface SlackIntegrationApiUpdateSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     */
    accountName: string;
    /**
     * The name of the Slack channel being operated on.
     * @type string
     */
    channelName: string;
    /**
     * Payload describing fields and values to be updated.
     * @type SlackIntegrationChannel
     */
    body: SlackIntegrationChannel;
}
export declare class SlackIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SlackIntegrationApiRequestFactory, responseProcessor?: SlackIntegrationApiResponseProcessor);
    /**
     * Add a channel to your Datadog-Slack integration.
     * @param param The request object
     */
    createSlackIntegrationChannel(param: SlackIntegrationApiCreateSlackIntegrationChannelRequest, options?: Configuration): Promise<SlackIntegrationChannel>;
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * @param param The request object
     */
    getSlackIntegrationChannel(param: SlackIntegrationApiGetSlackIntegrationChannelRequest, options?: Configuration): Promise<SlackIntegrationChannel>;
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * @param param The request object
     */
    getSlackIntegrationChannels(param: SlackIntegrationApiGetSlackIntegrationChannelsRequest, options?: Configuration): Promise<Array<SlackIntegrationChannel>>;
    /**
     * Remove a channel from your Datadog-Slack integration.
     * @param param The request object
     */
    removeSlackIntegrationChannel(param: SlackIntegrationApiRemoveSlackIntegrationChannelRequest, options?: Configuration): Promise<void>;
    /**
     * Update a channel used in your Datadog-Slack integration.
     * @param param The request object
     */
    updateSlackIntegrationChannel(param: SlackIntegrationApiUpdateSlackIntegrationChannelRequest, options?: Configuration): Promise<SlackIntegrationChannel>;
}
