import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateDeploymentGateParams } from "../models/CreateDeploymentGateParams";
import { CreateDeploymentRuleParams } from "../models/CreateDeploymentRuleParams";
import { DeploymentGateResponse } from "../models/DeploymentGateResponse";
import { DeploymentGateRulesResponse } from "../models/DeploymentGateRulesResponse";
import { DeploymentRuleResponse } from "../models/DeploymentRuleResponse";
import { UpdateDeploymentGateParams } from "../models/UpdateDeploymentGateParams";
import { UpdateDeploymentRuleParams } from "../models/UpdateDeploymentRuleParams";
export declare class DeploymentGatesApiRequestFactory extends BaseAPIRequestFactory {
    createDeploymentGate(body: CreateDeploymentGateParams, _options?: Configuration): Promise<RequestContext>;
    createDeploymentRule(gateId: string, body: CreateDeploymentRuleParams, _options?: Configuration): Promise<RequestContext>;
    deleteDeploymentGate(id: string, _options?: Configuration): Promise<RequestContext>;
    deleteDeploymentRule(gateId: string, id: string, _options?: Configuration): Promise<RequestContext>;
    getDeploymentGate(id: string, _options?: Configuration): Promise<RequestContext>;
    getDeploymentGateRules(gateId: string, _options?: Configuration): Promise<RequestContext>;
    getDeploymentRule(gateId: string, id: string, _options?: Configuration): Promise<RequestContext>;
    updateDeploymentGate(id: string, body: UpdateDeploymentGateParams, _options?: Configuration): Promise<RequestContext>;
    updateDeploymentRule(gateId: string, id: string, body: UpdateDeploymentRuleParams, _options?: Configuration): Promise<RequestContext>;
}
export declare class DeploymentGatesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDeploymentGate
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDeploymentGate(response: ResponseContext): Promise<DeploymentGateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDeploymentRule(response: ResponseContext): Promise<DeploymentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDeploymentGate
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDeploymentGate(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDeploymentRule(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeploymentGate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDeploymentGate(response: ResponseContext): Promise<DeploymentGateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeploymentGateRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDeploymentGateRules(response: ResponseContext): Promise<DeploymentGateRulesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDeploymentRule(response: ResponseContext): Promise<DeploymentRuleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDeploymentGate
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDeploymentGate(response: ResponseContext): Promise<DeploymentGateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDeploymentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDeploymentRule(response: ResponseContext): Promise<DeploymentRuleResponse>;
}
export interface DeploymentGatesApiCreateDeploymentGateRequest {
    /**
     * @type CreateDeploymentGateParams
     */
    body: CreateDeploymentGateParams;
}
export interface DeploymentGatesApiCreateDeploymentRuleRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    gateId: string;
    /**
     * @type CreateDeploymentRuleParams
     */
    body: CreateDeploymentRuleParams;
}
export interface DeploymentGatesApiDeleteDeploymentGateRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    id: string;
}
export interface DeploymentGatesApiDeleteDeploymentRuleRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    gateId: string;
    /**
     * The ID of the deployment rule.
     * @type string
     */
    id: string;
}
export interface DeploymentGatesApiGetDeploymentGateRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    id: string;
}
export interface DeploymentGatesApiGetDeploymentGateRulesRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    gateId: string;
}
export interface DeploymentGatesApiGetDeploymentRuleRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    gateId: string;
    /**
     * The ID of the deployment rule.
     * @type string
     */
    id: string;
}
export interface DeploymentGatesApiUpdateDeploymentGateRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    id: string;
    /**
     * @type UpdateDeploymentGateParams
     */
    body: UpdateDeploymentGateParams;
}
export interface DeploymentGatesApiUpdateDeploymentRuleRequest {
    /**
     * The ID of the deployment gate.
     * @type string
     */
    gateId: string;
    /**
     * The ID of the deployment rule.
     * @type string
     */
    id: string;
    /**
     * @type UpdateDeploymentRuleParams
     */
    body: UpdateDeploymentRuleParams;
}
export declare class DeploymentGatesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DeploymentGatesApiRequestFactory, responseProcessor?: DeploymentGatesApiResponseProcessor);
    /**
     * Endpoint to create a deployment gate.
     * @param param The request object
     */
    createDeploymentGate(param: DeploymentGatesApiCreateDeploymentGateRequest, options?: Configuration): Promise<DeploymentGateResponse>;
    /**
     * Endpoint to create a deployment rule. A gate for the rule must already exist.
     * @param param The request object
     */
    createDeploymentRule(param: DeploymentGatesApiCreateDeploymentRuleRequest, options?: Configuration): Promise<DeploymentRuleResponse>;
    /**
     * Endpoint to delete a deployment gate. Rules associated with the gate are also deleted.
     * @param param The request object
     */
    deleteDeploymentGate(param: DeploymentGatesApiDeleteDeploymentGateRequest, options?: Configuration): Promise<void>;
    /**
     * Endpoint to delete a deployment rule.
     * @param param The request object
     */
    deleteDeploymentRule(param: DeploymentGatesApiDeleteDeploymentRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Endpoint to get a deployment gate.
     * @param param The request object
     */
    getDeploymentGate(param: DeploymentGatesApiGetDeploymentGateRequest, options?: Configuration): Promise<DeploymentGateResponse>;
    /**
     * Endpoint to get rules for a deployment gate.
     * @param param The request object
     */
    getDeploymentGateRules(param: DeploymentGatesApiGetDeploymentGateRulesRequest, options?: Configuration): Promise<DeploymentGateRulesResponse>;
    /**
     * Endpoint to get a deployment rule.
     * @param param The request object
     */
    getDeploymentRule(param: DeploymentGatesApiGetDeploymentRuleRequest, options?: Configuration): Promise<DeploymentRuleResponse>;
    /**
     * Endpoint to update a deployment gate.
     * @param param The request object
     */
    updateDeploymentGate(param: DeploymentGatesApiUpdateDeploymentGateRequest, options?: Configuration): Promise<DeploymentGateResponse>;
    /**
     * Endpoint to update a deployment rule.
     * @param param The request object
     */
    updateDeploymentRule(param: DeploymentGatesApiUpdateDeploymentRuleRequest, options?: Configuration): Promise<DeploymentRuleResponse>;
}
