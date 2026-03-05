/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of token to use when performing the authentication.
 */
export declare type SyntheticsBasicAuthOauthTokenApiAuthentication = typeof HEADER | typeof BODY | UnparsedObject;
export declare const HEADER = "header";
export declare const BODY = "body";
