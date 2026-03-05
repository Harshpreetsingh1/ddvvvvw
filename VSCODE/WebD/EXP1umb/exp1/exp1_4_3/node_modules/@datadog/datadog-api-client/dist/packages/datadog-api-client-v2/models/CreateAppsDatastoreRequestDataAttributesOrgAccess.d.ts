/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The organization access level for the datastore. For example, 'contributor'.
 */
export declare type CreateAppsDatastoreRequestDataAttributesOrgAccess = typeof CONTRIBUTOR | typeof VIEWER | typeof MANAGER | UnparsedObject;
export declare const CONTRIBUTOR = "contributor";
export declare const VIEWER = "viewer";
export declare const MANAGER = "manager";
