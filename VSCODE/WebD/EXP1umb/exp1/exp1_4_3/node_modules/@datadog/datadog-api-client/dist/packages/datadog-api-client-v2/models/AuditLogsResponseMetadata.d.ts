/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuditLogsResponsePage } from "./AuditLogsResponsePage";
import { AuditLogsResponseStatus } from "./AuditLogsResponseStatus";
import { AuditLogsWarning } from "./AuditLogsWarning";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The metadata associated with a request.
 */
export declare class AuditLogsResponseMetadata {
    /**
     * Time elapsed in milliseconds.
     */
    "elapsed"?: number;
    /**
     * Paging attributes.
     */
    "page"?: AuditLogsResponsePage;
    /**
     * The identifier of the request.
     */
    "requestId"?: string;
    /**
     * The status of the response.
     */
    "status"?: AuditLogsResponseStatus;
    /**
     * A list of warnings (non-fatal errors) encountered. Partial results may return if
     * warnings are present in the response.
     */
    "warnings"?: Array<AuditLogsWarning>;
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
