"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsOnDemandCreateAttributes = void 0;
/**
 * Attributes for the AWS on demand task.
 */
class AwsOnDemandCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AwsOnDemandCreateAttributes.attributeTypeMap;
    }
}
exports.AwsOnDemandCreateAttributes = AwsOnDemandCreateAttributes;
/**
 * @ignore
 */
AwsOnDemandCreateAttributes.attributeTypeMap = {
    arn: {
        baseName: "arn",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AwsOnDemandCreateAttributes.js.map