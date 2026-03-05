import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { Playlist } from "../models/Playlist";
import { PlaylistArray } from "../models/PlaylistArray";
import { PlaylistsSession } from "../models/PlaylistsSession";
import { PlaylistsSessionArray } from "../models/PlaylistsSessionArray";
import { SessionIdArray } from "../models/SessionIdArray";
export declare class RumReplayPlaylistsApiRequestFactory extends BaseAPIRequestFactory {
    addRumReplaySessionToPlaylist(ts: number, playlistId: number, sessionId: string, dataSource?: string, _options?: Configuration): Promise<RequestContext>;
    bulkRemoveRumReplayPlaylistSessions(playlistId: number, body: SessionIdArray, _options?: Configuration): Promise<RequestContext>;
    createRumReplayPlaylist(body: Playlist, _options?: Configuration): Promise<RequestContext>;
    deleteRumReplayPlaylist(playlistId: number, _options?: Configuration): Promise<RequestContext>;
    getRumReplayPlaylist(playlistId: number, _options?: Configuration): Promise<RequestContext>;
    listRumReplayPlaylists(filterCreatedByUuid?: string, filterQuery?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext>;
    listRumReplayPlaylistSessions(playlistId: number, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext>;
    removeRumReplaySessionFromPlaylist(playlistId: number, sessionId: string, _options?: Configuration): Promise<RequestContext>;
    updateRumReplayPlaylist(playlistId: number, body: Playlist, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumReplayPlaylistsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRumReplaySessionToPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    addRumReplaySessionToPlaylist(response: ResponseContext): Promise<PlaylistsSession>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkRemoveRumReplayPlaylistSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    bulkRemoveRumReplayPlaylistSessions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRumReplayPlaylist(response: ResponseContext): Promise<Playlist>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRumReplayPlaylist(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRumReplayPlaylist(response: ResponseContext): Promise<Playlist>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRumReplayPlaylists
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplayPlaylists(response: ResponseContext): Promise<PlaylistArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRumReplayPlaylistSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplayPlaylistSessions(response: ResponseContext): Promise<PlaylistsSessionArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeRumReplaySessionFromPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeRumReplaySessionFromPlaylist(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRumReplayPlaylist(response: ResponseContext): Promise<Playlist>;
}
export interface RumReplayPlaylistsApiAddRumReplaySessionToPlaylistRequest {
    /**
     * Server-side timestamp in milliseconds.
     * @type number
     */
    ts: number;
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
    /**
     * Unique identifier of the session.
     * @type string
     */
    sessionId: string;
    /**
     * Data source type. Valid values: 'rum' or 'product_analytics'. Defaults to 'rum'.
     * @type string
     */
    dataSource?: string;
}
export interface RumReplayPlaylistsApiBulkRemoveRumReplayPlaylistSessionsRequest {
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
    /**
     * @type SessionIdArray
     */
    body: SessionIdArray;
}
export interface RumReplayPlaylistsApiCreateRumReplayPlaylistRequest {
    /**
     * @type Playlist
     */
    body: Playlist;
}
export interface RumReplayPlaylistsApiDeleteRumReplayPlaylistRequest {
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
}
export interface RumReplayPlaylistsApiGetRumReplayPlaylistRequest {
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
}
export interface RumReplayPlaylistsApiListRumReplayPlaylistsRequest {
    /**
     * Filter playlists by the UUID of the user who created them.
     * @type string
     */
    filterCreatedByUuid?: string;
    /**
     * Search query to filter playlists by name.
     * @type string
     */
    filterQuery?: string;
    /**
     * Page number for pagination (0-indexed).
     * @type number
     */
    pageNumber?: number;
    /**
     * Number of items per page.
     * @type number
     */
    pageSize?: number;
}
export interface RumReplayPlaylistsApiListRumReplayPlaylistSessionsRequest {
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
    /**
     * Page number for pagination (0-indexed).
     * @type number
     */
    pageNumber?: number;
    /**
     * Number of items per page.
     * @type number
     */
    pageSize?: number;
}
export interface RumReplayPlaylistsApiRemoveRumReplaySessionFromPlaylistRequest {
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
    /**
     * Unique identifier of the session.
     * @type string
     */
    sessionId: string;
}
export interface RumReplayPlaylistsApiUpdateRumReplayPlaylistRequest {
    /**
     * Unique identifier of the playlist.
     * @type number
     */
    playlistId: number;
    /**
     * @type Playlist
     */
    body: Playlist;
}
export declare class RumReplayPlaylistsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumReplayPlaylistsApiRequestFactory, responseProcessor?: RumReplayPlaylistsApiResponseProcessor);
    /**
     * Add a session to a playlist.
     * @param param The request object
     */
    addRumReplaySessionToPlaylist(param: RumReplayPlaylistsApiAddRumReplaySessionToPlaylistRequest, options?: Configuration): Promise<PlaylistsSession>;
    /**
     * Remove sessions from a playlist.
     * @param param The request object
     */
    bulkRemoveRumReplayPlaylistSessions(param: RumReplayPlaylistsApiBulkRemoveRumReplayPlaylistSessionsRequest, options?: Configuration): Promise<void>;
    /**
     * Create a playlist.
     * @param param The request object
     */
    createRumReplayPlaylist(param: RumReplayPlaylistsApiCreateRumReplayPlaylistRequest, options?: Configuration): Promise<Playlist>;
    /**
     * Delete a playlist.
     * @param param The request object
     */
    deleteRumReplayPlaylist(param: RumReplayPlaylistsApiDeleteRumReplayPlaylistRequest, options?: Configuration): Promise<void>;
    /**
     * Get a playlist.
     * @param param The request object
     */
    getRumReplayPlaylist(param: RumReplayPlaylistsApiGetRumReplayPlaylistRequest, options?: Configuration): Promise<Playlist>;
    /**
     * List playlists.
     * @param param The request object
     */
    listRumReplayPlaylists(param?: RumReplayPlaylistsApiListRumReplayPlaylistsRequest, options?: Configuration): Promise<PlaylistArray>;
    /**
     * List sessions in a playlist.
     * @param param The request object
     */
    listRumReplayPlaylistSessions(param: RumReplayPlaylistsApiListRumReplayPlaylistSessionsRequest, options?: Configuration): Promise<PlaylistsSessionArray>;
    /**
     * Remove a session from a playlist.
     * @param param The request object
     */
    removeRumReplaySessionFromPlaylist(param: RumReplayPlaylistsApiRemoveRumReplaySessionFromPlaylistRequest, options?: Configuration): Promise<void>;
    /**
     * Update a playlist.
     * @param param The request object
     */
    updateRumReplayPlaylist(param: RumReplayPlaylistsApiUpdateRumReplayPlaylistRequest, options?: Configuration): Promise<Playlist>;
}
