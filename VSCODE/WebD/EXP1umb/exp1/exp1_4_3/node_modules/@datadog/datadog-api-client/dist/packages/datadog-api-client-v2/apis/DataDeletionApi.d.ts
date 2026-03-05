import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CancelDataDeletionResponseBody } from "../models/CancelDataDeletionResponseBody";
import { CreateDataDeletionRequestBody } from "../models/CreateDataDeletionRequestBody";
import { CreateDataDeletionResponseBody } from "../models/CreateDataDeletionResponseBody";
import { GetDataDeletionsResponseBody } from "../models/GetDataDeletionsResponseBody";
export declare class DataDeletionApiRequestFactory extends BaseAPIRequestFactory {
    cancelDataDeletionRequest(id: string, _options?: Configuration): Promise<RequestContext>;
    createDataDeletionRequest(product: string, body: CreateDataDeletionRequestBody, _options?: Configuration): Promise<RequestContext>;
    getDataDeletionRequests(nextPage?: string, product?: string, query?: string, status?: string, pageSize?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class DataDeletionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDataDeletionRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelDataDeletionRequest(response: ResponseContext): Promise<CancelDataDeletionResponseBody>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDataDeletionRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDataDeletionRequest(response: ResponseContext): Promise<CreateDataDeletionResponseBody>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDataDeletionRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDataDeletionRequests(response: ResponseContext): Promise<GetDataDeletionsResponseBody>;
}
export interface DataDeletionApiCancelDataDeletionRequestRequest {
    /**
     * ID of the deletion request.
     * @type string
     */
    id: string;
}
export interface DataDeletionApiCreateDataDeletionRequestRequest {
    /**
     * Name of the product to be deleted, either `logs` or `rum`.
     * @type string
     */
    product: string;
    /**
     * @type CreateDataDeletionRequestBody
     */
    body: CreateDataDeletionRequestBody;
}
export interface DataDeletionApiGetDataDeletionRequestsRequest {
    /**
     * The next page of the previous search. If the next_page parameter is included, the rest of the query elements are ignored.
     * @type string
     */
    nextPage?: string;
    /**
     * Retrieve only the requests related to the given product.
     * @type string
     */
    product?: string;
    /**
     * Retrieve only the requests that matches the given query.
     * @type string
     */
    query?: string;
    /**
     * Retrieve only the requests with the given status.
     * @type string
     */
    status?: string;
    /**
     * Sets the page size of the search.
     * @type number
     */
    pageSize?: number;
}
export declare class DataDeletionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DataDeletionApiRequestFactory, responseProcessor?: DataDeletionApiResponseProcessor);
    /**
     * Cancels a data deletion request by providing its ID.
     * @param param The request object
     */
    cancelDataDeletionRequest(param: DataDeletionApiCancelDataDeletionRequestRequest, options?: Configuration): Promise<CancelDataDeletionResponseBody>;
    /**
     * Creates a data deletion request by providing a query and a timeframe targeting the proper data.
     * @param param The request object
     */
    createDataDeletionRequest(param: DataDeletionApiCreateDataDeletionRequestRequest, options?: Configuration): Promise<CreateDataDeletionResponseBody>;
    /**
     * Gets a list of data deletion requests based on several filter parameters.
     * @param param The request object
     */
    getDataDeletionRequests(param?: DataDeletionApiGetDataDeletionRequestsRequest, options?: Configuration): Promise<GetDataDeletionsResponseBody>;
}
