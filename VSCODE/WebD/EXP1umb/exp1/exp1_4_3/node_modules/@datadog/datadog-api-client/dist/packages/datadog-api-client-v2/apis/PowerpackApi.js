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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackApi = exports.PowerpackApiResponseProcessor = exports.PowerpackApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class PowerpackApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createPowerpack(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createPowerpack");
            }
            // Path Params
            const localVarPath = "/api/v2/powerpacks";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.PowerpackApi.createPowerpack")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Powerpack", ""), contentType);
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
    deletePowerpack(powerpackId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'powerpackId' is not null or undefined
            if (powerpackId === null || powerpackId === undefined) {
                throw new baseapi_1.RequiredError("powerpackId", "deletePowerpack");
            }
            // Path Params
            const localVarPath = "/api/v2/powerpacks/{powerpack_id}".replace("{powerpack_id}", encodeURIComponent(String(powerpackId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.PowerpackApi.deletePowerpack")
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
    getPowerpack(powerpackId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'powerpackId' is not null or undefined
            if (powerpackId === null || powerpackId === undefined) {
                throw new baseapi_1.RequiredError("powerpackId", "getPowerpack");
            }
            // Path Params
            const localVarPath = "/api/v2/powerpacks/{powerpack_id}".replace("{powerpack_id}", encodeURIComponent(String(powerpackId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.PowerpackApi.getPowerpack")
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
    listPowerpacks(pageLimit, pageOffset, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/powerpacks";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.PowerpackApi.listPowerpacks")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
            }
            if (pageOffset !== undefined) {
                requestContext.setQueryParam("page[offset]", ObjectSerializer_1.ObjectSerializer.serialize(pageOffset, "number", "int64"), "");
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
    updatePowerpack(powerpackId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'powerpackId' is not null or undefined
            if (powerpackId === null || powerpackId === undefined) {
                throw new baseapi_1.RequiredError("powerpackId", "updatePowerpack");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updatePowerpack");
            }
            // Path Params
            const localVarPath = "/api/v2/powerpacks/{powerpack_id}".replace("{powerpack_id}", encodeURIComponent(String(powerpackId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.PowerpackApi.updatePowerpack")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "Powerpack", ""), contentType);
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
exports.PowerpackApiRequestFactory = PowerpackApiRequestFactory;
class PowerpackApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    createPowerpack(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PowerpackResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PowerpackResponse", "");
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
     * @params response Response returned by the server for a request to deletePowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    deletePowerpack(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
     * @params response Response returned by the server for a request to getPowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    getPowerpack(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PowerpackResponse");
                return body;
            }
            if (response.httpStatusCode === 404 || response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PowerpackResponse", "");
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
     * @params response Response returned by the server for a request to listPowerpacks
     * @throws ApiException if the response code was not in [200, 299]
     */
    listPowerpacks(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListPowerpacksResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListPowerpacksResponse", "");
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
     * @params response Response returned by the server for a request to updatePowerpack
     * @throws ApiException if the response code was not in [200, 299]
     */
    updatePowerpack(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PowerpackResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PowerpackResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.PowerpackApiResponseProcessor = PowerpackApiResponseProcessor;
class PowerpackApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new PowerpackApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new PowerpackApiResponseProcessor();
    }
    /**
     * Create a powerpack.
     * @param param The request object
     */
    createPowerpack(param, options) {
        const requestContextPromise = this.requestFactory.createPowerpack(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createPowerpack(responseContext);
            });
        });
    }
    /**
     * Delete a powerpack.
     * @param param The request object
     */
    deletePowerpack(param, options) {
        const requestContextPromise = this.requestFactory.deletePowerpack(param.powerpackId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deletePowerpack(responseContext);
            });
        });
    }
    /**
     * Get a powerpack.
     * @param param The request object
     */
    getPowerpack(param, options) {
        const requestContextPromise = this.requestFactory.getPowerpack(param.powerpackId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getPowerpack(responseContext);
            });
        });
    }
    /**
     * Get a list of all powerpacks.
     * @param param The request object
     */
    listPowerpacks(param = {}, options) {
        const requestContextPromise = this.requestFactory.listPowerpacks(param.pageLimit, param.pageOffset, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listPowerpacks(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listPowerpacks returning a generator with all the items.
     */
    listPowerpacksWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listPowerpacksWithPagination_1() {
            let pageSize = 25;
            if (param.pageLimit !== undefined) {
                pageSize = param.pageLimit;
            }
            param.pageLimit = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listPowerpacks(param.pageLimit, param.pageOffset, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listPowerpacks(responseContext));
                const responseData = response.data;
                if (responseData === undefined) {
                    break;
                }
                const results = responseData;
                for (const item of results) {
                    yield yield __await(item);
                }
                if (results.length < pageSize) {
                    break;
                }
                if (param.pageOffset === undefined) {
                    param.pageOffset = pageSize;
                }
                else {
                    param.pageOffset = param.pageOffset + pageSize;
                }
            }
        });
    }
    /**
     * Update a powerpack.
     * @param param The request object
     */
    updatePowerpack(param, options) {
        const requestContextPromise = this.requestFactory.updatePowerpack(param.powerpackId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updatePowerpack(responseContext);
            });
        });
    }
}
exports.PowerpackApi = PowerpackApi;
//# sourceMappingURL=PowerpackApi.js.map