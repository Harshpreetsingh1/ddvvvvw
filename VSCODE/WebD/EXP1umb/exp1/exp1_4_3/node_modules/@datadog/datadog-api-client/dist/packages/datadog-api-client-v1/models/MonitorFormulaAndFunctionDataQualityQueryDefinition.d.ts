/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionDataQualityDataSource } from "./MonitorFormulaAndFunctionDataQualityDataSource";
import { MonitorFormulaAndFunctionDataQualityMonitorOptions } from "./MonitorFormulaAndFunctionDataQualityMonitorOptions";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A formula and functions data quality query.
 */
export declare class MonitorFormulaAndFunctionDataQualityQueryDefinition {
    /**
     * Data source for data quality queries.
     */
    "dataSource": MonitorFormulaAndFunctionDataQualityDataSource;
    /**
     * Filter expression used to match on data entities. Uses Aastra query syntax.
     */
    "filter": string;
    /**
     * Optional grouping fields for aggregation.
     */
    "groupBy"?: Array<string>;
    /**
     * The data quality measure to query. Common values include:
     * `bytes`, `cardinality`, `custom`, `freshness`, `max`, `mean`, `min`,
     * `nullness`, `percent_negative`, `percent_zero`, `row_count`, `stddev`,
     * `sum`, `uniqueness`. Additional values may be supported.
     */
    "measure": string;
    /**
     * Monitor configuration options for data quality queries.
     */
    "monitorOptions"?: MonitorFormulaAndFunctionDataQualityMonitorOptions;
    /**
     * Name of the query for use in formulas.
     */
    "name": string;
    /**
     * Schema version for the data quality query.
     */
    "schemaVersion"?: string;
    /**
     * Optional scoping expression to further filter metrics. Uses metrics filter syntax.
     * This is useful when an entity has been configured to emit metrics with additional tags.
     */
    "scope"?: string;
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
