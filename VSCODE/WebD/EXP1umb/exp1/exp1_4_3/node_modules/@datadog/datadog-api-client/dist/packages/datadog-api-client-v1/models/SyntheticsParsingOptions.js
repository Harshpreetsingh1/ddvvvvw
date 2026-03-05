"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsParsingOptions = void 0;
/**
 * Parsing options for variables to extract.
 */
class SyntheticsParsingOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsParsingOptions.attributeTypeMap;
    }
}
exports.SyntheticsParsingOptions = SyntheticsParsingOptions;
/**
 * @ignore
 */
SyntheticsParsingOptions.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    parser: {
        baseName: "parser",
        type: "SyntheticsVariableParser",
    },
    secure: {
        baseName: "secure",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "SyntheticsLocalVariableParsingOptionsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsParsingOptions.js.map