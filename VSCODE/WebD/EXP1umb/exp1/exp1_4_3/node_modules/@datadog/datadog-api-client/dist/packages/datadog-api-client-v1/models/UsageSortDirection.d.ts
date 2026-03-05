/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The direction to sort by.
 */
export declare type UsageSortDirection = typeof DESC | typeof ASC | UnparsedObject;
export declare const DESC = "desc";
export declare const ASC = "asc";
