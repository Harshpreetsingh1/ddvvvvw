/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of the author.
 */
export declare type ChangeEventAttributesAuthorType = typeof USER | typeof SYSTEM | typeof API | typeof AUTOMATION | UnparsedObject;
export declare const USER = "user";
export declare const SYSTEM = "system";
export declare const API = "api";
export declare const AUTOMATION = "automation";
