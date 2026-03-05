/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Test run level.
 */
export declare type CIAppTestLevel = typeof SESSION | typeof MODULE | typeof SUITE | typeof TEST | UnparsedObject;
export declare const SESSION = "session";
export declare const MODULE = "module";
export declare const SUITE = "suite";
export declare const TEST = "test";
