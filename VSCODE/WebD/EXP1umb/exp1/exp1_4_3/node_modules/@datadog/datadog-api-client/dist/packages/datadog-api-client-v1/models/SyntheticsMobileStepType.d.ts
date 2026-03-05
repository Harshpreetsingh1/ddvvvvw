/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Step type used in your mobile Synthetic test.
 */
export declare type SyntheticsMobileStepType = typeof ASSERTELEMENTCONTENT | typeof ASSERTSCREENCONTAINS | typeof ASSERTSCREENLACKS | typeof DOUBLETAP | typeof EXTRACTVARIABLE | typeof FLICK | typeof OPENDEEPLINK | typeof PLAYSUBTEST | typeof PRESSBACK | typeof RESTARTAPPLICATION | typeof ROTATE | typeof SCROLL | typeof SCROLLTOELEMENT | typeof TAP | typeof TOGGLEWIFI | typeof TYPETEXT | typeof WAIT | UnparsedObject;
export declare const ASSERTELEMENTCONTENT = "assertElementContent";
export declare const ASSERTSCREENCONTAINS = "assertScreenContains";
export declare const ASSERTSCREENLACKS = "assertScreenLacks";
export declare const DOUBLETAP = "doubleTap";
export declare const EXTRACTVARIABLE = "extractVariable";
export declare const FLICK = "flick";
export declare const OPENDEEPLINK = "openDeeplink";
export declare const PLAYSUBTEST = "playSubTest";
export declare const PRESSBACK = "pressBack";
export declare const RESTARTAPPLICATION = "restartApplication";
export declare const ROTATE = "rotate";
export declare const SCROLL = "scroll";
export declare const SCROLLTOELEMENT = "scrollToElement";
export declare const TAP = "tap";
export declare const TOGGLEWIFI = "toggleWiFi";
export declare const TYPETEXT = "typeText";
export declare const WAIT = "wait";
