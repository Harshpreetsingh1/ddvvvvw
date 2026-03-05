/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsFilter } from "./LogsFilter";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object describing the logs filter with corresponding category ID and name assignment.
 */
export declare class LogsSchemaCategoryMapperCategory {
    /**
     * Filter for logs.
     */
    "filter": LogsFilter;
    /**
     * ID to inject into the category.
     */
    "id": number;
    /**
     * Value to assign to target schema field.
     */
    "name": string;
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
