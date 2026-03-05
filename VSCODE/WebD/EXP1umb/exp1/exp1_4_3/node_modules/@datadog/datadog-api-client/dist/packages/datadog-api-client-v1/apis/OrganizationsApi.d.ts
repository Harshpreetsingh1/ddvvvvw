import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext, HttpFile } from "../../datadog-api-client-common/http/http";
import { IdpResponse } from "../models/IdpResponse";
import { Organization } from "../models/Organization";
import { OrganizationCreateBody } from "../models/OrganizationCreateBody";
import { OrganizationCreateResponse } from "../models/OrganizationCreateResponse";
import { OrganizationListResponse } from "../models/OrganizationListResponse";
import { OrganizationResponse } from "../models/OrganizationResponse";
import { OrgDowngradedResponse } from "../models/OrgDowngradedResponse";
export declare class OrganizationsApiRequestFactory extends BaseAPIRequestFactory {
    createChildOrg(body: OrganizationCreateBody, _options?: Configuration): Promise<RequestContext>;
    downgradeOrg(publicId: string, _options?: Configuration): Promise<RequestContext>;
    getOrg(publicId: string, _options?: Configuration): Promise<RequestContext>;
    listOrgs(_options?: Configuration): Promise<RequestContext>;
    updateOrg(publicId: string, body: Organization, _options?: Configuration): Promise<RequestContext>;
    uploadIdPForOrg(publicId: string, idpFile: HttpFile, _options?: Configuration): Promise<RequestContext>;
}
export declare class OrganizationsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChildOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    createChildOrg(response: ResponseContext): Promise<OrganizationCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downgradeOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    downgradeOrg(response: ResponseContext): Promise<OrgDowngradedResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOrg(response: ResponseContext): Promise<OrganizationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrgs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOrgs(response: ResponseContext): Promise<OrganizationListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOrg(response: ResponseContext): Promise<OrganizationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadIdPForOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    uploadIdPForOrg(response: ResponseContext): Promise<IdpResponse>;
}
export interface OrganizationsApiCreateChildOrgRequest {
    /**
     * Organization object that needs to be created
     * @type OrganizationCreateBody
     */
    body: OrganizationCreateBody;
}
export interface OrganizationsApiDowngradeOrgRequest {
    /**
     * The `public_id` of the organization you are operating within.
     * @type string
     */
    publicId: string;
}
export interface OrganizationsApiGetOrgRequest {
    /**
     * The `public_id` of the organization you are operating within.
     * @type string
     */
    publicId: string;
}
export interface OrganizationsApiUpdateOrgRequest {
    /**
     * The `public_id` of the organization you are operating within.
     * @type string
     */
    publicId: string;
    /**
     * @type Organization
     */
    body: Organization;
}
export interface OrganizationsApiUploadIdPForOrgRequest {
    /**
     * The `public_id` of the organization you are operating with
     * @type string
     */
    publicId: string;
    /**
     * The path to the XML metadata file you wish to upload.
     * @type HttpFile
     */
    idpFile: HttpFile;
}
export declare class OrganizationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor);
    /**
     * Create a child organization.
     *
     * This endpoint requires the
     * [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/)
     * feature and must be enabled by
     * [contacting support](https://docs.datadoghq.com/help/).
     *
     * Once a new child organization is created, you can interact with it
     * by using the `org.public_id`, `api_key.key`, and
     * `application_key.hash` provided in the response.
     * @param param The request object
     */
    createChildOrg(param: OrganizationsApiCreateChildOrgRequest, options?: Configuration): Promise<OrganizationCreateResponse>;
    /**
     * Only available for MSP customers. Removes a child organization from the hierarchy of the master organization and places the child organization on a 30-day trial.
     * @param param The request object
     */
    downgradeOrg(param: OrganizationsApiDowngradeOrgRequest, options?: Configuration): Promise<OrgDowngradedResponse>;
    /**
     * Get organization information.
     * @param param The request object
     */
    getOrg(param: OrganizationsApiGetOrgRequest, options?: Configuration): Promise<OrganizationResponse>;
    /**
     * This endpoint returns data on your top-level organization.
     * @param param The request object
     */
    listOrgs(options?: Configuration): Promise<OrganizationListResponse>;
    /**
     * Update your organization.
     * @param param The request object
     */
    updateOrg(param: OrganizationsApiUpdateOrgRequest, options?: Configuration): Promise<OrganizationResponse>;
    /**
     * There are a couple of options for updating the Identity Provider (IdP)
     * metadata from your SAML IdP.
     *
     * * **Multipart Form-Data**: Post the IdP metadata file using a form post.
     *
     * * **XML Body:** Post the IdP metadata file as the body of the request.
     * @param param The request object
     */
    uploadIdPForOrg(param: OrganizationsApiUploadIdPForOrgRequest, options?: Configuration): Promise<IdpResponse>;
}
