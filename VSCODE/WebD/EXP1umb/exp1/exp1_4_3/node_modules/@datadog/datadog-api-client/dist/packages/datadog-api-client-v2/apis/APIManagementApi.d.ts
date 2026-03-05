import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext, HttpFile } from "../../datadog-api-client-common/http/http";
import { CreateOpenAPIResponse } from "../models/CreateOpenAPIResponse";
import { ListAPIsResponse } from "../models/ListAPIsResponse";
import { UpdateOpenAPIResponse } from "../models/UpdateOpenAPIResponse";
export declare class APIManagementApiRequestFactory extends BaseAPIRequestFactory {
    createOpenAPI(openapiSpecFile?: HttpFile, _options?: Configuration): Promise<RequestContext>;
    deleteOpenAPI(id: string, _options?: Configuration): Promise<RequestContext>;
    getOpenAPI(id: string, _options?: Configuration): Promise<RequestContext>;
    listAPIs(query?: string, pageLimit?: number, pageOffset?: number, _options?: Configuration): Promise<RequestContext>;
    updateOpenAPI(id: string, openapiSpecFile?: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class APIManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOpenAPI(response: ResponseContext): Promise<CreateOpenAPIResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOpenAPI(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOpenAPI(response: ResponseContext): Promise<HttpFile>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAPIs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIs(response: ResponseContext): Promise<ListAPIsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOpenAPI(response: ResponseContext): Promise<UpdateOpenAPIResponse>;
}
export interface APIManagementApiCreateOpenAPIRequest {
    /**
     * Binary `OpenAPI` spec file
     * @type HttpFile
     */
    openapiSpecFile?: HttpFile;
}
export interface APIManagementApiDeleteOpenAPIRequest {
    /**
     * ID of the API to delete
     * @type string
     */
    id: string;
}
export interface APIManagementApiGetOpenAPIRequest {
    /**
     * ID of the API to retrieve
     * @type string
     */
    id: string;
}
export interface APIManagementApiListAPIsRequest {
    /**
     * Filter APIs by name
     * @type string
     */
    query?: string;
    /**
     * Number of items per page.
     * @type number
     */
    pageLimit?: number;
    /**
     * Offset for pagination.
     * @type number
     */
    pageOffset?: number;
}
export interface APIManagementApiUpdateOpenAPIRequest {
    /**
     * ID of the API to modify
     * @type string
     */
    id: string;
    /**
     * Binary `OpenAPI` spec file
     * @type HttpFile
     */
    openapiSpecFile?: HttpFile;
}
export declare class APIManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: APIManagementApiRequestFactory, responseProcessor?: APIManagementApiResponseProcessor);
    /**
     * Create a new API from the [OpenAPI](https://spec.openapis.org/oas/latest.html) specification given.
     * See the [API Catalog documentation](https://docs.datadoghq.com/api_catalog/add_metadata/) for additional
     * information about the possible metadata.
     * It returns the created API ID.
     * @param param The request object
     */
    createOpenAPI(param?: APIManagementApiCreateOpenAPIRequest, options?: Configuration): Promise<CreateOpenAPIResponse>;
    /**
     * Delete a specific API by ID.
     * @param param The request object
     */
    deleteOpenAPI(param: APIManagementApiDeleteOpenAPIRequest, options?: Configuration): Promise<void>;
    /**
     * Retrieve information about a specific API in [OpenAPI](https://spec.openapis.org/oas/latest.html) format file.
     * @param param The request object
     */
    getOpenAPI(param: APIManagementApiGetOpenAPIRequest, options?: Configuration): Promise<HttpFile>;
    /**
     * List APIs and their IDs.
     * @param param The request object
     */
    listAPIs(param?: APIManagementApiListAPIsRequest, options?: Configuration): Promise<ListAPIsResponse>;
    /**
     * Update information about a specific API. The given content will replace all API content of the given ID.
     * The ID is returned by the create API, or can be found in the URL in the API catalog UI.
     * @param param The request object
     */
    updateOpenAPI(param: APIManagementApiUpdateOpenAPIRequest, options?: Configuration): Promise<UpdateOpenAPIResponse>;
}
