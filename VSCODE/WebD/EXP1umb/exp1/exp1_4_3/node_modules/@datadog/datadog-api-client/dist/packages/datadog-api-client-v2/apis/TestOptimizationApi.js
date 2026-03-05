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
exports.TestOptimizationApi = exports.TestOptimizationApiResponseProcessor = exports.TestOptimizationApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
const FlakyTestsSearchPageOptions_1 = require("../models/FlakyTestsSearchPageOptions");
const FlakyTestsSearchRequest_1 = require("../models/FlakyTestsSearchRequest");
const FlakyTestsSearchRequestAttributes_1 = require("../models/FlakyTestsSearchRequestAttributes");
const FlakyTestsSearchRequestData_1 = require("../models/FlakyTestsSearchRequestData");
class TestOptimizationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    searchFlakyTests(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'searchFlakyTests'");
            if (!_config.unstableOperations["v2.searchFlakyTests"]) {
                throw new Error("Unstable operation 'searchFlakyTests' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/test/flaky-test-management/tests";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.TestOptimizationApi.searchFlakyTests")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "FlakyTestsSearchRequest", ""), contentType);
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
    updateFlakyTests(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateFlakyTests'");
            if (!_config.unstableOperations["v2.updateFlakyTests"]) {
                throw new Error("Unstable operation 'updateFlakyTests' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateFlakyTests");
            }
            // Path Params
            const localVarPath = "/api/v2/test/flaky-test-management/tests";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.TestOptimizationApi.updateFlakyTests")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "UpdateFlakyTestsRequest", ""), contentType);
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
exports.TestOptimizationApiRequestFactory = TestOptimizationApiRequestFactory;
class TestOptimizationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchFlakyTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchFlakyTests(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FlakyTestsSearchResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "FlakyTestsSearchResponse", "");
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
     * @params response Response returned by the server for a request to updateFlakyTests
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateFlakyTests(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UpdateFlakyTestsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UpdateFlakyTestsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.TestOptimizationApiResponseProcessor = TestOptimizationApiResponseProcessor;
class TestOptimizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new TestOptimizationApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new TestOptimizationApiResponseProcessor();
    }
    /**
     * List endpoint returning flaky tests from Flaky Test Management. Results are paginated.
     *
     * The response includes comprehensive test information including:
     * - Test identification and metadata (module, suite, name)
     * - Flaky state and categorization
     * - First and last flake occurrences (timestamp, branch, commit SHA)
     * - Test execution statistics from the last 7 days (failure rate)
     * - Pipeline impact metrics (failed pipelines count, total lost time)
     * - Complete status change history (optional, ordered from most recent to oldest)
     *
     * Set `include_history` to `true` in the request to receive the status change history for each test.
     * History is disabled by default for better performance.
     *
     * Results support filtering by various facets including service, environment, repository, branch, and test state.
     * @param param The request object
     */
    searchFlakyTests(param = {}, options) {
        const requestContextPromise = this.requestFactory.searchFlakyTests(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchFlakyTests(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of searchFlakyTests returning a generator with all the items.
     */
    searchFlakyTestsWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* searchFlakyTestsWithPagination_1() {
            let pageSize = 10;
            if (param.body === undefined) {
                param.body = new FlakyTestsSearchRequest_1.FlakyTestsSearchRequest();
            }
            if (param.body.data === undefined) {
                param.body.data = new FlakyTestsSearchRequestData_1.FlakyTestsSearchRequestData();
            }
            if (param.body.data.attributes === undefined) {
                param.body.data.attributes = new FlakyTestsSearchRequestAttributes_1.FlakyTestsSearchRequestAttributes();
            }
            if (param.body.data.attributes.page === undefined) {
                param.body.data.attributes.page = new FlakyTestsSearchPageOptions_1.FlakyTestsSearchPageOptions();
            }
            if (param.body.data.attributes.page.limit !== undefined) {
                pageSize = param.body.data.attributes.page.limit;
            }
            param.body.data.attributes.page.limit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.searchFlakyTests(param.body, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.searchFlakyTests(responseContext));
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
                const cursorMetaPagination = cursorMeta.pagination;
                if (cursorMetaPagination === undefined) {
                    break;
                }
                const cursorMetaPaginationNextPage = cursorMetaPagination.nextPage;
                if (cursorMetaPaginationNextPage === undefined) {
                    break;
                }
                param.body.data.attributes.page.cursor = cursorMetaPaginationNextPage;
            }
        });
    }
    /**
     * Update the state of multiple flaky tests in Flaky Test Management.
     * @param param The request object
     */
    updateFlakyTests(param, options) {
        const requestContextPromise = this.requestFactory.updateFlakyTests(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateFlakyTests(responseContext);
            });
        });
    }
}
exports.TestOptimizationApi = TestOptimizationApi;
//# sourceMappingURL=TestOptimizationApi.js.map