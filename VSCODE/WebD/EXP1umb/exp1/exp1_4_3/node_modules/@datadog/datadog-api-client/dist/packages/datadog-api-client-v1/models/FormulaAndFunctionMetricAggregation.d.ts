/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The aggregation methods available for metrics queries.
 */
export declare type FormulaAndFunctionMetricAggregation = typeof AVG | typeof MIN | typeof MAX | typeof SUM | typeof LAST | typeof AREA | typeof L2NORM | typeof PERCENTILE | UnparsedObject;
export declare const AVG = "avg";
export declare const MIN = "min";
export declare const MAX = "max";
export declare const SUM = "sum";
export declare const LAST = "last";
export declare const AREA = "area";
export declare const L2NORM = "l2norm";
export declare const PERCENTILE = "percentile";
