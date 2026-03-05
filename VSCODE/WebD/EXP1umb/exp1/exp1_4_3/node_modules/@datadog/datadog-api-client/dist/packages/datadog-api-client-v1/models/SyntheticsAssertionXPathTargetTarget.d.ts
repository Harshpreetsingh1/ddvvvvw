/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionTargetValue } from "./SyntheticsAssertionTargetValue";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Composed target for `validatesXPath` operator.
 */
export declare class SyntheticsAssertionXPathTargetTarget {
    /**
     * The specific operator to use on the path.
     */
    "operator"?: string;
    /**
     * Value used by the operator in assertions. Can be either a number or string.
     */
    "targetValue"?: SyntheticsAssertionTargetValue;
    /**
     * The X path to assert.
     */
    "xPath"?: string;
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
