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
exports.RumReplayHeatmapsApi = exports.RumReplayHeatmapsApiResponseProcessor = exports.RumReplayHeatmapsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class RumReplayHeatmapsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createReplayHeatmapSnapshot(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createReplayHeatmapSnapshot");
            }
            // Path Params
            const localVarPath = "/api/v2/replay/heatmap/snapshots";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayHeatmapsApi.createReplayHeatmapSnapshot")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SnapshotCreateRequest", ""), contentType);
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
    deleteReplayHeatmapSnapshot(snapshotId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'snapshotId' is not null or undefined
            if (snapshotId === null || snapshotId === undefined) {
                throw new baseapi_1.RequiredError("snapshotId", "deleteReplayHeatmapSnapshot");
            }
            // Path Params
            const localVarPath = "/api/v2/replay/heatmap/snapshots/{snapshot_id}".replace("{snapshot_id}", encodeURIComponent(String(snapshotId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayHeatmapsApi.deleteReplayHeatmapSnapshot")
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
    listReplayHeatmapSnapshots(filterViewName, filterDeviceType, pageLimit, filterApplicationId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'filterViewName' is not null or undefined
            if (filterViewName === null || filterViewName === undefined) {
                throw new baseapi_1.RequiredError("filterViewName", "listReplayHeatmapSnapshots");
            }
            // Path Params
            const localVarPath = "/api/v2/replay/heatmap/snapshots";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayHeatmapsApi.listReplayHeatmapSnapshots")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterDeviceType !== undefined) {
                requestContext.setQueryParam("filter[device_type]", ObjectSerializer_1.ObjectSerializer.serialize(filterDeviceType, "string", ""), "");
            }
            if (filterViewName !== undefined) {
                requestContext.setQueryParam("filter[view_name]", ObjectSerializer_1.ObjectSerializer.serialize(filterViewName, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", ""), "");
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
    updateReplayHeatmapSnapshot(snapshotId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'snapshotId' is not null or undefined
            if (snapshotId === null || snapshotId === undefined) {
                throw new baseapi_1.RequiredError("snapshotId", "updateReplayHeatmapSnapshot");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateReplayHeatmapSnapshot");
            }
            // Path Params
            const localVarPath = "/api/v2/replay/heatmap/snapshots/{snapshot_id}".replace("{snapshot_id}", encodeURIComponent(String(snapshotId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplayHeatmapsApi.updateReplayHeatmapSnapshot")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SnapshotUpdateRequest", ""), contentType);
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
exports.RumReplayHeatmapsApiRequestFactory = RumReplayHeatmapsApiRequestFactory;
class RumReplayHeatmapsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createReplayHeatmapSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    createReplayHeatmapSnapshot(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Snapshot");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Snapshot", "");
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
     * @params response Response returned by the server for a request to deleteReplayHeatmapSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteReplayHeatmapSnapshot(response) {
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
     * @params response Response returned by the server for a request to listReplayHeatmapSnapshots
     * @throws ApiException if the response code was not in [200, 299]
     */
    listReplayHeatmapSnapshots(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SnapshotArray");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SnapshotArray", "");
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
     * @params response Response returned by the server for a request to updateReplayHeatmapSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateReplayHeatmapSnapshot(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Snapshot");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Snapshot", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.RumReplayHeatmapsApiResponseProcessor = RumReplayHeatmapsApiResponseProcessor;
class RumReplayHeatmapsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new RumReplayHeatmapsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new RumReplayHeatmapsApiResponseProcessor();
    }
    /**
     * Create a heatmap snapshot.
     * @param param The request object
     */
    createReplayHeatmapSnapshot(param, options) {
        const requestContextPromise = this.requestFactory.createReplayHeatmapSnapshot(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createReplayHeatmapSnapshot(responseContext);
            });
        });
    }
    /**
     * Delete a heatmap snapshot.
     * @param param The request object
     */
    deleteReplayHeatmapSnapshot(param, options) {
        const requestContextPromise = this.requestFactory.deleteReplayHeatmapSnapshot(param.snapshotId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteReplayHeatmapSnapshot(responseContext);
            });
        });
    }
    /**
     * List heatmap snapshots.
     * @param param The request object
     */
    listReplayHeatmapSnapshots(param, options) {
        const requestContextPromise = this.requestFactory.listReplayHeatmapSnapshots(param.filterViewName, param.filterDeviceType, param.pageLimit, param.filterApplicationId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listReplayHeatmapSnapshots(responseContext);
            });
        });
    }
    /**
     * Update a heatmap snapshot.
     * @param param The request object
     */
    updateReplayHeatmapSnapshot(param, options) {
        const requestContextPromise = this.requestFactory.updateReplayHeatmapSnapshot(param.snapshotId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateReplayHeatmapSnapshot(responseContext);
            });
        });
    }
}
exports.RumReplayHeatmapsApi = RumReplayHeatmapsApi;
//# sourceMappingURL=RumReplayHeatmapsApi.js.map