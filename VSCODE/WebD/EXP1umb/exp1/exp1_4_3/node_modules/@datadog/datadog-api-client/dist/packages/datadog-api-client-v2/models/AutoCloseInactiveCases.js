"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCloseInactiveCases = void 0;
/**
 * Auto-close inactive cases settings
 */
class AutoCloseInactiveCases {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AutoCloseInactiveCases.attributeTypeMap;
    }
}
exports.AutoCloseInactiveCases = AutoCloseInactiveCases;
/**
 * @ignore
 */
AutoCloseInactiveCases.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    maxInactiveTimeInSecs: {
        baseName: "max_inactive_time_in_secs",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AutoCloseInactiveCases.js.map