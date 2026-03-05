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
exports.ApplicationSecurityApi = exports.ApplicationSecurityApiResponseProcessor = exports.ApplicationSecurityApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ApplicationSecurityApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createApplicationSecurityWafCustomRule(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createApplicationSecurityWafCustomRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.createApplicationSecurityWafCustomRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationSecurityWafCustomRuleCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createApplicationSecurityWafExclusionFilter(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createApplicationSecurityWafExclusionFilter");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/exclusion_filters";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.createApplicationSecurityWafExclusionFilter")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationSecurityWafExclusionFilterCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteApplicationSecurityWafCustomRule(customRuleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'customRuleId' is not null or undefined
            if (customRuleId === null || customRuleId === undefined) {
                throw new baseapi_1.RequiredError("customRuleId", "deleteApplicationSecurityWafCustomRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}".replace("{custom_rule_id}", encodeURIComponent(String(customRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.deleteApplicationSecurityWafCustomRule")
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
    deleteApplicationSecurityWafExclusionFilter(exclusionFilterId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'exclusionFilterId' is not null or undefined
            if (exclusionFilterId === null || exclusionFilterId === undefined) {
                throw new baseapi_1.RequiredError("exclusionFilterId", "deleteApplicationSecurityWafExclusionFilter");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace("{exclusion_filter_id}", encodeURIComponent(String(exclusionFilterId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.deleteApplicationSecurityWafExclusionFilter")
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
    getApplicationSecurityWafCustomRule(customRuleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'customRuleId' is not null or undefined
            if (customRuleId === null || customRuleId === undefined) {
                throw new baseapi_1.RequiredError("customRuleId", "getApplicationSecurityWafCustomRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}".replace("{custom_rule_id}", encodeURIComponent(String(customRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.getApplicationSecurityWafCustomRule")
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
    getApplicationSecurityWafExclusionFilter(exclusionFilterId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'exclusionFilterId' is not null or undefined
            if (exclusionFilterId === null || exclusionFilterId === undefined) {
                throw new baseapi_1.RequiredError("exclusionFilterId", "getApplicationSecurityWafExclusionFilter");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace("{exclusion_filter_id}", encodeURIComponent(String(exclusionFilterId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.getApplicationSecurityWafExclusionFilter")
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
    listApplicationSecurityWAFCustomRules(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.listApplicationSecurityWAFCustomRules")
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
    listApplicationSecurityWafExclusionFilters(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/exclusion_filters";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.listApplicationSecurityWafExclusionFilters")
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
    updateApplicationSecurityWafCustomRule(customRuleId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'customRuleId' is not null or undefined
            if (customRuleId === null || customRuleId === undefined) {
                throw new baseapi_1.RequiredError("customRuleId", "updateApplicationSecurityWafCustomRule");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateApplicationSecurityWafCustomRule");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/custom_rules/{custom_rule_id}".replace("{custom_rule_id}", encodeURIComponent(String(customRuleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.updateApplicationSecurityWafCustomRule")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationSecurityWafCustomRuleUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateApplicationSecurityWafExclusionFilter(exclusionFilterId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'exclusionFilterId' is not null or undefined
            if (exclusionFilterId === null || exclusionFilterId === undefined) {
                throw new baseapi_1.RequiredError("exclusionFilterId", "updateApplicationSecurityWafExclusionFilter");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateApplicationSecurityWafExclusionFilter");
            }
            // Path Params
            const localVarPath = "/api/v2/remote_config/products/asm/waf/exclusion_filters/{exclusion_filter_id}".replace("{exclusion_filter_id}", encodeURIComponent(String(exclusionFilterId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ApplicationSecurityApi.updateApplicationSecurityWafExclusionFilter")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ApplicationSecurityWafExclusionFilterUpdateRequest", ""), contentType);
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
exports.ApplicationSecurityApiRequestFactory = ApplicationSecurityApiRequestFactory;
class ApplicationSecurityApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApplicationSecurityWafCustomRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleResponse", "");
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
     * @params response Response returned by the server for a request to createApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApplicationSecurityWafExclusionFilter(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFilterResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFilterResponse", "");
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
     * @params response Response returned by the server for a request to deleteApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationSecurityWafCustomRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
     * @params response Response returned by the server for a request to deleteApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationSecurityWafExclusionFilter(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
     * @params response Response returned by the server for a request to getApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationSecurityWafCustomRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleResponse", "");
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
     * @params response Response returned by the server for a request to getApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationSecurityWafExclusionFilter(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFilterResponse");
                return body;
            }
            if (response.httpStatusCode === 403 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFilterResponse", "");
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
     * @params response Response returned by the server for a request to listApplicationSecurityWAFCustomRules
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationSecurityWAFCustomRules(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleListResponse", "");
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
     * @params response Response returned by the server for a request to listApplicationSecurityWafExclusionFilters
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationSecurityWafExclusionFilters(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFiltersResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFiltersResponse", "");
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
     * @params response Response returned by the server for a request to updateApplicationSecurityWafCustomRule
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationSecurityWafCustomRule(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafCustomRuleResponse", "");
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
     * @params response Response returned by the server for a request to updateApplicationSecurityWafExclusionFilter
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationSecurityWafExclusionFilter(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFilterResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ApplicationSecurityWafExclusionFilterResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ApplicationSecurityApiResponseProcessor = ApplicationSecurityApiResponseProcessor;
class ApplicationSecurityApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ApplicationSecurityApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ApplicationSecurityApiResponseProcessor();
    }
    /**
     * Create a new WAF custom rule with the given parameters.
     * @param param The request object
     */
    createApplicationSecurityWafCustomRule(param, options) {
        const requestContextPromise = this.requestFactory.createApplicationSecurityWafCustomRule(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createApplicationSecurityWafCustomRule(responseContext);
            });
        });
    }
    /**
     * Create a new WAF exclusion filter with the given parameters.
     *
     * A request matched by an exclusion filter will be ignored by the Application Security WAF product.
     * Go to https://app.datadoghq.com/security/appsec/passlist to review existing exclusion filters (also called passlist entries).
     * @param param The request object
     */
    createApplicationSecurityWafExclusionFilter(param, options) {
        const requestContextPromise = this.requestFactory.createApplicationSecurityWafExclusionFilter(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createApplicationSecurityWafExclusionFilter(responseContext);
            });
        });
    }
    /**
     * Delete a specific WAF custom rule.
     * @param param The request object
     */
    deleteApplicationSecurityWafCustomRule(param, options) {
        const requestContextPromise = this.requestFactory.deleteApplicationSecurityWafCustomRule(param.customRuleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteApplicationSecurityWafCustomRule(responseContext);
            });
        });
    }
    /**
     * Delete a specific WAF exclusion filter using its identifier.
     * @param param The request object
     */
    deleteApplicationSecurityWafExclusionFilter(param, options) {
        const requestContextPromise = this.requestFactory.deleteApplicationSecurityWafExclusionFilter(param.exclusionFilterId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteApplicationSecurityWafExclusionFilter(responseContext);
            });
        });
    }
    /**
     * Retrieve a WAF custom rule by ID.
     * @param param The request object
     */
    getApplicationSecurityWafCustomRule(param, options) {
        const requestContextPromise = this.requestFactory.getApplicationSecurityWafCustomRule(param.customRuleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getApplicationSecurityWafCustomRule(responseContext);
            });
        });
    }
    /**
     * Retrieve a specific WAF exclusion filter using its identifier.
     * @param param The request object
     */
    getApplicationSecurityWafExclusionFilter(param, options) {
        const requestContextPromise = this.requestFactory.getApplicationSecurityWafExclusionFilter(param.exclusionFilterId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getApplicationSecurityWafExclusionFilter(responseContext);
            });
        });
    }
    /**
     * Retrieve a list of WAF custom rule.
     * @param param The request object
     */
    listApplicationSecurityWAFCustomRules(options) {
        const requestContextPromise = this.requestFactory.listApplicationSecurityWAFCustomRules(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listApplicationSecurityWAFCustomRules(responseContext);
            });
        });
    }
    /**
     * Retrieve a list of WAF exclusion filters.
     * @param param The request object
     */
    listApplicationSecurityWafExclusionFilters(options) {
        const requestContextPromise = this.requestFactory.listApplicationSecurityWafExclusionFilters(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listApplicationSecurityWafExclusionFilters(responseContext);
            });
        });
    }
    /**
     * Update a specific WAF custom Rule.
     * Returns the Custom Rule object when the request is successful.
     * @param param The request object
     */
    updateApplicationSecurityWafCustomRule(param, options) {
        const requestContextPromise = this.requestFactory.updateApplicationSecurityWafCustomRule(param.customRuleId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateApplicationSecurityWafCustomRule(responseContext);
            });
        });
    }
    /**
     * Update a specific WAF exclusion filter using its identifier.
     * Returns the exclusion filter object when the request is successful.
     * @param param The request object
     */
    updateApplicationSecurityWafExclusionFilter(param, options) {
        const requestContextPromise = this.requestFactory.updateApplicationSecurityWafExclusionFilter(param.exclusionFilterId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateApplicationSecurityWafExclusionFilter(responseContext);
            });
        });
    }
}
exports.ApplicationSecurityApi = ApplicationSecurityApi;
//# sourceMappingURL=ApplicationSecurityApi.js.map