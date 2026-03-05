"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApmStatsQueryColumnType = void 0;
/**
 * Column properties.
 */
class ApmStatsQueryColumnType {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApmStatsQueryColumnType.attributeTypeMap;
    }
}
exports.ApmStatsQueryColumnType = ApmStatsQueryColumnType;
/**
 * @ignore
 */
ApmStatsQueryColumnType.attributeTypeMap = {
    alias: {
        baseName: "alias",
        type: "string",
    },
    cellDisplayMode: {
        baseName: "cell_display_mode",
        type: "TableWidgetCellDisplayMode",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    order: {
        baseName: "order",
        type: "WidgetSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApmStatsQueryColumnType.js.map