/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSLogsLambda } from "./AWSLogsLambda";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */
export declare class AWSLogsListResponse {
    /**
     * Your AWS Account ID without dashes.
     */
    "accountId"?: string;
    /**
     * List of ARNs configured in your Datadog account.
     */
    "lambdas"?: Array<AWSLogsLambda>;
    /**
     * Array of services IDs.
     */
    "services"?: Array<string>;
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
