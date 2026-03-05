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
exports.ServiceAccountsApi = exports.ServiceAccountsApiResponseProcessor = exports.ServiceAccountsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ServiceAccountsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createServiceAccount(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createServiceAccount");
            }
            // Path Params
            const localVarPath = "/api/v2/service_accounts";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceAccountsApi.createServiceAccount")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ServiceAccountCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createServiceAccountApplicationKey(serviceAccountId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'serviceAccountId' is not null or undefined
            if (serviceAccountId === null || serviceAccountId === undefined) {
                throw new baseapi_1.RequiredError("serviceAccountId", "createServiceAccountApplicationKey");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createServiceAccountApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/service_accounts/{service_account_id}/application_keys".replace("{service_account_id}", encodeURIComponent(String(serviceAccountId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceAccountsApi.createServiceAccountApplicationKey")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationKeyCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteServiceAccountApplicationKey(serviceAccountId, appKeyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'serviceAccountId' is not null or undefined
            if (serviceAccountId === null || serviceAccountId === undefined) {
                throw new baseapi_1.RequiredError("serviceAccountId", "deleteServiceAccountApplicationKey");
            }
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "deleteServiceAccountApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
                .replace("{service_account_id}", encodeURIComponent(String(serviceAccountId)))
                .replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceAccountsApi.deleteServiceAccountApplicationKey")
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
    getServiceAccountApplicationKey(serviceAccountId, appKeyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'serviceAccountId' is not null or undefined
            if (serviceAccountId === null || serviceAccountId === undefined) {
                throw new baseapi_1.RequiredError("serviceAccountId", "getServiceAccountApplicationKey");
            }
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "getServiceAccountApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
                .replace("{service_account_id}", encodeURIComponent(String(serviceAccountId)))
                .replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceAccountsApi.getServiceAccountApplicationKey")
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
    listServiceAccountApplicationKeys(serviceAccountId, pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'serviceAccountId' is not null or undefined
            if (serviceAccountId === null || serviceAccountId === undefined) {
                throw new baseapi_1.RequiredError("serviceAccountId", "listServiceAccountApplicationKeys");
            }
            // Path Params
            const localVarPath = "/api/v2/service_accounts/{service_account_id}/application_keys".replace("{service_account_id}", encodeURIComponent(String(serviceAccountId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceAccountsApi.listServiceAccountApplicationKeys")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "ApplicationKeysSort", ""), "");
            }
            if (filter !== undefined) {
                requestContext.setQueryParam("filter", ObjectSerializer_1.ObjectSerializer.serialize(filter, "string", ""), "");
            }
            if (filterCreatedAtStart !== undefined) {
                requestContext.setQueryParam("filter[created_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtStart, "string", ""), "");
            }
            if (filterCreatedAtEnd !== undefined) {
                requestContext.setQueryParam("filter[created_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedAtEnd, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateServiceAccountApplicationKey(serviceAccountId, appKeyId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'serviceAccountId' is not null or undefined
            if (serviceAccountId === null || serviceAccountId === undefined) {
                throw new baseapi_1.RequiredError("serviceAccountId", "updateServiceAccountApplicationKey");
            }
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "updateServiceAccountApplicationKey");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateServiceAccountApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}"
                .replace("{service_account_id}", encodeURIComponent(String(serviceAccountId)))
                .replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceAccountsApi.updateServiceAccountApplicationKey")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationKeyUpdateRequest", ""), contentType);
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
exports.ServiceAccountsApiRequestFactory = ServiceAccountsApiRequestFactory;
class ServiceAccountsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServiceAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
    createServiceAccount(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UserResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UserResponse", "");
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
     * @params response Response returned by the server for a request to createServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createServiceAccountApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse", "");
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
     * @params response Response returned by the server for a request to deleteServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteServiceAccountApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to getServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getServiceAccountApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PartialApplicationKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PartialApplicationKeyResponse", "");
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
     * @params response Response returned by the server for a request to listServiceAccountApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listServiceAccountApplicationKeys(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListApplicationKeysResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListApplicationKeysResponse", "");
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
     * @params response Response returned by the server for a request to updateServiceAccountApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateServiceAccountApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PartialApplicationKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PartialApplicationKeyResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ServiceAccountsApiResponseProcessor = ServiceAccountsApiResponseProcessor;
class ServiceAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ServiceAccountsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ServiceAccountsApiResponseProcessor();
    }
    /**
     * Create a service account for your organization.
     * @param param The request object
     */
    createServiceAccount(param, options) {
        const requestContextPromise = this.requestFactory.createServiceAccount(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createServiceAccount(responseContext);
            });
        });
    }
    /**
     * Create an application key for this service account.
     * @param param The request object
     */
    createServiceAccountApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.createServiceAccountApplicationKey(param.serviceAccountId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createServiceAccountApplicationKey(responseContext);
            });
        });
    }
    /**
     * Delete an application key owned by this service account.
     * @param param The request object
     */
    deleteServiceAccountApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.deleteServiceAccountApplicationKey(param.serviceAccountId, param.appKeyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteServiceAccountApplicationKey(responseContext);
            });
        });
    }
    /**
     * Get an application key owned by this service account.
     * @param param The request object
     */
    getServiceAccountApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.getServiceAccountApplicationKey(param.serviceAccountId, param.appKeyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getServiceAccountApplicationKey(responseContext);
            });
        });
    }
    /**
     * List all application keys available for this service account.
     * @param param The request object
     */
    listServiceAccountApplicationKeys(param, options) {
        const requestContextPromise = this.requestFactory.listServiceAccountApplicationKeys(param.serviceAccountId, param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listServiceAccountApplicationKeys(responseContext);
            });
        });
    }
    /**
     * Edit an application key owned by this service account.
     * @param param The request object
     */
    updateServiceAccountApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.updateServiceAccountApplicationKey(param.serviceAccountId, param.appKeyId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateServiceAccountApplicationKey(responseContext);
            });
        });
    }
}
exports.ServiceAccountsApi = ServiceAccountsApi;
//# sourceMappingURL=ServiceAccountsApi.js.map