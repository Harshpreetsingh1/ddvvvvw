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
exports.SpaApi = exports.SpaApiResponseProcessor = exports.SpaApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class SpaApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    getSPARecommendations(service, bypassCache, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getSPARecommendations'");
            if (!_config.unstableOperations["v2.getSPARecommendations"]) {
                throw new Error("Unstable operation 'getSPARecommendations' is disabled");
            }
            // verify required parameter 'service' is not null or undefined
            if (service === null || service === undefined) {
                throw new baseapi_1.RequiredError("service", "getSPARecommendations");
            }
            // Path Params
            const localVarPath = "/api/v2/spa/recommendations/{service}".replace("{service}", encodeURIComponent(String(service)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.SpaApi.getSPARecommendations")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (bypassCache !== undefined) {
                requestContext.setQueryParam("bypass_cache", ObjectSerializer_1.ObjectSerializer.serialize(bypassCache, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["AuthZ"]);
            return requestContext;
        });
    }
    getSPARecommendationsWithShard(shard, service, bypassCache, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getSPARecommendationsWithShard'");
            if (!_config.unstableOperations["v2.getSPARecommendationsWithShard"]) {
                throw new Error("Unstable operation 'getSPARecommendationsWithShard' is disabled");
            }
            // verify required parameter 'shard' is not null or undefined
            if (shard === null || shard === undefined) {
                throw new baseapi_1.RequiredError("shard", "getSPARecommendationsWithShard");
            }
            // verify required parameter 'service' is not null or undefined
            if (service === null || service === undefined) {
                throw new baseapi_1.RequiredError("service", "getSPARecommendationsWithShard");
            }
            // Path Params
            const localVarPath = "/api/v2/spa/recommendations/{service}/{shard}"
                .replace("{shard}", encodeURIComponent(String(shard)))
                .replace("{service}", encodeURIComponent(String(service)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.SpaApi.getSPARecommendationsWithShard")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (bypassCache !== undefined) {
                requestContext.setQueryParam("bypass_cache", ObjectSerializer_1.ObjectSerializer.serialize(bypassCache, "string", ""), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["AuthZ"]);
            return requestContext;
        });
    }
}
exports.SpaApiRequestFactory = SpaApiRequestFactory;
class SpaApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSPARecommendations
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSPARecommendations(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RecommendationDocument");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RecommendationDocument", "");
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
     * @params response Response returned by the server for a request to getSPARecommendationsWithShard
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSPARecommendationsWithShard(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RecommendationDocument");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "RecommendationDocument", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.SpaApiResponseProcessor = SpaApiResponseProcessor;
class SpaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new SpaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SpaApiResponseProcessor();
    }
    /**
     * This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and SPA returns structured recommendations for driver and executor resources. The version with a shard should be preferred, where possible, as it gives more accurate results.
     * @param param The request object
     */
    getSPARecommendations(param, options) {
        const requestContextPromise = this.requestFactory.getSPARecommendations(param.service, param.bypassCache, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSPARecommendations(responseContext);
            });
        });
    }
    /**
     * This endpoint is currently experimental and restricted to Datadog internal use only. Retrieve resource recommendations for a Spark job. The caller (Spark Gateway or DJM UI) provides a service name and shard identifier, and SPA returns structured recommendations for driver and executor resources.
     * @param param The request object
     */
    getSPARecommendationsWithShard(param, options) {
        const requestContextPromise = this.requestFactory.getSPARecommendationsWithShard(param.shard, param.service, param.bypassCache, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSPARecommendationsWithShard(responseContext);
            });
        });
    }
}
exports.SpaApi = SpaApi;
//# sourceMappingURL=SpaApi.js.map