import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AWSLogsServicesResponse } from "../models/AWSLogsServicesResponse";
export declare class AWSLogsIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    listAWSLogsServices(_options?: Configuration): Promise<RequestContext>;
}
export declare class AWSLogsIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSLogsServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSLogsServices(response: ResponseContext): Promise<AWSLogsServicesResponse>;
}
export declare class AWSLogsIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AWSLogsIntegrationApiRequestFactory, responseProcessor?: AWSLogsIntegrationApiResponseProcessor);
    /**
     * Get a list of AWS services that can send logs to Datadog.
     * @param param The request object
     */
    listAWSLogsServices(options?: Configuration): Promise<AWSLogsServicesResponse>;
}
