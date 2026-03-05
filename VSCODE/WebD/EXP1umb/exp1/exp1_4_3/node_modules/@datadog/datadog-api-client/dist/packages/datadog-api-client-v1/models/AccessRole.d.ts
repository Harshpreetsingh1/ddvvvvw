/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The access role of the user. Options are **st** (standard user), **adm** (admin user), or **ro** (read-only user).
 */
export declare type AccessRole = typeof STANDARD | typeof ADMIN | typeof READ_ONLY | typeof ERROR | UnparsedObject;
export declare const STANDARD = "st";
export declare const ADMIN = "adm";
export declare const READ_ONLY = "ro";
export declare const ERROR = "ERROR";
