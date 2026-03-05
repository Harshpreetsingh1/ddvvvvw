import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateTenancyConfigRequest } from "../models/CreateTenancyConfigRequest";
import { TenancyConfig } from "../models/TenancyConfig";
import { TenancyConfigList } from "../models/TenancyConfigList";
import { TenancyProductsList } from "../models/TenancyProductsList";
import { UpdateTenancyConfigRequest } from "../models/UpdateTenancyConfigRequest";
export declare class OCIIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createTenancyConfig(body: CreateTenancyConfigRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTenancyConfig(tenancyOcid: string, _options?: Configuration): Promise<RequestContext>;
    getTenancyConfig(tenancyOcid: string, _options?: Configuration): Promise<RequestContext>;
    getTenancyConfigs(_options?: Configuration): Promise<RequestContext>;
    listTenancyProducts(productKeys: string, _options?: Configuration): Promise<RequestContext>;
    updateTenancyConfig(tenancyOcid: string, body: UpdateTenancyConfigRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class OCIIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTenancyConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTenancyConfig(response: ResponseContext): Promise<TenancyConfig>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTenancyConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTenancyConfig(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTenancyConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTenancyConfig(response: ResponseContext): Promise<TenancyConfig>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTenancyConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTenancyConfigs(response: ResponseContext): Promise<TenancyConfigList>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTenancyProducts
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTenancyProducts(response: ResponseContext): Promise<TenancyProductsList>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTenancyConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateTenancyConfig(response: ResponseContext): Promise<TenancyConfig>;
}
export interface OCIIntegrationApiCreateTenancyConfigRequest {
    /**
     * @type CreateTenancyConfigRequest
     */
    body: CreateTenancyConfigRequest;
}
export interface OCIIntegrationApiDeleteTenancyConfigRequest {
    /**
     * The OCID of the tenancy config to delete.
     * @type string
     */
    tenancyOcid: string;
}
export interface OCIIntegrationApiGetTenancyConfigRequest {
    /**
     * The OCID of the tenancy config to retrieve.
     * @type string
     */
    tenancyOcid: string;
}
export interface OCIIntegrationApiListTenancyProductsRequest {
    /**
     * Comma-separated list of product keys to filter by.
     * @type string
     */
    productKeys: string;
}
export interface OCIIntegrationApiUpdateTenancyConfigRequest {
    /**
     * The OCID of the tenancy config to update.
     * @type string
     */
    tenancyOcid: string;
    /**
     * @type UpdateTenancyConfigRequest
     */
    body: UpdateTenancyConfigRequest;
}
export declare class OCIIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OCIIntegrationApiRequestFactory, responseProcessor?: OCIIntegrationApiResponseProcessor);
    /**
     * Create a new tenancy config to establish monitoring and data collection from your OCI environment. Requires OCI authentication credentials and tenancy details. Warning: Datadog recommends interacting with this endpoint only through the Datadog web UI to ensure all necessary OCI resources have been created and configured properly.
     * @param param The request object
     */
    createTenancyConfig(param: OCIIntegrationApiCreateTenancyConfigRequest, options?: Configuration): Promise<TenancyConfig>;
    /**
     * Delete an existing tenancy config. This will stop all data collection from the specified OCI tenancy and remove the stored configuration. This operation cannot be undone.
     * @param param The request object
     */
    deleteTenancyConfig(param: OCIIntegrationApiDeleteTenancyConfigRequest, options?: Configuration): Promise<void>;
    /**
     * Get a single tenancy config object by its OCID. Returns detailed configuration including authentication credentials, enabled services, region settings, and collection preferences.
     * @param param The request object
     */
    getTenancyConfig(param: OCIIntegrationApiGetTenancyConfigRequest, options?: Configuration): Promise<TenancyConfig>;
    /**
     * Get a list of all configured OCI tenancy integrations. Returns basic information about each tenancy including authentication credentials, region settings, and collection preferences for metrics, logs, and resources.
     * @param param The request object
     */
    getTenancyConfigs(options?: Configuration): Promise<TenancyConfigList>;
    /**
     * Lists the products for a given tenancy. Returns the enabled/disabled status of Datadog products (such as Cloud Security Posture Management) for specific OCI tenancies.
     * @param param The request object
     */
    listTenancyProducts(param: OCIIntegrationApiListTenancyProductsRequest, options?: Configuration): Promise<TenancyProductsList>;
    /**
     * Update an existing tenancy config. You can modify authentication credentials, enable/disable collection types, update service filters, and change region settings. Warning: We recommend using the Datadog web UI to avoid unintended update effects.
     * @param param The request object
     */
    updateTenancyConfig(param: OCIIntegrationApiUpdateTenancyConfigRequest, options?: Configuration): Promise<TenancyConfig>;
}
