"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountCreateRequestAttributes = void 0;
/**
 * The AWS Account Integration Config to be created.
 */
class AWSAccountCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountCreateRequestAttributes.attributeTypeMap;
    }
}
exports.AWSAccountCreateRequestAttributes = AWSAccountCreateRequestAttributes;
/**
 * @ignore
 */
AWSAccountCreateRequestAttributes.attributeTypeMap = {
    accountTags: {
        baseName: "account_tags",
        type: "Array<string>",
    },
    authConfig: {
        baseName: "auth_config",
        type: "AWSAuthConfig",
        required: true,
    },
    awsAccountId: {
        baseName: "aws_account_id",
        type: "string",
        required: true,
    },
    awsPartition: {
        baseName: "aws_partition",
        type: "AWSAccountPartition",
        required: true,
    },
    awsRegions: {
        baseName: "aws_regions",
        type: "AWSRegions",
    },
    logsConfig: {
        baseName: "logs_config",
        type: "AWSLogsConfig",
    },
    metricsConfig: {
        baseName: "metrics_config",
        type: "AWSMetricsConfig",
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
//# sourceMappingURL=AWSAccountCreateRequestAttributes.js.map