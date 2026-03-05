/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Reference type for the mobile application for a mobile synthetics test.
 */
export declare type SyntheticsMobileTestsMobileApplicationReferenceType = typeof LATEST | typeof VERSION | UnparsedObject;
export declare const LATEST = "latest";
export declare const VERSION = "version";
