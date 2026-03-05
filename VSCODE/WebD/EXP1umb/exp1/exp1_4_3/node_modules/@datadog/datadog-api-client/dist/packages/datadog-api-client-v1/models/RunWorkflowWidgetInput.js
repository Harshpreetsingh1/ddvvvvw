"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunWorkflowWidgetInput = void 0;
/**
 * Object to map a dashboard template variable to a workflow input.
 */
class RunWorkflowWidgetInput {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RunWorkflowWidgetInput.attributeTypeMap;
    }
}
exports.RunWorkflowWidgetInput = RunWorkflowWidgetInput;
/**
 * @ignore
 */
RunWorkflowWidgetInput.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RunWorkflowWidgetInput.js.map