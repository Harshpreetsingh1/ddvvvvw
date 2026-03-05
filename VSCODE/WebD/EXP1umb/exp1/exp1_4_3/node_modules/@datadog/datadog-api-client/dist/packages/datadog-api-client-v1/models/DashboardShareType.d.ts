/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of sharing access (either open to anyone who has the public URL or invite-only).
 */
export declare type DashboardShareType = typeof OPEN | typeof INVITE | typeof EMBED | UnparsedObject;
export declare const OPEN = "open";
export declare const INVITE = "invite";
export declare const EMBED = "embed";
