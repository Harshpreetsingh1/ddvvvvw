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
exports.EventsApi = exports.EventsApiResponseProcessor = exports.EventsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class EventsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createEvent(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createEvent");
            }
            // Path Params
            const localVarPath = "/api/v1/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.EventsApi.createEvent")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "EventCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, ["apiKeyAuth"]);
            return requestContext;
        });
    }
    getEvent(eventId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'eventId' is not null or undefined
            if (eventId === null || eventId === undefined) {
                throw new baseapi_1.RequiredError("eventId", "getEvent");
            }
            // Path Params
            const localVarPath = "/api/v1/events/{event_id}".replace("{event_id}", encodeURIComponent(String(eventId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v1.EventsApi.getEvent")
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
    listEvents(start, end, priority, sources, tags, unaggregated, excludeAggregate, page, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'start' is not null or undefined
            if (start === null || start === undefined) {
                throw new baseapi_1.RequiredError("start", "listEvents");
            }
            // verify required parameter 'end' is not null or undefined
            if (end === null || end === undefined) {
                throw new baseapi_1.RequiredError("end", "listEvents");
            }
            // Path Params
            const localVarPath = "/api/v1/events";
            // Make Request Context
            const requestContext = _config
                .getServer("v1.EventsApi.listEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (start !== undefined) {
                requestContext.setQueryParam("start", ObjectSerializer_1.ObjectSerializer.serialize(start, "number", "int64"), "");
            }
            if (end !== undefined) {
                requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "number", "int64"), "");
            }
            if (priority !== undefined) {
                requestContext.setQueryParam("priority", ObjectSerializer_1.ObjectSerializer.serialize(priority, "EventPriority", ""), "");
            }
            if (sources !== undefined) {
                requestContext.setQueryParam("sources", ObjectSerializer_1.ObjectSerializer.serialize(sources, "string", ""), "");
            }
            if (tags !== undefined) {
                requestContext.setQueryParam("tags", ObjectSerializer_1.ObjectSerializer.serialize(tags, "string", ""), "");
            }
            if (unaggregated !== undefined) {
                requestContext.setQueryParam("unaggregated", ObjectSerializer_1.ObjectSerializer.serialize(unaggregated, "boolean", ""), "");
            }
            if (excludeAggregate !== undefined) {
                requestContext.setQueryParam("exclude_aggregate", ObjectSerializer_1.ObjectSerializer.serialize(excludeAggregate, "boolean", ""), "");
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "int32"), "");
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
exports.EventsApiRequestFactory = EventsApiRequestFactory;
class EventsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createEvent(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "EventCreateResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "EventCreateResponse", "");
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
     * @params response Response returned by the server for a request to getEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    getEvent(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "EventResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "EventResponse", "");
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
     * @params response Response returned by the server for a request to listEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "EventListResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "EventListResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.EventsApiResponseProcessor = EventsApiResponseProcessor;
class EventsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new EventsApiResponseProcessor();
    }
    /**
     * This endpoint allows you to post events to the stream.
     * Tag them, set priority and event aggregate them with other events.
     * @param param The request object
     */
    createEvent(param, options) {
        const requestContextPromise = this.requestFactory.createEvent(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createEvent(responseContext);
            });
        });
    }
    /**
     * This endpoint allows you to query for event details.
     *
     * **Note**: If the event you’re querying contains markdown formatting of any kind,
     * you may see characters such as `%`,`\`,`n` in your output.
     * @param param The request object
     */
    getEvent(param, options) {
        const requestContextPromise = this.requestFactory.getEvent(param.eventId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getEvent(responseContext);
            });
        });
    }
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.
     *
     * **Notes**:
     * - If the event you’re querying contains markdown formatting of any kind,
     * you may see characters such as `%`,`\`,`n` in your output.
     *
     * - This endpoint returns a maximum of `1000` most recent results. To return additional results,
     * identify the last timestamp of the last result and set that as the `end` query time to
     * paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * @param param The request object
     */
    listEvents(param, options) {
        const requestContextPromise = this.requestFactory.listEvents(param.start, param.end, param.priority, param.sources, param.tags, param.unaggregated, param.excludeAggregate, param.page, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listEvents(responseContext);
            });
        });
    }
}
exports.EventsApi = EventsApi;
//# sourceMappingURL=EventsApi.js.map