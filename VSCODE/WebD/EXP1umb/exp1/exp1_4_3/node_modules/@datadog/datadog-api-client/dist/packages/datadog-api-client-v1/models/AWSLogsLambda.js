"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSLogsLambda = void 0;
/**
 * Description of the Lambdas.
 */
class AWSLogsLambda {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSLogsLambda.attributeTypeMap;
    }
}
exports.AWSLogsLambda = AWSLogsLambda;
/**
 * @ignore
 */
AWSLogsLambda.attributeTypeMap = {
    arn: {
        baseName: "arn",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSLogsLambda.js.map