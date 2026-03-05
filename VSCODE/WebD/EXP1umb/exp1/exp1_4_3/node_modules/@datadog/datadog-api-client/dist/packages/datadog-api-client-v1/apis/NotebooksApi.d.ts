import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { NotebookCreateRequest } from "../models/NotebookCreateRequest";
import { NotebookResponse } from "../models/NotebookResponse";
import { NotebooksResponse } from "../models/NotebooksResponse";
import { NotebooksResponseData } from "../models/NotebooksResponseData";
import { NotebookUpdateRequest } from "../models/NotebookUpdateRequest";
export declare class NotebooksApiRequestFactory extends BaseAPIRequestFactory {
    createNotebook(body: NotebookCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteNotebook(notebookId: number, _options?: Configuration): Promise<RequestContext>;
    getNotebook(notebookId: number, _options?: Configuration): Promise<RequestContext>;
    listNotebooks(authorHandle?: string, excludeAuthorHandle?: string, start?: number, count?: number, sortField?: string, sortDir?: string, query?: string, includeCells?: boolean, isTemplate?: boolean, type?: string, _options?: Configuration): Promise<RequestContext>;
    updateNotebook(notebookId: number, body: NotebookUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class NotebooksApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNotebook(response: ResponseContext): Promise<NotebookResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNotebook(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    getNotebook(response: ResponseContext): Promise<NotebookResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNotebooks
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNotebooks(response: ResponseContext): Promise<NotebooksResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNotebook
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateNotebook(response: ResponseContext): Promise<NotebookResponse>;
}
export interface NotebooksApiCreateNotebookRequest {
    /**
     * The JSON description of the notebook you want to create.
     * @type NotebookCreateRequest
     */
    body: NotebookCreateRequest;
}
export interface NotebooksApiDeleteNotebookRequest {
    /**
     * Unique ID, assigned when you create the notebook.
     * @type number
     */
    notebookId: number;
}
export interface NotebooksApiGetNotebookRequest {
    /**
     * Unique ID, assigned when you create the notebook.
     * @type number
     */
    notebookId: number;
}
export interface NotebooksApiListNotebooksRequest {
    /**
     * Return notebooks created by the given `author_handle`.
     * @type string
     */
    authorHandle?: string;
    /**
     * Return notebooks not created by the given `author_handle`.
     * @type string
     */
    excludeAuthorHandle?: string;
    /**
     * The index of the first notebook you want returned.
     * @type number
     */
    start?: number;
    /**
     * The number of notebooks to be returned.
     * @type number
     */
    count?: number;
    /**
     * Sort by field `modified`, `name`, or `created`.
     * @type string
     */
    sortField?: string;
    /**
     * Sort by direction `asc` or `desc`.
     * @type string
     */
    sortDir?: string;
    /**
     * Return only notebooks with `query` string in notebook name or author handle.
     * @type string
     */
    query?: string;
    /**
     * Value of `false` excludes the `cells` and global `time` for each notebook.
     * @type boolean
     */
    includeCells?: boolean;
    /**
     * True value returns only template notebooks. Default is false (returns only non-template notebooks).
     * @type boolean
     */
    isTemplate?: boolean;
    /**
     * If type is provided, returns only notebooks with that metadata type. Default does not have type filtering.
     * @type string
     */
    type?: string;
}
export interface NotebooksApiUpdateNotebookRequest {
    /**
     * Unique ID, assigned when you create the notebook.
     * @type number
     */
    notebookId: number;
    /**
     * Update notebook request body.
     * @type NotebookUpdateRequest
     */
    body: NotebookUpdateRequest;
}
export declare class NotebooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NotebooksApiRequestFactory, responseProcessor?: NotebooksApiResponseProcessor);
    /**
     * Create a notebook using the specified options.
     * @param param The request object
     */
    createNotebook(param: NotebooksApiCreateNotebookRequest, options?: Configuration): Promise<NotebookResponse>;
    /**
     * Delete a notebook using the specified ID.
     * @param param The request object
     */
    deleteNotebook(param: NotebooksApiDeleteNotebookRequest, options?: Configuration): Promise<void>;
    /**
     * Get a notebook using the specified notebook ID.
     * @param param The request object
     */
    getNotebook(param: NotebooksApiGetNotebookRequest, options?: Configuration): Promise<NotebookResponse>;
    /**
     * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook
     * `name` or author `handle`.
     * @param param The request object
     */
    listNotebooks(param?: NotebooksApiListNotebooksRequest, options?: Configuration): Promise<NotebooksResponse>;
    /**
     * Provide a paginated version of listNotebooks returning a generator with all the items.
     */
    listNotebooksWithPagination(param?: NotebooksApiListNotebooksRequest, options?: Configuration): AsyncGenerator<NotebooksResponseData>;
    /**
     * Update a notebook using the specified ID.
     * @param param The request object
     */
    updateNotebook(param: NotebooksApiUpdateNotebookRequest, options?: Configuration): Promise<NotebookResponse>;
}
