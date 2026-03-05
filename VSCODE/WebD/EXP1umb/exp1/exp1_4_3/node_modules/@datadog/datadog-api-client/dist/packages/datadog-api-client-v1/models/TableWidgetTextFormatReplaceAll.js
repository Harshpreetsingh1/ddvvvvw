"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWidgetTextFormatReplaceAll = void 0;
/**
 * Match All definition.
 */
class TableWidgetTextFormatReplaceAll {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableWidgetTextFormatReplaceAll.attributeTypeMap;
    }
}
exports.TableWidgetTextFormatReplaceAll = TableWidgetTextFormatReplaceAll;
/**
 * @ignore
 */
TableWidgetTextFormatReplaceAll.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "TableWidgetTextFormatReplaceAllType",
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
//# sourceMappingURL=TableWidgetTextFormatReplaceAll.js.map