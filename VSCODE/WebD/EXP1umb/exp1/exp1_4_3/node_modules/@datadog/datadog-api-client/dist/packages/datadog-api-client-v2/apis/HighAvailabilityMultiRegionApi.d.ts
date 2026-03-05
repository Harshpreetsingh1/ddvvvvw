import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { HamrOrgConnectionRequest } from "../models/HamrOrgConnectionRequest";
import { HamrOrgConnectionResponse } from "../models/HamrOrgConnectionResponse";
export declare class HighAvailabilityMultiRegionApiRequestFactory extends BaseAPIRequestFactory {
    createHamrOrgConnection(body: HamrOrgConnectionRequest, _options?: Configuration): Promise<RequestContext>;
    getHamrOrgConnection(_options?: Configuration): Promise<RequestContext>;
}
export declare class HighAvailabilityMultiRegionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createHamrOrgConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    createHamrOrgConnection(response: ResponseContext): Promise<HamrOrgConnectionResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHamrOrgConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHamrOrgConnection(response: ResponseContext): Promise<HamrOrgConnectionResponse>;
}
export interface HighAvailabilityMultiRegionApiCreateHamrOrgConnectionRequest {
    /**
     * @type HamrOrgConnectionRequest
     */
    body: HamrOrgConnectionRequest;
}
export declare class HighAvailabilityMultiRegionApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: HighAvailabilityMultiRegionApiRequestFactory, responseProcessor?: HighAvailabilityMultiRegionApiResponseProcessor);
    /**
     * Create or update the High Availability Multi-Region (HAMR) organization connection.
     * This endpoint allows you to configure the HAMR connection between the authenticated organization
     * and a target organization, including setting the connection status (ONBOARDING, PASSIVE, FAILOVER, ACTIVE, RECOVERY)
     * @param param The request object
     */
    createHamrOrgConnection(param: HighAvailabilityMultiRegionApiCreateHamrOrgConnectionRequest, options?: Configuration): Promise<HamrOrgConnectionResponse>;
    /**
     * Retrieve the High Availability Multi-Region (HAMR) organization connection details for the authenticated organization.
     * This endpoint returns information about the HAMR connection configuration, including the target organization,
     * datacenter, status, and whether this is the primary or secondary organization in the HAMR relationship.
     * @param param The request object
     */
    getHamrOrgConnection(options?: Configuration): Promise<HamrOrgConnectionResponse>;
}
