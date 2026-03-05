/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPITestResultShort } from "./SyntheticsAPITestResultShort";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object with the latest Synthetic API test run.
 */
export declare class SyntheticsGetAPITestLatestResultsResponse {
    /**
     * Timestamp of the latest API test run.
     */
    "lastTimestampFetched"?: number;
    /**
     * Result of the latest API test run.
     */
    "results"?: Array<SyntheticsAPITestResultShort>;
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
