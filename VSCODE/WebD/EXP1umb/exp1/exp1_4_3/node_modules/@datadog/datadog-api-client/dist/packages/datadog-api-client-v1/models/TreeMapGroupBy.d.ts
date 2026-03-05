/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * (deprecated) The attribute formerly used to group elements in the widget.
 */
export declare type TreeMapGroupBy = typeof USER | typeof FAMILY | typeof PROCESS | UnparsedObject;
export declare const USER = "user";
export declare const FAMILY = "family";
export declare const PROCESS = "process";
