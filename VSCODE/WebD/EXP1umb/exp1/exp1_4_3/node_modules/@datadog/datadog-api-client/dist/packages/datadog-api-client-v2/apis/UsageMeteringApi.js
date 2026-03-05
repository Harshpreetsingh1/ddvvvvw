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
exports.UsageMeteringApi = exports.UsageMeteringApiResponseProcessor = exports.UsageMeteringApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class UsageMeteringApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getActiveBillingDimensions(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/cost_by_tag/active_billing_dimensions";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getActiveBillingDimensions")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
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
    getBillingDimensionMapping(filterMonth, filterView, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/usage/billing_dimension_mapping";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getBillingDimensionMapping")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterMonth !== undefined) {
                requestContext.setQueryParam("filter[month]", ObjectSerializer_1.ObjectSerializer.serialize(filterMonth, "Date", "date-time"), "");
            }
            if (filterView !== undefined) {
                requestContext.setQueryParam("filter[view]", ObjectSerializer_1.ObjectSerializer.serialize(filterView, "string", ""), "");
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
    getCostByOrg(startMonth, endMonth, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startMonth' is not null or undefined
            if (startMonth === null || startMonth === undefined) {
                throw new baseapi_1.RequiredError("startMonth", "getCostByOrg");
            }
            // Path Params
            const localVarPath = "/api/v2/usage/cost_by_org";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getCostByOrg")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (startMonth !== undefined) {
                requestContext.setQueryParam("start_month", ObjectSerializer_1.ObjectSerializer.serialize(startMonth, "Date", "date-time"), "");
            }
            if (endMonth !== undefined) {
                requestContext.setQueryParam("end_month", ObjectSerializer_1.ObjectSerializer.serialize(endMonth, "Date", "date-time"), "");
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
    getEstimatedCostByOrg(view, startMonth, endMonth, startDate, endDate, includeConnectedAccounts, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/usage/estimated_cost";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getEstimatedCostByOrg")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (view !== undefined) {
                requestContext.setQueryParam("view", ObjectSerializer_1.ObjectSerializer.serialize(view, "string", ""), "");
            }
            if (startMonth !== undefined) {
                requestContext.setQueryParam("start_month", ObjectSerializer_1.ObjectSerializer.serialize(startMonth, "Date", "date-time"), "");
            }
            if (endMonth !== undefined) {
                requestContext.setQueryParam("end_month", ObjectSerializer_1.ObjectSerializer.serialize(endMonth, "Date", "date-time"), "");
            }
            if (startDate !== undefined) {
                requestContext.setQueryParam("start_date", ObjectSerializer_1.ObjectSerializer.serialize(startDate, "Date", "date-time"), "");
            }
            if (endDate !== undefined) {
                requestContext.setQueryParam("end_date", ObjectSerializer_1.ObjectSerializer.serialize(endDate, "Date", "date-time"), "");
            }
            if (includeConnectedAccounts !== undefined) {
                requestContext.setQueryParam("include_connected_accounts", ObjectSerializer_1.ObjectSerializer.serialize(includeConnectedAccounts, "boolean", ""), "");
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
    getHistoricalCostByOrg(startMonth, view, endMonth, includeConnectedAccounts, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startMonth' is not null or undefined
            if (startMonth === null || startMonth === undefined) {
                throw new baseapi_1.RequiredError("startMonth", "getHistoricalCostByOrg");
            }
            // Path Params
            const localVarPath = "/api/v2/usage/historical_cost";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getHistoricalCostByOrg")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (startMonth !== undefined) {
                requestContext.setQueryParam("start_month", ObjectSerializer_1.ObjectSerializer.serialize(startMonth, "Date", "date-time"), "");
            }
            if (view !== undefined) {
                requestContext.setQueryParam("view", ObjectSerializer_1.ObjectSerializer.serialize(view, "string", ""), "");
            }
            if (endMonth !== undefined) {
                requestContext.setQueryParam("end_month", ObjectSerializer_1.ObjectSerializer.serialize(endMonth, "Date", "date-time"), "");
            }
            if (includeConnectedAccounts !== undefined) {
                requestContext.setQueryParam("include_connected_accounts", ObjectSerializer_1.ObjectSerializer.serialize(includeConnectedAccounts, "boolean", ""), "");
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
    getHourlyUsage(filterTimestampStart, filterProductFamilies, filterTimestampEnd, filterIncludeDescendants, filterIncludeConnectedAccounts, filterIncludeBreakdown, filterVersions, pageLimit, pageNextRecordId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'filterTimestampStart' is not null or undefined
            if (filterTimestampStart === null || filterTimestampStart === undefined) {
                throw new baseapi_1.RequiredError("filterTimestampStart", "getHourlyUsage");
            }
            // verify required parameter 'filterProductFamilies' is not null or undefined
            if (filterProductFamilies === null || filterProductFamilies === undefined) {
                throw new baseapi_1.RequiredError("filterProductFamilies", "getHourlyUsage");
            }
            // Path Params
            const localVarPath = "/api/v2/usage/hourly_usage";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getHourlyUsage")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterTimestampStart !== undefined) {
                requestContext.setQueryParam("filter[timestamp][start]", ObjectSerializer_1.ObjectSerializer.serialize(filterTimestampStart, "Date", "date-time"), "");
            }
            if (filterTimestampEnd !== undefined) {
                requestContext.setQueryParam("filter[timestamp][end]", ObjectSerializer_1.ObjectSerializer.serialize(filterTimestampEnd, "Date", "date-time"), "");
            }
            if (filterProductFamilies !== undefined) {
                requestContext.setQueryParam("filter[product_families]", ObjectSerializer_1.ObjectSerializer.serialize(filterProductFamilies, "string", ""), "");
            }
            if (filterIncludeDescendants !== undefined) {
                requestContext.setQueryParam("filter[include_descendants]", ObjectSerializer_1.ObjectSerializer.serialize(filterIncludeDescendants, "boolean", ""), "");
            }
            if (filterIncludeConnectedAccounts !== undefined) {
                requestContext.setQueryParam("filter[include_connected_accounts]", ObjectSerializer_1.ObjectSerializer.serialize(filterIncludeConnectedAccounts, "boolean", ""), "");
            }
            if (filterIncludeBreakdown !== undefined) {
                requestContext.setQueryParam("filter[include_breakdown]", ObjectSerializer_1.ObjectSerializer.serialize(filterIncludeBreakdown, "boolean", ""), "");
            }
            if (filterVersions !== undefined) {
                requestContext.setQueryParam("filter[versions]", ObjectSerializer_1.ObjectSerializer.serialize(filterVersions, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int32"), "");
            }
            if (pageNextRecordId !== undefined) {
                requestContext.setQueryParam("page[next_record_id]", ObjectSerializer_1.ObjectSerializer.serialize(pageNextRecordId, "string", ""), "");
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
    getMonthlyCostAttribution(startMonth, fields, endMonth, sortDirection, sortName, tagBreakdownKeys, nextRecordId, includeDescendants, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startMonth' is not null or undefined
            if (startMonth === null || startMonth === undefined) {
                throw new baseapi_1.RequiredError("startMonth", "getMonthlyCostAttribution");
            }
            // verify required parameter 'fields' is not null or undefined
            if (fields === null || fields === undefined) {
                throw new baseapi_1.RequiredError("fields", "getMonthlyCostAttribution");
            }
            // Path Params
            const localVarPath = "/api/v2/cost_by_tag/monthly_cost_attribution";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getMonthlyCostAttribution")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (startMonth !== undefined) {
                requestContext.setQueryParam("start_month", ObjectSerializer_1.ObjectSerializer.serialize(startMonth, "Date", "date-time"), "");
            }
            if (endMonth !== undefined) {
                requestContext.setQueryParam("end_month", ObjectSerializer_1.ObjectSerializer.serialize(endMonth, "Date", "date-time"), "");
            }
            if (fields !== undefined) {
                requestContext.setQueryParam("fields", ObjectSerializer_1.ObjectSerializer.serialize(fields, "string", ""), "");
            }
            if (sortDirection !== undefined) {
                requestContext.setQueryParam("sort_direction", ObjectSerializer_1.ObjectSerializer.serialize(sortDirection, "SortDirection", ""), "");
            }
            if (sortName !== undefined) {
                requestContext.setQueryParam("sort_name", ObjectSerializer_1.ObjectSerializer.serialize(sortName, "string", ""), "");
            }
            if (tagBreakdownKeys !== undefined) {
                requestContext.setQueryParam("tag_breakdown_keys", ObjectSerializer_1.ObjectSerializer.serialize(tagBreakdownKeys, "string", ""), "");
            }
            if (nextRecordId !== undefined) {
                requestContext.setQueryParam("next_record_id", ObjectSerializer_1.ObjectSerializer.serialize(nextRecordId, "string", ""), "");
            }
            if (includeDescendants !== undefined) {
                requestContext.setQueryParam("include_descendants", ObjectSerializer_1.ObjectSerializer.serialize(includeDescendants, "boolean", ""), "");
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
    getProjectedCost(view, includeConnectedAccounts, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/usage/projected_cost";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getProjectedCost")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (view !== undefined) {
                requestContext.setQueryParam("view", ObjectSerializer_1.ObjectSerializer.serialize(view, "string", ""), "");
            }
            if (includeConnectedAccounts !== undefined) {
                requestContext.setQueryParam("include_connected_accounts", ObjectSerializer_1.ObjectSerializer.serialize(includeConnectedAccounts, "boolean", ""), "");
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
    getUsageApplicationSecurityMonitoring(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageApplicationSecurityMonitoring");
            }
            // Path Params
            const localVarPath = "/api/v2/usage/application_security";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getUsageApplicationSecurityMonitoring")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (startHr !== undefined) {
                requestContext.setQueryParam("start_hr", ObjectSerializer_1.ObjectSerializer.serialize(startHr, "Date", "date-time"), "");
            }
            if (endHr !== undefined) {
                requestContext.setQueryParam("end_hr", ObjectSerializer_1.ObjectSerializer.serialize(endHr, "Date", "date-time"), "");
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
    getUsageLambdaTracedInvocations(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageLambdaTracedInvocations");
            }
            // Path Params
            const localVarPath = "/api/v2/usage/lambda_traced_invocations";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getUsageLambdaTracedInvocations")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (startHr !== undefined) {
                requestContext.setQueryParam("start_hr", ObjectSerializer_1.ObjectSerializer.serialize(startHr, "Date", "date-time"), "");
            }
            if (endHr !== undefined) {
                requestContext.setQueryParam("end_hr", ObjectSerializer_1.ObjectSerializer.serialize(endHr, "Date", "date-time"), "");
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
    getUsageObservabilityPipelines(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageObservabilityPipelines");
            }
            // Path Params
            const localVarPath = "/api/v2/usage/observability_pipelines";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.UsageMeteringApi.getUsageObservabilityPipelines")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (startHr !== undefined) {
                requestContext.setQueryParam("start_hr", ObjectSerializer_1.ObjectSerializer.serialize(startHr, "Date", "date-time"), "");
            }
            if (endHr !== undefined) {
                requestContext.setQueryParam("end_hr", ObjectSerializer_1.ObjectSerializer.serialize(endHr, "Date", "date-time"), "");
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
exports.UsageMeteringApiRequestFactory = UsageMeteringApiRequestFactory;
class UsageMeteringApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActiveBillingDimensions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getActiveBillingDimensions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ActiveBillingDimensionsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ActiveBillingDimensionsResponse", "");
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
     * @params response Response returned by the server for a request to getBillingDimensionMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    getBillingDimensionMapping(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "BillingDimensionsMappingResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "BillingDimensionsMappingResponse", "");
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
     * @params response Response returned by the server for a request to getCostByOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCostByOrg(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CostByOrgResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CostByOrgResponse", "");
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
     * @params response Response returned by the server for a request to getEstimatedCostByOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getEstimatedCostByOrg(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CostByOrgResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CostByOrgResponse", "");
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
     * @params response Response returned by the server for a request to getHistoricalCostByOrg
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHistoricalCostByOrg(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CostByOrgResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "CostByOrgResponse", "");
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
     * @params response Response returned by the server for a request to getHourlyUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHourlyUsage(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "HourlyUsageResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "HourlyUsageResponse", "");
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
     * @params response Response returned by the server for a request to getMonthlyCostAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyCostAttribution(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonthlyCostAttributionResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonthlyCostAttributionResponse", "");
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
     * @params response Response returned by the server for a request to getProjectedCost
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProjectedCost(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ProjectedCostResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ProjectedCostResponse", "");
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
     * @params response Response returned by the server for a request to getUsageApplicationSecurityMonitoring
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageApplicationSecurityMonitoring(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageApplicationSecurityMonitoringResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageApplicationSecurityMonitoringResponse", "");
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
     * @params response Response returned by the server for a request to getUsageLambdaTracedInvocations
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLambdaTracedInvocations(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLambdaTracedInvocationsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLambdaTracedInvocationsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageObservabilityPipelines
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageObservabilityPipelines(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageObservabilityPipelinesResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageObservabilityPipelinesResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.UsageMeteringApiResponseProcessor = UsageMeteringApiResponseProcessor;
class UsageMeteringApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new UsageMeteringApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new UsageMeteringApiResponseProcessor();
    }
    /**
     * Get active billing dimensions for cost attribution. Cost data for a given month becomes available no later than the 19th of the following month.
     * @param param The request object
     */
    getActiveBillingDimensions(options) {
        const requestContextPromise = this.requestFactory.getActiveBillingDimensions(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getActiveBillingDimensions(responseContext);
            });
        });
    }
    /**
     * Get a mapping of billing dimensions to the corresponding keys for the supported usage metering public API endpoints.
     * Mapping data is updated on a monthly cadence.
     *
     * This endpoint is only accessible to [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getBillingDimensionMapping(param = {}, options) {
        const requestContextPromise = this.requestFactory.getBillingDimensionMapping(param.filterMonth, param.filterView, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getBillingDimensionMapping(responseContext);
            });
        });
    }
    /**
     * Get cost across multi-org account.
     * Cost by org data for a given month becomes available no later than the 16th of the following month.
     * **Note:** This endpoint has been deprecated. Please use the new endpoint
     * [`/historical_cost`](https://docs.datadoghq.com/api/latest/usage-metering/#get-historical-cost-across-your-account)
     * instead.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getCostByOrg(param, options) {
        const requestContextPromise = this.requestFactory.getCostByOrg(param.startMonth, param.endMonth, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getCostByOrg(responseContext);
            });
        });
    }
    /**
     * Get estimated cost across multi-org and single root-org accounts.
     * Estimated cost data is only available for the current month and previous month
     * and is delayed by up to 72 hours from when it was incurred.
     * To access historical costs prior to this, use the `/historical_cost` endpoint.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getEstimatedCostByOrg(param = {}, options) {
        const requestContextPromise = this.requestFactory.getEstimatedCostByOrg(param.view, param.startMonth, param.endMonth, param.startDate, param.endDate, param.includeConnectedAccounts, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getEstimatedCostByOrg(responseContext);
            });
        });
    }
    /**
     * Get historical cost across multi-org and single root-org accounts.
     * Cost data for a given month becomes available no later than the 16th of the following month.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getHistoricalCostByOrg(param, options) {
        const requestContextPromise = this.requestFactory.getHistoricalCostByOrg(param.startMonth, param.view, param.endMonth, param.includeConnectedAccounts, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getHistoricalCostByOrg(responseContext);
            });
        });
    }
    /**
     * Get hourly usage by product family.
     * @param param The request object
     */
    getHourlyUsage(param, options) {
        const requestContextPromise = this.requestFactory.getHourlyUsage(param.filterTimestampStart, param.filterProductFamilies, param.filterTimestampEnd, param.filterIncludeDescendants, param.filterIncludeConnectedAccounts, param.filterIncludeBreakdown, param.filterVersions, param.pageLimit, param.pageNextRecordId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getHourlyUsage(responseContext);
            });
        });
    }
    /**
     * Get monthly cost attribution by tag across multi-org and single root-org accounts.
     * Cost Attribution data for a given month becomes available no later than the 19th of the following month.
     * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
     * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
     * Pseudo code example:
     * ```
     * response := GetMonthlyCostAttribution(start_month, end_month)
     * cursor := response.metadata.pagination.next_record_id
     * WHILE cursor != null BEGIN
     *   sleep(5 seconds)  # Avoid running into rate limit
     *   response := GetMonthlyCostAttribution(start_month, end_month, next_record_id=cursor)
     *   cursor := response.metadata.pagination.next_record_id
     * END
     * ```
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/). This endpoint is not available in the Government (US1-FED) site.
     * @param param The request object
     */
    getMonthlyCostAttribution(param, options) {
        const requestContextPromise = this.requestFactory.getMonthlyCostAttribution(param.startMonth, param.fields, param.endMonth, param.sortDirection, param.sortName, param.tagBreakdownKeys, param.nextRecordId, param.includeDescendants, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getMonthlyCostAttribution(responseContext);
            });
        });
    }
    /**
     * Get projected cost across multi-org and single root-org accounts.
     * Projected cost data is only available for the current month and becomes available around the 12th of the month.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getProjectedCost(param = {}, options) {
        const requestContextPromise = this.requestFactory.getProjectedCost(param.view, param.includeConnectedAccounts, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getProjectedCost(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for application security .
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
     * @param param The request object
     */
    getUsageApplicationSecurityMonitoring(param, options) {
        const requestContextPromise = this.requestFactory.getUsageApplicationSecurityMonitoring(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageApplicationSecurityMonitoring(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for Lambda traced invocations.
     * **Note:** This endpoint has been deprecated.. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
     * @param param The request object
     */
    getUsageLambdaTracedInvocations(param, options) {
        const requestContextPromise = this.requestFactory.getUsageLambdaTracedInvocations(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageLambdaTracedInvocations(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for observability pipelines.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family)
     * @param param The request object
     */
    getUsageObservabilityPipelines(param, options) {
        const requestContextPromise = this.requestFactory.getUsageObservabilityPipelines(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageObservabilityPipelines(responseContext);
            });
        });
    }
}
exports.UsageMeteringApi = UsageMeteringApi;
//# sourceMappingURL=UsageMeteringApi.js.map