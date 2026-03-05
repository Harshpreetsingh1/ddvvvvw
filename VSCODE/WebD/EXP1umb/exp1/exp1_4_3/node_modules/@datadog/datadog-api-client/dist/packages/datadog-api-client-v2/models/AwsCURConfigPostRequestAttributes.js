"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCURConfigPostRequestAttributes = void 0;
/**
 * Attributes for AWS CUR config Post Request.
 */
class AwsCURConfigPostRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCURConfigPostRequestAttributes.attributeTypeMap;
    }
}
exports.AwsCURConfigPostRequestAttributes = AwsCURConfigPostRequestAttributes;
/**
 * @ignore
 */
AwsCURConfigPostRequestAttributes.attributeTypeMap = {
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsCURConfigPostRequestAttributes.js.map