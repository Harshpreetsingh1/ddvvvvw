"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTriggerCITestLocation = void 0;
/**
 * Synthetic location.
 */
class SyntheticsTriggerCITestLocation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTriggerCITestLocation.attributeTypeMap;
    }
}
exports.SyntheticsTriggerCITestLocation = SyntheticsTriggerCITestLocation;
/**
 * @ignore
 */
SyntheticsTriggerCITestLocation.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTriggerCITestLocation.js.map