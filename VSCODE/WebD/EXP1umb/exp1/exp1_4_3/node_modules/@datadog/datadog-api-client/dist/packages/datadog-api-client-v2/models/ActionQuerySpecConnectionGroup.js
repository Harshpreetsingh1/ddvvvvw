"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionQuerySpecConnectionGroup = void 0;
/**
 * The connection group to use for an action query.
 */
class ActionQuerySpecConnectionGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionQuerySpecConnectionGroup.attributeTypeMap;
    }
}
exports.ActionQuerySpecConnectionGroup = ActionQuerySpecConnectionGroup;
/**
 * @ignore
 */
ActionQuerySpecConnectionGroup.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
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
//# sourceMappingURL=ActionQuerySpecConnectionGroup.js.map