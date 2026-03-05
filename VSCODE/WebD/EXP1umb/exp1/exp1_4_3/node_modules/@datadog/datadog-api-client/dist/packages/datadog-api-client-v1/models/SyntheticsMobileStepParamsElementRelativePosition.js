"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStepParamsElementRelativePosition = void 0;
/**
 * Position of the action relative to the element.
 */
class SyntheticsMobileStepParamsElementRelativePosition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStepParamsElementRelativePosition.attributeTypeMap;
    }
}
exports.SyntheticsMobileStepParamsElementRelativePosition = SyntheticsMobileStepParamsElementRelativePosition;
/**
 * @ignore
 */
SyntheticsMobileStepParamsElementRelativePosition.attributeTypeMap = {
    x: {
        baseName: "x",
        type: "number",
        format: "double",
    },
    y: {
        baseName: "y",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileStepParamsElementRelativePosition.js.map