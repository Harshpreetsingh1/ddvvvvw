import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { DomainAllowlistRequest } from "../models/DomainAllowlistRequest";
import { DomainAllowlistResponse } from "../models/DomainAllowlistResponse";
export declare class DomainAllowlistApiRequestFactory extends BaseAPIRequestFactory {
    getDomainAllowlist(_options?: Configuration): Promise<RequestContext>;
    patchDomainAllowlist(body: DomainAllowlistRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DomainAllowlistApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainAllowlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDomainAllowlist(response: ResponseContext): Promise<DomainAllowlistResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchDomainAllowlist
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchDomainAllowlist(response: ResponseContext): Promise<DomainAllowlistResponse>;
}
export interface DomainAllowlistApiPatchDomainAllowlistRequest {
    /**
     * @type DomainAllowlistRequest
     */
    body: DomainAllowlistRequest;
}
export declare class DomainAllowlistApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DomainAllowlistApiRequestFactory, responseProcessor?: DomainAllowlistApiResponseProcessor);
    /**
     * Get the domain allowlist for an organization.
     * @param param The request object
     */
    getDomainAllowlist(options?: Configuration): Promise<DomainAllowlistResponse>;
    /**
     * Update the domain allowlist for an organization.
     * @param param The request object
     */
    patchDomainAllowlist(param: DomainAllowlistApiPatchDomainAllowlistRequest, options?: Configuration): Promise<DomainAllowlistResponse>;
}
