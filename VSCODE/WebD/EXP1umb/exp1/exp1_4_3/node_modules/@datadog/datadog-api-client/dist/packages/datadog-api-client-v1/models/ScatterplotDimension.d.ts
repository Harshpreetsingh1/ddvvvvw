/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Dimension of the Scatterplot.
 */
export declare type ScatterplotDimension = typeof X | typeof Y | typeof RADIUS | typeof COLOR | UnparsedObject;
export declare const X = "x";
export declare const Y = "y";
export declare const RADIUS = "radius";
export declare const COLOR = "color";
