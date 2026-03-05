"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSSLCertificateIssuer = void 0;
/**
 * Object describing the issuer of a SSL certificate.
 */
class SyntheticsSSLCertificateIssuer {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSSLCertificateIssuer.attributeTypeMap;
    }
}
exports.SyntheticsSSLCertificateIssuer = SyntheticsSSLCertificateIssuer;
/**
 * @ignore
 */
SyntheticsSSLCertificateIssuer.attributeTypeMap = {
    C: {
        baseName: "C",
        type: "string",
    },
    CN: {
        baseName: "CN",
        type: "string",
    },
    L: {
        baseName: "L",
        type: "string",
    },
    O: {
        baseName: "O",
        type: "string",
    },
    OU: {
        baseName: "OU",
        type: "string",
    },
    ST: {
        baseName: "ST",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSSLCertificateIssuer.js.map