/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The subtype of the Synthetic multi-step API test step.
 */
export declare type SyntheticsAPITestStepSubtype = typeof HTTP | typeof GRPC | typeof SSL | typeof DNS | typeof TCP | typeof UDP | typeof ICMP | typeof WEBSOCKET | UnparsedObject;
export declare const HTTP = "http";
export declare const GRPC = "grpc";
export declare const SSL = "ssl";
export declare const DNS = "dns";
export declare const TCP = "tcp";
export declare const UDP = "udp";
export declare const ICMP = "icmp";
export declare const WEBSOCKET = "websocket";
