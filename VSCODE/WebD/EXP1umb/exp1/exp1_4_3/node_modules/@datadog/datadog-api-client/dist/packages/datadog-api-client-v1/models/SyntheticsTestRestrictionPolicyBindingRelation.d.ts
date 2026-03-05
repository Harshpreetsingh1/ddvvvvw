/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of relation for the binding.
 */
export declare type SyntheticsTestRestrictionPolicyBindingRelation = typeof EDITOR | typeof VIEWER | UnparsedObject;
export declare const EDITOR = "editor";
export declare const VIEWER = "viewer";
