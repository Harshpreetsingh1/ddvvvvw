/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Unit of the time span.
 */
export declare type WidgetLiveSpanUnit = typeof MINUTE | typeof HOUR | typeof DAY | typeof WEEK | typeof MONTH | typeof YEAR | UnparsedObject;
export declare const MINUTE = "minute";
export declare const HOUR = "hour";
export declare const DAY = "day";
export declare const WEEK = "week";
export declare const MONTH = "month";
export declare const YEAR = "year";
