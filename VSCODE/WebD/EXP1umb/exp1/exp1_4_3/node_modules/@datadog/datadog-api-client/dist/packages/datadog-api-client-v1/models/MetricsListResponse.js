"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsListResponse = void 0;
/**
 * Object listing all metric names stored by Datadog since a given time.
 */
class MetricsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsListResponse.attributeTypeMap;
    }
}
exports.MetricsListResponse = MetricsListResponse;
/**
 * @ignore
 */
MetricsListResponse.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "string",
    },
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsListResponse.js.map