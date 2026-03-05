"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCustomReportsResponse = void 0;
/**
 * Response containing available custom reports.
 */
class UsageCustomReportsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCustomReportsResponse.attributeTypeMap;
    }
}
exports.UsageCustomReportsResponse = UsageCustomReportsResponse;
/**
 * @ignore
 */
UsageCustomReportsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UsageCustomReportsData>",
    },
    meta: {
        baseName: "meta",
        type: "UsageCustomReportsMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCustomReportsResponse.js.map