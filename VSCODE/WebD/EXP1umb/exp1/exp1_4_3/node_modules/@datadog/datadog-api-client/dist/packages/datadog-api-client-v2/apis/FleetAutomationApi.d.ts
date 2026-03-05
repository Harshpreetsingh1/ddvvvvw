import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { FleetAgentInfoResponse } from "../models/FleetAgentInfoResponse";
import { FleetAgentsResponse } from "../models/FleetAgentsResponse";
import { FleetAgentVersionsResponse } from "../models/FleetAgentVersionsResponse";
import { FleetDeploymentConfigureCreateRequest } from "../models/FleetDeploymentConfigureCreateRequest";
import { FleetDeploymentPackageUpgradeCreateRequest } from "../models/FleetDeploymentPackageUpgradeCreateRequest";
import { FleetDeploymentResponse } from "../models/FleetDeploymentResponse";
import { FleetDeploymentsResponse } from "../models/FleetDeploymentsResponse";
import { FleetScheduleCreateRequest } from "../models/FleetScheduleCreateRequest";
import { FleetSchedulePatchRequest } from "../models/FleetSchedulePatchRequest";
import { FleetScheduleResponse } from "../models/FleetScheduleResponse";
import { FleetSchedulesResponse } from "../models/FleetSchedulesResponse";
export declare class FleetAutomationApiRequestFactory extends BaseAPIRequestFactory {
    cancelFleetDeployment(deploymentId: string, _options?: Configuration): Promise<RequestContext>;
    createFleetDeploymentConfigure(body: FleetDeploymentConfigureCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createFleetDeploymentUpgrade(body: FleetDeploymentPackageUpgradeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createFleetSchedule(body: FleetScheduleCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteFleetSchedule(id: string, _options?: Configuration): Promise<RequestContext>;
    getFleetAgentInfo(agentKey: string, _options?: Configuration): Promise<RequestContext>;
    getFleetDeployment(deploymentId: string, limit?: number, page?: number, _options?: Configuration): Promise<RequestContext>;
    getFleetSchedule(id: string, _options?: Configuration): Promise<RequestContext>;
    listFleetAgents(pageNumber?: number, pageSize?: number, sortAttribute?: string, sortDescending?: boolean, tags?: string, filter?: string, _options?: Configuration): Promise<RequestContext>;
    listFleetAgentVersions(_options?: Configuration): Promise<RequestContext>;
    listFleetDeployments(pageSize?: number, pageOffset?: number, _options?: Configuration): Promise<RequestContext>;
    listFleetSchedules(_options?: Configuration): Promise<RequestContext>;
    triggerFleetSchedule(id: string, _options?: Configuration): Promise<RequestContext>;
    updateFleetSchedule(id: string, body: FleetSchedulePatchRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class FleetAutomationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelFleetDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelFleetDeployment(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFleetDeploymentConfigure
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFleetDeploymentConfigure(response: ResponseContext): Promise<FleetDeploymentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFleetDeploymentUpgrade
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFleetDeploymentUpgrade(response: ResponseContext): Promise<FleetDeploymentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFleetSchedule(response: ResponseContext): Promise<FleetScheduleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteFleetSchedule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFleetAgentInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFleetAgentInfo(response: ResponseContext): Promise<FleetAgentInfoResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFleetDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFleetDeployment(response: ResponseContext): Promise<FleetDeploymentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFleetSchedule(response: ResponseContext): Promise<FleetScheduleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetAgents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetAgents(response: ResponseContext): Promise<FleetAgentsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetAgentVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetAgentVersions(response: ResponseContext): Promise<FleetAgentVersionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetDeployments
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetDeployments(response: ResponseContext): Promise<FleetDeploymentsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetSchedules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetSchedules(response: ResponseContext): Promise<FleetSchedulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    triggerFleetSchedule(response: ResponseContext): Promise<FleetDeploymentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateFleetSchedule(response: ResponseContext): Promise<FleetScheduleResponse>;
}
export interface FleetAutomationApiCancelFleetDeploymentRequest {
    /**
     * The unique identifier of the deployment to cancel.
     * @type string
     */
    deploymentId: string;
}
export interface FleetAutomationApiCreateFleetDeploymentConfigureRequest {
    /**
     * Request payload containing the deployment details.
     * @type FleetDeploymentConfigureCreateRequest
     */
    body: FleetDeploymentConfigureCreateRequest;
}
export interface FleetAutomationApiCreateFleetDeploymentUpgradeRequest {
    /**
     * Request payload containing the package upgrade details.
     * @type FleetDeploymentPackageUpgradeCreateRequest
     */
    body: FleetDeploymentPackageUpgradeCreateRequest;
}
export interface FleetAutomationApiCreateFleetScheduleRequest {
    /**
     * Request payload containing the schedule details.
     * @type FleetScheduleCreateRequest
     */
    body: FleetScheduleCreateRequest;
}
export interface FleetAutomationApiDeleteFleetScheduleRequest {
    /**
     * The unique identifier of the schedule to delete.
     * @type string
     */
    id: string;
}
export interface FleetAutomationApiGetFleetAgentInfoRequest {
    /**
     * The unique identifier (agent key) for the Datadog Agent.
     * @type string
     */
    agentKey: string;
}
export interface FleetAutomationApiGetFleetDeploymentRequest {
    /**
     * The unique identifier of the deployment to retrieve.
     * @type string
     */
    deploymentId: string;
    /**
     * Maximum number of hosts to return per page. Default is 50, maximum is 100.
     * @type number
     */
    limit?: number;
    /**
     * Page index for pagination (zero-based). Use this to retrieve subsequent pages of hosts.
     * @type number
     */
    page?: number;
}
export interface FleetAutomationApiGetFleetScheduleRequest {
    /**
     * The unique identifier of the schedule to retrieve.
     * @type string
     */
    id: string;
}
export interface FleetAutomationApiListFleetAgentsRequest {
    /**
     * Page number for pagination (starts at 0).
     * @type number
     */
    pageNumber?: number;
    /**
     * Number of results per page (must be greater than 0 and less than or equal to 100).
     * @type number
     */
    pageSize?: number;
    /**
     * Attribute to sort by.
     * @type string
     */
    sortAttribute?: string;
    /**
     * Sort order (true for descending, false for ascending).
     * @type boolean
     */
    sortDescending?: boolean;
    /**
     * Comma-separated list of tags to filter agents.
     * @type string
     */
    tags?: string;
    /**
     * Filter string for narrowing down agent results.
     * @type string
     */
    filter?: string;
}
export interface FleetAutomationApiListFleetDeploymentsRequest {
    /**
     * Number of deployments to return per page. Maximum value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Index of the first deployment to return. Use this with `page_size` to paginate through results.
     * @type number
     */
    pageOffset?: number;
}
export interface FleetAutomationApiTriggerFleetScheduleRequest {
    /**
     * The unique identifier of the schedule to trigger.
     * @type string
     */
    id: string;
}
export interface FleetAutomationApiUpdateFleetScheduleRequest {
    /**
     * The unique identifier of the schedule to update.
     * @type string
     */
    id: string;
    /**
     * Request payload containing the fields to update.
     * @type FleetSchedulePatchRequest
     */
    body: FleetSchedulePatchRequest;
}
export declare class FleetAutomationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FleetAutomationApiRequestFactory, responseProcessor?: FleetAutomationApiResponseProcessor);
    /**
     * Cancel an active deployment and stop all pending operations.
     * When you cancel a deployment:
     * - All pending operations on hosts that haven't started yet are stopped
     * - Operations currently in progress on hosts may complete or be interrupted, depending on their current state
     * - Configuration changes or package upgrades already applied to hosts are not rolled back
     *
     * After cancellation, you can view the final state of the deployment using the GET endpoint to see which hosts
     * were successfully updated before the cancellation.
     * @param param The request object
     */
    cancelFleetDeployment(param: FleetAutomationApiCancelFleetDeploymentRequest, options?: Configuration): Promise<void>;
    /**
     * Create a new deployment to apply configuration changes
     * to a fleet of hosts matching the specified filter query.
     *
     * This endpoint supports two types of configuration operations:
     * - `merge-patch`: Merges the provided patch data with the existing configuration file,
     *   creating the file if it doesn't exist
     * - `delete`: Removes the specified configuration file from the target hosts
     *
     * The deployment is created and started automatically. You can specify multiple configuration
     * operations that will be executed in order on each target host. Use the filter query to target
     * specific hosts using the Datadog query syntax.
     * @param param The request object
     */
    createFleetDeploymentConfigure(param: FleetAutomationApiCreateFleetDeploymentConfigureRequest, options?: Configuration): Promise<FleetDeploymentResponse>;
    /**
     * Create and immediately start a new package upgrade
     * on hosts matching the specified filter query.
     *
     * This endpoint allows you to upgrade the Datadog Agent to a specific version
     * on hosts matching the specified filter query.
     *
     * The deployment is created and started automatically. The system will:
     * 1. Identify all hosts matching the filter query
     * 2. Validate that the specified version is available
     * 3. Begin rolling out the package upgrade to the target hosts
     * @param param The request object
     */
    createFleetDeploymentUpgrade(param: FleetAutomationApiCreateFleetDeploymentUpgradeRequest, options?: Configuration): Promise<FleetDeploymentResponse>;
    /**
     * Create a new schedule for automated package upgrades.
     *
     * Schedules define when and how often to automatically deploy package upgrades to a fleet
     * of hosts. Each schedule includes:
     * - A filter query to select target hosts
     * - A recurrence rule defining maintenance windows
     * - A version strategy (e.g., always latest, or N versions behind latest)
     *
     * When the schedule triggers during a maintenance window, it automatically creates a
     * deployment that upgrades the Datadog Agent to the specified version on all matching hosts.
     * @param param The request object
     */
    createFleetSchedule(param: FleetAutomationApiCreateFleetScheduleRequest, options?: Configuration): Promise<FleetScheduleResponse>;
    /**
     * Delete a schedule permanently.
     *
     * When you delete a schedule:
     * - The schedule is permanently removed and will no longer create deployments
     * - Any deployments already created by this schedule are not affected
     * - This action cannot be undone
     *
     * If you want to temporarily stop a schedule from creating deployments, consider
     * updating its status to "inactive" instead of deleting it.
     * @param param The request object
     */
    deleteFleetSchedule(param: FleetAutomationApiDeleteFleetScheduleRequest, options?: Configuration): Promise<void>;
    /**
     * Retrieve detailed information about a specific Datadog Agent.
     * This endpoint returns comprehensive information about an agent including:
     * - Agent details and metadata
     * - Configured integrations organized by status (working, warning, error, missing)
     * - Detected integrations
     * - Configuration files and layers
     * @param param The request object
     */
    getFleetAgentInfo(param: FleetAutomationApiGetFleetAgentInfoRequest, options?: Configuration): Promise<FleetAgentInfoResponse>;
    /**
     * Retrieve detailed information about a specific deployment using its unique identifier.
     * This endpoint returns comprehensive information about a deployment, including:
     * - Deployment metadata (ID, type, filter query)
     * - Total number of target hosts
     * - Current high-level status (pending, running, succeeded, failed)
     * - Estimated completion time
     * - Configuration operations that were or are being applied
     * - Detailed host list: A paginated array of hosts included in this deployment with individual
     *   host status, current package versions, and any errors
     *
     * The host list provides visibility into the per-host execution status, allowing you to:
     * - Monitor which hosts have completed successfully
     * - Identify hosts that are still in progress
     * - Investigate failures on specific hosts
     * - View current package versions installed on each host (including initial, target, and current
     *   versions for each package)
     *
     * Pagination: Use the `limit` and `page` query parameters to paginate through hosts. The response
     * includes pagination metadata in the `meta.hosts` field with information about the current page,
     * total pages, and total host count. The default page size is 50 hosts, with a maximum of 100.
     * @param param The request object
     */
    getFleetDeployment(param: FleetAutomationApiGetFleetDeploymentRequest, options?: Configuration): Promise<FleetDeploymentResponse>;
    /**
     * Retrieve detailed information about a specific schedule using its unique identifier.
     *
     * This endpoint returns comprehensive information about a schedule, including:
     * - Schedule metadata (ID, name, creation/update timestamps)
     * - Filter query for selecting target hosts
     * - Recurrence rule defining when deployments are triggered
     * - Version strategy for package upgrades
     * - Current status (active or inactive)
     * @param param The request object
     */
    getFleetSchedule(param: FleetAutomationApiGetFleetScheduleRequest, options?: Configuration): Promise<FleetScheduleResponse>;
    /**
     * Retrieve a paginated list of all Datadog Agents.
     * This endpoint returns a paginated list of all Datadog Agents with support for pagination, sorting, and filtering.
     * Use the `page_number` and `page_size` query parameters to paginate through results.
     * @param param The request object
     */
    listFleetAgents(param?: FleetAutomationApiListFleetAgentsRequest, options?: Configuration): Promise<FleetAgentsResponse>;
    /**
     * Retrieve a list of all available Datadog Agent versions.
     *
     * This endpoint returns the available Agent versions that can be deployed to your fleet.
     * These versions are used when creating deployments or configuring schedules for
     * automated Agent upgrades.
     * @param param The request object
     */
    listFleetAgentVersions(options?: Configuration): Promise<FleetAgentVersionsResponse>;
    /**
     * Retrieve a list of all deployments for fleet automation.
     * Use the `page_size` and `page_offset` parameters to paginate results.
     * @param param The request object
     */
    listFleetDeployments(param?: FleetAutomationApiListFleetDeploymentsRequest, options?: Configuration): Promise<FleetDeploymentsResponse>;
    /**
     * Retrieve a list of all schedules for automated fleet deployments.
     *
     * Schedules allow you to automate package upgrades by defining maintenance windows
     * and recurrence rules. Each schedule automatically creates deployments based on its
     * configuration.
     * @param param The request object
     */
    listFleetSchedules(options?: Configuration): Promise<FleetSchedulesResponse>;
    /**
     * Manually trigger a schedule to immediately create and start a deployment.
     *
     * This endpoint allows you to manually initiate a deployment using the schedule's
     * configuration, without waiting for the next scheduled maintenance window. This is
     * useful for:
     * - Testing a schedule before it runs automatically
     * - Performing an emergency update outside the regular maintenance window
     * - Creating an ad-hoc deployment with the same settings as a schedule
     *
     * The deployment is created immediately with:
     * - The same filter query as the schedule
     * - The package version determined by the schedule's version strategy
     * - All matching hosts as targets
     *
     * The manually triggered deployment is independent of the schedule and does not
     * affect the schedule's normal recurrence pattern.
     * @param param The request object
     */
    triggerFleetSchedule(param: FleetAutomationApiTriggerFleetScheduleRequest, options?: Configuration): Promise<FleetDeploymentResponse>;
    /**
     * Partially update a schedule by providing only the fields you want to change.
     *
     * This endpoint allows you to modify specific attributes of a schedule without
     * affecting other fields. Common use cases include:
     * - Changing the schedule status between active and inactive
     * - Updating the maintenance window times
     * - Modifying the filter query to target different hosts
     * - Adjusting the version strategy
     *
     * Only include the fields you want to update in the request body. All fields
     * are optional in a PATCH request.
     * @param param The request object
     */
    updateFleetSchedule(param: FleetAutomationApiUpdateFleetScheduleRequest, options?: Configuration): Promise<FleetScheduleResponse>;
}
