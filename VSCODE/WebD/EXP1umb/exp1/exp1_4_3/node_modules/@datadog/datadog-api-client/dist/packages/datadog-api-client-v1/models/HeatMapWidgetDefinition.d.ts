/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatMapWidgetDefinitionType } from "./HeatMapWidgetDefinitionType";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { HeatMapWidgetXAxis } from "./HeatMapWidgetXAxis";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetEvent } from "./WidgetEvent";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The heat map visualization shows metrics aggregated across many tags, such as hosts. The more hosts that have a particular value, the darker that square is.
 */
export declare class HeatMapWidgetDefinition {
    /**
     * List of custom links.
     */
    "customLinks"?: Array<WidgetCustomLink>;
    /**
     * List of widget events.
     */
    "events"?: Array<WidgetEvent>;
    /**
     * Available legend sizes for a widget. Should be one of "0", "2", "4", "8", "16", or "auto".
     */
    "legendSize"?: string;
    /**
     * List of markers.
     */
    "markers"?: Array<WidgetMarker>;
    /**
     * List of widget types.
     */
    "requests": [HeatMapWidgetRequest];
    /**
     * Whether or not to display the legend on this widget.
     */
    "showLegend"?: boolean;
    /**
     * Time setting for the widget.
     */
    "time"?: WidgetTime;
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
     * Type of the heat map widget.
     */
    "type": HeatMapWidgetDefinitionType;
    /**
     * X Axis controls for the heat map widget.
     */
    "xaxis"?: HeatMapWidgetXAxis;
    /**
     * Axis controls for the widget.
     */
    "yaxis"?: WidgetAxis;
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
