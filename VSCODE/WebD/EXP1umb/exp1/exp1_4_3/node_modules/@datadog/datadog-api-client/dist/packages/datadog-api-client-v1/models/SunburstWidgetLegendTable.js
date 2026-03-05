"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunburstWidgetLegendTable = void 0;
/**
 * Configuration of table-based legend.
 */
class SunburstWidgetLegendTable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SunburstWidgetLegendTable.attributeTypeMap;
    }
}
exports.SunburstWidgetLegendTable = SunburstWidgetLegendTable;
/**
 * @ignore
 */
SunburstWidgetLegendTable.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "SunburstWidgetLegendTableType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SunburstWidgetLegendTable.js.map