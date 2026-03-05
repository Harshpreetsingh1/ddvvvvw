/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The category of the WAF Rule, can be either `business_logic`, `attack_attempt` or `security_response`.
 */
export declare type ApplicationSecurityWafCustomRuleTagsCategory = typeof ATTACK_ATTEMPT | typeof BUSINESS_LOGIC | typeof SECURITY_RESPONSE | UnparsedObject;
export declare const ATTACK_ATTEMPT = "attack_attempt";
export declare const BUSINESS_LOGIC = "business_logic";
export declare const SECURITY_RESPONSE = "security_response";
