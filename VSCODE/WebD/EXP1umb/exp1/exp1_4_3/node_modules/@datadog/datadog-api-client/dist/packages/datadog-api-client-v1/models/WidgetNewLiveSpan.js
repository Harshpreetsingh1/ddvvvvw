"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetNewLiveSpan = void 0;
/**
 * Used for arbitrary live span times, such as 17 minutes or 6 hours.
 */
class WidgetNewLiveSpan {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetNewLiveSpan.attributeTypeMap;
    }
}
exports.WidgetNewLiveSpan = WidgetNewLiveSpan;
/**
 * @ignore
 */
WidgetNewLiveSpan.attributeTypeMap = {
    hideIncompleteCostData: {
        baseName: "hide_incomplete_cost_data",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "WidgetNewLiveSpanType",
        required: true,
    },
    unit: {
        baseName: "unit",
        type: "WidgetLiveSpanUnit",
        required: true,
    },
    value: {
        baseName: "value",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetNewLiveSpan.js.map