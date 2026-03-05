"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageAttributionBody = void 0;
/**
 * The usage for one set of tags for one hour.
 */
class HourlyUsageAttributionBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageAttributionBody.attributeTypeMap;
    }
}
exports.HourlyUsageAttributionBody = HourlyUsageAttributionBody;
/**
 * @ignore
 */
HourlyUsageAttributionBody.attributeTypeMap = {
    hour: {
        baseName: "hour",
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
    totalUsageSum: {
        baseName: "total_usage_sum",
        type: "number",
        format: "double",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "string",
    },
    usageType: {
        baseName: "usage_type",
        type: "HourlyUsageAttributionUsageType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageAttributionBody.js.map