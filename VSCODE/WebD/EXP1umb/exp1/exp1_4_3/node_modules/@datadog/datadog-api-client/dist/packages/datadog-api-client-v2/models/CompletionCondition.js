"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionCondition = void 0;
/**
 * The definition of `CompletionCondition` object.
 */
class CompletionCondition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CompletionCondition.attributeTypeMap;
    }
}
exports.CompletionCondition = CompletionCondition;
/**
 * @ignore
 */
CompletionCondition.attributeTypeMap = {
    operand1: {
        baseName: "operand1",
        type: "any",
        required: true,
    },
    operand2: {
        baseName: "operand2",
        type: "any",
    },
    operator: {
        baseName: "operator",
        type: "CompletionConditionOperator",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CompletionCondition.js.map