"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLORawErrorBudgetRemaining = void 0;
/**
 * Error budget remaining for an SLO.
 */
class SLORawErrorBudgetRemaining {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLORawErrorBudgetRemaining.attributeTypeMap;
    }
}
exports.SLORawErrorBudgetRemaining = SLORawErrorBudgetRemaining;
/**
 * @ignore
 */
SLORawErrorBudgetRemaining.attributeTypeMap = {
    unit: {
        baseName: "unit",
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
//# sourceMappingURL=SLORawErrorBudgetRemaining.js.map