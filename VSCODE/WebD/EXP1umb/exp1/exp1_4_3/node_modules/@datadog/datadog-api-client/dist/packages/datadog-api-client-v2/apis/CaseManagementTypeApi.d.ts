import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CaseTypeCreateRequest } from "../models/CaseTypeCreateRequest";
import { CaseTypeResponse } from "../models/CaseTypeResponse";
import { CaseTypesResponse } from "../models/CaseTypesResponse";
export declare class CaseManagementTypeApiRequestFactory extends BaseAPIRequestFactory {
    createCaseType(body: CaseTypeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCaseType(caseTypeId: string, _options?: Configuration): Promise<RequestContext>;
    getAllCaseTypes(_options?: Configuration): Promise<RequestContext>;
}
export declare class CaseManagementTypeApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCaseType
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCaseType(response: ResponseContext): Promise<CaseTypeResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCaseType
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCaseType(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCaseTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAllCaseTypes(response: ResponseContext): Promise<CaseTypesResponse>;
}
export interface CaseManagementTypeApiCreateCaseTypeRequest {
    /**
     * Case type payload
     * @type CaseTypeCreateRequest
     */
    body: CaseTypeCreateRequest;
}
export interface CaseManagementTypeApiDeleteCaseTypeRequest {
    /**
     * Case type's UUID
     * @type string
     */
    caseTypeId: string;
}
export declare class CaseManagementTypeApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CaseManagementTypeApiRequestFactory, responseProcessor?: CaseManagementTypeApiResponseProcessor);
    /**
     * Create a Case Type
     * @param param The request object
     */
    createCaseType(param: CaseManagementTypeApiCreateCaseTypeRequest, options?: Configuration): Promise<CaseTypeResponse>;
    /**
     * Delete a case type
     * @param param The request object
     */
    deleteCaseType(param: CaseManagementTypeApiDeleteCaseTypeRequest, options?: Configuration): Promise<void>;
    /**
     * Get all case types
     * @param param The request object
     */
    getAllCaseTypes(options?: Configuration): Promise<CaseTypesResponse>;
}
