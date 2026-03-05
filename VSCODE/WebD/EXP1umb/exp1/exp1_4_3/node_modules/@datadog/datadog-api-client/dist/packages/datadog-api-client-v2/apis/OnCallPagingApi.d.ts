import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreatePageRequest } from "../models/CreatePageRequest";
import { CreatePageResponse } from "../models/CreatePageResponse";
export declare class OnCallPagingApiRequestFactory extends BaseAPIRequestFactory {
    acknowledgeOnCallPage(pageId: string, _options?: Configuration): Promise<RequestContext>;
    createOnCallPage(body: CreatePageRequest, _options?: Configuration): Promise<RequestContext>;
    escalateOnCallPage(pageId: string, _options?: Configuration): Promise<RequestContext>;
    resolveOnCallPage(pageId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class OnCallPagingApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acknowledgeOnCallPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    acknowledgeOnCallPage(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOnCallPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOnCallPage(response: ResponseContext): Promise<CreatePageResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to escalateOnCallPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    escalateOnCallPage(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resolveOnCallPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    resolveOnCallPage(response: ResponseContext): Promise<void>;
}
export interface OnCallPagingApiAcknowledgeOnCallPageRequest {
    /**
     * The page ID.
     * @type string
     */
    pageId: string;
}
export interface OnCallPagingApiCreateOnCallPageRequest {
    /**
     * @type CreatePageRequest
     */
    body: CreatePageRequest;
}
export interface OnCallPagingApiEscalateOnCallPageRequest {
    /**
     * The page ID.
     * @type string
     */
    pageId: string;
}
export interface OnCallPagingApiResolveOnCallPageRequest {
    /**
     * The page ID.
     * @type string
     */
    pageId: string;
}
export declare class OnCallPagingApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OnCallPagingApiRequestFactory, responseProcessor?: OnCallPagingApiResponseProcessor);
    /**
     * Acknowledges an On-Call Page.
     * @param param The request object
     */
    acknowledgeOnCallPage(param: OnCallPagingApiAcknowledgeOnCallPageRequest, options?: Configuration): Promise<void>;
    /**
     * Trigger a new On-Call Page.
     * @param param The request object
     */
    createOnCallPage(param: OnCallPagingApiCreateOnCallPageRequest, options?: Configuration): Promise<CreatePageResponse>;
    /**
     * Escalates an On-Call Page.
     * @param param The request object
     */
    escalateOnCallPage(param: OnCallPagingApiEscalateOnCallPageRequest, options?: Configuration): Promise<void>;
    /**
     * Resolves an On-Call Page.
     * @param param The request object
     */
    resolveOnCallPage(param: OnCallPagingApiResolveOnCallPageRequest, options?: Configuration): Promise<void>;
}
