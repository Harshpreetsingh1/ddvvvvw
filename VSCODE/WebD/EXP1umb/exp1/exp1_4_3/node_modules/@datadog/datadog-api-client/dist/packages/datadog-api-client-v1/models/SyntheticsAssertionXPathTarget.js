"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionXPathTarget = void 0;
/**
 * An assertion for the `validatesXPath` operator.
 */
class SyntheticsAssertionXPathTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionXPathTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionXPathTarget = SyntheticsAssertionXPathTarget;
/**
 * @ignore
 */
SyntheticsAssertionXPathTarget.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsAssertionXPathOperator",
        required: true,
    },
    property: {
        baseName: "property",
        type: "string",
    },
    target: {
        baseName: "target",
        type: "SyntheticsAssertionXPathTargetTarget",
    },
    type: {
        baseName: "type",
        type: "SyntheticsAssertionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionXPathTarget.js.map