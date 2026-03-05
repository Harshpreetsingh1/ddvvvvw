"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWidgetTextFormatMatch = void 0;
/**
 * Match rule for the table widget text format.
 */
class TableWidgetTextFormatMatch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableWidgetTextFormatMatch.attributeTypeMap;
    }
}
exports.TableWidgetTextFormatMatch = TableWidgetTextFormatMatch;
/**
 * @ignore
 */
TableWidgetTextFormatMatch.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "TableWidgetTextFormatMatchType",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableWidgetTextFormatMatch.js.map