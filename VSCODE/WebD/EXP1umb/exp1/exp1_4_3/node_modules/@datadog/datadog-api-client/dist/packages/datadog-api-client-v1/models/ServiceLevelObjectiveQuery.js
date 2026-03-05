"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLevelObjectiveQuery = void 0;
/**
 * A count-based (metric) SLO query. This field is superseded by `sli_specification` but is retained for backwards compatibility. Note that Datadog only allows the sum by aggregator
 * to be used because this will sum up all request counts instead of averaging them, or taking the max or
 * min of all of those requests.
 */
class ServiceLevelObjectiveQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceLevelObjectiveQuery.attributeTypeMap;
    }
}
exports.ServiceLevelObjectiveQuery = ServiceLevelObjectiveQuery;
/**
 * @ignore
 */
ServiceLevelObjectiveQuery.attributeTypeMap = {
    denominator: {
        baseName: "denominator",
        type: "string",
        required: true,
    },
    numerator: {
        baseName: "numerator",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceLevelObjectiveQuery.js.map