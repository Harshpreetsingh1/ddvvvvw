/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * State of the SLO.
 */
export declare type SLOState = typeof BREACHED | typeof WARNING | typeof OK | typeof NO_DATA | UnparsedObject;
export declare const BREACHED = "breached";
export declare const WARNING = "warning";
export declare const OK = "ok";
export declare const NO_DATA = "no_data";
