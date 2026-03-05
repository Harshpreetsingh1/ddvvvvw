"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTiming = void 0;
/**
 * Object containing all metrics and their values collected for a Synthetic API test.
 * See the [Synthetic Monitoring Metrics documentation](https://docs.datadoghq.com/synthetics/metrics/).
 */
class SyntheticsTiming {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTiming.attributeTypeMap;
    }
}
exports.SyntheticsTiming = SyntheticsTiming;
/**
 * @ignore
 */
SyntheticsTiming.attributeTypeMap = {
    dns: {
        baseName: "dns",
        type: "number",
        format: "double",
    },
    download: {
        baseName: "download",
        type: "number",
        format: "double",
    },
    firstByte: {
        baseName: "firstByte",
        type: "number",
        format: "double",
    },
    handshake: {
        baseName: "handshake",
        type: "number",
        format: "double",
    },
    redirect: {
        baseName: "redirect",
        type: "number",
        format: "double",
    },
    ssl: {
        baseName: "ssl",
        type: "number",
        format: "double",
    },
    tcp: {
        baseName: "tcp",
        type: "number",
        format: "double",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "double",
    },
    wait: {
        baseName: "wait",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTiming.js.map