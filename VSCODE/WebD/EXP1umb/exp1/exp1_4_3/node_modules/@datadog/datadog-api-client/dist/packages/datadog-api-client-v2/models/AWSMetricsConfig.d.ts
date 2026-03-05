/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSNamespaceFilters } from "./AWSNamespaceFilters";
import { AWSNamespaceTagFilter } from "./AWSNamespaceTagFilter";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * AWS Metrics Collection config.
 */
export declare class AWSMetricsConfig {
    /**
     * Enable EC2 automute for AWS metrics. Defaults to `true`.
     */
    "automuteEnabled"?: boolean;
    /**
     * Enable CloudWatch alarms collection. Defaults to `false`.
     */
    "collectCloudwatchAlarms"?: boolean;
    /**
     * Enable custom metrics collection. Defaults to `false`.
     */
    "collectCustomMetrics"?: boolean;
    /**
     * Enable AWS metrics collection. Defaults to `true`.
     */
    "enabled"?: boolean;
    /**
     * AWS Metrics namespace filters. Defaults to `exclude_only`.
     */
    "namespaceFilters"?: AWSNamespaceFilters;
    /**
     * AWS Metrics collection tag filters list. Defaults to `[]`.
     */
    "tagFilters"?: Array<AWSNamespaceTagFilter>;
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
