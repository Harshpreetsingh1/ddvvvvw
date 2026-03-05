/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Size of the widget.
 */
export declare type WidgetSizeFormat = typeof SMALL | typeof MEDIUM | typeof LARGE | UnparsedObject;
export declare const SMALL = "small";
export declare const MEDIUM = "medium";
export declare const LARGE = "large";
