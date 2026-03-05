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
exports.ServiceLevelObjectivesApi = exports.ServiceLevelObjectivesApiResponseProcessor = exports.ServiceLevelObjectivesApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ServiceLevelObjectivesApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createSLOReportJob(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createSLOReportJob'");
            if (!_config.unstableOperations["v2.createSLOReportJob"]) {
                throw new Error("Unstable operation 'createSLOReportJob' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createSLOReportJob");
            }
            // Path Params
            const localVarPath = "/api/v2/slo/report";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceLevelObjectivesApi.createSLOReportJob")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "SloReportCreateRequest", ""), contentType);
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
    getSLOReport(reportId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getSLOReport'");
            if (!_config.unstableOperations["v2.getSLOReport"]) {
                throw new Error("Unstable operation 'getSLOReport' is disabled");
            }
            // verify required parameter 'reportId' is not null or undefined
            if (reportId === null || reportId === undefined) {
                throw new baseapi_1.RequiredError("reportId", "getSLOReport");
            }
            // Path Params
            const localVarPath = "/api/v2/slo/report/{report_id}/download".replace("{report_id}", encodeURIComponent(String(reportId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceLevelObjectivesApi.getSLOReport")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "text/csv, application/json");
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
    getSLOReportJobStatus(reportId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getSLOReportJobStatus'");
            if (!_config.unstableOperations["v2.getSLOReportJobStatus"]) {
                throw new Error("Unstable operation 'getSLOReportJobStatus' is disabled");
            }
            // verify required parameter 'reportId' is not null or undefined
            if (reportId === null || reportId === undefined) {
                throw new baseapi_1.RequiredError("reportId", "getSLOReportJobStatus");
            }
            // Path Params
            const localVarPath = "/api/v2/slo/report/{report_id}/status".replace("{report_id}", encodeURIComponent(String(reportId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceLevelObjectivesApi.getSLOReportJobStatus")
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
    getSloStatus(sloId, fromTs, toTs, disableCorrections, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getSloStatus'");
            if (!_config.unstableOperations["v2.getSloStatus"]) {
                throw new Error("Unstable operation 'getSloStatus' is disabled");
            }
            // verify required parameter 'sloId' is not null or undefined
            if (sloId === null || sloId === undefined) {
                throw new baseapi_1.RequiredError("sloId", "getSloStatus");
            }
            // verify required parameter 'fromTs' is not null or undefined
            if (fromTs === null || fromTs === undefined) {
                throw new baseapi_1.RequiredError("fromTs", "getSloStatus");
            }
            // verify required parameter 'toTs' is not null or undefined
            if (toTs === null || toTs === undefined) {
                throw new baseapi_1.RequiredError("toTs", "getSloStatus");
            }
            // Path Params
            const localVarPath = "/api/v2/slo/{slo_id}/status".replace("{slo_id}", encodeURIComponent(String(sloId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ServiceLevelObjectivesApi.getSloStatus")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (fromTs !== undefined) {
                requestContext.setQueryParam("from_ts", ObjectSerializer_1.ObjectSerializer.serialize(fromTs, "number", "int64"), "");
            }
            if (toTs !== undefined) {
                requestContext.setQueryParam("to_ts", ObjectSerializer_1.ObjectSerializer.serialize(toTs, "number", "int64"), "");
            }
            if (disableCorrections !== undefined) {
                requestContext.setQueryParam("disable_corrections", ObjectSerializer_1.ObjectSerializer.serialize(disableCorrections, "boolean", ""), "");
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
exports.ServiceLevelObjectivesApiRequestFactory = ServiceLevelObjectivesApiRequestFactory;
class ServiceLevelObjectivesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLOReportJob
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSLOReportJob(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SLOReportPostResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SLOReportPostResponse", "");
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
     * @params response Response returned by the server for a request to getSLOReport
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOReport(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "string");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "string", "");
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
     * @params response Response returned by the server for a request to getSLOReportJobStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOReportJobStatus(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SLOReportStatusGetResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SLOReportStatusGetResponse", "");
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
     * @params response Response returned by the server for a request to getSloStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSloStatus(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SloStatusResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SloStatusResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ServiceLevelObjectivesApiResponseProcessor = ServiceLevelObjectivesApiResponseProcessor;
class ServiceLevelObjectivesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory ||
                new ServiceLevelObjectivesApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ServiceLevelObjectivesApiResponseProcessor();
    }
    /**
     * Create a job to generate an SLO report. The report job is processed asynchronously and eventually results in a CSV report being available for download.
     *
     * Check the status of the job and download the CSV report using the returned `report_id`.
     * @param param The request object
     */
    createSLOReportJob(param, options) {
        const requestContextPromise = this.requestFactory.createSLOReportJob(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createSLOReportJob(responseContext);
            });
        });
    }
    /**
     * Download an SLO report. This can only be performed after the report job has completed.
     *
     * Reports are not guaranteed to exist indefinitely. Datadog recommends that you download the report as soon as it is available.
     * @param param The request object
     */
    getSLOReport(param, options) {
        const requestContextPromise = this.requestFactory.getSLOReport(param.reportId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSLOReport(responseContext);
            });
        });
    }
    /**
     * Get the status of the SLO report job.
     * @param param The request object
     */
    getSLOReportJobStatus(param, options) {
        const requestContextPromise = this.requestFactory.getSLOReportJobStatus(param.reportId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSLOReportJobStatus(responseContext);
            });
        });
    }
    /**
     * Get the status of a Service Level Objective (SLO) for a given time period.
     *
     * This endpoint returns the current SLI value, error budget remaining, and other status information for the specified SLO.
     * @param param The request object
     */
    getSloStatus(param, options) {
        const requestContextPromise = this.requestFactory.getSloStatus(param.sloId, param.fromTs, param.toTs, param.disableCorrections, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSloStatus(responseContext);
            });
        });
    }
}
exports.ServiceLevelObjectivesApi = ServiceLevelObjectivesApi;
//# sourceMappingURL=ServiceLevelObjectivesApi.js.map