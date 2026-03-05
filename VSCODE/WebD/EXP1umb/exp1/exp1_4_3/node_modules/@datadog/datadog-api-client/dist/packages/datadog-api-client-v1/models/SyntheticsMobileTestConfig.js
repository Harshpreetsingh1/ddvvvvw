"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileTestConfig = void 0;
/**
 * Configuration object for a Synthetic mobile test.
 */
class SyntheticsMobileTestConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileTestConfig.attributeTypeMap;
    }
}
exports.SyntheticsMobileTestConfig = SyntheticsMobileTestConfig;
/**
 * @ignore
 */
SyntheticsMobileTestConfig.attributeTypeMap = {
    initialApplicationArguments: {
        baseName: "initialApplicationArguments",
        type: "{ [key: string]: string; }",
    },
    variables: {
        baseName: "variables",
        type: "Array<SyntheticsConfigVariable>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileTestConfig.js.map