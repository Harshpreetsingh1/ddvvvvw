"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGlobalVariableValue = void 0;
/**
 * Value of the global variable.
 */
class SyntheticsGlobalVariableValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGlobalVariableValue.attributeTypeMap;
    }
}
exports.SyntheticsGlobalVariableValue = SyntheticsGlobalVariableValue;
/**
 * @ignore
 */
SyntheticsGlobalVariableValue.attributeTypeMap = {
    options: {
        baseName: "options",
        type: "SyntheticsGlobalVariableOptions",
    },
    secure: {
        baseName: "secure",
        type: "boolean",
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGlobalVariableValue.js.map