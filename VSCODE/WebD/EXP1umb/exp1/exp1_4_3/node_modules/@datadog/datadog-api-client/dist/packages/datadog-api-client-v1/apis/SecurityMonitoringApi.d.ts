import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AddSignalToIncidentRequest } from "../models/AddSignalToIncidentRequest";
import { SignalAssigneeUpdateRequest } from "../models/SignalAssigneeUpdateRequest";
import { SignalStateUpdateRequest } from "../models/SignalStateUpdateRequest";
import { SuccessfulSignalUpdateResponse } from "../models/SuccessfulSignalUpdateResponse";
export declare class SecurityMonitoringApiRequestFactory extends BaseAPIRequestFactory {
    addSecurityMonitoringSignalToIncident(signalId: string, body: AddSignalToIncidentRequest, _options?: Configuration): Promise<RequestContext>;
    editSecurityMonitoringSignalAssignee(signalId: string, body: SignalAssigneeUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    editSecurityMonitoringSignalState(signalId: string, body: SignalStateUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SecurityMonitoringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addSecurityMonitoringSignalToIncident
     * @throws ApiException if the response code was not in [200, 299]
     */
    addSecurityMonitoringSignalToIncident(response: ResponseContext): Promise<SuccessfulSignalUpdateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editSecurityMonitoringSignalAssignee
     * @throws ApiException if the response code was not in [200, 299]
     */
    editSecurityMonitoringSignalAssignee(response: ResponseContext): Promise<SuccessfulSignalUpdateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to editSecurityMonitoringSignalState
     * @throws ApiException if the response code was not in [200, 299]
     */
    editSecurityMonitoringSignalState(response: ResponseContext): Promise<SuccessfulSignalUpdateResponse>;
}
export interface SecurityMonitoringApiAddSecurityMonitoringSignalToIncidentRequest {
    /**
     * The ID of the signal.
     * @type string
     */
    signalId: string;
    /**
     * Attributes describing the signal update.
     * @type AddSignalToIncidentRequest
     */
    body: AddSignalToIncidentRequest;
}
export interface SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest {
    /**
     * The ID of the signal.
     * @type string
     */
    signalId: string;
    /**
     * Attributes describing the signal update.
     * @type SignalAssigneeUpdateRequest
     */
    body: SignalAssigneeUpdateRequest;
}
export interface SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest {
    /**
     * The ID of the signal.
     * @type string
     */
    signalId: string;
    /**
     * Attributes describing the signal update.
     * @type SignalStateUpdateRequest
     */
    body: SignalStateUpdateRequest;
}
export declare class SecurityMonitoringApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SecurityMonitoringApiRequestFactory, responseProcessor?: SecurityMonitoringApiResponseProcessor);
    /**
     * Add a security signal to an incident. This makes it possible to search for signals by incident within the signal explorer and to view the signals on the incident timeline.
     * @param param The request object
     */
    addSecurityMonitoringSignalToIncident(param: SecurityMonitoringApiAddSecurityMonitoringSignalToIncidentRequest, options?: Configuration): Promise<SuccessfulSignalUpdateResponse>;
    /**
     * This endpoint is deprecated - Modify the triage assignee of a security signal.
     * @param param The request object
     */
    editSecurityMonitoringSignalAssignee(param: SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest, options?: Configuration): Promise<SuccessfulSignalUpdateResponse>;
    /**
     * This endpoint is deprecated - Change the triage state of a security signal.
     * @param param The request object
     */
    editSecurityMonitoringSignalState(param: SecurityMonitoringApiEditSecurityMonitoringSignalStateRequest, options?: Configuration): Promise<SuccessfulSignalUpdateResponse>;
}
