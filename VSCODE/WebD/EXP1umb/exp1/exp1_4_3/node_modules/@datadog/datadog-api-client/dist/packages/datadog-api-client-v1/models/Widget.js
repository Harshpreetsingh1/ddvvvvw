"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
/**
 * Information about widget.
 *
 * **Note**: The `layout` property is required for widgets in dashboards with `free` `layout_type`.
 *       For the **new dashboard layout**, the `layout` property depends on the `reflow_type` of the dashboard.
 *       - If `reflow_type` is `fixed`, `layout` is required.
 *       - If `reflow_type` is `auto`, `layout` should not be set.
 */
class Widget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Widget.attributeTypeMap;
    }
}
exports.Widget = Widget;
/**
 * @ignore
 */
Widget.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "WidgetDefinition",
        required: true,
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    layout: {
        baseName: "layout",
        type: "WidgetLayout",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Widget.js.map