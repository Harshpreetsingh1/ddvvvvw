import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SLOCorrection } from "../models/SLOCorrection";
import { SLOCorrectionCreateRequest } from "../models/SLOCorrectionCreateRequest";
import { SLOCorrectionListResponse } from "../models/SLOCorrectionListResponse";
import { SLOCorrectionResponse } from "../models/SLOCorrectionResponse";
import { SLOCorrectionUpdateRequest } from "../models/SLOCorrectionUpdateRequest";
export declare class ServiceLevelObjectiveCorrectionsApiRequestFactory extends BaseAPIRequestFactory {
    createSLOCorrection(body: SLOCorrectionCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteSLOCorrection(sloCorrectionId: string, _options?: Configuration): Promise<RequestContext>;
    getSLOCorrection(sloCorrectionId: string, _options?: Configuration): Promise<RequestContext>;
    listSLOCorrection(offset?: number, limit?: number, _options?: Configuration): Promise<RequestContext>;
    updateSLOCorrection(sloCorrectionId: string, body: SLOCorrectionUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceLevelObjectiveCorrectionsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSLOCorrection(response: ResponseContext): Promise<SLOCorrectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSLOCorrection(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOCorrection(response: ResponseContext): Promise<SLOCorrectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSLOCorrection(response: ResponseContext): Promise<SLOCorrectionListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSLOCorrection
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSLOCorrection(response: ResponseContext): Promise<SLOCorrectionResponse>;
}
export interface ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest {
    /**
     * Create an SLO Correction
     * @type SLOCorrectionCreateRequest
     */
    body: SLOCorrectionCreateRequest;
}
export interface ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest {
    /**
     * The ID of the SLO correction object.
     * @type string
     */
    sloCorrectionId: string;
}
export interface ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest {
    /**
     * The ID of the SLO correction object.
     * @type string
     */
    sloCorrectionId: string;
}
export interface ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest {
    /**
     * The specific offset to use as the beginning of the returned response.
     * @type number
     */
    offset?: number;
    /**
     * The number of SLO corrections to return in the response. Default is 25.
     * @type number
     */
    limit?: number;
}
export interface ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest {
    /**
     * The ID of the SLO correction object.
     * @type string
     */
    sloCorrectionId: string;
    /**
     * The edited SLO correction object.
     * @type SLOCorrectionUpdateRequest
     */
    body: SLOCorrectionUpdateRequest;
}
export declare class ServiceLevelObjectiveCorrectionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory, responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor);
    /**
     * Create an SLO Correction.
     * @param param The request object
     */
    createSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionResponse>;
    /**
     * Permanently delete the specified SLO correction object.
     * @param param The request object
     */
    deleteSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest, options?: Configuration): Promise<void>;
    /**
     * Get an SLO correction.
     * @param param The request object
     */
    getSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionResponse>;
    /**
     * Get all Service Level Objective corrections.
     * @param param The request object
     */
    listSLOCorrection(param?: ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionListResponse>;
    /**
     * Provide a paginated version of listSLOCorrection returning a generator with all the items.
     */
    listSLOCorrectionWithPagination(param?: ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest, options?: Configuration): AsyncGenerator<SLOCorrection>;
    /**
     * Update the specified SLO correction object.
     * @param param The request object
     */
    updateSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionResponse>;
}
