"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEventTriggerWrapper = void 0;
/**
 * Schema for a Change Event-based trigger.
 */
class ChangeEventTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeEventTriggerWrapper.attributeTypeMap;
    }
}
exports.ChangeEventTriggerWrapper = ChangeEventTriggerWrapper;
/**
 * @ignore
 */
ChangeEventTriggerWrapper.attributeTypeMap = {
    changeEventTrigger: {
        baseName: "changeEventTrigger",
        type: "any",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeEventTriggerWrapper.js.map