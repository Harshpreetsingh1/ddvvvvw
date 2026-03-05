"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStepParamsVariable = void 0;
/**
 * Variable object for `extractVariable` step type.
 */
class SyntheticsMobileStepParamsVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStepParamsVariable.attributeTypeMap;
    }
}
exports.SyntheticsMobileStepParamsVariable = SyntheticsMobileStepParamsVariable;
/**
 * @ignore
 */
SyntheticsMobileStepParamsVariable.attributeTypeMap = {
    example: {
        baseName: "example",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileStepParamsVariable.js.map