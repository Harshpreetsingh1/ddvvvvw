import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { Snapshot } from "../models/Snapshot";
import { SnapshotArray } from "../models/SnapshotArray";
import { SnapshotCreateRequest } from "../models/SnapshotCreateRequest";
import { SnapshotUpdateRequest } from "../models/SnapshotUpdateRequest";
export declare class RumReplayHeatmapsApiRequestFactory extends BaseAPIRequestFactory {
    createReplayHeatmapSnapshot(body: SnapshotCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteReplayHeatmapSnapshot(snapshotId: string, _options?: Configuration): Promise<RequestContext>;
    listReplayHeatmapSnapshots(filterViewName: string, filterDeviceType?: string, pageLimit?: number, filterApplicationId?: string, _options?: Configuration): Promise<RequestContext>;
    updateReplayHeatmapSnapshot(snapshotId: string, body: SnapshotUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class RumReplayHeatmapsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createReplayHeatmapSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    createReplayHeatmapSnapshot(response: ResponseContext): Promise<Snapshot>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteReplayHeatmapSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteReplayHeatmapSnapshot(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReplayHeatmapSnapshots
     * @throws ApiException if the response code was not in [200, 299]
     */
    listReplayHeatmapSnapshots(response: ResponseContext): Promise<SnapshotArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateReplayHeatmapSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateReplayHeatmapSnapshot(response: ResponseContext): Promise<Snapshot>;
}
export interface RumReplayHeatmapsApiCreateReplayHeatmapSnapshotRequest {
    /**
     * @type SnapshotCreateRequest
     */
    body: SnapshotCreateRequest;
}
export interface RumReplayHeatmapsApiDeleteReplayHeatmapSnapshotRequest {
    /**
     * Unique identifier of the heatmap snapshot.
     * @type string
     */
    snapshotId: string;
}
export interface RumReplayHeatmapsApiListReplayHeatmapSnapshotsRequest {
    /**
     * View name to filter snapshots.
     * @type string
     */
    filterViewName: string;
    /**
     * Device type to filter snapshots.
     * @type string
     */
    filterDeviceType?: string;
    /**
     * Maximum number of snapshots to return.
     * @type number
     */
    pageLimit?: number;
    /**
     * Filter by application ID.
     * @type string
     */
    filterApplicationId?: string;
}
export interface RumReplayHeatmapsApiUpdateReplayHeatmapSnapshotRequest {
    /**
     * Unique identifier of the heatmap snapshot.
     * @type string
     */
    snapshotId: string;
    /**
     * @type SnapshotUpdateRequest
     */
    body: SnapshotUpdateRequest;
}
export declare class RumReplayHeatmapsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RumReplayHeatmapsApiRequestFactory, responseProcessor?: RumReplayHeatmapsApiResponseProcessor);
    /**
     * Create a heatmap snapshot.
     * @param param The request object
     */
    createReplayHeatmapSnapshot(param: RumReplayHeatmapsApiCreateReplayHeatmapSnapshotRequest, options?: Configuration): Promise<Snapshot>;
    /**
     * Delete a heatmap snapshot.
     * @param param The request object
     */
    deleteReplayHeatmapSnapshot(param: RumReplayHeatmapsApiDeleteReplayHeatmapSnapshotRequest, options?: Configuration): Promise<void>;
    /**
     * List heatmap snapshots.
     * @param param The request object
     */
    listReplayHeatmapSnapshots(param: RumReplayHeatmapsApiListReplayHeatmapSnapshotsRequest, options?: Configuration): Promise<SnapshotArray>;
    /**
     * Update a heatmap snapshot.
     * @param param The request object
     */
    updateReplayHeatmapSnapshot(param: RumReplayHeatmapsApiUpdateReplayHeatmapSnapshotRequest, options?: Configuration): Promise<Snapshot>;
}
