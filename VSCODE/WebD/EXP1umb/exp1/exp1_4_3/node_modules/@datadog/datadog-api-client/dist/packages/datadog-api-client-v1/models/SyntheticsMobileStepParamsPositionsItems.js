"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStepParamsPositionsItems = void 0;
/**
 * A description of a single position for a `flick` step type.
 */
class SyntheticsMobileStepParamsPositionsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStepParamsPositionsItems.attributeTypeMap;
    }
}
exports.SyntheticsMobileStepParamsPositionsItems = SyntheticsMobileStepParamsPositionsItems;
/**
 * @ignore
 */
SyntheticsMobileStepParamsPositionsItems.attributeTypeMap = {
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
//# sourceMappingURL=SyntheticsMobileStepParamsPositionsItems.js.map