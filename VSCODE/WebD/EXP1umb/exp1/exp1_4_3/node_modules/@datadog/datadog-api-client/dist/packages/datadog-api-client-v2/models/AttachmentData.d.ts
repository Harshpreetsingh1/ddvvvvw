/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttachmentDataAttributes } from "./AttachmentDataAttributes";
import { AttachmentDataRelationships } from "./AttachmentDataRelationships";
import { IncidentAttachmentType } from "./IncidentAttachmentType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attachment data from a response.
 */
export declare class AttachmentData {
    /**
     * The attachment's attributes.
     */
    "attributes": AttachmentDataAttributes;
    /**
     * The unique identifier of the attachment.
     */
    "id": string;
    /**
     * The attachment's resource relationships.
     */
    "relationships": AttachmentDataRelationships;
    /**
     * The incident attachment resource type.
     */
    "type": IncidentAttachmentType;
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
