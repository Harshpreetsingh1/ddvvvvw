/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Source from which to query items to display in the stream.
 */
export declare type ListStreamSource = typeof LOGS_STREAM | typeof AUDIT_STREAM | typeof CI_PIPELINE_STREAM | typeof CI_TEST_STREAM | typeof RUM_ISSUE_STREAM | typeof APM_ISSUE_STREAM | typeof TRACE_STREAM | typeof LOGS_ISSUE_STREAM | typeof LOGS_PATTERN_STREAM | typeof LOGS_TRANSACTION_STREAM | typeof EVENT_STREAM | typeof RUM_STREAM | typeof LLM_OBSERVABILITY_STREAM | UnparsedObject;
export declare const LOGS_STREAM = "logs_stream";
export declare const AUDIT_STREAM = "audit_stream";
export declare const CI_PIPELINE_STREAM = "ci_pipeline_stream";
export declare const CI_TEST_STREAM = "ci_test_stream";
export declare const RUM_ISSUE_STREAM = "rum_issue_stream";
export declare const APM_ISSUE_STREAM = "apm_issue_stream";
export declare const TRACE_STREAM = "trace_stream";
export declare const LOGS_ISSUE_STREAM = "logs_issue_stream";
export declare const LOGS_PATTERN_STREAM = "logs_pattern_stream";
export declare const LOGS_TRANSACTION_STREAM = "logs_transaction_stream";
export declare const EVENT_STREAM = "event_stream";
export declare const RUM_STREAM = "rum_stream";
export declare const LLM_OBSERVABILITY_STREAM = "llm_observability_stream";
