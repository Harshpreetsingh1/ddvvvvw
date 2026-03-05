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
exports.SlackIntegrationApi = exports.SlackIntegrationApiResponseProcessor = exports.SlackIntegrationApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class SlackIntegrationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createSlackIntegrationChannel(accountName, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'accountName' is not null or undefined
            if (accountName === null || accountName === undefined) {
                throw new baseapi_1.RequiredError("accountName", "createSlackIntegrationChannel");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createSlackIntegrationChannel");
            }
            // Path Params
            const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels".replace("{account_name}", encodeURIComponent(String(accountName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.SlackIntegrationApi.createSlackIntegrationChannel")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SlackIntegrationChannel", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getSlackIntegrationChannel(accountName, channelName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'accountName' is not null or undefined
            if (accountName === null || accountName === undefined) {
                throw new baseapi_1.RequiredError("accountName", "getSlackIntegrationChannel");
            }
            // verify required parameter 'channelName' is not null or undefined
            if (channelName === null || channelName === undefined) {
                throw new baseapi_1.RequiredError("channelName", "getSlackIntegrationChannel");
            }
            // Path Params
            const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
                .replace("{account_name}", encodeURIComponent(String(accountName)))
                .replace("{channel_name}", encodeURIComponent(String(channelName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.SlackIntegrationApi.getSlackIntegrationChannel")
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
    getSlackIntegrationChannels(accountName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'accountName' is not null or undefined
            if (accountName === null || accountName === undefined) {
                throw new baseapi_1.RequiredError("accountName", "getSlackIntegrationChannels");
            }
            // Path Params
            const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels".replace("{account_name}", encodeURIComponent(String(accountName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.SlackIntegrationApi.getSlackIntegrationChannels")
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
    removeSlackIntegrationChannel(accountName, channelName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'accountName' is not null or undefined
            if (accountName === null || accountName === undefined) {
                throw new baseapi_1.RequiredError("accountName", "removeSlackIntegrationChannel");
            }
            // verify required parameter 'channelName' is not null or undefined
            if (channelName === null || channelName === undefined) {
                throw new baseapi_1.RequiredError("channelName", "removeSlackIntegrationChannel");
            }
            // Path Params
            const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
                .replace("{account_name}", encodeURIComponent(String(accountName)))
                .replace("{channel_name}", encodeURIComponent(String(channelName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.SlackIntegrationApi.removeSlackIntegrationChannel")
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
    updateSlackIntegrationChannel(accountName, channelName, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'accountName' is not null or undefined
            if (accountName === null || accountName === undefined) {
                throw new baseapi_1.RequiredError("accountName", "updateSlackIntegrationChannel");
            }
            // verify required parameter 'channelName' is not null or undefined
            if (channelName === null || channelName === undefined) {
                throw new baseapi_1.RequiredError("channelName", "updateSlackIntegrationChannel");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateSlackIntegrationChannel");
            }
            // Path Params
            const localVarPath = "/api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name}"
                .replace("{account_name}", encodeURIComponent(String(accountName)))
                .replace("{channel_name}", encodeURIComponent(String(channelName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.SlackIntegrationApi.updateSlackIntegrationChannel")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SlackIntegrationChannel", ""), contentType);
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
exports.SlackIntegrationApiRequestFactory = SlackIntegrationApiRequestFactory;
class SlackIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSlackIntegrationChannel(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SlackIntegrationChannel");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SlackIntegrationChannel", "");
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
     * @params response Response returned by the server for a request to getSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSlackIntegrationChannel(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SlackIntegrationChannel");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SlackIntegrationChannel", "");
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
     * @params response Response returned by the server for a request to getSlackIntegrationChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSlackIntegrationChannels(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<SlackIntegrationChannel>");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "Array<SlackIntegrationChannel>", "");
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
     * @params response Response returned by the server for a request to removeSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeSlackIntegrationChannel(response) {
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
     * @params response Response returned by the server for a request to updateSlackIntegrationChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSlackIntegrationChannel(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SlackIntegrationChannel");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SlackIntegrationChannel", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.SlackIntegrationApiResponseProcessor = SlackIntegrationApiResponseProcessor;
class SlackIntegrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new SlackIntegrationApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new SlackIntegrationApiResponseProcessor();
    }
    /**
     * Add a channel to your Datadog-Slack integration.
     * @param param The request object
     */
    createSlackIntegrationChannel(param, options) {
        const requestContextPromise = this.requestFactory.createSlackIntegrationChannel(param.accountName, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createSlackIntegrationChannel(responseContext);
            });
        });
    }
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * @param param The request object
     */
    getSlackIntegrationChannel(param, options) {
        const requestContextPromise = this.requestFactory.getSlackIntegrationChannel(param.accountName, param.channelName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSlackIntegrationChannel(responseContext);
            });
        });
    }
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * @param param The request object
     */
    getSlackIntegrationChannels(param, options) {
        const requestContextPromise = this.requestFactory.getSlackIntegrationChannels(param.accountName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSlackIntegrationChannels(responseContext);
            });
        });
    }
    /**
     * Remove a channel from your Datadog-Slack integration.
     * @param param The request object
     */
    removeSlackIntegrationChannel(param, options) {
        const requestContextPromise = this.requestFactory.removeSlackIntegrationChannel(param.accountName, param.channelName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.removeSlackIntegrationChannel(responseContext);
            });
        });
    }
    /**
     * Update a channel used in your Datadog-Slack integration.
     * @param param The request object
     */
    updateSlackIntegrationChannel(param, options) {
        const requestContextPromise = this.requestFactory.updateSlackIntegrationChannel(param.accountName, param.channelName, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateSlackIntegrationChannel(responseContext);
            });
        });
    }
}
exports.SlackIntegrationApi = SlackIntegrationApi;
//# sourceMappingURL=SlackIntegrationApi.js.map