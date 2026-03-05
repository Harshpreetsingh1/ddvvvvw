/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseNotificationRuleAttributes } from "./CaseNotificationRuleAttributes";
import { CaseNotificationRuleResourceType } from "./CaseNotificationRuleResourceType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A notification rule for case management
 */
export declare class CaseNotificationRule {
    /**
     * Notification rule attributes
     */
    "attributes": CaseNotificationRuleAttributes;
    /**
     * The notification rule's identifier
     */
    "id": string;
    /**
     * Notification rule resource type
     */
    "type": CaseNotificationRuleResourceType;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
