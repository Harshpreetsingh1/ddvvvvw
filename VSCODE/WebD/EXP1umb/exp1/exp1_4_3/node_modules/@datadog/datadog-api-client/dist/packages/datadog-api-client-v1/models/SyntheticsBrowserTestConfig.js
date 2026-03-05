"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestConfig = void 0;
/**
 * Configuration object for a Synthetic browser test.
 */
class SyntheticsBrowserTestConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestConfig.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestConfig = SyntheticsBrowserTestConfig;
/**
 * @ignore
 */
SyntheticsBrowserTestConfig.attributeTypeMap = {
    assertions: {
        baseName: "assertions",
        type: "Array<SyntheticsAssertion>",
        required: true,
    },
    configVariables: {
        baseName: "configVariables",
        type: "Array<SyntheticsConfigVariable>",
    },
    request: {
        baseName: "request",
        type: "SyntheticsTestRequest",
        required: true,
    },
    setCookie: {
        baseName: "setCookie",
        type: "string",
    },
    variables: {
        baseName: "variables",
        type: "Array<SyntheticsBrowserVariable>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestConfig.js.map