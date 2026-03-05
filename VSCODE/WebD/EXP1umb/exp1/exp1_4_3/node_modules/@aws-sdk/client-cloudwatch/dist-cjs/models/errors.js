"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFormatFault = exports.LimitExceededFault = exports.LimitExceededException = exports.InvalidNextToken = exports.ResourceNotFoundException = exports.MissingRequiredParameterException = exports.InvalidParameterValueException = exports.InvalidParameterCombinationException = exports.InternalServiceFault = exports.ResourceNotFound = exports.DashboardNotFoundError = exports.DashboardInvalidInputError = exports.ConflictException = exports.ConcurrentModificationException = void 0;
const CloudWatchServiceException_1 = require("./CloudWatchServiceException");
class ConcurrentModificationException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "ConcurrentModificationException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
        this.Message = opts.Message;
    }
}
exports.ConcurrentModificationException = ConcurrentModificationException;
class ConflictException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "ConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.Message = opts.Message;
    }
}
exports.ConflictException = ConflictException;
class DashboardInvalidInputError extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "DashboardInvalidInputError";
    $fault = "client";
    dashboardValidationMessages;
    constructor(opts) {
        super({
            name: "DashboardInvalidInputError",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DashboardInvalidInputError.prototype);
        this.dashboardValidationMessages = opts.dashboardValidationMessages;
    }
}
exports.DashboardInvalidInputError = DashboardInvalidInputError;
class DashboardNotFoundError extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "DashboardNotFoundError";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DashboardNotFoundError",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DashboardNotFoundError.prototype);
    }
}
exports.DashboardNotFoundError = DashboardNotFoundError;
class ResourceNotFound extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "ResourceNotFound";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceNotFound",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFound.prototype);
    }
}
exports.ResourceNotFound = ResourceNotFound;
class InternalServiceFault extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "InternalServiceFault";
    $fault = "server";
    Message;
    constructor(opts) {
        super({
            name: "InternalServiceFault",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServiceFault.prototype);
        this.Message = opts.Message;
    }
}
exports.InternalServiceFault = InternalServiceFault;
class InvalidParameterCombinationException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "InvalidParameterCombinationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidParameterCombinationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
    }
}
exports.InvalidParameterCombinationException = InvalidParameterCombinationException;
class InvalidParameterValueException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "InvalidParameterValueException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidParameterValueException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    }
}
exports.InvalidParameterValueException = InvalidParameterValueException;
class MissingRequiredParameterException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "MissingRequiredParameterException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MissingRequiredParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
    }
}
exports.MissingRequiredParameterException = MissingRequiredParameterException;
class ResourceNotFoundException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    ResourceType;
    ResourceId;
    Message;
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.ResourceType = opts.ResourceType;
        this.ResourceId = opts.ResourceId;
        this.Message = opts.Message;
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class InvalidNextToken extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "InvalidNextToken";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidNextToken",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidNextToken.prototype);
    }
}
exports.InvalidNextToken = InvalidNextToken;
class LimitExceededException extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "LimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
exports.LimitExceededException = LimitExceededException;
class LimitExceededFault extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "LimitExceededFault";
    $fault = "client";
    constructor(opts) {
        super({
            name: "LimitExceededFault",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededFault.prototype);
    }
}
exports.LimitExceededFault = LimitExceededFault;
class InvalidFormatFault extends CloudWatchServiceException_1.CloudWatchServiceException {
    name = "InvalidFormatFault";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidFormatFault",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidFormatFault.prototype);
    }
}
exports.InvalidFormatFault = InvalidFormatFault;
