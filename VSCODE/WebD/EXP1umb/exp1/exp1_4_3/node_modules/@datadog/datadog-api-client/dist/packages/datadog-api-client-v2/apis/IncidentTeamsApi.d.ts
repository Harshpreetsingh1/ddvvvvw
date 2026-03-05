import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { IncidentRelatedObject } from "../models/IncidentRelatedObject";
import { IncidentTeamCreateRequest } from "../models/IncidentTeamCreateRequest";
import { IncidentTeamResponse } from "../models/IncidentTeamResponse";
import { IncidentTeamsResponse } from "../models/IncidentTeamsResponse";
import { IncidentTeamUpdateRequest } from "../models/IncidentTeamUpdateRequest";
export declare class IncidentTeamsApiRequestFactory extends BaseAPIRequestFactory {
    createIncidentTeam(body: IncidentTeamCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteIncidentTeam(teamId: string, _options?: Configuration): Promise<RequestContext>;
    getIncidentTeam(teamId: string, include?: IncidentRelatedObject, _options?: Configuration): Promise<RequestContext>;
    listIncidentTeams(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, _options?: Configuration): Promise<RequestContext>;
    updateIncidentTeam(teamId: string, body: IncidentTeamUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class IncidentTeamsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    createIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIncidentTeam(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidentTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIncidentTeams(response: ResponseContext): Promise<IncidentTeamsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse>;
}
export interface IncidentTeamsApiCreateIncidentTeamRequest {
    /**
     * Incident Team Payload.
     * @type IncidentTeamCreateRequest
     */
    body: IncidentTeamCreateRequest;
}
export interface IncidentTeamsApiDeleteIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     */
    teamId: string;
}
export interface IncidentTeamsApiGetIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     */
    teamId: string;
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     */
    include?: IncidentRelatedObject;
}
export interface IncidentTeamsApiListIncidentTeamsRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     */
    include?: IncidentRelatedObject;
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     */
    pageOffset?: number;
    /**
     * A search query that filters teams by name.
     * @type string
     */
    filter?: string;
}
export interface IncidentTeamsApiUpdateIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     */
    teamId: string;
    /**
     * Incident Team Payload.
     * @type IncidentTeamUpdateRequest
     */
    body: IncidentTeamUpdateRequest;
}
export declare class IncidentTeamsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IncidentTeamsApiRequestFactory, responseProcessor?: IncidentTeamsApiResponseProcessor);
    /**
     * Creates a new incident team.
     * @param param The request object
     */
    createIncidentTeam(param: IncidentTeamsApiCreateIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse>;
    /**
     * Deletes an existing incident team.
     * @param param The request object
     */
    deleteIncidentTeam(param: IncidentTeamsApiDeleteIncidentTeamRequest, options?: Configuration): Promise<void>;
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided,
     * the included attribute will contain the users related to these incident teams.
     * @param param The request object
     */
    getIncidentTeam(param: IncidentTeamsApiGetIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse>;
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * @param param The request object
     */
    listIncidentTeams(param?: IncidentTeamsApiListIncidentTeamsRequest, options?: Configuration): Promise<IncidentTeamsResponse>;
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * @param param The request object
     */
    updateIncidentTeam(param: IncidentTeamsApiUpdateIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse>;
}
