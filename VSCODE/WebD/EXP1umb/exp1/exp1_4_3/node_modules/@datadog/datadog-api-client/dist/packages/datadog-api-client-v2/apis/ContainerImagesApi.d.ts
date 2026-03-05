import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ContainerImageItem } from "../models/ContainerImageItem";
import { ContainerImagesResponse } from "../models/ContainerImagesResponse";
export declare class ContainerImagesApiRequestFactory extends BaseAPIRequestFactory {
    listContainerImages(filterTags?: string, groupBy?: string, sort?: string, pageSize?: number, pageCursor?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ContainerImagesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listContainerImages
     * @throws ApiException if the response code was not in [200, 299]
     */
    listContainerImages(response: ResponseContext): Promise<ContainerImagesResponse>;
}
export interface ContainerImagesApiListContainerImagesRequest {
    /**
     * Comma-separated list of tags to filter Container Images by.
     * @type string
     */
    filterTags?: string;
    /**
     * Comma-separated list of tags to group Container Images by.
     * @type string
     */
    groupBy?: string;
    /**
     * Attribute to sort Container Images by.
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
export declare class ContainerImagesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ContainerImagesApiRequestFactory, responseProcessor?: ContainerImagesApiResponseProcessor);
    /**
     * Get all Container Images for your organization.
     * **Note**: To enrich the data returned by this endpoint with security scans, see the new [api/v2/security/scanned-assets-metadata](https://docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.
     * @param param The request object
     */
    listContainerImages(param?: ContainerImagesApiListContainerImagesRequest, options?: Configuration): Promise<ContainerImagesResponse>;
    /**
     * Provide a paginated version of listContainerImages returning a generator with all the items.
     */
    listContainerImagesWithPagination(param?: ContainerImagesApiListContainerImagesRequest, options?: Configuration): AsyncGenerator<ContainerImageItem>;
}
