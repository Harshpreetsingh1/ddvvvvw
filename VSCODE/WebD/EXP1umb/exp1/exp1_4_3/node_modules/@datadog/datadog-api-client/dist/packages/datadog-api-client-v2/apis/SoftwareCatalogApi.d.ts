import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { EntityData } from "../models/EntityData";
import { EntityResponseArray } from "../models/EntityResponseArray";
import { IncludeType } from "../models/IncludeType";
import { KindData } from "../models/KindData";
import { ListEntityCatalogResponse } from "../models/ListEntityCatalogResponse";
import { ListKindCatalogResponse } from "../models/ListKindCatalogResponse";
import { ListRelationCatalogResponse } from "../models/ListRelationCatalogResponse";
import { RelationIncludeType } from "../models/RelationIncludeType";
import { RelationResponse } from "../models/RelationResponse";
import { RelationType } from "../models/RelationType";
import { UpsertCatalogEntityRequest } from "../models/UpsertCatalogEntityRequest";
import { UpsertCatalogEntityResponse } from "../models/UpsertCatalogEntityResponse";
import { UpsertCatalogKindRequest } from "../models/UpsertCatalogKindRequest";
import { UpsertCatalogKindResponse } from "../models/UpsertCatalogKindResponse";
export declare class SoftwareCatalogApiRequestFactory extends BaseAPIRequestFactory {
    deleteCatalogEntity(entityId: string, _options?: Configuration): Promise<RequestContext>;
    deleteCatalogKind(kindId: string, _options?: Configuration): Promise<RequestContext>;
    listCatalogEntity(pageOffset?: number, pageLimit?: number, filterId?: string, filterRef?: string, filterName?: string, filterKind?: string, filterOwner?: string, filterRelationType?: RelationType, filterExcludeSnapshot?: string, include?: IncludeType, includeDiscovered?: boolean, _options?: Configuration): Promise<RequestContext>;
    listCatalogKind(pageOffset?: number, pageLimit?: number, filterId?: string, filterName?: string, _options?: Configuration): Promise<RequestContext>;
    listCatalogRelation(pageOffset?: number, pageLimit?: number, filterType?: RelationType, filterFromRef?: string, filterToRef?: string, include?: RelationIncludeType, includeDiscovered?: boolean, _options?: Configuration): Promise<RequestContext>;
    previewCatalogEntities(_options?: Configuration): Promise<RequestContext>;
    upsertCatalogEntity(body: UpsertCatalogEntityRequest, _options?: Configuration): Promise<RequestContext>;
    upsertCatalogKind(body: UpsertCatalogKindRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SoftwareCatalogApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCatalogEntity
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCatalogEntity(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCatalogKind
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCatalogKind(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCatalogEntity
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCatalogEntity(response: ResponseContext): Promise<ListEntityCatalogResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCatalogKind
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCatalogKind(response: ResponseContext): Promise<ListKindCatalogResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCatalogRelation
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCatalogRelation(response: ResponseContext): Promise<ListRelationCatalogResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to previewCatalogEntities
     * @throws ApiException if the response code was not in [200, 299]
     */
    previewCatalogEntities(response: ResponseContext): Promise<EntityResponseArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertCatalogEntity
     * @throws ApiException if the response code was not in [200, 299]
     */
    upsertCatalogEntity(response: ResponseContext): Promise<UpsertCatalogEntityResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertCatalogKind
     * @throws ApiException if the response code was not in [200, 299]
     */
    upsertCatalogKind(response: ResponseContext): Promise<UpsertCatalogKindResponse>;
}
export interface SoftwareCatalogApiDeleteCatalogEntityRequest {
    /**
     * UUID or Entity Ref.
     * @type string
     */
    entityId: string;
}
export interface SoftwareCatalogApiDeleteCatalogKindRequest {
    /**
     * Entity kind.
     * @type string
     */
    kindId: string;
}
export interface SoftwareCatalogApiListCatalogEntityRequest {
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Maximum number of entities in the response.
     * @type number
     */
    pageLimit?: number;
    /**
     * Filter entities by UUID.
     * @type string
     */
    filterId?: string;
    /**
     * Filter entities by reference
     * @type string
     */
    filterRef?: string;
    /**
     * Filter entities by name.
     * @type string
     */
    filterName?: string;
    /**
     * Filter entities by kind.
     * @type string
     */
    filterKind?: string;
    /**
     * Filter entities by owner.
     * @type string
     */
    filterOwner?: string;
    /**
     * Filter entities by relation type.
     * @type RelationType
     */
    filterRelationType?: RelationType;
    /**
     * Filter entities by excluding snapshotted entities.
     * @type string
     */
    filterExcludeSnapshot?: string;
    /**
     * Include relationship data.
     * @type IncludeType
     */
    include?: IncludeType;
    /**
     * If true, includes discovered services from APM and USM that do not have entity definitions.
     * @type boolean
     */
    includeDiscovered?: boolean;
}
export interface SoftwareCatalogApiListCatalogKindRequest {
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Maximum number of kinds in the response.
     * @type number
     */
    pageLimit?: number;
    /**
     * Filter entities by UUID.
     * @type string
     */
    filterId?: string;
    /**
     * Filter entities by name.
     * @type string
     */
    filterName?: string;
}
export interface SoftwareCatalogApiListCatalogRelationRequest {
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * Maximum number of relations in the response.
     * @type number
     */
    pageLimit?: number;
    /**
     * Filter relations by type.
     * @type RelationType
     */
    filterType?: RelationType;
    /**
     * Filter relations by the reference of the first entity in the relation.
     * @type string
     */
    filterFromRef?: string;
    /**
     * Filter relations by the reference of the second entity in the relation.
     * @type string
     */
    filterToRef?: string;
    /**
     * Include relationship data.
     * @type RelationIncludeType
     */
    include?: RelationIncludeType;
    /**
     * If true, includes relationships discovered by APM and USM.
     * @type boolean
     */
    includeDiscovered?: boolean;
}
export interface SoftwareCatalogApiUpsertCatalogEntityRequest {
    /**
     * Entity YAML or JSON.
     * @type UpsertCatalogEntityRequest
     */
    body: UpsertCatalogEntityRequest;
}
export interface SoftwareCatalogApiUpsertCatalogKindRequest {
    /**
     * Kind YAML or JSON.
     * @type UpsertCatalogKindRequest
     */
    body: UpsertCatalogKindRequest;
}
export declare class SoftwareCatalogApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SoftwareCatalogApiRequestFactory, responseProcessor?: SoftwareCatalogApiResponseProcessor);
    /**
     * Delete a single entity in Software Catalog.
     * @param param The request object
     */
    deleteCatalogEntity(param: SoftwareCatalogApiDeleteCatalogEntityRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a single kind in Software Catalog.
     * @param param The request object
     */
    deleteCatalogKind(param: SoftwareCatalogApiDeleteCatalogKindRequest, options?: Configuration): Promise<void>;
    /**
     * Get a list of entities from Software Catalog.
     * @param param The request object
     */
    listCatalogEntity(param?: SoftwareCatalogApiListCatalogEntityRequest, options?: Configuration): Promise<ListEntityCatalogResponse>;
    /**
     * Provide a paginated version of listCatalogEntity returning a generator with all the items.
     */
    listCatalogEntityWithPagination(param?: SoftwareCatalogApiListCatalogEntityRequest, options?: Configuration): AsyncGenerator<EntityData>;
    /**
     * Get a list of entity kinds from Software Catalog.
     * @param param The request object
     */
    listCatalogKind(param?: SoftwareCatalogApiListCatalogKindRequest, options?: Configuration): Promise<ListKindCatalogResponse>;
    /**
     * Provide a paginated version of listCatalogKind returning a generator with all the items.
     */
    listCatalogKindWithPagination(param?: SoftwareCatalogApiListCatalogKindRequest, options?: Configuration): AsyncGenerator<KindData>;
    /**
     * Get a list of entity relations from Software Catalog.
     * @param param The request object
     */
    listCatalogRelation(param?: SoftwareCatalogApiListCatalogRelationRequest, options?: Configuration): Promise<ListRelationCatalogResponse>;
    /**
     * Provide a paginated version of listCatalogRelation returning a generator with all the items.
     */
    listCatalogRelationWithPagination(param?: SoftwareCatalogApiListCatalogRelationRequest, options?: Configuration): AsyncGenerator<RelationResponse>;
    /**
     * @param param The request object
     */
    previewCatalogEntities(options?: Configuration): Promise<EntityResponseArray>;
    /**
     * Create or update entities in Software Catalog.
     * @param param The request object
     */
    upsertCatalogEntity(param: SoftwareCatalogApiUpsertCatalogEntityRequest, options?: Configuration): Promise<UpsertCatalogEntityResponse>;
    /**
     * Create or update kinds in Software Catalog.
     * @param param The request object
     */
    upsertCatalogKind(param: SoftwareCatalogApiUpsertCatalogKindRequest, options?: Configuration): Promise<UpsertCatalogKindResponse>;
}
