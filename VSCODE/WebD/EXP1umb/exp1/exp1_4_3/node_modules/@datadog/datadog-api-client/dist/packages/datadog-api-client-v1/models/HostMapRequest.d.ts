/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Updated host map.
 */
export declare class HostMapRequest {
    /**
     * The log query.
     */
    "apmQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "eventQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "logQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "networkQuery"?: LogQueryDefinition;
    /**
     * The process query to use in the widget.
     */
    "processQuery"?: ProcessQueryDefinition;
    /**
     * The log query.
     */
    "profileMetricsQuery"?: LogQueryDefinition;
    /**
     * Query definition.
     */
    "q"?: string;
    /**
     * The log query.
     */
    "rumQuery"?: LogQueryDefinition;
    /**
     * The log query.
     */
    "securityQuery"?: LogQueryDefinition;
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
