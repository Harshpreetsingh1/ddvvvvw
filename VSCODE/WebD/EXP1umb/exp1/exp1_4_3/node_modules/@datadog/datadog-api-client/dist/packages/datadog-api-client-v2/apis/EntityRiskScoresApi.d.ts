import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { SecurityEntityRiskScoresResponse } from "../models/SecurityEntityRiskScoresResponse";
export declare class EntityRiskScoresApiRequestFactory extends BaseAPIRequestFactory {
    listEntityRiskScores(from?: number, to?: number, pageSize?: number, pageNumber?: number, pageQueryId?: string, filterSort?: string, filterQuery?: string, entityType?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class EntityRiskScoresApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEntityRiskScores
     * @throws ApiException if the response code was not in [200, 299]
     */
    listEntityRiskScores(response: ResponseContext): Promise<SecurityEntityRiskScoresResponse>;
}
export interface EntityRiskScoresApiListEntityRiskScoresRequest {
    /**
     * Start time for the query in Unix timestamp (milliseconds). Defaults to 2 weeks ago.
     * @type number
     */
    from?: number;
    /**
     * End time for the query in Unix timestamp (milliseconds). Defaults to now.
     * @type number
     */
    to?: number;
    /**
     * Size of the page to return. Maximum is 1000.
     * @type number
     */
    pageSize?: number;
    /**
     * Page number to return (1-indexed).
     * @type number
     */
    pageNumber?: number;
    /**
     * Query ID for pagination consistency.
     * @type string
     */
    pageQueryId?: string;
    /**
     * Sort order for results. Format: `field:direction` where direction is `asc` or `desc`.
     * Supported fields: `riskScore`, `lastDetected`, `firstDetected`, `entityName`, `signalsDetected`.
     * @type string
     */
    filterSort?: string;
    /**
     * Supports filtering by entity attributes, risk scores, severity, and more.
     * Example: `severity:critical AND entityType:aws_iam_user`
     * @type string
     */
    filterQuery?: string;
    /**
     * Filter by entity type(s). Can specify multiple values.
     * @type Array<string>
     */
    entityType?: Array<string>;
}
export declare class EntityRiskScoresApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EntityRiskScoresApiRequestFactory, responseProcessor?: EntityRiskScoresApiResponseProcessor);
    /**
     * Get a list of entity risk scores for your organization. Entity risk scores provide security risk assessment for entities like cloud resources, identities, or services based on detected signals, misconfigurations, and identity risks.
     * @param param The request object
     */
    listEntityRiskScores(param?: EntityRiskScoresApiListEntityRiskScoresRequest, options?: Configuration): Promise<SecurityEntityRiskScoresResponse>;
}
