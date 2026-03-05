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
exports.CSMThreatsApi = exports.CSMThreatsApiResponseProcessor = exports.CSMThreatsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class CSMThreatsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createCloudWorkloadSecurityAgentRule(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createCloudWorkloadSecurityAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.createCloudWorkloadSecurityAgentRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createCSMThreatsAgentPolicy(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createCSMThreatsAgentPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/policy";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.createCSMThreatsAgentPolicy")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentPolicyCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createCSMThreatsAgentRule(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createCSMThreatsAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/agent_rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.createCSMThreatsAgentRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteCloudWorkloadSecurityAgentRule(agentRuleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'agentRuleId' is not null or undefined
            if (agentRuleId === null || agentRuleId === undefined) {
                throw new baseapi_1.RequiredError("agentRuleId", "deleteCloudWorkloadSecurityAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace("{agent_rule_id}", encodeURIComponent(String(agentRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.deleteCloudWorkloadSecurityAgentRule")
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
    deleteCSMThreatsAgentPolicy(policyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'policyId' is not null or undefined
            if (policyId === null || policyId === undefined) {
                throw new baseapi_1.RequiredError("policyId", "deleteCSMThreatsAgentPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/policy/{policy_id}".replace("{policy_id}", encodeURIComponent(String(policyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.deleteCSMThreatsAgentPolicy")
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
    deleteCSMThreatsAgentRule(agentRuleId, policyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'agentRuleId' is not null or undefined
            if (agentRuleId === null || agentRuleId === undefined) {
                throw new baseapi_1.RequiredError("agentRuleId", "deleteCSMThreatsAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}".replace("{agent_rule_id}", encodeURIComponent(String(agentRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.deleteCSMThreatsAgentRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (policyId !== undefined) {
                requestContext.setQueryParam("policy_id", ObjectSerializer_1.ObjectSerializer.serialize(policyId, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    downloadCloudWorkloadPolicyFile(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/security/cloud_workload/policy/download";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.downloadCloudWorkloadPolicyFile")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/yaml, application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    downloadCSMThreatsPolicy(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/policy/download";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.downloadCSMThreatsPolicy")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/zip, application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getCloudWorkloadSecurityAgentRule(agentRuleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'agentRuleId' is not null or undefined
            if (agentRuleId === null || agentRuleId === undefined) {
                throw new baseapi_1.RequiredError("agentRuleId", "getCloudWorkloadSecurityAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace("{agent_rule_id}", encodeURIComponent(String(agentRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.getCloudWorkloadSecurityAgentRule")
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
    getCSMThreatsAgentPolicy(policyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'policyId' is not null or undefined
            if (policyId === null || policyId === undefined) {
                throw new baseapi_1.RequiredError("policyId", "getCSMThreatsAgentPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/policy/{policy_id}".replace("{policy_id}", encodeURIComponent(String(policyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.getCSMThreatsAgentPolicy")
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
    getCSMThreatsAgentRule(agentRuleId, policyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'agentRuleId' is not null or undefined
            if (agentRuleId === null || agentRuleId === undefined) {
                throw new baseapi_1.RequiredError("agentRuleId", "getCSMThreatsAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}".replace("{agent_rule_id}", encodeURIComponent(String(agentRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.getCSMThreatsAgentRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (policyId !== undefined) {
                requestContext.setQueryParam("policy_id", ObjectSerializer_1.ObjectSerializer.serialize(policyId, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listCloudWorkloadSecurityAgentRules(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.listCloudWorkloadSecurityAgentRules")
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
    listCSMThreatsAgentPolicies(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/policy";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.listCSMThreatsAgentPolicies")
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
    listCSMThreatsAgentRules(policyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/agent_rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.listCSMThreatsAgentRules")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (policyId !== undefined) {
                requestContext.setQueryParam("policy_id", ObjectSerializer_1.ObjectSerializer.serialize(policyId, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateCloudWorkloadSecurityAgentRule(agentRuleId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'agentRuleId' is not null or undefined
            if (agentRuleId === null || agentRuleId === undefined) {
                throw new baseapi_1.RequiredError("agentRuleId", "updateCloudWorkloadSecurityAgentRule");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateCloudWorkloadSecurityAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/security_monitoring/cloud_workload_security/agent_rules/{agent_rule_id}".replace("{agent_rule_id}", encodeURIComponent(String(agentRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.updateCloudWorkloadSecurityAgentRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateCSMThreatsAgentPolicy(policyId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'policyId' is not null or undefined
            if (policyId === null || policyId === undefined) {
                throw new baseapi_1.RequiredError("policyId", "updateCSMThreatsAgentPolicy");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateCSMThreatsAgentPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/policy/{policy_id}".replace("{policy_id}", encodeURIComponent(String(policyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.updateCSMThreatsAgentPolicy")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentPolicyUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateCSMThreatsAgentRule(agentRuleId, body, policyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'agentRuleId' is not null or undefined
            if (agentRuleId === null || agentRuleId === undefined) {
                throw new baseapi_1.RequiredError("agentRuleId", "updateCSMThreatsAgentRule");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateCSMThreatsAgentRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/cws/agent_rules/{agent_rule_id}".replace("{agent_rule_id}", encodeURIComponent(String(agentRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CSMThreatsApi.updateCSMThreatsAgentRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (policyId !== undefined) {
                requestContext.setQueryParam("policy_id", ObjectSerializer_1.ObjectSerializer.serialize(policyId, "string", ""), "");
            }
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CloudWorkloadSecurityAgentRuleUpdateRequest", ""), contentType);
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
exports.CSMThreatsApiRequestFactory = CSMThreatsApiRequestFactory;
class CSMThreatsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCloudWorkloadSecurityAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse", "");
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
     * @params response Response returned by the server for a request to createCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCSMThreatsAgentPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPolicyResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPolicyResponse", "");
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
     * @params response Response returned by the server for a request to createCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCSMThreatsAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse", "");
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
     * @params response Response returned by the server for a request to deleteCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCloudWorkloadSecurityAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 403 ||
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
     * @params response Response returned by the server for a request to deleteCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCSMThreatsAgentPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202 || response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 403 ||
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
     * @params response Response returned by the server for a request to deleteCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCSMThreatsAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 403 ||
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
     * @params response Response returned by the server for a request to downloadCloudWorkloadPolicyFile
     * @throws ApiException if the response code was not in [200, 299]
     */
    downloadCloudWorkloadPolicyFile(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = (yield response.getBodyAsFile());
                return body;
            }
            if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
                const body = (yield response.getBodyAsFile());
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
     * @params response Response returned by the server for a request to downloadCSMThreatsPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    downloadCSMThreatsPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = (yield response.getBodyAsFile());
                return body;
            }
            if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
                const body = (yield response.getBodyAsFile());
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
     * @params response Response returned by the server for a request to getCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCloudWorkloadSecurityAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 403 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse", "");
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
     * @params response Response returned by the server for a request to getCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMThreatsAgentPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPolicyResponse");
                return body;
            }
            if (response.httpStatusCode === 403 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPolicyResponse", "");
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
     * @params response Response returned by the server for a request to getCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCSMThreatsAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 403 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse", "");
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
     * @params response Response returned by the server for a request to listCloudWorkloadSecurityAgentRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCloudWorkloadSecurityAgentRules(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRulesListResponse");
                return body;
            }
            if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRulesListResponse", "");
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
     * @params response Response returned by the server for a request to listCSMThreatsAgentPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCSMThreatsAgentPolicies(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPoliciesListResponse");
                return body;
            }
            if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPoliciesListResponse", "");
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
     * @params response Response returned by the server for a request to listCSMThreatsAgentRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCSMThreatsAgentRules(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRulesListResponse");
                return body;
            }
            if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRulesListResponse", "");
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
     * @params response Response returned by the server for a request to updateCloudWorkloadSecurityAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCloudWorkloadSecurityAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse", "");
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
     * @params response Response returned by the server for a request to updateCSMThreatsAgentPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCSMThreatsAgentPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPolicyResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentPolicyResponse", "");
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
     * @params response Response returned by the server for a request to updateCSMThreatsAgentRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCSMThreatsAgentRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CloudWorkloadSecurityAgentRuleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.CSMThreatsApiResponseProcessor = CSMThreatsApiResponseProcessor;
class CSMThreatsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new CSMThreatsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new CSMThreatsApiResponseProcessor();
    }
    /**
     * Create a new agent rule with the given parameters.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    createCloudWorkloadSecurityAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.createCloudWorkloadSecurityAgentRule(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createCloudWorkloadSecurityAgentRule(responseContext);
            });
        });
    }
    /**
     * Create a new Workload Protection policy with the given parameters.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    createCSMThreatsAgentPolicy(param, options) {
        const requestContextPromise = this.requestFactory.createCSMThreatsAgentPolicy(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createCSMThreatsAgentPolicy(responseContext);
            });
        });
    }
    /**
     * Create a new Workload Protection agent rule with the given parameters.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    createCSMThreatsAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.createCSMThreatsAgentRule(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createCSMThreatsAgentRule(responseContext);
            });
        });
    }
    /**
     * Delete a specific agent rule.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    deleteCloudWorkloadSecurityAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.deleteCloudWorkloadSecurityAgentRule(param.agentRuleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteCloudWorkloadSecurityAgentRule(responseContext);
            });
        });
    }
    /**
     * Delete a specific Workload Protection policy.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    deleteCSMThreatsAgentPolicy(param, options) {
        const requestContextPromise = this.requestFactory.deleteCSMThreatsAgentPolicy(param.policyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteCSMThreatsAgentPolicy(responseContext);
            });
        });
    }
    /**
     * Delete a specific Workload Protection agent rule.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    deleteCSMThreatsAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.deleteCSMThreatsAgentRule(param.agentRuleId, param.policyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteCSMThreatsAgentRule(responseContext);
            });
        });
    }
    /**
     * The download endpoint generates a Workload Protection policy file from your currently active
     * Workload Protection agent rules, and downloads them as a `.policy` file. This file can then be deployed to
     * your agents to update the policy running in your environment.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    downloadCloudWorkloadPolicyFile(options) {
        const requestContextPromise = this.requestFactory.downloadCloudWorkloadPolicyFile(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.downloadCloudWorkloadPolicyFile(responseContext);
            });
        });
    }
    /**
     * The download endpoint generates a Workload Protection policy file from your currently active
     * Workload Protection agent rules, and downloads them as a `.policy` file. This file can then be deployed to
     * your agents to update the policy running in your environment.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    downloadCSMThreatsPolicy(options) {
        const requestContextPromise = this.requestFactory.downloadCSMThreatsPolicy(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.downloadCSMThreatsPolicy(responseContext);
            });
        });
    }
    /**
     * Get the details of a specific agent rule.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    getCloudWorkloadSecurityAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.getCloudWorkloadSecurityAgentRule(param.agentRuleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getCloudWorkloadSecurityAgentRule(responseContext);
            });
        });
    }
    /**
     * Get the details of a specific Workload Protection policy.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    getCSMThreatsAgentPolicy(param, options) {
        const requestContextPromise = this.requestFactory.getCSMThreatsAgentPolicy(param.policyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getCSMThreatsAgentPolicy(responseContext);
            });
        });
    }
    /**
     * Get the details of a specific Workload Protection agent rule.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    getCSMThreatsAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.getCSMThreatsAgentRule(param.agentRuleId, param.policyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getCSMThreatsAgentRule(responseContext);
            });
        });
    }
    /**
     * Get the list of agent rules.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    listCloudWorkloadSecurityAgentRules(options) {
        const requestContextPromise = this.requestFactory.listCloudWorkloadSecurityAgentRules(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listCloudWorkloadSecurityAgentRules(responseContext);
            });
        });
    }
    /**
     * Get the list of Workload Protection policies.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    listCSMThreatsAgentPolicies(options) {
        const requestContextPromise = this.requestFactory.listCSMThreatsAgentPolicies(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listCSMThreatsAgentPolicies(responseContext);
            });
        });
    }
    /**
     * Get the list of Workload Protection agent rules.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    listCSMThreatsAgentRules(param = {}, options) {
        const requestContextPromise = this.requestFactory.listCSMThreatsAgentRules(param.policyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listCSMThreatsAgentRules(responseContext);
            });
        });
    }
    /**
     * Update a specific agent rule.
     * Returns the agent rule object when the request is successful.
     *
     * **Note**: This endpoint should only be used for the Government (US1-FED) site.
     * @param param The request object
     */
    updateCloudWorkloadSecurityAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.updateCloudWorkloadSecurityAgentRule(param.agentRuleId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateCloudWorkloadSecurityAgentRule(responseContext);
            });
        });
    }
    /**
     * Update a specific Workload Protection policy.
     * Returns the policy object when the request is successful.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    updateCSMThreatsAgentPolicy(param, options) {
        const requestContextPromise = this.requestFactory.updateCSMThreatsAgentPolicy(param.policyId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateCSMThreatsAgentPolicy(responseContext);
            });
        });
    }
    /**
     * Update a specific Workload Protection Agent rule.
     * Returns the agent rule object when the request is successful.
     *
     * **Note**: This endpoint is not available for the Government (US1-FED) site. Please reference the (US1-FED) specific resource below.
     * @param param The request object
     */
    updateCSMThreatsAgentRule(param, options) {
        const requestContextPromise = this.requestFactory.updateCSMThreatsAgentRule(param.agentRuleId, param.body, param.policyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateCSMThreatsAgentRule(responseContext);
            });
        });
    }
}
exports.CSMThreatsApi = CSMThreatsApi;
//# sourceMappingURL=CSMThreatsApi.js.map