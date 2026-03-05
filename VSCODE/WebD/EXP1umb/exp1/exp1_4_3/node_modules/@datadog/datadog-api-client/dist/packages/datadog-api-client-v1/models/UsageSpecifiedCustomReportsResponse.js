"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSpecifiedCustomReportsResponse = void 0;
/**
 * Returns available specified custom reports.
 */
class UsageSpecifiedCustomReportsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSpecifiedCustomReportsResponse.attributeTypeMap;
    }
}
exports.UsageSpecifiedCustomReportsResponse = UsageSpecifiedCustomReportsResponse;
/**
 * @ignore
 */
UsageSpecifiedCustomReportsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UsageSpecifiedCustomReportsData",
    },
    meta: {
        baseName: "meta",
        type: "UsageSpecifiedCustomReportsMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageSpecifiedCustomReportsResponse.js.map