"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsQueryUnit = void 0;
/**
 * Object containing the metric unit family, scale factor, name, and short name.
 */
class MetricsQueryUnit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsQueryUnit.attributeTypeMap;
    }
}
exports.MetricsQueryUnit = MetricsQueryUnit;
/**
 * @ignore
 */
MetricsQueryUnit.attributeTypeMap = {
    family: {
        baseName: "family",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    plural: {
        baseName: "plural",
        type: "string",
    },
    scaleFactor: {
        baseName: "scale_factor",
        type: "number",
        format: "double",
    },
    shortName: {
        baseName: "short_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsQueryUnit.js.map