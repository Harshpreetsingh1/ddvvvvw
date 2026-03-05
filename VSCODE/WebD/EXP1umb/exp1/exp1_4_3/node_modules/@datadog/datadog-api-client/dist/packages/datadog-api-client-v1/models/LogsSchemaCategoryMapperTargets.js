"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsSchemaCategoryMapperTargets = void 0;
/**
 * Name of the target attributes which value is defined by the matching category.
 */
class LogsSchemaCategoryMapperTargets {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsSchemaCategoryMapperTargets.attributeTypeMap;
    }
}
exports.LogsSchemaCategoryMapperTargets = LogsSchemaCategoryMapperTargets;
/**
 * @ignore
 */
LogsSchemaCategoryMapperTargets.attributeTypeMap = {
    id: {
        baseName: "id",
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
//# sourceMappingURL=LogsSchemaCategoryMapperTargets.js.map