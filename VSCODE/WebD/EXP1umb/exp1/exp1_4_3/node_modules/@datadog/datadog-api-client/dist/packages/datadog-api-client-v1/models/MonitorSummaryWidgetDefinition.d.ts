/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorSummaryWidgetDefinitionType } from "./MonitorSummaryWidgetDefinitionType";
import { WidgetColorPreference } from "./WidgetColorPreference";
import { WidgetMonitorSummaryDisplayFormat } from "./WidgetMonitorSummaryDisplayFormat";
import { WidgetMonitorSummarySort } from "./WidgetMonitorSummarySort";
import { WidgetSummaryType } from "./WidgetSummaryType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The monitor summary widget displays a summary view of all your Datadog monitors, or a subset based on a query. Only available on FREE layout dashboards.
 */
export declare class MonitorSummaryWidgetDefinition {
    /**
     * Which color to use on the widget.
     */
    "colorPreference"?: WidgetColorPreference;
    /**
     * The number of monitors to display.
     */
    "count"?: number;
    /**
     * What to display on the widget.
     */
    "displayFormat"?: WidgetMonitorSummaryDisplayFormat;
    /**
     * Whether to show counts of 0 or not.
     */
    "hideZeroCounts"?: boolean;
    /**
     * Query to filter the monitors with.
     */
    "query": string;
    /**
     * Whether to show the time that has elapsed since the monitor/group triggered.
     */
    "showLastTriggered"?: boolean;
    /**
     * Whether to show the priorities column.
     */
    "showPriority"?: boolean;
    /**
     * Widget sorting methods.
     */
    "sort"?: WidgetMonitorSummarySort;
    /**
     * The start of the list. Typically 0.
     */
    "start"?: number;
    /**
     * Which summary type should be used.
     */
    "summaryType"?: WidgetSummaryType;
    /**
     * Title of the widget.
     */
    "title"?: string;
    /**
     * How to align the text on the widget.
     */
    "titleAlign"?: WidgetTextAlign;
    /**
     * Size of the title.
     */
    "titleSize"?: string;
    /**
     * Type of the monitor summary widget.
     */
    "type": MonitorSummaryWidgetDefinitionType;
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
