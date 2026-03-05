/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The timeframe of the threshold associated with this error
 * or "all" if all thresholds are affected.
 */
export declare type SLOErrorTimeframe = typeof SEVEN_DAYS | typeof THIRTY_DAYS | typeof NINETY_DAYS | typeof ALL | UnparsedObject;
export declare const SEVEN_DAYS = "7d";
export declare const THIRTY_DAYS = "30d";
export declare const NINETY_DAYS = "90d";
export declare const ALL = "all";
