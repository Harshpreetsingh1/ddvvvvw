/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The final status of the pipeline.
 */
export declare type CIAppPipelineEventPipelineStatus = typeof SUCCESS | typeof ERROR | typeof CANCELED | typeof SKIPPED | typeof BLOCKED | UnparsedObject;
export declare const SUCCESS = "success";
export declare const ERROR = "error";
export declare const CANCELED = "canceled";
export declare const SKIPPED = "skipped";
export declare const BLOCKED = "blocked";
