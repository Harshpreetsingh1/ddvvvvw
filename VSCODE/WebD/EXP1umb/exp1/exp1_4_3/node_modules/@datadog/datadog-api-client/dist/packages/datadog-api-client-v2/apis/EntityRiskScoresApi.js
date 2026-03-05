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
exports.EntityRiskScoresApi = exports.EntityRiskScoresApiResponseProcessor = exports.EntityRiskScoresApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class EntityRiskScoresApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    listEntityRiskScores(from, to, pageSize, pageNumber, pageQueryId, filterSort, filterQuery, entityType, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listEntityRiskScores'");
            if (!_config.unstableOperations["v2.listEntityRiskScores"]) {
                throw new Error("Unstable operation 'listEntityRiskScores' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/security-entities/risk-scores";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.EntityRiskScoresApi.listEntityRiskScores")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (from !== undefined) {
                requestContext.setQueryParam("from", ObjectSerializer_1.ObjectSerializer.serialize(from, "number", "int64"), "");
            }
            if (to !== undefined) {
                requestContext.setQueryParam("to", ObjectSerializer_1.ObjectSerializer.serialize(to, "number", "int64"), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", ""), "");
            }
            if (pageNumber !== undefined) {
                requestContext.setQueryParam("page[number]", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""), "");
            }
            if (pageQueryId !== undefined) {
                requestContext.setQueryParam("page[queryId]", ObjectSerializer_1.ObjectSerializer.serialize(pageQueryId, "string", ""), "");
            }
            if (filterSort !== undefined) {
                requestContext.setQueryParam("filter[sort]", ObjectSerializer_1.ObjectSerializer.serialize(filterSort, "string", ""), "");
            }
            if (filterQuery !== undefined) {
                requestContext.setQueryParam("filter[query]", ObjectSerializer_1.ObjectSerializer.serialize(filterQuery, "string", ""), "");
            }
            if (entityType !== undefined) {
                requestContext.setQueryParam("entityType", ObjectSerializer_1.ObjectSerializer.serialize(entityType, "Array<string>", ""), "multi");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
}
exports.EntityRiskScoresApiRequestFactory = EntityRiskScoresApiRequestFactory;
class EntityRiskScoresApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listEntityRiskScores
     * @throws ApiException if the response code was not in [200, 299]
     */
    listEntityRiskScores(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SecurityEntityRiskScoresResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "SecurityEntityRiskScoresResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.EntityRiskScoresApiResponseProcessor = EntityRiskScoresApiResponseProcessor;
class EntityRiskScoresApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new EntityRiskScoresApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new EntityRiskScoresApiResponseProcessor();
    }
    /**
     * Get a list of entity risk scores for your organization. Entity risk scores provide security risk assessment for entities like cloud resources, identities, or services based on detected signals, misconfigurations, and identity risks.
     * @param param The request object
     */
    listEntityRiskScores(param = {}, options) {
        const requestContextPromise = this.requestFactory.listEntityRiskScores(param.from, param.to, param.pageSize, param.pageNumber, param.pageQueryId, param.filterSort, param.filterQuery, param.entityType, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listEntityRiskScores(responseContext);
            });
        });
    }
}
exports.EntityRiskScoresApi = EntityRiskScoresApi;
//# sourceMappingURL=EntityRiskScoresApi.js.map