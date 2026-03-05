/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Top list widget stacked legend behavior.
 */
export declare type ToplistWidgetLegend = typeof AUTOMATIC | typeof INLINE | typeof NONE | UnparsedObject;
export declare const AUTOMATIC = "automatic";
export declare const INLINE = "inline";
export declare const NONE = "none";
