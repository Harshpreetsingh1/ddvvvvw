/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppDefinitionType } from "./AppDefinitionType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The data object containing the app ID.
 */
export declare class CreateAppResponseData {
    /**
     * The ID of the created app.
     */
    "id": string;
    /**
     * The app definition type.
     */
    "type": AppDefinitionType;
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
