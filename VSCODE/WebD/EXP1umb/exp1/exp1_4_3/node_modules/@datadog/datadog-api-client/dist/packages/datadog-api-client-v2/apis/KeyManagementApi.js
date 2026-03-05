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
exports.KeyManagementApi = exports.KeyManagementApiResponseProcessor = exports.KeyManagementApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class KeyManagementApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createAPIKey(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createAPIKey");
            }
            // Path Params
            const localVarPath = "/api/v2/api_keys";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.createAPIKey")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "APIKeyCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createCurrentUserApplicationKey(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createCurrentUserApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/current_user/application_keys";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.createCurrentUserApplicationKey")
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
    deleteAPIKey(apiKeyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'apiKeyId' is not null or undefined
            if (apiKeyId === null || apiKeyId === undefined) {
                throw new baseapi_1.RequiredError("apiKeyId", "deleteAPIKey");
            }
            // Path Params
            const localVarPath = "/api/v2/api_keys/{api_key_id}".replace("{api_key_id}", encodeURIComponent(String(apiKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.deleteAPIKey")
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
    deleteApplicationKey(appKeyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "deleteApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/application_keys/{app_key_id}".replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.deleteApplicationKey")
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
    deleteCurrentUserApplicationKey(appKeyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "deleteCurrentUserApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/current_user/application_keys/{app_key_id}".replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.deleteCurrentUserApplicationKey")
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
    getAPIKey(apiKeyId, include, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'apiKeyId' is not null or undefined
            if (apiKeyId === null || apiKeyId === undefined) {
                throw new baseapi_1.RequiredError("apiKeyId", "getAPIKey");
            }
            // Path Params
            const localVarPath = "/api/v2/api_keys/{api_key_id}".replace("{api_key_id}", encodeURIComponent(String(apiKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.getAPIKey")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getApplicationKey(appKeyId, include, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "getApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/application_keys/{app_key_id}".replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.getApplicationKey")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getCurrentUserApplicationKey(appKeyId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "getCurrentUserApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/current_user/application_keys/{app_key_id}".replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.getCurrentUserApplicationKey")
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
    listAPIKeys(pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, filterModifiedAtStart, filterModifiedAtEnd, include, filterRemoteConfigReadEnabled, filterCategory, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/api_keys";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.listAPIKeys")
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
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "APIKeysSort", ""), "");
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
            if (filterModifiedAtStart !== undefined) {
                requestContext.setQueryParam("filter[modified_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterModifiedAtStart, "string", ""), "");
            }
            if (filterModifiedAtEnd !== undefined) {
                requestContext.setQueryParam("filter[modified_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterModifiedAtEnd, "string", ""), "");
            }
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            if (filterRemoteConfigReadEnabled !== undefined) {
                requestContext.setQueryParam("filter[remote_config_read_enabled]", ObjectSerializer_1.ObjectSerializer.serialize(filterRemoteConfigReadEnabled, "boolean", ""), "");
            }
            if (filterCategory !== undefined) {
                requestContext.setQueryParam("filter[category]", ObjectSerializer_1.ObjectSerializer.serialize(filterCategory, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listApplicationKeys(pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, include, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/application_keys";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.listApplicationKeys")
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
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listCurrentUserApplicationKeys(pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, include, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/current_user/application_keys";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.listCurrentUserApplicationKeys")
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
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateAPIKey(apiKeyId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'apiKeyId' is not null or undefined
            if (apiKeyId === null || apiKeyId === undefined) {
                throw new baseapi_1.RequiredError("apiKeyId", "updateAPIKey");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateAPIKey");
            }
            // Path Params
            const localVarPath = "/api/v2/api_keys/{api_key_id}".replace("{api_key_id}", encodeURIComponent(String(apiKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.updateAPIKey")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "APIKeyUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateApplicationKey(appKeyId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "updateApplicationKey");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/application_keys/{app_key_id}".replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.updateApplicationKey")
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
    updateCurrentUserApplicationKey(appKeyId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'appKeyId' is not null or undefined
            if (appKeyId === null || appKeyId === undefined) {
                throw new baseapi_1.RequiredError("appKeyId", "updateCurrentUserApplicationKey");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateCurrentUserApplicationKey");
            }
            // Path Params
            const localVarPath = "/api/v2/current_user/application_keys/{app_key_id}".replace("{app_key_id}", encodeURIComponent(String(appKeyId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.KeyManagementApi.updateCurrentUserApplicationKey")
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
exports.KeyManagementApiRequestFactory = KeyManagementApiRequestFactory;
class KeyManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAPIKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeyResponse", "");
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
     * @params response Response returned by the server for a request to createCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCurrentUserApplicationKey(response) {
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
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAPIKey(response) {
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
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationKey(response) {
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
     * @params response Response returned by the server for a request to deleteCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCurrentUserApplicationKey(response) {
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
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeyResponse", "");
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
     * @params response Response returned by the server for a request to getApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse");
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
     * @params response Response returned by the server for a request to getCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCurrentUserApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse");
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
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIKeys(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeysResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeysResponse", "");
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
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationKeys(response) {
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
     * @params response Response returned by the server for a request to listCurrentUserApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCurrentUserApplicationKeys(response) {
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
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPIKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "APIKeyResponse", "");
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
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse");
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
     * @params response Response returned by the server for a request to updateCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCurrentUserApplicationKey(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationKeyResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.KeyManagementApiResponseProcessor = KeyManagementApiResponseProcessor;
class KeyManagementApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new KeyManagementApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new KeyManagementApiResponseProcessor();
    }
    /**
     * Create an API key.
     * @param param The request object
     */
    createAPIKey(param, options) {
        const requestContextPromise = this.requestFactory.createAPIKey(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createAPIKey(responseContext);
            });
        });
    }
    /**
     * Create an application key for current user
     * @param param The request object
     */
    createCurrentUserApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.createCurrentUserApplicationKey(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createCurrentUserApplicationKey(responseContext);
            });
        });
    }
    /**
     * Delete an API key.
     * @param param The request object
     */
    deleteAPIKey(param, options) {
        const requestContextPromise = this.requestFactory.deleteAPIKey(param.apiKeyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteAPIKey(responseContext);
            });
        });
    }
    /**
     * Delete an application key
     * @param param The request object
     */
    deleteApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.deleteApplicationKey(param.appKeyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteApplicationKey(responseContext);
            });
        });
    }
    /**
     * Delete an application key owned by current user
     * @param param The request object
     */
    deleteCurrentUserApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.deleteCurrentUserApplicationKey(param.appKeyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteCurrentUserApplicationKey(responseContext);
            });
        });
    }
    /**
     * Get an API key.
     * @param param The request object
     */
    getAPIKey(param, options) {
        const requestContextPromise = this.requestFactory.getAPIKey(param.apiKeyId, param.include, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getAPIKey(responseContext);
            });
        });
    }
    /**
     * Get an application key for your org.
     * @param param The request object
     */
    getApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.getApplicationKey(param.appKeyId, param.include, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getApplicationKey(responseContext);
            });
        });
    }
    /**
     * Get an application key owned by current user.
     * The `key` field is not returned for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    getCurrentUserApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.getCurrentUserApplicationKey(param.appKeyId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getCurrentUserApplicationKey(responseContext);
            });
        });
    }
    /**
     * List all API keys available for your account.
     * @param param The request object
     */
    listAPIKeys(param = {}, options) {
        const requestContextPromise = this.requestFactory.listAPIKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, param.filterModifiedAtStart, param.filterModifiedAtEnd, param.include, param.filterRemoteConfigReadEnabled, param.filterCategory, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listAPIKeys(responseContext);
            });
        });
    }
    /**
     * List all application keys available for your org
     * @param param The request object
     */
    listApplicationKeys(param = {}, options) {
        const requestContextPromise = this.requestFactory.listApplicationKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, param.include, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listApplicationKeys(responseContext);
            });
        });
    }
    /**
     * List all application keys available for current user
     * @param param The request object
     */
    listCurrentUserApplicationKeys(param = {}, options) {
        const requestContextPromise = this.requestFactory.listCurrentUserApplicationKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, param.include, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listCurrentUserApplicationKeys(responseContext);
            });
        });
    }
    /**
     * Update an API key.
     * @param param The request object
     */
    updateAPIKey(param, options) {
        const requestContextPromise = this.requestFactory.updateAPIKey(param.apiKeyId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateAPIKey(responseContext);
            });
        });
    }
    /**
     * Edit an application key
     * @param param The request object
     */
    updateApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.updateApplicationKey(param.appKeyId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateApplicationKey(responseContext);
            });
        });
    }
    /**
     * Edit an application key owned by current user.
     * The `key` field is not returned for organizations in [One-Time Read mode](https://docs.datadoghq.com/account_management/api-app-keys/#one-time-read-mode).
     * @param param The request object
     */
    updateCurrentUserApplicationKey(param, options) {
        const requestContextPromise = this.requestFactory.updateCurrentUserApplicationKey(param.appKeyId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateCurrentUserApplicationKey(responseContext);
            });
        });
    }
}
exports.KeyManagementApi = KeyManagementApi;
//# sourceMappingURL=KeyManagementApi.js.map