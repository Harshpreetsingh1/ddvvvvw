import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CheckCanDeleteSLOResponse } from "../models/CheckCanDeleteSLOResponse";
import { SearchSLOResponse } from "../models/SearchSLOResponse";
import { ServiceLevelObjective } from "../models/ServiceLevelObjective";
import { ServiceLevelObjectiveRequest } from "../models/ServiceLevelObjectiveRequest";
import { SLOBulkDeleteResponse } from "../models/SLOBulkDeleteResponse";
import { SLOCorrectionListResponse } from "../models/SLOCorrectionListResponse";
import { SLODeleteResponse } from "../models/SLODeleteResponse";
import { SLOHistoryResponse } from "../models/SLOHistoryResponse";
import { SLOListResponse } from "../models/SLOListResponse";
import { SLOResponse } from "../models/SLOResponse";
import { SLOTimeframe } from "../models/SLOTimeframe";
export declare class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
    checkCanDeleteSLO(ids: string, _options?: Configuration): Promise<RequestContext>;
    createSLO(body: ServiceLevelObjectiveRequest, _options?: Configuration): Promise<RequestContext>;
    deleteSLO(sloId: string, force?: string, _options?: Configuration): Promise<RequestContext>;
    deleteSLOTimeframeInBulk(body: {
        [key: string]: Array<SLOTimeframe>;
    }, _options?: Configuration): Promise<RequestContext>;
    getSLO(sloId: string, withConfiguredAlertIds?: boolean, _options?: Configuration): Promise<RequestContext>;
    getSLOCorrections(sloId: string, _options?: Configuration): Promise<RequestContext>;
    getSLOHistory(sloId: string, fromTs: number, toTs: number, target?: number, applyCorrection?: boolean, _options?: Configuration): Promise<RequestContext>;
    listSLOs(ids?: string, query?: string, tagsQuery?: string, metricsQuery?: string, limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext>;
    searchSLO(query?: string, pageSize?: number, pageNumber?: number, includeFacets?: boolean, _options?: Configuration): Promise<RequestContext>;
    updateSLO(sloId: string, body: ServiceLevelObjective, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceLevelObjectivesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCanDeleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkCanDeleteSLO(response: ResponseContext): Promise<CheckCanDeleteSLOResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSLO(response: ResponseContext): Promise<SLOListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSLO(response: ResponseContext): Promise<SLODeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLOTimeframeInBulk
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSLOTimeframeInBulk(response: ResponseContext): Promise<SLOBulkDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLO(response: ResponseContext): Promise<SLOResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOCorrections
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOCorrections(response: ResponseContext): Promise<SLOCorrectionListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOHistory(response: ResponseContext): Promise<SLOHistoryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSLOs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSLOs(response: ResponseContext): Promise<SLOListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchSLO(response: ResponseContext): Promise<SearchSLOResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSLO(response: ResponseContext): Promise<SLOListResponse>;
}
export interface ServiceLevelObjectivesApiCheckCanDeleteSLORequest {
    /**
     * A comma separated list of the IDs of the service level objectives objects.
     * @type string
     */
    ids: string;
}
export interface ServiceLevelObjectivesApiCreateSLORequest {
    /**
     * Service level objective request object.
     * @type ServiceLevelObjectiveRequest
     */
    body: ServiceLevelObjectiveRequest;
}
export interface ServiceLevelObjectivesApiDeleteSLORequest {
    /**
     * The ID of the service level objective.
     * @type string
     */
    sloId: string;
    /**
     * Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor).
     * @type string
     */
    force?: string;
}
export interface ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest {
    /**
     * Delete multiple service level objective objects request body.
     * @type { [key: string]: Array<SLOTimeframe>; }
     */
    body: {
        [key: string]: Array<SLOTimeframe>;
    };
}
export interface ServiceLevelObjectivesApiGetSLORequest {
    /**
     * The ID of the service level objective object.
     * @type string
     */
    sloId: string;
    /**
     * Get the IDs of SLO monitors that reference this SLO.
     * @type boolean
     */
    withConfiguredAlertIds?: boolean;
}
export interface ServiceLevelObjectivesApiGetSLOCorrectionsRequest {
    /**
     * The ID of the service level objective object.
     * @type string
     */
    sloId: string;
}
export interface ServiceLevelObjectivesApiGetSLOHistoryRequest {
    /**
     * The ID of the service level objective object.
     * @type string
     */
    sloId: string;
    /**
     * The `from` timestamp for the query window in epoch seconds.
     * @type number
     */
    fromTs: number;
    /**
     * The `to` timestamp for the query window in epoch seconds.
     * @type number
     */
    toTs: number;
    /**
     * The SLO target. If `target` is passed in, the response will include the remaining error budget and a timeframe value of `custom`.
     * @type number
     */
    target?: number;
    /**
     * Defaults to `true`. If any SLO corrections are applied and this parameter is set to `false`,
     * then the corrections will not be applied and the SLI values will not be affected.
     * @type boolean
     */
    applyCorrection?: boolean;
}
export interface ServiceLevelObjectivesApiListSLOsRequest {
    /**
     * A comma separated list of the IDs of the service level objectives objects.
     * @type string
     */
    ids?: string;
    /**
     * The query string to filter results based on SLO names.
     * @type string
     */
    query?: string;
    /**
     * The query string to filter results based on a single SLO tag.
     * @type string
     */
    tagsQuery?: string;
    /**
     * The query string to filter results based on SLO numerator and denominator.
     * @type string
     */
    metricsQuery?: string;
    /**
     * The number of SLOs to return in the response.
     * @type number
     */
    limit?: number;
    /**
     * The specific offset to use as the beginning of the returned response.
     * @type number
     */
    offset?: number;
}
export interface ServiceLevelObjectivesApiSearchSLORequest {
    /**
     * The query string to filter results based on SLO names.
     * Some examples of queries include `service:<service-name>`
     * and `<slo-name>`.
     * @type string
     */
    query?: string;
    /**
     * The number of files to return in the response `[default=10]`.
     * @type number
     */
    pageSize?: number;
    /**
     * The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`.
     * @type number
     */
    pageNumber?: number;
    /**
     * Whether or not to return facet information in the response `[default=false]`.
     * @type boolean
     */
    includeFacets?: boolean;
}
export interface ServiceLevelObjectivesApiUpdateSLORequest {
    /**
     * The ID of the service level objective object.
     * @type string
     */
    sloId: string;
    /**
     * The edited service level objective request object.
     * @type ServiceLevelObjective
     */
    body: ServiceLevelObjective;
}
export declare class ServiceLevelObjectivesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectivesApiRequestFactory, responseProcessor?: ServiceLevelObjectivesApiResponseProcessor);
    /**
     * Check if an SLO can be safely deleted. For example,
     * assure an SLO can be deleted without disrupting a dashboard.
     * @param param The request object
     */
    checkCanDeleteSLO(param: ServiceLevelObjectivesApiCheckCanDeleteSLORequest, options?: Configuration): Promise<CheckCanDeleteSLOResponse>;
    /**
     * Create a service level objective object.
     * @param param The request object
     */
    createSLO(param: ServiceLevelObjectivesApiCreateSLORequest, options?: Configuration): Promise<SLOListResponse>;
    /**
     * Permanently delete the specified service level objective object.
     *
     * If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns
     * a 409 conflict error because the SLO is referenced in a dashboard.
     * @param param The request object
     */
    deleteSLO(param: ServiceLevelObjectivesApiDeleteSLORequest, options?: Configuration): Promise<SLODeleteResponse>;
    /**
     * Delete (or partially delete) multiple service level objective objects.
     *
     * This endpoint facilitates deletion of one or more thresholds for one or more
     * service level objective objects. If all thresholds are deleted, the service level
     * objective object is deleted as well.
     * @param param The request object
     */
    deleteSLOTimeframeInBulk(param: ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest, options?: Configuration): Promise<SLOBulkDeleteResponse>;
    /**
     * Get a service level objective object.
     * @param param The request object
     */
    getSLO(param: ServiceLevelObjectivesApiGetSLORequest, options?: Configuration): Promise<SLOResponse>;
    /**
     * Get corrections applied to an SLO
     * @param param The request object
     */
    getSLOCorrections(param: ServiceLevelObjectivesApiGetSLOCorrectionsRequest, options?: Configuration): Promise<SLOCorrectionListResponse>;
    /**
     * Get a specific SLO’s history, regardless of its SLO type.
     *
     * The detailed history data is structured according to the source data type.
     * For example, metric data is included for event SLOs that use
     * the metric source, and monitor SLO types include the monitor transition history.
     *
     * **Note:** There are different response formats for event based and time based SLOs.
     * Examples of both are shown.
     * @param param The request object
     */
    getSLOHistory(param: ServiceLevelObjectivesApiGetSLOHistoryRequest, options?: Configuration): Promise<SLOHistoryResponse>;
    /**
     * Get a list of service level objective objects for your organization.
     * @param param The request object
     */
    listSLOs(param?: ServiceLevelObjectivesApiListSLOsRequest, options?: Configuration): Promise<SLOListResponse>;
    /**
     * Provide a paginated version of listSLOs returning a generator with all the items.
     */
    listSLOsWithPagination(param?: ServiceLevelObjectivesApiListSLOsRequest, options?: Configuration): AsyncGenerator<ServiceLevelObjective>;
    /**
     * Get a list of service level objective objects for your organization.
     * @param param The request object
     */
    searchSLO(param?: ServiceLevelObjectivesApiSearchSLORequest, options?: Configuration): Promise<SearchSLOResponse>;
    /**
     * Update the specified service level objective object.
     * @param param The request object
     */
    updateSLO(param: ServiceLevelObjectivesApiUpdateSLORequest, options?: Configuration): Promise<SLOListResponse>;
}
