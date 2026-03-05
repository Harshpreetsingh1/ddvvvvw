"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsScanOptionsAttributes = void 0;
/**
 * Attributes for the AWS scan options.
 */
class AwsScanOptionsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsScanOptionsAttributes.attributeTypeMap;
    }
}
exports.AwsScanOptionsAttributes = AwsScanOptionsAttributes;
/**
 * @ignore
 */
AwsScanOptionsAttributes.attributeTypeMap = {
    lambda: {
        baseName: "lambda",
        type: "boolean",
    },
    sensitiveData: {
        baseName: "sensitive_data",
        type: "boolean",
    },
    vulnContainersOs: {
        baseName: "vuln_containers_os",
        type: "boolean",
    },
    vulnHostOs: {
        baseName: "vuln_host_os",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsScanOptionsAttributes.js.map