/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Data source for event platform-based queries.
 */
export declare type MonitorFormulaAndFunctionEventsDataSource = typeof RUM | typeof CI_PIPELINES | typeof CI_TESTS | typeof AUDIT | typeof EVENTS | typeof LOGS | typeof SPANS | typeof DATABASE_QUERIES | typeof NETWORK | typeof NETWORK_PATH | UnparsedObject;
export declare const RUM = "rum";
export declare const CI_PIPELINES = "ci_pipelines";
export declare const CI_TESTS = "ci_tests";
export declare const AUDIT = "audit";
export declare const EVENTS = "events";
export declare const LOGS = "logs";
export declare const SPANS = "spans";
export declare const DATABASE_QUERIES = "database_queries";
export declare const NETWORK = "network";
export declare const NETWORK_PATH = "network_path";
