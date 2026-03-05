/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventAttributesAuthor } from "./ChangeEventAttributesAuthor";
import { ChangeEventAttributesChangedResource } from "./ChangeEventAttributesChangedResource";
import { ChangeEventAttributesImpactedResourcesItem } from "./ChangeEventAttributesImpactedResourcesItem";
import { EventSystemAttributes } from "./EventSystemAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Change event attributes.
 */
export declare class ChangeEventAttributes {
    /**
     * Aggregation key of the event.
     */
    "aggregationKey"?: string;
    /**
     * The entity that made the change.
     */
    "author"?: ChangeEventAttributesAuthor;
    /**
     * JSON object of change metadata.
     */
    "changeMetadata"?: any;
    /**
     * A uniquely identified resource.
     */
    "changedResource"?: ChangeEventAttributesChangedResource;
    /**
     * JSON object of event system attributes.
     */
    "evt"?: EventSystemAttributes;
    /**
     * A list of resources impacted by this change.
     */
    "impactedResources"?: Array<ChangeEventAttributesImpactedResourcesItem>;
    /**
     * The new state of the changed resource.
     */
    "newValue"?: any;
    /**
     * The previous state of the changed resource.
     */
    "prevValue"?: any;
    /**
     * Service that triggered the event.
     */
    "service"?: string;
    /**
     * POSIX timestamp of the event.
     */
    "timestamp"?: number;
    /**
     * The title of the event.
     */
    "title"?: string;
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
