"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountAndLambdaRequest = void 0;
/**
 * AWS account ID and Lambda ARN.
 */
class AWSAccountAndLambdaRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountAndLambdaRequest.attributeTypeMap;
    }
}
exports.AWSAccountAndLambdaRequest = AWSAccountAndLambdaRequest;
/**
 * @ignore
 */
AWSAccountAndLambdaRequest.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    lambdaArn: {
        baseName: "lambda_arn",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountAndLambdaRequest.js.map