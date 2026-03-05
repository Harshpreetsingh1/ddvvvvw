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
exports.RUMApi = exports.RUMApiResponseProcessor = exports.RUMApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
const RUMQueryPageOptions_1 = require("../models/RUMQueryPageOptions");
class RUMApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    aggregateRUMEvents(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "aggregateRUMEvents");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/analytics/aggregate";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.aggregateRUMEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RUMAggregateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createRUMApplication(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createRUMApplication");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/applications";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.createRUMApplication")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RUMApplicationCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteRUMApplication(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "deleteRUMApplication");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/applications/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.deleteRUMApplication")
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
    getRUMApplication(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "getRUMApplication");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/applications/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.getRUMApplication")
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
    getRUMApplications(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/rum/applications";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.getRUMApplications")
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
    listRUMEvents(filterQuery, filterFrom, filterTo, sort, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/rum/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.listRUMEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterQuery !== undefined) {
                requestContext.setQueryParam("filter[query]", ObjectSerializer_1.ObjectSerializer.serialize(filterQuery, "string", ""), "");
            }
            if (filterFrom !== undefined) {
                requestContext.setQueryParam("filter[from]", ObjectSerializer_1.ObjectSerializer.serialize(filterFrom, "Date", "date-time"), "");
            }
            if (filterTo !== undefined) {
                requestContext.setQueryParam("filter[to]", ObjectSerializer_1.ObjectSerializer.serialize(filterTo, "Date", "date-time"), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "RUMSort", ""), "");
            }
            if (pageCursor !== undefined) {
                requestContext.setQueryParam("page[cursor]", ObjectSerializer_1.ObjectSerializer.serialize(pageCursor, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int32"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    searchRUMEvents(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "searchRUMEvents");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/events/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.searchRUMEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RUMSearchEventsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateRUMApplication(id, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "updateRUMApplication");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateRUMApplication");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/applications/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RUMApi.updateRUMApplication")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RUMApplicationUpdateRequest", ""), contentType);
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
exports.RUMApiRequestFactory = RUMApiRequestFactory;
class RUMApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateRUMEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateRUMEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMAnalyticsAggregateResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMAnalyticsAggregateResponse", "");
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
     * @params response Response returned by the server for a request to createRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRUMApplication(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationResponse", "");
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
     * @params response Response returned by the server for a request to deleteRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRUMApplication(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
     * @params response Response returned by the server for a request to getRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRUMApplication(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationResponse");
                return body;
            }
            if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationResponse", "");
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
     * @params response Response returned by the server for a request to getRUMApplications
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRUMApplications(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationsResponse");
                return body;
            }
            if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationsResponse", "");
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
     * @params response Response returned by the server for a request to listRUMEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRUMEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMEventsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMEventsResponse", "");
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
     * @params response Response returned by the server for a request to searchRUMEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchRUMEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMEventsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMEventsResponse", "");
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
     * @params response Response returned by the server for a request to updateRUMApplication
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRUMApplication(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 422 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RUMApplicationResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.RUMApiResponseProcessor = RUMApiResponseProcessor;
class RUMApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new RUMApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RUMApiResponseProcessor();
    }
    /**
     * The API endpoint to aggregate RUM events into buckets of computed metrics and timeseries.
     * @param param The request object
     */
    aggregateRUMEvents(param, options) {
        const requestContextPromise = this.requestFactory.aggregateRUMEvents(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.aggregateRUMEvents(responseContext);
            });
        });
    }
    /**
     * Create a new RUM application in your organization.
     * @param param The request object
     */
    createRUMApplication(param, options) {
        const requestContextPromise = this.requestFactory.createRUMApplication(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createRUMApplication(responseContext);
            });
        });
    }
    /**
     * Delete an existing RUM application in your organization.
     * @param param The request object
     */
    deleteRUMApplication(param, options) {
        const requestContextPromise = this.requestFactory.deleteRUMApplication(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteRUMApplication(responseContext);
            });
        });
    }
    /**
     * Get the RUM application with given ID in your organization.
     * @param param The request object
     */
    getRUMApplication(param, options) {
        const requestContextPromise = this.requestFactory.getRUMApplication(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getRUMApplication(responseContext);
            });
        });
    }
    /**
     * List all the RUM applications in your organization.
     * @param param The request object
     */
    getRUMApplications(options) {
        const requestContextPromise = this.requestFactory.getRUMApplications(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getRUMApplications(responseContext);
            });
        });
    }
    /**
     * List endpoint returns events that match a RUM search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to see your latest RUM events.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    listRUMEvents(param = {}, options) {
        const requestContextPromise = this.requestFactory.listRUMEvents(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRUMEvents(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listRUMEvents returning a generator with all the items.
     */
    listRUMEventsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listRUMEventsWithPagination_1() {
            let pageSize = 10;
            if (param.pageLimit !== undefined) {
                pageSize = param.pageLimit;
            }
            param.pageLimit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listRUMEvents(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listRUMEvents(responseContext));
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
                const cursorMeta = response.meta;
                if (cursorMeta === undefined) {
                    break;
                }
                const cursorMetaPage = cursorMeta.page;
                if (cursorMetaPage === undefined) {
                    break;
                }
                const cursorMetaPageAfter = cursorMetaPage.after;
                if (cursorMetaPageAfter === undefined) {
                    break;
                }
                param.pageCursor = cursorMetaPageAfter;
            }
        });
    }
    /**
     * List endpoint returns RUM events that match a RUM search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to build complex RUM events filtering and search.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    searchRUMEvents(param, options) {
        const requestContextPromise = this.requestFactory.searchRUMEvents(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchRUMEvents(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of searchRUMEvents returning a generator with all the items.
     */
    searchRUMEventsWithPagination(param, options) {
        return __asyncGenerator(this, arguments, function* searchRUMEventsWithPagination_1() {
            let pageSize = 10;
            if (param.body.page === undefined) {
                param.body.page = new RUMQueryPageOptions_1.RUMQueryPageOptions();
            }
            if (param.body.page.limit === undefined) {
                param.body.page.limit = pageSize;
            }
            else {
                pageSize = param.body.page.limit;
            }
            while (true) {
                const requestContext = yield __await(this.requestFactory.searchRUMEvents(param.body, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.searchRUMEvents(responseContext));
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
                const cursorMeta = response.meta;
                if (cursorMeta === undefined) {
                    break;
                }
                const cursorMetaPage = cursorMeta.page;
                if (cursorMetaPage === undefined) {
                    break;
                }
                const cursorMetaPageAfter = cursorMetaPage.after;
                if (cursorMetaPageAfter === undefined) {
                    break;
                }
                param.body.page.cursor = cursorMetaPageAfter;
            }
        });
    }
    /**
     * Update the RUM application with given ID in your organization.
     * @param param The request object
     */
    updateRUMApplication(param, options) {
        const requestContextPromise = this.requestFactory.updateRUMApplication(param.id, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateRUMApplication(responseContext);
            });
        });
    }
}
exports.RUMApi = RUMApi;
//# sourceMappingURL=RUMApi.js.map