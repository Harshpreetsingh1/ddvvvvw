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
exports.SnapshotsApi = exports.SnapshotsApiResponseProcessor = exports.SnapshotsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class SnapshotsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getGraphSnapshot(start, end, metricQuery, eventQuery, graphDef, title, height, width, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'start' is not null or undefined
            if (start === null || start === undefined) {
                throw new baseapi_1.RequiredError("start", "getGraphSnapshot");
            }
            // verify required parameter 'end' is not null or undefined
            if (end === null || end === undefined) {
                throw new baseapi_1.RequiredError("end", "getGraphSnapshot");
            }
            // Path Params
            const localVarPath = "/api/v1/graph/snapshot";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.SnapshotsApi.getGraphSnapshot")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (metricQuery !== undefined) {
                requestContext.setQueryParam("metric_query", ObjectSerializer_1.ObjectSerializer.serialize(metricQuery, "string", ""), "");
            }
            if (start !== undefined) {
                requestContext.setQueryParam("start", ObjectSerializer_1.ObjectSerializer.serialize(start, "number", "int64"), "");
            }
            if (end !== undefined) {
                requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "number", "int64"), "");
            }
            if (eventQuery !== undefined) {
                requestContext.setQueryParam("event_query", ObjectSerializer_1.ObjectSerializer.serialize(eventQuery, "string", ""), "");
            }
            if (graphDef !== undefined) {
                requestContext.setQueryParam("graph_def", ObjectSerializer_1.ObjectSerializer.serialize(graphDef, "string", ""), "");
            }
            if (title !== undefined) {
                requestContext.setQueryParam("title", ObjectSerializer_1.ObjectSerializer.serialize(title, "string", ""), "");
            }
            if (height !== undefined) {
                requestContext.setQueryParam("height", ObjectSerializer_1.ObjectSerializer.serialize(height, "number", "int64"), "");
            }
            if (width !== undefined) {
                requestContext.setQueryParam("width", ObjectSerializer_1.ObjectSerializer.serialize(width, "number", "int64"), "");
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
exports.SnapshotsApiRequestFactory = SnapshotsApiRequestFactory;
class SnapshotsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getGraphSnapshot
     * @throws ApiException if the response code was not in [200, 299]
     */
    getGraphSnapshot(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GraphSnapshot");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GraphSnapshot", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.SnapshotsApiResponseProcessor = SnapshotsApiResponseProcessor;
class SnapshotsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new SnapshotsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new SnapshotsApiResponseProcessor();
    }
    /**
     * Take graph snapshots. Snapshots are PNG images generated by rendering a specified widget in a web page and capturing it once the data is available. The image is then uploaded to cloud storage.
     *
     * **Note**: When a snapshot is created, there is some delay before it is available.
     * @param param The request object
     */
    getGraphSnapshot(param, options) {
        const requestContextPromise = this.requestFactory.getGraphSnapshot(param.start, param.end, param.metricQuery, param.eventQuery, param.graphDef, param.title, param.height, param.width, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getGraphSnapshot(responseContext);
            });
        });
    }
}
exports.SnapshotsApi = SnapshotsApi;
//# sourceMappingURL=SnapshotsApi.js.map