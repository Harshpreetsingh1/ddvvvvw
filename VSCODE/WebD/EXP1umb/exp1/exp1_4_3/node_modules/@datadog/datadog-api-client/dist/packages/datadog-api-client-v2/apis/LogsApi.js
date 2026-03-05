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
exports.LogsApi = exports.LogsApiResponseProcessor = exports.LogsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
const LogsListRequest_1 = require("../models/LogsListRequest");
const LogsListRequestPage_1 = require("../models/LogsListRequestPage");
class LogsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    aggregateLogs(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "aggregateLogs");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/analytics/aggregate";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsApi.aggregateLogs")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LogsAggregateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listLogs(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/logs/events/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsApi.listLogs")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LogsListRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listLogsGet(filterQuery, filterIndexes, filterFrom, filterTo, filterStorageTier, sort, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/logs/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsApi.listLogsGet")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterQuery !== undefined) {
                requestContext.setQueryParam("filter[query]", ObjectSerializer_1.ObjectSerializer.serialize(filterQuery, "string", ""), "");
            }
            if (filterIndexes !== undefined) {
                requestContext.setQueryParam("filter[indexes]", ObjectSerializer_1.ObjectSerializer.serialize(filterIndexes, "Array<string>", ""), "csv");
            }
            if (filterFrom !== undefined) {
                requestContext.setQueryParam("filter[from]", ObjectSerializer_1.ObjectSerializer.serialize(filterFrom, "Date", "date-time"), "");
            }
            if (filterTo !== undefined) {
                requestContext.setQueryParam("filter[to]", ObjectSerializer_1.ObjectSerializer.serialize(filterTo, "Date", "date-time"), "");
            }
            if (filterStorageTier !== undefined) {
                requestContext.setQueryParam("filter[storage_tier]", ObjectSerializer_1.ObjectSerializer.serialize(filterStorageTier, "LogsStorageTier", ""), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "LogsSort", ""), "");
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
    submitLog(body, contentEncoding, ddtags, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "submitLog");
            }
            // Path Params
            const localVarPath = "/api/v2/logs";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsApi.submitLog")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (ddtags !== undefined) {
                requestContext.setQueryParam("ddtags", ObjectSerializer_1.ObjectSerializer.serialize(ddtags, "string", ""), "");
            }
            // Header Params
            if (contentEncoding !== undefined) {
                requestContext.setHeaderParam("Content-Encoding", ObjectSerializer_1.ObjectSerializer.serialize(contentEncoding, "ContentEncoding", ""));
            }
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
                "application/logplex-1",
                "text/plain",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Array<HTTPLogItem>", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["apiKeyAuth"]);
            return requestContext;
        });
    }
}
exports.LogsApiRequestFactory = LogsApiRequestFactory;
class LogsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LogsAggregateResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LogsAggregateResponse", "");
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
     * @params response Response returned by the server for a request to listLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LogsListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LogsListResponse", "");
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
     * @params response Response returned by the server for a request to listLogsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogsGet(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LogsListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LogsListResponse", "");
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
     * @params response Response returned by the server for a request to submitLog
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitLog(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 408 ||
                response.httpStatusCode === 413 ||
                response.httpStatusCode === 429 ||
                response.httpStatusCode === 500 ||
                response.httpStatusCode === 503) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "HTTPLogErrors");
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
exports.LogsApiResponseProcessor = LogsApiResponseProcessor;
class LogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new LogsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new LogsApiResponseProcessor();
    }
    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * @param param The request object
     */
    aggregateLogs(param, options) {
        const requestContextPromise = this.requestFactory.aggregateLogs(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.aggregateLogs(responseContext);
            });
        });
    }
    /**
     * List endpoint returns logs that match a log search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to search and filter your logs.
     *
     * **If you are considering archiving logs for your organization,
     * consider use of the Datadog archive capabilities instead of the log list API.
     * See [Datadog Logs Archive documentation][2].**
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination
     * [2]: https://docs.datadoghq.com/logs/archives
     * @param param The request object
     */
    listLogs(param = {}, options) {
        const requestContextPromise = this.requestFactory.listLogs(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listLogs(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listLogs returning a generator with all the items.
     */
    listLogsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listLogsWithPagination_1() {
            let pageSize = 10;
            if (param.body === undefined) {
                param.body = new LogsListRequest_1.LogsListRequest();
            }
            if (param.body.page === undefined) {
                param.body.page = new LogsListRequestPage_1.LogsListRequestPage();
            }
            if (param.body.page.limit !== undefined) {
                pageSize = param.body.page.limit;
            }
            param.body.page.limit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listLogs(param.body, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listLogs(responseContext));
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
     * List endpoint returns logs that match a log search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to search and filter your logs.
     *
     * **If you are considering archiving logs for your organization,
     * consider use of the Datadog archive capabilities instead of the log list API.
     * See [Datadog Logs Archive documentation][2].**
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination
     * [2]: https://docs.datadoghq.com/logs/archives
     * @param param The request object
     */
    listLogsGet(param = {}, options) {
        const requestContextPromise = this.requestFactory.listLogsGet(param.filterQuery, param.filterIndexes, param.filterFrom, param.filterTo, param.filterStorageTier, param.sort, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listLogsGet(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listLogsGet returning a generator with all the items.
     */
    listLogsGetWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listLogsGetWithPagination_1() {
            let pageSize = 10;
            if (param.pageLimit !== undefined) {
                pageSize = param.pageLimit;
            }
            param.pageLimit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listLogsGet(param.filterQuery, param.filterIndexes, param.filterFrom, param.filterTo, param.filterStorageTier, param.sort, param.pageCursor, param.pageLimit, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listLogsGet(responseContext));
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
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:
     *
     * - Maximum content size per payload (uncompressed): 5MB
     * - Maximum size for a single log: 1MB
     * - Maximum array size if sending multiple logs in an array: 1000 entries
     *
     * Any log exceeding 1MB is accepted and truncated by Datadog:
     * - For a single log request, the API truncates the log at 1MB and returns a 2xx.
     * - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.
     *
     * Datadog recommends sending your logs compressed.
     * Add the `Content-Encoding: gzip` header to the request when sending compressed logs.
     * Log events can be submitted with a timestamp that is up to 18 hours in the past.
     *
     * The status codes answered by the HTTP API are:
     * - 202: Accepted: the request has been accepted for processing
     * - 400: Bad request (likely an issue in the payload formatting)
     * - 401: Unauthorized (likely a missing API Key)
     * - 403: Permission issue (likely using an invalid API Key)
     * - 408: Request Timeout, request should be retried after some time
     * - 413: Payload too large (batch is above 5MB uncompressed)
     * - 429: Too Many Requests, request should be retried after some time
     * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
     * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
     * @param param The request object
     */
    submitLog(param, options) {
        const requestContextPromise = this.requestFactory.submitLog(param.body, param.contentEncoding, param.ddtags, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.submitLog(responseContext);
            });
        });
    }
}
exports.LogsApi = LogsApi;
//# sourceMappingURL=LogsApi.js.map