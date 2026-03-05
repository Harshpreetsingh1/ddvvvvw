"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMetaInstallMethod = void 0;
/**
 * Agent install method.
 */
class HostMetaInstallMethod {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMetaInstallMethod.attributeTypeMap;
    }
}
exports.HostMetaInstallMethod = HostMetaInstallMethod;
/**
 * @ignore
 */
HostMetaInstallMethod.attributeTypeMap = {
    installerVersion: {
        baseName: "installer_version",
        type: "string",
    },
    tool: {
        baseName: "tool",
        type: "string",
    },
    toolVersion: {
        baseName: "tool_version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMetaInstallMethod.js.map