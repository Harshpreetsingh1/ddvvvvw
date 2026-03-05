import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { WebhooksIntegration } from "../models/WebhooksIntegration";
import { WebhooksIntegrationCustomVariable } from "../models/WebhooksIntegrationCustomVariable";
import { WebhooksIntegrationCustomVariableResponse } from "../models/WebhooksIntegrationCustomVariableResponse";
import { WebhooksIntegrationCustomVariableUpdateRequest } from "../models/WebhooksIntegrationCustomVariableUpdateRequest";
import { WebhooksIntegrationUpdateRequest } from "../models/WebhooksIntegrationUpdateRequest";
export declare class WebhooksIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createWebhooksIntegration(body: WebhooksIntegration, _options?: Configuration): Promise<RequestContext>;
    createWebhooksIntegrationCustomVariable(body: WebhooksIntegrationCustomVariable, _options?: Configuration): Promise<RequestContext>;
    deleteWebhooksIntegration(webhookName: string, _options?: Configuration): Promise<RequestContext>;
    deleteWebhooksIntegrationCustomVariable(customVariableName: string, _options?: Configuration): Promise<RequestContext>;
    getWebhooksIntegration(webhookName: string, _options?: Configuration): Promise<RequestContext>;
    getWebhooksIntegrationCustomVariable(customVariableName: string, _options?: Configuration): Promise<RequestContext>;
    updateWebhooksIntegration(webhookName: string, body: WebhooksIntegrationUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateWebhooksIntegrationCustomVariable(customVariableName: string, body: WebhooksIntegrationCustomVariableUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebhooksIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWebhooksIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    createWebhooksIntegration(response: ResponseContext): Promise<WebhooksIntegration>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWebhooksIntegrationCustomVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    createWebhooksIntegrationCustomVariable(response: ResponseContext): Promise<WebhooksIntegrationCustomVariableResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWebhooksIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteWebhooksIntegration(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWebhooksIntegrationCustomVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteWebhooksIntegrationCustomVariable(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhooksIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    getWebhooksIntegration(response: ResponseContext): Promise<WebhooksIntegration>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhooksIntegrationCustomVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    getWebhooksIntegrationCustomVariable(response: ResponseContext): Promise<WebhooksIntegrationCustomVariableResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateWebhooksIntegration
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateWebhooksIntegration(response: ResponseContext): Promise<WebhooksIntegration>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateWebhooksIntegrationCustomVariable
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateWebhooksIntegrationCustomVariable(response: ResponseContext): Promise<WebhooksIntegrationCustomVariableResponse>;
}
export interface WebhooksIntegrationApiCreateWebhooksIntegrationRequest {
    /**
     * Create a webhooks integration request body.
     * @type WebhooksIntegration
     */
    body: WebhooksIntegration;
}
export interface WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest {
    /**
     * Define a custom variable request body.
     * @type WebhooksIntegrationCustomVariable
     */
    body: WebhooksIntegrationCustomVariable;
}
export interface WebhooksIntegrationApiDeleteWebhooksIntegrationRequest {
    /**
     * The name of the webhook.
     * @type string
     */
    webhookName: string;
}
export interface WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest {
    /**
     * The name of the custom variable.
     * @type string
     */
    customVariableName: string;
}
export interface WebhooksIntegrationApiGetWebhooksIntegrationRequest {
    /**
     * The name of the webhook.
     * @type string
     */
    webhookName: string;
}
export interface WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest {
    /**
     * The name of the custom variable.
     * @type string
     */
    customVariableName: string;
}
export interface WebhooksIntegrationApiUpdateWebhooksIntegrationRequest {
    /**
     * The name of the webhook.
     * @type string
     */
    webhookName: string;
    /**
     * Update an existing Datadog-Webhooks integration.
     * @type WebhooksIntegrationUpdateRequest
     */
    body: WebhooksIntegrationUpdateRequest;
}
export interface WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest {
    /**
     * The name of the custom variable.
     * @type string
     */
    customVariableName: string;
    /**
     * Update an existing custom variable request body.
     * @type WebhooksIntegrationCustomVariableUpdateRequest
     */
    body: WebhooksIntegrationCustomVariableUpdateRequest;
}
export declare class WebhooksIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksIntegrationApiRequestFactory, responseProcessor?: WebhooksIntegrationApiResponseProcessor);
    /**
     * Creates an endpoint with the name `<WEBHOOK_NAME>`.
     * @param param The request object
     */
    createWebhooksIntegration(param: WebhooksIntegrationApiCreateWebhooksIntegrationRequest, options?: Configuration): Promise<WebhooksIntegration>;
    /**
     * Creates an endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
     * @param param The request object
     */
    createWebhooksIntegrationCustomVariable(param: WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest, options?: Configuration): Promise<WebhooksIntegrationCustomVariableResponse>;
    /**
     * Deletes the endpoint with the name `<WEBHOOK NAME>`.
     * @param param The request object
     */
    deleteWebhooksIntegration(param: WebhooksIntegrationApiDeleteWebhooksIntegrationRequest, options?: Configuration): Promise<void>;
    /**
     * Deletes the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
     * @param param The request object
     */
    deleteWebhooksIntegrationCustomVariable(param: WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest, options?: Configuration): Promise<void>;
    /**
     * Gets the content of the webhook with the name `<WEBHOOK_NAME>`.
     * @param param The request object
     */
    getWebhooksIntegration(param: WebhooksIntegrationApiGetWebhooksIntegrationRequest, options?: Configuration): Promise<WebhooksIntegration>;
    /**
     * Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.
     *
     * If the custom variable is secret, the value does not return in the
     * response payload.
     * @param param The request object
     */
    getWebhooksIntegrationCustomVariable(param: WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest, options?: Configuration): Promise<WebhooksIntegrationCustomVariableResponse>;
    /**
     * Updates the endpoint with the name `<WEBHOOK_NAME>`.
     * @param param The request object
     */
    updateWebhooksIntegration(param: WebhooksIntegrationApiUpdateWebhooksIntegrationRequest, options?: Configuration): Promise<WebhooksIntegration>;
    /**
     * Updates the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
     * @param param The request object
     */
    updateWebhooksIntegrationCustomVariable(param: WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest, options?: Configuration): Promise<WebhooksIntegrationCustomVariableResponse>;
}
