"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCustomReportsMeta = void 0;
/**
 * The object containing document metadata.
 */
class UsageCustomReportsMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCustomReportsMeta.attributeTypeMap;
    }
}
exports.UsageCustomReportsMeta = UsageCustomReportsMeta;
/**
 * @ignore
 */
UsageCustomReportsMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "UsageCustomReportsPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCustomReportsMeta.js.map