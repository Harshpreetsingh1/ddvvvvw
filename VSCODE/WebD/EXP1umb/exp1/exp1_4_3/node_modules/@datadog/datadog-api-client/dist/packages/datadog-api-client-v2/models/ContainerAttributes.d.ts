/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for a container.
 */
export declare class ContainerAttributes {
    /**
     * The ID of the container.
     */
    "containerId"?: string;
    /**
     * Time the container was created.
     */
    "createdAt"?: string;
    /**
     * Hostname of the host running the container.
     */
    "host"?: string;
    /**
     * Digest of the compressed image manifest.
     */
    "imageDigest"?: string;
    /**
     * Name of the associated container image.
     */
    "imageName"?: string;
    /**
     * List of image tags associated with the container image.
     */
    "imageTags"?: Array<string>;
    /**
     * Name of the container.
     */
    "name"?: string;
    /**
     * Time the container was started.
     */
    "startedAt"?: string;
    /**
     * State of the container. This depends on the container runtime.
     */
    "state"?: string;
    /**
     * List of tags associated with the container.
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
