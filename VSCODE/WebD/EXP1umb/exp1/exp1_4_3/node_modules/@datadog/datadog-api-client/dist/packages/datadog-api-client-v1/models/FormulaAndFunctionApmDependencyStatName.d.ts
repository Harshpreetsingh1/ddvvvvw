/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * APM statistic.
 */
export declare type FormulaAndFunctionApmDependencyStatName = typeof AVG_DURATION | typeof AVG_ROOT_DURATION | typeof AVG_SPANS_PER_TRACE | typeof ERROR_RATE | typeof PCT_EXEC_TIME | typeof PCT_OF_TRACES | typeof TOTAL_TRACES_COUNT | UnparsedObject;
export declare const AVG_DURATION = "avg_duration";
export declare const AVG_ROOT_DURATION = "avg_root_duration";
export declare const AVG_SPANS_PER_TRACE = "avg_spans_per_trace";
export declare const ERROR_RATE = "error_rate";
export declare const PCT_EXEC_TIME = "pct_exec_time";
export declare const PCT_OF_TRACES = "pct_of_traces";
export declare const TOTAL_TRACES_COUNT = "total_traces_count";
