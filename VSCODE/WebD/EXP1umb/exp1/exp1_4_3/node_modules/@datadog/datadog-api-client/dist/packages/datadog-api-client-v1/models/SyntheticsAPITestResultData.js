"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestResultData = void 0;
/**
 * Object containing results for your Synthetic API test.
 */
class SyntheticsAPITestResultData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestResultData.attributeTypeMap;
    }
}
exports.SyntheticsAPITestResultData = SyntheticsAPITestResultData;
/**
 * @ignore
 */
SyntheticsAPITestResultData.attributeTypeMap = {
    cert: {
        baseName: "cert",
        type: "SyntheticsSSLCertificate",
    },
    eventType: {
        baseName: "eventType",
        type: "SyntheticsTestProcessStatus",
    },
    failure: {
        baseName: "failure",
        type: "SyntheticsApiTestResultFailure",
    },
    httpStatusCode: {
        baseName: "httpStatusCode",
        type: "number",
        format: "int64",
    },
    requestHeaders: {
        baseName: "requestHeaders",
        type: "{ [key: string]: any; }",
    },
    responseBody: {
        baseName: "responseBody",
        type: "string",
    },
    responseHeaders: {
        baseName: "responseHeaders",
        type: "{ [key: string]: any; }",
    },
    responseSize: {
        baseName: "responseSize",
        type: "number",
        format: "int64",
    },
    timings: {
        baseName: "timings",
        type: "SyntheticsTiming",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPITestResultData.js.map