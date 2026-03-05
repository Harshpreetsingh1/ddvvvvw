/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetRequestStyle } from "./WidgetRequestStyle";
import { WidgetSortBy } from "./WidgetSortBy";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Updated top list widget.
 */
export declare class ToplistWidgetRequest {
    /**
     * The log query.
     */
    "apmQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "auditQuery"?: LogQueryDefinition;
    /**
     * List of conditional formats.
     */
    "conditionalFormats"?: Array<WidgetConditionalFormat>;
    /**
     * The log query.
     */
    "eventQuery"?: LogQueryDefinition;
    /**
     * List of formulas that operate on queries.
     */
    "formulas"?: Array<WidgetFormula>;
    /**
     * The log query.
     */
    "logQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "networkQuery"?: LogQueryDefinition;
    /**
     * The process query to use in the widget.
     */
    "processQuery"?: ProcessQueryDefinition;
    /**
     * The log query.
     */
    "profileMetricsQuery"?: LogQueryDefinition;
    /**
     * Widget query.
     */
    "q"?: string;
    /**
     * List of queries that can be returned directly or used in formulas.
     */
    "queries"?: Array<FormulaAndFunctionQueryDefinition>;
    /**
     * Timeseries, scalar, or event list response. Event list response formats are supported by Geomap widgets.
     */
    "responseFormat"?: FormulaAndFunctionResponseFormat;
    /**
     * The log query.
     */
    "rumQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "securityQuery"?: LogQueryDefinition;
    /**
     * The controls for sorting the widget.
     */
    "sort"?: WidgetSortBy;
    /**
     * Define request widget style.
     */
    "style"?: WidgetRequestStyle;
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
