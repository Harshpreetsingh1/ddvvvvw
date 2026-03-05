"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestConfig = void 0;
/**
 * Configuration object for a Synthetic test.
 */
class SyntheticsTestConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestConfig.attributeTypeMap;
    }
}
exports.SyntheticsTestConfig = SyntheticsTestConfig;
/**
 * @ignore
 */
SyntheticsTestConfig.attributeTypeMap = {
    assertions: {
        baseName: "assertions",
        type: "Array<SyntheticsAssertion>",
    },
    configVariables: {
        baseName: "configVariables",
        type: "Array<SyntheticsConfigVariable>",
    },
    request: {
        baseName: "request",
        type: "SyntheticsTestRequest",
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
//# sourceMappingURL=SyntheticsTestConfig.js.map