/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateJiraIssueRequestDataAttributes } from "./CreateJiraIssueRequestDataAttributes";
import { CreateJiraIssueRequestDataRelationships } from "./CreateJiraIssueRequestDataRelationships";
import { JiraIssuesDataType } from "./JiraIssuesDataType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Data of the Jira issue to create.
 */
export declare class CreateJiraIssueRequestData {
    /**
     * Attributes of the Jira issue to create.
     */
    "attributes"?: CreateJiraIssueRequestDataAttributes;
    /**
     * Relationships of the Jira issue to create.
     */
    "relationships"?: CreateJiraIssueRequestDataRelationships;
    /**
     * Jira issues resource type.
     */
    "type": JiraIssuesDataType;
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
