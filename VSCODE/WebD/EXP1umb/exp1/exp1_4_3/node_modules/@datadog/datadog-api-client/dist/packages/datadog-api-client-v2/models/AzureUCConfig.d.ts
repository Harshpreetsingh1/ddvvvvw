/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Azure config.
 */
export declare class AzureUCConfig {
    /**
     * The tenant ID of the Azure account.
     */
    "accountId": string;
    /**
     * The client ID of the Azure account.
     */
    "clientId": string;
    /**
     * The timestamp when the Azure config was created.
     */
    "createdAt"?: string;
    /**
     * The dataset type of the Azure config.
     */
    "datasetType": string;
    /**
     * The error messages for the Azure config.
     */
    "errorMessages"?: Array<string>;
    /**
     * The name of the configured Azure Export.
     */
    "exportName": string;
    /**
     * The path where the Azure Export is saved.
     */
    "exportPath": string;
    /**
     * The ID of the Azure config.
     */
    "id"?: string;
    /**
     * The number of months the report has been backfilled.
     */
    "months"?: number;
    /**
     * The scope of your observed subscription.
     */
    "scope": string;
    /**
     * The status of the Azure config.
     */
    "status": string;
    /**
     * The timestamp when the Azure config status was last updated.
     */
    "statusUpdatedAt"?: string;
    /**
     * The name of the storage account where the Azure Export is saved.
     */
    "storageAccount": string;
    /**
     * The name of the storage container where the Azure Export is saved.
     */
    "storageContainer": string;
    /**
     * The timestamp when the Azure config was last updated.
     */
    "updatedAt"?: string;
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
