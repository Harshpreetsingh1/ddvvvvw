/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Number of columns to display.
 */
export declare type WidgetServiceSummaryDisplayFormat = typeof ONE_COLUMN | typeof TWO_COLUMN | typeof THREE_COLUMN | UnparsedObject;
export declare const ONE_COLUMN = "one_column";
export declare const TWO_COLUMN = "two_column";
export declare const THREE_COLUMN = "three_column";
