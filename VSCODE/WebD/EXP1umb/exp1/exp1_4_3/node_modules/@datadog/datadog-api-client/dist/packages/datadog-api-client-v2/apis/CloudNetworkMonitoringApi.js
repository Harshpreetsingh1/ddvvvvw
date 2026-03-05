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
exports.CloudNetworkMonitoringApi = exports.CloudNetworkMonitoringApiResponseProcessor = exports.CloudNetworkMonitoringApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class CloudNetworkMonitoringApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getAggregatedConnections(from, to, groupBy, tags, limit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/network/connections/aggregate";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CloudNetworkMonitoringApi.getAggregatedConnections")
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
            if (groupBy !== undefined) {
                requestContext.setQueryParam("group_by", ObjectSerializer_1.ObjectSerializer.serialize(groupBy, "string", ""), "");
            }
            if (tags !== undefined) {
                requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""), "");
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getAggregatedDns(from, to, groupBy, tags, limit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/network/dns/aggregate";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CloudNetworkMonitoringApi.getAggregatedDns")
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
            if (groupBy !== undefined) {
                requestContext.setQueryParam("group_by", ObjectSerializer_1.ObjectSerializer.serialize(groupBy, "string", ""), "");
            }
            if (tags !== undefined) {
                requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""), "");
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
}
exports.CloudNetworkMonitoringApiRequestFactory = CloudNetworkMonitoringApiRequestFactory;
class CloudNetworkMonitoringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAggregatedConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAggregatedConnections(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SingleAggregatedConnectionResponseArray");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SingleAggregatedConnectionResponseArray", "");
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
     * @params response Response returned by the server for a request to getAggregatedDns
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAggregatedDns(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SingleAggregatedDnsResponseArray");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SingleAggregatedDnsResponseArray", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.CloudNetworkMonitoringApiResponseProcessor = CloudNetworkMonitoringApiResponseProcessor;
class CloudNetworkMonitoringApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory ||
                new CloudNetworkMonitoringApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new CloudNetworkMonitoringApiResponseProcessor();
    }
    /**
     * Get all aggregated connections.
     * @param param The request object
     */
    getAggregatedConnections(param = {}, options) {
        const requestContextPromise = this.requestFactory.getAggregatedConnections(param.from, param.to, param.groupBy, param.tags, param.limit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getAggregatedConnections(responseContext);
            });
        });
    }
    /**
     * Get all aggregated DNS traffic.
     * @param param The request object
     */
    getAggregatedDns(param = {}, options) {
        const requestContextPromise = this.requestFactory.getAggregatedDns(param.from, param.to, param.groupBy, param.tags, param.limit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getAggregatedDns(responseContext);
            });
        });
    }
}
exports.CloudNetworkMonitoringApi = CloudNetworkMonitoringApi;
//# sourceMappingURL=CloudNetworkMonitoringApi.js.map