/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Legend column.
 */
export declare type TimeseriesWidgetLegendColumn = typeof VALUE | typeof AVG | typeof SUM | typeof MIN | typeof MAX | UnparsedObject;
export declare const VALUE = "value";
export declare const AVG = "avg";
export declare const SUM = "sum";
export declare const MIN = "min";
export declare const MAX = "max";
