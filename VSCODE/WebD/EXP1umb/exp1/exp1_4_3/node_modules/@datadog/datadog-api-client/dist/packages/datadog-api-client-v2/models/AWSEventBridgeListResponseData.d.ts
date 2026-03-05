/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSEventBridgeListResponseAttributes } from "./AWSEventBridgeListResponseAttributes";
import { AWSEventBridgeType } from "./AWSEventBridgeType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Amazon EventBridge list response data.
 */
export declare class AWSEventBridgeListResponseData {
    /**
     * An object describing the EventBridge configuration for multiple accounts.
     */
    "attributes": AWSEventBridgeListResponseAttributes;
    /**
     * The ID of the Amazon EventBridge list response data.
     */
    "id": string;
    /**
     * Amazon EventBridge resource type.
     */
    "type": AWSEventBridgeType;
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
