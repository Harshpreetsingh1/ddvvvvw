/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAccountPartition } from "./AWSAccountPartition";
import { AWSAuthConfig } from "./AWSAuthConfig";
import { AWSLogsConfig } from "./AWSLogsConfig";
import { AWSMetricsConfig } from "./AWSMetricsConfig";
import { AWSRegions } from "./AWSRegions";
import { AWSResourcesConfig } from "./AWSResourcesConfig";
import { AWSTracesConfig } from "./AWSTracesConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * AWS Account response attributes.
 */
export declare class AWSAccountResponseAttributes {
    /**
     * Tags to apply to all hosts and metrics reporting for this account. Defaults to `[]`.
     */
    "accountTags"?: Array<string>;
    /**
     * AWS Authentication config.
     */
    "authConfig"?: AWSAuthConfig;
    /**
     * AWS Account ID.
     */
    "awsAccountId": string;
    /**
     * AWS partition your AWS account is scoped to. Defaults to `aws`.
     * See [Partitions](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/partitions.html)
     * in the AWS documentation for more information.
     */
    "awsPartition"?: AWSAccountPartition;
    /**
     * AWS Regions to collect data from. Defaults to `include_all`.
     */
    "awsRegions"?: AWSRegions;
    /**
     * Timestamp of when the account integration was created.
     */
    "createdAt"?: Date;
    /**
     * AWS Logs Collection config.
     */
    "logsConfig"?: AWSLogsConfig;
    /**
     * AWS Metrics Collection config.
     */
    "metricsConfig"?: AWSMetricsConfig;
    /**
     * Timestamp of when the account integration was updated.
     */
    "modifiedAt"?: Date;
    /**
     * AWS Resources Collection config.
     */
    "resourcesConfig"?: AWSResourcesConfig;
    /**
     * AWS Traces Collection config.
     */
    "tracesConfig"?: AWSTracesConfig;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
