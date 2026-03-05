"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateDescriptionAttributes = void 0;
/**
 * Case update description attributes
 */
class CaseUpdateDescriptionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateDescriptionAttributes.attributeTypeMap;
    }
}
exports.CaseUpdateDescriptionAttributes = CaseUpdateDescriptionAttributes;
/**
 * @ignore
 */
CaseUpdateDescriptionAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateDescriptionAttributes.js.map