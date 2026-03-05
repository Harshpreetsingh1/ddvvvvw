/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Size to use to display an event.
 */
export declare type WidgetEventSize = typeof SMALL | typeof LARGE | UnparsedObject;
export declare const SMALL = "s";
export declare const LARGE = "l";
