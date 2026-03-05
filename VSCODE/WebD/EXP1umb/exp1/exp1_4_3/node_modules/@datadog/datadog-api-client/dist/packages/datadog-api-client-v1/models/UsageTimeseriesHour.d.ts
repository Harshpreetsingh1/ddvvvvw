/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The hourly usage of timeseries.
 */
export declare class UsageTimeseriesHour {
    /**
     * The hour for the usage.
     */
    "hour"?: Date;
    /**
     * Contains the number of custom metrics that are inputs for aggregations (metric configured is custom).
     */
    "numCustomInputTimeseries"?: number;
    /**
     * Contains the number of custom metrics that are outputs for aggregations (metric configured is custom).
     */
    "numCustomOutputTimeseries"?: number;
    /**
     * Contains sum of non-aggregation custom metrics and custom metrics that are outputs for aggregations.
     */
    "numCustomTimeseries"?: number;
    /**
     * The organization name.
     */
    "orgName"?: string;
    /**
     * The organization public ID.
     */
    "publicId"?: string;
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
