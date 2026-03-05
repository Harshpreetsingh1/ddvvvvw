import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { DatasetCreateRequest } from "../models/DatasetCreateRequest";
import { DatasetResponseMulti } from "../models/DatasetResponseMulti";
import { DatasetResponseSingle } from "../models/DatasetResponseSingle";
import { DatasetUpdateRequest } from "../models/DatasetUpdateRequest";
export declare class DatasetsApiRequestFactory extends BaseAPIRequestFactory {
    createDataset(body: DatasetCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteDataset(datasetId: string, _options?: Configuration): Promise<RequestContext>;
    getAllDatasets(_options?: Configuration): Promise<RequestContext>;
    getDataset(datasetId: string, _options?: Configuration): Promise<RequestContext>;
    updateDataset(datasetId: string, body: DatasetUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class DatasetsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDataset(response: ResponseContext): Promise<DatasetResponseSingle>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDataset(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllDatasets
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAllDatasets(response: ResponseContext): Promise<DatasetResponseMulti>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDataset(response: ResponseContext): Promise<DatasetResponseSingle>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDataset(response: ResponseContext): Promise<DatasetResponseSingle>;
}
export interface DatasetsApiCreateDatasetRequest {
    /**
     * Dataset payload
     * @type DatasetCreateRequest
     */
    body: DatasetCreateRequest;
}
export interface DatasetsApiDeleteDatasetRequest {
    /**
     * The ID of a defined dataset.
     * @type string
     */
    datasetId: string;
}
export interface DatasetsApiGetDatasetRequest {
    /**
     * The ID of a defined dataset.
     * @type string
     */
    datasetId: string;
}
export interface DatasetsApiUpdateDatasetRequest {
    /**
     * The ID of a defined dataset.
     * @type string
     */
    datasetId: string;
    /**
     * Dataset payload
     * @type DatasetUpdateRequest
     */
    body: DatasetUpdateRequest;
}
export declare class DatasetsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DatasetsApiRequestFactory, responseProcessor?: DatasetsApiResponseProcessor);
    /**
     * Create a dataset with the configurations in the request.
     * @param param The request object
     */
    createDataset(param: DatasetsApiCreateDatasetRequest, options?: Configuration): Promise<DatasetResponseSingle>;
    /**
     * Deletes the dataset associated with the ID.
     * @param param The request object
     */
    deleteDataset(param: DatasetsApiDeleteDatasetRequest, options?: Configuration): Promise<void>;
    /**
     * Get all datasets that have been configured for an organization.
     * @param param The request object
     */
    getAllDatasets(options?: Configuration): Promise<DatasetResponseMulti>;
    /**
     * Retrieves the dataset associated with the ID.
     * @param param The request object
     */
    getDataset(param: DatasetsApiGetDatasetRequest, options?: Configuration): Promise<DatasetResponseSingle>;
    /**
     * Edits the dataset associated with the ID.
     * @param param The request object
     */
    updateDataset(param: DatasetsApiUpdateDatasetRequest, options?: Configuration): Promise<DatasetResponseSingle>;
}
