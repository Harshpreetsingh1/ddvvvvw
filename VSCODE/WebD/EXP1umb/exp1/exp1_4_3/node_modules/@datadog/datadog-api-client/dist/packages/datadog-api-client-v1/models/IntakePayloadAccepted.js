"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntakePayloadAccepted = void 0;
/**
 * The payload accepted for intake.
 */
class IntakePayloadAccepted {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntakePayloadAccepted.attributeTypeMap;
    }
}
exports.IntakePayloadAccepted = IntakePayloadAccepted;
/**
 * @ignore
 */
IntakePayloadAccepted.attributeTypeMap = {
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntakePayloadAccepted.js.map