import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CustomAttributeConfigCreateRequest } from "../models/CustomAttributeConfigCreateRequest";
import { CustomAttributeConfigResponse } from "../models/CustomAttributeConfigResponse";
import { CustomAttributeConfigsResponse } from "../models/CustomAttributeConfigsResponse";
export declare class CaseManagementAttributeApiRequestFactory extends BaseAPIRequestFactory {
    createCustomAttributeConfig(caseTypeId: string, body: CustomAttributeConfigCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCustomAttributeConfig(caseTypeId: string, customAttributeId: string, _options?: Configuration): Promise<RequestContext>;
    getAllCustomAttributeConfigsByCaseType(caseTypeId: string, _options?: Configuration): Promise<RequestContext>;
    getAllCustomAttributes(_options?: Configuration): Promise<RequestContext>;
}
export declare class CaseManagementAttributeApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomAttributeConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCustomAttributeConfig(response: ResponseContext): Promise<CustomAttributeConfigResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCustomAttributeConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCustomAttributeConfig(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCustomAttributeConfigsByCaseType
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAllCustomAttributeConfigsByCaseType(response: ResponseContext): Promise<CustomAttributeConfigsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCustomAttributes
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAllCustomAttributes(response: ResponseContext): Promise<CustomAttributeConfigsResponse>;
}
export interface CaseManagementAttributeApiCreateCustomAttributeConfigRequest {
    /**
     * Case type's UUID
     * @type string
     */
    caseTypeId: string;
    /**
     * Custom attribute config payload
     * @type CustomAttributeConfigCreateRequest
     */
    body: CustomAttributeConfigCreateRequest;
}
export interface CaseManagementAttributeApiDeleteCustomAttributeConfigRequest {
    /**
     * Case type's UUID
     * @type string
     */
    caseTypeId: string;
    /**
     * Case Custom attribute's UUID
     * @type string
     */
    customAttributeId: string;
}
export interface CaseManagementAttributeApiGetAllCustomAttributeConfigsByCaseTypeRequest {
    /**
     * Case type's UUID
     * @type string
     */
    caseTypeId: string;
}
export declare class CaseManagementAttributeApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CaseManagementAttributeApiRequestFactory, responseProcessor?: CaseManagementAttributeApiResponseProcessor);
    /**
     * Create custom attribute config for a case type
     * @param param The request object
     */
    createCustomAttributeConfig(param: CaseManagementAttributeApiCreateCustomAttributeConfigRequest, options?: Configuration): Promise<CustomAttributeConfigResponse>;
    /**
     * Delete custom attribute config
     * @param param The request object
     */
    deleteCustomAttributeConfig(param: CaseManagementAttributeApiDeleteCustomAttributeConfigRequest, options?: Configuration): Promise<void>;
    /**
     * Get all custom attribute config of case type
     * @param param The request object
     */
    getAllCustomAttributeConfigsByCaseType(param: CaseManagementAttributeApiGetAllCustomAttributeConfigsByCaseTypeRequest, options?: Configuration): Promise<CustomAttributeConfigsResponse>;
    /**
     * Get all custom attributes
     * @param param The request object
     */
    getAllCustomAttributes(options?: Configuration): Promise<CustomAttributeConfigsResponse>;
}
