import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ServiceList } from "../models/ServiceList";
export declare class APMApiRequestFactory extends BaseAPIRequestFactory {
    getServiceList(filterEnv: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class APMApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceList
     * @throws ApiException if the response code was not in [200, 299]
     */
    getServiceList(response: ResponseContext): Promise<ServiceList>;
}
export interface APMApiGetServiceListRequest {
    /**
     * Filter services by environment. Can be set to `*` to return all services across all environments.
     * @type string
     */
    filterEnv: string;
}
export declare class APMApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: APMApiRequestFactory, responseProcessor?: APMApiResponseProcessor);
    /**
     * @param param The request object
     */
    getServiceList(param: APMApiGetServiceListRequest, options?: Configuration): Promise<ServiceList>;
}
