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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIManagementApi = exports.APIManagementApiResponseProcessor = exports.APIManagementApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const form_data_1 = __importDefault(require("form-data"));
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class APIManagementApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createOpenAPI(openapiSpecFile, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createOpenAPI'");
            if (!_config.unstableOperations["v2.createOpenAPI"]) {
                throw new Error("Unstable operation 'createOpenAPI' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/apicatalog/openapi";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.APIManagementApi.createOpenAPI")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Form Params
            const localVarFormParams = new form_data_1.default();
            if (openapiSpecFile !== undefined) {
                // TODO: replace .append with .set
                localVarFormParams.append("openapi_spec_file", openapiSpecFile.data, openapiSpecFile.name);
            }
            requestContext.setBody(localVarFormParams);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    deleteOpenAPI(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteOpenAPI'");
            if (!_config.unstableOperations["v2.deleteOpenAPI"]) {
                throw new Error("Unstable operation 'deleteOpenAPI' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "deleteOpenAPI");
            }
            // Path Params
            const localVarPath = "/api/v2/apicatalog/api/{id}".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.APIManagementApi.deleteOpenAPI")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
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
    getOpenAPI(id, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getOpenAPI'");
            if (!_config.unstableOperations["v2.getOpenAPI"]) {
                throw new Error("Unstable operation 'getOpenAPI' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "getOpenAPI");
            }
            // Path Params
            const localVarPath = "/api/v2/apicatalog/api/{id}/openapi".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.APIManagementApi.getOpenAPI")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "multipart/form-data, application/json");
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
    listAPIs(query, pageLimit, pageOffset, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listAPIs'");
            if (!_config.unstableOperations["v2.listAPIs"]) {
                throw new Error("Unstable operation 'listAPIs' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/apicatalog/api";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.APIManagementApi.listAPIs")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (query !== undefined) {
                requestContext.setQueryParam("query", ObjectSerializer_1.ObjectSerializer.serialize(query, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
            }
            if (pageOffset !== undefined) {
                requestContext.setQueryParam("page[offset]", ObjectSerializer_1.ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
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
    updateOpenAPI(id, openapiSpecFile, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateOpenAPI'");
            if (!_config.unstableOperations["v2.updateOpenAPI"]) {
                throw new Error("Unstable operation 'updateOpenAPI' is disabled");
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("id", "updateOpenAPI");
            }
            // Path Params
            const localVarPath = "/api/v2/apicatalog/api/{id}/openapi".replace("{id}", encodeURIComponent(String(id)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.APIManagementApi.updateOpenAPI")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Form Params
            const localVarFormParams = new form_data_1.default();
            if (openapiSpecFile !== undefined) {
                // TODO: replace .append with .set
                localVarFormParams.append("openapi_spec_file", openapiSpecFile.data, openapiSpecFile.name);
            }
            requestContext.setBody(localVarFormParams);
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
exports.APIManagementApiRequestFactory = APIManagementApiRequestFactory;
class APIManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOpenAPI(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CreateOpenAPIResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
            if (response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CreateOpenAPIResponse", "");
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
     * @params response Response returned by the server for a request to deleteOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOpenAPI(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404) {
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
            if (response.httpStatusCode === 429) {
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
     * @params response Response returned by the server for a request to getOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOpenAPI(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = (yield response.getBodyAsFile());
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404) {
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
            if (response.httpStatusCode === 429) {
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
                const body = (yield response.getBodyAsFile());
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
     * @params response Response returned by the server for a request to listAPIs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListAPIsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
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
            if (response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListAPIsResponse", "");
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
     * @params response Response returned by the server for a request to updateOpenAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOpenAPI(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UpdateOpenAPIResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404) {
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
            if (response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UpdateOpenAPIResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.APIManagementApiResponseProcessor = APIManagementApiResponseProcessor;
class APIManagementApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new APIManagementApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new APIManagementApiResponseProcessor();
    }
    /**
     * Create a new API from the [OpenAPI](https://spec.openapis.org/oas/latest.html) specification given.
     * See the [API Catalog documentation](https://docs.datadoghq.com/api_catalog/add_metadata/) for additional
     * information about the possible metadata.
     * It returns the created API ID.
     * @param param The request object
     */
    createOpenAPI(param = {}, options) {
        const requestContextPromise = this.requestFactory.createOpenAPI(param.openapiSpecFile, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createOpenAPI(responseContext);
            });
        });
    }
    /**
     * Delete a specific API by ID.
     * @param param The request object
     */
    deleteOpenAPI(param, options) {
        const requestContextPromise = this.requestFactory.deleteOpenAPI(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteOpenAPI(responseContext);
            });
        });
    }
    /**
     * Retrieve information about a specific API in [OpenAPI](https://spec.openapis.org/oas/latest.html) format file.
     * @param param The request object
     */
    getOpenAPI(param, options) {
        const requestContextPromise = this.requestFactory.getOpenAPI(param.id, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getOpenAPI(responseContext);
            });
        });
    }
    /**
     * List APIs and their IDs.
     * @param param The request object
     */
    listAPIs(param = {}, options) {
        const requestContextPromise = this.requestFactory.listAPIs(param.query, param.pageLimit, param.pageOffset, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listAPIs(responseContext);
            });
        });
    }
    /**
     * Update information about a specific API. The given content will replace all API content of the given ID.
     * The ID is returned by the create API, or can be found in the URL in the API catalog UI.
     * @param param The request object
     */
    updateOpenAPI(param, options) {
        const requestContextPromise = this.requestFactory.updateOpenAPI(param.id, param.openapiSpecFile, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateOpenAPI(responseContext);
            });
        });
    }
}
exports.APIManagementApi = APIManagementApi;
//# sourceMappingURL=APIManagementApi.js.map