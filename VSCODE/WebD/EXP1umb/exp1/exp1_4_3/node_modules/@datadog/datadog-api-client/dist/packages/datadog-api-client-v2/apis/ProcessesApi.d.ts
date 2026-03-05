import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ProcessSummariesResponse } from "../models/ProcessSummariesResponse";
import { ProcessSummary } from "../models/ProcessSummary";
export declare class ProcessesApiRequestFactory extends BaseAPIRequestFactory {
    listProcesses(search?: string, tags?: string, from?: number, to?: number, pageLimit?: number, pageCursor?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProcessesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProcesses
     * @throws ApiException if the response code was not in [200, 299]
     */
    listProcesses(response: ResponseContext): Promise<ProcessSummariesResponse>;
}
export interface ProcessesApiListProcessesRequest {
    /**
     * String to search processes by.
     * @type string
     */
    search?: string;
    /**
     * Comma-separated list of tags to filter processes by.
     * @type string
     */
    tags?: string;
    /**
     * Unix timestamp (number of seconds since epoch) of the start of the query window.
     * If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither
     * `from` nor `to` are provided, the query window will be `[now - 15m, now]`.
     * @type number
     */
    from?: number;
    /**
     * Unix timestamp (number of seconds since epoch) of the end of the query window.
     * If not provided, the end of the query window will be 15 minutes after the `from` timestamp. If neither
     * `from` nor `to` are provided, the query window will be `[now - 15m, now]`.
     * @type number
     */
    to?: number;
    /**
     * Maximum number of results returned.
     * @type number
     */
    pageLimit?: number;
    /**
     * String to query the next page of results.
     * This key is provided with each valid response from the API in `meta.page.after`.
     * @type string
     */
    pageCursor?: string;
}
export declare class ProcessesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProcessesApiRequestFactory, responseProcessor?: ProcessesApiResponseProcessor);
    /**
     * Get all processes for your organization.
     * @param param The request object
     */
    listProcesses(param?: ProcessesApiListProcessesRequest, options?: Configuration): Promise<ProcessSummariesResponse>;
    /**
     * Provide a paginated version of listProcesses returning a generator with all the items.
     */
    listProcessesWithPagination(param?: ProcessesApiListProcessesRequest, options?: Configuration): AsyncGenerator<ProcessSummary>;
}
