"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserVariable = void 0;
/**
 * Object defining a variable that can be used in your browser test.
 * See the [Recording Steps documentation](https://docs.datadoghq.com/synthetics/browser_tests/actions/?tab=testanelementontheactivepage#variables).
 */
class SyntheticsBrowserVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserVariable.attributeTypeMap;
    }
}
exports.SyntheticsBrowserVariable = SyntheticsBrowserVariable;
/**
 * @ignore
 */
SyntheticsBrowserVariable.attributeTypeMap = {
    example: {
        baseName: "example",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    pattern: {
        baseName: "pattern",
        type: "string",
    },
    secure: {
        baseName: "secure",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "SyntheticsBrowserVariableType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserVariable.js.map