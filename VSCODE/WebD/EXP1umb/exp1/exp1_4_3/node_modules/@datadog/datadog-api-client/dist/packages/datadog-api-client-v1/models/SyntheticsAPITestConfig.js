"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestConfig = void 0;
/**
 * Configuration object for a Synthetic API test.
 */
class SyntheticsAPITestConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestConfig.attributeTypeMap;
    }
}
exports.SyntheticsAPITestConfig = SyntheticsAPITestConfig;
/**
 * @ignore
 */
SyntheticsAPITestConfig.attributeTypeMap = {
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
    steps: {
        baseName: "steps",
        type: "Array<SyntheticsAPIStep>",
    },
    variablesFromScript: {
        baseName: "variablesFromScript",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPITestConfig.js.map