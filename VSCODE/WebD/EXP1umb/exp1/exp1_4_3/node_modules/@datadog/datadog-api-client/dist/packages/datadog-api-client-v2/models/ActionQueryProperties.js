"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionQueryProperties = void 0;
/**
 * The properties of the action query.
 */
class ActionQueryProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ActionQueryProperties.attributeTypeMap;
    }
}
exports.ActionQueryProperties = ActionQueryProperties;
/**
 * @ignore
 */
ActionQueryProperties.attributeTypeMap = {
    condition: {
        baseName: "condition",
        type: "ActionQueryCondition",
    },
    debounceInMs: {
        baseName: "debounceInMs",
        type: "ActionQueryDebounceInMs",
    },
    mockedOutputs: {
        baseName: "mockedOutputs",
        type: "ActionQueryMockedOutputs",
    },
    onlyTriggerManually: {
        baseName: "onlyTriggerManually",
        type: "ActionQueryOnlyTriggerManually",
    },
    outputs: {
        baseName: "outputs",
        type: "string",
    },
    pollingIntervalInMs: {
        baseName: "pollingIntervalInMs",
        type: "ActionQueryPollingIntervalInMs",
    },
    requiresConfirmation: {
        baseName: "requiresConfirmation",
        type: "ActionQueryRequiresConfirmation",
    },
    showToastOnError: {
        baseName: "showToastOnError",
        type: "ActionQueryShowToastOnError",
    },
    spec: {
        baseName: "spec",
        type: "ActionQuerySpec",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ActionQueryProperties.js.map