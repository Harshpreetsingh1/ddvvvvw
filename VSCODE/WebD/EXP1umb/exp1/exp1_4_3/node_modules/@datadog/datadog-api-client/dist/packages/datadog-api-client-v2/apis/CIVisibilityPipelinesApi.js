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
exports.CIVisibilityPipelinesApi = exports.CIVisibilityPipelinesApiResponseProcessor = exports.CIVisibilityPipelinesApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
const CIAppPipelineEventsRequest_1 = require("../models/CIAppPipelineEventsRequest");
const CIAppQueryPageOptions_1 = require("../models/CIAppQueryPageOptions");
class CIVisibilityPipelinesApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    aggregateCIAppPipelineEvents(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "aggregateCIAppPipelineEvents");
            }
            // Path Params
            const localVarPath = "/api/v2/ci/pipelines/analytics/aggregate";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CIVisibilityPipelinesApi.aggregateCIAppPipelineEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CIAppPipelinesAggregateRequest", ""), contentType);
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
    createCIAppPipelineEvent(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createCIAppPipelineEvent");
            }
            // Path Params
            const localVarPath = "/api/v2/ci/pipeline";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CIVisibilityPipelinesApi.createCIAppPipelineEvent")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CIAppCreatePipelineEventRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["apiKeyAuth"]);
            return requestContext;
        });
    }
    listCIAppPipelineEvents(filterQuery, filterFrom, filterTo, sort, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/ci/pipelines/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CIVisibilityPipelinesApi.listCIAppPipelineEvents")
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
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "CIAppSort", ""), "");
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
    searchCIAppPipelineEvents(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/ci/pipelines/events/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CIVisibilityPipelinesApi.searchCIAppPipelineEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CIAppPipelineEventsRequest", ""), contentType);
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
exports.CIVisibilityPipelinesApiRequestFactory = CIVisibilityPipelinesApiRequestFactory;
class CIVisibilityPipelinesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregateCIAppPipelineEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    aggregateCIAppPipelineEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CIAppPipelinesAnalyticsAggregateResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CIAppPipelinesAnalyticsAggregateResponse", "");
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
     * @params response Response returned by the server for a request to createCIAppPipelineEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCIAppPipelineEvent(response) {
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
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "HTTPCIAppErrors");
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
     * @params response Response returned by the server for a request to listCIAppPipelineEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCIAppPipelineEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CIAppPipelineEventsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CIAppPipelineEventsResponse", "");
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
     * @params response Response returned by the server for a request to searchCIAppPipelineEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchCIAppPipelineEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CIAppPipelineEventsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CIAppPipelineEventsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.CIVisibilityPipelinesApiResponseProcessor = CIVisibilityPipelinesApiResponseProcessor;
class CIVisibilityPipelinesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory ||
                new CIVisibilityPipelinesApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new CIVisibilityPipelinesApiResponseProcessor();
    }
    /**
     * Use this API endpoint to aggregate CI Visibility pipeline events into buckets of computed metrics and timeseries.
     * @param param The request object
     */
    aggregateCIAppPipelineEvents(param, options) {
        const requestContextPromise = this.requestFactory.aggregateCIAppPipelineEvents(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.aggregateCIAppPipelineEvents(responseContext);
            });
        });
    }
    /**
     * Send your pipeline event to your Datadog platform over HTTP. For details about how pipeline executions are modeled and what execution types we support, see [Pipeline Data Model And Execution Types](https://docs.datadoghq.com/continuous_integration/guides/pipeline_data_model/).
     *
     * Multiple events can be sent in an array (up to 1000).
     *
     * Pipeline events can be submitted with a timestamp that is up to 18 hours in the past.
     * The duration between the event start and end times cannot exceed 1 year.
     * @param param The request object
     */
    createCIAppPipelineEvent(param, options) {
        const requestContextPromise = this.requestFactory.createCIAppPipelineEvent(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createCIAppPipelineEvent(responseContext);
            });
        });
    }
    /**
     * List endpoint returns CI Visibility pipeline events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to see your latest pipeline events.
     * @param param The request object
     */
    listCIAppPipelineEvents(param = {}, options) {
        const requestContextPromise = this.requestFactory.listCIAppPipelineEvents(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listCIAppPipelineEvents(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listCIAppPipelineEvents returning a generator with all the items.
     */
    listCIAppPipelineEventsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listCIAppPipelineEventsWithPagination_1() {
            let pageSize = 10;
            if (param.pageLimit !== undefined) {
                pageSize = param.pageLimit;
            }
            param.pageLimit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listCIAppPipelineEvents(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listCIAppPipelineEvents(responseContext));
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
     * List endpoint returns CI Visibility pipeline events that match a [search query](https://docs.datadoghq.com/continuous_integration/explorer/search_syntax/).
     * [Results are paginated similarly to logs](https://docs.datadoghq.com/logs/guide/collect-multiple-logs-with-pagination).
     *
     * Use this endpoint to build complex events filtering and search.
     * @param param The request object
     */
    searchCIAppPipelineEvents(param = {}, options) {
        const requestContextPromise = this.requestFactory.searchCIAppPipelineEvents(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchCIAppPipelineEvents(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of searchCIAppPipelineEvents returning a generator with all the items.
     */
    searchCIAppPipelineEventsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* searchCIAppPipelineEventsWithPagination_1() {
            let pageSize = 10;
            if (param.body === undefined) {
                param.body = new CIAppPipelineEventsRequest_1.CIAppPipelineEventsRequest();
            }
            if (param.body.page === undefined) {
                param.body.page = new CIAppQueryPageOptions_1.CIAppQueryPageOptions();
            }
            if (param.body.page.limit !== undefined) {
                pageSize = param.body.page.limit;
            }
            param.body.page.limit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.searchCIAppPipelineEvents(param.body, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.searchCIAppPipelineEvents(responseContext));
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
exports.CIVisibilityPipelinesApi = CIVisibilityPipelinesApi;
//# sourceMappingURL=CIVisibilityPipelinesApi.js.map