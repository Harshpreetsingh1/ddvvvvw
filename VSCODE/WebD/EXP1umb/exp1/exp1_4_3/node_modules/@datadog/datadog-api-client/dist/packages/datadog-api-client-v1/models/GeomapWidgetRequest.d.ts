/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { GeomapWidgetRequestStyle } from "./GeomapWidgetRequestStyle";
import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamQuery } from "./ListStreamQuery";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { TableWidgetTextFormatRule } from "./TableWidgetTextFormatRule";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetSortBy } from "./WidgetSortBy";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * An updated geomap widget.
 */
export declare class GeomapWidgetRequest {
    /**
     * Widget columns.
     */
    "columns"?: Array<ListStreamColumn>;
    /**
     * Threshold (numeric) conditional formatting rules may be used by a regions layer.
     */
    "conditionalFormats"?: Array<WidgetConditionalFormat>;
    /**
     * List of formulas that operate on queries.
     */
    "formulas"?: Array<WidgetFormula>;
    /**
     * The log query.
     */
    "logQuery"?: LogQueryDefinition;
    /**
     * The widget metrics query.
     */
    "q"?: string;
    /**
     * List of queries that can be returned directly or used in formulas.
     */
    "queries"?: Array<FormulaAndFunctionQueryDefinition>;
    /**
     * Updated list stream widget.
     */
    "query"?: ListStreamQuery;
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
     * The style to apply to the request for points layer.
     */
    "style"?: GeomapWidgetRequestStyle;
    /**
     * Text formatting rules may be used by a points layer.
     */
    "textFormats"?: Array<TableWidgetTextFormatRule>;
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
