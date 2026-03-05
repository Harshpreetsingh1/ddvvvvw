import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ListPowerpacksResponse } from "../models/ListPowerpacksResponse";
import { Powerpack } from "../models/Powerpack";
import { PowerpackData } from "../models/PowerpackData";
import { PowerpackResponse } from "../models/PowerpackResponse";
export declare class PowerpackApiRequestFactory extends BaseAPIRequestFactory {
    createPowerpack(body: Powerpack, _options?: Configuration): Promise<RequestContext>;
    deletePowerpack(powerpackId: string, _options?: Configuration): Promise<RequestContext>;
    getPowerpack(powerpackId: string, _options?: Configuration): Promise<RequestContext>;
    listPowerpacks(pageLimit?: number, pageOffset?: number, _options?: Configuration): Promise<RequestContext>;
    updatePowerpack(powerpackId: string, body: Powerpack, _options?: Configuration): Promise<RequestContext>;
}
export declare class PowerpackApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPowerpack(response: ResponseContext): Promise<PowerpackResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePowerpack(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPowerpack(response: ResponseContext): Promise<PowerpackResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPowerpacks
     * @throws ApiException if the response code was not in [200, 299]
     */
    listPowerpacks(response: ResponseContext): Promise<ListPowerpacksResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePowerpack(response: ResponseContext): Promise<PowerpackResponse>;
}
export interface PowerpackApiCreatePowerpackRequest {
    /**
     * Create a powerpack request body.
     * @type Powerpack
     */
    body: Powerpack;
}
export interface PowerpackApiDeletePowerpackRequest {
    /**
     * Powerpack id
     * @type string
     */
    powerpackId: string;
}
export interface PowerpackApiGetPowerpackRequest {
    /**
     * ID of the powerpack.
     * @type string
     */
    powerpackId: string;
}
export interface PowerpackApiListPowerpacksRequest {
    /**
     * Maximum number of powerpacks in the response.
     * @type number
     */
    pageLimit?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
}
export interface PowerpackApiUpdatePowerpackRequest {
    /**
     * ID of the powerpack.
     * @type string
     */
    powerpackId: string;
    /**
     * Update a powerpack request body.
     * @type Powerpack
     */
    body: Powerpack;
}
export declare class PowerpackApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PowerpackApiRequestFactory, responseProcessor?: PowerpackApiResponseProcessor);
    /**
     * Create a powerpack.
     * @param param The request object
     */
    createPowerpack(param: PowerpackApiCreatePowerpackRequest, options?: Configuration): Promise<PowerpackResponse>;
    /**
     * Delete a powerpack.
     * @param param The request object
     */
    deletePowerpack(param: PowerpackApiDeletePowerpackRequest, options?: Configuration): Promise<void>;
    /**
     * Get a powerpack.
     * @param param The request object
     */
    getPowerpack(param: PowerpackApiGetPowerpackRequest, options?: Configuration): Promise<PowerpackResponse>;
    /**
     * Get a list of all powerpacks.
     * @param param The request object
     */
    listPowerpacks(param?: PowerpackApiListPowerpacksRequest, options?: Configuration): Promise<ListPowerpacksResponse>;
    /**
     * Provide a paginated version of listPowerpacks returning a generator with all the items.
     */
    listPowerpacksWithPagination(param?: PowerpackApiListPowerpacksRequest, options?: Configuration): AsyncGenerator<PowerpackData>;
    /**
     * Update a powerpack.
     * @param param The request object
     */
    updatePowerpack(param: PowerpackApiUpdatePowerpackRequest, options?: Configuration): Promise<PowerpackResponse>;
}
