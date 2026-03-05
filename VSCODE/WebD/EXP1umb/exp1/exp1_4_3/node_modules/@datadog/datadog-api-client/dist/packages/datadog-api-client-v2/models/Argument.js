"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Argument = void 0;
class Argument {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Argument.attributeTypeMap;
    }
}
exports.Argument = Argument;
/**
 * @ignore
 */
Argument.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Argument.js.map