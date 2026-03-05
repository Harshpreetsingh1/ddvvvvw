"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStepParams = void 0;
/**
 * The parameters of a mobile step.
 */
class SyntheticsMobileStepParams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStepParams.attributeTypeMap;
    }
}
exports.SyntheticsMobileStepParams = SyntheticsMobileStepParams;
/**
 * @ignore
 */
SyntheticsMobileStepParams.attributeTypeMap = {
    check: {
        baseName: "check",
        type: "SyntheticsCheckType",
    },
    delay: {
        baseName: "delay",
        type: "number",
        format: "int64",
    },
    direction: {
        baseName: "direction",
        type: "SyntheticsMobileStepParamsDirection",
    },
    element: {
        baseName: "element",
        type: "SyntheticsMobileStepParamsElement",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    maxScrolls: {
        baseName: "maxScrolls",
        type: "number",
        format: "int64",
    },
    positions: {
        baseName: "positions",
        type: "Array<SyntheticsMobileStepParamsPositionsItems>",
    },
    subtestPublicId: {
        baseName: "subtestPublicId",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "SyntheticsMobileStepParamsValue",
    },
    variable: {
        baseName: "variable",
        type: "SyntheticsMobileStepParamsVariable",
    },
    withEnter: {
        baseName: "withEnter",
        type: "boolean",
    },
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
//# sourceMappingURL=SyntheticsMobileStepParams.js.map