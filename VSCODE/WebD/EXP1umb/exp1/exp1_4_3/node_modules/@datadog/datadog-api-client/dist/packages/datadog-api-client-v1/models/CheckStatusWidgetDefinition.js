"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckStatusWidgetDefinition = void 0;
/**
 * Check status shows the current status or number of results for any check performed.
 */
class CheckStatusWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CheckStatusWidgetDefinition.attributeTypeMap;
    }
}
exports.CheckStatusWidgetDefinition = CheckStatusWidgetDefinition;
/**
 * @ignore
 */
CheckStatusWidgetDefinition.attributeTypeMap = {
    check: {
        baseName: "check",
        type: "string",
        required: true,
    },
    group: {
        baseName: "group",
        type: "string",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    grouping: {
        baseName: "grouping",
        type: "WidgetGrouping",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    titleAlign: {
        baseName: "title_align",
        type: "WidgetTextAlign",
    },
    titleSize: {
        baseName: "title_size",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CheckStatusWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CheckStatusWidgetDefinition.js.map