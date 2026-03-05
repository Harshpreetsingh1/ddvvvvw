/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The UI component type.
 */
export declare type ComponentType = typeof TABLE | typeof TEXTINPUT | typeof TEXTAREA | typeof BUTTON | typeof TEXT | typeof SELECT | typeof MODAL | typeof SCHEMAFORM | typeof CHECKBOX | typeof TABS | typeof VEGACHART | typeof RADIOBUTTONS | typeof NUMBERINPUT | typeof FILEINPUT | typeof JSONINPUT | typeof GRIDCELL | typeof DATERANGEPICKER | typeof SEARCH | typeof CONTAINER | typeof CALLOUTVALUE | UnparsedObject;
export declare const TABLE = "table";
export declare const TEXTINPUT = "textInput";
export declare const TEXTAREA = "textArea";
export declare const BUTTON = "button";
export declare const TEXT = "text";
export declare const SELECT = "select";
export declare const MODAL = "modal";
export declare const SCHEMAFORM = "schemaForm";
export declare const CHECKBOX = "checkbox";
export declare const TABS = "tabs";
export declare const VEGACHART = "vegaChart";
export declare const RADIOBUTTONS = "radioButtons";
export declare const NUMBERINPUT = "numberInput";
export declare const FILEINPUT = "fileInput";
export declare const JSONINPUT = "jsonInput";
export declare const GRIDCELL = "gridCell";
export declare const DATERANGEPICKER = "dateRangePicker";
export declare const SEARCH = "search";
export declare const CONTAINER = "container";
export declare const CALLOUTVALUE = "calloutValue";
