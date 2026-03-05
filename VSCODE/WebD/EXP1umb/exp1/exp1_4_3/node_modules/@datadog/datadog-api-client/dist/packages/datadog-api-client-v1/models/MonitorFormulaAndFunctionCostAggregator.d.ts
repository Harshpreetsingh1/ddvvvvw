/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Aggregation methods for metric queries.
 */
export declare type MonitorFormulaAndFunctionCostAggregator = typeof AVG | typeof SUM | typeof MAX | typeof MIN | typeof LAST | typeof AREA | typeof L2NORM | typeof PERCENTILE | typeof STDDEV | UnparsedObject;
export declare const AVG = "avg";
export declare const SUM = "sum";
export declare const MAX = "max";
export declare const MIN = "min";
export declare const LAST = "last";
export declare const AREA = "area";
export declare const L2NORM = "l2norm";
export declare const PERCENTILE = "percentile";
export declare const STDDEV = "stddev";
