/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Reason why a signal has been archived.
 */
export declare type SignalArchiveReason = typeof NONE | typeof FALSE_POSITIVE | typeof TESTING_OR_MAINTENANCE | typeof INVESTIGATED_CASE_OPENED | typeof TRUE_POSITIVE_BENIGN | typeof TRUE_POSITIVE_MALICIOUS | typeof OTHER | UnparsedObject;
export declare const NONE = "none";
export declare const FALSE_POSITIVE = "false_positive";
export declare const TESTING_OR_MAINTENANCE = "testing_or_maintenance";
export declare const INVESTIGATED_CASE_OPENED = "investigated_case_opened";
export declare const TRUE_POSITIVE_BENIGN = "true_positive_benign";
export declare const TRUE_POSITIVE_MALICIOUS = "true_positive_malicious";
export declare const OTHER = "other";
