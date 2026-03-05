/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Determines whether the batch has passed, failed, or is in progress.
 */
export declare type SyntheticsBatchStatus = typeof PASSED | typeof SKIPPED | typeof FAILED | UnparsedObject;
export declare const PASSED = "passed";
export declare const SKIPPED = "skipped";
export declare const FAILED = "failed";
