/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The size of the graph.
 */
export declare type NotebookGraphSize = typeof EXTRA_SMALL | typeof SMALL | typeof MEDIUM | typeof LARGE | typeof EXTRA_LARGE | UnparsedObject;
export declare const EXTRA_SMALL = "xs";
export declare const SMALL = "s";
export declare const MEDIUM = "m";
export declare const LARGE = "l";
export declare const EXTRA_LARGE = "xl";
