import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { BatchDeleteRowsRequestArray } from "../models/BatchDeleteRowsRequestArray";
import { BatchUpsertRowsRequestArray } from "../models/BatchUpsertRowsRequestArray";
import { CreateTableRequest } from "../models/CreateTableRequest";
import { CreateUploadRequest } from "../models/CreateUploadRequest";
import { CreateUploadResponse } from "../models/CreateUploadResponse";
import { PatchTableRequest } from "../models/PatchTableRequest";
import { ReferenceTableSortType } from "../models/ReferenceTableSortType";
import { TableResultV2 } from "../models/TableResultV2";
import { TableResultV2Array } from "../models/TableResultV2Array";
import { TableRowResourceArray } from "../models/TableRowResourceArray";
export declare class ReferenceTablesApiRequestFactory extends BaseAPIRequestFactory {
    createReferenceTable(body: CreateTableRequest, _options?: Configuration): Promise<RequestContext>;
    createReferenceTableUpload(body: CreateUploadRequest, _options?: Configuration): Promise<RequestContext>;
    deleteRows(id: string, body: BatchDeleteRowsRequestArray, _options?: Configuration): Promise<RequestContext>;
    deleteTable(id: string, _options?: Configuration): Promise<RequestContext>;
    getRowsByID(id: string, rowId: Array<string>, _options?: Configuration): Promise<RequestContext>;
    getTable(id: string, _options?: Configuration): Promise<RequestContext>;
    listTables(pageLimit?: number, pageOffset?: number, sort?: ReferenceTableSortType, filterStatus?: string, filterTableNameExact?: string, filterTableNameContains?: string, _options?: Configuration): Promise<RequestContext>;
    updateReferenceTable(id: string, body: PatchTableRequest, _options?: Configuration): Promise<RequestContext>;
    upsertRows(id: string, body: BatchUpsertRowsRequestArray, _options?: Configuration): Promise<RequestContext>;
}
export declare class ReferenceTablesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createReferenceTable
     * @throws ApiException if the response code was not in [200, 299]
     */
    createReferenceTable(response: ResponseContext): Promise<TableResultV2>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createReferenceTableUpload
     * @throws ApiException if the response code was not in [200, 299]
     */
    createReferenceTableUpload(response: ResponseContext): Promise<CreateUploadResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRows
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRows(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTable
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTable(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRowsByID
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRowsByID(response: ResponseContext): Promise<TableRowResourceArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTable
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTable(response: ResponseContext): Promise<TableResultV2>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTables
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTables(response: ResponseContext): Promise<TableResultV2Array>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateReferenceTable
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateReferenceTable(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertRows
     * @throws ApiException if the response code was not in [200, 299]
     */
    upsertRows(response: ResponseContext): Promise<void>;
}
export interface ReferenceTablesApiCreateReferenceTableRequest {
    /**
     * @type CreateTableRequest
     */
    body: CreateTableRequest;
}
export interface ReferenceTablesApiCreateReferenceTableUploadRequest {
    /**
     * @type CreateUploadRequest
     */
    body: CreateUploadRequest;
}
export interface ReferenceTablesApiDeleteRowsRequest {
    /**
     * Unique identifier of the reference table to delete rows from
     * @type string
     */
    id: string;
    /**
     * @type BatchDeleteRowsRequestArray
     */
    body: BatchDeleteRowsRequestArray;
}
export interface ReferenceTablesApiDeleteTableRequest {
    /**
     * Unique identifier of the reference table to delete
     * @type string
     */
    id: string;
}
export interface ReferenceTablesApiGetRowsByIDRequest {
    /**
     * Unique identifier of the reference table to get rows from
     * @type string
     */
    id: string;
    /**
     * List of row IDs (primary key values) to retrieve from the reference table.
     * @type Array<string>
     */
    rowId: Array<string>;
}
export interface ReferenceTablesApiGetTableRequest {
    /**
     * Unique identifier of the reference table to retrieve
     * @type string
     */
    id: string;
}
export interface ReferenceTablesApiListTablesRequest {
    /**
     * Number of tables to return.
     * @type number
     */
    pageLimit?: number;
    /**
     * Number of tables to skip for pagination.
     * @type number
     */
    pageOffset?: number;
    /**
     * Sort field and direction for the list of reference tables. Use field name for ascending, prefix with "-" for descending.
     * @type ReferenceTableSortType
     */
    sort?: ReferenceTableSortType;
    /**
     * Filter by table status.
     * @type string
     */
    filterStatus?: string;
    /**
     * Filter by exact table name match.
     * @type string
     */
    filterTableNameExact?: string;
    /**
     * Filter by table name containing substring.
     * @type string
     */
    filterTableNameContains?: string;
}
export interface ReferenceTablesApiUpdateReferenceTableRequest {
    /**
     * Unique identifier of the reference table to update
     * @type string
     */
    id: string;
    /**
     * @type PatchTableRequest
     */
    body: PatchTableRequest;
}
export interface ReferenceTablesApiUpsertRowsRequest {
    /**
     * Unique identifier of the reference table to upsert rows into
     * @type string
     */
    id: string;
    /**
     * @type BatchUpsertRowsRequestArray
     */
    body: BatchUpsertRowsRequestArray;
}
export declare class ReferenceTablesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ReferenceTablesApiRequestFactory, responseProcessor?: ReferenceTablesApiResponseProcessor);
    /**
     * Creates a reference table. You can provide data in two ways:
     * 1. Call POST /api/v2/reference-tables/upload to get an upload ID. Then, PUT the CSV data
     *    (not the file itself) in chunks to each URL in the request body. Finally, call this
     *    POST endpoint with `upload_id` in `file_metadata`.
     * 2. Provide `access_details` in `file_metadata` pointing to a CSV file in cloud storage.
     * @param param The request object
     */
    createReferenceTable(param: ReferenceTablesApiCreateReferenceTableRequest, options?: Configuration): Promise<TableResultV2>;
    /**
     * Create a reference table upload for bulk data ingestion
     * @param param The request object
     */
    createReferenceTableUpload(param: ReferenceTablesApiCreateReferenceTableUploadRequest, options?: Configuration): Promise<CreateUploadResponse>;
    /**
     * Delete multiple rows from a Reference Table by their primary key values.
     * @param param The request object
     */
    deleteRows(param: ReferenceTablesApiDeleteRowsRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a reference table by ID
     * @param param The request object
     */
    deleteTable(param: ReferenceTablesApiDeleteTableRequest, options?: Configuration): Promise<void>;
    /**
     * Get reference table rows by their primary key values.
     * @param param The request object
     */
    getRowsByID(param: ReferenceTablesApiGetRowsByIDRequest, options?: Configuration): Promise<TableRowResourceArray>;
    /**
     * Get a reference table by ID
     * @param param The request object
     */
    getTable(param: ReferenceTablesApiGetTableRequest, options?: Configuration): Promise<TableResultV2>;
    /**
     * List all reference tables in this organization.
     * @param param The request object
     */
    listTables(param?: ReferenceTablesApiListTablesRequest, options?: Configuration): Promise<TableResultV2Array>;
    /**
     * Update a reference table by ID. You can update the table's data, description, and tags. Note: The source type cannot be changed after table creation. For data updates: For existing tables of type `source:LOCAL_FILE`, call POST api/v2/reference-tables/uploads first to get an upload ID, then PUT chunks of CSV data to each provided URL, and finally call this PATCH endpoint with the upload_id in file_metadata. For existing tables with `source:` types of `S3`, `GCS`, or `AZURE`, provide updated access_details in file_metadata pointing to a CSV file in the same type of cloud storage.
     * @param param The request object
     */
    updateReferenceTable(param: ReferenceTablesApiUpdateReferenceTableRequest, options?: Configuration): Promise<void>;
    /**
     * Create or update rows in a Reference Table by their primary key values. If a row with the specified primary key exists, it is updated; otherwise, a new row is created.
     * @param param The request object
     */
    upsertRows(param: ReferenceTablesApiUpsertRowsRequest, options?: Configuration): Promise<void>;
}
