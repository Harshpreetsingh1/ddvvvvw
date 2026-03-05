/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * An aggregation function.
 */
export declare type CIAppAggregationFunction = typeof COUNT | typeof CARDINALITY | typeof PERCENTILE_75 | typeof PERCENTILE_90 | typeof PERCENTILE_95 | typeof PERCENTILE_98 | typeof PERCENTILE_99 | typeof SUM | typeof MIN | typeof MAX | typeof AVG | typeof MEDIAN | typeof LATEST | typeof EARLIEST | typeof MOST_FREQUENT | typeof DELTA | UnparsedObject;
export declare const COUNT = "count";
export declare const CARDINALITY = "cardinality";
export declare const PERCENTILE_75 = "pc75";
export declare const PERCENTILE_90 = "pc90";
export declare const PERCENTILE_95 = "pc95";
export declare const PERCENTILE_98 = "pc98";
export declare const PERCENTILE_99 = "pc99";
export declare const SUM = "sum";
export declare const MIN = "min";
export declare const MAX = "max";
export declare const AVG = "avg";
export declare const MEDIAN = "median";
export declare const LATEST = "latest";
export declare const EARLIEST = "earliest";
export declare const MOST_FREQUENT = "most_frequent";
export declare const DELTA = "delta";
