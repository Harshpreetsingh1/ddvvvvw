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
exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
const userAgent_1 = require("../../../userAgent");
const util_1 = require("../util");
const baseapi_1 = require("../baseapi");
/**
 * Represents an HTTP method.
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.HttpException = HttpException;
/**
 * Represents an HTTP request context
 */
class RequestContext {
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.httpConfig = {};
        this.url = new URL(url);
        if (!util_1.isBrowser) {
            this.headers = { "user-agent": userAgent_1.userAgent };
        }
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */
    getUrl() {
        return this.url.toString();
    }
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    setUrl(url) {
        this.url = new URL(url);
    }
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    /**
     * Sets query parameters on the request URL
     *
     * @param name the name of the query parameter
     * @param value the value of the query parameter
     * @param collectionFormat the format of the query parameter See https://spec.openapis.org/oas/v3.0.2#style-values
     */
    setQueryParam(name, value, collectionFormat) {
        if (collectionFormat === "multi") {
            for (const val of value) {
                this.url.searchParams.append(name, val);
            }
            return;
        }
        if (Array.isArray(value)) {
            const delimiter = baseapi_1.COLLECTION_FORMATS[collectionFormat];
            value = value.join(delimiter);
        }
        return this.url.searchParams.set(name, value);
    }
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
    setHttpConfig(conf) {
        this.httpConfig = conf;
    }
    getHttpConfig() {
        return this.httpConfig;
    }
}
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
class SelfDecodingBody {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    text() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataSource;
            return data.toString();
        });
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters) {
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    getBodyAsFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.body.binary();
            const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
            return { data, name: fileName };
        });
    }
}
exports.ResponseContext = ResponseContext;
//# sourceMappingURL=http.js.map