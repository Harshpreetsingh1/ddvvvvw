/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Which summary type should be used.
 */
export declare type WidgetSummaryType = typeof MONITORS | typeof GROUPS | typeof COMBINED | UnparsedObject;
export declare const MONITORS = "monitors";
export declare const GROUPS = "groups";
export declare const COMBINED = "combined";
