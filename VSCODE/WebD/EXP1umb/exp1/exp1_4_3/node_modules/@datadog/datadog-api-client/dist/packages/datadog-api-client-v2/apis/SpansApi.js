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
exports.SpansApi = exports.SpansApiResponseProcessor = exports.SpansApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
const SpansListRequestAttributes_1 = require("../models/SpansListRequestAttributes");
const SpansListRequestData_1 = require("../models/SpansListRequestData");
const SpansListRequestPage_1 = require("../models/SpansListRequestPage");
class SpansApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    aggregateSpans(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "aggregateSpans");
            }
            // Path Params
            const localVarPath = "/api/v2/spans/analytics/aggregate";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.SpansApi.aggregateSpans")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SpansAggregateRequest", ""), contentType);
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
    listSpans(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "listSpans");
            }
            // Path Params
            const localVarPath = "/api/v2/spans/events/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.SpansApi.listSpans")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SpansListRequest", ""), contentType);
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
    listSpansGet(filterQuery, filterFrom, filterTo, sort, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/spans/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.SpansApi.listSpansGet")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterQuery !== undefined) {
                requestContext.setQueryParam("filter[query]", ObjectSerializer_1.ObjectSerializer.serialize(filterQuery, "string", ""), "");
            }
            if (filterFrom !== undefined) {
                requestContext.setQueryParam("filter[from]", ObjectSerializer_1.ObjectSerializer.serialize(filterFrom, "string", ""), "");
            }
            if (filterTo !== undefined) {
                requestContext.setQueryParam("filter[to]", ObjectSerializer_1.ObjectSerializer.serialize(filterTo, "string", ""), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "SpansSort", ""), "");
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
                "AuthZ",
            ]);
            return requestContext;
        });
    }
}
exports.SpansApiRequestFactory = SpansApiRequestFactory;
class SpansApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateSpans(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SpansAggregateResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SpansAggregateResponse", "");
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
     * @params response Response returned by the server for a request to listSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSpans(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SpansListResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 422 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SpansListResponse", "");
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
     * @params response Response returned by the server for a request to listSpansGet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSpansGet(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SpansListResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 422 ||
                response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SpansListResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.SpansApiResponseProcessor = SpansApiResponseProcessor;
class SpansApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new SpansApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new SpansApiResponseProcessor();
    }
    /**
     * The API endpoint to aggregate spans into buckets and compute metrics and timeseries.
     * This endpoint is rate limited to `300` requests per hour.
     * @param param The request object
     */
    aggregateSpans(param, options) {
        const requestContextPromise = this.requestFactory.aggregateSpans(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.aggregateSpans(responseContext);
            });
        });
    }
    /**
     * List endpoint returns spans that match a span search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to build complex spans filtering and search.
     * This endpoint is rate limited to `300` requests per hour.
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api
     * @param param The request object
     */
    listSpans(param, options) {
        const requestContextPromise = this.requestFactory.listSpans(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listSpans(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listSpans returning a generator with all the items.
     */
    listSpansWithPagination(param, options) {
        return __asyncGenerator(this, arguments, function* listSpansWithPagination_1() {
            let pageSize = 10;
            if (param.body.data === undefined) {
                param.body.data = new SpansListRequestData_1.SpansListRequestData();
            }
            if (param.body.data.attributes === undefined) {
                param.body.data.attributes = new SpansListRequestAttributes_1.SpansListRequestAttributes();
            }
            if (param.body.data.attributes.page === undefined) {
                param.body.data.attributes.page = new SpansListRequestPage_1.SpansListRequestPage();
            }
            if (param.body.data.attributes.page.limit === undefined) {
                param.body.data.attributes.page.limit = pageSize;
            }
            else {
                pageSize = param.body.data.attributes.page.limit;
            }
            while (true) {
                const requestContext = yield __await(this.requestFactory.listSpans(param.body, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listSpans(responseContext));
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
                param.body.data.attributes.page.cursor = cursorMetaPageAfter;
            }
        });
    }
    /**
     * List endpoint returns spans that match a span search query.
     * [Results are paginated][1].
     *
     * Use this endpoint to see your latest spans.
     * This endpoint is rate limited to `300` requests per hour.
     *
     * [1]: /logs/guide/collect-multiple-logs-with-pagination?tab=v2api
     * @param param The request object
     */
    listSpansGet(param = {}, options) {
        const requestContextPromise = this.requestFactory.listSpansGet(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listSpansGet(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listSpansGet returning a generator with all the items.
     */
    listSpansGetWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listSpansGetWithPagination_1() {
            let pageSize = 10;
            if (param.pageLimit !== undefined) {
                pageSize = param.pageLimit;
            }
            param.pageLimit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listSpansGet(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listSpansGet(responseContext));
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
}
exports.SpansApi = SpansApi;
//# sourceMappingURL=SpansApi.js.map