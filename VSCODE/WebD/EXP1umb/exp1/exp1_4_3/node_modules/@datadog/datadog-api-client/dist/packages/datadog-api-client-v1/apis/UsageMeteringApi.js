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
    getDailyCustomReports(pageSize, pageNumber, sortDir, sort, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/daily_custom_reports";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getDailyCustomReports")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"), "");
            }
            if (sortDir !== undefined) {
                requestContext.setQueryParam("sort_dir", ObjectSerializer_1.ObjectSerializer.serialize(sortDir, "UsageSortDirection", ""), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "UsageSort", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getHourlyUsageAttribution(startHr, usageType, endHr, nextRecordId, tagBreakdownKeys, includeDescendants, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getHourlyUsageAttribution");
            }
            // verify required parameter 'usageType' is not null or undefined
            if (usageType === null || usageType === undefined) {
                throw new baseapi_1.RequiredError("usageType", "getHourlyUsageAttribution");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/hourly-attribution";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getHourlyUsageAttribution")
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
            if (usageType !== undefined) {
                requestContext.setQueryParam("usage_type", ObjectSerializer_1.ObjectSerializer.serialize(usageType, "HourlyUsageAttributionUsageType", ""), "");
            }
            if (nextRecordId !== undefined) {
                requestContext.setQueryParam("next_record_id", ObjectSerializer_1.ObjectSerializer.serialize(nextRecordId, "string", ""), "");
            }
            if (tagBreakdownKeys !== undefined) {
                requestContext.setQueryParam("tag_breakdown_keys", ObjectSerializer_1.ObjectSerializer.serialize(tagBreakdownKeys, "string", ""), "");
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
    getIncidentManagement(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getIncidentManagement");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/incident-management";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getIncidentManagement")
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
    getIngestedSpans(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getIngestedSpans");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/ingested-spans";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getIngestedSpans")
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
    getMonthlyCustomReports(pageSize, pageNumber, sortDir, sort, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/monthly_custom_reports";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getMonthlyCustomReports")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int64"), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", "int64"), "");
            }
            if (sortDir !== undefined) {
                requestContext.setQueryParam("sort_dir", ObjectSerializer_1.ObjectSerializer.serialize(sortDir, "UsageSortDirection", ""), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "UsageSort", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getMonthlyUsageAttribution(startMonth, fields, endMonth, sortDirection, sortName, tagBreakdownKeys, nextRecordId, includeDescendants, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startMonth' is not null or undefined
            if (startMonth === null || startMonth === undefined) {
                throw new baseapi_1.RequiredError("startMonth", "getMonthlyUsageAttribution");
            }
            // verify required parameter 'fields' is not null or undefined
            if (fields === null || fields === undefined) {
                throw new baseapi_1.RequiredError("fields", "getMonthlyUsageAttribution");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/monthly-attribution";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getMonthlyUsageAttribution")
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
                requestContext.setQueryParam("fields", ObjectSerializer_1.ObjectSerializer.serialize(fields, "MonthlyUsageAttributionSupportedMetrics", ""), "");
            }
            if (sortDirection !== undefined) {
                requestContext.setQueryParam("sort_direction", ObjectSerializer_1.ObjectSerializer.serialize(sortDirection, "UsageSortDirection", ""), "");
            }
            if (sortName !== undefined) {
                requestContext.setQueryParam("sort_name", ObjectSerializer_1.ObjectSerializer.serialize(sortName, "MonthlyUsageAttributionSupportedMetrics", ""), "");
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
    getSpecifiedDailyCustomReports(reportId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'reportId' is not null or undefined
            if (reportId === null || reportId === undefined) {
                throw new baseapi_1.RequiredError("reportId", "getSpecifiedDailyCustomReports");
            }
            // Path Params
            const localVarPath = "/api/v1/daily_custom_reports/{report_id}".replace("{report_id}", encodeURIComponent(String(reportId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getSpecifiedDailyCustomReports")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getSpecifiedMonthlyCustomReports(reportId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'reportId' is not null or undefined
            if (reportId === null || reportId === undefined) {
                throw new baseapi_1.RequiredError("reportId", "getSpecifiedMonthlyCustomReports");
            }
            // Path Params
            const localVarPath = "/api/v1/monthly_custom_reports/{report_id}".replace("{report_id}", encodeURIComponent(String(reportId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getSpecifiedMonthlyCustomReports")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getUsageAnalyzedLogs(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageAnalyzedLogs");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/analyzed_logs";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageAnalyzedLogs")
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
    getUsageAuditLogs(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageAuditLogs");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/audit_logs";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageAuditLogs")
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
    getUsageBillableSummary(month, includeConnectedAccounts, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/usage/billable-summary";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageBillableSummary")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (month !== undefined) {
                requestContext.setQueryParam("month", ObjectSerializer_1.ObjectSerializer.serialize(month, "Date", "date-time"), "");
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
    getUsageCIApp(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageCIApp");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/ci-app";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageCIApp")
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
    getUsageCloudSecurityPostureManagement(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageCloudSecurityPostureManagement");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/cspm";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageCloudSecurityPostureManagement")
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
    getUsageCWS(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageCWS");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/cws";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageCWS")
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
    getUsageDBM(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageDBM");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/dbm";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageDBM")
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
    getUsageFargate(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageFargate");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/fargate";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageFargate")
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
    getUsageHosts(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageHosts");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/hosts";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageHosts")
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
    getUsageIndexedSpans(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageIndexedSpans");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/indexed-spans";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageIndexedSpans")
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
    getUsageInternetOfThings(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageInternetOfThings");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/iot";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageInternetOfThings")
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
    getUsageLambda(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageLambda");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/aws_lambda";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageLambda")
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
    getUsageLogs(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageLogs");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/logs";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageLogs")
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
    getUsageLogsByIndex(startHr, endHr, indexName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageLogsByIndex");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/logs_by_index";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageLogsByIndex")
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
            if (indexName !== undefined) {
                requestContext.setQueryParam("index_name", ObjectSerializer_1.ObjectSerializer.serialize(indexName, "Array<string>", ""), "multi");
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
    getUsageLogsByRetention(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageLogsByRetention");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/logs-by-retention";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageLogsByRetention")
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
    getUsageNetworkFlows(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageNetworkFlows");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/network_flows";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageNetworkFlows")
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
    getUsageNetworkHosts(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageNetworkHosts");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/network_hosts";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageNetworkHosts")
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
    getUsageOnlineArchive(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageOnlineArchive");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/online-archive";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageOnlineArchive")
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
    getUsageProfiling(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageProfiling");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/profiling";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageProfiling")
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
    getUsageRumSessions(startHr, endHr, type, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageRumSessions");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/rum_sessions";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageRumSessions")
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
            if (type !== undefined) {
                requestContext.setQueryParam("type", ObjectSerializer_1.ObjectSerializer.serialize(type, "string", ""), "");
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
    getUsageRumUnits(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageRumUnits");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/rum";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageRumUnits")
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
    getUsageSDS(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageSDS");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/sds";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageSDS")
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
    getUsageSNMP(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageSNMP");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/snmp";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageSNMP")
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
    getUsageSummary(startMonth, endMonth, includeOrgDetails, includeConnectedAccounts, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startMonth' is not null or undefined
            if (startMonth === null || startMonth === undefined) {
                throw new baseapi_1.RequiredError("startMonth", "getUsageSummary");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/summary";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageSummary")
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
            if (includeOrgDetails !== undefined) {
                requestContext.setQueryParam("include_org_details", ObjectSerializer_1.ObjectSerializer.serialize(includeOrgDetails, "boolean", ""), "");
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
    getUsageSynthetics(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageSynthetics");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/synthetics";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageSynthetics")
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
    getUsageSyntheticsAPI(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageSyntheticsAPI");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/synthetics_api";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageSyntheticsAPI")
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
    getUsageSyntheticsBrowser(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageSyntheticsBrowser");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/synthetics_browser";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageSyntheticsBrowser")
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
    getUsageTimeseries(startHr, endHr, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'startHr' is not null or undefined
            if (startHr === null || startHr === undefined) {
                throw new baseapi_1.RequiredError("startHr", "getUsageTimeseries");
            }
            // Path Params
            const localVarPath = "/api/v1/usage/timeseries";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageTimeseries")
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
    getUsageTopAvgMetrics(month, day, names, limit, nextRecordId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v1/usage/top_avg_metrics";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.UsageMeteringApi.getUsageTopAvgMetrics")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json;datetime-format=rfc3339");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (month !== undefined) {
                requestContext.setQueryParam("month", ObjectSerializer_1.ObjectSerializer.serialize(month, "Date", "date-time"), "");
            }
            if (day !== undefined) {
                requestContext.setQueryParam("day", ObjectSerializer_1.ObjectSerializer.serialize(day, "Date", "date-time"), "");
            }
            if (names !== undefined) {
                requestContext.setQueryParam("names", ObjectSerializer_1.ObjectSerializer.serialize(names, "Array<string>", ""), "multi");
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"), "");
            }
            if (nextRecordId !== undefined) {
                requestContext.setQueryParam("next_record_id", ObjectSerializer_1.ObjectSerializer.serialize(nextRecordId, "string", ""), "");
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
     * @params response Response returned by the server for a request to getDailyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDailyCustomReports(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCustomReportsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCustomReportsResponse", "");
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
     * @params response Response returned by the server for a request to getHourlyUsageAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getHourlyUsageAttribution(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "HourlyUsageAttributionResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "HourlyUsageAttributionResponse", "");
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
     * @params response Response returned by the server for a request to getIncidentManagement
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentManagement(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIncidentManagementResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIncidentManagementResponse", "");
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
     * @params response Response returned by the server for a request to getIngestedSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIngestedSpans(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIngestedSpansResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIngestedSpansResponse", "");
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
     * @params response Response returned by the server for a request to getMonthlyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyCustomReports(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCustomReportsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCustomReportsResponse", "");
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
     * @params response Response returned by the server for a request to getMonthlyUsageAttribution
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMonthlyUsageAttribution(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonthlyUsageAttributionResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "MonthlyUsageAttributionResponse", "");
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
     * @params response Response returned by the server for a request to getSpecifiedDailyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpecifiedDailyCustomReports(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSpecifiedCustomReportsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSpecifiedCustomReportsResponse", "");
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
     * @params response Response returned by the server for a request to getSpecifiedMonthlyCustomReports
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpecifiedMonthlyCustomReports(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSpecifiedCustomReportsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSpecifiedCustomReportsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageAnalyzedLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageAnalyzedLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageAnalyzedLogsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageAnalyzedLogsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageAuditLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageAuditLogsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageAuditLogsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageBillableSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageBillableSummary(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageBillableSummaryResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageBillableSummaryResponse", "");
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
     * @params response Response returned by the server for a request to getUsageCIApp
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageCIApp(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCIVisibilityResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCIVisibilityResponse", "");
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
     * @params response Response returned by the server for a request to getUsageCloudSecurityPostureManagement
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageCloudSecurityPostureManagement(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCloudSecurityPostureManagementResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCloudSecurityPostureManagementResponse", "");
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
     * @params response Response returned by the server for a request to getUsageCWS
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageCWS(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCWSResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageCWSResponse", "");
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
     * @params response Response returned by the server for a request to getUsageDBM
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageDBM(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageDBMResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageDBMResponse", "");
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
     * @params response Response returned by the server for a request to getUsageFargate
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageFargate(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageFargateResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageFargateResponse", "");
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
     * @params response Response returned by the server for a request to getUsageHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageHosts(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageHostsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageHostsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageIndexedSpans
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageIndexedSpans(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIndexedSpansResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIndexedSpansResponse", "");
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
     * @params response Response returned by the server for a request to getUsageInternetOfThings
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageInternetOfThings(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIoTResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageIoTResponse", "");
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
     * @params response Response returned by the server for a request to getUsageLambda
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLambda(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLambdaResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLambdaResponse", "");
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
     * @params response Response returned by the server for a request to getUsageLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogs(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLogsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLogsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageLogsByIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogsByIndex(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLogsByIndexResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLogsByIndexResponse", "");
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
     * @params response Response returned by the server for a request to getUsageLogsByRetention
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageLogsByRetention(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLogsByRetentionResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageLogsByRetentionResponse", "");
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
     * @params response Response returned by the server for a request to getUsageNetworkFlows
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageNetworkFlows(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageNetworkFlowsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageNetworkFlowsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageNetworkHosts
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageNetworkHosts(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageNetworkHostsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageNetworkHostsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageOnlineArchive
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageOnlineArchive(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageOnlineArchiveResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageOnlineArchiveResponse", "");
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
     * @params response Response returned by the server for a request to getUsageProfiling
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageProfiling(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageProfilingResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageProfilingResponse", "");
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
     * @params response Response returned by the server for a request to getUsageRumSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageRumSessions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageRumSessionsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageRumSessionsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageRumUnits
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageRumUnits(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageRumUnitsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageRumUnitsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageSDS
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSDS(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSDSResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSDSResponse", "");
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
     * @params response Response returned by the server for a request to getUsageSNMP
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSNMP(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSNMPResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSNMPResponse", "");
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
     * @params response Response returned by the server for a request to getUsageSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSummary(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSummaryResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSummaryResponse", "");
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
     * @params response Response returned by the server for a request to getUsageSynthetics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSynthetics(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSyntheticsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSyntheticsResponse", "");
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
     * @params response Response returned by the server for a request to getUsageSyntheticsAPI
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSyntheticsAPI(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSyntheticsAPIResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSyntheticsAPIResponse", "");
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
     * @params response Response returned by the server for a request to getUsageSyntheticsBrowser
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageSyntheticsBrowser(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSyntheticsBrowserResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageSyntheticsBrowserResponse", "");
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
     * @params response Response returned by the server for a request to getUsageTimeseries
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTimeseries(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageTimeseriesResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageTimeseriesResponse", "");
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
     * @params response Response returned by the server for a request to getUsageTopAvgMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUsageTopAvgMetrics(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageTopAvgMetricsResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "UsageTopAvgMetricsResponse", "");
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
     * Get daily custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getDailyCustomReports(param = {}, options) {
        const requestContextPromise = this.requestFactory.getDailyCustomReports(param.pageSize, param.pageNumber, param.sortDir, param.sort, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getDailyCustomReports(responseContext);
            });
        });
    }
    /**
     * Get hourly usage attribution. Multi-region data is available starting March 1, 2023.
     *
     * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
     * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
     * Pseudo code example:
     *
     * ```
     * response := GetHourlyUsageAttribution(start_month)
     * cursor := response.metadata.pagination.next_record_id
     * WHILE cursor != null BEGIN
     *   sleep(5 seconds)  # Avoid running into rate limit
     *   response := GetHourlyUsageAttribution(start_month, next_record_id=cursor)
     *   cursor := response.metadata.pagination.next_record_id
     * END
     * ```
     * The following values have been **deprecated**:
     *     `estimated_indexed_spans_usage`, `estimated_indexed_spans_percentage`, `estimated_ingested_spans_usage`, `estimated_ingested_spans_percentage`, `llm_observability_usage`, `llm_observability_percentage`.
     * @param param The request object
     */
    getHourlyUsageAttribution(param, options) {
        const requestContextPromise = this.requestFactory.getHourlyUsageAttribution(param.startHr, param.usageType, param.endHr, param.nextRecordId, param.tagBreakdownKeys, param.includeDescendants, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getHourlyUsageAttribution(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for incident management.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getIncidentManagement(param, options) {
        const requestContextPromise = this.requestFactory.getIncidentManagement(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getIncidentManagement(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for ingested spans.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getIngestedSpans(param, options) {
        const requestContextPromise = this.requestFactory.getIngestedSpans(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getIngestedSpans(responseContext);
            });
        });
    }
    /**
     * Get monthly custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getMonthlyCustomReports(param = {}, options) {
        const requestContextPromise = this.requestFactory.getMonthlyCustomReports(param.pageSize, param.pageNumber, param.sortDir, param.sort, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getMonthlyCustomReports(responseContext);
            });
        });
    }
    /**
     * Get monthly usage attribution. Multi-region data is available starting March 1, 2023.
     *
     * This API endpoint is paginated. To make sure you receive all records, check if the value of `next_record_id` is
     * set in the response. If it is, make another request and pass `next_record_id` as a parameter.
     * Pseudo code example:
     *
     * ```
     * response := GetMonthlyUsageAttribution(start_month)
     * cursor := response.metadata.pagination.next_record_id
     * WHILE cursor != null BEGIN
     *   sleep(5 seconds)  # Avoid running into rate limit
     *   response := GetMonthlyUsageAttribution(start_month, next_record_id=cursor)
     *   cursor := response.metadata.pagination.next_record_id
     * END
     * ```
     * @param param The request object
     */
    getMonthlyUsageAttribution(param, options) {
        const requestContextPromise = this.requestFactory.getMonthlyUsageAttribution(param.startMonth, param.fields, param.endMonth, param.sortDirection, param.sortName, param.tagBreakdownKeys, param.nextRecordId, param.includeDescendants, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getMonthlyUsageAttribution(responseContext);
            });
        });
    }
    /**
     * Get specified daily custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getSpecifiedDailyCustomReports(param, options) {
        const requestContextPromise = this.requestFactory.getSpecifiedDailyCustomReports(param.reportId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSpecifiedDailyCustomReports(responseContext);
            });
        });
    }
    /**
     * Get specified monthly custom reports.
     * **Note:** This endpoint will be fully deprecated on December 1, 2022.
     * Refer to [Migrating from v1 to v2 of the Usage Attribution API](https://docs.datadoghq.com/account_management/guide/usage-attribution-migration/) for the associated migration guide.
     * @param param The request object
     */
    getSpecifiedMonthlyCustomReports(param, options) {
        const requestContextPromise = this.requestFactory.getSpecifiedMonthlyCustomReports(param.reportId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSpecifiedMonthlyCustomReports(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageAnalyzedLogs(param, options) {
        const requestContextPromise = this.requestFactory.getUsageAnalyzedLogs(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageAnalyzedLogs(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for audit logs.
     * **Note:** This endpoint has been deprecated.
     * @param param The request object
     */
    getUsageAuditLogs(param, options) {
        const requestContextPromise = this.requestFactory.getUsageAuditLogs(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageAuditLogs(responseContext);
            });
        });
    }
    /**
     * Get billable usage across your account.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getUsageBillableSummary(param = {}, options) {
        const requestContextPromise = this.requestFactory.getUsageBillableSummary(param.month, param.includeConnectedAccounts, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageBillableSummary(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for CI visibility (tests, pipeline, and spans).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageCIApp(param, options) {
        const requestContextPromise = this.requestFactory.getUsageCIApp(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageCIApp(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for cloud security management (CSM) pro.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageCloudSecurityPostureManagement(param, options) {
        const requestContextPromise = this.requestFactory.getUsageCloudSecurityPostureManagement(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageCloudSecurityPostureManagement(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for cloud workload security.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageCWS(param, options) {
        const requestContextPromise = this.requestFactory.getUsageCWS(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageCWS(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for database monitoring
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageDBM(param, options) {
        const requestContextPromise = this.requestFactory.getUsageDBM(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageDBM(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageFargate(param, options) {
        const requestContextPromise = this.requestFactory.getUsageFargate(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageFargate(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for hosts and containers.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageHosts(param, options) {
        const requestContextPromise = this.requestFactory.getUsageHosts(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageHosts(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for indexed spans.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageIndexedSpans(param, options) {
        const requestContextPromise = this.requestFactory.getUsageIndexedSpans(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageIndexedSpans(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for IoT.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageInternetOfThings(param, options) {
        const requestContextPromise = this.requestFactory.getUsageInternetOfThings(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageInternetOfThings(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for Lambda.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageLambda(param, options) {
        const requestContextPromise = this.requestFactory.getUsageLambda(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageLambda(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for logs.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageLogs(param, options) {
        const requestContextPromise = this.requestFactory.getUsageLogs(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageLogs(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for logs by index.
     * @param param The request object
     */
    getUsageLogsByIndex(param, options) {
        const requestContextPromise = this.requestFactory.getUsageLogsByIndex(param.startHr, param.endHr, param.indexName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageLogsByIndex(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for indexed logs by retention period.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageLogsByRetention(param, options) {
        const requestContextPromise = this.requestFactory.getUsageLogsByRetention(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageLogsByRetention(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for network flows.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageNetworkFlows(param, options) {
        const requestContextPromise = this.requestFactory.getUsageNetworkFlows(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageNetworkFlows(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for network hosts.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageNetworkHosts(param, options) {
        const requestContextPromise = this.requestFactory.getUsageNetworkHosts(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageNetworkHosts(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for online archive.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageOnlineArchive(param, options) {
        const requestContextPromise = this.requestFactory.getUsageOnlineArchive(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageOnlineArchive(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for profiled hosts.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageProfiling(param, options) {
        const requestContextPromise = this.requestFactory.getUsageProfiling(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageProfiling(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageRumSessions(param, options) {
        const requestContextPromise = this.requestFactory.getUsageRumSessions(param.startHr, param.endHr, param.type, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageRumSessions(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Units.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageRumUnits(param, options) {
        const requestContextPromise = this.requestFactory.getUsageRumUnits(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageRumUnits(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for sensitive data scanner.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSDS(param, options) {
        const requestContextPromise = this.requestFactory.getUsageSDS(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageSDS(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for SNMP devices.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSNMP(param, options) {
        const requestContextPromise = this.requestFactory.getUsageSNMP(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageSNMP(responseContext);
            });
        });
    }
    /**
     * Get all usage across your account.
     *
     * This endpoint is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).
     * @param param The request object
     */
    getUsageSummary(param, options) {
        const requestContextPromise = this.requestFactory.getUsageSummary(param.startMonth, param.endMonth, param.includeOrgDetails, param.includeConnectedAccounts, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageSummary(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for [synthetics checks](https://docs.datadoghq.com/synthetics/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSynthetics(param, options) {
        const requestContextPromise = this.requestFactory.getUsageSynthetics(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageSynthetics(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSyntheticsAPI(param, options) {
        const requestContextPromise = this.requestFactory.getUsageSyntheticsAPI(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageSyntheticsAPI(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for synthetics browser checks.
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageSyntheticsBrowser(param, options) {
        const requestContextPromise = this.requestFactory.getUsageSyntheticsBrowser(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageSyntheticsBrowser(responseContext);
            });
        });
    }
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * **Note:** This endpoint has been deprecated. Hourly usage data for all products is now available in the [Get hourly usage by product family API](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family). Refer to [Migrating from the V1 Hourly Usage APIs to V2](https://docs.datadoghq.com/account_management/guide/hourly-usage-migration/) for the associated migration guide.
     * @param param The request object
     */
    getUsageTimeseries(param, options) {
        const requestContextPromise = this.requestFactory.getUsageTimeseries(param.startHr, param.endHr, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageTimeseries(responseContext);
            });
        });
    }
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * @param param The request object
     */
    getUsageTopAvgMetrics(param = {}, options) {
        const requestContextPromise = this.requestFactory.getUsageTopAvgMetrics(param.month, param.day, param.names, param.limit, param.nextRecordId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getUsageTopAvgMetrics(responseContext);
            });
        });
    }
}
exports.UsageMeteringApi = UsageMeteringApi;
//# sourceMappingURL=UsageMeteringApi.js.map