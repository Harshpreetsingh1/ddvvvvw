import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { BulkDeleteAppsDatastoreItemsRequest } from "../models/BulkDeleteAppsDatastoreItemsRequest";
import { BulkPutAppsDatastoreItemsRequest } from "../models/BulkPutAppsDatastoreItemsRequest";
import { CreateAppsDatastoreRequest } from "../models/CreateAppsDatastoreRequest";
import { CreateAppsDatastoreResponse } from "../models/CreateAppsDatastoreResponse";
import { Datastore } from "../models/Datastore";
import { DatastoreArray } from "../models/DatastoreArray";
import { DeleteAppsDatastoreItemRequest } from "../models/DeleteAppsDatastoreItemRequest";
import { DeleteAppsDatastoreItemResponse } from "../models/DeleteAppsDatastoreItemResponse";
import { DeleteAppsDatastoreItemResponseArray } from "../models/DeleteAppsDatastoreItemResponseArray";
import { ItemApiPayload } from "../models/ItemApiPayload";
import { ItemApiPayloadArray } from "../models/ItemApiPayloadArray";
import { PutAppsDatastoreItemResponseArray } from "../models/PutAppsDatastoreItemResponseArray";
import { UpdateAppsDatastoreItemRequest } from "../models/UpdateAppsDatastoreItemRequest";
import { UpdateAppsDatastoreRequest } from "../models/UpdateAppsDatastoreRequest";
export declare class ActionsDatastoresApiRequestFactory extends BaseAPIRequestFactory {
    bulkDeleteDatastoreItems(datastoreId: string, body: BulkDeleteAppsDatastoreItemsRequest, _options?: Configuration): Promise<RequestContext>;
    bulkWriteDatastoreItems(datastoreId: string, body: BulkPutAppsDatastoreItemsRequest, _options?: Configuration): Promise<RequestContext>;
    createDatastore(body: CreateAppsDatastoreRequest, _options?: Configuration): Promise<RequestContext>;
    deleteDatastore(datastoreId: string, _options?: Configuration): Promise<RequestContext>;
    deleteDatastoreItem(datastoreId: string, body: DeleteAppsDatastoreItemRequest, _options?: Configuration): Promise<RequestContext>;
    getDatastore(datastoreId: string, _options?: Configuration): Promise<RequestContext>;
    listDatastoreItems(datastoreId: string, filter?: string, itemKey?: string, pageLimit?: number, pageOffset?: number, sort?: string, _options?: Configuration): Promise<RequestContext>;
    listDatastores(_options?: Configuration): Promise<RequestContext>;
    updateDatastore(datastoreId: string, body: UpdateAppsDatastoreRequest, _options?: Configuration): Promise<RequestContext>;
    updateDatastoreItem(datastoreId: string, body: UpdateAppsDatastoreItemRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ActionsDatastoresApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkDeleteDatastoreItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    bulkDeleteDatastoreItems(response: ResponseContext): Promise<DeleteAppsDatastoreItemResponseArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkWriteDatastoreItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    bulkWriteDatastoreItems(response: ResponseContext): Promise<PutAppsDatastoreItemResponseArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDatastore
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDatastore(response: ResponseContext): Promise<CreateAppsDatastoreResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDatastore
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDatastore(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDatastoreItem
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDatastoreItem(response: ResponseContext): Promise<DeleteAppsDatastoreItemResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatastore
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDatastore(response: ResponseContext): Promise<Datastore>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDatastoreItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDatastoreItems(response: ResponseContext): Promise<ItemApiPayloadArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDatastores
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDatastores(response: ResponseContext): Promise<DatastoreArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDatastore
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDatastore(response: ResponseContext): Promise<Datastore>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDatastoreItem
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDatastoreItem(response: ResponseContext): Promise<ItemApiPayload>;
}
export interface ActionsDatastoresApiBulkDeleteDatastoreItemsRequest {
    /**
     * The ID of the datastore.
     * @type string
     */
    datastoreId: string;
    /**
     * @type BulkDeleteAppsDatastoreItemsRequest
     */
    body: BulkDeleteAppsDatastoreItemsRequest;
}
export interface ActionsDatastoresApiBulkWriteDatastoreItemsRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
    /**
     * @type BulkPutAppsDatastoreItemsRequest
     */
    body: BulkPutAppsDatastoreItemsRequest;
}
export interface ActionsDatastoresApiCreateDatastoreRequest {
    /**
     * @type CreateAppsDatastoreRequest
     */
    body: CreateAppsDatastoreRequest;
}
export interface ActionsDatastoresApiDeleteDatastoreRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
}
export interface ActionsDatastoresApiDeleteDatastoreItemRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
    /**
     * @type DeleteAppsDatastoreItemRequest
     */
    body: DeleteAppsDatastoreItemRequest;
}
export interface ActionsDatastoresApiGetDatastoreRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
}
export interface ActionsDatastoresApiListDatastoreItemsRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
    /**
     * Optional query filter to search items using the [logs search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).
     * @type string
     */
    filter?: string;
    /**
     * Optional primary key value to retrieve a specific item. Cannot be used together with the filter parameter.
     * @type string
     */
    itemKey?: string;
    /**
     * Optional field to limit the number of items to return per page for pagination. Up to 100 items can be returned per page.
     * @type number
     */
    pageLimit?: number;
    /**
     * Optional field to offset the number of items to skip from the beginning of the result set for pagination.
     * @type number
     */
    pageOffset?: number;
    /**
     * Optional field to sort results by. Prefix with '-' for descending order (e.g., '-created_at').
     * @type string
     */
    sort?: string;
}
export interface ActionsDatastoresApiUpdateDatastoreRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
    /**
     * @type UpdateAppsDatastoreRequest
     */
    body: UpdateAppsDatastoreRequest;
}
export interface ActionsDatastoresApiUpdateDatastoreItemRequest {
    /**
     * The unique identifier of the datastore to retrieve.
     * @type string
     */
    datastoreId: string;
    /**
     * @type UpdateAppsDatastoreItemRequest
     */
    body: UpdateAppsDatastoreItemRequest;
}
export declare class ActionsDatastoresApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ActionsDatastoresApiRequestFactory, responseProcessor?: ActionsDatastoresApiResponseProcessor);
    /**
     * Deletes multiple items from a datastore by their keys in a single operation.
     * @param param The request object
     */
    bulkDeleteDatastoreItems(param: ActionsDatastoresApiBulkDeleteDatastoreItemsRequest, options?: Configuration): Promise<DeleteAppsDatastoreItemResponseArray>;
    /**
     * Creates or replaces multiple items in a datastore by their keys in a single operation.
     * @param param The request object
     */
    bulkWriteDatastoreItems(param: ActionsDatastoresApiBulkWriteDatastoreItemsRequest, options?: Configuration): Promise<PutAppsDatastoreItemResponseArray>;
    /**
     * Creates a new datastore.
     * @param param The request object
     */
    createDatastore(param: ActionsDatastoresApiCreateDatastoreRequest, options?: Configuration): Promise<CreateAppsDatastoreResponse>;
    /**
     * Deletes a datastore by its unique identifier.
     * @param param The request object
     */
    deleteDatastore(param: ActionsDatastoresApiDeleteDatastoreRequest, options?: Configuration): Promise<void>;
    /**
     * Deletes an item from a datastore by its key.
     * @param param The request object
     */
    deleteDatastoreItem(param: ActionsDatastoresApiDeleteDatastoreItemRequest, options?: Configuration): Promise<DeleteAppsDatastoreItemResponse>;
    /**
     * Retrieves a specific datastore by its ID.
     * @param param The request object
     */
    getDatastore(param: ActionsDatastoresApiGetDatastoreRequest, options?: Configuration): Promise<Datastore>;
    /**
     * Lists items from a datastore. You can filter the results by specifying either an item key or a filter query parameter, but not both at the same time. Supports server-side pagination for large datasets.
     * @param param The request object
     */
    listDatastoreItems(param: ActionsDatastoresApiListDatastoreItemsRequest, options?: Configuration): Promise<ItemApiPayloadArray>;
    /**
     * Lists all datastores for the organization.
     * @param param The request object
     */
    listDatastores(options?: Configuration): Promise<DatastoreArray>;
    /**
     * Updates an existing datastore's attributes.
     * @param param The request object
     */
    updateDatastore(param: ActionsDatastoresApiUpdateDatastoreRequest, options?: Configuration): Promise<Datastore>;
    /**
     * Partially updates an item in a datastore by its key.
     * @param param The request object
     */
    updateDatastoreItem(param: ActionsDatastoresApiUpdateDatastoreItemRequest, options?: Configuration): Promise<ItemApiPayload>;
}
