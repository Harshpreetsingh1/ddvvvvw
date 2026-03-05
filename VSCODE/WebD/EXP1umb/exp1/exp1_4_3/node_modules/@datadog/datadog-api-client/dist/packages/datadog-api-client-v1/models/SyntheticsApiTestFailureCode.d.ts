/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Error code that can be returned by a Synthetic test.
 */
export declare type SyntheticsApiTestFailureCode = typeof BODY_TOO_LARGE | typeof DENIED | typeof TOO_MANY_REDIRECTS | typeof AUTHENTICATION_ERROR | typeof DECRYPTION | typeof INVALID_CHAR_IN_HEADER | typeof HEADER_TOO_LARGE | typeof HEADERS_INCOMPATIBLE_CONTENT_LENGTH | typeof INVALID_REQUEST | typeof REQUIRES_UPDATE | typeof UNESCAPED_CHARACTERS_IN_REQUEST_PATH | typeof MALFORMED_RESPONSE | typeof INCORRECT_ASSERTION | typeof CONNREFUSED | typeof CONNRESET | typeof DNS | typeof HOSTUNREACH | typeof NETUNREACH | typeof TIMEOUT | typeof SSL | typeof OCSP | typeof INVALID_TEST | typeof TUNNEL | typeof WEBSOCKET | typeof UNKNOWN | typeof INTERNAL_ERROR | UnparsedObject;
export declare const BODY_TOO_LARGE = "BODY_TOO_LARGE";
export declare const DENIED = "DENIED";
export declare const TOO_MANY_REDIRECTS = "TOO_MANY_REDIRECTS";
export declare const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export declare const DECRYPTION = "DECRYPTION";
export declare const INVALID_CHAR_IN_HEADER = "INVALID_CHAR_IN_HEADER";
export declare const HEADER_TOO_LARGE = "HEADER_TOO_LARGE";
export declare const HEADERS_INCOMPATIBLE_CONTENT_LENGTH = "HEADERS_INCOMPATIBLE_CONTENT_LENGTH";
export declare const INVALID_REQUEST = "INVALID_REQUEST";
export declare const REQUIRES_UPDATE = "REQUIRES_UPDATE";
export declare const UNESCAPED_CHARACTERS_IN_REQUEST_PATH = "UNESCAPED_CHARACTERS_IN_REQUEST_PATH";
export declare const MALFORMED_RESPONSE = "MALFORMED_RESPONSE";
export declare const INCORRECT_ASSERTION = "INCORRECT_ASSERTION";
export declare const CONNREFUSED = "CONNREFUSED";
export declare const CONNRESET = "CONNRESET";
export declare const DNS = "DNS";
export declare const HOSTUNREACH = "HOSTUNREACH";
export declare const NETUNREACH = "NETUNREACH";
export declare const TIMEOUT = "TIMEOUT";
export declare const SSL = "SSL";
export declare const OCSP = "OCSP";
export declare const INVALID_TEST = "INVALID_TEST";
export declare const TUNNEL = "TUNNEL";
export declare const WEBSOCKET = "WEBSOCKET";
export declare const UNKNOWN = "UNKNOWN";
export declare const INTERNAL_ERROR = "INTERNAL_ERROR";
