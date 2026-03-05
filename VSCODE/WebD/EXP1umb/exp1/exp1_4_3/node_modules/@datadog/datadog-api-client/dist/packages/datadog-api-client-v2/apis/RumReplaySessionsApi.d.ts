import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
export declare class RumReplaySessionsApiRequestFactory extends BaseAPIRequestFactory {
    getSegments(viewId: string, sessionId: string, source?: string, ts?: number, maxListSize?: number, paging?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumReplaySessionsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSegments(response: ResponseContext): Promise<void>;
}
export interface RumReplaySessionsApiGetSegmentsRequest {
    /**
     * Unique identifier of the view.
     * @type string
     */
    viewId: string;
    /**
     * Unique identifier of the session.
     * @type string
     */
    sessionId: string;
    /**
     * Storage source: 'event_platform' or 'blob'.
     * @type string
     */
    source?: string;
    /**
     * Server-side timestamp in milliseconds.
     * @type number
     */
    ts?: number;
    /**
     * Maximum size in bytes for the segment list.
     * @type number
     */
    maxListSize?: number;
    /**
     * Paging token for pagination.
     * @type string
     */
    paging?: string;
}
export declare class RumReplaySessionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumReplaySessionsApiRequestFactory, responseProcessor?: RumReplaySessionsApiResponseProcessor);
    /**
     * Get segments for a view.
     * @param param The request object
     */
    getSegments(param: RumReplaySessionsApiGetSegmentsRequest, options?: Configuration): Promise<void>;
}
