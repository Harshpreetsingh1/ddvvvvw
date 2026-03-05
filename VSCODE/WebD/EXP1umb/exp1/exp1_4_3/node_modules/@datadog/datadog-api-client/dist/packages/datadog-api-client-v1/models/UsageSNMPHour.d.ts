/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The number of SNMP devices for each hour for a given organization.
 */
export declare class UsageSNMPHour {
    /**
     * The hour for the usage.
     */
    "hour"?: Date;
    /**
     * The organization name.
     */
    "orgName"?: string;
    /**
     * The organization public ID.
     */
    "publicId"?: string;
    /**
     * Contains the number of SNMP devices.
     */
    "snmpDevices"?: number;
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
