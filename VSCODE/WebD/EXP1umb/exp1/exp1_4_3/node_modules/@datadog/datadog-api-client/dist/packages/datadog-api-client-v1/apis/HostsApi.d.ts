import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { HostListResponse } from "../models/HostListResponse";
import { HostMuteResponse } from "../models/HostMuteResponse";
import { HostMuteSettings } from "../models/HostMuteSettings";
import { HostTotals } from "../models/HostTotals";
export declare class HostsApiRequestFactory extends BaseAPIRequestFactory {
    getHostTotals(from?: number, _options?: Configuration): Promise<RequestContext>;
    listHosts(filter?: string, sortField?: string, sortDir?: string, start?: number, count?: number, from?: number, includeMutedHostsData?: boolean, includeHostsMetadata?: boolean, _options?: Configuration): Promise<RequestContext>;
    muteHost(hostName: string, body: HostMuteSettings, _options?: Configuration): Promise<RequestContext>;
    unmuteHost(hostName: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class HostsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostTotals
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHostTotals(response: ResponseContext): Promise<HostTotals>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listHosts(response: ResponseContext): Promise<HostListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to muteHost
     * @throws ApiException if the response code was not in [200, 299]
     */
    muteHost(response: ResponseContext): Promise<HostMuteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unmuteHost
     * @throws ApiException if the response code was not in [200, 299]
     */
    unmuteHost(response: ResponseContext): Promise<HostMuteResponse>;
}
export interface HostsApiGetHostTotalsRequest {
    /**
     * Number of seconds from which you want to get total number of active hosts.
     * @type number
     */
    from?: number;
}
export interface HostsApiListHostsRequest {
    /**
     * String to filter search results.
     * @type string
     */
    filter?: string;
    /**
     * Sort hosts by this field.
     * @type string
     */
    sortField?: string;
    /**
     * Direction of sort. Options include `asc` and `desc`.
     * @type string
     */
    sortDir?: string;
    /**
     * Specify the starting point for the host search results. For example, if you set `count` to 100 and the first 100 results have already been returned, you can set `start` to `101` to get the next 100 results.
     * @type number
     */
    start?: number;
    /**
     * Number of hosts to return. Max 1000.
     * @type number
     */
    count?: number;
    /**
     * Number of seconds since UNIX epoch from which you want to search your hosts.
     * @type number
     */
    from?: number;
    /**
     * Include information on the muted status of hosts and when the mute expires.
     * @type boolean
     */
    includeMutedHostsData?: boolean;
    /**
     * Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
     * @type boolean
     */
    includeHostsMetadata?: boolean;
}
export interface HostsApiMuteHostRequest {
    /**
     * Name of the host to mute.
     * @type string
     */
    hostName: string;
    /**
     * Mute a host request body.
     * @type HostMuteSettings
     */
    body: HostMuteSettings;
}
export interface HostsApiUnmuteHostRequest {
    /**
     * Name of the host to unmute.
     * @type string
     */
    hostName: string;
}
export declare class HostsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: HostsApiRequestFactory, responseProcessor?: HostsApiResponseProcessor);
    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account.
     * Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * @param param The request object
     */
    getHostTotals(param?: HostsApiGetHostTotalsRequest, options?: Configuration): Promise<HostTotals>;
    /**
     * This endpoint allows searching for hosts by name, alias, or tag.
     * Hosts live within the past 3 hours are included by default.
     * Retention is 7 days.
     * Results are paginated with a max of 1000 results at a time.
     * **Note:** If the host is an Amazon EC2 instance, `id` is replaced with `aws_id` in the response.
     * **Note**: To enrich the data returned by this endpoint with security scans, see the new [api/v2/security/scanned-assets-metadata](https://docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.
     * @param param The request object
     */
    listHosts(param?: HostsApiListHostsRequest, options?: Configuration): Promise<HostListResponse>;
    /**
     * Mute a host. **Note:** This creates a [Downtime V2](https://docs.datadoghq.com/api/latest/downtimes/#schedule-a-downtime) for the host.
     * @param param The request object
     */
    muteHost(param: HostsApiMuteHostRequest, options?: Configuration): Promise<HostMuteResponse>;
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * @param param The request object
     */
    unmuteHost(param: HostsApiUnmuteHostRequest, options?: Configuration): Promise<HostMuteResponse>;
}
