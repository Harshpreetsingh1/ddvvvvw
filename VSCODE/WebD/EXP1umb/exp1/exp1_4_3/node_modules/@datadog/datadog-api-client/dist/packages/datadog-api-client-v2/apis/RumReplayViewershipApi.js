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
exports.RumReplayViewershipApi = exports.RumReplayViewershipApiResponseProcessor = exports.RumReplayViewershipApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class RumReplayViewershipApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createRumReplaySessionWatch(sessionId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'sessionId' is not null or undefined
            if (sessionId === null || sessionId === undefined) {
                throw new baseapi_1.RequiredError("sessionId", "createRumReplaySessionWatch");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createRumReplaySessionWatch");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/sessions/{session_id}/watches".replace("{session_id}", encodeURIComponent(String(sessionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayViewershipApi.createRumReplaySessionWatch")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Watch", ""), contentType);
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
    deleteRumReplaySessionWatch(sessionId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'sessionId' is not null or undefined
            if (sessionId === null || sessionId === undefined) {
                throw new baseapi_1.RequiredError("sessionId", "deleteRumReplaySessionWatch");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/sessions/{session_id}/watches".replace("{session_id}", encodeURIComponent(String(sessionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayViewershipApi.deleteRumReplaySessionWatch")
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
    listRumReplaySessionWatchers(sessionId, pageSize, pageNumber, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'sessionId' is not null or undefined
            if (sessionId === null || sessionId === undefined) {
                throw new baseapi_1.RequiredError("sessionId", "listRumReplaySessionWatchers");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/sessions/{session_id}/watchers".replace("{session_id}", encodeURIComponent(String(sessionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayViewershipApi.listRumReplaySessionWatchers")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", ""), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""), "");
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
    listRumReplayViewershipHistorySessions(filterWatchedAtStart, pageNumber, filterCreatedBy, filterWatchedAtEnd, filterSessionIds, pageSize, filterApplicationId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/rum/replay/viewership-history/sessions";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayViewershipApi.listRumReplayViewershipHistorySessions")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterWatchedAtStart !== undefined) {
                requestContext.setQueryParam("filter[watched_at][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterWatchedAtStart, "number", "int64"), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""), "");
            }
            if (filterCreatedBy !== undefined) {
                requestContext.setQueryParam("filter[created_by]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedBy, "string", ""), "");
            }
            if (filterWatchedAtEnd !== undefined) {
                requestContext.setQueryParam("filter[watched_at][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterWatchedAtEnd, "number", "int64"), "");
            }
            if (filterSessionIds !== undefined) {
                requestContext.setQueryParam("filter[session_ids]", ObjectSerializer_1.ObjectSerializer.serialize(filterSessionIds, "string", ""), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", ""), "");
            }
            if (filterApplicationId !== undefined) {
                requestContext.setQueryParam("filter[application_id]", ObjectSerializer_1.ObjectSerializer.serialize(filterApplicationId, "string", ""), "");
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
exports.RumReplayViewershipApiRequestFactory = RumReplayViewershipApiRequestFactory;
class RumReplayViewershipApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRumReplaySessionWatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRumReplaySessionWatch(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Watch");
                return body;
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Watch", "");
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
     * @params response Response returned by the server for a request to deleteRumReplaySessionWatch
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRumReplaySessionWatch(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to listRumReplaySessionWatchers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplaySessionWatchers(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "WatcherArray");
                return body;
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "WatcherArray", "");
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
     * @params response Response returned by the server for a request to listRumReplayViewershipHistorySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplayViewershipHistorySessions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ViewershipHistorySessionArray");
                return body;
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ViewershipHistorySessionArray", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.RumReplayViewershipApiResponseProcessor = RumReplayViewershipApiResponseProcessor;
class RumReplayViewershipApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new RumReplayViewershipApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new RumReplayViewershipApiResponseProcessor();
    }
    /**
     * Record a session watch.
     * @param param The request object
     */
    createRumReplaySessionWatch(param, options) {
        const requestContextPromise = this.requestFactory.createRumReplaySessionWatch(param.sessionId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createRumReplaySessionWatch(responseContext);
            });
        });
    }
    /**
     * Delete session watch history.
     * @param param The request object
     */
    deleteRumReplaySessionWatch(param, options) {
        const requestContextPromise = this.requestFactory.deleteRumReplaySessionWatch(param.sessionId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteRumReplaySessionWatch(responseContext);
            });
        });
    }
    /**
     * List session watchers.
     * @param param The request object
     */
    listRumReplaySessionWatchers(param, options) {
        const requestContextPromise = this.requestFactory.listRumReplaySessionWatchers(param.sessionId, param.pageSize, param.pageNumber, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRumReplaySessionWatchers(responseContext);
            });
        });
    }
    /**
     * List watched sessions.
     * @param param The request object
     */
    listRumReplayViewershipHistorySessions(param = {}, options) {
        const requestContextPromise = this.requestFactory.listRumReplayViewershipHistorySessions(param.filterWatchedAtStart, param.pageNumber, param.filterCreatedBy, param.filterWatchedAtEnd, param.filterSessionIds, param.pageSize, param.filterApplicationId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRumReplayViewershipHistorySessions(responseContext);
            });
        });
    }
}
exports.RumReplayViewershipApi = RumReplayViewershipApi;
//# sourceMappingURL=RumReplayViewershipApi.js.map