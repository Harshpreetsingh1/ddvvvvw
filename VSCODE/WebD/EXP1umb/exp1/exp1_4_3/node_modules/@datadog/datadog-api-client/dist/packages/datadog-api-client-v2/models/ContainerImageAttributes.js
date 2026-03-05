"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerImageAttributes = void 0;
/**
 * Attributes for a Container Image.
 */
class ContainerImageAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ContainerImageAttributes.attributeTypeMap;
    }
}
exports.ContainerImageAttributes = ContainerImageAttributes;
/**
 * @ignore
 */
ContainerImageAttributes.attributeTypeMap = {
    containerCount: {
        baseName: "container_count",
        type: "number",
        format: "int64",
    },
    imageFlavors: {
        baseName: "image_flavors",
        type: "Array<ContainerImageFlavor>",
    },
    imageTags: {
        baseName: "image_tags",
        type: "Array<string>",
    },
    imagesBuiltAt: {
        baseName: "images_built_at",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    osArchitectures: {
        baseName: "os_architectures",
        type: "Array<string>",
    },
    osNames: {
        baseName: "os_names",
        type: "Array<string>",
    },
    osVersions: {
        baseName: "os_versions",
        type: "Array<string>",
    },
    publishedAt: {
        baseName: "published_at",
        type: "string",
    },
    registry: {
        baseName: "registry",
        type: "string",
    },
    repoDigest: {
        baseName: "repo_digest",
        type: "string",
    },
    repository: {
        baseName: "repository",
        type: "string",
    },
    shortImage: {
        baseName: "short_image",
        type: "string",
    },
    sizes: {
        baseName: "sizes",
        type: "Array<number>",
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    vulnerabilityCount: {
        baseName: "vulnerability_count",
        type: "ContainerImageVulnerabilities",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ContainerImageAttributes.js.map