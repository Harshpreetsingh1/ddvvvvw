"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsConfigVariable = void 0;
/**
 * Object defining a variable that can be used in your test configuration.
 */
class SyntheticsConfigVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsConfigVariable.attributeTypeMap;
    }
}
exports.SyntheticsConfigVariable = SyntheticsConfigVariable;
/**
 * @ignore
 */
SyntheticsConfigVariable.attributeTypeMap = {
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
        type: "SyntheticsConfigVariableType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsConfigVariable.js.map