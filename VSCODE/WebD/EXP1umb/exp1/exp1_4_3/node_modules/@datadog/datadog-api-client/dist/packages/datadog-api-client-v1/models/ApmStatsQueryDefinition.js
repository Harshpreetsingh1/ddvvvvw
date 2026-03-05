"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApmStatsQueryDefinition = void 0;
/**
 * The APM stats query for table and distributions widgets.
 */
class ApmStatsQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApmStatsQueryDefinition.attributeTypeMap;
    }
}
exports.ApmStatsQueryDefinition = ApmStatsQueryDefinition;
/**
 * @ignore
 */
ApmStatsQueryDefinition.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<ApmStatsQueryColumnType>",
    },
    env: {
        baseName: "env",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    primaryTag: {
        baseName: "primary_tag",
        type: "string",
        required: true,
    },
    resource: {
        baseName: "resource",
        type: "string",
    },
    rowType: {
        baseName: "row_type",
        type: "ApmStatsQueryRowType",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApmStatsQueryDefinition.js.map