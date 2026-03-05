/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCustomAttributesChangedResourceType } from "./ChangeEventCustomAttributesChangedResourceType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A uniquely identified resource.
 */
export declare class ChangeEventCustomAttributesChangedResource {
    /**
     * The name of the resource that was changed. Limited to 128 characters.
     */
    "name": string;
    /**
     * The type of the resource that was changed.
     */
    "type": ChangeEventCustomAttributesChangedResourceType;
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
