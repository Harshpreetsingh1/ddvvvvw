"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAssumeRole = void 0;
/**
 * The definition of `AWSAssumeRole` object.
 */
class AWSAssumeRole {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAssumeRole.attributeTypeMap;
    }
}
exports.AWSAssumeRole = AWSAssumeRole;
/**
 * @ignore
 */
AWSAssumeRole.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
        required: true,
    },
    externalId: {
        baseName: "external_id",
        type: "string",
    },
    principalId: {
        baseName: "principal_id",
        type: "string",
    },
    role: {
        baseName: "role",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSAssumeRoleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAssumeRole.js.map