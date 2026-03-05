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
exports.RestrictionPoliciesApi = exports.RestrictionPoliciesApiResponseProcessor = exports.RestrictionPoliciesApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class RestrictionPoliciesApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    deleteRestrictionPolicy(resourceId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'resourceId' is not null or undefined
            if (resourceId === null || resourceId === undefined) {
                throw new baseapi_1.RequiredError("resourceId", "deleteRestrictionPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/restriction_policy/{resource_id}".replace("{resource_id}", encodeURIComponent(String(resourceId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RestrictionPoliciesApi.deleteRestrictionPolicy")
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
    getRestrictionPolicy(resourceId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'resourceId' is not null or undefined
            if (resourceId === null || resourceId === undefined) {
                throw new baseapi_1.RequiredError("resourceId", "getRestrictionPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/restriction_policy/{resource_id}".replace("{resource_id}", encodeURIComponent(String(resourceId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RestrictionPoliciesApi.getRestrictionPolicy")
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
    updateRestrictionPolicy(resourceId, body, allowSelfLockout, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'resourceId' is not null or undefined
            if (resourceId === null || resourceId === undefined) {
                throw new baseapi_1.RequiredError("resourceId", "updateRestrictionPolicy");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateRestrictionPolicy");
            }
            // Path Params
            const localVarPath = "/api/v2/restriction_policy/{resource_id}".replace("{resource_id}", encodeURIComponent(String(resourceId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.RestrictionPoliciesApi.updateRestrictionPolicy")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (allowSelfLockout !== undefined) {
                requestContext.setQueryParam("allow_self_lockout", ObjectSerializer_1.ObjectSerializer.serialize(allowSelfLockout, "boolean", ""), "");
            }
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "RestrictionPolicyUpdateRequest", ""), contentType);
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
exports.RestrictionPoliciesApiRequestFactory = RestrictionPoliciesApiRequestFactory;
class RestrictionPoliciesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRestrictionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRestrictionPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
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
     * @params response Response returned by the server for a request to getRestrictionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRestrictionPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionPolicyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionPolicyResponse", "");
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
     * @params response Response returned by the server for a request to updateRestrictionPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRestrictionPolicy(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionPolicyResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RestrictionPolicyResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.RestrictionPoliciesApiResponseProcessor = RestrictionPoliciesApiResponseProcessor;
class RestrictionPoliciesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new RestrictionPoliciesApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new RestrictionPoliciesApiResponseProcessor();
    }
    /**
     * Deletes the restriction policy associated with a specified resource.
     * @param param The request object
     */
    deleteRestrictionPolicy(param, options) {
        const requestContextPromise = this.requestFactory.deleteRestrictionPolicy(param.resourceId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteRestrictionPolicy(responseContext);
            });
        });
    }
    /**
     * Retrieves the restriction policy associated with a specified resource.
     * @param param The request object
     */
    getRestrictionPolicy(param, options) {
        const requestContextPromise = this.requestFactory.getRestrictionPolicy(param.resourceId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getRestrictionPolicy(responseContext);
            });
        });
    }
    /**
     * Updates the restriction policy associated with a resource.
     *
     * #### Supported resources
     * Restriction policies can be applied to the following resources:
     * - Dashboards: `dashboard`
     * - Integration Services: `integration-service`
     * - Integration Webhooks: `integration-webhook`
     * - Notebooks: `notebook`
     * - Powerpacks: `powerpack`
     * - Reference Tables: `reference-table`
     * - Security Rules: `security-rule`
     * - Service Level Objectives: `slo`
     * - Synthetic Global Variables: `synthetics-global-variable`
     * - Synthetic Tests: `synthetics-test`
     * - Synthetic Private Locations: `synthetics-private-location`
     * - Monitors: `monitor`
     * - Workflows: `workflow`
     * - App Builder Apps: `app-builder-app`
     * - Connections: `connection`
     * - Connection Groups: `connection-group`
     * - RUM Applications: `rum-application`
     * - Cross Org Connections: `cross-org-connection`
     * - Spreadsheets: `spreadsheet`
     * - On-Call Schedules: `on-call-schedule`
     * - On-Call Escalation Policies: `on-call-escalation-policy`
     * - On-Call Team Routing Rules: `on-call-team-routing-rules`
     * - Logs Pipelines: `logs-pipeline`
     * - Case Management Projects: `case-management-project`
     *
     * #### Supported relations for resources
     * Resource Type               | Supported Relations
     * ----------------------------|--------------------------
     * Dashboards                  | `viewer`, `editor`
     * Integration Services        | `viewer`, `editor`
     * Integration Webhooks        | `viewer`, `editor`
     * Notebooks                   | `viewer`, `editor`
     * Powerpacks                  | `viewer`, `editor`
     * Security Rules              | `viewer`, `editor`
     * Service Level Objectives    | `viewer`, `editor`
     * Synthetic Global Variables  | `viewer`, `editor`
     * Synthetic Tests             | `viewer`, `editor`
     * Synthetic Private Locations | `viewer`, `editor`
     * Monitors                    | `viewer`, `editor`
     * Reference Tables            | `viewer`, `editor`
     * Workflows                   | `viewer`, `runner`, `editor`
     * App Builder Apps            | `viewer`, `editor`
     * Connections                 | `viewer`, `resolver`, `editor`
     * Connection Groups           | `viewer`, `editor`
     * RUM Application             | `viewer`, `editor`
     * Cross Org Connections       | `viewer`, `editor`
     * Spreadsheets                | `viewer`, `editor`
     * On-Call Schedules           | `viewer`, `overrider`, `editor`
     * On-Call Escalation Policies | `viewer`, `editor`
     * On-Call Team Routing Rules  | `viewer`, `editor`
     * Logs Pipelines              | `viewer`, `processors_editor`, `editor`
     * Case Management Projects    | `viewer`, `contributor`, `manager`
     * @param param The request object
     */
    updateRestrictionPolicy(param, options) {
        const requestContextPromise = this.requestFactory.updateRestrictionPolicy(param.resourceId, param.body, param.allowSelfLockout, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateRestrictionPolicy(responseContext);
            });
        });
    }
}
exports.RestrictionPoliciesApi = RestrictionPoliciesApi;
//# sourceMappingURL=RestrictionPoliciesApi.js.map