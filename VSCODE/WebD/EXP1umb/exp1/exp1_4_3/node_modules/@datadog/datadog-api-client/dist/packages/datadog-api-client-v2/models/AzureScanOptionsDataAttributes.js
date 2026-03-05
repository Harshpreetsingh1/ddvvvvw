"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureScanOptionsDataAttributes = void 0;
/**
 * Attributes for Azure scan options configuration.
 */
class AzureScanOptionsDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AzureScanOptionsDataAttributes.attributeTypeMap;
    }
}
exports.AzureScanOptionsDataAttributes = AzureScanOptionsDataAttributes;
/**
 * @ignore
 */
AzureScanOptionsDataAttributes.attributeTypeMap = {
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
//# sourceMappingURL=AzureScanOptionsDataAttributes.js.map