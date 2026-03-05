"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsDevice = void 0;
/**
 * Object describing the device used to perform the Synthetic test.
 */
class SyntheticsDevice {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsDevice.attributeTypeMap;
    }
}
exports.SyntheticsDevice = SyntheticsDevice;
/**
 * @ignore
 */
SyntheticsDevice.attributeTypeMap = {
    height: {
        baseName: "height",
        type: "number",
        required: true,
        format: "int64",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    isMobile: {
        baseName: "isMobile",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    width: {
        baseName: "width",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsDevice.js.map