"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
/**
 * A Datadog User.
 */
class UserResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }
}
exports.UserResponse = UserResponse;
/**
 * @ignore
 */
UserResponse.attributeTypeMap = {
    user: {
        baseName: "user",
        type: "User",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserResponse.js.map