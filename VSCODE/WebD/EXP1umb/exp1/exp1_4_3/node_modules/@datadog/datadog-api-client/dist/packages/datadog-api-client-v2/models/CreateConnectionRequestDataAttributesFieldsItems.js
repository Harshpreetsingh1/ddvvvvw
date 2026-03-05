"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConnectionRequestDataAttributesFieldsItems = void 0;
class CreateConnectionRequestDataAttributesFieldsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateConnectionRequestDataAttributesFieldsItems.attributeTypeMap;
    }
}
exports.CreateConnectionRequestDataAttributesFieldsItems = CreateConnectionRequestDataAttributesFieldsItems;
/**
 * @ignore
 */
CreateConnectionRequestDataAttributesFieldsItems.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    sourceName: {
        baseName: "source_name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateConnectionRequestDataAttributesFieldsItems.js.map