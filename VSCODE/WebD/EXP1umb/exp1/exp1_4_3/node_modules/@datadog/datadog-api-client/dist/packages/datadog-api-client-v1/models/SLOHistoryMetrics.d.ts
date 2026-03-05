/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryMetricsSeries } from "./SLOHistoryMetricsSeries";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A `metric` based SLO history response.
 *
 * This is not included in responses for `monitor` based SLOs.
 */
export declare class SLOHistoryMetrics {
    /**
     * A representation of `metric` based SLO timeseries for the provided queries.
     * This is the same response type from `batch_query` endpoint.
     */
    "denominator": SLOHistoryMetricsSeries;
    /**
     * The aggregated query interval for the series data. It's implicit based on the query time window.
     */
    "interval": number;
    /**
     * Optional message if there are specific query issues/warnings.
     */
    "message"?: string;
    /**
     * A representation of `metric` based SLO timeseries for the provided queries.
     * This is the same response type from `batch_query` endpoint.
     */
    "numerator": SLOHistoryMetricsSeries;
    /**
     * The combined numerator and denominator query CSV.
     */
    "query": string;
    /**
     * The series result type. This mimics `batch_query` response type.
     */
    "resType": string;
    /**
     * The series response version type. This mimics `batch_query` response type.
     */
    "respVersion": number;
    /**
     * An array of query timestamps in EPOCH milliseconds.
     */
    "times": Array<number>;
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
