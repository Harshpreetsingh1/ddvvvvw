/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The response to the event.
 */
export declare type AppBuilderEventType = typeof CUSTOM | typeof SETCOMPONENTSTATE | typeof TRIGGERQUERY | typeof OPENMODAL | typeof CLOSEMODAL | typeof OPENURL | typeof DOWNLOADFILE | typeof SETSTATEVARIABLEVALUE | UnparsedObject;
export declare const CUSTOM = "custom";
export declare const SETCOMPONENTSTATE = "setComponentState";
export declare const TRIGGERQUERY = "triggerQuery";
export declare const OPENMODAL = "openModal";
export declare const CLOSEMODAL = "closeModal";
export declare const OPENURL = "openUrl";
export declare const DOWNLOADFILE = "downloadFile";
export declare const SETSTATEVARIABLEVALUE = "setStateVariableValue";
