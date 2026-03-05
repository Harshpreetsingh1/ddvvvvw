"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionTarget = void 0;
/**
 * An assertion which uses a simple target.
 */
class SyntheticsAssertionTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionTarget = SyntheticsAssertionTarget;
/**
 * @ignore
 */
SyntheticsAssertionTarget.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsAssertionOperator",
        required: true,
    },
    property: {
        baseName: "property",
        type: "string",
    },
    target: {
        baseName: "target",
        type: "SyntheticsAssertionTargetValue",
        required: true,
    },
    timingsScope: {
        baseName: "timingsScope",
        type: "SyntheticsAssertionTimingsScope",
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
//# sourceMappingURL=SyntheticsAssertionTarget.js.map