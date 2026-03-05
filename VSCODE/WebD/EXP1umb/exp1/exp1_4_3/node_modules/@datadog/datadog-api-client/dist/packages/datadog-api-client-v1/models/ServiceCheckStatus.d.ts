/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The status of a service check. Set to `0` for OK, `1` for warning, `2` for critical, and `3` for unknown.
 */
export declare type ServiceCheckStatus = typeof OK | typeof WARNING | typeof CRITICAL | typeof UNKNOWN | UnparsedObject;
export declare const OK = 0;
export declare const WARNING = 1;
export declare const CRITICAL = 2;
export declare const UNKNOWN = 3;
