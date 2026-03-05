/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The interval used when querying data, which defines the size of a time slice.
 * Two values are allowed: 60 (1 minute) and 300 (5 minutes).
 * If not provided, the value defaults to 300 (5 minutes).
 */
export declare type SLOTimeSliceInterval = typeof ONE_MINUTE | typeof FIVE_MINUTES | UnparsedObject;
export declare const ONE_MINUTE = 60;
export declare const FIVE_MINUTES = 300;
