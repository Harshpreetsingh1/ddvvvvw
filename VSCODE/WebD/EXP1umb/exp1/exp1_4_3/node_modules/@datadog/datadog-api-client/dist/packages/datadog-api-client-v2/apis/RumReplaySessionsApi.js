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
exports.RumReplaySessionsApi = exports.RumReplaySessionsApiResponseProcessor = exports.RumReplaySessionsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class RumReplaySessionsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getSegments(viewId, sessionId, source, ts, maxListSize, paging, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'viewId' is not null or undefined
            if (viewId === null || viewId === undefined) {
                throw new baseapi_1.RequiredError("viewId", "getSegments");
            }
            // verify required parameter 'sessionId' is not null or undefined
            if (sessionId === null || sessionId === undefined) {
                throw new baseapi_1.RequiredError("sessionId", "getSegments");
            }
            // Path Params
            const localVarPath = "/api/v2/rum/replay/sessions/{session_id}/views/{view_id}/segments"
                .replace("{view_id}", encodeURIComponent(String(viewId)))
                .replace("{session_id}", encodeURIComponent(String(sessionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RumReplaySessionsApi.getSegments")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (source !== undefined) {
                requestContext.setQueryParam("source", ObjectSerializer_1.ObjectSerializer.serialize(source, "string", ""), "");
            }
            if (ts !== undefined) {
                requestContext.setQueryParam("ts", ObjectSerializer_1.ObjectSerializer.serialize(ts, "number", "int64"), "");
            }
            if (maxListSize !== undefined) {
                requestContext.setQueryParam("max_list_size", ObjectSerializer_1.ObjectSerializer.serialize(maxListSize, "number", ""), "");
            }
            if (paging !== undefined) {
                requestContext.setQueryParam("paging", ObjectSerializer_1.ObjectSerializer.serialize(paging, "string", ""), "");
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
exports.RumReplaySessionsApiRequestFactory = RumReplaySessionsApiRequestFactory;
class RumReplaySessionsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSegments
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSegments(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
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
}
exports.RumReplaySessionsApiResponseProcessor = RumReplaySessionsApiResponseProcessor;
class RumReplaySessionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new RumReplaySessionsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new RumReplaySessionsApiResponseProcessor();
    }
    /**
     * Get segments for a view.
     * @param param The request object
     */
    getSegments(param, options) {
        const requestContextPromise = this.requestFactory.getSegments(param.viewId, param.sessionId, param.source, param.ts, param.maxListSize, param.paging, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSegments(responseContext);
            });
        });
    }
}
exports.RumReplaySessionsApi = RumReplaySessionsApi;
//# sourceMappingURL=RumReplaySessionsApi.js.map