/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The asset type
 */
export declare type AssetType = typeof REPOSITORY | typeof SERVICE | typeof HOST | typeof HOSTIMAGE | typeof IMAGE | UnparsedObject;
export declare const REPOSITORY = "Repository";
export declare const SERVICE = "Service";
export declare const HOST = "Host";
export declare const HOSTIMAGE = "HostImage";
export declare const IMAGE = "Image";
