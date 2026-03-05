/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The cloud asset type
 */
export declare type CloudAssetType = typeof HOST | typeof HOST_IMAGE | typeof IMAGE | UnparsedObject;
export declare const HOST = "Host";
export declare const HOST_IMAGE = "HostImage";
export declare const IMAGE = "Image";
