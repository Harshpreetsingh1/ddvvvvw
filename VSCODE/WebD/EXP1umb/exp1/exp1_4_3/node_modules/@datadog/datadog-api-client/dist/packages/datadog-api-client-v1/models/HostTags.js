"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostTags = void 0;
/**
 * Host name and an array of its tags
 */
class HostTags {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostTags.attributeTypeMap;
    }
}
exports.HostTags = HostTags;
/**
 * @ignore
 */
HostTags.attributeTypeMap = {
    host: {
        baseName: "host",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostTags.js.map