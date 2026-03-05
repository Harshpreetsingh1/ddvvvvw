/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Host } from "./Host";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response with Host information from Datadog.
 */
export declare class HostListResponse {
    /**
     * Array of hosts.
     */
    "hostList"?: Array<Host>;
    /**
     * Number of host matching the query.
     */
    "totalMatching"?: number;
    /**
     * Number of host returned.
     */
    "totalReturned"?: number;
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
