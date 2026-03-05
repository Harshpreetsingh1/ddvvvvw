import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { IntakePayloadAccepted } from "../models/IntakePayloadAccepted";
import { ServiceCheck } from "../models/ServiceCheck";
export declare class ServiceChecksApiRequestFactory extends BaseAPIRequestFactory {
    submitServiceCheck(body: Array<ServiceCheck>, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceChecksApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitServiceCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitServiceCheck(response: ResponseContext): Promise<IntakePayloadAccepted>;
}
export interface ServiceChecksApiSubmitServiceCheckRequest {
    /**
     * Service Check request body.
     * @type Array<ServiceCheck>
     */
    body: Array<ServiceCheck>;
}
export declare class ServiceChecksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceChecksApiRequestFactory, responseProcessor?: ServiceChecksApiResponseProcessor);
    /**
     * Submit a list of Service Checks.
     *
     * **Notes**:
     * - A valid API key is required.
     * - Service checks can be submitted up to 10 minutes in the past.
     * @param param The request object
     */
    submitServiceCheck(param: ServiceChecksApiSubmitServiceCheckRequest, options?: Configuration): Promise<IntakePayloadAccepted>;
}
