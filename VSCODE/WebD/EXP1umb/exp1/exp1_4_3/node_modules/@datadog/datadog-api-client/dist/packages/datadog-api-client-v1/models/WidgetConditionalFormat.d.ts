/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetComparator } from "./WidgetComparator";
import { WidgetPalette } from "./WidgetPalette";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Define a conditional format for the widget.
 */
export declare class WidgetConditionalFormat {
    /**
     * Comparator to apply.
     */
    "comparator": WidgetComparator;
    /**
     * Color palette to apply to the background, same values available as palette.
     */
    "customBgColor"?: string;
    /**
     * Color palette to apply to the foreground, same values available as palette.
     */
    "customFgColor"?: string;
    /**
     * True hides values.
     */
    "hideValue"?: boolean;
    /**
     * Displays an image as the background.
     */
    "imageUrl"?: string;
    /**
     * Metric from the request to correlate this conditional format with.
     */
    "metric"?: string;
    /**
     * Color palette to apply.
     */
    "palette": WidgetPalette;
    /**
     * Defines the displayed timeframe.
     */
    "timeframe"?: string;
    /**
     * Value for the comparator.
     */
    "value": number;
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
