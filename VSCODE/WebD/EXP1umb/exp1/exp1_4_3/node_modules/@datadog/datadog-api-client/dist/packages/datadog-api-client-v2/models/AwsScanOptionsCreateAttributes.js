"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsCreateAttributes = void 0;
/**
 * Attributes for the AWS scan options to create.
 */
class AwsScanOptionsCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsCreateAttributes.attributeTypeMap;
    }
}
exports.AwsScanOptionsCreateAttributes = AwsScanOptionsCreateAttributes;
/**
 * @ignore
 */
AwsScanOptionsCreateAttributes.attributeTypeMap = {
    lambda: {
        baseName: "lambda",
        type: "boolean",
        required: true,
    },
    sensitiveData: {
        baseName: "sensitive_data",
        type: "boolean",
        required: true,
    },
    vulnContainersOs: {
        baseName: "vuln_containers_os",
        type: "boolean",
        required: true,
    },
    vulnHostOs: {
        baseName: "vuln_host_os",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsCreateAttributes.js.map