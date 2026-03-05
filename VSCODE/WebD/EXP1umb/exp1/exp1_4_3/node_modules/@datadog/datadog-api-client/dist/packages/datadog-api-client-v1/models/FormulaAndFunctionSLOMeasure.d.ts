/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * SLO measures queries.
 */
export declare type FormulaAndFunctionSLOMeasure = typeof GOOD_EVENTS | typeof BAD_EVENTS | typeof GOOD_MINUTES | typeof BAD_MINUTES | typeof SLO_STATUS | typeof ERROR_BUDGET_REMAINING | typeof BURN_RATE | typeof ERROR_BUDGET_BURNDOWN | UnparsedObject;
export declare const GOOD_EVENTS = "good_events";
export declare const BAD_EVENTS = "bad_events";
export declare const GOOD_MINUTES = "good_minutes";
export declare const BAD_MINUTES = "bad_minutes";
export declare const SLO_STATUS = "slo_status";
export declare const ERROR_BUDGET_REMAINING = "error_budget_remaining";
export declare const BURN_RATE = "burn_rate";
export declare const ERROR_BUDGET_BURNDOWN = "error_budget_burndown";
