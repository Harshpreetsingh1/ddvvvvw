import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AuthenticationValidationResponse } from "../models/AuthenticationValidationResponse";
export declare class AuthenticationApiRequestFactory extends BaseAPIRequestFactory {
    validate(_options?: Configuration): Promise<RequestContext>;
}
export declare class AuthenticationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validate
     * @throws ApiException if the response code was not in [200, 299]
     */
    validate(response: ResponseContext): Promise<AuthenticationValidationResponse>;
}
export declare class AuthenticationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor);
    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * @param param The request object
     */
    validate(options?: Configuration): Promise<AuthenticationValidationResponse>;
}
