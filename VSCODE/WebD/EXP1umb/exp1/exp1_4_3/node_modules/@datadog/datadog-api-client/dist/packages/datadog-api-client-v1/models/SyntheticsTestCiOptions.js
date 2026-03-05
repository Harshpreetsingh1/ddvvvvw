"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestCiOptions = void 0;
/**
 * CI/CD options for a Synthetic test.
 */
class SyntheticsTestCiOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestCiOptions.attributeTypeMap;
    }
}
exports.SyntheticsTestCiOptions = SyntheticsTestCiOptions;
/**
 * @ignore
 */
SyntheticsTestCiOptions.attributeTypeMap = {
    executionRule: {
        baseName: "executionRule",
        type: "SyntheticsTestExecutionRule",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestCiOptions.js.map