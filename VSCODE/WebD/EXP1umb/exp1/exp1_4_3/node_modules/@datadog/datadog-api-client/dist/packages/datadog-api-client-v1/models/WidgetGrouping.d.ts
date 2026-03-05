/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The kind of grouping to use.
 */
export declare type WidgetGrouping = typeof CHECK | typeof CLUSTER | UnparsedObject;
export declare const CHECK = "check";
export declare const CLUSTER = "cluster";
