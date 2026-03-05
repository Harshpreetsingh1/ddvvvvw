import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { LogsArchive } from "../models/LogsArchive";
import { LogsArchiveCreateRequest } from "../models/LogsArchiveCreateRequest";
import { LogsArchiveOrder } from "../models/LogsArchiveOrder";
import { LogsArchives } from "../models/LogsArchives";
import { RelationshipToRole } from "../models/RelationshipToRole";
import { RolesResponse } from "../models/RolesResponse";
export declare class LogsArchivesApiRequestFactory extends BaseAPIRequestFactory {
    addReadRoleToArchive(archiveId: string, body: RelationshipToRole, _options?: Configuration): Promise<RequestContext>;
    createLogsArchive(body: LogsArchiveCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLogsArchive(archiveId: string, _options?: Configuration): Promise<RequestContext>;
    getLogsArchive(archiveId: string, _options?: Configuration): Promise<RequestContext>;
    getLogsArchiveOrder(_options?: Configuration): Promise<RequestContext>;
    listArchiveReadRoles(archiveId: string, _options?: Configuration): Promise<RequestContext>;
    listLogsArchives(_options?: Configuration): Promise<RequestContext>;
    removeRoleFromArchive(archiveId: string, body: RelationshipToRole, _options?: Configuration): Promise<RequestContext>;
    updateLogsArchive(archiveId: string, body: LogsArchiveCreateRequest, _options?: Configuration): Promise<RequestContext>;
    updateLogsArchiveOrder(body: LogsArchiveOrder, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsArchivesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addReadRoleToArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    addReadRoleToArchive(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsArchive(response: ResponseContext): Promise<LogsArchive>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLogsArchive(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsArchive(response: ResponseContext): Promise<LogsArchive>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsArchiveOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsArchiveOrder(response: ResponseContext): Promise<LogsArchiveOrder>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listArchiveReadRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listArchiveReadRoles(response: ResponseContext): Promise<RolesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogsArchives
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsArchives(response: ResponseContext): Promise<LogsArchives>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRoleFromArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeRoleFromArchive(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsArchive(response: ResponseContext): Promise<LogsArchive>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsArchiveOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsArchiveOrder(response: ResponseContext): Promise<LogsArchiveOrder>;
}
export interface LogsArchivesApiAddReadRoleToArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     */
    archiveId: string;
    /**
     * @type RelationshipToRole
     */
    body: RelationshipToRole;
}
export interface LogsArchivesApiCreateLogsArchiveRequest {
    /**
     * The definition of the new archive.
     * @type LogsArchiveCreateRequest
     */
    body: LogsArchiveCreateRequest;
}
export interface LogsArchivesApiDeleteLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     */
    archiveId: string;
}
export interface LogsArchivesApiGetLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     */
    archiveId: string;
}
export interface LogsArchivesApiListArchiveReadRolesRequest {
    /**
     * The ID of the archive.
     * @type string
     */
    archiveId: string;
}
export interface LogsArchivesApiRemoveRoleFromArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     */
    archiveId: string;
    /**
     * @type RelationshipToRole
     */
    body: RelationshipToRole;
}
export interface LogsArchivesApiUpdateLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     */
    archiveId: string;
    /**
     * New definition of the archive.
     * @type LogsArchiveCreateRequest
     */
    body: LogsArchiveCreateRequest;
}
export interface LogsArchivesApiUpdateLogsArchiveOrderRequest {
    /**
     * An object containing the new ordered list of archive IDs.
     * @type LogsArchiveOrder
     */
    body: LogsArchiveOrder;
}
export declare class LogsArchivesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsArchivesApiRequestFactory, responseProcessor?: LogsArchivesApiResponseProcessor);
    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * @param param The request object
     */
    addReadRoleToArchive(param: LogsArchivesApiAddReadRoleToArchiveRequest, options?: Configuration): Promise<void>;
    /**
     * Create an archive in your organization.
     * @param param The request object
     */
    createLogsArchive(param: LogsArchivesApiCreateLogsArchiveRequest, options?: Configuration): Promise<LogsArchive>;
    /**
     * Delete a given archive from your organization.
     * @param param The request object
     */
    deleteLogsArchive(param: LogsArchivesApiDeleteLogsArchiveRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific archive from your organization.
     * @param param The request object
     */
    getLogsArchive(param: LogsArchivesApiGetLogsArchiveRequest, options?: Configuration): Promise<LogsArchive>;
    /**
     * Get the current order of your archives.
     * This endpoint takes no JSON arguments.
     * @param param The request object
     */
    getLogsArchiveOrder(options?: Configuration): Promise<LogsArchiveOrder>;
    /**
     * Returns all read roles a given archive is restricted to.
     * @param param The request object
     */
    listArchiveReadRoles(param: LogsArchivesApiListArchiveReadRolesRequest, options?: Configuration): Promise<RolesResponse>;
    /**
     * Get the list of configured logs archives with their definitions.
     * @param param The request object
     */
    listLogsArchives(options?: Configuration): Promise<LogsArchives>;
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * @param param The request object
     */
    removeRoleFromArchive(param: LogsArchivesApiRemoveRoleFromArchiveRequest, options?: Configuration): Promise<void>;
    /**
     * Update a given archive configuration.
     *
     * **Note**: Using this method updates your archive configuration by **replacing**
     * your current configuration with the new one sent to your Datadog organization.
     * @param param The request object
     */
    updateLogsArchive(param: LogsArchivesApiUpdateLogsArchiveRequest, options?: Configuration): Promise<LogsArchive>;
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change
     * the structure and content of the data processed by other archives.
     *
     * **Note**: Using the `PUT` method updates your archive's order by replacing the current order
     * with the new one.
     * @param param The request object
     */
    updateLogsArchiveOrder(param: LogsArchivesApiUpdateLogsArchiveOrderRequest, options?: Configuration): Promise<LogsArchiveOrder>;
}
