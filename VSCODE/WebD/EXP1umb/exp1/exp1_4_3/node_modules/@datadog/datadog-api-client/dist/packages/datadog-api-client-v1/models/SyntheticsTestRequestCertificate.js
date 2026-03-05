"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRequestCertificate = void 0;
/**
 * Client certificate to use when performing the test request.
 */
class SyntheticsTestRequestCertificate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestRequestCertificate.attributeTypeMap;
    }
}
exports.SyntheticsTestRequestCertificate = SyntheticsTestRequestCertificate;
/**
 * @ignore
 */
SyntheticsTestRequestCertificate.attributeTypeMap = {
    cert: {
        baseName: "cert",
        type: "SyntheticsTestRequestCertificateItem",
    },
    key: {
        baseName: "key",
        type: "SyntheticsTestRequestCertificateItem",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestRequestCertificate.js.map