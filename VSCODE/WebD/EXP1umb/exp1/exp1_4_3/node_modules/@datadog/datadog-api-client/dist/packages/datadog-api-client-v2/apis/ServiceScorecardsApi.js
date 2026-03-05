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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceScorecardsApi = exports.ServiceScorecardsApiResponseProcessor = exports.ServiceScorecardsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ServiceScorecardsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createScorecardOutcomesBatch(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createScorecardOutcomesBatch'");
            if (!_config.unstableOperations["v2.createScorecardOutcomesBatch"]) {
                throw new Error("Unstable operation 'createScorecardOutcomesBatch' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createScorecardOutcomesBatch");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/outcomes/batch";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.createScorecardOutcomesBatch")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "OutcomesBatchRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    createScorecardRule(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createScorecardRule'");
            if (!_config.unstableOperations["v2.createScorecardRule"]) {
                throw new Error("Unstable operation 'createScorecardRule' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createScorecardRule");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.createScorecardRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CreateRuleRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    deleteScorecardRule(ruleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteScorecardRule'");
            if (!_config.unstableOperations["v2.deleteScorecardRule"]) {
                throw new Error("Unstable operation 'deleteScorecardRule' is disabled");
            }
            // verify required parameter 'ruleId' is not null or undefined
            if (ruleId === null || ruleId === undefined) {
                throw new baseapi_1.RequiredError("ruleId", "deleteScorecardRule");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/rules/{rule_id}".replace("{rule_id}", encodeURIComponent(String(ruleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.deleteScorecardRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    listScorecardOutcomes(pageSize, pageOffset, include, fieldsOutcome, fieldsRule, filterOutcomeServiceName, filterOutcomeState, filterRuleEnabled, filterRuleId, filterRuleName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listScorecardOutcomes'");
            if (!_config.unstableOperations["v2.listScorecardOutcomes"]) {
                throw new Error("Unstable operation 'listScorecardOutcomes' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/outcomes";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.listScorecardOutcomes")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (pageOffset !== undefined) {
                requestContext.setQueryParam("page[offset]", ObjectSerializer_1.ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
            }
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            if (fieldsOutcome !== undefined) {
                requestContext.setQueryParam("fields[outcome]", ObjectSerializer_1.ObjectSerializer.serialize(fieldsOutcome, "string", ""), "");
            }
            if (fieldsRule !== undefined) {
                requestContext.setQueryParam("fields[rule]", ObjectSerializer_1.ObjectSerializer.serialize(fieldsRule, "string", ""), "");
            }
            if (filterOutcomeServiceName !== undefined) {
                requestContext.setQueryParam("filter[outcome][service_name]", ObjectSerializer_1.ObjectSerializer.serialize(filterOutcomeServiceName, "string", ""), "");
            }
            if (filterOutcomeState !== undefined) {
                requestContext.setQueryParam("filter[outcome][state]", ObjectSerializer_1.ObjectSerializer.serialize(filterOutcomeState, "string", ""), "");
            }
            if (filterRuleEnabled !== undefined) {
                requestContext.setQueryParam("filter[rule][enabled]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleEnabled, "boolean", ""), "");
            }
            if (filterRuleId !== undefined) {
                requestContext.setQueryParam("filter[rule][id]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleId, "string", ""), "");
            }
            if (filterRuleName !== undefined) {
                requestContext.setQueryParam("filter[rule][name]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleName, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    listScorecardRules(pageSize, pageOffset, include, filterRuleId, filterRuleEnabled, filterRuleCustom, filterRuleName, filterRuleDescription, fieldsRule, fieldsScorecard, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listScorecardRules'");
            if (!_config.unstableOperations["v2.listScorecardRules"]) {
                throw new Error("Unstable operation 'listScorecardRules' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.listScorecardRules")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (pageOffset !== undefined) {
                requestContext.setQueryParam("page[offset]", ObjectSerializer_1.ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
            }
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            if (filterRuleId !== undefined) {
                requestContext.setQueryParam("filter[rule][id]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleId, "string", ""), "");
            }
            if (filterRuleEnabled !== undefined) {
                requestContext.setQueryParam("filter[rule][enabled]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleEnabled, "boolean", ""), "");
            }
            if (filterRuleCustom !== undefined) {
                requestContext.setQueryParam("filter[rule][custom]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleCustom, "boolean", ""), "");
            }
            if (filterRuleName !== undefined) {
                requestContext.setQueryParam("filter[rule][name]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleName, "string", ""), "");
            }
            if (filterRuleDescription !== undefined) {
                requestContext.setQueryParam("filter[rule][description]", ObjectSerializer_1.ObjectSerializer.serialize(filterRuleDescription, "string", ""), "");
            }
            if (fieldsRule !== undefined) {
                requestContext.setQueryParam("fields[rule]", ObjectSerializer_1.ObjectSerializer.serialize(fieldsRule, "string", ""), "");
            }
            if (fieldsScorecard !== undefined) {
                requestContext.setQueryParam("fields[scorecard]", ObjectSerializer_1.ObjectSerializer.serialize(fieldsScorecard, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    updateScorecardOutcomesAsync(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateScorecardOutcomesAsync'");
            if (!_config.unstableOperations["v2.updateScorecardOutcomesAsync"]) {
                throw new Error("Unstable operation 'updateScorecardOutcomesAsync' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateScorecardOutcomesAsync");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/outcomes";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.updateScorecardOutcomesAsync")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "UpdateOutcomesAsyncRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    updateScorecardRule(ruleId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateScorecardRule'");
            if (!_config.unstableOperations["v2.updateScorecardRule"]) {
                throw new Error("Unstable operation 'updateScorecardRule' is disabled");
            }
            // verify required parameter 'ruleId' is not null or undefined
            if (ruleId === null || ruleId === undefined) {
                throw new baseapi_1.RequiredError("ruleId", "updateScorecardRule");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateScorecardRule");
            }
            // Path Params
            const localVarPath = "/api/v2/scorecard/rules/{rule_id}".replace("{rule_id}", encodeURIComponent(String(ruleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceScorecardsApi.updateScorecardRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "UpdateRuleRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
}
exports.ServiceScorecardsApiRequestFactory = ServiceScorecardsApiRequestFactory;
class ServiceScorecardsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createScorecardOutcomesBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    createScorecardOutcomesBatch(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "OutcomesBatchResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "OutcomesBatchResponse", "");
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
     * @params response Response returned by the server for a request to createScorecardRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createScorecardRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CreateRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CreateRuleResponse", "");
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
     * @params response Response returned by the server for a request to deleteScorecardRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteScorecardRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
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
     * @params response Response returned by the server for a request to listScorecardOutcomes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listScorecardOutcomes(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "OutcomesResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "OutcomesResponse", "");
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
     * @params response Response returned by the server for a request to listScorecardRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listScorecardRules(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListRulesResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListRulesResponse", "");
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
     * @params response Response returned by the server for a request to updateScorecardOutcomesAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateScorecardOutcomesAsync(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                return;
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
     * @params response Response returned by the server for a request to updateScorecardRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateScorecardRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UpdateRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UpdateRuleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ServiceScorecardsApiResponseProcessor = ServiceScorecardsApiResponseProcessor;
class ServiceScorecardsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ServiceScorecardsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ServiceScorecardsApiResponseProcessor();
    }
    /**
     * Sets multiple service-rule outcomes in a single batched request.
     * @param param The request object
     */
    createScorecardOutcomesBatch(param, options) {
        const requestContextPromise = this.requestFactory.createScorecardOutcomesBatch(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createScorecardOutcomesBatch(responseContext);
            });
        });
    }
    /**
     * Creates a new rule.
     * @param param The request object
     */
    createScorecardRule(param, options) {
        const requestContextPromise = this.requestFactory.createScorecardRule(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createScorecardRule(responseContext);
            });
        });
    }
    /**
     * Deletes a single rule.
     * @param param The request object
     */
    deleteScorecardRule(param, options) {
        const requestContextPromise = this.requestFactory.deleteScorecardRule(param.ruleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteScorecardRule(responseContext);
            });
        });
    }
    /**
     * Fetches all rule outcomes.
     * @param param The request object
     */
    listScorecardOutcomes(param = {}, options) {
        const requestContextPromise = this.requestFactory.listScorecardOutcomes(param.pageSize, param.pageOffset, param.include, param.fieldsOutcome, param.fieldsRule, param.filterOutcomeServiceName, param.filterOutcomeState, param.filterRuleEnabled, param.filterRuleId, param.filterRuleName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listScorecardOutcomes(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listScorecardOutcomes returning a generator with all the items.
     */
    listScorecardOutcomesWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listScorecardOutcomesWithPagination_1() {
            let pageSize = 10;
            if (param.pageSize !== undefined) {
                pageSize = param.pageSize;
            }
            param.pageSize = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listScorecardOutcomes(param.pageSize, param.pageOffset, param.include, param.fieldsOutcome, param.fieldsRule, param.filterOutcomeServiceName, param.filterOutcomeState, param.filterRuleEnabled, param.filterRuleId, param.filterRuleName, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listScorecardOutcomes(responseContext));
                const responseData = response.data;
                if (responseData === undefined) {
                    break;
                }
                const results = responseData;
                for (const item of results) {
                    yield yield __await(item);
                }
                if (results.length < pageSize) {
                    break;
                }
                if (param.pageOffset === undefined) {
                    param.pageOffset = pageSize;
                }
                else {
                    param.pageOffset = param.pageOffset + pageSize;
                }
            }
        });
    }
    /**
     * Fetch all rules.
     * @param param The request object
     */
    listScorecardRules(param = {}, options) {
        const requestContextPromise = this.requestFactory.listScorecardRules(param.pageSize, param.pageOffset, param.include, param.filterRuleId, param.filterRuleEnabled, param.filterRuleCustom, param.filterRuleName, param.filterRuleDescription, param.fieldsRule, param.fieldsScorecard, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listScorecardRules(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listScorecardRules returning a generator with all the items.
     */
    listScorecardRulesWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listScorecardRulesWithPagination_1() {
            let pageSize = 10;
            if (param.pageSize !== undefined) {
                pageSize = param.pageSize;
            }
            param.pageSize = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listScorecardRules(param.pageSize, param.pageOffset, param.include, param.filterRuleId, param.filterRuleEnabled, param.filterRuleCustom, param.filterRuleName, param.filterRuleDescription, param.fieldsRule, param.fieldsScorecard, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listScorecardRules(responseContext));
                const responseData = response.data;
                if (responseData === undefined) {
                    break;
                }
                const results = responseData;
                for (const item of results) {
                    yield yield __await(item);
                }
                if (results.length < pageSize) {
                    break;
                }
                if (param.pageOffset === undefined) {
                    param.pageOffset = pageSize;
                }
                else {
                    param.pageOffset = param.pageOffset + pageSize;
                }
            }
        });
    }
    /**
     * Updates multiple scorecard rule outcomes in a single batched request.
     * @param param The request object
     */
    updateScorecardOutcomesAsync(param, options) {
        const requestContextPromise = this.requestFactory.updateScorecardOutcomesAsync(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateScorecardOutcomesAsync(responseContext);
            });
        });
    }
    /**
     * Updates an existing rule.
     * @param param The request object
     */
    updateScorecardRule(param, options) {
        const requestContextPromise = this.requestFactory.updateScorecardRule(param.ruleId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateScorecardRule(responseContext);
            });
        });
    }
}
exports.ServiceScorecardsApi = ServiceScorecardsApi;
//# sourceMappingURL=ServiceScorecardsApi.js.map