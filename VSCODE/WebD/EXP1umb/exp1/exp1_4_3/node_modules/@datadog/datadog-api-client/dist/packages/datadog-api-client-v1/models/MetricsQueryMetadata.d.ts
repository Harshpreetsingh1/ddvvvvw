/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsQueryUnit } from "./MetricsQueryUnit";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object containing all metric names returned and their associated metadata.
 */
export declare class MetricsQueryMetadata {
    /**
     * Aggregation type.
     */
    "aggr"?: string;
    /**
     * Display name of the metric.
     */
    "displayName"?: string;
    /**
     * End of the time window, milliseconds since Unix epoch.
     */
    "end"?: number;
    /**
     * Metric expression.
     */
    "expression"?: string;
    /**
     * Number of milliseconds between data samples.
     */
    "interval"?: number;
    /**
     * Number of data samples.
     */
    "length"?: number;
    /**
     * Metric name.
     */
    "metric"?: string;
    /**
     * List of points of the timeseries in milliseconds.
     */
    "pointlist"?: Array<[number, number]>;
    /**
     * The index of the series' query within the request.
     */
    "queryIndex"?: number;
    /**
     * Metric scope, comma separated list of tags.
     */
    "scope"?: string;
    /**
     * Start of the time window, milliseconds since Unix epoch.
     */
    "start"?: number;
    /**
     * Unique tags identifying this series.
     */
    "tagSet"?: Array<string>;
    /**
     * Detailed information about the metric unit.
     * The first element describes the "primary unit" (for example, `bytes` in `bytes per second`).
     * The second element describes the "per unit" (for example, `second` in `bytes per second`).
     * If the second element is not present, the API returns null.
     */
    "unit"?: [MetricsQueryUnit, MetricsQueryUnit];
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
