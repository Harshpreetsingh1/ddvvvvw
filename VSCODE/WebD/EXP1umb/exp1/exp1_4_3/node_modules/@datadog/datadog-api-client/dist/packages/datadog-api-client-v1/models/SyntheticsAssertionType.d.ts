/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of the assertion.
 */
export declare type SyntheticsAssertionType = typeof BODY | typeof HEADER | typeof STATUS_CODE | typeof CERTIFICATE | typeof RESPONSE_TIME | typeof PROPERTY | typeof RECORD_EVERY | typeof RECORD_SOME | typeof TLS_VERSION | typeof MIN_TLS_VERSION | typeof LATENCY | typeof PACKET_LOSS_PERCENTAGE | typeof PACKETS_RECEIVED | typeof NETWORK_HOP | typeof RECEIVED_MESSAGE | typeof GRPC_HEALTHCHECK_STATUS | typeof GRPC_METADATA | typeof GRPC_PROTO | typeof CONNECTION | UnparsedObject;
export declare const BODY = "body";
export declare const HEADER = "header";
export declare const STATUS_CODE = "statusCode";
export declare const CERTIFICATE = "certificate";
export declare const RESPONSE_TIME = "responseTime";
export declare const PROPERTY = "property";
export declare const RECORD_EVERY = "recordEvery";
export declare const RECORD_SOME = "recordSome";
export declare const TLS_VERSION = "tlsVersion";
export declare const MIN_TLS_VERSION = "minTlsVersion";
export declare const LATENCY = "latency";
export declare const PACKET_LOSS_PERCENTAGE = "packetLossPercentage";
export declare const PACKETS_RECEIVED = "packetsReceived";
export declare const NETWORK_HOP = "networkHop";
export declare const RECEIVED_MESSAGE = "receivedMessage";
export declare const GRPC_HEALTHCHECK_STATUS = "grpcHealthcheckStatus";
export declare const GRPC_METADATA = "grpcMetadata";
export declare const GRPC_PROTO = "grpcProto";
export declare const CONNECTION = "connection";
