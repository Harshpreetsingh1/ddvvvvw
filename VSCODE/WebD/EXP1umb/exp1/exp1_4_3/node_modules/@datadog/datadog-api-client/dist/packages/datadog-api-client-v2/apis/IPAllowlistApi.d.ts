import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { IPAllowlistResponse } from "../models/IPAllowlistResponse";
import { IPAllowlistUpdateRequest } from "../models/IPAllowlistUpdateRequest";
export declare class IPAllowlistApiRequestFactory extends BaseAPIRequestFactory {
    getIPAllowlist(_options?: Configuration): Promise<RequestContext>;
    updateIPAllowlist(body: IPAllowlistUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class IPAllowlistApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIPAllowlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIPAllowlist(response: ResponseContext): Promise<IPAllowlistResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIPAllowlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIPAllowlist(response: ResponseContext): Promise<IPAllowlistResponse>;
}
export interface IPAllowlistApiUpdateIPAllowlistRequest {
    /**
     * @type IPAllowlistUpdateRequest
     */
    body: IPAllowlistUpdateRequest;
}
export declare class IPAllowlistApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IPAllowlistApiRequestFactory, responseProcessor?: IPAllowlistApiResponseProcessor);
    /**
     * Returns the IP allowlist and its enabled or disabled state.
     * @param param The request object
     */
    getIPAllowlist(options?: Configuration): Promise<IPAllowlistResponse>;
    /**
     * Edit the entries in the IP allowlist, and enable or disable it.
     * @param param The request object
     */
    updateIPAllowlist(param: IPAllowlistApiUpdateIPAllowlistRequest, options?: Configuration): Promise<IPAllowlistResponse>;
}
