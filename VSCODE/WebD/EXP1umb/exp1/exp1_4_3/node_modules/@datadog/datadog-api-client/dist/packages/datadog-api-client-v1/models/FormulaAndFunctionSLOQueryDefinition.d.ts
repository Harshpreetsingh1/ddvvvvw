/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionSLODataSource } from "./FormulaAndFunctionSLODataSource";
import { FormulaAndFunctionSLOGroupMode } from "./FormulaAndFunctionSLOGroupMode";
import { FormulaAndFunctionSLOMeasure } from "./FormulaAndFunctionSLOMeasure";
import { FormulaAndFunctionSLOQueryType } from "./FormulaAndFunctionSLOQueryType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A formula and functions metrics query.
 */
export declare class FormulaAndFunctionSLOQueryDefinition {
    /**
     * Additional filters applied to the SLO query.
     */
    "additionalQueryFilters"?: string;
    /**
     * The source organization UUID for cross organization queries. Feature in Private Beta.
     */
    "crossOrgUuids"?: Array<string>;
    /**
     * Data source for SLO measures queries.
     */
    "dataSource": FormulaAndFunctionSLODataSource;
    /**
     * Group mode to query measures.
     */
    "groupMode"?: FormulaAndFunctionSLOGroupMode;
    /**
     * SLO measures queries.
     */
    "measure": FormulaAndFunctionSLOMeasure;
    /**
     * Name of the query for use in formulas.
     */
    "name"?: string;
    /**
     * ID of an SLO to query measures.
     */
    "sloId": string;
    /**
     * Name of the query for use in formulas.
     */
    "sloQueryType"?: FormulaAndFunctionSLOQueryType;
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
