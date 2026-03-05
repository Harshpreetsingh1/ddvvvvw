/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountResourceAttributes } from "./ConfluentAccountResourceAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes associated with the account creation request.
 */
export declare class ConfluentAccountCreateRequestAttributes {
    /**
     * The API key associated with your Confluent account.
     */
    "apiKey": string;
    /**
     * The API secret associated with your Confluent account.
     */
    "apiSecret": string;
    /**
     * A list of Confluent resources associated with the Confluent account.
     */
    "resources"?: Array<ConfluentAccountResourceAttributes>;
    /**
     * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
     */
    "tags"?: Array<string>;
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
