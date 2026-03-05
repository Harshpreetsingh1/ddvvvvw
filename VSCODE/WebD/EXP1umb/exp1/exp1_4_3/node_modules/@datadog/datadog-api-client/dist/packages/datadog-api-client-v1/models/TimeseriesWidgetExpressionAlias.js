"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesWidgetExpressionAlias = void 0;
/**
 * Define an expression alias.
 */
class TimeseriesWidgetExpressionAlias {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesWidgetExpressionAlias.attributeTypeMap;
    }
}
exports.TimeseriesWidgetExpressionAlias = TimeseriesWidgetExpressionAlias;
/**
 * @ignore
 */
TimeseriesWidgetExpressionAlias.attributeTypeMap = {
    aliasName: {
        baseName: "alias_name",
        type: "string",
    },
    expression: {
        baseName: "expression",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesWidgetExpressionAlias.js.map