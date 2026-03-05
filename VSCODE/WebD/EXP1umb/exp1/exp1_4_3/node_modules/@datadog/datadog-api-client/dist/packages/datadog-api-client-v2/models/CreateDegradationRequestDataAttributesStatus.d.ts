/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The status of the degradation.
 */
export declare type CreateDegradationRequestDataAttributesStatus = typeof INVESTIGATING | typeof IDENTIFIED | typeof MONITORING | typeof RESOLVED | UnparsedObject;
export declare const INVESTIGATING = "investigating";
export declare const IDENTIFIED = "identified";
export declare const MONITORING = "monitoring";
export declare const RESOLVED = "resolved";
