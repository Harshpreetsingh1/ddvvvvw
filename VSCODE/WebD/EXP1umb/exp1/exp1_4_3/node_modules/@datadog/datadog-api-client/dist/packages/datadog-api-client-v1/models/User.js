"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/**
 * Create, edit, and disable users.
 */
class User {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}
exports.User = User;
/**
 * @ignore
 */
User.attributeTypeMap = {
    accessRole: {
        baseName: "access_role",
        type: "AccessRole",
    },
    disabled: {
        baseName: "disabled",
        type: "boolean",
    },
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    verified: {
        baseName: "verified",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=User.js.map