"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsVariableParser = void 0;
/**
 * Details of the parser to use for the global variable.
 */
class SyntheticsVariableParser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsVariableParser.attributeTypeMap;
    }
}
exports.SyntheticsVariableParser = SyntheticsVariableParser;
/**
 * @ignore
 */
SyntheticsVariableParser.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "SyntheticsGlobalVariableParserType",
        required: true,
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
//# sourceMappingURL=SyntheticsVariableParser.js.map