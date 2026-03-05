/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Aggregation methods for event platform queries.
 */
export declare type MonitorFormulaAndFunctionEventAggregation = typeof COUNT | typeof CARDINALITY | typeof MEDIAN | typeof PC75 | typeof PC90 | typeof PC95 | typeof PC98 | typeof PC99 | typeof SUM | typeof MIN | typeof MAX | typeof AVG | UnparsedObject;
export declare const COUNT = "count";
export declare const CARDINALITY = "cardinality";
export declare const MEDIAN = "median";
export declare const PC75 = "pc75";
export declare const PC90 = "pc90";
export declare const PC95 = "pc95";
export declare const PC98 = "pc98";
export declare const PC99 = "pc99";
export declare const SUM = "sum";
export declare const MIN = "min";
export declare const MAX = "max";
export declare const AVG = "avg";
