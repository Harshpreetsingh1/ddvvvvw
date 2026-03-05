"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSSLCertificate = void 0;
/**
 * Object describing the SSL certificate used for a Synthetic test.
 */
class SyntheticsSSLCertificate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSSLCertificate.attributeTypeMap;
    }
}
exports.SyntheticsSSLCertificate = SyntheticsSSLCertificate;
/**
 * @ignore
 */
SyntheticsSSLCertificate.attributeTypeMap = {
    cipher: {
        baseName: "cipher",
        type: "string",
    },
    exponent: {
        baseName: "exponent",
        type: "number",
        format: "double",
    },
    extKeyUsage: {
        baseName: "extKeyUsage",
        type: "Array<string>",
    },
    fingerprint: {
        baseName: "fingerprint",
        type: "string",
    },
    fingerprint256: {
        baseName: "fingerprint256",
        type: "string",
    },
    issuer: {
        baseName: "issuer",
        type: "SyntheticsSSLCertificateIssuer",
    },
    modulus: {
        baseName: "modulus",
        type: "string",
    },
    protocol: {
        baseName: "protocol",
        type: "string",
    },
    serialNumber: {
        baseName: "serialNumber",
        type: "string",
    },
    subject: {
        baseName: "subject",
        type: "SyntheticsSSLCertificateSubject",
    },
    validFrom: {
        baseName: "validFrom",
        type: "Date",
        format: "date-time",
    },
    validTo: {
        baseName: "validTo",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSSLCertificate.js.map