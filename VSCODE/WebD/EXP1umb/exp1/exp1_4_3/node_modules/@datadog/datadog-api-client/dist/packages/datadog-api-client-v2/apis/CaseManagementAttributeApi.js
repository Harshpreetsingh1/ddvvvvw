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
exports.CaseManagementAttributeApi = exports.CaseManagementAttributeApiResponseProcessor = exports.CaseManagementAttributeApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class CaseManagementAttributeApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createCustomAttributeConfig(caseTypeId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'caseTypeId' is not null or undefined
            if (caseTypeId === null || caseTypeId === undefined) {
                throw new baseapi_1.RequiredError("caseTypeId", "createCustomAttributeConfig");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createCustomAttributeConfig");
            }
            // Path Params
            const localVarPath = "/api/v2/cases/types/{case_type_id}/custom_attributes".replace("{case_type_id}", encodeURIComponent(String(caseTypeId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CaseManagementAttributeApi.createCustomAttributeConfig")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "CustomAttributeConfigCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteCustomAttributeConfig(caseTypeId, customAttributeId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'caseTypeId' is not null or undefined
            if (caseTypeId === null || caseTypeId === undefined) {
                throw new baseapi_1.RequiredError("caseTypeId", "deleteCustomAttributeConfig");
            }
            // verify required parameter 'customAttributeId' is not null or undefined
            if (customAttributeId === null || customAttributeId === undefined) {
                throw new baseapi_1.RequiredError("customAttributeId", "deleteCustomAttributeConfig");
            }
            // Path Params
            const localVarPath = "/api/v2/cases/types/{case_type_id}/custom_attributes/{custom_attribute_id}"
                .replace("{case_type_id}", encodeURIComponent(String(caseTypeId)))
                .replace("{custom_attribute_id}", encodeURIComponent(String(customAttributeId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CaseManagementAttributeApi.deleteCustomAttributeConfig")
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
    getAllCustomAttributeConfigsByCaseType(caseTypeId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'caseTypeId' is not null or undefined
            if (caseTypeId === null || caseTypeId === undefined) {
                throw new baseapi_1.RequiredError("caseTypeId", "getAllCustomAttributeConfigsByCaseType");
            }
            // Path Params
            const localVarPath = "/api/v2/cases/types/{case_type_id}/custom_attributes".replace("{case_type_id}", encodeURIComponent(String(caseTypeId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CaseManagementAttributeApi.getAllCustomAttributeConfigsByCaseType")
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
    getAllCustomAttributes(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/cases/types/custom_attributes";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.CaseManagementAttributeApi.getAllCustomAttributes")
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
}
exports.CaseManagementAttributeApiRequestFactory = CaseManagementAttributeApiRequestFactory;
class CaseManagementAttributeApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCustomAttributeConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCustomAttributeConfig(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CustomAttributeConfigResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CustomAttributeConfigResponse", "");
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
     * @params response Response returned by the server for a request to deleteCustomAttributeConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCustomAttributeConfig(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to getAllCustomAttributeConfigsByCaseType
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAllCustomAttributeConfigsByCaseType(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CustomAttributeConfigsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CustomAttributeConfigsResponse", "");
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
     * @params response Response returned by the server for a request to getAllCustomAttributes
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAllCustomAttributes(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CustomAttributeConfigsResponse");
                return body;
            }
            if (response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CustomAttributeConfigsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.CaseManagementAttributeApiResponseProcessor = CaseManagementAttributeApiResponseProcessor;
class CaseManagementAttributeApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory ||
                new CaseManagementAttributeApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new CaseManagementAttributeApiResponseProcessor();
    }
    /**
     * Create custom attribute config for a case type
     * @param param The request object
     */
    createCustomAttributeConfig(param, options) {
        const requestContextPromise = this.requestFactory.createCustomAttributeConfig(param.caseTypeId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createCustomAttributeConfig(responseContext);
            });
        });
    }
    /**
     * Delete custom attribute config
     * @param param The request object
     */
    deleteCustomAttributeConfig(param, options) {
        const requestContextPromise = this.requestFactory.deleteCustomAttributeConfig(param.caseTypeId, param.customAttributeId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteCustomAttributeConfig(responseContext);
            });
        });
    }
    /**
     * Get all custom attribute config of case type
     * @param param The request object
     */
    getAllCustomAttributeConfigsByCaseType(param, options) {
        const requestContextPromise = this.requestFactory.getAllCustomAttributeConfigsByCaseType(param.caseTypeId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getAllCustomAttributeConfigsByCaseType(responseContext);
            });
        });
    }
    /**
     * Get all custom attributes
     * @param param The request object
     */
    getAllCustomAttributes(options) {
        const requestContextPromise = this.requestFactory.getAllCustomAttributes(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getAllCustomAttributes(responseContext);
            });
        });
    }
}
exports.CaseManagementAttributeApi = CaseManagementAttributeApi;
//# sourceMappingURL=CaseManagementAttributeApi.js.map