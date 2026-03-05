"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdateAttributesAttributes = void 0;
/**
 * Case update attributes attributes
 */
class CaseUpdateAttributesAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseUpdateAttributesAttributes.attributeTypeMap;
    }
}
exports.CaseUpdateAttributesAttributes = CaseUpdateAttributesAttributes;
/**
 * @ignore
 */
CaseUpdateAttributesAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: Array<string>; }",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseUpdateAttributesAttributes.js.map