"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountResponseAttributes = void 0;
/**
 * AWS Account response attributes.
 */
class AWSAccountResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountResponseAttributes.attributeTypeMap;
    }
}
exports.AWSAccountResponseAttributes = AWSAccountResponseAttributes;
/**
 * @ignore
 */
AWSAccountResponseAttributes.attributeTypeMap = {
    accountTags: {
        baseName: "account_tags",
        type: "Array<string>",
    },
    authConfig: {
        baseName: "auth_config",
        type: "AWSAuthConfig",
    },
    awsAccountId: {
        baseName: "aws_account_id",
        type: "string",
        required: true,
    },
    awsPartition: {
        baseName: "aws_partition",
        type: "AWSAccountPartition",
    },
    awsRegions: {
        baseName: "aws_regions",
        type: "AWSRegions",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    logsConfig: {
        baseName: "logs_config",
        type: "AWSLogsConfig",
    },
    metricsConfig: {
        baseName: "metrics_config",
        type: "AWSMetricsConfig",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    resourcesConfig: {
        baseName: "resources_config",
        type: "AWSResourcesConfig",
    },
    tracesConfig: {
        baseName: "traces_config",
        type: "AWSTracesConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountResponseAttributes.js.map