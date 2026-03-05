/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CoverageSummaryCodeownerStats } from "./CoverageSummaryCodeownerStats";
import { CoverageSummaryServiceStats } from "./CoverageSummaryServiceStats";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes object for code coverage summary response.
 */
export declare class CoverageSummaryAttributes {
    /**
     * Coverage statistics broken down by code owner.
     */
    "codeowners"?: {
        [key: string]: CoverageSummaryCodeownerStats;
    };
    /**
     * Total number of coverage flags evaluated.
     */
    "evaluatedFlagsCount"?: number;
    /**
     * Total number of coverage reports evaluated.
     */
    "evaluatedReportsCount"?: number;
    /**
     * Overall patch coverage percentage.
     */
    "patchCoverage"?: number;
    /**
     * Coverage statistics broken down by service.
     */
    "services"?: {
        [key: string]: CoverageSummaryServiceStats;
    };
    /**
     * Overall total coverage percentage.
     */
    "totalCoverage"?: number;
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
