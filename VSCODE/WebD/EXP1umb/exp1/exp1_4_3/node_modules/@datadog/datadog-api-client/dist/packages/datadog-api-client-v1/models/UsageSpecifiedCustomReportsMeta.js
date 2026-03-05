"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSpecifiedCustomReportsMeta = void 0;
/**
 * The object containing document metadata.
 */
class UsageSpecifiedCustomReportsMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSpecifiedCustomReportsMeta.attributeTypeMap;
    }
}
exports.UsageSpecifiedCustomReportsMeta = UsageSpecifiedCustomReportsMeta;
/**
 * @ignore
 */
UsageSpecifiedCustomReportsMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "UsageSpecifiedCustomReportsPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSpecifiedCustomReportsMeta.js.map