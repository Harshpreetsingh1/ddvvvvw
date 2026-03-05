/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * CI visibility usage in a given hour.
 */
export declare class UsageCIVisibilityHour {
    /**
     * The number of spans for pipelines in the queried hour.
     */
    "ciPipelineIndexedSpans"?: number;
    /**
     * The number of spans for tests in the queried hour.
     */
    "ciTestIndexedSpans"?: number;
    /**
     * Shows the total count of all active Git committers for Intelligent Test Runner in the current month. A committer is active if they commit at least 3 times in a given month.
     */
    "ciVisibilityItrCommitters"?: number;
    /**
     * Shows the total count of all active Git committers for Pipelines in the current month. A committer is active if they commit at least 3 times in a given month.
     */
    "ciVisibilityPipelineCommitters"?: number;
    /**
     * The total count of all active Git committers for tests in the current month. A committer is active if they commit at least 3 times in a given month.
     */
    "ciVisibilityTestCommitters"?: number;
    /**
     * The organization name.
     */
    "orgName"?: string;
    /**
     * The organization public ID.
     */
    "publicId"?: string;
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
