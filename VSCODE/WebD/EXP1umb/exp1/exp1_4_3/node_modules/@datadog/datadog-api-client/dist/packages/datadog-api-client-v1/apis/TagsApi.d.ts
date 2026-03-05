import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { HostTags } from "../models/HostTags";
import { TagToHosts } from "../models/TagToHosts";
export declare class TagsApiRequestFactory extends BaseAPIRequestFactory {
    createHostTags(hostName: string, body: HostTags, source?: string, _options?: Configuration): Promise<RequestContext>;
    deleteHostTags(hostName: string, source?: string, _options?: Configuration): Promise<RequestContext>;
    getHostTags(hostName: string, source?: string, _options?: Configuration): Promise<RequestContext>;
    listHostTags(source?: string, _options?: Configuration): Promise<RequestContext>;
    updateHostTags(hostName: string, body: HostTags, source?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class TagsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    createHostTags(response: ResponseContext): Promise<HostTags>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteHostTags(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHostTags(response: ResponseContext): Promise<HostTags>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    listHostTags(response: ResponseContext): Promise<TagToHosts>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateHostTags
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateHostTags(response: ResponseContext): Promise<HostTags>;
}
export interface TagsApiCreateHostTagsRequest {
    /**
     * Specified host name to add new tags
     * @type string
     */
    hostName: string;
    /**
     * Update host tags request body.
     * @type HostTags
     */
    body: HostTags;
    /**
     * Source to add tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags. If no source is specified, defaults to "user".
     * @type string
     */
    source?: string;
}
export interface TagsApiDeleteHostTagsRequest {
    /**
     * Specified host name to delete tags
     * @type string
     */
    hostName: string;
    /**
     * Source of the tags to be deleted. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.
     * @type string
     */
    source?: string;
}
export interface TagsApiGetHostTagsRequest {
    /**
     * Name of the host to retrieve tags for
     * @type string
     */
    hostName: string;
    /**
     * Source to filter. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.
     * @type string
     */
    source?: string;
}
export interface TagsApiListHostTagsRequest {
    /**
     * Source to filter. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags.
     * @type string
     */
    source?: string;
}
export interface TagsApiUpdateHostTagsRequest {
    /**
     * Specified host name to change tags
     * @type string
     */
    hostName: string;
    /**
     * Add tags to host
     * @type HostTags
     */
    body: HostTags;
    /**
     * Source to update tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). Use "user" source for custom-defined tags. If no source specified, defaults to "user".
     * @type string
     */
    source?: string;
}
export declare class TagsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor);
    /**
     * This endpoint allows you to add new tags to a host,
     * optionally specifying what source these tags come from. If tags already exist, appends new tags to the tag list. If no source is specified, defaults to "user".
     * @param param The request object
     */
    createHostTags(param: TagsApiCreateHostTagsRequest, options?: Configuration): Promise<HostTags>;
    /**
     * This endpoint allows you to remove all tags
     * for a single host. If no source is specified, only deletes from the source "User".
     * @param param The request object
     */
    deleteHostTags(param: TagsApiDeleteHostTagsRequest, options?: Configuration): Promise<void>;
    /**
     * Return the list of tags that apply to a given host.
     * @param param The request object
     */
    getHostTags(param: TagsApiGetHostTagsRequest, options?: Configuration): Promise<HostTags>;
    /**
     * Returns a mapping of tags to hosts. For each tag, the response returns a list of host names that contain this tag. There is a restriction of 10k total host names from the org that can be attached to tags and returned.
     * @param param The request object
     */
    listHostTags(param?: TagsApiListHostTagsRequest, options?: Configuration): Promise<TagToHosts>;
    /**
     * This endpoint allows you to update/replace all tags in
     * an integration source with those supplied in the request.
     * @param param The request object
     */
    updateHostTags(param: TagsApiUpdateHostTagsRequest, options?: Configuration): Promise<HostTags>;
}
