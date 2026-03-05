import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SloReportCreateRequest } from "../models/SloReportCreateRequest";
import { SLOReportPostResponse } from "../models/SLOReportPostResponse";
import { SLOReportStatusGetResponse } from "../models/SLOReportStatusGetResponse";
import { SloStatusResponse } from "../models/SloStatusResponse";
export declare class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
    createSLOReportJob(body: SloReportCreateRequest, _options?: Configuration): Promise<RequestContext>;
    getSLOReport(reportId: string, _options?: Configuration): Promise<RequestContext>;
    getSLOReportJobStatus(reportId: string, _options?: Configuration): Promise<RequestContext>;
    getSloStatus(sloId: string, fromTs: number, toTs: number, disableCorrections?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceLevelObjectivesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLOReportJob
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSLOReportJob(response: ResponseContext): Promise<SLOReportPostResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOReport
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOReport(response: ResponseContext): Promise<string>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOReportJobStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOReportJobStatus(response: ResponseContext): Promise<SLOReportStatusGetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSloStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSloStatus(response: ResponseContext): Promise<SloStatusResponse>;
}
export interface ServiceLevelObjectivesApiCreateSLOReportJobRequest {
    /**
     * Create SLO report job request body.
     * @type SloReportCreateRequest
     */
    body: SloReportCreateRequest;
}
export interface ServiceLevelObjectivesApiGetSLOReportRequest {
    /**
     * The ID of the report job.
     * @type string
     */
    reportId: string;
}
export interface ServiceLevelObjectivesApiGetSLOReportJobStatusRequest {
    /**
     * The ID of the report job.
     * @type string
     */
    reportId: string;
}
export interface ServiceLevelObjectivesApiGetSloStatusRequest {
    /**
     * The ID of the SLO.
     * @type string
     */
    sloId: string;
    /**
     * The starting timestamp for the SLO status query in epoch seconds.
     * @type number
     */
    fromTs: number;
    /**
     * The ending timestamp for the SLO status query in epoch seconds.
     * @type number
     */
    toTs: number;
    /**
     * Whether to exclude correction windows from the SLO status calculation. Defaults to false.
     * @type boolean
     */
    disableCorrections?: boolean;
}
export declare class ServiceLevelObjectivesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectivesApiRequestFactory, responseProcessor?: ServiceLevelObjectivesApiResponseProcessor);
    /**
     * Create a job to generate an SLO report. The report job is processed asynchronously and eventually results in a CSV report being available for download.
     *
     * Check the status of the job and download the CSV report using the returned `report_id`.
     * @param param The request object
     */
    createSLOReportJob(param: ServiceLevelObjectivesApiCreateSLOReportJobRequest, options?: Configuration): Promise<SLOReportPostResponse>;
    /**
     * Download an SLO report. This can only be performed after the report job has completed.
     *
     * Reports are not guaranteed to exist indefinitely. Datadog recommends that you download the report as soon as it is available.
     * @param param The request object
     */
    getSLOReport(param: ServiceLevelObjectivesApiGetSLOReportRequest, options?: Configuration): Promise<string>;
    /**
     * Get the status of the SLO report job.
     * @param param The request object
     */
    getSLOReportJobStatus(param: ServiceLevelObjectivesApiGetSLOReportJobStatusRequest, options?: Configuration): Promise<SLOReportStatusGetResponse>;
    /**
     * Get the status of a Service Level Objective (SLO) for a given time period.
     *
     * This endpoint returns the current SLI value, error budget remaining, and other status information for the specified SLO.
     * @param param The request object
     */
    getSloStatus(param: ServiceLevelObjectivesApiGetSloStatusRequest, options?: Configuration): Promise<SloStatusResponse>;
}
