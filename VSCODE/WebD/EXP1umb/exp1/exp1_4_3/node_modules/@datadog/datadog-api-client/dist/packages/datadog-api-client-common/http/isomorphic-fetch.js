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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsomorphicFetchHttpLibrary = void 0;
const http_1 = require("./http");
const cross_fetch_1 = require("cross-fetch");
const pako_1 = __importDefault(require("pako"));
const buffer_from_1 = __importDefault(require("buffer-from"));
const util_1 = require("../util");
const logger_1 = require("../../../logger");
class IsomorphicFetchHttpLibrary {
    constructor() {
        this.debug = false;
    }
    send(request) {
        if (this.debug) {
            this.logRequest(request);
        }
        const method = request.getHttpMethod().toString();
        let body = request.getBody();
        let compress = request.getHttpConfig().compress;
        if (compress === undefined) {
            compress = true;
        }
        const headers = request.getHeaders();
        if (typeof body === "string") {
            if (headers["Content-Encoding"] === "gzip") {
                body = (0, buffer_from_1.default)(pako_1.default.gzip(body).buffer);
            }
            else if (headers["Content-Encoding"] === "deflate") {
                body = (0, buffer_from_1.default)(pako_1.default.deflate(body).buffer);
            }
            else if (headers["Content-Encoding"] === "zstd1") {
                if (this.zstdCompressorCallback) {
                    body = this.zstdCompressorCallback(body);
                }
                else {
                    throw new Error("zstdCompressorCallback method missing");
                }
            }
        }
        if (!util_1.isBrowser) {
            if (!headers["Accept-Encoding"]) {
                if (compress) {
                    headers["Accept-Encoding"] = "gzip,deflate";
                }
                else {
                    // We need to enforce it otherwise node-fetch will set a default
                    headers["Accept-Encoding"] = "identity";
                }
            }
        }
        return this.executeRequest(request, body, 0, headers);
    }
    executeRequest(request, body, currentAttempt, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = {
                method: request.getHttpMethod().toString(),
                body: body,
                headers: headers,
                signal: request.getHttpConfig().signal,
            };
            try {
                const fetchFunction = this.fetch ||
                    // On non-node environments, use native fetch if available.
                    // `cross-fetch` incorrectly assumes all browsers have XHR available.
                    // See https://github.com/lquixada/cross-fetch/issues/78
                    // TODO: Remove once once above issue is resolved.
                    (!util_1.isNode && typeof fetch === "function" ? fetch : cross_fetch_1.fetch);
                const resp = yield fetchFunction(request.getUrl(), fetchOptions);
                const responseHeaders = {};
                resp.headers.forEach((value, name) => {
                    responseHeaders[name] = value;
                });
                const responseBody = {
                    text: () => resp.text(),
                    binary: () => __awaiter(this, void 0, void 0, function* () {
                        const arrayBuffer = yield resp.arrayBuffer();
                        return Buffer.from(arrayBuffer);
                    }),
                };
                const response = new http_1.ResponseContext(resp.status, responseHeaders, responseBody);
                if (this.debug) {
                    this.logResponse(response);
                }
                if (this.shouldRetry(this.enableRetry, currentAttempt, this.maxRetries, response.httpStatusCode)) {
                    const delay = this.calculateRetryInterval(currentAttempt, this.backoffBase, this.backoffMultiplier, responseHeaders);
                    currentAttempt++;
                    yield this.sleep(delay * 1000);
                    return this.executeRequest(request, body, currentAttempt, headers);
                }
                return response;
            }
            catch (error) {
                logger_1.logger.error("An error occurred during the HTTP request:", error);
                throw error;
            }
        });
    }
    sleep(milliseconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    }
    shouldRetry(enableRetry, currentAttempt, maxRetries, responseCode) {
        return ((responseCode === 429 || responseCode >= 500) &&
            maxRetries > currentAttempt &&
            enableRetry);
    }
    calculateRetryInterval(currentAttempt, backoffBase, backoffMultiplier, headers) {
        if ("x-ratelimit-reset" in headers) {
            const rateLimitHeaderString = headers["x-ratelimit-reset"];
            const retryIntervalFromHeader = parseInt(rateLimitHeaderString, 10);
            return retryIntervalFromHeader;
        }
        else {
            return Math.pow(backoffMultiplier, currentAttempt) * backoffBase;
        }
    }
    logRequest(request) {
        var _a;
        const headers = {};
        const originalHeaders = request.getHeaders();
        for (const header in originalHeaders) {
            headers[header] = originalHeaders[header];
        }
        if (headers["DD-API-KEY"]) {
            headers["DD-API-KEY"] = headers["DD-API-KEY"].replace(/./g, "x");
        }
        if (headers["DD-APPLICATION-KEY"]) {
            headers["DD-APPLICATION-KEY"] = headers["DD-APPLICATION-KEY"].replace(/./g, "x");
        }
        const headersJSON = JSON.stringify(headers, null, 2).replace(/\n/g, "\n\t");
        const method = request.getHttpMethod().toString();
        const url = request.getUrl().toString();
        const body = request.getBody()
            ? JSON.stringify(request.getBody(), null, 2).replace(/\n/g, "\n\t")
            : "";
        const compress = (_a = request.getHttpConfig().compress) !== null && _a !== void 0 ? _a : true;
        logger_1.logger.debug("\nrequest: {\n", `\turl: ${url}\n`, `\tmethod: ${method}\n`, `\theaders: ${headersJSON}\n`, `\tcompress: ${compress}\n`, `\tbody: ${body}\n}\n`);
    }
    logResponse(response) {
        const httpStatusCode = response.httpStatusCode;
        const headers = JSON.stringify(response.headers, null, 2).replace(/\n/g, "\n\t");
        logger_1.logger.debug("response: {\n", `\tstatus: ${httpStatusCode}\n`, `\theaders: ${headers}\n`);
    }
}
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
//# sourceMappingURL=isomorphic-fetch.js.map