import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ViewershipHistorySessionArray } from "../models/ViewershipHistorySessionArray";
import { Watch } from "../models/Watch";
import { WatcherArray } from "../models/WatcherArray";
export declare class RumReplayViewershipApiRequestFactory extends BaseAPIRequestFactory {
    createRumReplaySessionWatch(sessionId: string, body: Watch, _options?: Configuration): Promise<RequestContext>;
    deleteRumReplaySessionWatch(sessionId: string, _options?: Configuration): Promise<RequestContext>;
    listRumReplaySessionWatchers(sessionId: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    listRumReplayViewershipHistorySessions(filterWatchedAtStart?: number, pageNumber?: number, filterCreatedBy?: string, filterWatchedAtEnd?: number, filterSessionIds?: string, pageSize?: number, filterApplicationId?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumReplayViewershipApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRumReplaySessionWatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRumReplaySessionWatch(response: ResponseContext): Promise<Watch>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRumReplaySessionWatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRumReplaySessionWatch(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRumReplaySessionWatchers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplaySessionWatchers(response: ResponseContext): Promise<WatcherArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRumReplayViewershipHistorySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplayViewershipHistorySessions(response: ResponseContext): Promise<ViewershipHistorySessionArray>;
}
export interface RumReplayViewershipApiCreateRumReplaySessionWatchRequest {
    /**
     * Unique identifier of the session.
     * @type string
     */
    sessionId: string;
    /**
     * @type Watch
     */
    body: Watch;
}
export interface RumReplayViewershipApiDeleteRumReplaySessionWatchRequest {
    /**
     * Unique identifier of the session.
     * @type string
     */
    sessionId: string;
}
export interface RumReplayViewershipApiListRumReplaySessionWatchersRequest {
    /**
     * Unique identifier of the session.
     * @type string
     */
    sessionId: string;
    /**
     * Number of items per page.
     * @type number
     */
    pageSize?: number;
    /**
     * Page number for pagination (0-indexed).
     * @type number
     */
    pageNumber?: number;
}
export interface RumReplayViewershipApiListRumReplayViewershipHistorySessionsRequest {
    /**
     * Start timestamp in milliseconds for watched_at filter.
     * @type number
     */
    filterWatchedAtStart?: number;
    /**
     * Page number for pagination (0-indexed).
     * @type number
     */
    pageNumber?: number;
    /**
     * Filter by user UUID. Defaults to current user if not specified.
     * @type string
     */
    filterCreatedBy?: string;
    /**
     * End timestamp in milliseconds for watched_at filter.
     * @type number
     */
    filterWatchedAtEnd?: number;
    /**
     * Comma-separated list of session IDs to filter by.
     * @type string
     */
    filterSessionIds?: string;
    /**
     * Number of items per page.
     * @type number
     */
    pageSize?: number;
    /**
     * Filter by application ID.
     * @type string
     */
    filterApplicationId?: string;
}
export declare class RumReplayViewershipApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumReplayViewershipApiRequestFactory, responseProcessor?: RumReplayViewershipApiResponseProcessor);
    /**
     * Record a session watch.
     * @param param The request object
     */
    createRumReplaySessionWatch(param: RumReplayViewershipApiCreateRumReplaySessionWatchRequest, options?: Configuration): Promise<Watch>;
    /**
     * Delete session watch history.
     * @param param The request object
     */
    deleteRumReplaySessionWatch(param: RumReplayViewershipApiDeleteRumReplaySessionWatchRequest, options?: Configuration): Promise<void>;
    /**
     * List session watchers.
     * @param param The request object
     */
    listRumReplaySessionWatchers(param: RumReplayViewershipApiListRumReplaySessionWatchersRequest, options?: Configuration): Promise<WatcherArray>;
    /**
     * List watched sessions.
     * @param param The request object
     */
    listRumReplayViewershipHistorySessions(param?: RumReplayViewershipApiListRumReplayViewershipHistorySessionsRequest, options?: Configuration): Promise<ViewershipHistorySessionArray>;
}
