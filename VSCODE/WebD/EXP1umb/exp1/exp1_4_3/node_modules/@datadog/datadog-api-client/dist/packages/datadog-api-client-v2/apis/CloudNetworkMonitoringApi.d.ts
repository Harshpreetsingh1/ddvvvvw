import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SingleAggregatedConnectionResponseArray } from "../models/SingleAggregatedConnectionResponseArray";
import { SingleAggregatedDnsResponseArray } from "../models/SingleAggregatedDnsResponseArray";
export declare class CloudNetworkMonitoringApiRequestFactory extends BaseAPIRequestFactory {
    getAggregatedConnections(from?: number, to?: number, groupBy?: string, tags?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getAggregatedDns(from?: number, to?: number, groupBy?: string, tags?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
}
export declare class CloudNetworkMonitoringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAggregatedConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAggregatedConnections(response: ResponseContext): Promise<SingleAggregatedConnectionResponseArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAggregatedDns
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAggregatedDns(response: ResponseContext): Promise<SingleAggregatedDnsResponseArray>;
}
export interface CloudNetworkMonitoringApiGetAggregatedConnectionsRequest {
    /**
     * Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.
     * @type number
     */
    from?: number;
    /**
     * Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.
     * @type number
     */
    to?: number;
    /**
     * Comma-separated list of fields to group connections by. The maximum number of group_by(s) is 10.
     * @type string
     */
    groupBy?: string;
    /**
     * Comma-separated list of tags to filter connections by.
     * @type string
     */
    tags?: string;
    /**
     * The number of connections to be returned. The maximum value is 7500. The default is 100.
     * @type number
     */
    limit?: number;
}
export interface CloudNetworkMonitoringApiGetAggregatedDnsRequest {
    /**
     * Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.
     * @type number
     */
    from?: number;
    /**
     * Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`.
     * @type number
     */
    to?: number;
    /**
     * Comma-separated list of fields to group DNS traffic by. The server side defaults to `network.dns_query` if unspecified. `server_ungrouped` may be used if groups are not desired. The maximum number of group_by(s) is 10.
     * @type string
     */
    groupBy?: string;
    /**
     * Comma-separated list of tags to filter DNS traffic by.
     * @type string
     */
    tags?: string;
    /**
     * The number of aggregated DNS entries to be returned. The maximum value is 7500. The default is 100.
     * @type number
     */
    limit?: number;
}
export declare class CloudNetworkMonitoringApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CloudNetworkMonitoringApiRequestFactory, responseProcessor?: CloudNetworkMonitoringApiResponseProcessor);
    /**
     * Get all aggregated connections.
     * @param param The request object
     */
    getAggregatedConnections(param?: CloudNetworkMonitoringApiGetAggregatedConnectionsRequest, options?: Configuration): Promise<SingleAggregatedConnectionResponseArray>;
    /**
     * Get all aggregated DNS traffic.
     * @param param The request object
     */
    getAggregatedDns(param?: CloudNetworkMonitoringApiGetAggregatedDnsRequest, options?: Configuration): Promise<SingleAggregatedDnsResponseArray>;
}
