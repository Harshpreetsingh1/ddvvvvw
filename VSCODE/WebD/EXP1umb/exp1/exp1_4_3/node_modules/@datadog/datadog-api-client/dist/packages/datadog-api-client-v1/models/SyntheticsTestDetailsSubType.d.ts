/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The subtype of the Synthetic API test, `http`, `ssl`, `tcp`,
 * `dns`, `icmp`, `udp`, `websocket`, `grpc` or `multi`.
 */
export declare type SyntheticsTestDetailsSubType = typeof HTTP | typeof SSL | typeof TCP | typeof DNS | typeof MULTI | typeof ICMP | typeof UDP | typeof WEBSOCKET | typeof GRPC | UnparsedObject;
export declare const HTTP = "http";
export declare const SSL = "ssl";
export declare const TCP = "tcp";
export declare const DNS = "dns";
export declare const MULTI = "multi";
export declare const ICMP = "icmp";
export declare const UDP = "udp";
export declare const WEBSOCKET = "websocket";
export declare const GRPC = "grpc";
