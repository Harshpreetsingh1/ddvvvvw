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
exports.MonitorsApi = exports.MonitorsApiResponseProcessor = exports.MonitorsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class MonitorsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    checkCanDeleteMonitor(monitorIds, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'monitorIds' is not null or undefined
            if (monitorIds === null || monitorIds === undefined) {
                throw new baseapi_1.RequiredError("monitorIds", "checkCanDeleteMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor/can_delete";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.checkCanDeleteMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (monitorIds !== undefined) {
                requestContext.setQueryParam("monitor_ids", ObjectSerializer_1.ObjectSerializer.serialize(monitorIds, "Array<number>", "int64"), "csv");
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
    createMonitor(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.createMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Monitor", ""), contentType);
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
    deleteMonitor(monitorId, force, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'monitorId' is not null or undefined
            if (monitorId === null || monitorId === undefined) {
                throw new baseapi_1.RequiredError("monitorId", "deleteMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor/{monitor_id}".replace("{monitor_id}", encodeURIComponent(String(monitorId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.deleteMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (force !== undefined) {
                requestContext.setQueryParam("force", ObjectSerializer_1.ObjectSerializer.serialize(force, "string", ""), "");
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
    getMonitor(monitorId, groupStates, withDowntimes, withAssets, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'monitorId' is not null or undefined
            if (monitorId === null || monitorId === undefined) {
                throw new baseapi_1.RequiredError("monitorId", "getMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor/{monitor_id}".replace("{monitor_id}", encodeURIComponent(String(monitorId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.getMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (groupStates !== undefined) {
                requestContext.setQueryParam("group_states", ObjectSerializer_1.ObjectSerializer.serialize(groupStates, "string", ""), "");
            }
            if (withDowntimes !== undefined) {
                requestContext.setQueryParam("with_downtimes", ObjectSerializer_1.ObjectSerializer.serialize(withDowntimes, "boolean", ""), "");
            }
            if (withAssets !== undefined) {
                requestContext.setQueryParam("with_assets", ObjectSerializer_1.ObjectSerializer.serialize(withAssets, "boolean", ""), "");
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
    listMonitors(groupStates, name, tags, monitorTags, withDowntimes, idOffset, page, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/monitor";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.listMonitors")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (groupStates !== undefined) {
                requestContext.setQueryParam("group_states", ObjectSerializer_1.ObjectSerializer.serialize(groupStates, "string", ""), "");
            }
            if (name !== undefined) {
                requestContext.setQueryParam("name", ObjectSerializer_1.ObjectSerializer.serialize(name, "string", ""), "");
            }
            if (tags !== undefined) {
                requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""), "");
            }
            if (monitorTags !== undefined) {
                requestContext.setQueryParam("monitor_tags", ObjectSerializer_1.ObjectSerializer.serialize(monitorTags, "string", ""), "");
            }
            if (withDowntimes !== undefined) {
                requestContext.setQueryParam("with_downtimes", ObjectSerializer_1.ObjectSerializer.serialize(withDowntimes, "boolean", ""), "");
            }
            if (idOffset !== undefined) {
                requestContext.setQueryParam("id_offset", ObjectSerializer_1.ObjectSerializer.serialize(idOffset, "number", "int64"), "");
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "int64"), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page_size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"), "");
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
    searchMonitorGroups(query, page, perPage, sort, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/monitor/groups/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.searchMonitorGroups")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (query !== undefined) {
                requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""), "");
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "int64"), "");
            }
            if (perPage !== undefined) {
                requestContext.setQueryParam("per_page", ObjectSerializer_1.ObjectSerializer.serialize(perPage, "number", "int64"), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "string", ""), "");
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
    searchMonitors(query, page, perPage, sort, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/monitor/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.searchMonitors")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (query !== undefined) {
                requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""), "");
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "int64"), "");
            }
            if (perPage !== undefined) {
                requestContext.setQueryParam("per_page", ObjectSerializer_1.ObjectSerializer.serialize(perPage, "number", "int64"), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "string", ""), "");
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
    updateMonitor(monitorId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'monitorId' is not null or undefined
            if (monitorId === null || monitorId === undefined) {
                throw new baseapi_1.RequiredError("monitorId", "updateMonitor");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor/{monitor_id}".replace("{monitor_id}", encodeURIComponent(String(monitorId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.updateMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "MonitorUpdateRequest", ""), contentType);
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
    validateExistingMonitor(monitorId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'monitorId' is not null or undefined
            if (monitorId === null || monitorId === undefined) {
                throw new baseapi_1.RequiredError("monitorId", "validateExistingMonitor");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "validateExistingMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor/{monitor_id}/validate".replace("{monitor_id}", encodeURIComponent(String(monitorId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.validateExistingMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Monitor", ""), contentType);
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
    validateMonitor(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "validateMonitor");
            }
            // Path Params
            const localVarPath = "/api/v1/monitor/validate";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MonitorsApi.validateMonitor")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Monitor", ""), contentType);
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
exports.MonitorsApiRequestFactory = MonitorsApiRequestFactory;
class MonitorsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCanDeleteMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkCanDeleteMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200 || response.httpStatusCode === 409) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CheckCanDeleteMonitorResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CheckCanDeleteMonitorResponse", "");
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
     * @params response Response returned by the server for a request to createMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    createMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Monitor");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Monitor", "");
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
     * @params response Response returned by the server for a request to deleteMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "DeletedMonitor");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "DeletedMonitor", "");
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
     * @params response Response returned by the server for a request to getMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Monitor");
                return body;
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Monitor", "");
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
     * @params response Response returned by the server for a request to listMonitors
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMonitors(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Monitor>");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Monitor>", "");
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
     * @params response Response returned by the server for a request to searchMonitorGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchMonitorGroups(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonitorGroupSearchResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonitorGroupSearchResponse", "");
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
     * @params response Response returned by the server for a request to searchMonitors
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchMonitors(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonitorSearchResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonitorSearchResponse", "");
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
     * @params response Response returned by the server for a request to updateMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Monitor");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Monitor", "");
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
     * @params response Response returned by the server for a request to validateExistingMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateExistingMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any", "");
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
     * @params response Response returned by the server for a request to validateMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
    validateMonitor(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.MonitorsApiResponseProcessor = MonitorsApiResponseProcessor;
class MonitorsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new MonitorsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new MonitorsApiResponseProcessor();
    }
    /**
     * Check if the given monitors can be deleted.
     * @param param The request object
     */
    checkCanDeleteMonitor(param, options) {
        const requestContextPromise = this.requestFactory.checkCanDeleteMonitor(param.monitorIds, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.checkCanDeleteMonitor(responseContext);
            });
        });
    }
    /**
     * Create a monitor using the specified options.
     *
     * #### Monitor Types
     *
     * The type of monitor chosen from:
     *
     * - anomaly: `query alert`
     * - APM: `query alert` or `trace-analytics alert`
     * - composite: `composite`
     * - custom: `service check`
     * - forecast: `query alert`
     * - host: `service check`
     * - integration: `query alert` or `service check`
     * - live process: `process alert`
     * - logs: `log alert`
     * - metric: `query alert`
     * - network: `service check`
     * - outlier: `query alert`
     * - process: `service check`
     * - rum: `rum alert`
     * - SLO: `slo alert`
     * - watchdog: `event-v2 alert`
     * - event-v2: `event-v2 alert`
     * - audit: `audit alert`
     * - error-tracking: `error-tracking alert`
     * - database-monitoring: `database-monitoring alert`
     * - network-performance: `network-performance alert`
     * - cloud cost: `cost alert`
     * - network-path: `network-path alert`
     *
     * **Notes**:
     * - Synthetic monitors are created through the Synthetics API. See the [Synthetics API](https://docs.datadoghq.com/api/latest/synthetics/) documentation for more information.
     * - Log monitors require an unscoped App Key.
     *
     * #### Query Types
     *
     * ##### Metric Alert Query
     *
     * Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`
     *
     * - `time_aggr`: avg, sum, max, min, change, or pct_change
     * - `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w`
     * - `space_aggr`: avg, sum, min, or max
     * - `tags`: one or more tags (comma-separated), or *
     * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert)
     * - `operator`: <, <=, >, >=, ==, or !=
     * - `#`: an integer or decimal number used to set the threshold
     *
     * If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window),
     * timeshift):space_aggr:metric{tags} [by {key}] operator #` with:
     *
     * - `change_aggr` change, pct_change
     * - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/create/types/#define-the-conditions)
     * - `time_window` last\_#m (between 1 and 2880 depending on the monitor type), last\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2)
     * - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago
     *
     * Use this to create an outlier monitor using the following query:
     * `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`
     *
     * ##### Service Check Query
     *
     * Example: `"check".over(tags).last(count).by(group).count_by_status()`
     *
     * - `check` name of the check, for example `datadog.agent.up`
     * - `tags` one or more quoted tags (comma-separated), or "*". for example: `.over("env:prod", "role:db")`; `over` cannot be blank.
     * - `count` must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100.
     * For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3.
     * - `group` must be specified for check monitors. Per-check grouping is already explicitly known for some service checks.
     * For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See [Service Checks](https://docs.datadoghq.com/api/latest/service-checks/) documentation for more information.
     *
     * ##### Event Alert Query
     *
     * **Note:** The Event Alert Query has been replaced by the Event V2 Alert Query. For more information, see the [Event Migration guide](https://docs.datadoghq.com/service_management/events/guides/migrating_to_new_events_features/).
     *
     * ##### Event V2 Alert Query
     *
     * Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * ##### Process Alert Query
     *
     * Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`
     *
     * - `search` free text search string for querying processes.
     * Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page.
     * - `tags` one or more tags (comma-separated)
     * - `timeframe` the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d
     * - `operator` <, <=, >, >=, ==, or !=
     * - `#` an integer or decimal number used to set the threshold
     *
     * ##### Logs Alert Query
     *
     * Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `index_name` For multi-index organizations, the log index in which the request is performed.
     * - `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * ##### Composite Query
     *
     * Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors
     *
     * * `name` [*required*, *default* = **dynamic, based on query**]: The name of the alert.
     * * `message` [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor.
     * Email notifications can be sent to specific users by using the same '@username' notation as events.
     * * `tags` [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor.
     * When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags.
     * It is only available via the API and isn't visible or editable in the Datadog UI.
     *
     * ##### SLO Alert Query
     *
     * Example: `error_budget("slo_id").over("time_window") operator #`
     *
     * - `slo_id`: The alphanumeric SLO ID of the SLO you are configuring the alert for.
     * - `time_window`: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`.
     * - `operator`: `>=` or `>`
     *
     * ##### Audit Alert Query
     *
     * Example: `audits(query).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `rollup_method` The stats roll-up method - supports `count`, `avg` and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * ##### CI Pipelines Alert Query
     *
     * Example: `ci-pipelines(query).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * ##### CI Tests Alert Query
     *
     * Example: `ci-tests(query).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * ##### Error Tracking Alert Query
     *
     * "New issue" example: `error-tracking(query).source(issue_source).new().rollup(rollup_method[, measure]).by(group_by).last(time_window) operator #`
     * "High impact issue" example: `error-tracking(query).source(issue_source).impact().rollup(rollup_method[, measure]).by(group_by).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `issue_source` The issue source - supports `all`, `browser`, `mobile` and `backend` and defaults to `all` if omitted.
     * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality` and defaults to `count` if omitted.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `group by` Comma-separated list of attributes to group by - should contain at least `issue.id`.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * **Database Monitoring Alert Query**
     *
     * Example: `database-monitoring(query).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * **Network Performance Alert Query**
     *
     * Example: `network-performance(query).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     *
     * **Cost Alert Query**
     *
     * Example: `formula(query).timeframe_type(time_window).function(parameter) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `timeframe_type` The timeframe type to evaluate the cost
     *         - for `forecast` supports `current`
     *         - for `change`, `anomaly`, `threshold` supports `last`
     * - `time_window` - supports daily roll-up e.g. `7d`
     * - `function` - [optional, defaults to `threshold` monitor if omitted] supports `change`, `anomaly`, `forecast`
     * - `parameter` Specify the parameter of the type
     *     - for `change`:
     *         - supports `relative`, `absolute`
     *         - [optional] supports `#`, where `#` is an integer or decimal number used to set the threshold
     *     - for `anomaly`:
     *         - supports `direction=both`, `direction=above`, `direction=below`
     *         - [optional] supports `threshold=#`, where `#` is an integer or decimal number used to set the threshold
     * - `operator`
     *     - for `threshold` supports `<`, `<=`, `>`, `>=`, `==`, or `!=`
     *     - for `change` supports `>`, `<`
     *     - for `anomaly` supports `>=`
     *     - for `forecast` supports `>`
     * - `#` an integer or decimal number used to set the threshold.
     *
     * **Network Path Alert Query**
     *
     * Example: `network-path(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`
     *
     * - `query` The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
     * - `index_name` The data type to monitor on - supports `netpath-path` and `netpath-hop`.
     * - `rollup_method` The stats roll-up method - supports `count`, `avg`, and `cardinality`.
     * - `measure` For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
     * - `time_window` #m (between 1 and 2880), #h (between 1 and 48).
     * - `operator` `<`, `<=`, `>`, `>=`, `==`, or `!=`.
     * - `#` an integer or decimal number used to set the threshold.
     * @param param The request object
     */
    createMonitor(param, options) {
        const requestContextPromise = this.requestFactory.createMonitor(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createMonitor(responseContext);
            });
        });
    }
    /**
     * Delete the specified monitor
     * @param param The request object
     */
    deleteMonitor(param, options) {
        const requestContextPromise = this.requestFactory.deleteMonitor(param.monitorId, param.force, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteMonitor(responseContext);
            });
        });
    }
    /**
     * Get details about the specified monitor from your organization.
     * @param param The request object
     */
    getMonitor(param, options) {
        const requestContextPromise = this.requestFactory.getMonitor(param.monitorId, param.groupStates, param.withDowntimes, param.withAssets, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getMonitor(responseContext);
            });
        });
    }
    /**
     * Get all monitors from your organization.
     * @param param The request object
     */
    listMonitors(param = {}, options) {
        const requestContextPromise = this.requestFactory.listMonitors(param.groupStates, param.name, param.tags, param.monitorTags, param.withDowntimes, param.idOffset, param.page, param.pageSize, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listMonitors(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listMonitors returning a generator with all the items.
     */
    listMonitorsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listMonitorsWithPagination_1() {
            let pageSize = 100;
            if (param.pageSize !== undefined) {
                pageSize = param.pageSize;
            }
            param.pageSize = pageSize;
            param.page = 0;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listMonitors(param.groupStates, param.name, param.tags, param.monitorTags, param.withDowntimes, param.idOffset, param.page, param.pageSize, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listMonitors(responseContext));
                const results = response;
                for (const item of results) {
                    yield yield __await(item);
                }
                if (results.length < pageSize) {
                    break;
                }
                param.page = param.page + 1;
            }
        });
    }
    /**
     * Search and filter your monitor groups details.
     * @param param The request object
     */
    searchMonitorGroups(param = {}, options) {
        const requestContextPromise = this.requestFactory.searchMonitorGroups(param.query, param.page, param.perPage, param.sort, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchMonitorGroups(responseContext);
            });
        });
    }
    /**
     * Search and filter your monitors details.
     * @param param The request object
     */
    searchMonitors(param = {}, options) {
        const requestContextPromise = this.requestFactory.searchMonitors(param.query, param.page, param.perPage, param.sort, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchMonitors(responseContext);
            });
        });
    }
    /**
     * Edit the specified monitor.
     * @param param The request object
     */
    updateMonitor(param, options) {
        const requestContextPromise = this.requestFactory.updateMonitor(param.monitorId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateMonitor(responseContext);
            });
        });
    }
    /**
     * Validate the monitor provided in the request.
     * @param param The request object
     */
    validateExistingMonitor(param, options) {
        const requestContextPromise = this.requestFactory.validateExistingMonitor(param.monitorId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.validateExistingMonitor(responseContext);
            });
        });
    }
    /**
     * Validate the monitor provided in the request.
     *
     * **Note**: Log monitors require an unscoped App Key.
     * @param param The request object
     */
    validateMonitor(param, options) {
        const requestContextPromise = this.requestFactory.validateMonitor(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.validateMonitor(responseContext);
            });
        });
    }
}
exports.MonitorsApi = MonitorsApi;
//# sourceMappingURL=MonitorsApi.js.map