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
exports.MetricsApi = exports.MetricsApiResponseProcessor = exports.MetricsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class MetricsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getMetricMetadata(metricName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'metricName' is not null or undefined
            if (metricName === null || metricName === undefined) {
                throw new baseapi_1.RequiredError("metricName", "getMetricMetadata");
            }
            // Path Params
            const localVarPath = "/api/v1/metrics/{metric_name}".replace("{metric_name}", encodeURIComponent(String(metricName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.getMetricMetadata")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
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
    listActiveMetrics(from, host, tagFilter, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'from' is not null or undefined
            if (from === null || from === undefined) {
                throw new baseapi_1.RequiredError("from", "listActiveMetrics");
            }
            // Path Params
            const localVarPath = "/api/v1/metrics";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.listActiveMetrics")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (from !== undefined) {
                requestContext.setQueryParam("from", ObjectSerializer_1.ObjectSerializer.serialize(from, "number", "int64"), "");
            }
            if (host !== undefined) {
                requestContext.setQueryParam("host", ObjectSerializer_1.ObjectSerializer.serialize(host, "string", ""), "");
            }
            if (tagFilter !== undefined) {
                requestContext.setQueryParam("tag_filter", ObjectSerializer_1.ObjectSerializer.serialize(tagFilter, "string", ""), "");
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
    listMetrics(q, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'q' is not null or undefined
            if (q === null || q === undefined) {
                throw new baseapi_1.RequiredError("q", "listMetrics");
            }
            // Path Params
            const localVarPath = "/api/v1/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.listMetrics")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (q !== undefined) {
                requestContext.setQueryParam("q", ObjectSerializer_1.ObjectSerializer.serialize(q, "string", ""), "");
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
    queryMetrics(from, to, query, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'from' is not null or undefined
            if (from === null || from === undefined) {
                throw new baseapi_1.RequiredError("from", "queryMetrics");
            }
            // verify required parameter 'to' is not null or undefined
            if (to === null || to === undefined) {
                throw new baseapi_1.RequiredError("to", "queryMetrics");
            }
            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new baseapi_1.RequiredError("query", "queryMetrics");
            }
            // Path Params
            const localVarPath = "/api/v1/query";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.queryMetrics")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (from !== undefined) {
                requestContext.setQueryParam("from", ObjectSerializer_1.ObjectSerializer.serialize(from, "number", "int64"), "");
            }
            if (to !== undefined) {
                requestContext.setQueryParam("to", ObjectSerializer_1.ObjectSerializer.serialize(to, "number", "int64"), "");
            }
            if (query !== undefined) {
                requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""), "");
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
    submitDistributionPoints(body, contentEncoding, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "submitDistributionPoints");
            }
            // Path Params
            const localVarPath = "/api/v1/distribution_points";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.submitDistributionPoints")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "text/json, application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Header Params
            if (contentEncoding !== undefined) {
                requestContext.setHeaderParam("Content-Encoding", ObjectSerializer_1.ObjectSerializer.serialize(contentEncoding, "DistributionPointsContentEncoding", ""));
            }
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType(["text/json"]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "DistributionPointsPayload", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["apiKeyAuth"]);
            return requestContext;
        });
    }
    submitMetrics(body, contentEncoding, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "submitMetrics");
            }
            // Path Params
            const localVarPath = "/api/v1/series";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.submitMetrics")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "text/json, application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Header Params
            if (contentEncoding !== undefined) {
                requestContext.setHeaderParam("Content-Encoding", ObjectSerializer_1.ObjectSerializer.serialize(contentEncoding, "MetricContentEncoding", ""));
            }
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType(["text/json"]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "MetricsPayload", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["apiKeyAuth"]);
            return requestContext;
        });
    }
    updateMetricMetadata(metricName, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'metricName' is not null or undefined
            if (metricName === null || metricName === undefined) {
                throw new baseapi_1.RequiredError("metricName", "updateMetricMetadata");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateMetricMetadata");
            }
            // Path Params
            const localVarPath = "/api/v1/metrics/{metric_name}".replace("{metric_name}", encodeURIComponent(String(metricName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.MetricsApi.updateMetricMetadata")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "MetricMetadata", ""), contentType);
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
exports.MetricsApiRequestFactory = MetricsApiRequestFactory;
class MetricsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMetricMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMetricMetadata(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricMetadata");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricMetadata", "");
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
     * @params response Response returned by the server for a request to listActiveMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listActiveMetrics(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricsListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricsListResponse", "");
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
     * @params response Response returned by the server for a request to listMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMetrics(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricSearchResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricSearchResponse", "");
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
     * @params response Response returned by the server for a request to queryMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryMetrics(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricsQueryResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricsQueryResponse", "");
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
     * @params response Response returned by the server for a request to submitDistributionPoints
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitDistributionPoints(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IntakePayloadAccepted");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 408 ||
                response.httpStatusCode === 413 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IntakePayloadAccepted", "");
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
     * @params response Response returned by the server for a request to submitMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitMetrics(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IntakePayloadAccepted");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 408 ||
                response.httpStatusCode === 413 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IntakePayloadAccepted", "");
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
     * @params response Response returned by the server for a request to updateMetricMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMetricMetadata(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricMetadata");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MetricMetadata", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.MetricsApiResponseProcessor = MetricsApiResponseProcessor;
class MetricsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new MetricsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new MetricsApiResponseProcessor();
    }
    /**
     * Get metadata about a specific metric.
     * @param param The request object
     */
    getMetricMetadata(param, options) {
        const requestContextPromise = this.requestFactory.getMetricMetadata(param.metricName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getMetricMetadata(responseContext);
            });
        });
    }
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * @param param The request object
     */
    listActiveMetrics(param, options) {
        const requestContextPromise = this.requestFactory.listActiveMetrics(param.from, param.host, param.tagFilter, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listActiveMetrics(responseContext);
            });
        });
    }
    /**
     * **Note**: This endpoint is deprecated. Use `/api/v2/metrics` instead.
     *
     * Search for metrics from the last 24 hours in Datadog.
     * @param param The request object
     */
    listMetrics(param, options) {
        const requestContextPromise = this.requestFactory.listMetrics(param.q, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listMetrics(responseContext);
            });
        });
    }
    /**
     * Query timeseries points.
     * @param param The request object
     */
    queryMetrics(param, options) {
        const requestContextPromise = this.requestFactory.queryMetrics(param.from, param.to, param.query, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.queryMetrics(responseContext);
            });
        });
    }
    /**
     * The distribution points end-point allows you to post distribution data that can be graphed on Datadog’s dashboards.
     * @param param The request object
     */
    submitDistributionPoints(param, options) {
        const requestContextPromise = this.requestFactory.submitDistributionPoints(param.body, param.contentEncoding, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.submitDistributionPoints(responseContext);
            });
        });
    }
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.
     * The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).
     *
     * If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:
     *
     * - 64 bits for the timestamp
     * - 64 bits for the value
     * - 40 bytes for the metric names
     * - 50 bytes for the timeseries
     * - The full payload is approximately 100 bytes. However, with the DogStatsD API,
     * compression is applied, which reduces the payload size.
     * @param param The request object
     */
    submitMetrics(param, options) {
        const requestContextPromise = this.requestFactory.submitMetrics(param.body, param.contentEncoding, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.submitMetrics(responseContext);
            });
        });
    }
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * @param param The request object
     */
    updateMetricMetadata(param, options) {
        const requestContextPromise = this.requestFactory.updateMetricMetadata(param.metricName, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateMetricMetadata(responseContext);
            });
        });
    }
}
exports.MetricsApi = MetricsApi;
//# sourceMappingURL=MetricsApi.js.map