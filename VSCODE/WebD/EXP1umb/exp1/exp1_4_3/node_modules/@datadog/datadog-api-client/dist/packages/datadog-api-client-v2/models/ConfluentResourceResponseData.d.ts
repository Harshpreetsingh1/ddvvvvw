/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";
import { ConfluentResourceType } from "./ConfluentResourceType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Confluent Cloud resource data.
 */
export declare class ConfluentResourceResponseData {
    /**
     * Model representation of a Confluent Cloud resource.
     */
    "attributes": ConfluentResourceResponseAttributes;
    /**
     * The ID associated with the Confluent resource.
     */
    "id": string;
    /**
     * The JSON:API type for this request.
     */
    "type": ConfluentResourceType;
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
