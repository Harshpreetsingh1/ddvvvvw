/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateRulesetRequestDataAttributesRulesItemsQuery } from "./CreateRulesetRequestDataAttributesRulesItemsQuery";
import { CreateRulesetRequestDataAttributesRulesItemsReferenceTable } from "./CreateRulesetRequestDataAttributesRulesItemsReferenceTable";
import { DataAttributesRulesItemsMapping } from "./DataAttributesRulesItemsMapping";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `CreateRulesetRequestDataAttributesRulesItems` object.
 */
export declare class CreateRulesetRequestDataAttributesRulesItems {
    /**
     * The `items` `enabled`.
     */
    "enabled": boolean;
    /**
     * The definition of `DataAttributesRulesItemsMapping` object.
     */
    "mapping"?: DataAttributesRulesItemsMapping;
    /**
     * The `items` `metadata`.
     */
    "metadata"?: {
        [key: string]: string;
    };
    /**
     * The `items` `name`.
     */
    "name": string;
    /**
     * The definition of `CreateRulesetRequestDataAttributesRulesItemsQuery` object.
     */
    "query"?: CreateRulesetRequestDataAttributesRulesItemsQuery;
    /**
     * The definition of `CreateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
     */
    "referenceTable"?: CreateRulesetRequestDataAttributesRulesItemsReferenceTable;
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
