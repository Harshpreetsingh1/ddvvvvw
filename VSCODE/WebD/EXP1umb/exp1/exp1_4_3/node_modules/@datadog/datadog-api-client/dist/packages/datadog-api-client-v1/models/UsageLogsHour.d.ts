/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Hour usage for logs.
 */
export declare class UsageLogsHour {
    /**
     * Contains the number of billable log bytes ingested.
     */
    "billableIngestedBytes"?: number;
    /**
     * The hour for the usage.
     */
    "hour"?: Date;
    /**
     * Contains the number of log events indexed.
     */
    "indexedEventsCount"?: number;
    /**
     * Contains the number of log bytes ingested.
     */
    "ingestedEventsBytes"?: number;
    /**
     * Contains the number of logs forwarded bytes (data available as of April 1st 2023)
     */
    "logsForwardingEventsBytes"?: number;
    /**
     * Contains the number of live log events indexed (data available as of December 1, 2020).
     */
    "logsLiveIndexedCount"?: number;
    /**
     * Contains the number of live log bytes ingested (data available as of December 1, 2020).
     */
    "logsLiveIngestedBytes"?: number;
    /**
     * Contains the number of rehydrated log events indexed (data available as of December 1, 2020).
     */
    "logsRehydratedIndexedCount"?: number;
    /**
     * Contains the number of rehydrated log bytes ingested (data available as of December 1, 2020).
     */
    "logsRehydratedIngestedBytes"?: number;
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
