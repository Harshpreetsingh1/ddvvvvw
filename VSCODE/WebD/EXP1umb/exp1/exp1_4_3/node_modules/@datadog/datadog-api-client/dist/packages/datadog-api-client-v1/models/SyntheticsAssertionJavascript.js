"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionJavascript = void 0;
/**
 * A JavaScript assertion.
 */
class SyntheticsAssertionJavascript {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionJavascript.attributeTypeMap;
    }
}
exports.SyntheticsAssertionJavascript = SyntheticsAssertionJavascript;
/**
 * @ignore
 */
SyntheticsAssertionJavascript.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsAssertionJavascriptType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionJavascript.js.map