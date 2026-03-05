/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CasePriority } from "./CasePriority";
import { CaseStatus } from "./CaseStatus";
import { CaseStatusGroup } from "./CaseStatusGroup";
import { CaseType } from "./CaseType";
import { CustomAttributeValue } from "./CustomAttributeValue";
import { JiraIssue } from "./JiraIssue";
import { ServiceNowTicket } from "./ServiceNowTicket";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Case resource attributes
 */
export declare class CaseAttributes {
    /**
     * Timestamp of when the case was archived
     */
    "archivedAt"?: Date;
    /**
     * The definition of `CaseObjectAttributes` object.
     */
    "attributes"?: {
        [key: string]: Array<string>;
    };
    /**
     * Timestamp of when the case was closed
     */
    "closedAt"?: Date;
    /**
     * Timestamp of when the case was created
     */
    "createdAt"?: Date;
    /**
     * Case custom attributes
     */
    "customAttributes"?: {
        [key: string]: CustomAttributeValue;
    };
    /**
     * Description
     */
    "description"?: string;
    /**
     * Jira issue attached to case
     */
    "jiraIssue"?: JiraIssue;
    /**
     * Key
     */
    "key"?: string;
    /**
     * Timestamp of when the case was last modified
     */
    "modifiedAt"?: Date;
    /**
     * Case priority
     */
    "priority"?: CasePriority;
    /**
     * ServiceNow ticket attached to case
     */
    "serviceNowTicket"?: ServiceNowTicket;
    /**
     * Deprecated way of representing the case status, which only supports OPEN, IN_PROGRESS, and CLOSED statuses. Use `status_name` instead.
     */
    "status"?: CaseStatus;
    /**
     * Status group of the case.
     */
    "statusGroup"?: CaseStatusGroup;
    /**
     * Status of the case. Must be one of the existing statuses for the case's type.
     */
    "statusName"?: string;
    /**
     * Title
     */
    "title"?: string;
    /**
     * Case type
     */
    "type"?: CaseType;
    /**
     * Case type UUID
     */
    "typeId"?: string;
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
