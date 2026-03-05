"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSubscription = void 0;
/**
 * Subscription definition.
 */
class OrganizationSubscription {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationSubscription.attributeTypeMap;
    }
}
exports.OrganizationSubscription = OrganizationSubscription;
/**
 * @ignore
 */
OrganizationSubscription.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationSubscription.js.map