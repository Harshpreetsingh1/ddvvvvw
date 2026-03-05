import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext, HttpFile } from "../../datadog-api-client-common/http/http";
import { OrgConfigGetResponse } from "../models/OrgConfigGetResponse";
import { OrgConfigListResponse } from "../models/OrgConfigListResponse";
import { OrgConfigWriteRequest } from "../models/OrgConfigWriteRequest";
export declare class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
    getOrgConfig(orgConfigName: string, _options?: Configuration): Promise<RequestContext>;
    listOrgConfigs(_options?: Configuration): Promise<RequestContext>;
    updateOrgConfig(orgConfigName: string, body: OrgConfigWriteRequest, _options?: Configuration): Promise<RequestContext>;
    uploadIdPMetadata(idpFile?: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class OrganizationsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrgConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOrgConfig(response: ResponseContext): Promise<OrgConfigGetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrgConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOrgConfigs(response: ResponseContext): Promise<OrgConfigListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrgConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOrgConfig(response: ResponseContext): Promise<OrgConfigGetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdPMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    uploadIdPMetadata(response: ResponseContext): Promise<void>;
}
export interface OrganizationsApiGetOrgConfigRequest {
    /**
     * The name of an Org Config.
     * @type string
     */
    orgConfigName: string;
}
export interface OrganizationsApiUpdateOrgConfigRequest {
    /**
     * The name of an Org Config.
     * @type string
     */
    orgConfigName: string;
    /**
     * @type OrgConfigWriteRequest
     */
    body: OrgConfigWriteRequest;
}
export interface OrganizationsApiUploadIdPMetadataRequest {
    /**
     * The IdP metadata XML file
     * @type HttpFile
     */
    idpFile?: HttpFile;
}
export declare class OrganizationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor);
    /**
     * Return the name, description, and value of a specific Org Config.
     * @param param The request object
     */
    getOrgConfig(param: OrganizationsApiGetOrgConfigRequest, options?: Configuration): Promise<OrgConfigGetResponse>;
    /**
     * Returns all Org Configs (name, description, and value).
     * @param param The request object
     */
    listOrgConfigs(options?: Configuration): Promise<OrgConfigListResponse>;
    /**
     * Update the value of a specific Org Config.
     * @param param The request object
     */
    updateOrgConfig(param: OrganizationsApiUpdateOrgConfigRequest, options?: Configuration): Promise<OrgConfigGetResponse>;
    /**
     * Endpoint for uploading IdP metadata for SAML setup.
     *
     * Use this endpoint to upload or replace IdP metadata for SAML login configuration.
     * @param param The request object
     */
    uploadIdPMetadata(param?: OrganizationsApiUploadIdPMetadataRequest, options?: Configuration): Promise<void>;
}
