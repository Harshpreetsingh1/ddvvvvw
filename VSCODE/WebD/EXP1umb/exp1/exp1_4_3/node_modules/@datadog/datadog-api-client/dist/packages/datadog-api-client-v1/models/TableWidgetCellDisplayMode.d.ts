/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Define a display mode for the table cell.
 */
export declare type TableWidgetCellDisplayMode = typeof NUMBER | typeof BAR | typeof TREND | UnparsedObject;
export declare const NUMBER = "number";
export declare const BAR = "bar";
export declare const TREND = "trend";
