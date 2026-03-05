/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BillConfig } from "./BillConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for Azure config Post Request.
 */
export declare class AzureUCConfigPostRequestAttributes {
    /**
     * The tenant ID of the Azure account.
     */
    "accountId": string;
    /**
     * Bill config.
     */
    "actualBillConfig": BillConfig;
    /**
     * Bill config.
     */
    "amortizedBillConfig": BillConfig;
    /**
     * The client ID of the Azure account.
     */
    "clientId": string;
    /**
     * The scope of your observed subscription.
     */
    "scope": string;
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
