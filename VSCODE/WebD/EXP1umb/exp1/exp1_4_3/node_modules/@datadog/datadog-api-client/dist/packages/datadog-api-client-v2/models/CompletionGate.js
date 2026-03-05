"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionGate = void 0;
/**
 * Used to create conditions before running subsequent actions.
 */
class CompletionGate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CompletionGate.attributeTypeMap;
    }
}
exports.CompletionGate = CompletionGate;
/**
 * @ignore
 */
CompletionGate.attributeTypeMap = {
    completionCondition: {
        baseName: "completionCondition",
        type: "CompletionCondition",
        required: true,
    },
    retryStrategy: {
        baseName: "retryStrategy",
        type: "RetryStrategy",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CompletionGate.js.map