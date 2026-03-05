"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestRumSettings = void 0;
/**
 * The RUM data collection settings for the Synthetic browser test.
 * **Note:** There are 3 ways to format RUM settings:
 *
 * `{ isEnabled: false }`
 * RUM data is not collected.
 *
 * `{ isEnabled: true }`
 * RUM data is collected from the Synthetic test's default application.
 *
 * `{ isEnabled: true, applicationId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", clientTokenId: 12345 }`
 * RUM data is collected using the specified application.
 */
class SyntheticsBrowserTestRumSettings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestRumSettings.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestRumSettings = SyntheticsBrowserTestRumSettings;
/**
 * @ignore
 */
SyntheticsBrowserTestRumSettings.attributeTypeMap = {
    applicationId: {
        baseName: "applicationId",
        type: "string",
    },
    clientTokenId: {
        baseName: "clientTokenId",
        type: "number",
        format: "int64",
    },
    isEnabled: {
        baseName: "isEnabled",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestRumSettings.js.map