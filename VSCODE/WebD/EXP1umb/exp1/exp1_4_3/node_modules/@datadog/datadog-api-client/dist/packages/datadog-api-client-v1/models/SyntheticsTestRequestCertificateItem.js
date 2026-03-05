"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestRequestCertificateItem = void 0;
/**
 * Define a request certificate.
 */
class SyntheticsTestRequestCertificateItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestRequestCertificateItem.attributeTypeMap;
    }
}
exports.SyntheticsTestRequestCertificateItem = SyntheticsTestRequestCertificateItem;
/**
 * @ignore
 */
SyntheticsTestRequestCertificateItem.attributeTypeMap = {
    content: {
        baseName: "content",
        type: "string",
    },
    filename: {
        baseName: "filename",
        type: "string",
    },
    updatedAt: {
        baseName: "updatedAt",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestRequestCertificateItem.js.map