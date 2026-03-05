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
exports.DataDeletionApi = exports.DataDeletionApiResponseProcessor = exports.DataDeletionApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class DataDeletionApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    cancelDataDeletionRequest(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'cancelDataDeletionRequest'");
            if (!_config.unstableOperations["v2.cancelDataDeletionRequest"]) {
                throw new Error("Unstable operation 'cancelDataDeletionRequest' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "cancelDataDeletionRequest");
            }
            // Path Params
            const localVarPath = "/api/v2/deletion/requests/{id}/cancel".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.DataDeletionApi.cancelDataDeletionRequest")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
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
    createDataDeletionRequest(product, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createDataDeletionRequest'");
            if (!_config.unstableOperations["v2.createDataDeletionRequest"]) {
                throw new Error("Unstable operation 'createDataDeletionRequest' is disabled");
            }
            // verify required parameter 'product' is not null or undefined
            if (product === null || product === undefined) {
                throw new baseapi_1.RequiredError("product", "createDataDeletionRequest");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createDataDeletionRequest");
            }
            // Path Params
            const localVarPath = "/api/v2/deletion/data/{product}".replace("{product}", encodeURIComponent(String(product)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.DataDeletionApi.createDataDeletionRequest")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CreateDataDeletionRequestBody", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getDataDeletionRequests(nextPage, product, query, status, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getDataDeletionRequests'");
            if (!_config.unstableOperations["v2.getDataDeletionRequests"]) {
                throw new Error("Unstable operation 'getDataDeletionRequests' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/deletion/requests";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.DataDeletionApi.getDataDeletionRequests")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (nextPage !== undefined) {
                requestContext.setQueryParam("next_page", ObjectSerializer_1.ObjectSerializer.serialize(nextPage, "string", ""), "");
            }
            if (product !== undefined) {
                requestContext.setQueryParam("product", ObjectSerializer_1.ObjectSerializer.serialize(product, "string", ""), "");
            }
            if (query !== undefined) {
                requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""), "");
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "string", ""), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page_size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
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
exports.DataDeletionApiRequestFactory = DataDeletionApiRequestFactory;
class DataDeletionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDataDeletionRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelDataDeletionRequest(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CancelDataDeletionResponseBody");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 412 ||
                response.httpStatusCode === 429 ||
                response.httpStatusCode === 500) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CancelDataDeletionResponseBody", "");
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
     * @params response Response returned by the server for a request to createDataDeletionRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDataDeletionRequest(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CreateDataDeletionResponseBody");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 412 ||
                response.httpStatusCode === 429 ||
                response.httpStatusCode === 500) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CreateDataDeletionResponseBody", "");
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
     * @params response Response returned by the server for a request to getDataDeletionRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDataDeletionRequests(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GetDataDeletionsResponseBody");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 429 ||
                response.httpStatusCode === 500) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GetDataDeletionsResponseBody", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.DataDeletionApiResponseProcessor = DataDeletionApiResponseProcessor;
class DataDeletionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new DataDeletionApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new DataDeletionApiResponseProcessor();
    }
    /**
     * Cancels a data deletion request by providing its ID.
     * @param param The request object
     */
    cancelDataDeletionRequest(param, options) {
        const requestContextPromise = this.requestFactory.cancelDataDeletionRequest(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.cancelDataDeletionRequest(responseContext);
            });
        });
    }
    /**
     * Creates a data deletion request by providing a query and a timeframe targeting the proper data.
     * @param param The request object
     */
    createDataDeletionRequest(param, options) {
        const requestContextPromise = this.requestFactory.createDataDeletionRequest(param.product, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createDataDeletionRequest(responseContext);
            });
        });
    }
    /**
     * Gets a list of data deletion requests based on several filter parameters.
     * @param param The request object
     */
    getDataDeletionRequests(param = {}, options) {
        const requestContextPromise = this.requestFactory.getDataDeletionRequests(param.nextPage, param.product, param.query, param.status, param.pageSize, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getDataDeletionRequests(responseContext);
            });
        });
    }
}
exports.DataDeletionApi = DataDeletionApi;
//# sourceMappingURL=DataDeletionApi.js.map