/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The triggering action for the event.
 */
export declare type AppBuilderEventName = typeof PAGECHANGE | typeof TABLEROWCLICK | typeof TABLEROWBUTTONCLICK | typeof CHANGE | typeof SUBMIT | typeof CLICK | typeof TOGGLEOPEN | typeof CLOSE | typeof OPEN | typeof EXECUTIONFINISHED | UnparsedObject;
export declare const PAGECHANGE = "pageChange";
export declare const TABLEROWCLICK = "tableRowClick";
export declare const TABLEROWBUTTONCLICK = "_tableRowButtonClick";
export declare const CHANGE = "change";
export declare const SUBMIT = "submit";
export declare const CLICK = "click";
export declare const TOGGLEOPEN = "toggleOpen";
export declare const CLOSE = "close";
export declare const OPEN = "open";
export declare const EXECUTIONFINISHED = "executionFinished";
