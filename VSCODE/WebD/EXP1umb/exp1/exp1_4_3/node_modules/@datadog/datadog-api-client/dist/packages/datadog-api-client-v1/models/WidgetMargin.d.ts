/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Size of the margins around the image.
 * **Note**: `small` and `large` values are deprecated.
 */
export declare type WidgetMargin = typeof SM | typeof MD | typeof LG | typeof SMALL | typeof LARGE | UnparsedObject;
export declare const SM = "sm";
export declare const MD = "md";
export declare const LG = "lg";
export declare const SMALL = "small";
export declare const LARGE = "large";
