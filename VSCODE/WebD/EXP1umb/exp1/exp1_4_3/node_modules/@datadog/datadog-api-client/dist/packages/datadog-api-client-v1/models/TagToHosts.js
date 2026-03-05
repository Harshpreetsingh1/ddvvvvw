"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagToHosts = void 0;
/**
 * In this object, the key is the tag, and the value is a list of host names that are reporting that tag.
 */
class TagToHosts {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TagToHosts.attributeTypeMap;
    }
}
exports.TagToHosts = TagToHosts;
/**
 * @ignore
 */
TagToHosts.attributeTypeMap = {
    tags: {
        baseName: "tags",
        type: "{ [key: string]: Array<string>; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TagToHosts.js.map