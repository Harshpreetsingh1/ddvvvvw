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
exports.ProductAnalyticsApi = exports.ProductAnalyticsApiResponseProcessor = exports.ProductAnalyticsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ProductAnalyticsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    submitProductAnalyticsEvent(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "submitProductAnalyticsEvent");
            }
            // Path Params
            const localVarPath = "/api/v2/prodlytics";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ProductAnalyticsApi.submitProductAnalyticsEvent")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ProductAnalyticsServerSideEventItem", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["apiKeyAuth"]);
            return requestContext;
        });
    }
}
exports.ProductAnalyticsApiRequestFactory = ProductAnalyticsApiRequestFactory;
class ProductAnalyticsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitProductAnalyticsEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitProductAnalyticsEvent(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 408 ||
                response.httpStatusCode === 413 ||
                response.httpStatusCode === 429 ||
                response.httpStatusCode === 500 ||
                response.httpStatusCode === 503) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "ProductAnalyticsServerSideEventErrors");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "any", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ProductAnalyticsApiResponseProcessor = ProductAnalyticsApiResponseProcessor;
class ProductAnalyticsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ProductAnalyticsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ProductAnalyticsApiResponseProcessor();
    }
    /**
     * Send server-side events to Product Analytics. Server-side events are retained for 15 months.
     *
     * Server-Side events in Product Analytics are helpful for tracking events that occur on the server,
     * as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.
     * This allows for a more comprehensive view of the user journey by including actions that happen on the server.
     * Typical examples could be `checkout.completed` or `payment.processed`.
     *
     * Ingested server-side events are integrated into Product Analytics to allow users to select and filter
     * these events in the event picker, similar to how views or actions are handled.
     *
     * **Requirements:**
     * - At least one of `usr`, `account`, or `session` must be provided with a valid ID.
     * - The `application.id` must reference a Product Analytics-enabled application.
     *
     * **Custom Attributes:**
     * Any additional fields in the payload are flattened and searchable as facets.
     * For example, a payload with `{"customer": {"tier": "premium"}}` is searchable with
     * the syntax `@customer.tier:premium` in Datadog.
     *
     * The status codes answered by the HTTP API are:
     * - 202: Accepted: The request has been accepted for processing
     * - 400: Bad request (likely an issue in the payload formatting)
     * - 401: Unauthorized (likely a missing API Key)
     * - 403: Permission issue (likely using an invalid API Key)
     * - 408: Request Timeout, request should be retried after some time
     * - 413: Payload too large (batch is above 5MB uncompressed)
     * - 429: Too Many Requests, request should be retried after some time
     * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
     * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
     * @param param The request object
     */
    submitProductAnalyticsEvent(param, options) {
        const requestContextPromise = this.requestFactory.submitProductAnalyticsEvent(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.submitProductAnalyticsEvent(responseContext);
            });
        });
    }
}
exports.ProductAnalyticsApi = ProductAnalyticsApi;
//# sourceMappingURL=ProductAnalyticsApi.js.map