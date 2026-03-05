import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { RestrictionPolicyResponse } from "../models/RestrictionPolicyResponse";
import { RestrictionPolicyUpdateRequest } from "../models/RestrictionPolicyUpdateRequest";
export declare class RestrictionPoliciesApiRequestFactory extends BaseAPIRequestFactory {
    deleteRestrictionPolicy(resourceId: string, _options?: Configuration): Promise<RequestContext>;
    getRestrictionPolicy(resourceId: string, _options?: Configuration): Promise<RequestContext>;
    updateRestrictionPolicy(resourceId: string, body: RestrictionPolicyUpdateRequest, allowSelfLockout?: boolean, _options?: Configuration): Promise<RequestContext>;
}
export declare class RestrictionPoliciesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRestrictionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRestrictionPolicy(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRestrictionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRestrictionPolicy(response: ResponseContext): Promise<RestrictionPolicyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRestrictionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRestrictionPolicy(response: ResponseContext): Promise<RestrictionPolicyResponse>;
}
export interface RestrictionPoliciesApiDeleteRestrictionPolicyRequest {
    /**
     * Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`.
     * @type string
     */
    resourceId: string;
}
export interface RestrictionPoliciesApiGetRestrictionPolicyRequest {
    /**
     * Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`.
     * @type string
     */
    resourceId: string;
}
export interface RestrictionPoliciesApiUpdateRestrictionPolicyRequest {
    /**
     * Identifier, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`, `logs-pipeline`.
     * @type string
     */
    resourceId: string;
    /**
     * Restriction policy payload
     * @type RestrictionPolicyUpdateRequest
     */
    body: RestrictionPolicyUpdateRequest;
    /**
     * Allows admins (users with the `user_access_manage` permission) to remove their own access from the resource if set to `true`. By default, this is set to `false`, preventing admins from locking themselves out.
     * @type boolean
     */
    allowSelfLockout?: boolean;
}
export declare class RestrictionPoliciesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RestrictionPoliciesApiRequestFactory, responseProcessor?: RestrictionPoliciesApiResponseProcessor);
    /**
     * Deletes the restriction policy associated with a specified resource.
     * @param param The request object
     */
    deleteRestrictionPolicy(param: RestrictionPoliciesApiDeleteRestrictionPolicyRequest, options?: Configuration): Promise<void>;
    /**
     * Retrieves the restriction policy associated with a specified resource.
     * @param param The request object
     */
    getRestrictionPolicy(param: RestrictionPoliciesApiGetRestrictionPolicyRequest, options?: Configuration): Promise<RestrictionPolicyResponse>;
    /**
     * Updates the restriction policy associated with a resource.
     *
     * #### Supported resources
     * Restriction policies can be applied to the following resources:
     * - Dashboards: `dashboard`
     * - Integration Services: `integration-service`
     * - Integration Webhooks: `integration-webhook`
     * - Notebooks: `notebook`
     * - Powerpacks: `powerpack`
     * - Reference Tables: `reference-table`
     * - Security Rules: `security-rule`
     * - Service Level Objectives: `slo`
     * - Synthetic Global Variables: `synthetics-global-variable`
     * - Synthetic Tests: `synthetics-test`
     * - Synthetic Private Locations: `synthetics-private-location`
     * - Monitors: `monitor`
     * - Workflows: `workflow`
     * - App Builder Apps: `app-builder-app`
     * - Connections: `connection`
     * - Connection Groups: `connection-group`
     * - RUM Applications: `rum-application`
     * - Cross Org Connections: `cross-org-connection`
     * - Spreadsheets: `spreadsheet`
     * - On-Call Schedules: `on-call-schedule`
     * - On-Call Escalation Policies: `on-call-escalation-policy`
     * - On-Call Team Routing Rules: `on-call-team-routing-rules`
     * - Logs Pipelines: `logs-pipeline`
     * - Case Management Projects: `case-management-project`
     *
     * #### Supported relations for resources
     * Resource Type               | Supported Relations
     * ----------------------------|--------------------------
     * Dashboards                  | `viewer`, `editor`
     * Integration Services        | `viewer`, `editor`
     * Integration Webhooks        | `viewer`, `editor`
     * Notebooks                   | `viewer`, `editor`
     * Powerpacks                  | `viewer`, `editor`
     * Security Rules              | `viewer`, `editor`
     * Service Level Objectives    | `viewer`, `editor`
     * Synthetic Global Variables  | `viewer`, `editor`
     * Synthetic Tests             | `viewer`, `editor`
     * Synthetic Private Locations | `viewer`, `editor`
     * Monitors                    | `viewer`, `editor`
     * Reference Tables            | `viewer`, `editor`
     * Workflows                   | `viewer`, `runner`, `editor`
     * App Builder Apps            | `viewer`, `editor`
     * Connections                 | `viewer`, `resolver`, `editor`
     * Connection Groups           | `viewer`, `editor`
     * RUM Application             | `viewer`, `editor`
     * Cross Org Connections       | `viewer`, `editor`
     * Spreadsheets                | `viewer`, `editor`
     * On-Call Schedules           | `viewer`, `overrider`, `editor`
     * On-Call Escalation Policies | `viewer`, `editor`
     * On-Call Team Routing Rules  | `viewer`, `editor`
     * Logs Pipelines              | `viewer`, `processors_editor`, `editor`
     * Case Management Projects    | `viewer`, `contributor`, `manager`
     * @param param The request object
     */
    updateRestrictionPolicy(param: RestrictionPoliciesApiUpdateRestrictionPolicyRequest, options?: Configuration): Promise<RestrictionPolicyResponse>;
}
