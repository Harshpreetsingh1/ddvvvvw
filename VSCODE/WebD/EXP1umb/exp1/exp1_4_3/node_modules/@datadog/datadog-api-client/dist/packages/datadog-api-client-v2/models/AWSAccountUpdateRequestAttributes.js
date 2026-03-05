"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountUpdateRequestAttributes = void 0;
/**
 * The AWS Account Integration Config to be updated.
 */
class AWSAccountUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.AWSAccountUpdateRequestAttributes = AWSAccountUpdateRequestAttributes;
/**
 * @ignore
 */
AWSAccountUpdateRequestAttributes.attributeTypeMap = {
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
//# sourceMappingURL=AWSAccountUpdateRequestAttributes.js.map