import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { LogsPipeline } from "../models/LogsPipeline";
import { LogsPipelinesOrder } from "../models/LogsPipelinesOrder";
export declare class LogsPipelinesApiRequestFactory extends BaseAPIRequestFactory {
    createLogsPipeline(body: LogsPipeline, _options?: Configuration): Promise<RequestContext>;
    deleteLogsPipeline(pipelineId: string, _options?: Configuration): Promise<RequestContext>;
    getLogsPipeline(pipelineId: string, _options?: Configuration): Promise<RequestContext>;
    getLogsPipelineOrder(_options?: Configuration): Promise<RequestContext>;
    listLogsPipelines(_options?: Configuration): Promise<RequestContext>;
    updateLogsPipeline(pipelineId: string, body: LogsPipeline, _options?: Configuration): Promise<RequestContext>;
    updateLogsPipelineOrder(body: LogsPipelinesOrder, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsPipelinesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsPipeline(response: ResponseContext): Promise<LogsPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsPipeline(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsPipeline(response: ResponseContext): Promise<LogsPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsPipelineOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsPipelineOrder(response: ResponseContext): Promise<LogsPipelinesOrder>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsPipelines
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsPipelines(response: ResponseContext): Promise<Array<LogsPipeline>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsPipeline
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsPipeline(response: ResponseContext): Promise<LogsPipeline>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsPipelineOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsPipelineOrder(response: ResponseContext): Promise<LogsPipelinesOrder>;
}
export interface LogsPipelinesApiCreateLogsPipelineRequest {
    /**
     * Definition of the new pipeline.
     * @type LogsPipeline
     */
    body: LogsPipeline;
}
export interface LogsPipelinesApiDeleteLogsPipelineRequest {
    /**
     * ID of the pipeline to delete.
     * @type string
     */
    pipelineId: string;
}
export interface LogsPipelinesApiGetLogsPipelineRequest {
    /**
     * ID of the pipeline to get.
     * @type string
     */
    pipelineId: string;
}
export interface LogsPipelinesApiUpdateLogsPipelineRequest {
    /**
     * ID of the pipeline to delete.
     * @type string
     */
    pipelineId: string;
    /**
     * New definition of the pipeline.
     * @type LogsPipeline
     */
    body: LogsPipeline;
}
export interface LogsPipelinesApiUpdateLogsPipelineOrderRequest {
    /**
     * Object containing the new ordered list of pipeline IDs.
     * @type LogsPipelinesOrder
     */
    body: LogsPipelinesOrder;
}
export declare class LogsPipelinesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsPipelinesApiRequestFactory, responseProcessor?: LogsPipelinesApiResponseProcessor);
    /**
     * Create a pipeline in your organization.
     * @param param The request object
     */
    createLogsPipeline(param: LogsPipelinesApiCreateLogsPipelineRequest, options?: Configuration): Promise<LogsPipeline>;
    /**
     * Delete a given pipeline from your organization.
     * This endpoint takes no JSON arguments.
     * @param param The request object
     */
    deleteLogsPipeline(param: LogsPipelinesApiDeleteLogsPipelineRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific pipeline from your organization.
     * This endpoint takes no JSON arguments.
     * @param param The request object
     */
    getLogsPipeline(param: LogsPipelinesApiGetLogsPipelineRequest, options?: Configuration): Promise<LogsPipeline>;
    /**
     * Get the current order of your pipelines.
     * This endpoint takes no JSON arguments.
     * @param param The request object
     */
    getLogsPipelineOrder(options?: Configuration): Promise<LogsPipelinesOrder>;
    /**
     * Get all pipelines from your organization.
     * This endpoint takes no JSON arguments.
     * @param param The request object
     */
    listLogsPipelines(options?: Configuration): Promise<Array<LogsPipeline>>;
    /**
     * Update a given pipeline configuration to change it’s processors or their order.
     *
     * **Note**: Using this method updates your pipeline configuration by **replacing**
     * your current configuration with the new one sent to your Datadog organization.
     * @param param The request object
     */
    updateLogsPipeline(param: LogsPipelinesApiUpdateLogsPipelineRequest, options?: Configuration): Promise<LogsPipeline>;
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change
     * the structure and content of the data processed by other pipelines and their processors.
     *
     * **Note**: Using the `PUT` method updates your pipeline order by replacing your current order
     * with the new one sent to your Datadog organization.
     * @param param The request object
     */
    updateLogsPipelineOrder(param: LogsPipelinesApiUpdateLogsPipelineOrderRequest, options?: Configuration): Promise<LogsPipelinesOrder>;
}
