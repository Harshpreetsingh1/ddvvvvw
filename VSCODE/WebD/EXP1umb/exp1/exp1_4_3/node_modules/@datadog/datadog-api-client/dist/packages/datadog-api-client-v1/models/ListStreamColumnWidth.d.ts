/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Widget column width.
 */
export declare type ListStreamColumnWidth = typeof AUTO | typeof COMPACT | typeof FULL | UnparsedObject;
export declare const AUTO = "auto";
export declare const COMPACT = "compact";
export declare const FULL = "full";
