/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetChangeType } from "./WidgetChangeType";
import { WidgetCompareTo } from "./WidgetCompareTo";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetOrderBy } from "./WidgetOrderBy";
import { WidgetSort } from "./WidgetSort";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Updated change widget.
 */
export declare class ChangeWidgetRequest {
    /**
     * The log query.
     */
    "apmQuery"?: LogQueryDefinition;
    /**
     * Show the absolute or the relative change.
     */
    "changeType"?: WidgetChangeType;
    /**
     * Timeframe used for the change comparison.
     */
    "compareTo"?: WidgetCompareTo;
    /**
     * The log query.
     */
    "eventQuery"?: LogQueryDefinition;
    /**
     * List of formulas that operate on queries.
     */
    "formulas"?: Array<WidgetFormula>;
    /**
     * Whether to show increase as good.
     */
    "increaseGood"?: boolean;
    /**
     * The log query.
     */
    "logQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "networkQuery"?: LogQueryDefinition;
    /**
     * What to order by.
     */
    "orderBy"?: WidgetOrderBy;
    /**
     * Widget sorting methods.
     */
    "orderDir"?: WidgetSort;
    /**
     * The process query to use in the widget.
     */
    "processQuery"?: ProcessQueryDefinition;
    /**
     * The log query.
     */
    "profileMetricsQuery"?: LogQueryDefinition;
    /**
     * Query definition.
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
     * Whether to show the present value.
     */
    "showPresent"?: boolean;
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
