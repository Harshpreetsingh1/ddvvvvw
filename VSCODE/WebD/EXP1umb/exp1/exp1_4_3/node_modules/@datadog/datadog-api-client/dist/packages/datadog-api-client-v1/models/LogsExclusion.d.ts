/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsExclusionFilter } from "./LogsExclusionFilter";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Represents the index exclusion filter object from configuration API.
 */
export declare class LogsExclusion {
    /**
     * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
     */
    "filter"?: LogsExclusionFilter;
    /**
     * Whether or not the exclusion filter is active.
     */
    "isEnabled"?: boolean;
    /**
     * Name of the index exclusion filter.
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
