"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCanDeleteMonitorResponseData = void 0;
/**
 * Wrapper object with the list of monitor IDs.
 */
class CheckCanDeleteMonitorResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CheckCanDeleteMonitorResponseData.attributeTypeMap;
    }
}
exports.CheckCanDeleteMonitorResponseData = CheckCanDeleteMonitorResponseData;
/**
 * @ignore
 */
CheckCanDeleteMonitorResponseData.attributeTypeMap = {
    ok: {
        baseName: "ok",
        type: "Array<number>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CheckCanDeleteMonitorResponseData.js.map