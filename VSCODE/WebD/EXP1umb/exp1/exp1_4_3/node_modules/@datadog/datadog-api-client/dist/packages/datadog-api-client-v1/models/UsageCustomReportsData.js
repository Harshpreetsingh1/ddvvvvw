"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCustomReportsData = void 0;
/**
 * The response containing the date and type for custom reports.
 */
class UsageCustomReportsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageCustomReportsData.attributeTypeMap;
    }
}
exports.UsageCustomReportsData = UsageCustomReportsData;
/**
 * @ignore
 */
UsageCustomReportsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UsageCustomReportsAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UsageReportsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageCustomReportsData.js.map