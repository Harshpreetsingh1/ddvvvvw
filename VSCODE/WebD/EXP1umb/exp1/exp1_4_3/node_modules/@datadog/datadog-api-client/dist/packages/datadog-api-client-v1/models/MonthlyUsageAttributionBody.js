"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyUsageAttributionBody = void 0;
/**
 * Usage Summary by tag for a given organization.
 */
class MonthlyUsageAttributionBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyUsageAttributionBody.attributeTypeMap;
    }
}
exports.MonthlyUsageAttributionBody = MonthlyUsageAttributionBody;
/**
 * @ignore
 */
MonthlyUsageAttributionBody.attributeTypeMap = {
    month: {
        baseName: "month",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    tagConfigSource: {
        baseName: "tag_config_source",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "{ [key: string]: Array<string>; }",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        format: "date-time",
    },
    values: {
        baseName: "values",
        type: "MonthlyUsageAttributionValues",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyUsageAttributionBody.js.map