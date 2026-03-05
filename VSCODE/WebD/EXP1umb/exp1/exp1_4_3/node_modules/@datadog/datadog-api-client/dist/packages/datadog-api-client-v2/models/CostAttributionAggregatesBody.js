"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostAttributionAggregatesBody = void 0;
/**
 * The object containing the aggregates.
 */
class CostAttributionAggregatesBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CostAttributionAggregatesBody.attributeTypeMap;
    }
}
exports.CostAttributionAggregatesBody = CostAttributionAggregatesBody;
/**
 * @ignore
 */
CostAttributionAggregatesBody.attributeTypeMap = {
    aggType: {
        baseName: "agg_type",
        type: "string",
    },
    field: {
        baseName: "field",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CostAttributionAggregatesBody.js.map