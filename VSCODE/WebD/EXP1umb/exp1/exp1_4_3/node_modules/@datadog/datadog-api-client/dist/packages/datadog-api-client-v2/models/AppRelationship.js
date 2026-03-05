"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRelationship = void 0;
/**
 * The app's publication relationship and custom connections.
 */
class AppRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AppRelationship.attributeTypeMap;
    }
}
exports.AppRelationship = AppRelationship;
/**
 * @ignore
 */
AppRelationship.attributeTypeMap = {
    connections: {
        baseName: "connections",
        type: "Array<CustomConnection>",
    },
    deployment: {
        baseName: "deployment",
        type: "DeploymentRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AppRelationship.js.map