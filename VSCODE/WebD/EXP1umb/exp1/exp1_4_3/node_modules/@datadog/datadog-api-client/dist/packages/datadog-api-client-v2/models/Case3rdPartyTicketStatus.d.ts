/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Case status
 */
export declare type Case3rdPartyTicketStatus = typeof IN_PROGRESS | typeof COMPLETED | typeof FAILED | UnparsedObject;
export declare const IN_PROGRESS = "IN_PROGRESS";
export declare const COMPLETED = "COMPLETED";
export declare const FAILED = "FAILED";
