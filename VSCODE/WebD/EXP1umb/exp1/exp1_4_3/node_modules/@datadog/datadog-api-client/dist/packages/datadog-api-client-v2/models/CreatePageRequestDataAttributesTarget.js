"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageRequestDataAttributesTarget = void 0;
/**
 * Information about the target to notify (such as a team or user).
 */
class CreatePageRequestDataAttributesTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePageRequestDataAttributesTarget.attributeTypeMap;
    }
}
exports.CreatePageRequestDataAttributesTarget = CreatePageRequestDataAttributesTarget;
/**
 * @ignore
 */
CreatePageRequestDataAttributesTarget.attributeTypeMap = {
    identifier: {
        baseName: "identifier",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "OnCallPageTargetType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePageRequestDataAttributesTarget.js.map