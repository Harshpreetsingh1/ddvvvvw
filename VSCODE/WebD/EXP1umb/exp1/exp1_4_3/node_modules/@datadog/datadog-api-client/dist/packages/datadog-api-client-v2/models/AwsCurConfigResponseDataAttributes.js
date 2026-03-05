"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCurConfigResponseDataAttributes = void 0;
/**
 * The definition of `AwsCurConfigResponseDataAttributes` object.
 */
class AwsCurConfigResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsCurConfigResponseDataAttributes.attributeTypeMap;
    }
}
exports.AwsCurConfigResponseDataAttributes = AwsCurConfigResponseDataAttributes;
/**
 * @ignore
 */
AwsCurConfigResponseDataAttributes.attributeTypeMap = {
    accountFilters: {
        baseName: "account_filters",
        type: "AwsCurConfigResponseDataAttributesAccountFilters",
    },
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    bucketName: {
        baseName: "bucket_name",
        type: "string",
    },
    bucketRegion: {
        baseName: "bucket_region",
        type: "string",
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
        format: "int64",
    },
    reportName: {
        baseName: "report_name",
        type: "string",
    },
    reportPrefix: {
        baseName: "report_prefix",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
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
//# sourceMappingURL=AwsCurConfigResponseDataAttributes.js.map