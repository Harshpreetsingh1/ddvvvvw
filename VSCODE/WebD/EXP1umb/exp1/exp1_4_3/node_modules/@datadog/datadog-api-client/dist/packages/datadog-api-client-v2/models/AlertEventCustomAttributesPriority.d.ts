/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The priority of the alert.
 */
export declare type AlertEventCustomAttributesPriority = typeof PRIORITY_ONE | typeof PRIORITY_TWO | typeof PRIORITY_THREE | typeof PRIORITY_FOUR | typeof PRIORITY_FIVE | UnparsedObject;
export declare const PRIORITY_ONE = "1";
export declare const PRIORITY_TWO = "2";
export declare const PRIORITY_THREE = "3";
export declare const PRIORITY_FOUR = "4";
export declare const PRIORITY_FIVE = "5";
