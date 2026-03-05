"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConfigurationRuleCaseCreate = void 0;
/**
 * Description of signals.
 */
class CloudConfigurationRuleCaseCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudConfigurationRuleCaseCreate.attributeTypeMap;
    }
}
exports.CloudConfigurationRuleCaseCreate = CloudConfigurationRuleCaseCreate;
/**
 * @ignore
 */
CloudConfigurationRuleCaseCreate.attributeTypeMap = {
    notifications: {
        baseName: "notifications",
        type: "Array<string>",
    },
    status: {
        baseName: "status",
        type: "SecurityMonitoringRuleSeverity",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudConfigurationRuleCaseCreate.js.map