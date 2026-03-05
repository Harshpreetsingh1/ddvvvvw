/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetAggregator } from "./WidgetAggregator";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Updated query value widget.
 */
export declare class QueryValueWidgetRequest {
    /**
     * Aggregator used for the request.
     */
    "aggregator"?: WidgetAggregator;
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
     * TODO.
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
