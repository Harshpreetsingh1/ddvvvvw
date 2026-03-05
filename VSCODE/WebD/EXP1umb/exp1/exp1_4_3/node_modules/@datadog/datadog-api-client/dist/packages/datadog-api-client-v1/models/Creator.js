"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
/**
 * Object describing the creator of the shared element.
 */
class Creator {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Creator.attributeTypeMap;
    }
}
exports.Creator = Creator;
/**
 * @ignore
 */
Creator.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Creator.js.map