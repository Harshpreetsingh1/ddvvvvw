"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsGlobalVariableParseTestOptions = void 0;
/**
 * Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with `parse_test_public_id`.
 */
class SyntheticsGlobalVariableParseTestOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsGlobalVariableParseTestOptions.attributeTypeMap;
    }
}
exports.SyntheticsGlobalVariableParseTestOptions = SyntheticsGlobalVariableParseTestOptions;
/**
 * @ignore
 */
SyntheticsGlobalVariableParseTestOptions.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
    },
    localVariableName: {
        baseName: "localVariableName",
        type: "string",
    },
    parser: {
        baseName: "parser",
        type: "SyntheticsVariableParser",
    },
    type: {
        baseName: "type",
        type: "SyntheticsGlobalVariableParseTestOptionsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsGlobalVariableParseTestOptions.js.map