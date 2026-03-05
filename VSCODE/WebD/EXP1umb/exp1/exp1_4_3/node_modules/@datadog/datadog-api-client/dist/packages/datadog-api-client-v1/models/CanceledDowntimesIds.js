"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanceledDowntimesIds = void 0;
/**
 * Object containing array of IDs of canceled downtimes.
 */
class CanceledDowntimesIds {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CanceledDowntimesIds.attributeTypeMap;
    }
}
exports.CanceledDowntimesIds = CanceledDowntimesIds;
/**
 * @ignore
 */
CanceledDowntimesIds.attributeTypeMap = {
    cancelledIds: {
        baseName: "cancelled_ids",
        type: "Array<number>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CanceledDowntimesIds.js.map