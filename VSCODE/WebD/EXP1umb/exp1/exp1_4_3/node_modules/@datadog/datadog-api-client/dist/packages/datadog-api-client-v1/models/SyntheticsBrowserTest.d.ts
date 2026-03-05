/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestType } from "./SyntheticsBrowserTestType";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object containing details about a Synthetic browser test.
 */
export declare class SyntheticsBrowserTest {
    /**
     * Configuration object for a Synthetic browser test.
     */
    "config": SyntheticsBrowserTestConfig;
    /**
     * Array of locations used to run the test.
     */
    "locations": Array<string>;
    /**
     * Notification message associated with the test. Message can either be text or an empty string.
     */
    "message": string;
    /**
     * The associated monitor ID.
     */
    "monitorId"?: number;
    /**
     * Name of the test.
     */
    "name": string;
    /**
     * Object describing the extra options for a Synthetic test.
     */
    "options": SyntheticsTestOptions;
    /**
     * The public ID of the test.
     */
    "publicId"?: string;
    /**
     * Define whether you want to start (`live`) or pause (`paused`) a
     * Synthetic test.
     */
    "status"?: SyntheticsTestPauseStatus;
    /**
     * Array of steps for the test.
     */
    "steps"?: Array<SyntheticsStep>;
    /**
     * Array of tags attached to the test.
     */
    "tags"?: Array<string>;
    /**
     * Type of the Synthetic test, `browser`.
     */
    "type": SyntheticsBrowserTestType;
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
