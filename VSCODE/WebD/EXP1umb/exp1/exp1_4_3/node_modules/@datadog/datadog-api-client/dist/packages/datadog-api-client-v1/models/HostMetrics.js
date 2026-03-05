"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMetrics = void 0;
/**
 * Host Metrics collected.
 */
class HostMetrics {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMetrics.attributeTypeMap;
    }
}
exports.HostMetrics = HostMetrics;
/**
 * @ignore
 */
HostMetrics.attributeTypeMap = {
    cpu: {
        baseName: "cpu",
        type: "number",
        format: "double",
    },
    iowait: {
        baseName: "iowait",
        type: "number",
        format: "double",
    },
    load: {
        baseName: "load",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMetrics.js.map