"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListResponse = void 0;
/**
 * Array of Datadog users for a given organization.
 */
class UserListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserListResponse.attributeTypeMap;
    }
}
exports.UserListResponse = UserListResponse;
/**
 * @ignore
 */
UserListResponse.attributeTypeMap = {
    users: {
        baseName: "users",
        type: "Array<User>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserListResponse.js.map