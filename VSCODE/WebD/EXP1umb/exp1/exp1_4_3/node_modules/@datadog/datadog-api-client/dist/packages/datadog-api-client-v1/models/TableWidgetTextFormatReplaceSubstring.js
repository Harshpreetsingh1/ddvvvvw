"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWidgetTextFormatReplaceSubstring = void 0;
/**
 * Match Sub-string definition.
 */
class TableWidgetTextFormatReplaceSubstring {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableWidgetTextFormatReplaceSubstring.attributeTypeMap;
    }
}
exports.TableWidgetTextFormatReplaceSubstring = TableWidgetTextFormatReplaceSubstring;
/**
 * @ignore
 */
TableWidgetTextFormatReplaceSubstring.attributeTypeMap = {
    substring: {
        baseName: "substring",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TableWidgetTextFormatReplaceSubstringType",
        required: true,
    },
    _with: {
        baseName: "with",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableWidgetTextFormatReplaceSubstring.js.map