"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventQueryDefinition = void 0;
/**
 * The event query.
 */
class EventQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventQueryDefinition.attributeTypeMap;
    }
}
exports.EventQueryDefinition = EventQueryDefinition;
/**
 * @ignore
 */
EventQueryDefinition.attributeTypeMap = {
    search: {
        baseName: "search",
        type: "string",
        required: true,
    },
    tagsExecution: {
        baseName: "tags_execution",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventQueryDefinition.js.map