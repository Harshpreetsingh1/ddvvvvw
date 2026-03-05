import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CsmCloudAccountsCoverageAnalysisResponse } from "../models/CsmCloudAccountsCoverageAnalysisResponse";
import { CsmHostsAndContainersCoverageAnalysisResponse } from "../models/CsmHostsAndContainersCoverageAnalysisResponse";
import { CsmServerlessCoverageAnalysisResponse } from "../models/CsmServerlessCoverageAnalysisResponse";
export declare class CSMCoverageAnalysisApiRequestFactory extends BaseAPIRequestFactory {
    getCSMCloudAccountsCoverageAnalysis(_options?: Configuration): Promise<RequestContext>;
    getCSMHostsAndContainersCoverageAnalysis(_options?: Configuration): Promise<RequestContext>;
    getCSMServerlessCoverageAnalysis(_options?: Configuration): Promise<RequestContext>;
}
export declare class CSMCoverageAnalysisApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCSMCloudAccountsCoverageAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMCloudAccountsCoverageAnalysis(response: ResponseContext): Promise<CsmCloudAccountsCoverageAnalysisResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCSMHostsAndContainersCoverageAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMHostsAndContainersCoverageAnalysis(response: ResponseContext): Promise<CsmHostsAndContainersCoverageAnalysisResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCSMServerlessCoverageAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMServerlessCoverageAnalysis(response: ResponseContext): Promise<CsmServerlessCoverageAnalysisResponse>;
}
export declare class CSMCoverageAnalysisApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CSMCoverageAnalysisApiRequestFactory, responseProcessor?: CSMCoverageAnalysisApiResponseProcessor);
    /**
     * Get the CSM Coverage Analysis of your Cloud Accounts.
     * This is calculated based on the number of your Cloud Accounts that are
     * scanned for security issues.
     * @param param The request object
     */
    getCSMCloudAccountsCoverageAnalysis(options?: Configuration): Promise<CsmCloudAccountsCoverageAnalysisResponse>;
    /**
     * Get the CSM Coverage Analysis of your Hosts and Containers.
     * This is calculated based on the number of agents running on your Hosts
     * and Containers with CSM feature(s) enabled.
     * @param param The request object
     */
    getCSMHostsAndContainersCoverageAnalysis(options?: Configuration): Promise<CsmHostsAndContainersCoverageAnalysisResponse>;
    /**
     * Get the CSM Coverage Analysis of your Serverless Resources.
     * This is calculated based on the number of agents running on your Serverless
     * Resources with CSM feature(s) enabled.
     * @param param The request object
     */
    getCSMServerlessCoverageAnalysis(options?: Configuration): Promise<CsmServerlessCoverageAnalysisResponse>;
}
