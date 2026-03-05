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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImagesApi = exports.ContainerImagesApiResponseProcessor = exports.ContainerImagesApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ContainerImagesApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    listContainerImages(filterTags, groupBy, sort, pageSize, pageCursor, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/container_images";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ContainerImagesApi.listContainerImages")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterTags !== undefined) {
                requestContext.setQueryParam("filter[tags]", ObjectSerializer_1.ObjectSerializer.serialize(filterTags, "string", ""), "");
            }
            if (groupBy !== undefined) {
                requestContext.setQueryParam("group_by", ObjectSerializer_1.ObjectSerializer.serialize(groupBy, "string", ""), "");
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "string", ""), "");
            }
            if (pageSize !== undefined) {
                requestContext.setQueryParam("page[size]", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"), "");
            }
            if (pageCursor !== undefined) {
                requestContext.setQueryParam("page[cursor]", ObjectSerializer_1.ObjectSerializer.serialize(pageCursor, "string", ""), "");
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
exports.ContainerImagesApiRequestFactory = ContainerImagesApiRequestFactory;
class ContainerImagesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listContainerImages
     * @throws ApiException if the response code was not in [200, 299]
     */
    listContainerImages(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ContainerImagesResponse");
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ContainerImagesResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ContainerImagesApiResponseProcessor = ContainerImagesApiResponseProcessor;
class ContainerImagesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ContainerImagesApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ContainerImagesApiResponseProcessor();
    }
    /**
     * Get all Container Images for your organization.
     * **Note**: To enrich the data returned by this endpoint with security scans, see the new [api/v2/security/scanned-assets-metadata](https://docs.datadoghq.com/api/latest/security-monitoring/#list-scanned-assets-metadata) endpoint.
     * @param param The request object
     */
    listContainerImages(param = {}, options) {
        const requestContextPromise = this.requestFactory.listContainerImages(param.filterTags, param.groupBy, param.sort, param.pageSize, param.pageCursor, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listContainerImages(responseContext);
            });
        });
    }
    /**
     * Provide a paginated version of listContainerImages returning a generator with all the items.
     */
    listContainerImagesWithPagination(param = {}, options) {
        return __asyncGenerator(this, arguments, function* listContainerImagesWithPagination_1() {
            let pageSize = 1000;
            if (param.pageSize !== undefined) {
                pageSize = param.pageSize;
            }
            param.pageSize = pageSize;
            while (true) {
                const requestContext = yield __await(this.requestFactory.listContainerImages(param.filterTags, param.groupBy, param.sort, param.pageSize, param.pageCursor, options));
                const responseContext = yield __await(this.configuration.httpApi.send(requestContext));
                const response = yield __await(this.responseProcessor.listContainerImages(responseContext));
                const responseData = response.data;
                if (responseData === undefined) {
                    break;
                }
                const results = responseData;
                for (const item of results) {
                    yield yield __await(item);
                }
                if (results.length < pageSize) {
                    break;
                }
                const cursorMeta = response.meta;
                if (cursorMeta === undefined) {
                    break;
                }
                const cursorMetaPagination = cursorMeta.pagination;
                if (cursorMetaPagination === undefined) {
                    break;
                }
                const cursorMetaPaginationNextCursor = cursorMetaPagination.nextCursor;
                if (cursorMetaPaginationNextCursor === undefined) {
                    break;
                }
                param.pageCursor = cursorMetaPaginationNextCursor;
            }
        });
    }
}
exports.ContainerImagesApi = ContainerImagesApi;
//# sourceMappingURL=ContainerImagesApi.js.map