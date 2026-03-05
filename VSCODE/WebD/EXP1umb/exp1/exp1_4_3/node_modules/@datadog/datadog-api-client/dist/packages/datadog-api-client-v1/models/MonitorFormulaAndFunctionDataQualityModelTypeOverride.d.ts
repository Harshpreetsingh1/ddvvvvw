/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Override for the model type used in anomaly detection.
 */
export declare type MonitorFormulaAndFunctionDataQualityModelTypeOverride = typeof FRESHNESS | typeof PERCENTAGE | typeof ANY | UnparsedObject;
export declare const FRESHNESS = "freshness";
export declare const PERCENTAGE = "percentage";
export declare const ANY = "any";
