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
exports.RumReplayPlaylistsApi = exports.RumReplayPlaylistsApiResponseProcessor = exports.RumReplayPlaylistsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class RumReplayPlaylistsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    addRumReplaySessionToPlaylist(ts, playlistId, sessionId, dataSource, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'ts' is not null or undefined
            if (ts === null || ts === undefined) {
                throw new baseapi_1.RequiredError("ts", "addRumReplaySessionToPlaylist");
            }
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "addRumReplaySessionToPlaylist");
            }
            // verify required parameter 'sessionId' is not null or undefined
            if (sessionId === null || sessionId === undefined) {
                throw new baseapi_1.RequiredError("sessionId", "addRumReplaySessionToPlaylist");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
                .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
                .replace("{session_id}", encodeURIComponent(String(sessionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.addRumReplaySessionToPlaylist")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (dataSource !== undefined) {
                requestContext.setQueryParam("data_source", ObjectSerializer_1.ObjectSerializer.serialize(dataSource, "string", ""), "");
            }
            if (ts !== undefined) {
                requestContext.setQueryParam("ts", ObjectSerializer_1.ObjectSerializer.serialize(ts, "number", "int64"), "");
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
    bulkRemoveRumReplayPlaylistSessions(playlistId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "bulkRemoveRumReplayPlaylistSessions");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "bulkRemoveRumReplayPlaylistSessions");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}/sessions".replace("{playlist_id}", encodeURIComponent(String(playlistId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.bulkRemoveRumReplayPlaylistSessions")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SessionIdArray", ""), contentType);
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
    createRumReplayPlaylist(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createRumReplayPlaylist");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.createRumReplayPlaylist")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Playlist", ""), contentType);
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
    deleteRumReplayPlaylist(playlistId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "deleteRumReplayPlaylist");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace("{playlist_id}", encodeURIComponent(String(playlistId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.deleteRumReplayPlaylist")
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
    getRumReplayPlaylist(playlistId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "getRumReplayPlaylist");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace("{playlist_id}", encodeURIComponent(String(playlistId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.getRumReplayPlaylist")
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
    listRumReplayPlaylists(filterCreatedByUuid, filterQuery, pageNumber, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.listRumReplayPlaylists")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterCreatedByUuid !== undefined) {
                requestContext.setQueryParam("filter[created_by_uuid]", ObjectSerializer_1.ObjectSerializer.serialize(filterCreatedByUuid, "string", ""), "");
            }
            if (filterQuery !== undefined) {
                requestContext.setQueryParam("filter[query]", ObjectSerializer_1.ObjectSerializer.serialize(filterQuery, "string", ""), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", ""), "");
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
    listRumReplayPlaylistSessions(playlistId, pageNumber, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "listRumReplayPlaylistSessions");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}/sessions".replace("{playlist_id}", encodeURIComponent(String(playlistId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.listRumReplayPlaylistSessions")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", ""), "");
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
    removeRumReplaySessionFromPlaylist(playlistId, sessionId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "removeRumReplaySessionFromPlaylist");
            }
            // verify required parameter 'sessionId' is not null or undefined
            if (sessionId === null || sessionId === undefined) {
                throw new baseapi_1.RequiredError("sessionId", "removeRumReplaySessionFromPlaylist");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}/sessions/{session_id}"
                .replace("{playlist_id}", encodeURIComponent(String(playlistId)))
                .replace("{session_id}", encodeURIComponent(String(sessionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.removeRumReplaySessionFromPlaylist")
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
    updateRumReplayPlaylist(playlistId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'playlistId' is not null or undefined
            if (playlistId === null || playlistId === undefined) {
                throw new baseapi_1.RequiredError("playlistId", "updateRumReplayPlaylist");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateRumReplayPlaylist");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/playlists/{playlist_id}".replace("{playlist_id}", encodeURIComponent(String(playlistId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayPlaylistsApi.updateRumReplayPlaylist")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Playlist", ""), contentType);
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
exports.RumReplayPlaylistsApiRequestFactory = RumReplayPlaylistsApiRequestFactory;
class RumReplayPlaylistsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRumReplaySessionToPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    addRumReplaySessionToPlaylist(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PlaylistsSession");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PlaylistsSession", "");
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
     * @params response Response returned by the server for a request to bulkRemoveRumReplayPlaylistSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    bulkRemoveRumReplayPlaylistSessions(response) {
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
     * @params response Response returned by the server for a request to createRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRumReplayPlaylist(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Playlist");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Playlist", "");
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
     * @params response Response returned by the server for a request to deleteRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRumReplayPlaylist(response) {
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
     * @params response Response returned by the server for a request to getRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRumReplayPlaylist(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Playlist");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Playlist", "");
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
     * @params response Response returned by the server for a request to listRumReplayPlaylists
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplayPlaylists(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PlaylistArray");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PlaylistArray", "");
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
     * @params response Response returned by the server for a request to listRumReplayPlaylistSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRumReplayPlaylistSessions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PlaylistsSessionArray");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PlaylistsSessionArray", "");
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
     * @params response Response returned by the server for a request to removeRumReplaySessionFromPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeRumReplaySessionFromPlaylist(response) {
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
     * @params response Response returned by the server for a request to updateRumReplayPlaylist
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRumReplayPlaylist(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Playlist");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Playlist", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.RumReplayPlaylistsApiResponseProcessor = RumReplayPlaylistsApiResponseProcessor;
class RumReplayPlaylistsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new RumReplayPlaylistsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new RumReplayPlaylistsApiResponseProcessor();
    }
    /**
     * Add a session to a playlist.
     * @param param The request object
     */
    addRumReplaySessionToPlaylist(param, options) {
        const requestContextPromise = this.requestFactory.addRumReplaySessionToPlaylist(param.ts, param.playlistId, param.sessionId, param.dataSource, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.addRumReplaySessionToPlaylist(responseContext);
            });
        });
    }
    /**
     * Remove sessions from a playlist.
     * @param param The request object
     */
    bulkRemoveRumReplayPlaylistSessions(param, options) {
        const requestContextPromise = this.requestFactory.bulkRemoveRumReplayPlaylistSessions(param.playlistId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.bulkRemoveRumReplayPlaylistSessions(responseContext);
            });
        });
    }
    /**
     * Create a playlist.
     * @param param The request object
     */
    createRumReplayPlaylist(param, options) {
        const requestContextPromise = this.requestFactory.createRumReplayPlaylist(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createRumReplayPlaylist(responseContext);
            });
        });
    }
    /**
     * Delete a playlist.
     * @param param The request object
     */
    deleteRumReplayPlaylist(param, options) {
        const requestContextPromise = this.requestFactory.deleteRumReplayPlaylist(param.playlistId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteRumReplayPlaylist(responseContext);
            });
        });
    }
    /**
     * Get a playlist.
     * @param param The request object
     */
    getRumReplayPlaylist(param, options) {
        const requestContextPromise = this.requestFactory.getRumReplayPlaylist(param.playlistId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getRumReplayPlaylist(responseContext);
            });
        });
    }
    /**
     * List playlists.
     * @param param The request object
     */
    listRumReplayPlaylists(param = {}, options) {
        const requestContextPromise = this.requestFactory.listRumReplayPlaylists(param.filterCreatedByUuid, param.filterQuery, param.pageNumber, param.pageSize, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRumReplayPlaylists(responseContext);
            });
        });
    }
    /**
     * List sessions in a playlist.
     * @param param The request object
     */
    listRumReplayPlaylistSessions(param, options) {
        const requestContextPromise = this.requestFactory.listRumReplayPlaylistSessions(param.playlistId, param.pageNumber, param.pageSize, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listRumReplayPlaylistSessions(responseContext);
            });
        });
    }
    /**
     * Remove a session from a playlist.
     * @param param The request object
     */
    removeRumReplaySessionFromPlaylist(param, options) {
        const requestContextPromise = this.requestFactory.removeRumReplaySessionFromPlaylist(param.playlistId, param.sessionId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.removeRumReplaySessionFromPlaylist(responseContext);
            });
        });
    }
    /**
     * Update a playlist.
     * @param param The request object
     */
    updateRumReplayPlaylist(param, options) {
        const requestContextPromise = this.requestFactory.updateRumReplayPlaylist(param.playlistId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateRumReplayPlaylist(responseContext);
            });
        });
    }
}
exports.RumReplayPlaylistsApi = RumReplayPlaylistsApi;
//# sourceMappingURL=RumReplayPlaylistsApi.js.map