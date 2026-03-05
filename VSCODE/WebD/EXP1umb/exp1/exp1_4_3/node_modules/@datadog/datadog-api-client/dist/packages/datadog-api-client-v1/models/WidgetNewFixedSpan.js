"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetNewFixedSpan = void 0;
/**
 * Used for fixed span times, such as 'March 1 to March 7'.
 */
class WidgetNewFixedSpan {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetNewFixedSpan.attributeTypeMap;
    }
}
exports.WidgetNewFixedSpan = WidgetNewFixedSpan;
/**
 * @ignore
 */
WidgetNewFixedSpan.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    hideIncompleteCostData: {
        baseName: "hide_incomplete_cost_data",
        type: "boolean",
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "WidgetNewFixedSpanType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetNewFixedSpan.js.map