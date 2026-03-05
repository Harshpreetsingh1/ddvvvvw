import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CustomDestinationCreateRequest } from "../models/CustomDestinationCreateRequest";
import { CustomDestinationResponse } from "../models/CustomDestinationResponse";
import { CustomDestinationsResponse } from "../models/CustomDestinationsResponse";
import { CustomDestinationUpdateRequest } from "../models/CustomDestinationUpdateRequest";
export declare class LogsCustomDestinationsApiRequestFactory extends BaseAPIRequestFactory {
    createLogsCustomDestination(body: CustomDestinationCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLogsCustomDestination(customDestinationId: string, _options?: Configuration): Promise<RequestContext>;
    getLogsCustomDestination(customDestinationId: string, _options?: Configuration): Promise<RequestContext>;
    listLogsCustomDestinations(_options?: Configuration): Promise<RequestContext>;
    updateLogsCustomDestination(customDestinationId: string, body: CustomDestinationUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsCustomDestinationsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsCustomDestination
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsCustomDestination(response: ResponseContext): Promise<CustomDestinationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsCustomDestination
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsCustomDestination(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsCustomDestination
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsCustomDestination(response: ResponseContext): Promise<CustomDestinationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsCustomDestinations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsCustomDestinations(response: ResponseContext): Promise<CustomDestinationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsCustomDestination
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsCustomDestination(response: ResponseContext): Promise<CustomDestinationResponse>;
}
export interface LogsCustomDestinationsApiCreateLogsCustomDestinationRequest {
    /**
     * The definition of the new custom destination.
     * @type CustomDestinationCreateRequest
     */
    body: CustomDestinationCreateRequest;
}
export interface LogsCustomDestinationsApiDeleteLogsCustomDestinationRequest {
    /**
     * The ID of the custom destination.
     * @type string
     */
    customDestinationId: string;
}
export interface LogsCustomDestinationsApiGetLogsCustomDestinationRequest {
    /**
     * The ID of the custom destination.
     * @type string
     */
    customDestinationId: string;
}
export interface LogsCustomDestinationsApiUpdateLogsCustomDestinationRequest {
    /**
     * The ID of the custom destination.
     * @type string
     */
    customDestinationId: string;
    /**
     * New definition of the custom destination's fields.
     * @type CustomDestinationUpdateRequest
     */
    body: CustomDestinationUpdateRequest;
}
export declare class LogsCustomDestinationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsCustomDestinationsApiRequestFactory, responseProcessor?: LogsCustomDestinationsApiResponseProcessor);
    /**
     * Create a custom destination in your organization.
     * @param param The request object
     */
    createLogsCustomDestination(param: LogsCustomDestinationsApiCreateLogsCustomDestinationRequest, options?: Configuration): Promise<CustomDestinationResponse>;
    /**
     * Delete a specific custom destination in your organization.
     * @param param The request object
     */
    deleteLogsCustomDestination(param: LogsCustomDestinationsApiDeleteLogsCustomDestinationRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific custom destination in your organization.
     * @param param The request object
     */
    getLogsCustomDestination(param: LogsCustomDestinationsApiGetLogsCustomDestinationRequest, options?: Configuration): Promise<CustomDestinationResponse>;
    /**
     * Get the list of configured custom destinations in your organization with their definitions.
     * @param param The request object
     */
    listLogsCustomDestinations(options?: Configuration): Promise<CustomDestinationsResponse>;
    /**
     * Update the given fields of a specific custom destination in your organization.
     * @param param The request object
     */
    updateLogsCustomDestination(param: LogsCustomDestinationsApiUpdateLogsCustomDestinationRequest, options?: Configuration): Promise<CustomDestinationResponse>;
}
