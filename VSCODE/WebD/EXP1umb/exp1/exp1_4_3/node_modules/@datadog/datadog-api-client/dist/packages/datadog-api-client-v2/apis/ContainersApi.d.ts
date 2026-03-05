import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ContainerItem } from "../models/ContainerItem";
import { ContainersResponse } from "../models/ContainersResponse";
export declare class ContainersApiRequestFactory extends BaseAPIRequestFactory {
    listContainers(filterTags?: string, groupBy?: string, sort?: string, pageSize?: number, pageCursor?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContainersApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listContainers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listContainers(response: ResponseContext): Promise<ContainersResponse>;
}
export interface ContainersApiListContainersRequest {
    /**
     * Comma-separated list of tags to filter containers by.
     * @type string
     */
    filterTags?: string;
    /**
     * Comma-separated list of tags to group containers by.
     * @type string
     */
    groupBy?: string;
    /**
     * Attribute to sort containers by.
     * @type string
     */
    sort?: string;
    /**
     * Maximum number of results returned.
     * @type number
     */
    pageSize?: number;
    /**
     * String to query the next page of results.
     * This key is provided with each valid response from the API in `meta.pagination.next_cursor`.
     * @type string
     */
    pageCursor?: string;
}
export declare class ContainersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ContainersApiRequestFactory, responseProcessor?: ContainersApiResponseProcessor);
    /**
     * Get all containers for your organization.
     * @param param The request object
     */
    listContainers(param?: ContainersApiListContainersRequest, options?: Configuration): Promise<ContainersResponse>;
    /**
     * Provide a paginated version of listContainers returning a generator with all the items.
     */
    listContainersWithPagination(param?: ContainersApiListContainersRequest, options?: Configuration): AsyncGenerator<ContainerItem>;
}
