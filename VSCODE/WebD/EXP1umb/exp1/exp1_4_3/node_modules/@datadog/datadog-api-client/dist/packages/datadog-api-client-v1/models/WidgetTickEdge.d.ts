/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Define how you want to align the text on the widget.
 */
export declare type WidgetTickEdge = typeof BOTTOM | typeof LEFT | typeof RIGHT | typeof TOP | UnparsedObject;
export declare const BOTTOM = "bottom";
export declare const LEFT = "left";
export declare const RIGHT = "right";
export declare const TOP = "top";
