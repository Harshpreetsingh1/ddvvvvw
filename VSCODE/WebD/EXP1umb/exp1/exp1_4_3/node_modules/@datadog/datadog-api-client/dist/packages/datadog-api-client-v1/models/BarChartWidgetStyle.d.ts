/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BarChartWidgetDisplay } from "./BarChartWidgetDisplay";
import { BarChartWidgetScaling } from "./BarChartWidgetScaling";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Style customization for a bar chart widget.
 */
export declare class BarChartWidgetStyle {
    /**
     * Bar chart widget display options.
     */
    "display"?: BarChartWidgetDisplay;
    /**
     * Color palette to apply to the widget.
     */
    "palette"?: string;
    /**
     * Bar chart widget scaling definition.
     */
    "scaling"?: BarChartWidgetScaling;
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
