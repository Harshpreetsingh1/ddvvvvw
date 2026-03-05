"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigAttributes = void 0;
/**
 * Attributes for An AWS CUR config.
 */
class AwsCURConfigAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigAttributes.attributeTypeMap;
    }
}
exports.AwsCURConfigAttributes = AwsCURConfigAttributes;
/**
 * @ignore
 */
AwsCURConfigAttributes.attributeTypeMap = {
    accountFilters: {
        baseName: "account_filters",
        type: "AccountFilteringConfig",
    },
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    bucketName: {
        baseName: "bucket_name",
        type: "string",
        required: true,
    },
    bucketRegion: {
        baseName: "bucket_region",
        type: "string",
        required: true,
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    errorMessages: {
        baseName: "error_messages",
        type: "Array<string>",
    },
    months: {
        baseName: "months",
        type: "number",
        format: "int32",
    },
    reportName: {
        baseName: "report_name",
        type: "string",
        required: true,
    },
    reportPrefix: {
        baseName: "report_prefix",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "string",
        required: true,
    },
    statusUpdatedAt: {
        baseName: "status_updated_at",
        type: "string",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigAttributes.js.map