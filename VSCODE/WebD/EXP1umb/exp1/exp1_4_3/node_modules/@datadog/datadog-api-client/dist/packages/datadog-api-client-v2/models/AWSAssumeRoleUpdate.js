"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAssumeRoleUpdate = void 0;
/**
 * The definition of `AWSAssumeRoleUpdate` object.
 */
class AWSAssumeRoleUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAssumeRoleUpdate.attributeTypeMap;
    }
}
exports.AWSAssumeRoleUpdate = AWSAssumeRoleUpdate;
/**
 * @ignore
 */
AWSAssumeRoleUpdate.attributeTypeMap = {
    accountId: {
        baseName: "account_id",
        type: "string",
    },
    generateNewExternalId: {
        baseName: "generate_new_external_id",
        type: "boolean",
    },
    role: {
        baseName: "role",
        type: "string",
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
//# sourceMappingURL=AWSAssumeRoleUpdate.js.map