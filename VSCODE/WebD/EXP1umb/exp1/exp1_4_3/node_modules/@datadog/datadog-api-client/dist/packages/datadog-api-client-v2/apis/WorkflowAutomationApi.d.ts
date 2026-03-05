import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateWorkflowRequest } from "../models/CreateWorkflowRequest";
import { CreateWorkflowResponse } from "../models/CreateWorkflowResponse";
import { GetWorkflowResponse } from "../models/GetWorkflowResponse";
import { UpdateWorkflowRequest } from "../models/UpdateWorkflowRequest";
import { UpdateWorkflowResponse } from "../models/UpdateWorkflowResponse";
import { WorkflowInstanceCreateRequest } from "../models/WorkflowInstanceCreateRequest";
import { WorkflowInstanceCreateResponse } from "../models/WorkflowInstanceCreateResponse";
import { WorkflowListInstancesResponse } from "../models/WorkflowListInstancesResponse";
import { WorklflowCancelInstanceResponse } from "../models/WorklflowCancelInstanceResponse";
import { WorklflowGetInstanceResponse } from "../models/WorklflowGetInstanceResponse";
export declare class WorkflowAutomationApiRequestFactory extends BaseAPIRequestFactory {
    cancelWorkflowInstance(workflowId: string, instanceId: string, _options?: Configuration): Promise<RequestContext>;
    createWorkflow(body: CreateWorkflowRequest, _options?: Configuration): Promise<RequestContext>;
    createWorkflowInstance(workflowId: string, body: WorkflowInstanceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteWorkflow(workflowId: string, _options?: Configuration): Promise<RequestContext>;
    getWorkflow(workflowId: string, _options?: Configuration): Promise<RequestContext>;
    getWorkflowInstance(workflowId: string, instanceId: string, _options?: Configuration): Promise<RequestContext>;
    listWorkflowInstances(workflowId: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext>;
    updateWorkflow(workflowId: string, body: UpdateWorkflowRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class WorkflowAutomationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelWorkflowInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelWorkflowInstance(response: ResponseContext): Promise<WorklflowCancelInstanceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
    createWorkflow(response: ResponseContext): Promise<CreateWorkflowResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWorkflowInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    createWorkflowInstance(response: ResponseContext): Promise<WorkflowInstanceCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteWorkflow(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
    getWorkflow(response: ResponseContext): Promise<GetWorkflowResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWorkflowInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
    getWorkflowInstance(response: ResponseContext): Promise<WorklflowGetInstanceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listWorkflowInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
    listWorkflowInstances(response: ResponseContext): Promise<WorkflowListInstancesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateWorkflow(response: ResponseContext): Promise<UpdateWorkflowResponse>;
}
export interface WorkflowAutomationApiCancelWorkflowInstanceRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
    /**
     * The ID of the workflow instance.
     * @type string
     */
    instanceId: string;
}
export interface WorkflowAutomationApiCreateWorkflowRequest {
    /**
     * @type CreateWorkflowRequest
     */
    body: CreateWorkflowRequest;
}
export interface WorkflowAutomationApiCreateWorkflowInstanceRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
    /**
     * @type WorkflowInstanceCreateRequest
     */
    body: WorkflowInstanceCreateRequest;
}
export interface WorkflowAutomationApiDeleteWorkflowRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
}
export interface WorkflowAutomationApiGetWorkflowRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
}
export interface WorkflowAutomationApiGetWorkflowInstanceRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
    /**
     * The ID of the workflow instance.
     * @type string
     */
    instanceId: string;
}
export interface WorkflowAutomationApiListWorkflowInstancesRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
    /**
     * Size for a given page. The maximum allowed value is 100.
     * @type number
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     */
    pageNumber?: number;
}
export interface WorkflowAutomationApiUpdateWorkflowRequest {
    /**
     * The ID of the workflow.
     * @type string
     */
    workflowId: string;
    /**
     * @type UpdateWorkflowRequest
     */
    body: UpdateWorkflowRequest;
}
export declare class WorkflowAutomationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WorkflowAutomationApiRequestFactory, responseProcessor?: WorkflowAutomationApiResponseProcessor);
    /**
     * Cancels a specific execution of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    cancelWorkflowInstance(param: WorkflowAutomationApiCancelWorkflowInstanceRequest, options?: Configuration): Promise<WorklflowCancelInstanceResponse>;
    /**
     * Create a new workflow, returning the workflow ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    createWorkflow(param: WorkflowAutomationApiCreateWorkflowRequest, options?: Configuration): Promise<CreateWorkflowResponse>;
    /**
     * Execute the given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    createWorkflowInstance(param: WorkflowAutomationApiCreateWorkflowInstanceRequest, options?: Configuration): Promise<WorkflowInstanceCreateResponse>;
    /**
     * Delete a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    deleteWorkflow(param: WorkflowAutomationApiDeleteWorkflowRequest, options?: Configuration): Promise<void>;
    /**
     * Get a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    getWorkflow(param: WorkflowAutomationApiGetWorkflowRequest, options?: Configuration): Promise<GetWorkflowResponse>;
    /**
     * Get a specific execution of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    getWorkflowInstance(param: WorkflowAutomationApiGetWorkflowInstanceRequest, options?: Configuration): Promise<WorklflowGetInstanceResponse>;
    /**
     * List all instances of a given workflow. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    listWorkflowInstances(param: WorkflowAutomationApiListWorkflowInstancesRequest, options?: Configuration): Promise<WorkflowListInstancesResponse>;
    /**
     * Update a workflow by ID. This API requires a [registered application key](https://docs.datadoghq.com/api/latest/action-connection/#register-a-new-app-key). Alternatively, you can configure these permissions [in the UI](https://docs.datadoghq.com/account_management/api-app-keys/#actions-api-access).
     * @param param The request object
     */
    updateWorkflow(param: WorkflowAutomationApiUpdateWorkflowRequest, options?: Configuration): Promise<UpdateWorkflowResponse>;
}
