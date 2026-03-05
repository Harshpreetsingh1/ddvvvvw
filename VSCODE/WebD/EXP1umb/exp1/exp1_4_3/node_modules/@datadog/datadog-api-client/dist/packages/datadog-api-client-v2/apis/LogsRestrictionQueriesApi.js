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
exports.LogsRestrictionQueriesApi = exports.LogsRestrictionQueriesApiResponseProcessor = exports.LogsRestrictionQueriesApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class LogsRestrictionQueriesApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    addRoleToRestrictionQuery(restrictionQueryId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'addRoleToRestrictionQuery'");
            if (!_config.unstableOperations["v2.addRoleToRestrictionQuery"]) {
                throw new Error("Unstable operation 'addRoleToRestrictionQuery' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "addRoleToRestrictionQuery");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "addRoleToRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.addRoleToRestrictionQuery")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RelationshipToRole", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createRestrictionQuery(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createRestrictionQuery'");
            if (!_config.unstableOperations["v2.createRestrictionQuery"]) {
                throw new Error("Unstable operation 'createRestrictionQuery' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.createRestrictionQuery")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RestrictionQueryCreatePayload", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteRestrictionQuery(restrictionQueryId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteRestrictionQuery'");
            if (!_config.unstableOperations["v2.deleteRestrictionQuery"]) {
                throw new Error("Unstable operation 'deleteRestrictionQuery' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "deleteRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.deleteRestrictionQuery")
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
    getRestrictionQuery(restrictionQueryId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getRestrictionQuery'");
            if (!_config.unstableOperations["v2.getRestrictionQuery"]) {
                throw new Error("Unstable operation 'getRestrictionQuery' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "getRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.getRestrictionQuery")
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
    getRoleRestrictionQuery(roleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getRoleRestrictionQuery'");
            if (!_config.unstableOperations["v2.getRoleRestrictionQuery"]) {
                throw new Error("Unstable operation 'getRoleRestrictionQuery' is disabled");
            }
            // verify required parameter 'roleId' is not null or undefined
            if (roleId === null || roleId === undefined) {
                throw new baseapi_1.RequiredError("roleId", "getRoleRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/role/{role_id}".replace("{role_id}", encodeURIComponent(String(roleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.getRoleRestrictionQuery")
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
    listRestrictionQueries(pageSize, pageNumber, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listRestrictionQueries'");
            if (!_config.unstableOperations["v2.listRestrictionQueries"]) {
                throw new Error("Unstable operation 'listRestrictionQueries' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.listRestrictionQueries")
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
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listRestrictionQueryRoles(restrictionQueryId, pageSize, pageNumber, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listRestrictionQueryRoles'");
            if (!_config.unstableOperations["v2.listRestrictionQueryRoles"]) {
                throw new Error("Unstable operation 'listRestrictionQueryRoles' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "listRestrictionQueryRoles");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.listRestrictionQueryRoles")
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
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listUserRestrictionQueries(userId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listUserRestrictionQueries'");
            if (!_config.unstableOperations["v2.listUserRestrictionQueries"]) {
                throw new Error("Unstable operation 'listUserRestrictionQueries' is disabled");
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new baseapi_1.RequiredError("userId", "listUserRestrictionQueries");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/user/{user_id}".replace("{user_id}", encodeURIComponent(String(userId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.listUserRestrictionQueries")
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
    removeRoleFromRestrictionQuery(restrictionQueryId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'removeRoleFromRestrictionQuery'");
            if (!_config.unstableOperations["v2.removeRoleFromRestrictionQuery"]) {
                throw new Error("Unstable operation 'removeRoleFromRestrictionQuery' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "removeRoleFromRestrictionQuery");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "removeRoleFromRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}/roles".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.removeRoleFromRestrictionQuery")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RelationshipToRole", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    replaceRestrictionQuery(restrictionQueryId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'replaceRestrictionQuery'");
            if (!_config.unstableOperations["v2.replaceRestrictionQuery"]) {
                throw new Error("Unstable operation 'replaceRestrictionQuery' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "replaceRestrictionQuery");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "replaceRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.replaceRestrictionQuery")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RestrictionQueryUpdatePayload", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateRestrictionQuery(restrictionQueryId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateRestrictionQuery'");
            if (!_config.unstableOperations["v2.updateRestrictionQuery"]) {
                throw new Error("Unstable operation 'updateRestrictionQuery' is disabled");
            }
            // verify required parameter 'restrictionQueryId' is not null or undefined
            if (restrictionQueryId === null || restrictionQueryId === undefined) {
                throw new baseapi_1.RequiredError("restrictionQueryId", "updateRestrictionQuery");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateRestrictionQuery");
            }
            // Path Params
            const localVarPath = "/api/v2/logs/config/restriction_queries/{restriction_query_id}".replace("{restriction_query_id}", encodeURIComponent(String(restrictionQueryId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LogsRestrictionQueriesApi.updateRestrictionQuery")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RestrictionQueryUpdatePayload", ""), contentType);
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
exports.LogsRestrictionQueriesApiRequestFactory = LogsRestrictionQueriesApiRequestFactory;
class LogsRestrictionQueriesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRoleToRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    addRoleToRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to createRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithoutRelationshipsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithoutRelationshipsResponse", "");
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
     * @params response Response returned by the server for a request to deleteRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to getRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithRelationshipsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithRelationshipsResponse", "");
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
     * @params response Response returned by the server for a request to getRoleRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRoleRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryListResponse", "");
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
     * @params response Response returned by the server for a request to listRestrictionQueries
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRestrictionQueries(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryListResponse");
                return body;
            }
            if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryListResponse", "");
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
     * @params response Response returned by the server for a request to listRestrictionQueryRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRestrictionQueryRoles(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryRolesResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryRolesResponse", "");
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
     * @params response Response returned by the server for a request to listUserRestrictionQueries
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserRestrictionQueries(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryListResponse", "");
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
     * @params response Response returned by the server for a request to removeRoleFromRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeRoleFromRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to replaceRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithoutRelationshipsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithoutRelationshipsResponse", "");
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
     * @params response Response returned by the server for a request to updateRestrictionQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRestrictionQuery(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithoutRelationshipsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionQueryWithoutRelationshipsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.LogsRestrictionQueriesApiResponseProcessor = LogsRestrictionQueriesApiResponseProcessor;
class LogsRestrictionQueriesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory ||
                new LogsRestrictionQueriesApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new LogsRestrictionQueriesApiResponseProcessor();
    }
    /**
     * Adds a role to a restriction query.
     *
     * **Note**: This operation automatically grants the `logs_read_data` permission to the role if it doesn't already have it.
     * @param param The request object
     */
    addRoleToRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.addRoleToRestrictionQuery(param.restrictionQueryId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.addRoleToRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Create a new restriction query for your organization.
     * @param param The request object
     */
    createRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.createRestrictionQuery(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Deletes a restriction query.
     * @param param The request object
     */
    deleteRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.deleteRestrictionQuery(param.restrictionQueryId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Get a restriction query in the organization specified by the restriction query's `restriction_query_id`.
     * @param param The request object
     */
    getRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.getRestrictionQuery(param.restrictionQueryId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Get restriction query for a given role.
     * @param param The request object
     */
    getRoleRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.getRoleRestrictionQuery(param.roleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getRoleRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Returns all restriction queries, including their names and IDs.
     * @param param The request object
     */
    listRestrictionQueries(param = {}, options) {
        const requestContextPromise = this.requestFactory.listRestrictionQueries(param.pageSize, param.pageNumber, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRestrictionQueries(responseContext);
            });
        });
    }
    /**
     * Returns all roles that have a given restriction query.
     * @param param The request object
     */
    listRestrictionQueryRoles(param, options) {
        const requestContextPromise = this.requestFactory.listRestrictionQueryRoles(param.restrictionQueryId, param.pageSize, param.pageNumber, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRestrictionQueryRoles(responseContext);
            });
        });
    }
    /**
     * Get all restriction queries for a given user.
     * @param param The request object
     */
    listUserRestrictionQueries(param, options) {
        const requestContextPromise = this.requestFactory.listUserRestrictionQueries(param.userId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listUserRestrictionQueries(responseContext);
            });
        });
    }
    /**
     * Removes a role from a restriction query.
     * @param param The request object
     */
    removeRoleFromRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.removeRoleFromRestrictionQuery(param.restrictionQueryId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.removeRoleFromRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Replace a restriction query.
     * @param param The request object
     */
    replaceRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.replaceRestrictionQuery(param.restrictionQueryId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.replaceRestrictionQuery(responseContext);
            });
        });
    }
    /**
     * Edit a restriction query.
     * @param param The request object
     */
    updateRestrictionQuery(param, options) {
        const requestContextPromise = this.requestFactory.updateRestrictionQuery(param.restrictionQueryId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateRestrictionQuery(responseContext);
            });
        });
    }
}
exports.LogsRestrictionQueriesApi = LogsRestrictionQueriesApi;
//# sourceMappingURL=LogsRestrictionQueriesApi.js.map