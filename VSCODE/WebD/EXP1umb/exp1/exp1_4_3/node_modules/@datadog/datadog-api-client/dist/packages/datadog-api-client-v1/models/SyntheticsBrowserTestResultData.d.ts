/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestResultFailure } from "./SyntheticsBrowserTestResultFailure";
import { SyntheticsDevice } from "./SyntheticsDevice";
import { SyntheticsStepDetail } from "./SyntheticsStepDetail";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object containing results for your Synthetic browser test.
 */
export declare class SyntheticsBrowserTestResultData {
    /**
     * Type of browser device used for the browser test.
     */
    "browserType"?: string;
    /**
     * Browser version used for the browser test.
     */
    "browserVersion"?: string;
    /**
     * Object describing the device used to perform the Synthetic test.
     */
    "device"?: SyntheticsDevice;
    /**
     * Global duration in second of the browser test.
     */
    "duration"?: number;
    /**
     * Error returned for the browser test.
     */
    "error"?: string;
    /**
     * The browser test failure details.
     */
    "failure"?: SyntheticsBrowserTestResultFailure;
    /**
     * Whether or not the browser test was conducted.
     */
    "passed"?: boolean;
    /**
     * The amount of email received during the browser test.
     */
    "receivedEmailCount"?: number;
    /**
     * Starting URL for the browser test.
     */
    "startUrl"?: string;
    /**
     * Array containing the different browser test steps.
     */
    "stepDetails"?: Array<SyntheticsStepDetail>;
    /**
     * Whether or not a thumbnail is associated with the browser test.
     */
    "thumbnailsBucketKey"?: boolean;
    /**
     * Time in second to wait before the browser test starts after
     * reaching the start URL.
     */
    "timeToInteractive"?: number;
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
