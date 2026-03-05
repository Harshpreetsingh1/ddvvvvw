"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationKey = void 0;
/**
 * An application key with its associated metadata.
 */
class ApplicationKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationKey.attributeTypeMap;
    }
}
exports.ApplicationKey = ApplicationKey;
/**
 * @ignore
 */
ApplicationKey.attributeTypeMap = {
    hash: {
        baseName: "hash",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    owner: {
        baseName: "owner",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationKey.js.map