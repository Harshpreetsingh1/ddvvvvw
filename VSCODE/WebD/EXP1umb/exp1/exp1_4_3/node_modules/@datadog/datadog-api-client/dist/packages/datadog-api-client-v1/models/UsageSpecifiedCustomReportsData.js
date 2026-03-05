"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSpecifiedCustomReportsData = void 0;
/**
 * Response containing date and type for specified custom reports.
 */
class UsageSpecifiedCustomReportsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageSpecifiedCustomReportsData.attributeTypeMap;
    }
}
exports.UsageSpecifiedCustomReportsData = UsageSpecifiedCustomReportsData;
/**
 * @ignore
 */
UsageSpecifiedCustomReportsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UsageSpecifiedCustomReportsAttributes",
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
//# sourceMappingURL=UsageSpecifiedCustomReportsData.js.map