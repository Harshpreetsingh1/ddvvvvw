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
exports.AuditApi = exports.AuditApiResponseProcessor = exports.AuditApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
const AuditLogsQueryPageOptions_1 = require("../models/AuditLogsQueryPageOptions");
const AuditLogsSearchEventsRequest_1 = require("../models/AuditLogsSearchEventsRequest");
class AuditApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    listAuditLogs(filterQuery, filterFrom, filterTo, sort, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/audit/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.AuditApi.listAuditLogs")
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
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "AuditLogsSort", ""), "");
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
    searchAuditLogs(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/audit/events/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.AuditApi.searchAuditLogs")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "AuditLogsSearchEventsRequest", ""), contentType);
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
exports.AuditApiRequestFactory = AuditApiRequestFactory;
class AuditApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAuditLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "AuditLogsEventsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "AuditLogsEventsResponse", "");
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
     * @params response Response returned by the server for a request to searchAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchAuditLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "AuditLogsEventsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "AuditLogsEventsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.AuditApiResponseProcessor = AuditApiResponseProcessor;
class AuditApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new AuditApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new AuditApiResponseProcessor();
    }
    /**
     * List endpoint returns events that match a Audit Logs search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to see your latest Audit Logs events.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    listAuditLogs(param = {}, options) {
        const requestContextPromise = this.requestFactory.listAuditLogs(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listAuditLogs(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listAuditLogs returning a generator with all the items.
     */
    listAuditLogsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listAuditLogsWithPagination_1() {
            let pageSize = 10;
            if (param.pageLimit !== undefined) {
                pageSize = param.pageLimit;
            }
            param.pageLimit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listAuditLogs(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listAuditLogs(responseContext));
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
     * List endpoint returns Audit Logs events that match an Audit search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to build complex Audit Logs events filtering and search.
     *
     * [1]: https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination
     * @param param The request object
     */
    searchAuditLogs(param = {}, options) {
        const requestContextPromise = this.requestFactory.searchAuditLogs(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchAuditLogs(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of searchAuditLogs returning a generator with all the items.
     */
    searchAuditLogsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* searchAuditLogsWithPagination_1() {
            let pageSize = 10;
            if (param.body === undefined) {
                param.body = new AuditLogsSearchEventsRequest_1.AuditLogsSearchEventsRequest();
            }
            if (param.body.page === undefined) {
                param.body.page = new AuditLogsQueryPageOptions_1.AuditLogsQueryPageOptions();
            }
            if (param.body.page.limit !== undefined) {
                pageSize = param.body.page.limit;
            }
            param.body.page.limit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.searchAuditLogs(param.body, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.searchAuditLogs(responseContext));
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
}
exports.AuditApi = AuditApi;
//# sourceMappingURL=AuditApi.js.map