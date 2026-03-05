/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Width of line displayed.
 */
export declare type WidgetLineWidth = typeof NORMAL | typeof THICK | typeof THIN | UnparsedObject;
export declare const NORMAL = "normal";
export declare const THICK = "thick";
export declare const THIN = "thin";
