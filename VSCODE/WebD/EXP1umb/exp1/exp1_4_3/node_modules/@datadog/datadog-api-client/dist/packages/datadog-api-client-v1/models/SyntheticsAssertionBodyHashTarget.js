"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionBodyHashTarget = void 0;
/**
 * An assertion which targets body hash.
 */
class SyntheticsAssertionBodyHashTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionBodyHashTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionBodyHashTarget = SyntheticsAssertionBodyHashTarget;
/**
 * @ignore
 */
SyntheticsAssertionBodyHashTarget.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsAssertionBodyHashOperator",
        required: true,
    },
    target: {
        baseName: "target",
        type: "SyntheticsAssertionTargetValue",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsAssertionBodyHashType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionBodyHashTarget.js.map