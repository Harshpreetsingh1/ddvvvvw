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
exports.ErrorTrackingApi = exports.ErrorTrackingApiResponseProcessor = exports.ErrorTrackingApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ErrorTrackingApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    deleteIssueAssignee(issueId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'issueId' is not null or undefined
            if (issueId === null || issueId === undefined) {
                throw new baseapi_1.RequiredError("issueId", "deleteIssueAssignee");
            }
            // Path Params
            const localVarPath = "/api/v2/error-tracking/issues/{issue_id}/assignee".replace("{issue_id}", encodeURIComponent(String(issueId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ErrorTrackingApi.deleteIssueAssignee")
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
    getIssue(issueId, include, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'issueId' is not null or undefined
            if (issueId === null || issueId === undefined) {
                throw new baseapi_1.RequiredError("issueId", "getIssue");
            }
            // Path Params
            const localVarPath = "/api/v2/error-tracking/issues/{issue_id}".replace("{issue_id}", encodeURIComponent(String(issueId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ErrorTrackingApi.getIssue")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "Array<GetIssueIncludeQueryParameterItem>", ""), "csv");
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
    searchIssues(body, include, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "searchIssues");
            }
            // Path Params
            const localVarPath = "/api/v2/error-tracking/issues/search";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ErrorTrackingApi.searchIssues")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (include !== undefined) {
                requestContext.setQueryParam("include", ObjectSerializer_1.ObjectSerializer.serialize(include, "Array<SearchIssuesIncludeQueryParameterItem>", ""), "csv");
            }
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "IssuesSearchRequest", ""), contentType);
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
    updateIssueAssignee(issueId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'issueId' is not null or undefined
            if (issueId === null || issueId === undefined) {
                throw new baseapi_1.RequiredError("issueId", "updateIssueAssignee");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateIssueAssignee");
            }
            // Path Params
            const localVarPath = "/api/v2/error-tracking/issues/{issue_id}/assignee".replace("{issue_id}", encodeURIComponent(String(issueId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ErrorTrackingApi.updateIssueAssignee")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "IssueUpdateAssigneeRequest", ""), contentType);
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
    updateIssueState(issueId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'issueId' is not null or undefined
            if (issueId === null || issueId === undefined) {
                throw new baseapi_1.RequiredError("issueId", "updateIssueState");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateIssueState");
            }
            // Path Params
            const localVarPath = "/api/v2/error-tracking/issues/{issue_id}/state".replace("{issue_id}", encodeURIComponent(String(issueId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ErrorTrackingApi.updateIssueState")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "IssueUpdateStateRequest", ""), contentType);
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
exports.ErrorTrackingApiRequestFactory = ErrorTrackingApiRequestFactory;
class ErrorTrackingApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIssueAssignee
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIssueAssignee(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
     * @params response Response returned by the server for a request to getIssue
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIssue(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssueResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssueResponse", "");
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
     * @params response Response returned by the server for a request to searchIssues
     * @throws ApiException if the response code was not in [200, 299]
     */
    searchIssues(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssuesSearchResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssuesSearchResponse", "");
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
     * @params response Response returned by the server for a request to updateIssueAssignee
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIssueAssignee(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssueResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssueResponse", "");
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
     * @params response Response returned by the server for a request to updateIssueState
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIssueState(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssueResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IssueResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ErrorTrackingApiResponseProcessor = ErrorTrackingApiResponseProcessor;
class ErrorTrackingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ErrorTrackingApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ErrorTrackingApiResponseProcessor();
    }
    /**
     * Remove the assignee of an issue by `issue_id`.
     * @param param The request object
     */
    deleteIssueAssignee(param, options) {
        const requestContextPromise = this.requestFactory.deleteIssueAssignee(param.issueId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteIssueAssignee(responseContext);
            });
        });
    }
    /**
     * Retrieve the full details for a specific error tracking issue, including attributes and relationships.
     * @param param The request object
     */
    getIssue(param, options) {
        const requestContextPromise = this.requestFactory.getIssue(param.issueId, param.include, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getIssue(responseContext);
            });
        });
    }
    /**
     * Search issues endpoint allows you to programmatically search for issues within your organization. This endpoint returns a list of issues that match a given search query, following the event search syntax. The search results are limited to a maximum of 100 issues per request.
     * @param param The request object
     */
    searchIssues(param, options) {
        const requestContextPromise = this.requestFactory.searchIssues(param.body, param.include, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.searchIssues(responseContext);
            });
        });
    }
    /**
     * Update the assignee of an issue by `issue_id`.
     * @param param The request object
     */
    updateIssueAssignee(param, options) {
        const requestContextPromise = this.requestFactory.updateIssueAssignee(param.issueId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateIssueAssignee(responseContext);
            });
        });
    }
    /**
     * Update the state of an issue by `issue_id`. Use this endpoint to move an issue between states such as `OPEN`, `RESOLVED`, or `IGNORED`.
     * @param param The request object
     */
    updateIssueState(param, options) {
        const requestContextPromise = this.requestFactory.updateIssueState(param.issueId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateIssueState(responseContext);
            });
        });
    }
}
exports.ErrorTrackingApi = ErrorTrackingApi;
//# sourceMappingURL=ErrorTrackingApi.js.map