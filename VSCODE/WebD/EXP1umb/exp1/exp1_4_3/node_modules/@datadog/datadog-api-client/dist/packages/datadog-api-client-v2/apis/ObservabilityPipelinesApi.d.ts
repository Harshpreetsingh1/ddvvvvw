import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ListPipelinesResponse } from "../models/ListPipelinesResponse";
import { ObservabilityPipeline } from "../models/ObservabilityPipeline";
import { ObservabilityPipelineSpec } from "../models/ObservabilityPipelineSpec";
import { ValidationResponse } from "../models/ValidationResponse";
export declare class ObservabilityPipelinesApiRequestFactory extends BaseAPIRequestFactory {
    createPipeline(body: ObservabilityPipelineSpec, _options?: Configuration): Promise<RequestContext>;
    deletePipeline(pipelineId: string, _options?: Configuration): Promise<RequestContext>;
    getPipeline(pipelineId: string, _options?: Configuration): Promise<RequestContext>;
    listPipelines(pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    updatePipeline(pipelineId: string, body: ObservabilityPipeline, _options?: Configuration): Promise<RequestContext>;
    validatePipeline(body: ObservabilityPipelineSpec, _options?: Configuration): Promise<RequestContext>;
}
export declare class ObservabilityPipelinesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPipeline(response: ResponseContext): Promise<ObservabilityPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePipeline(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPipeline(response: ResponseContext): Promise<ObservabilityPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPipelines
     * @throws ApiException if the response code was not in [200, 299]
     */
    listPipelines(response: ResponseContext): Promise<ListPipelinesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePipeline(response: ResponseContext): Promise<ObservabilityPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validatePipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    validatePipeline(response: ResponseContext): Promise<ValidationResponse>;
}
export interface ObservabilityPipelinesApiCreatePipelineRequest {
    /**
     * @type ObservabilityPipelineSpec
     */
    body: ObservabilityPipelineSpec;
}
export interface ObservabilityPipelinesApiDeletePipelineRequest {
    /**
     * The ID of the pipeline to delete.
     * @type string
     */
    pipelineId: string;
}
export interface ObservabilityPipelinesApiGetPipelineRequest {
    /**
     * The ID of the pipeline to retrieve.
     * @type string
     */
    pipelineId: string;
}
export interface ObservabilityPipelinesApiListPipelinesRequest {
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     */
    pageNumber?: number;
}
export interface ObservabilityPipelinesApiUpdatePipelineRequest {
    /**
     * The ID of the pipeline to update.
     * @type string
     */
    pipelineId: string;
    /**
     * @type ObservabilityPipeline
     */
    body: ObservabilityPipeline;
}
export interface ObservabilityPipelinesApiValidatePipelineRequest {
    /**
     * @type ObservabilityPipelineSpec
     */
    body: ObservabilityPipelineSpec;
}
export declare class ObservabilityPipelinesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ObservabilityPipelinesApiRequestFactory, responseProcessor?: ObservabilityPipelinesApiResponseProcessor);
    /**
     * Create a new pipeline.
     * @param param The request object
     */
    createPipeline(param: ObservabilityPipelinesApiCreatePipelineRequest, options?: Configuration): Promise<ObservabilityPipeline>;
    /**
     * Delete a pipeline.
     * @param param The request object
     */
    deletePipeline(param: ObservabilityPipelinesApiDeletePipelineRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific pipeline by its ID.
     * @param param The request object
     */
    getPipeline(param: ObservabilityPipelinesApiGetPipelineRequest, options?: Configuration): Promise<ObservabilityPipeline>;
    /**
     * Retrieve a list of pipelines.
     * @param param The request object
     */
    listPipelines(param?: ObservabilityPipelinesApiListPipelinesRequest, options?: Configuration): Promise<ListPipelinesResponse>;
    /**
     * Update a pipeline.
     * @param param The request object
     */
    updatePipeline(param: ObservabilityPipelinesApiUpdatePipelineRequest, options?: Configuration): Promise<ObservabilityPipeline>;
    /**
     * Validates a pipeline configuration without creating or updating any resources.
     * Returns a list of validation errors, if any.
     * @param param The request object
     */
    validatePipeline(param: ObservabilityPipelinesApiValidatePipelineRequest, options?: Configuration): Promise<ValidationResponse>;
}
