"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsCITest = void 0;
/**
 * Configuration for Continuous Testing.
 */
class SyntheticsCITest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsCITest.attributeTypeMap;
    }
}
exports.SyntheticsCITest = SyntheticsCITest;
/**
 * @ignore
 */
SyntheticsCITest.attributeTypeMap = {
    allowInsecureCertificates: {
        baseName: "allowInsecureCertificates",
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
        type: "string",
    },
    cookies: {
        baseName: "cookies",
        type: "string",
    },
    deviceIds: {
        baseName: "deviceIds",
        type: "Array<string>",
    },
    followRedirects: {
        baseName: "followRedirects",
        type: "boolean",
    },
    headers: {
        baseName: "headers",
        type: "{ [key: string]: string; }",
    },
    locations: {
        baseName: "locations",
        type: "Array<string>",
    },
    metadata: {
        baseName: "metadata",
        type: "SyntheticsCIBatchMetadata",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
        required: true,
    },
    retry: {
        baseName: "retry",
        type: "SyntheticsTestOptionsRetry",
    },
    startUrl: {
        baseName: "startUrl",
        type: "string",
    },
    variables: {
        baseName: "variables",
        type: "{ [key: string]: string; }",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsCITest.js.map