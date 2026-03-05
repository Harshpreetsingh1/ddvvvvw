"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesBackground = void 0;
/**
 * Set a timeseries on the widget background.
 */
class TimeseriesBackground {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesBackground.attributeTypeMap;
    }
}
exports.TimeseriesBackground = TimeseriesBackground;
/**
 * @ignore
 */
TimeseriesBackground.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "TimeseriesBackgroundType",
        required: true,
    },
    yaxis: {
        baseName: "yaxis",
        type: "WidgetAxis",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesBackground.js.map