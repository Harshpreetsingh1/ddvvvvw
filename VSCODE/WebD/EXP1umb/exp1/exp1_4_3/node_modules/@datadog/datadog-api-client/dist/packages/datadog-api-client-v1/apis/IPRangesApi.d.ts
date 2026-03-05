import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { IPRanges } from "../models/IPRanges";
export declare class IPRangesApiRequestFactory extends BaseAPIRequestFactory {
    getIPRanges(_options?: Configuration): Promise<RequestContext>;
}
export declare class IPRangesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIPRanges
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIPRanges(response: ResponseContext): Promise<IPRanges>;
}
export declare class IPRangesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IPRangesApiRequestFactory, responseProcessor?: IPRangesApiResponseProcessor);
    /**
     * Get information about Datadog IP ranges.
     * @param param The request object
     */
    getIPRanges(options?: Configuration): Promise<IPRanges>;
}
