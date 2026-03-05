/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLORawErrorBudgetRemaining } from "./SLORawErrorBudgetRemaining";
import { SLOState } from "./SLOState";
import { SLOTimeframe } from "./SLOTimeframe";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Overall status of the SLO by timeframes.
 */
export declare class SLOOverallStatuses {
    /**
     * Error message if SLO status or error budget could not be calculated.
     */
    "error"?: string;
    /**
     * Remaining error budget of the SLO in percentage.
     */
    "errorBudgetRemaining"?: number;
    /**
     * timestamp (UNIX time in seconds) of when the SLO status and error budget
     * were calculated.
     */
    "indexedAt"?: number;
    /**
     * Error budget remaining for an SLO.
     */
    "rawErrorBudgetRemaining"?: SLORawErrorBudgetRemaining;
    /**
     * The amount of decimal places the SLI value is accurate to.
     */
    "spanPrecision"?: number;
    /**
     * State of the SLO.
     */
    "state"?: SLOState;
    /**
     * The status of the SLO.
     */
    "status"?: number;
    /**
     * The target of the SLO.
     */
    "target"?: number;
    /**
     * The SLO time window options. Note that "custom" is not a valid option for creating
     * or updating SLOs. It is only used when querying SLO history over custom timeframes.
     */
    "timeframe"?: SLOTimeframe;
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
