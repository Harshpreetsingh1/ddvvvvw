/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsURLParserType } from "./LogsURLParserType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * This processor extracts query parameters and other important parameters from a URL.
 */
export declare class LogsURLParser {
    /**
     * Whether or not the processor is enabled.
     */
    "isEnabled"?: boolean;
    /**
     * Name of the processor.
     */
    "name"?: string;
    /**
     * Normalize the ending slashes or not.
     */
    "normalizeEndingSlashes"?: boolean;
    /**
     * Array of source attributes.
     */
    "sources": Array<string>;
    /**
     * Name of the parent attribute that contains all the extracted details from the `sources`.
     */
    "target": string;
    /**
     * Type of logs URL parser.
     */
    "type": LogsURLParserType;
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
