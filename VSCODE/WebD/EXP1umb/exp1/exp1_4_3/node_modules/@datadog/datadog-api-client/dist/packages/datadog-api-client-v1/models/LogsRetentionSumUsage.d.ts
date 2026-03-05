/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object containing indexed logs usage grouped by retention period and summed.
 */
export declare class LogsRetentionSumUsage {
    /**
     * Total indexed logs for this retention period.
     */
    "logsIndexedLogsUsageSum"?: number;
    /**
     * Live indexed logs for this retention period.
     */
    "logsLiveIndexedLogsUsageSum"?: number;
    /**
     * Rehydrated indexed logs for this retention period.
     */
    "logsRehydratedIndexedLogsUsageSum"?: number;
    /**
     * The retention period in days or "custom" for all custom retention periods.
     */
    "retention"?: string;
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
