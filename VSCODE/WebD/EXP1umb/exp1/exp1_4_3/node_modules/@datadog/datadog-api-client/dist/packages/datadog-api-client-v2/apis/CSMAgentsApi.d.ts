import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CsmAgentsResponse } from "../models/CsmAgentsResponse";
import { OrderDirection } from "../models/OrderDirection";
export declare class CSMAgentsApiRequestFactory extends BaseAPIRequestFactory {
    listAllCSMAgents(page?: number, size?: number, query?: string, orderDirection?: OrderDirection, _options?: Configuration): Promise<RequestContext>;
    listAllCSMServerlessAgents(page?: number, size?: number, query?: string, orderDirection?: OrderDirection, _options?: Configuration): Promise<RequestContext>;
}
export declare class CSMAgentsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllCSMAgents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAllCSMAgents(response: ResponseContext): Promise<CsmAgentsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllCSMServerlessAgents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAllCSMServerlessAgents(response: ResponseContext): Promise<CsmAgentsResponse>;
}
export interface CSMAgentsApiListAllCSMAgentsRequest {
    /**
     * The page index for pagination (zero-based).
     * @type number
     */
    page?: number;
    /**
     * The number of items to include in a single page.
     * @type number
     */
    size?: number;
    /**
     * A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).
     * @type string
     */
    query?: string;
    /**
     * The sort direction for results. Use `asc` for ascending or `desc` for descending.
     * @type OrderDirection
     */
    orderDirection?: OrderDirection;
}
export interface CSMAgentsApiListAllCSMServerlessAgentsRequest {
    /**
     * The page index for pagination (zero-based).
     * @type number
     */
    page?: number;
    /**
     * The number of items to include in a single page.
     * @type number
     */
    size?: number;
    /**
     * A search query string to filter results (for example, `hostname:COMP-T2H4J27423`).
     * @type string
     */
    query?: string;
    /**
     * The sort direction for results. Use `asc` for ascending or `desc` for descending.
     * @type OrderDirection
     */
    orderDirection?: OrderDirection;
}
export declare class CSMAgentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CSMAgentsApiRequestFactory, responseProcessor?: CSMAgentsApiResponseProcessor);
    /**
     * Get the list of all CSM Agents running on your hosts and containers.
     * @param param The request object
     */
    listAllCSMAgents(param?: CSMAgentsApiListAllCSMAgentsRequest, options?: Configuration): Promise<CsmAgentsResponse>;
    /**
     * Get the list of all CSM Serverless Agents running on your hosts and containers.
     * @param param The request object
     */
    listAllCSMServerlessAgents(param?: CSMAgentsApiListAllCSMServerlessAgentsRequest, options?: Configuration): Promise<CsmAgentsResponse>;
}
