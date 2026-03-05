import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { RecommendationDocument } from "../models/RecommendationDocument";
export declare class SpaApiRequestFactory extends BaseAPIRequestFactory {
    getSPARecommendations(service: string, bypassCache?: string, _options?: Configuration): Promise<RequestContext>;
    getSPARecommendationsWithShard(shard: string, service: string, bypassCache?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SpaApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSPARecommendations
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSPARecommendations(response: ResponseContext): Promise<RecommendationDocument>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSPARecommendationsWithShard
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSPARecommendationsWithShard(response: ResponseContext): Promise<RecommendationDocument>;
}
export interface SpaApiGetSPARecommendationsRequest {
    /**
     * The service name for a spark job.
     * @type string
     */
    service: string;
    /**
     * The recommendation service should not use its metrics cache.
     * @type string
     */
    bypassCache?: string;
}
export interface SpaApiGetSPARecommendationsWithShardRequest {
    /**
     * The shard tag for a spark job, which differentiates jobs within the same service that have different resource needs
     * @type string
     */
    shard: string;
    /**
     * The service name for a spark job
     * @type string
     */
    service: string;
    /**
     * The recommendation service should not use its metrics cache.
     * @type string
     */
    bypassCache?: string;
}
export declare class SpaApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SpaApiRequestFactory, responseProcessor?: SpaApiResponseProcessor);
    /**
     * This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and SPA returns structured recommendations for driver and executor resources. The version with a shard should be preferred, where possible, as it gives more accurate results.
     * @param param The request object
     */
    getSPARecommendations(param: SpaApiGetSPARecommendationsRequest, options?: Configuration): Promise<RecommendationDocument>;
    /**
     * This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and shard identifier, and SPA returns structured recommendations for driver and executor resources.
     * @param param The request object
     */
    getSPARecommendationsWithShard(param: SpaApiGetSPARecommendationsWithShardRequest, options?: Configuration): Promise<RecommendationDocument>;
}
