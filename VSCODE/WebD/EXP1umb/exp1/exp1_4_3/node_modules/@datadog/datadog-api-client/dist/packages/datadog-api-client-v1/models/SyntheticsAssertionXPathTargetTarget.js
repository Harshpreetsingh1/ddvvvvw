"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionXPathTargetTarget = void 0;
/**
 * Composed target for `validatesXPath` operator.
 */
class SyntheticsAssertionXPathTargetTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionXPathTargetTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionXPathTargetTarget = SyntheticsAssertionXPathTargetTarget;
/**
 * @ignore
 */
SyntheticsAssertionXPathTargetTarget.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "string",
    },
    targetValue: {
        baseName: "targetValue",
        type: "SyntheticsAssertionTargetValue",
    },
    xPath: {
        baseName: "xPath",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionXPathTargetTarget.js.map