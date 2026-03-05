"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetEvent = void 0;
/**
 * Event overlay control options.
 *
 * See the dedicated [Events JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/widget_json/#events-schema)
 * to learn how to build the `<EVENTS_SCHEMA>`.
 */
class WidgetEvent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetEvent.attributeTypeMap;
    }
}
exports.WidgetEvent = WidgetEvent;
/**
 * @ignore
 */
WidgetEvent.attributeTypeMap = {
    q: {
        baseName: "q",
        type: "string",
        required: true,
    },
    tagsExecution: {
        baseName: "tags_execution",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetEvent.js.map