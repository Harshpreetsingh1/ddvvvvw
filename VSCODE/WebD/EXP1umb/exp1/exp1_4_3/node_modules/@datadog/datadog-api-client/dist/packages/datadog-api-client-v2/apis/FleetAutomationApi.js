"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAutomationApi = exports.FleetAutomationApiResponseProcessor = exports.FleetAutomationApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class FleetAutomationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    cancelFleetDeployment(deploymentId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'cancelFleetDeployment'");
            if (!_config.unstableOperations["v2.cancelFleetDeployment"]) {
                throw new Error("Unstable operation 'cancelFleetDeployment' is disabled");
            }
            // verify required parameter 'deploymentId' is not null or undefined
            if (deploymentId === null || deploymentId === undefined) {
                throw new baseapi_1.RequiredError("deploymentId", "cancelFleetDeployment");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/deployments/{deployment_id}/cancel".replace("{deployment_id}", encodeURIComponent(String(deploymentId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.cancelFleetDeployment")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createFleetDeploymentConfigure(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createFleetDeploymentConfigure'");
            if (!_config.unstableOperations["v2.createFleetDeploymentConfigure"]) {
                throw new Error("Unstable operation 'createFleetDeploymentConfigure' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createFleetDeploymentConfigure");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/deployments/configure";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.createFleetDeploymentConfigure")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "FleetDeploymentConfigureCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createFleetDeploymentUpgrade(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createFleetDeploymentUpgrade'");
            if (!_config.unstableOperations["v2.createFleetDeploymentUpgrade"]) {
                throw new Error("Unstable operation 'createFleetDeploymentUpgrade' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createFleetDeploymentUpgrade");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/deployments/upgrade";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.createFleetDeploymentUpgrade")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "FleetDeploymentPackageUpgradeCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createFleetSchedule(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createFleetSchedule'");
            if (!_config.unstableOperations["v2.createFleetSchedule"]) {
                throw new Error("Unstable operation 'createFleetSchedule' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createFleetSchedule");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/schedules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.createFleetSchedule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "FleetScheduleCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteFleetSchedule(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteFleetSchedule'");
            if (!_config.unstableOperations["v2.deleteFleetSchedule"]) {
                throw new Error("Unstable operation 'deleteFleetSchedule' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "deleteFleetSchedule");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/schedules/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.deleteFleetSchedule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getFleetAgentInfo(agentKey, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getFleetAgentInfo'");
            if (!_config.unstableOperations["v2.getFleetAgentInfo"]) {
                throw new Error("Unstable operation 'getFleetAgentInfo' is disabled");
            }
            // verify required parameter 'agentKey' is not null or undefined
            if (agentKey === null || agentKey === undefined) {
                throw new baseapi_1.RequiredError("agentKey", "getFleetAgentInfo");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/agents/{agent_key}".replace("{agent_key}", encodeURIComponent(String(agentKey)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.getFleetAgentInfo")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getFleetDeployment(deploymentId, limit, page, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getFleetDeployment'");
            if (!_config.unstableOperations["v2.getFleetDeployment"]) {
                throw new Error("Unstable operation 'getFleetDeployment' is disabled");
            }
            // verify required parameter 'deploymentId' is not null or undefined
            if (deploymentId === null || deploymentId === undefined) {
                throw new baseapi_1.RequiredError("deploymentId", "getFleetDeployment");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/deployments/{deployment_id}".replace("{deployment_id}", encodeURIComponent(String(deploymentId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.getFleetDeployment")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int64"), "");
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "int64"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getFleetSchedule(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getFleetSchedule'");
            if (!_config.unstableOperations["v2.getFleetSchedule"]) {
                throw new Error("Unstable operation 'getFleetSchedule' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "getFleetSchedule");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/schedules/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.getFleetSchedule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listFleetAgents(pageNumber, pageSize, sortAttribute, sortDescending, tags, filter, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listFleetAgents'");
            if (!_config.unstableOperations["v2.listFleetAgents"]) {
                throw new Error("Unstable operation 'listFleetAgents' is disabled");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/agents";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.listFleetAgents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page_number", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page_size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (sortAttribute !== undefined) {
                requestContext.setQueryParam("sort_attribute", ObjectSerializer_1.ObjectSerializer.serialize(sortAttribute, "string", ""), "");
            }
            if (sortDescending !== undefined) {
                requestContext.setQueryParam("sort_descending", ObjectSerializer_1.ObjectSerializer.serialize(sortDescending, "boolean", ""), "");
            }
            if (tags !== undefined) {
                requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""), "");
            }
            if (filter !== undefined) {
                requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listFleetAgentVersions(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listFleetAgentVersions'");
            if (!_config.unstableOperations["v2.listFleetAgentVersions"]) {
                throw new Error("Unstable operation 'listFleetAgentVersions' is disabled");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/agent_versions";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.listFleetAgentVersions")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listFleetDeployments(pageSize, pageOffset, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listFleetDeployments'");
            if (!_config.unstableOperations["v2.listFleetDeployments"]) {
                throw new Error("Unstable operation 'listFleetDeployments' is disabled");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/deployments";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.listFleetDeployments")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page_size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (pageOffset !== undefined) {
                requestContext.setQueryParam("page_offset", ObjectSerializer_1.ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listFleetSchedules(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listFleetSchedules'");
            if (!_config.unstableOperations["v2.listFleetSchedules"]) {
                throw new Error("Unstable operation 'listFleetSchedules' is disabled");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/schedules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.listFleetSchedules")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    triggerFleetSchedule(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'triggerFleetSchedule'");
            if (!_config.unstableOperations["v2.triggerFleetSchedule"]) {
                throw new Error("Unstable operation 'triggerFleetSchedule' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "triggerFleetSchedule");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/schedules/{id}/trigger".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.triggerFleetSchedule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateFleetSchedule(id, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateFleetSchedule'");
            if (!_config.unstableOperations["v2.updateFleetSchedule"]) {
                throw new Error("Unstable operation 'updateFleetSchedule' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "updateFleetSchedule");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateFleetSchedule");
            }
            // Path Params
            const localVarPath = "/api/unstable/fleet/schedules/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.FleetAutomationApi.updateFleetSchedule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "FleetSchedulePatchRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
}
exports.FleetAutomationApiRequestFactory = FleetAutomationApiRequestFactory;
class FleetAutomationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelFleetDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelFleetDeployment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                return;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFleetDeploymentConfigure
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFleetDeploymentConfigure(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFleetDeploymentUpgrade
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFleetDeploymentUpgrade(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createFleetSchedule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetScheduleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetScheduleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteFleetSchedule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                return;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFleetAgentInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFleetAgentInfo(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetAgentInfoResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetAgentInfoResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFleetDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFleetDeployment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getFleetSchedule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetScheduleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetScheduleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetAgents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetAgents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetAgentsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetAgentsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetAgentVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetAgentVersions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetAgentVersionsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetAgentVersionsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetDeployments
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetDeployments(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFleetSchedules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listFleetSchedules(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetSchedulesResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetSchedulesResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    triggerFleetSchedule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetDeploymentResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFleetSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateFleetSchedule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetScheduleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FleetScheduleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.FleetAutomationApiResponseProcessor = FleetAutomationApiResponseProcessor;
class FleetAutomationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new FleetAutomationApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new FleetAutomationApiResponseProcessor();
    }
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
    cancelFleetDeployment(param, options) {
        const requestContextPromise = this.requestFactory.cancelFleetDeployment(param.deploymentId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.cancelFleetDeployment(responseContext);
            });
        });
    }
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
    createFleetDeploymentConfigure(param, options) {
        const requestContextPromise = this.requestFactory.createFleetDeploymentConfigure(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createFleetDeploymentConfigure(responseContext);
            });
        });
    }
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
    createFleetDeploymentUpgrade(param, options) {
        const requestContextPromise = this.requestFactory.createFleetDeploymentUpgrade(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createFleetDeploymentUpgrade(responseContext);
            });
        });
    }
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
    createFleetSchedule(param, options) {
        const requestContextPromise = this.requestFactory.createFleetSchedule(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createFleetSchedule(responseContext);
            });
        });
    }
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
    deleteFleetSchedule(param, options) {
        const requestContextPromise = this.requestFactory.deleteFleetSchedule(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteFleetSchedule(responseContext);
            });
        });
    }
    /**
     * Retrieve detailed information about a specific Datadog Agent.
     * This endpoint returns comprehensive information about an agent including:
     * - Agent details and metadata
     * - Configured integrations organized by status (working, warning, error, missing)
     * - Detected integrations
     * - Configuration files and layers
     * @param param The request object
     */
    getFleetAgentInfo(param, options) {
        const requestContextPromise = this.requestFactory.getFleetAgentInfo(param.agentKey, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getFleetAgentInfo(responseContext);
            });
        });
    }
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
    getFleetDeployment(param, options) {
        const requestContextPromise = this.requestFactory.getFleetDeployment(param.deploymentId, param.limit, param.page, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getFleetDeployment(responseContext);
            });
        });
    }
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
    getFleetSchedule(param, options) {
        const requestContextPromise = this.requestFactory.getFleetSchedule(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getFleetSchedule(responseContext);
            });
        });
    }
    /**
     * Retrieve a paginated list of all Datadog Agents.
     * This endpoint returns a paginated list of all Datadog Agents with support for pagination, sorting, and filtering.
     * Use the `page_number` and `page_size` query parameters to paginate through results.
     * @param param The request object
     */
    listFleetAgents(param = {}, options) {
        const requestContextPromise = this.requestFactory.listFleetAgents(param.pageNumber, param.pageSize, param.sortAttribute, param.sortDescending, param.tags, param.filter, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listFleetAgents(responseContext);
            });
        });
    }
    /**
     * Retrieve a list of all available Datadog Agent versions.
     *
     * This endpoint returns the available Agent versions that can be deployed to your fleet.
     * These versions are used when creating deployments or configuring schedules for
     * automated Agent upgrades.
     * @param param The request object
     */
    listFleetAgentVersions(options) {
        const requestContextPromise = this.requestFactory.listFleetAgentVersions(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listFleetAgentVersions(responseContext);
            });
        });
    }
    /**
     * Retrieve a list of all deployments for fleet automation.
     * Use the `page_size` and `page_offset` parameters to paginate results.
     * @param param The request object
     */
    listFleetDeployments(param = {}, options) {
        const requestContextPromise = this.requestFactory.listFleetDeployments(param.pageSize, param.pageOffset, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listFleetDeployments(responseContext);
            });
        });
    }
    /**
     * Retrieve a list of all schedules for automated fleet deployments.
     *
     * Schedules allow you to automate package upgrades by defining maintenance windows
     * and recurrence rules. Each schedule automatically creates deployments based on its
     * configuration.
     * @param param The request object
     */
    listFleetSchedules(options) {
        const requestContextPromise = this.requestFactory.listFleetSchedules(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listFleetSchedules(responseContext);
            });
        });
    }
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
    triggerFleetSchedule(param, options) {
        const requestContextPromise = this.requestFactory.triggerFleetSchedule(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.triggerFleetSchedule(responseContext);
            });
        });
    }
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
    updateFleetSchedule(param, options) {
        const requestContextPromise = this.requestFactory.updateFleetSchedule(param.id, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateFleetSchedule(responseContext);
            });
        });
    }
}
exports.FleetAutomationApi = FleetAutomationApi;
//# sourceMappingURL=FleetAutomationApi.js.map