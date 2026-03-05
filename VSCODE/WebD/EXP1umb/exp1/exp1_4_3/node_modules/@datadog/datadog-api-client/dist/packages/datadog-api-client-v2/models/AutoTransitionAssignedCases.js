"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTransitionAssignedCases = void 0;
/**
 * Auto-transition assigned cases settings
 */
class AutoTransitionAssignedCases {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AutoTransitionAssignedCases.attributeTypeMap;
    }
}
exports.AutoTransitionAssignedCases = AutoTransitionAssignedCases;
/**
 * @ignore
 */
AutoTransitionAssignedCases.attributeTypeMap = {
    autoTransitionAssignedCasesOnSelfAssigned: {
        baseName: "auto_transition_assigned_cases_on_self_assigned",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AutoTransitionAssignedCases.js.map