/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The category of the link.
 */
export declare type AlertEventCustomAttributesLinksItemsCategory = typeof RUNBOOK | typeof DOCUMENTATION | typeof DASHBOARD | UnparsedObject;
export declare const RUNBOOK = "runbook";
export declare const DOCUMENTATION = "documentation";
export declare const DASHBOARD = "dashboard";
