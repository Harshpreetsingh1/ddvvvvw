"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRequest = void 0;
/**
 * Object describing the Synthetic test request.
 */
class SyntheticsTestRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestRequest.attributeTypeMap;
    }
}
exports.SyntheticsTestRequest = SyntheticsTestRequest;
/**
 * @ignore
 */
SyntheticsTestRequest.attributeTypeMap = {
    allowInsecure: {
        baseName: "allow_insecure",
        type: "boolean",
    },
    basicAuth: {
        baseName: "basicAuth",
        type: "SyntheticsBasicAuth",
    },
    body: {
        baseName: "body",
        type: "string",
    },
    bodyType: {
        baseName: "bodyType",
        type: "SyntheticsTestRequestBodyType",
    },
    callType: {
        baseName: "callType",
        type: "SyntheticsTestCallType",
    },
    certificate: {
        baseName: "certificate",
        type: "SyntheticsTestRequestCertificate",
    },
    certificateDomains: {
        baseName: "certificateDomains",
        type: "Array<string>",
    },
    checkCertificateRevocation: {
        baseName: "checkCertificateRevocation",
        type: "boolean",
    },
    compressedJsonDescriptor: {
        baseName: "compressedJsonDescriptor",
        type: "string",
    },
    compressedProtoFile: {
        baseName: "compressedProtoFile",
        type: "string",
    },
    disableAiaIntermediateFetching: {
        baseName: "disableAiaIntermediateFetching",
        type: "boolean",
    },
    dnsServer: {
        baseName: "dnsServer",
        type: "string",
    },
    dnsServerPort: {
        baseName: "dnsServerPort",
        type: "SyntheticsTestRequestDNSServerPort",
    },
    files: {
        baseName: "files",
        type: "Array<SyntheticsTestRequestBodyFile>",
    },
    followRedirects: {
        baseName: "follow_redirects",
        type: "boolean",
    },
    form: {
        baseName: "form",
        type: "{ [key: string]: string; }",
    },
    headers: {
        baseName: "headers",
        type: "{ [key: string]: string; }",
    },
    host: {
        baseName: "host",
        type: "string",
    },
    httpVersion: {
        baseName: "httpVersion",
        type: "SyntheticsTestOptionsHTTPVersion",
    },
    isMessageBase64Encoded: {
        baseName: "isMessageBase64Encoded",
        type: "boolean",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: string; }",
    },
    method: {
        baseName: "method",
        type: "string",
    },
    noSavingResponseBody: {
        baseName: "noSavingResponseBody",
        type: "boolean",
    },
    numberOfPackets: {
        baseName: "numberOfPackets",
        type: "number",
        format: "int32",
    },
    persistCookies: {
        baseName: "persistCookies",
        type: "boolean",
    },
    port: {
        baseName: "port",
        type: "SyntheticsTestRequestPort",
    },
    proxy: {
        baseName: "proxy",
        type: "SyntheticsTestRequestProxy",
    },
    query: {
        baseName: "query",
        type: "any",
    },
    servername: {
        baseName: "servername",
        type: "string",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    shouldTrackHops: {
        baseName: "shouldTrackHops",
        type: "boolean",
    },
    timeout: {
        baseName: "timeout",
        type: "number",
        format: "double",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestRequest.js.map