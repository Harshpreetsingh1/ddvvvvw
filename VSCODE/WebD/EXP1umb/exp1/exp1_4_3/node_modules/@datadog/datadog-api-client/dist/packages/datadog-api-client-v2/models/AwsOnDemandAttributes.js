"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandAttributes = void 0;
/**
 * Attributes for the AWS on demand task.
 */
class AwsOnDemandAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandAttributes.attributeTypeMap;
    }
}
exports.AwsOnDemandAttributes = AwsOnDemandAttributes;
/**
 * @ignore
 */
AwsOnDemandAttributes.attributeTypeMap = {
    arn: {
        baseName: "arn",
        type: "string",
    },
    assignedAt: {
        baseName: "assigned_at",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandAttributes.js.map