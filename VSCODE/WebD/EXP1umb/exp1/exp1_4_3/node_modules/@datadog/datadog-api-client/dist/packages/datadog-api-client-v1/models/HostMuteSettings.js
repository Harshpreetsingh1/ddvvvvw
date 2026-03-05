"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMuteSettings = void 0;
/**
 * Combination of settings to mute a host.
 */
class HostMuteSettings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMuteSettings.attributeTypeMap;
    }
}
exports.HostMuteSettings = HostMuteSettings;
/**
 * @ignore
 */
HostMuteSettings.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    override: {
        baseName: "override",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HostMuteSettings.js.map