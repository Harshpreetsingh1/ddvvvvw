/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * A numeric representation of the type of the service level objective (`0` for
 * monitor, `1` for metric). Always included in service level objective responses.
 * Ignored in create/update requests.
 */
export declare type SLOTypeNumeric = typeof MONITOR | typeof METRIC | typeof TIME_SLICE | UnparsedObject;
export declare const MONITOR = 0;
export declare const METRIC = 1;
export declare const TIME_SLICE = 2;
