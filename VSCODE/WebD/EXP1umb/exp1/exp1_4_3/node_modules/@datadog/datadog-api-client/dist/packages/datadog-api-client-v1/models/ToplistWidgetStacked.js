"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToplistWidgetStacked = void 0;
/**
 * Top list widget stacked display options.
 */
class ToplistWidgetStacked {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ToplistWidgetStacked.attributeTypeMap;
    }
}
exports.ToplistWidgetStacked = ToplistWidgetStacked;
/**
 * @ignore
 */
ToplistWidgetStacked.attributeTypeMap = {
    legend: {
        baseName: "legend",
        type: "ToplistWidgetLegend",
    },
    type: {
        baseName: "type",
        type: "ToplistWidgetStackedType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ToplistWidgetStacked.js.map