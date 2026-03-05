"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsListTestsResponse = void 0;
/**
 * Object containing an array of Synthetic tests configuration.
 */
class SyntheticsListTestsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsListTestsResponse.attributeTypeMap;
    }
}
exports.SyntheticsListTestsResponse = SyntheticsListTestsResponse;
/**
 * @ignore
 */
SyntheticsListTestsResponse.attributeTypeMap = {
    tests: {
        baseName: "tests",
        type: "Array<SyntheticsTestDetailsWithoutSteps>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsListTestsResponse.js.map