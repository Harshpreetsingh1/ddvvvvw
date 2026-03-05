/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Aggregator used for the request.
 */
export declare type WidgetAggregator = typeof AVERAGE | typeof LAST | typeof MAXIMUM | typeof MINIMUM | typeof SUM | typeof PERCENTILE | UnparsedObject;
export declare const AVERAGE = "avg";
export declare const LAST = "last";
export declare const MAXIMUM = "max";
export declare const MINIMUM = "min";
export declare const SUM = "sum";
export declare const PERCENTILE = "percentile";
