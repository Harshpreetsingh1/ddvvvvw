/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The namespace associated with the tag filter entry.
 */
export declare type AWSNamespace = typeof ELB | typeof APPLICATION_ELB | typeof SQS | typeof RDS | typeof CUSTOM | typeof NETWORK_ELB | typeof LAMBDA | typeof STEP_FUNCTIONS | UnparsedObject;
export declare const ELB = "elb";
export declare const APPLICATION_ELB = "application_elb";
export declare const SQS = "sqs";
export declare const RDS = "rds";
export declare const CUSTOM = "custom";
export declare const NETWORK_ELB = "network_elb";
export declare const LAMBDA = "lambda";
export declare const STEP_FUNCTIONS = "step_functions";
