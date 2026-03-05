/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionQuerySpecConnectionGroup } from "./ActionQuerySpecConnectionGroup";
import { ActionQuerySpecInputs } from "./ActionQuerySpecInputs";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The action query spec object.
 */
export declare class ActionQuerySpecObject {
    /**
     * The connection group to use for an action query.
     */
    "connectionGroup"?: ActionQuerySpecConnectionGroup;
    /**
     * The ID of the custom connection to use for this action query.
     */
    "connectionId"?: string;
    /**
     * The fully qualified name of the action type.
     */
    "fqn": string;
    /**
     * The inputs to the action query. These are the values that are passed to the action when it is triggered.
     */
    "inputs"?: ActionQuerySpecInputs;
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
