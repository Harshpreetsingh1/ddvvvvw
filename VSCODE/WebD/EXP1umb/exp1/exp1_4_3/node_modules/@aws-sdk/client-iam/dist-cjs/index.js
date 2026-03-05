'use strict';

var middlewareHostHeader = require('@aws-sdk/middleware-host-header');
var middlewareLogger = require('@aws-sdk/middleware-logger');
var middlewareRecursionDetection = require('@aws-sdk/middleware-recursion-detection');
var middlewareUserAgent = require('@aws-sdk/middleware-user-agent');
var configResolver = require('@smithy/config-resolver');
var core = require('@smithy/core');
var schema = require('@smithy/core/schema');
var middlewareContentLength = require('@smithy/middleware-content-length');
var middlewareEndpoint = require('@smithy/middleware-endpoint');
var middlewareRetry = require('@smithy/middleware-retry');
var smithyClient = require('@smithy/smithy-client');
var httpAuthSchemeProvider = require('./auth/httpAuthSchemeProvider');
var runtimeConfig = require('./runtimeConfig');
var regionConfigResolver = require('@aws-sdk/region-config-resolver');
var protocolHttp = require('@smithy/protocol-http');
var schemas_0 = require('./schemas/schemas_0');
var utilWaiter = require('@smithy/util-waiter');
var errors = require('./models/errors');
var IAMServiceException = require('./models/IAMServiceException');

const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "iam",
    });
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig), smithyClient.getDefaultExtensionConfiguration(runtimeConfig), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

class IAMClient extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
        const _config_4 = configResolver.resolveRegionConfig(_config_3);
        const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
        const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
        const _config_7 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultIAMHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": config.credentials,
            }),
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class AcceptDelegationRequestCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AcceptDelegationRequest", {})
    .n("IAMClient", "AcceptDelegationRequestCommand")
    .sc(schemas_0.AcceptDelegationRequest$)
    .build() {
}

class AddClientIDToOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AddClientIDToOpenIDConnectProvider", {})
    .n("IAMClient", "AddClientIDToOpenIDConnectProviderCommand")
    .sc(schemas_0.AddClientIDToOpenIDConnectProvider$)
    .build() {
}

class AddRoleToInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AddRoleToInstanceProfile", {})
    .n("IAMClient", "AddRoleToInstanceProfileCommand")
    .sc(schemas_0.AddRoleToInstanceProfile$)
    .build() {
}

class AddUserToGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AddUserToGroup", {})
    .n("IAMClient", "AddUserToGroupCommand")
    .sc(schemas_0.AddUserToGroup$)
    .build() {
}

class AssociateDelegationRequestCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AssociateDelegationRequest", {})
    .n("IAMClient", "AssociateDelegationRequestCommand")
    .sc(schemas_0.AssociateDelegationRequest$)
    .build() {
}

class AttachGroupPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AttachGroupPolicy", {})
    .n("IAMClient", "AttachGroupPolicyCommand")
    .sc(schemas_0.AttachGroupPolicy$)
    .build() {
}

class AttachRolePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AttachRolePolicy", {})
    .n("IAMClient", "AttachRolePolicyCommand")
    .sc(schemas_0.AttachRolePolicy$)
    .build() {
}

class AttachUserPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "AttachUserPolicy", {})
    .n("IAMClient", "AttachUserPolicyCommand")
    .sc(schemas_0.AttachUserPolicy$)
    .build() {
}

class ChangePasswordCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ChangePassword", {})
    .n("IAMClient", "ChangePasswordCommand")
    .sc(schemas_0.ChangePassword$)
    .build() {
}

class CreateAccessKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateAccessKey", {})
    .n("IAMClient", "CreateAccessKeyCommand")
    .sc(schemas_0.CreateAccessKey$)
    .build() {
}

class CreateAccountAliasCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateAccountAlias", {})
    .n("IAMClient", "CreateAccountAliasCommand")
    .sc(schemas_0.CreateAccountAlias$)
    .build() {
}

class CreateDelegationRequestCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateDelegationRequest", {})
    .n("IAMClient", "CreateDelegationRequestCommand")
    .sc(schemas_0.CreateDelegationRequest$)
    .build() {
}

class CreateGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateGroup", {})
    .n("IAMClient", "CreateGroupCommand")
    .sc(schemas_0.CreateGroup$)
    .build() {
}

class CreateInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateInstanceProfile", {})
    .n("IAMClient", "CreateInstanceProfileCommand")
    .sc(schemas_0.CreateInstanceProfile$)
    .build() {
}

class CreateLoginProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateLoginProfile", {})
    .n("IAMClient", "CreateLoginProfileCommand")
    .sc(schemas_0.CreateLoginProfile$)
    .build() {
}

class CreateOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateOpenIDConnectProvider", {})
    .n("IAMClient", "CreateOpenIDConnectProviderCommand")
    .sc(schemas_0.CreateOpenIDConnectProvider$)
    .build() {
}

class CreatePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreatePolicy", {})
    .n("IAMClient", "CreatePolicyCommand")
    .sc(schemas_0.CreatePolicy$)
    .build() {
}

class CreatePolicyVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreatePolicyVersion", {})
    .n("IAMClient", "CreatePolicyVersionCommand")
    .sc(schemas_0.CreatePolicyVersion$)
    .build() {
}

class CreateRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateRole", {})
    .n("IAMClient", "CreateRoleCommand")
    .sc(schemas_0.CreateRole$)
    .build() {
}

class CreateSAMLProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateSAMLProvider", {})
    .n("IAMClient", "CreateSAMLProviderCommand")
    .sc(schemas_0.CreateSAMLProvider$)
    .build() {
}

class CreateServiceLinkedRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateServiceLinkedRole", {})
    .n("IAMClient", "CreateServiceLinkedRoleCommand")
    .sc(schemas_0.CreateServiceLinkedRole$)
    .build() {
}

class CreateServiceSpecificCredentialCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateServiceSpecificCredential", {})
    .n("IAMClient", "CreateServiceSpecificCredentialCommand")
    .sc(schemas_0.CreateServiceSpecificCredential$)
    .build() {
}

class CreateUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateUser", {})
    .n("IAMClient", "CreateUserCommand")
    .sc(schemas_0.CreateUser$)
    .build() {
}

class CreateVirtualMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "CreateVirtualMFADevice", {})
    .n("IAMClient", "CreateVirtualMFADeviceCommand")
    .sc(schemas_0.CreateVirtualMFADevice$)
    .build() {
}

class DeactivateMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeactivateMFADevice", {})
    .n("IAMClient", "DeactivateMFADeviceCommand")
    .sc(schemas_0.DeactivateMFADevice$)
    .build() {
}

class DeleteAccessKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteAccessKey", {})
    .n("IAMClient", "DeleteAccessKeyCommand")
    .sc(schemas_0.DeleteAccessKey$)
    .build() {
}

class DeleteAccountAliasCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteAccountAlias", {})
    .n("IAMClient", "DeleteAccountAliasCommand")
    .sc(schemas_0.DeleteAccountAlias$)
    .build() {
}

class DeleteAccountPasswordPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteAccountPasswordPolicy", {})
    .n("IAMClient", "DeleteAccountPasswordPolicyCommand")
    .sc(schemas_0.DeleteAccountPasswordPolicy$)
    .build() {
}

class DeleteGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteGroup", {})
    .n("IAMClient", "DeleteGroupCommand")
    .sc(schemas_0.DeleteGroup$)
    .build() {
}

class DeleteGroupPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteGroupPolicy", {})
    .n("IAMClient", "DeleteGroupPolicyCommand")
    .sc(schemas_0.DeleteGroupPolicy$)
    .build() {
}

class DeleteInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteInstanceProfile", {})
    .n("IAMClient", "DeleteInstanceProfileCommand")
    .sc(schemas_0.DeleteInstanceProfile$)
    .build() {
}

class DeleteLoginProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteLoginProfile", {})
    .n("IAMClient", "DeleteLoginProfileCommand")
    .sc(schemas_0.DeleteLoginProfile$)
    .build() {
}

class DeleteOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteOpenIDConnectProvider", {})
    .n("IAMClient", "DeleteOpenIDConnectProviderCommand")
    .sc(schemas_0.DeleteOpenIDConnectProvider$)
    .build() {
}

class DeletePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeletePolicy", {})
    .n("IAMClient", "DeletePolicyCommand")
    .sc(schemas_0.DeletePolicy$)
    .build() {
}

class DeletePolicyVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeletePolicyVersion", {})
    .n("IAMClient", "DeletePolicyVersionCommand")
    .sc(schemas_0.DeletePolicyVersion$)
    .build() {
}

class DeleteRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteRole", {})
    .n("IAMClient", "DeleteRoleCommand")
    .sc(schemas_0.DeleteRole$)
    .build() {
}

class DeleteRolePermissionsBoundaryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteRolePermissionsBoundary", {})
    .n("IAMClient", "DeleteRolePermissionsBoundaryCommand")
    .sc(schemas_0.DeleteRolePermissionsBoundary$)
    .build() {
}

class DeleteRolePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteRolePolicy", {})
    .n("IAMClient", "DeleteRolePolicyCommand")
    .sc(schemas_0.DeleteRolePolicy$)
    .build() {
}

class DeleteSAMLProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteSAMLProvider", {})
    .n("IAMClient", "DeleteSAMLProviderCommand")
    .sc(schemas_0.DeleteSAMLProvider$)
    .build() {
}

class DeleteServerCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteServerCertificate", {})
    .n("IAMClient", "DeleteServerCertificateCommand")
    .sc(schemas_0.DeleteServerCertificate$)
    .build() {
}

class DeleteServiceLinkedRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteServiceLinkedRole", {})
    .n("IAMClient", "DeleteServiceLinkedRoleCommand")
    .sc(schemas_0.DeleteServiceLinkedRole$)
    .build() {
}

class DeleteServiceSpecificCredentialCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteServiceSpecificCredential", {})
    .n("IAMClient", "DeleteServiceSpecificCredentialCommand")
    .sc(schemas_0.DeleteServiceSpecificCredential$)
    .build() {
}

class DeleteSigningCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteSigningCertificate", {})
    .n("IAMClient", "DeleteSigningCertificateCommand")
    .sc(schemas_0.DeleteSigningCertificate$)
    .build() {
}

class DeleteSSHPublicKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteSSHPublicKey", {})
    .n("IAMClient", "DeleteSSHPublicKeyCommand")
    .sc(schemas_0.DeleteSSHPublicKey$)
    .build() {
}

class DeleteUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteUser", {})
    .n("IAMClient", "DeleteUserCommand")
    .sc(schemas_0.DeleteUser$)
    .build() {
}

class DeleteUserPermissionsBoundaryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteUserPermissionsBoundary", {})
    .n("IAMClient", "DeleteUserPermissionsBoundaryCommand")
    .sc(schemas_0.DeleteUserPermissionsBoundary$)
    .build() {
}

class DeleteUserPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteUserPolicy", {})
    .n("IAMClient", "DeleteUserPolicyCommand")
    .sc(schemas_0.DeleteUserPolicy$)
    .build() {
}

class DeleteVirtualMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DeleteVirtualMFADevice", {})
    .n("IAMClient", "DeleteVirtualMFADeviceCommand")
    .sc(schemas_0.DeleteVirtualMFADevice$)
    .build() {
}

class DetachGroupPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DetachGroupPolicy", {})
    .n("IAMClient", "DetachGroupPolicyCommand")
    .sc(schemas_0.DetachGroupPolicy$)
    .build() {
}

class DetachRolePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DetachRolePolicy", {})
    .n("IAMClient", "DetachRolePolicyCommand")
    .sc(schemas_0.DetachRolePolicy$)
    .build() {
}

class DetachUserPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DetachUserPolicy", {})
    .n("IAMClient", "DetachUserPolicyCommand")
    .sc(schemas_0.DetachUserPolicy$)
    .build() {
}

class DisableOrganizationsRootCredentialsManagementCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DisableOrganizationsRootCredentialsManagement", {})
    .n("IAMClient", "DisableOrganizationsRootCredentialsManagementCommand")
    .sc(schemas_0.DisableOrganizationsRootCredentialsManagement$)
    .build() {
}

class DisableOrganizationsRootSessionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DisableOrganizationsRootSessions", {})
    .n("IAMClient", "DisableOrganizationsRootSessionsCommand")
    .sc(schemas_0.DisableOrganizationsRootSessions$)
    .build() {
}

class DisableOutboundWebIdentityFederationCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "DisableOutboundWebIdentityFederation", {})
    .n("IAMClient", "DisableOutboundWebIdentityFederationCommand")
    .sc(schemas_0.DisableOutboundWebIdentityFederation$)
    .build() {
}

class EnableMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "EnableMFADevice", {})
    .n("IAMClient", "EnableMFADeviceCommand")
    .sc(schemas_0.EnableMFADevice$)
    .build() {
}

class EnableOrganizationsRootCredentialsManagementCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "EnableOrganizationsRootCredentialsManagement", {})
    .n("IAMClient", "EnableOrganizationsRootCredentialsManagementCommand")
    .sc(schemas_0.EnableOrganizationsRootCredentialsManagement$)
    .build() {
}

class EnableOrganizationsRootSessionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "EnableOrganizationsRootSessions", {})
    .n("IAMClient", "EnableOrganizationsRootSessionsCommand")
    .sc(schemas_0.EnableOrganizationsRootSessions$)
    .build() {
}

class EnableOutboundWebIdentityFederationCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "EnableOutboundWebIdentityFederation", {})
    .n("IAMClient", "EnableOutboundWebIdentityFederationCommand")
    .sc(schemas_0.EnableOutboundWebIdentityFederation$)
    .build() {
}

class GenerateCredentialReportCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GenerateCredentialReport", {})
    .n("IAMClient", "GenerateCredentialReportCommand")
    .sc(schemas_0.GenerateCredentialReport$)
    .build() {
}

class GenerateOrganizationsAccessReportCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GenerateOrganizationsAccessReport", {})
    .n("IAMClient", "GenerateOrganizationsAccessReportCommand")
    .sc(schemas_0.GenerateOrganizationsAccessReport$)
    .build() {
}

class GenerateServiceLastAccessedDetailsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GenerateServiceLastAccessedDetails", {})
    .n("IAMClient", "GenerateServiceLastAccessedDetailsCommand")
    .sc(schemas_0.GenerateServiceLastAccessedDetails$)
    .build() {
}

class GetAccessKeyLastUsedCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetAccessKeyLastUsed", {})
    .n("IAMClient", "GetAccessKeyLastUsedCommand")
    .sc(schemas_0.GetAccessKeyLastUsed$)
    .build() {
}

class GetAccountAuthorizationDetailsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetAccountAuthorizationDetails", {})
    .n("IAMClient", "GetAccountAuthorizationDetailsCommand")
    .sc(schemas_0.GetAccountAuthorizationDetails$)
    .build() {
}

class GetAccountPasswordPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetAccountPasswordPolicy", {})
    .n("IAMClient", "GetAccountPasswordPolicyCommand")
    .sc(schemas_0.GetAccountPasswordPolicy$)
    .build() {
}

class GetAccountSummaryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetAccountSummary", {})
    .n("IAMClient", "GetAccountSummaryCommand")
    .sc(schemas_0.GetAccountSummary$)
    .build() {
}

class GetContextKeysForCustomPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetContextKeysForCustomPolicy", {})
    .n("IAMClient", "GetContextKeysForCustomPolicyCommand")
    .sc(schemas_0.GetContextKeysForCustomPolicy$)
    .build() {
}

class GetContextKeysForPrincipalPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetContextKeysForPrincipalPolicy", {})
    .n("IAMClient", "GetContextKeysForPrincipalPolicyCommand")
    .sc(schemas_0.GetContextKeysForPrincipalPolicy$)
    .build() {
}

class GetCredentialReportCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetCredentialReport", {})
    .n("IAMClient", "GetCredentialReportCommand")
    .sc(schemas_0.GetCredentialReport$)
    .build() {
}

class GetDelegationRequestCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetDelegationRequest", {})
    .n("IAMClient", "GetDelegationRequestCommand")
    .sc(schemas_0.GetDelegationRequest$)
    .build() {
}

class GetGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetGroup", {})
    .n("IAMClient", "GetGroupCommand")
    .sc(schemas_0.GetGroup$)
    .build() {
}

class GetGroupPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetGroupPolicy", {})
    .n("IAMClient", "GetGroupPolicyCommand")
    .sc(schemas_0.GetGroupPolicy$)
    .build() {
}

class GetHumanReadableSummaryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetHumanReadableSummary", {})
    .n("IAMClient", "GetHumanReadableSummaryCommand")
    .sc(schemas_0.GetHumanReadableSummary$)
    .build() {
}

class GetInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetInstanceProfile", {})
    .n("IAMClient", "GetInstanceProfileCommand")
    .sc(schemas_0.GetInstanceProfile$)
    .build() {
}

class GetLoginProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetLoginProfile", {})
    .n("IAMClient", "GetLoginProfileCommand")
    .sc(schemas_0.GetLoginProfile$)
    .build() {
}

class GetMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetMFADevice", {})
    .n("IAMClient", "GetMFADeviceCommand")
    .sc(schemas_0.GetMFADevice$)
    .build() {
}

class GetOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetOpenIDConnectProvider", {})
    .n("IAMClient", "GetOpenIDConnectProviderCommand")
    .sc(schemas_0.GetOpenIDConnectProvider$)
    .build() {
}

class GetOrganizationsAccessReportCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetOrganizationsAccessReport", {})
    .n("IAMClient", "GetOrganizationsAccessReportCommand")
    .sc(schemas_0.GetOrganizationsAccessReport$)
    .build() {
}

class GetOutboundWebIdentityFederationInfoCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetOutboundWebIdentityFederationInfo", {})
    .n("IAMClient", "GetOutboundWebIdentityFederationInfoCommand")
    .sc(schemas_0.GetOutboundWebIdentityFederationInfo$)
    .build() {
}

class GetPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetPolicy", {})
    .n("IAMClient", "GetPolicyCommand")
    .sc(schemas_0.GetPolicy$)
    .build() {
}

class GetPolicyVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetPolicyVersion", {})
    .n("IAMClient", "GetPolicyVersionCommand")
    .sc(schemas_0.GetPolicyVersion$)
    .build() {
}

class GetRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetRole", {})
    .n("IAMClient", "GetRoleCommand")
    .sc(schemas_0.GetRole$)
    .build() {
}

class GetRolePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetRolePolicy", {})
    .n("IAMClient", "GetRolePolicyCommand")
    .sc(schemas_0.GetRolePolicy$)
    .build() {
}

class GetSAMLProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetSAMLProvider", {})
    .n("IAMClient", "GetSAMLProviderCommand")
    .sc(schemas_0.GetSAMLProvider$)
    .build() {
}

class GetServerCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetServerCertificate", {})
    .n("IAMClient", "GetServerCertificateCommand")
    .sc(schemas_0.GetServerCertificate$)
    .build() {
}

class GetServiceLastAccessedDetailsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetServiceLastAccessedDetails", {})
    .n("IAMClient", "GetServiceLastAccessedDetailsCommand")
    .sc(schemas_0.GetServiceLastAccessedDetails$)
    .build() {
}

class GetServiceLastAccessedDetailsWithEntitiesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetServiceLastAccessedDetailsWithEntities", {})
    .n("IAMClient", "GetServiceLastAccessedDetailsWithEntitiesCommand")
    .sc(schemas_0.GetServiceLastAccessedDetailsWithEntities$)
    .build() {
}

class GetServiceLinkedRoleDeletionStatusCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetServiceLinkedRoleDeletionStatus", {})
    .n("IAMClient", "GetServiceLinkedRoleDeletionStatusCommand")
    .sc(schemas_0.GetServiceLinkedRoleDeletionStatus$)
    .build() {
}

class GetSSHPublicKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetSSHPublicKey", {})
    .n("IAMClient", "GetSSHPublicKeyCommand")
    .sc(schemas_0.GetSSHPublicKey$)
    .build() {
}

class GetUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetUser", {})
    .n("IAMClient", "GetUserCommand")
    .sc(schemas_0.GetUser$)
    .build() {
}

class GetUserPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "GetUserPolicy", {})
    .n("IAMClient", "GetUserPolicyCommand")
    .sc(schemas_0.GetUserPolicy$)
    .build() {
}

class ListAccessKeysCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListAccessKeys", {})
    .n("IAMClient", "ListAccessKeysCommand")
    .sc(schemas_0.ListAccessKeys$)
    .build() {
}

class ListAccountAliasesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListAccountAliases", {})
    .n("IAMClient", "ListAccountAliasesCommand")
    .sc(schemas_0.ListAccountAliases$)
    .build() {
}

class ListAttachedGroupPoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListAttachedGroupPolicies", {})
    .n("IAMClient", "ListAttachedGroupPoliciesCommand")
    .sc(schemas_0.ListAttachedGroupPolicies$)
    .build() {
}

class ListAttachedRolePoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListAttachedRolePolicies", {})
    .n("IAMClient", "ListAttachedRolePoliciesCommand")
    .sc(schemas_0.ListAttachedRolePolicies$)
    .build() {
}

class ListAttachedUserPoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListAttachedUserPolicies", {})
    .n("IAMClient", "ListAttachedUserPoliciesCommand")
    .sc(schemas_0.ListAttachedUserPolicies$)
    .build() {
}

class ListDelegationRequestsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListDelegationRequests", {})
    .n("IAMClient", "ListDelegationRequestsCommand")
    .sc(schemas_0.ListDelegationRequests$)
    .build() {
}

class ListEntitiesForPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListEntitiesForPolicy", {})
    .n("IAMClient", "ListEntitiesForPolicyCommand")
    .sc(schemas_0.ListEntitiesForPolicy$)
    .build() {
}

class ListGroupPoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListGroupPolicies", {})
    .n("IAMClient", "ListGroupPoliciesCommand")
    .sc(schemas_0.ListGroupPolicies$)
    .build() {
}

class ListGroupsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListGroups", {})
    .n("IAMClient", "ListGroupsCommand")
    .sc(schemas_0.ListGroups$)
    .build() {
}

class ListGroupsForUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListGroupsForUser", {})
    .n("IAMClient", "ListGroupsForUserCommand")
    .sc(schemas_0.ListGroupsForUser$)
    .build() {
}

class ListInstanceProfilesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListInstanceProfiles", {})
    .n("IAMClient", "ListInstanceProfilesCommand")
    .sc(schemas_0.ListInstanceProfiles$)
    .build() {
}

class ListInstanceProfilesForRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListInstanceProfilesForRole", {})
    .n("IAMClient", "ListInstanceProfilesForRoleCommand")
    .sc(schemas_0.ListInstanceProfilesForRole$)
    .build() {
}

class ListInstanceProfileTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListInstanceProfileTags", {})
    .n("IAMClient", "ListInstanceProfileTagsCommand")
    .sc(schemas_0.ListInstanceProfileTags$)
    .build() {
}

class ListMFADevicesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListMFADevices", {})
    .n("IAMClient", "ListMFADevicesCommand")
    .sc(schemas_0.ListMFADevices$)
    .build() {
}

class ListMFADeviceTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListMFADeviceTags", {})
    .n("IAMClient", "ListMFADeviceTagsCommand")
    .sc(schemas_0.ListMFADeviceTags$)
    .build() {
}

class ListOpenIDConnectProvidersCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListOpenIDConnectProviders", {})
    .n("IAMClient", "ListOpenIDConnectProvidersCommand")
    .sc(schemas_0.ListOpenIDConnectProviders$)
    .build() {
}

class ListOpenIDConnectProviderTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListOpenIDConnectProviderTags", {})
    .n("IAMClient", "ListOpenIDConnectProviderTagsCommand")
    .sc(schemas_0.ListOpenIDConnectProviderTags$)
    .build() {
}

class ListOrganizationsFeaturesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListOrganizationsFeatures", {})
    .n("IAMClient", "ListOrganizationsFeaturesCommand")
    .sc(schemas_0.ListOrganizationsFeatures$)
    .build() {
}

class ListPoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListPolicies", {})
    .n("IAMClient", "ListPoliciesCommand")
    .sc(schemas_0.ListPolicies$)
    .build() {
}

class ListPoliciesGrantingServiceAccessCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListPoliciesGrantingServiceAccess", {})
    .n("IAMClient", "ListPoliciesGrantingServiceAccessCommand")
    .sc(schemas_0.ListPoliciesGrantingServiceAccess$)
    .build() {
}

class ListPolicyTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListPolicyTags", {})
    .n("IAMClient", "ListPolicyTagsCommand")
    .sc(schemas_0.ListPolicyTags$)
    .build() {
}

class ListPolicyVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListPolicyVersions", {})
    .n("IAMClient", "ListPolicyVersionsCommand")
    .sc(schemas_0.ListPolicyVersions$)
    .build() {
}

class ListRolePoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListRolePolicies", {})
    .n("IAMClient", "ListRolePoliciesCommand")
    .sc(schemas_0.ListRolePolicies$)
    .build() {
}

class ListRolesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListRoles", {})
    .n("IAMClient", "ListRolesCommand")
    .sc(schemas_0.ListRoles$)
    .build() {
}

class ListRoleTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListRoleTags", {})
    .n("IAMClient", "ListRoleTagsCommand")
    .sc(schemas_0.ListRoleTags$)
    .build() {
}

class ListSAMLProvidersCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListSAMLProviders", {})
    .n("IAMClient", "ListSAMLProvidersCommand")
    .sc(schemas_0.ListSAMLProviders$)
    .build() {
}

class ListSAMLProviderTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListSAMLProviderTags", {})
    .n("IAMClient", "ListSAMLProviderTagsCommand")
    .sc(schemas_0.ListSAMLProviderTags$)
    .build() {
}

class ListServerCertificatesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListServerCertificates", {})
    .n("IAMClient", "ListServerCertificatesCommand")
    .sc(schemas_0.ListServerCertificates$)
    .build() {
}

class ListServerCertificateTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListServerCertificateTags", {})
    .n("IAMClient", "ListServerCertificateTagsCommand")
    .sc(schemas_0.ListServerCertificateTags$)
    .build() {
}

class ListServiceSpecificCredentialsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListServiceSpecificCredentials", {})
    .n("IAMClient", "ListServiceSpecificCredentialsCommand")
    .sc(schemas_0.ListServiceSpecificCredentials$)
    .build() {
}

class ListSigningCertificatesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListSigningCertificates", {})
    .n("IAMClient", "ListSigningCertificatesCommand")
    .sc(schemas_0.ListSigningCertificates$)
    .build() {
}

class ListSSHPublicKeysCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListSSHPublicKeys", {})
    .n("IAMClient", "ListSSHPublicKeysCommand")
    .sc(schemas_0.ListSSHPublicKeys$)
    .build() {
}

class ListUserPoliciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListUserPolicies", {})
    .n("IAMClient", "ListUserPoliciesCommand")
    .sc(schemas_0.ListUserPolicies$)
    .build() {
}

class ListUsersCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListUsers", {})
    .n("IAMClient", "ListUsersCommand")
    .sc(schemas_0.ListUsers$)
    .build() {
}

class ListUserTagsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListUserTags", {})
    .n("IAMClient", "ListUserTagsCommand")
    .sc(schemas_0.ListUserTags$)
    .build() {
}

class ListVirtualMFADevicesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ListVirtualMFADevices", {})
    .n("IAMClient", "ListVirtualMFADevicesCommand")
    .sc(schemas_0.ListVirtualMFADevices$)
    .build() {
}

class PutGroupPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "PutGroupPolicy", {})
    .n("IAMClient", "PutGroupPolicyCommand")
    .sc(schemas_0.PutGroupPolicy$)
    .build() {
}

class PutRolePermissionsBoundaryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "PutRolePermissionsBoundary", {})
    .n("IAMClient", "PutRolePermissionsBoundaryCommand")
    .sc(schemas_0.PutRolePermissionsBoundary$)
    .build() {
}

class PutRolePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "PutRolePolicy", {})
    .n("IAMClient", "PutRolePolicyCommand")
    .sc(schemas_0.PutRolePolicy$)
    .build() {
}

class PutUserPermissionsBoundaryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "PutUserPermissionsBoundary", {})
    .n("IAMClient", "PutUserPermissionsBoundaryCommand")
    .sc(schemas_0.PutUserPermissionsBoundary$)
    .build() {
}

class PutUserPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "PutUserPolicy", {})
    .n("IAMClient", "PutUserPolicyCommand")
    .sc(schemas_0.PutUserPolicy$)
    .build() {
}

class RejectDelegationRequestCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "RejectDelegationRequest", {})
    .n("IAMClient", "RejectDelegationRequestCommand")
    .sc(schemas_0.RejectDelegationRequest$)
    .build() {
}

class RemoveClientIDFromOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "RemoveClientIDFromOpenIDConnectProvider", {})
    .n("IAMClient", "RemoveClientIDFromOpenIDConnectProviderCommand")
    .sc(schemas_0.RemoveClientIDFromOpenIDConnectProvider$)
    .build() {
}

class RemoveRoleFromInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "RemoveRoleFromInstanceProfile", {})
    .n("IAMClient", "RemoveRoleFromInstanceProfileCommand")
    .sc(schemas_0.RemoveRoleFromInstanceProfile$)
    .build() {
}

class RemoveUserFromGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "RemoveUserFromGroup", {})
    .n("IAMClient", "RemoveUserFromGroupCommand")
    .sc(schemas_0.RemoveUserFromGroup$)
    .build() {
}

class ResetServiceSpecificCredentialCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ResetServiceSpecificCredential", {})
    .n("IAMClient", "ResetServiceSpecificCredentialCommand")
    .sc(schemas_0.ResetServiceSpecificCredential$)
    .build() {
}

class ResyncMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "ResyncMFADevice", {})
    .n("IAMClient", "ResyncMFADeviceCommand")
    .sc(schemas_0.ResyncMFADevice$)
    .build() {
}

class SendDelegationTokenCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "SendDelegationToken", {})
    .n("IAMClient", "SendDelegationTokenCommand")
    .sc(schemas_0.SendDelegationToken$)
    .build() {
}

class SetDefaultPolicyVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "SetDefaultPolicyVersion", {})
    .n("IAMClient", "SetDefaultPolicyVersionCommand")
    .sc(schemas_0.SetDefaultPolicyVersion$)
    .build() {
}

class SetSecurityTokenServicePreferencesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "SetSecurityTokenServicePreferences", {})
    .n("IAMClient", "SetSecurityTokenServicePreferencesCommand")
    .sc(schemas_0.SetSecurityTokenServicePreferences$)
    .build() {
}

class SimulateCustomPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "SimulateCustomPolicy", {})
    .n("IAMClient", "SimulateCustomPolicyCommand")
    .sc(schemas_0.SimulateCustomPolicy$)
    .build() {
}

class SimulatePrincipalPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "SimulatePrincipalPolicy", {})
    .n("IAMClient", "SimulatePrincipalPolicyCommand")
    .sc(schemas_0.SimulatePrincipalPolicy$)
    .build() {
}

class TagInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagInstanceProfile", {})
    .n("IAMClient", "TagInstanceProfileCommand")
    .sc(schemas_0.TagInstanceProfile$)
    .build() {
}

class TagMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagMFADevice", {})
    .n("IAMClient", "TagMFADeviceCommand")
    .sc(schemas_0.TagMFADevice$)
    .build() {
}

class TagOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagOpenIDConnectProvider", {})
    .n("IAMClient", "TagOpenIDConnectProviderCommand")
    .sc(schemas_0.TagOpenIDConnectProvider$)
    .build() {
}

class TagPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagPolicy", {})
    .n("IAMClient", "TagPolicyCommand")
    .sc(schemas_0.TagPolicy$)
    .build() {
}

class TagRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagRole", {})
    .n("IAMClient", "TagRoleCommand")
    .sc(schemas_0.TagRole$)
    .build() {
}

class TagSAMLProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagSAMLProvider", {})
    .n("IAMClient", "TagSAMLProviderCommand")
    .sc(schemas_0.TagSAMLProvider$)
    .build() {
}

class TagServerCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagServerCertificate", {})
    .n("IAMClient", "TagServerCertificateCommand")
    .sc(schemas_0.TagServerCertificate$)
    .build() {
}

class TagUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "TagUser", {})
    .n("IAMClient", "TagUserCommand")
    .sc(schemas_0.TagUser$)
    .build() {
}

class UntagInstanceProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagInstanceProfile", {})
    .n("IAMClient", "UntagInstanceProfileCommand")
    .sc(schemas_0.UntagInstanceProfile$)
    .build() {
}

class UntagMFADeviceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagMFADevice", {})
    .n("IAMClient", "UntagMFADeviceCommand")
    .sc(schemas_0.UntagMFADevice$)
    .build() {
}

class UntagOpenIDConnectProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagOpenIDConnectProvider", {})
    .n("IAMClient", "UntagOpenIDConnectProviderCommand")
    .sc(schemas_0.UntagOpenIDConnectProvider$)
    .build() {
}

class UntagPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagPolicy", {})
    .n("IAMClient", "UntagPolicyCommand")
    .sc(schemas_0.UntagPolicy$)
    .build() {
}

class UntagRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagRole", {})
    .n("IAMClient", "UntagRoleCommand")
    .sc(schemas_0.UntagRole$)
    .build() {
}

class UntagSAMLProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagSAMLProvider", {})
    .n("IAMClient", "UntagSAMLProviderCommand")
    .sc(schemas_0.UntagSAMLProvider$)
    .build() {
}

class UntagServerCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagServerCertificate", {})
    .n("IAMClient", "UntagServerCertificateCommand")
    .sc(schemas_0.UntagServerCertificate$)
    .build() {
}

class UntagUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UntagUser", {})
    .n("IAMClient", "UntagUserCommand")
    .sc(schemas_0.UntagUser$)
    .build() {
}

class UpdateAccessKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateAccessKey", {})
    .n("IAMClient", "UpdateAccessKeyCommand")
    .sc(schemas_0.UpdateAccessKey$)
    .build() {
}

class UpdateAccountPasswordPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateAccountPasswordPolicy", {})
    .n("IAMClient", "UpdateAccountPasswordPolicyCommand")
    .sc(schemas_0.UpdateAccountPasswordPolicy$)
    .build() {
}

class UpdateAssumeRolePolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateAssumeRolePolicy", {})
    .n("IAMClient", "UpdateAssumeRolePolicyCommand")
    .sc(schemas_0.UpdateAssumeRolePolicy$)
    .build() {
}

class UpdateDelegationRequestCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateDelegationRequest", {})
    .n("IAMClient", "UpdateDelegationRequestCommand")
    .sc(schemas_0.UpdateDelegationRequest$)
    .build() {
}

class UpdateGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateGroup", {})
    .n("IAMClient", "UpdateGroupCommand")
    .sc(schemas_0.UpdateGroup$)
    .build() {
}

class UpdateLoginProfileCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateLoginProfile", {})
    .n("IAMClient", "UpdateLoginProfileCommand")
    .sc(schemas_0.UpdateLoginProfile$)
    .build() {
}

class UpdateOpenIDConnectProviderThumbprintCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateOpenIDConnectProviderThumbprint", {})
    .n("IAMClient", "UpdateOpenIDConnectProviderThumbprintCommand")
    .sc(schemas_0.UpdateOpenIDConnectProviderThumbprint$)
    .build() {
}

class UpdateRoleCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateRole", {})
    .n("IAMClient", "UpdateRoleCommand")
    .sc(schemas_0.UpdateRole$)
    .build() {
}

class UpdateRoleDescriptionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateRoleDescription", {})
    .n("IAMClient", "UpdateRoleDescriptionCommand")
    .sc(schemas_0.UpdateRoleDescription$)
    .build() {
}

class UpdateSAMLProviderCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateSAMLProvider", {})
    .n("IAMClient", "UpdateSAMLProviderCommand")
    .sc(schemas_0.UpdateSAMLProvider$)
    .build() {
}

class UpdateServerCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateServerCertificate", {})
    .n("IAMClient", "UpdateServerCertificateCommand")
    .sc(schemas_0.UpdateServerCertificate$)
    .build() {
}

class UpdateServiceSpecificCredentialCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateServiceSpecificCredential", {})
    .n("IAMClient", "UpdateServiceSpecificCredentialCommand")
    .sc(schemas_0.UpdateServiceSpecificCredential$)
    .build() {
}

class UpdateSigningCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateSigningCertificate", {})
    .n("IAMClient", "UpdateSigningCertificateCommand")
    .sc(schemas_0.UpdateSigningCertificate$)
    .build() {
}

class UpdateSSHPublicKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateSSHPublicKey", {})
    .n("IAMClient", "UpdateSSHPublicKeyCommand")
    .sc(schemas_0.UpdateSSHPublicKey$)
    .build() {
}

class UpdateUserCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UpdateUser", {})
    .n("IAMClient", "UpdateUserCommand")
    .sc(schemas_0.UpdateUser$)
    .build() {
}

class UploadServerCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UploadServerCertificate", {})
    .n("IAMClient", "UploadServerCertificateCommand")
    .sc(schemas_0.UploadServerCertificate$)
    .build() {
}

class UploadSigningCertificateCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UploadSigningCertificate", {})
    .n("IAMClient", "UploadSigningCertificateCommand")
    .sc(schemas_0.UploadSigningCertificate$)
    .build() {
}

class UploadSSHPublicKeyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AWSIdentityManagementV20100508", "UploadSSHPublicKey", {})
    .n("IAMClient", "UploadSSHPublicKeyCommand")
    .sc(schemas_0.UploadSSHPublicKey$)
    .build() {
}

const paginateGetAccountAuthorizationDetails = core.createPaginator(IAMClient, GetAccountAuthorizationDetailsCommand, "Marker", "Marker", "MaxItems");

const paginateGetGroup = core.createPaginator(IAMClient, GetGroupCommand, "Marker", "Marker", "MaxItems");

const paginateListAccessKeys = core.createPaginator(IAMClient, ListAccessKeysCommand, "Marker", "Marker", "MaxItems");

const paginateListAccountAliases = core.createPaginator(IAMClient, ListAccountAliasesCommand, "Marker", "Marker", "MaxItems");

const paginateListAttachedGroupPolicies = core.createPaginator(IAMClient, ListAttachedGroupPoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListAttachedRolePolicies = core.createPaginator(IAMClient, ListAttachedRolePoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListAttachedUserPolicies = core.createPaginator(IAMClient, ListAttachedUserPoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListEntitiesForPolicy = core.createPaginator(IAMClient, ListEntitiesForPolicyCommand, "Marker", "Marker", "MaxItems");

const paginateListGroupPolicies = core.createPaginator(IAMClient, ListGroupPoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListGroupsForUser = core.createPaginator(IAMClient, ListGroupsForUserCommand, "Marker", "Marker", "MaxItems");

const paginateListGroups = core.createPaginator(IAMClient, ListGroupsCommand, "Marker", "Marker", "MaxItems");

const paginateListInstanceProfilesForRole = core.createPaginator(IAMClient, ListInstanceProfilesForRoleCommand, "Marker", "Marker", "MaxItems");

const paginateListInstanceProfiles = core.createPaginator(IAMClient, ListInstanceProfilesCommand, "Marker", "Marker", "MaxItems");

const paginateListInstanceProfileTags = core.createPaginator(IAMClient, ListInstanceProfileTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListMFADevices = core.createPaginator(IAMClient, ListMFADevicesCommand, "Marker", "Marker", "MaxItems");

const paginateListMFADeviceTags = core.createPaginator(IAMClient, ListMFADeviceTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListOpenIDConnectProviderTags = core.createPaginator(IAMClient, ListOpenIDConnectProviderTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListPolicies = core.createPaginator(IAMClient, ListPoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListPolicyTags = core.createPaginator(IAMClient, ListPolicyTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListPolicyVersions = core.createPaginator(IAMClient, ListPolicyVersionsCommand, "Marker", "Marker", "MaxItems");

const paginateListRolePolicies = core.createPaginator(IAMClient, ListRolePoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListRoles = core.createPaginator(IAMClient, ListRolesCommand, "Marker", "Marker", "MaxItems");

const paginateListRoleTags = core.createPaginator(IAMClient, ListRoleTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListSAMLProviderTags = core.createPaginator(IAMClient, ListSAMLProviderTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListServerCertificates = core.createPaginator(IAMClient, ListServerCertificatesCommand, "Marker", "Marker", "MaxItems");

const paginateListServerCertificateTags = core.createPaginator(IAMClient, ListServerCertificateTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListSigningCertificates = core.createPaginator(IAMClient, ListSigningCertificatesCommand, "Marker", "Marker", "MaxItems");

const paginateListSSHPublicKeys = core.createPaginator(IAMClient, ListSSHPublicKeysCommand, "Marker", "Marker", "MaxItems");

const paginateListUserPolicies = core.createPaginator(IAMClient, ListUserPoliciesCommand, "Marker", "Marker", "MaxItems");

const paginateListUsers = core.createPaginator(IAMClient, ListUsersCommand, "Marker", "Marker", "MaxItems");

const paginateListUserTags = core.createPaginator(IAMClient, ListUserTagsCommand, "Marker", "Marker", "MaxItems");

const paginateListVirtualMFADevices = core.createPaginator(IAMClient, ListVirtualMFADevicesCommand, "Marker", "Marker", "MaxItems");

const paginateSimulateCustomPolicy = core.createPaginator(IAMClient, SimulateCustomPolicyCommand, "Marker", "Marker", "MaxItems");

const paginateSimulatePrincipalPolicy = core.createPaginator(IAMClient, SimulatePrincipalPolicyCommand, "Marker", "Marker", "MaxItems");

const checkState$3 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetInstanceProfileCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NoSuchEntityException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForInstanceProfileExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
};
const waitUntilInstanceProfileExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$3);
    return utilWaiter.checkExceptions(result);
};

const checkState$2 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetPolicyCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NoSuchEntityException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForPolicyExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
};
const waitUntilPolicyExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$2);
    return utilWaiter.checkExceptions(result);
};

const checkState$1 = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetRoleCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NoSuchEntityException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForRoleExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
};
const waitUntilRoleExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState$1);
    return utilWaiter.checkExceptions(result);
};

const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new GetUserCommand(input));
        reason = result;
        return { state: utilWaiter.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NoSuchEntityException") {
            return { state: utilWaiter.WaiterState.RETRY, reason };
        }
    }
    return { state: utilWaiter.WaiterState.RETRY, reason };
};
const waitForUserExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilUserExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await utilWaiter.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return utilWaiter.checkExceptions(result);
};

const commands = {
    AcceptDelegationRequestCommand,
    AddClientIDToOpenIDConnectProviderCommand,
    AddRoleToInstanceProfileCommand,
    AddUserToGroupCommand,
    AssociateDelegationRequestCommand,
    AttachGroupPolicyCommand,
    AttachRolePolicyCommand,
    AttachUserPolicyCommand,
    ChangePasswordCommand,
    CreateAccessKeyCommand,
    CreateAccountAliasCommand,
    CreateDelegationRequestCommand,
    CreateGroupCommand,
    CreateInstanceProfileCommand,
    CreateLoginProfileCommand,
    CreateOpenIDConnectProviderCommand,
    CreatePolicyCommand,
    CreatePolicyVersionCommand,
    CreateRoleCommand,
    CreateSAMLProviderCommand,
    CreateServiceLinkedRoleCommand,
    CreateServiceSpecificCredentialCommand,
    CreateUserCommand,
    CreateVirtualMFADeviceCommand,
    DeactivateMFADeviceCommand,
    DeleteAccessKeyCommand,
    DeleteAccountAliasCommand,
    DeleteAccountPasswordPolicyCommand,
    DeleteGroupCommand,
    DeleteGroupPolicyCommand,
    DeleteInstanceProfileCommand,
    DeleteLoginProfileCommand,
    DeleteOpenIDConnectProviderCommand,
    DeletePolicyCommand,
    DeletePolicyVersionCommand,
    DeleteRoleCommand,
    DeleteRolePermissionsBoundaryCommand,
    DeleteRolePolicyCommand,
    DeleteSAMLProviderCommand,
    DeleteServerCertificateCommand,
    DeleteServiceLinkedRoleCommand,
    DeleteServiceSpecificCredentialCommand,
    DeleteSigningCertificateCommand,
    DeleteSSHPublicKeyCommand,
    DeleteUserCommand,
    DeleteUserPermissionsBoundaryCommand,
    DeleteUserPolicyCommand,
    DeleteVirtualMFADeviceCommand,
    DetachGroupPolicyCommand,
    DetachRolePolicyCommand,
    DetachUserPolicyCommand,
    DisableOrganizationsRootCredentialsManagementCommand,
    DisableOrganizationsRootSessionsCommand,
    DisableOutboundWebIdentityFederationCommand,
    EnableMFADeviceCommand,
    EnableOrganizationsRootCredentialsManagementCommand,
    EnableOrganizationsRootSessionsCommand,
    EnableOutboundWebIdentityFederationCommand,
    GenerateCredentialReportCommand,
    GenerateOrganizationsAccessReportCommand,
    GenerateServiceLastAccessedDetailsCommand,
    GetAccessKeyLastUsedCommand,
    GetAccountAuthorizationDetailsCommand,
    GetAccountPasswordPolicyCommand,
    GetAccountSummaryCommand,
    GetContextKeysForCustomPolicyCommand,
    GetContextKeysForPrincipalPolicyCommand,
    GetCredentialReportCommand,
    GetDelegationRequestCommand,
    GetGroupCommand,
    GetGroupPolicyCommand,
    GetHumanReadableSummaryCommand,
    GetInstanceProfileCommand,
    GetLoginProfileCommand,
    GetMFADeviceCommand,
    GetOpenIDConnectProviderCommand,
    GetOrganizationsAccessReportCommand,
    GetOutboundWebIdentityFederationInfoCommand,
    GetPolicyCommand,
    GetPolicyVersionCommand,
    GetRoleCommand,
    GetRolePolicyCommand,
    GetSAMLProviderCommand,
    GetServerCertificateCommand,
    GetServiceLastAccessedDetailsCommand,
    GetServiceLastAccessedDetailsWithEntitiesCommand,
    GetServiceLinkedRoleDeletionStatusCommand,
    GetSSHPublicKeyCommand,
    GetUserCommand,
    GetUserPolicyCommand,
    ListAccessKeysCommand,
    ListAccountAliasesCommand,
    ListAttachedGroupPoliciesCommand,
    ListAttachedRolePoliciesCommand,
    ListAttachedUserPoliciesCommand,
    ListDelegationRequestsCommand,
    ListEntitiesForPolicyCommand,
    ListGroupPoliciesCommand,
    ListGroupsCommand,
    ListGroupsForUserCommand,
    ListInstanceProfilesCommand,
    ListInstanceProfilesForRoleCommand,
    ListInstanceProfileTagsCommand,
    ListMFADevicesCommand,
    ListMFADeviceTagsCommand,
    ListOpenIDConnectProvidersCommand,
    ListOpenIDConnectProviderTagsCommand,
    ListOrganizationsFeaturesCommand,
    ListPoliciesCommand,
    ListPoliciesGrantingServiceAccessCommand,
    ListPolicyTagsCommand,
    ListPolicyVersionsCommand,
    ListRolePoliciesCommand,
    ListRolesCommand,
    ListRoleTagsCommand,
    ListSAMLProvidersCommand,
    ListSAMLProviderTagsCommand,
    ListServerCertificatesCommand,
    ListServerCertificateTagsCommand,
    ListServiceSpecificCredentialsCommand,
    ListSigningCertificatesCommand,
    ListSSHPublicKeysCommand,
    ListUserPoliciesCommand,
    ListUsersCommand,
    ListUserTagsCommand,
    ListVirtualMFADevicesCommand,
    PutGroupPolicyCommand,
    PutRolePermissionsBoundaryCommand,
    PutRolePolicyCommand,
    PutUserPermissionsBoundaryCommand,
    PutUserPolicyCommand,
    RejectDelegationRequestCommand,
    RemoveClientIDFromOpenIDConnectProviderCommand,
    RemoveRoleFromInstanceProfileCommand,
    RemoveUserFromGroupCommand,
    ResetServiceSpecificCredentialCommand,
    ResyncMFADeviceCommand,
    SendDelegationTokenCommand,
    SetDefaultPolicyVersionCommand,
    SetSecurityTokenServicePreferencesCommand,
    SimulateCustomPolicyCommand,
    SimulatePrincipalPolicyCommand,
    TagInstanceProfileCommand,
    TagMFADeviceCommand,
    TagOpenIDConnectProviderCommand,
    TagPolicyCommand,
    TagRoleCommand,
    TagSAMLProviderCommand,
    TagServerCertificateCommand,
    TagUserCommand,
    UntagInstanceProfileCommand,
    UntagMFADeviceCommand,
    UntagOpenIDConnectProviderCommand,
    UntagPolicyCommand,
    UntagRoleCommand,
    UntagSAMLProviderCommand,
    UntagServerCertificateCommand,
    UntagUserCommand,
    UpdateAccessKeyCommand,
    UpdateAccountPasswordPolicyCommand,
    UpdateAssumeRolePolicyCommand,
    UpdateDelegationRequestCommand,
    UpdateGroupCommand,
    UpdateLoginProfileCommand,
    UpdateOpenIDConnectProviderThumbprintCommand,
    UpdateRoleCommand,
    UpdateRoleDescriptionCommand,
    UpdateSAMLProviderCommand,
    UpdateServerCertificateCommand,
    UpdateServiceSpecificCredentialCommand,
    UpdateSigningCertificateCommand,
    UpdateSSHPublicKeyCommand,
    UpdateUserCommand,
    UploadServerCertificateCommand,
    UploadSigningCertificateCommand,
    UploadSSHPublicKeyCommand,
};
const paginators = {
    paginateGetAccountAuthorizationDetails,
    paginateGetGroup,
    paginateListAccessKeys,
    paginateListAccountAliases,
    paginateListAttachedGroupPolicies,
    paginateListAttachedRolePolicies,
    paginateListAttachedUserPolicies,
    paginateListEntitiesForPolicy,
    paginateListGroupPolicies,
    paginateListGroups,
    paginateListGroupsForUser,
    paginateListInstanceProfiles,
    paginateListInstanceProfilesForRole,
    paginateListInstanceProfileTags,
    paginateListMFADevices,
    paginateListMFADeviceTags,
    paginateListOpenIDConnectProviderTags,
    paginateListPolicies,
    paginateListPolicyTags,
    paginateListPolicyVersions,
    paginateListRolePolicies,
    paginateListRoles,
    paginateListRoleTags,
    paginateListSAMLProviderTags,
    paginateListServerCertificates,
    paginateListServerCertificateTags,
    paginateListSigningCertificates,
    paginateListSSHPublicKeys,
    paginateListUserPolicies,
    paginateListUsers,
    paginateListUserTags,
    paginateListVirtualMFADevices,
    paginateSimulateCustomPolicy,
    paginateSimulatePrincipalPolicy,
};
const waiters = {
    waitUntilInstanceProfileExists,
    waitUntilPolicyExists,
    waitUntilRoleExists,
    waitUntilUserExists,
};
class IAM extends IAMClient {
}
smithyClient.createAggregatedClient(commands, IAM, { paginators, waiters });

const AccessAdvisorUsageGranularityType = {
    ACTION_LEVEL: "ACTION_LEVEL",
    SERVICE_LEVEL: "SERVICE_LEVEL",
};
const StatusType = {
    Active: "Active",
    Expired: "Expired",
    Inactive: "Inactive",
};
const AssertionEncryptionModeType = {
    Allowed: "Allowed",
    Required: "Required",
};
const AssignmentStatusType = {
    Any: "Any",
    Assigned: "Assigned",
    Unassigned: "Unassigned",
};
const PermissionsBoundaryAttachmentType = {
    Policy: "PermissionsBoundaryPolicy",
};
const PolicyParameterTypeEnum = {
    STRING: "string",
    STRING_LIST: "stringList",
};
const FeatureType = {
    ROOT_CREDENTIALS_MANAGEMENT: "RootCredentialsManagement",
    ROOT_SESSIONS: "RootSessions",
};
const ReportStateType = {
    COMPLETE: "COMPLETE",
    INPROGRESS: "INPROGRESS",
    STARTED: "STARTED",
};
const EntityType = {
    AWSManagedPolicy: "AWSManagedPolicy",
    Group: "Group",
    LocalManagedPolicy: "LocalManagedPolicy",
    Role: "Role",
    User: "User",
};
const SummaryKeyType = {
    AccessKeysPerUserQuota: "AccessKeysPerUserQuota",
    AccountAccessKeysPresent: "AccountAccessKeysPresent",
    AccountMFAEnabled: "AccountMFAEnabled",
    AccountPasswordPresent: "AccountPasswordPresent",
    AccountSigningCertificatesPresent: "AccountSigningCertificatesPresent",
    AssumeRolePolicySizeQuota: "AssumeRolePolicySizeQuota",
    AttachedPoliciesPerGroupQuota: "AttachedPoliciesPerGroupQuota",
    AttachedPoliciesPerRoleQuota: "AttachedPoliciesPerRoleQuota",
    AttachedPoliciesPerUserQuota: "AttachedPoliciesPerUserQuota",
    GlobalEndpointTokenVersion: "GlobalEndpointTokenVersion",
    GroupPolicySizeQuota: "GroupPolicySizeQuota",
    Groups: "Groups",
    GroupsPerUserQuota: "GroupsPerUserQuota",
    GroupsQuota: "GroupsQuota",
    InstanceProfiles: "InstanceProfiles",
    InstanceProfilesQuota: "InstanceProfilesQuota",
    MFADevices: "MFADevices",
    MFADevicesInUse: "MFADevicesInUse",
    Policies: "Policies",
    PoliciesQuota: "PoliciesQuota",
    PolicySizeQuota: "PolicySizeQuota",
    PolicyVersionsInUse: "PolicyVersionsInUse",
    PolicyVersionsInUseQuota: "PolicyVersionsInUseQuota",
    Providers: "Providers",
    RolePolicySizeQuota: "RolePolicySizeQuota",
    Roles: "Roles",
    RolesQuota: "RolesQuota",
    ServerCertificates: "ServerCertificates",
    ServerCertificatesQuota: "ServerCertificatesQuota",
    SigningCertificatesPerUserQuota: "SigningCertificatesPerUserQuota",
    UserPolicySizeQuota: "UserPolicySizeQuota",
    Users: "Users",
    UsersQuota: "UsersQuota",
    VersionsPerPolicyQuota: "VersionsPerPolicyQuota",
};
const ReportFormatType = {
    text_csv: "text/csv",
};
const StateType = {
    ACCEPTED: "ACCEPTED",
    ASSIGNED: "ASSIGNED",
    EXPIRED: "EXPIRED",
    FINALIZED: "FINALIZED",
    PENDING_APPROVAL: "PENDING_APPROVAL",
    REJECTED: "REJECTED",
    UNASSIGNED: "UNASSIGNED",
};
const PermissionCheckResultType = {
    ALLOWED: "ALLOWED",
    DENIED: "DENIED",
    UNSURE: "UNSURE",
};
const PermissionCheckStatusType = {
    COMPLETE: "COMPLETE",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const SummaryStateType = {
    AVAILABLE: "AVAILABLE",
    FAILED: "FAILED",
    NOT_AVAILABLE: "NOT_AVAILABLE",
    NOT_SUPPORTED: "NOT_SUPPORTED",
};
const SortKeyType = {
    LAST_AUTHENTICATED_TIME_ASCENDING: "LAST_AUTHENTICATED_TIME_ASCENDING",
    LAST_AUTHENTICATED_TIME_DESCENDING: "LAST_AUTHENTICATED_TIME_DESCENDING",
    SERVICE_NAMESPACE_ASCENDING: "SERVICE_NAMESPACE_ASCENDING",
    SERVICE_NAMESPACE_DESCENDING: "SERVICE_NAMESPACE_DESCENDING",
};
const JobStatusType = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const PolicyOwnerEntityType = {
    GROUP: "GROUP",
    ROLE: "ROLE",
    USER: "USER",
};
const DeletionTaskStatusType = {
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    NOT_STARTED: "NOT_STARTED",
    SUCCEEDED: "SUCCEEDED",
};
const EncodingType = {
    PEM: "PEM",
    SSH: "SSH",
};
const PolicyUsageType = {
    PermissionsBoundary: "PermissionsBoundary",
    PermissionsPolicy: "PermissionsPolicy",
};
const PolicyScopeType = {
    AWS: "AWS",
    All: "All",
    Local: "Local",
};
const PolicyType = {
    INLINE: "INLINE",
    MANAGED: "MANAGED",
};
const GlobalEndpointTokenVersion = {
    v1Token: "v1Token",
    v2Token: "v2Token",
};
const ContextKeyTypeEnum = {
    BINARY: "binary",
    BINARY_LIST: "binaryList",
    BOOLEAN: "boolean",
    BOOLEAN_LIST: "booleanList",
    DATE: "date",
    DATE_LIST: "dateList",
    IP: "ip",
    IP_LIST: "ipList",
    NUMERIC: "numeric",
    NUMERIC_LIST: "numericList",
    STRING: "string",
    STRING_LIST: "stringList",
};
const PolicyEvaluationDecisionType = {
    ALLOWED: "allowed",
    EXPLICIT_DENY: "explicitDeny",
    IMPLICIT_DENY: "implicitDeny",
};
const PolicySourceType = {
    AWS_MANAGED: "aws-managed",
    GROUP: "group",
    NONE: "none",
    RESOURCE: "resource",
    ROLE: "role",
    USER: "user",
    USER_MANAGED: "user-managed",
};

exports.$Command = smithyClient.Command;
exports.__Client = smithyClient.Client;
exports.IAMServiceException = IAMServiceException.IAMServiceException;
exports.AcceptDelegationRequestCommand = AcceptDelegationRequestCommand;
exports.AccessAdvisorUsageGranularityType = AccessAdvisorUsageGranularityType;
exports.AddClientIDToOpenIDConnectProviderCommand = AddClientIDToOpenIDConnectProviderCommand;
exports.AddRoleToInstanceProfileCommand = AddRoleToInstanceProfileCommand;
exports.AddUserToGroupCommand = AddUserToGroupCommand;
exports.AssertionEncryptionModeType = AssertionEncryptionModeType;
exports.AssignmentStatusType = AssignmentStatusType;
exports.AssociateDelegationRequestCommand = AssociateDelegationRequestCommand;
exports.AttachGroupPolicyCommand = AttachGroupPolicyCommand;
exports.AttachRolePolicyCommand = AttachRolePolicyCommand;
exports.AttachUserPolicyCommand = AttachUserPolicyCommand;
exports.ChangePasswordCommand = ChangePasswordCommand;
exports.ContextKeyTypeEnum = ContextKeyTypeEnum;
exports.CreateAccessKeyCommand = CreateAccessKeyCommand;
exports.CreateAccountAliasCommand = CreateAccountAliasCommand;
exports.CreateDelegationRequestCommand = CreateDelegationRequestCommand;
exports.CreateGroupCommand = CreateGroupCommand;
exports.CreateInstanceProfileCommand = CreateInstanceProfileCommand;
exports.CreateLoginProfileCommand = CreateLoginProfileCommand;
exports.CreateOpenIDConnectProviderCommand = CreateOpenIDConnectProviderCommand;
exports.CreatePolicyCommand = CreatePolicyCommand;
exports.CreatePolicyVersionCommand = CreatePolicyVersionCommand;
exports.CreateRoleCommand = CreateRoleCommand;
exports.CreateSAMLProviderCommand = CreateSAMLProviderCommand;
exports.CreateServiceLinkedRoleCommand = CreateServiceLinkedRoleCommand;
exports.CreateServiceSpecificCredentialCommand = CreateServiceSpecificCredentialCommand;
exports.CreateUserCommand = CreateUserCommand;
exports.CreateVirtualMFADeviceCommand = CreateVirtualMFADeviceCommand;
exports.DeactivateMFADeviceCommand = DeactivateMFADeviceCommand;
exports.DeleteAccessKeyCommand = DeleteAccessKeyCommand;
exports.DeleteAccountAliasCommand = DeleteAccountAliasCommand;
exports.DeleteAccountPasswordPolicyCommand = DeleteAccountPasswordPolicyCommand;
exports.DeleteGroupCommand = DeleteGroupCommand;
exports.DeleteGroupPolicyCommand = DeleteGroupPolicyCommand;
exports.DeleteInstanceProfileCommand = DeleteInstanceProfileCommand;
exports.DeleteLoginProfileCommand = DeleteLoginProfileCommand;
exports.DeleteOpenIDConnectProviderCommand = DeleteOpenIDConnectProviderCommand;
exports.DeletePolicyCommand = DeletePolicyCommand;
exports.DeletePolicyVersionCommand = DeletePolicyVersionCommand;
exports.DeleteRoleCommand = DeleteRoleCommand;
exports.DeleteRolePermissionsBoundaryCommand = DeleteRolePermissionsBoundaryCommand;
exports.DeleteRolePolicyCommand = DeleteRolePolicyCommand;
exports.DeleteSAMLProviderCommand = DeleteSAMLProviderCommand;
exports.DeleteSSHPublicKeyCommand = DeleteSSHPublicKeyCommand;
exports.DeleteServerCertificateCommand = DeleteServerCertificateCommand;
exports.DeleteServiceLinkedRoleCommand = DeleteServiceLinkedRoleCommand;
exports.DeleteServiceSpecificCredentialCommand = DeleteServiceSpecificCredentialCommand;
exports.DeleteSigningCertificateCommand = DeleteSigningCertificateCommand;
exports.DeleteUserCommand = DeleteUserCommand;
exports.DeleteUserPermissionsBoundaryCommand = DeleteUserPermissionsBoundaryCommand;
exports.DeleteUserPolicyCommand = DeleteUserPolicyCommand;
exports.DeleteVirtualMFADeviceCommand = DeleteVirtualMFADeviceCommand;
exports.DeletionTaskStatusType = DeletionTaskStatusType;
exports.DetachGroupPolicyCommand = DetachGroupPolicyCommand;
exports.DetachRolePolicyCommand = DetachRolePolicyCommand;
exports.DetachUserPolicyCommand = DetachUserPolicyCommand;
exports.DisableOrganizationsRootCredentialsManagementCommand = DisableOrganizationsRootCredentialsManagementCommand;
exports.DisableOrganizationsRootSessionsCommand = DisableOrganizationsRootSessionsCommand;
exports.DisableOutboundWebIdentityFederationCommand = DisableOutboundWebIdentityFederationCommand;
exports.EnableMFADeviceCommand = EnableMFADeviceCommand;
exports.EnableOrganizationsRootCredentialsManagementCommand = EnableOrganizationsRootCredentialsManagementCommand;
exports.EnableOrganizationsRootSessionsCommand = EnableOrganizationsRootSessionsCommand;
exports.EnableOutboundWebIdentityFederationCommand = EnableOutboundWebIdentityFederationCommand;
exports.EncodingType = EncodingType;
exports.EntityType = EntityType;
exports.FeatureType = FeatureType;
exports.GenerateCredentialReportCommand = GenerateCredentialReportCommand;
exports.GenerateOrganizationsAccessReportCommand = GenerateOrganizationsAccessReportCommand;
exports.GenerateServiceLastAccessedDetailsCommand = GenerateServiceLastAccessedDetailsCommand;
exports.GetAccessKeyLastUsedCommand = GetAccessKeyLastUsedCommand;
exports.GetAccountAuthorizationDetailsCommand = GetAccountAuthorizationDetailsCommand;
exports.GetAccountPasswordPolicyCommand = GetAccountPasswordPolicyCommand;
exports.GetAccountSummaryCommand = GetAccountSummaryCommand;
exports.GetContextKeysForCustomPolicyCommand = GetContextKeysForCustomPolicyCommand;
exports.GetContextKeysForPrincipalPolicyCommand = GetContextKeysForPrincipalPolicyCommand;
exports.GetCredentialReportCommand = GetCredentialReportCommand;
exports.GetDelegationRequestCommand = GetDelegationRequestCommand;
exports.GetGroupCommand = GetGroupCommand;
exports.GetGroupPolicyCommand = GetGroupPolicyCommand;
exports.GetHumanReadableSummaryCommand = GetHumanReadableSummaryCommand;
exports.GetInstanceProfileCommand = GetInstanceProfileCommand;
exports.GetLoginProfileCommand = GetLoginProfileCommand;
exports.GetMFADeviceCommand = GetMFADeviceCommand;
exports.GetOpenIDConnectProviderCommand = GetOpenIDConnectProviderCommand;
exports.GetOrganizationsAccessReportCommand = GetOrganizationsAccessReportCommand;
exports.GetOutboundWebIdentityFederationInfoCommand = GetOutboundWebIdentityFederationInfoCommand;
exports.GetPolicyCommand = GetPolicyCommand;
exports.GetPolicyVersionCommand = GetPolicyVersionCommand;
exports.GetRoleCommand = GetRoleCommand;
exports.GetRolePolicyCommand = GetRolePolicyCommand;
exports.GetSAMLProviderCommand = GetSAMLProviderCommand;
exports.GetSSHPublicKeyCommand = GetSSHPublicKeyCommand;
exports.GetServerCertificateCommand = GetServerCertificateCommand;
exports.GetServiceLastAccessedDetailsCommand = GetServiceLastAccessedDetailsCommand;
exports.GetServiceLastAccessedDetailsWithEntitiesCommand = GetServiceLastAccessedDetailsWithEntitiesCommand;
exports.GetServiceLinkedRoleDeletionStatusCommand = GetServiceLinkedRoleDeletionStatusCommand;
exports.GetUserCommand = GetUserCommand;
exports.GetUserPolicyCommand = GetUserPolicyCommand;
exports.GlobalEndpointTokenVersion = GlobalEndpointTokenVersion;
exports.IAM = IAM;
exports.IAMClient = IAMClient;
exports.JobStatusType = JobStatusType;
exports.ListAccessKeysCommand = ListAccessKeysCommand;
exports.ListAccountAliasesCommand = ListAccountAliasesCommand;
exports.ListAttachedGroupPoliciesCommand = ListAttachedGroupPoliciesCommand;
exports.ListAttachedRolePoliciesCommand = ListAttachedRolePoliciesCommand;
exports.ListAttachedUserPoliciesCommand = ListAttachedUserPoliciesCommand;
exports.ListDelegationRequestsCommand = ListDelegationRequestsCommand;
exports.ListEntitiesForPolicyCommand = ListEntitiesForPolicyCommand;
exports.ListGroupPoliciesCommand = ListGroupPoliciesCommand;
exports.ListGroupsCommand = ListGroupsCommand;
exports.ListGroupsForUserCommand = ListGroupsForUserCommand;
exports.ListInstanceProfileTagsCommand = ListInstanceProfileTagsCommand;
exports.ListInstanceProfilesCommand = ListInstanceProfilesCommand;
exports.ListInstanceProfilesForRoleCommand = ListInstanceProfilesForRoleCommand;
exports.ListMFADeviceTagsCommand = ListMFADeviceTagsCommand;
exports.ListMFADevicesCommand = ListMFADevicesCommand;
exports.ListOpenIDConnectProviderTagsCommand = ListOpenIDConnectProviderTagsCommand;
exports.ListOpenIDConnectProvidersCommand = ListOpenIDConnectProvidersCommand;
exports.ListOrganizationsFeaturesCommand = ListOrganizationsFeaturesCommand;
exports.ListPoliciesCommand = ListPoliciesCommand;
exports.ListPoliciesGrantingServiceAccessCommand = ListPoliciesGrantingServiceAccessCommand;
exports.ListPolicyTagsCommand = ListPolicyTagsCommand;
exports.ListPolicyVersionsCommand = ListPolicyVersionsCommand;
exports.ListRolePoliciesCommand = ListRolePoliciesCommand;
exports.ListRoleTagsCommand = ListRoleTagsCommand;
exports.ListRolesCommand = ListRolesCommand;
exports.ListSAMLProviderTagsCommand = ListSAMLProviderTagsCommand;
exports.ListSAMLProvidersCommand = ListSAMLProvidersCommand;
exports.ListSSHPublicKeysCommand = ListSSHPublicKeysCommand;
exports.ListServerCertificateTagsCommand = ListServerCertificateTagsCommand;
exports.ListServerCertificatesCommand = ListServerCertificatesCommand;
exports.ListServiceSpecificCredentialsCommand = ListServiceSpecificCredentialsCommand;
exports.ListSigningCertificatesCommand = ListSigningCertificatesCommand;
exports.ListUserPoliciesCommand = ListUserPoliciesCommand;
exports.ListUserTagsCommand = ListUserTagsCommand;
exports.ListUsersCommand = ListUsersCommand;
exports.ListVirtualMFADevicesCommand = ListVirtualMFADevicesCommand;
exports.PermissionCheckResultType = PermissionCheckResultType;
exports.PermissionCheckStatusType = PermissionCheckStatusType;
exports.PermissionsBoundaryAttachmentType = PermissionsBoundaryAttachmentType;
exports.PolicyEvaluationDecisionType = PolicyEvaluationDecisionType;
exports.PolicyOwnerEntityType = PolicyOwnerEntityType;
exports.PolicyParameterTypeEnum = PolicyParameterTypeEnum;
exports.PolicyScopeType = PolicyScopeType;
exports.PolicySourceType = PolicySourceType;
exports.PolicyType = PolicyType;
exports.PolicyUsageType = PolicyUsageType;
exports.PutGroupPolicyCommand = PutGroupPolicyCommand;
exports.PutRolePermissionsBoundaryCommand = PutRolePermissionsBoundaryCommand;
exports.PutRolePolicyCommand = PutRolePolicyCommand;
exports.PutUserPermissionsBoundaryCommand = PutUserPermissionsBoundaryCommand;
exports.PutUserPolicyCommand = PutUserPolicyCommand;
exports.RejectDelegationRequestCommand = RejectDelegationRequestCommand;
exports.RemoveClientIDFromOpenIDConnectProviderCommand = RemoveClientIDFromOpenIDConnectProviderCommand;
exports.RemoveRoleFromInstanceProfileCommand = RemoveRoleFromInstanceProfileCommand;
exports.RemoveUserFromGroupCommand = RemoveUserFromGroupCommand;
exports.ReportFormatType = ReportFormatType;
exports.ReportStateType = ReportStateType;
exports.ResetServiceSpecificCredentialCommand = ResetServiceSpecificCredentialCommand;
exports.ResyncMFADeviceCommand = ResyncMFADeviceCommand;
exports.SendDelegationTokenCommand = SendDelegationTokenCommand;
exports.SetDefaultPolicyVersionCommand = SetDefaultPolicyVersionCommand;
exports.SetSecurityTokenServicePreferencesCommand = SetSecurityTokenServicePreferencesCommand;
exports.SimulateCustomPolicyCommand = SimulateCustomPolicyCommand;
exports.SimulatePrincipalPolicyCommand = SimulatePrincipalPolicyCommand;
exports.SortKeyType = SortKeyType;
exports.StateType = StateType;
exports.StatusType = StatusType;
exports.SummaryKeyType = SummaryKeyType;
exports.SummaryStateType = SummaryStateType;
exports.TagInstanceProfileCommand = TagInstanceProfileCommand;
exports.TagMFADeviceCommand = TagMFADeviceCommand;
exports.TagOpenIDConnectProviderCommand = TagOpenIDConnectProviderCommand;
exports.TagPolicyCommand = TagPolicyCommand;
exports.TagRoleCommand = TagRoleCommand;
exports.TagSAMLProviderCommand = TagSAMLProviderCommand;
exports.TagServerCertificateCommand = TagServerCertificateCommand;
exports.TagUserCommand = TagUserCommand;
exports.UntagInstanceProfileCommand = UntagInstanceProfileCommand;
exports.UntagMFADeviceCommand = UntagMFADeviceCommand;
exports.UntagOpenIDConnectProviderCommand = UntagOpenIDConnectProviderCommand;
exports.UntagPolicyCommand = UntagPolicyCommand;
exports.UntagRoleCommand = UntagRoleCommand;
exports.UntagSAMLProviderCommand = UntagSAMLProviderCommand;
exports.UntagServerCertificateCommand = UntagServerCertificateCommand;
exports.UntagUserCommand = UntagUserCommand;
exports.UpdateAccessKeyCommand = UpdateAccessKeyCommand;
exports.UpdateAccountPasswordPolicyCommand = UpdateAccountPasswordPolicyCommand;
exports.UpdateAssumeRolePolicyCommand = UpdateAssumeRolePolicyCommand;
exports.UpdateDelegationRequestCommand = UpdateDelegationRequestCommand;
exports.UpdateGroupCommand = UpdateGroupCommand;
exports.UpdateLoginProfileCommand = UpdateLoginProfileCommand;
exports.UpdateOpenIDConnectProviderThumbprintCommand = UpdateOpenIDConnectProviderThumbprintCommand;
exports.UpdateRoleCommand = UpdateRoleCommand;
exports.UpdateRoleDescriptionCommand = UpdateRoleDescriptionCommand;
exports.UpdateSAMLProviderCommand = UpdateSAMLProviderCommand;
exports.UpdateSSHPublicKeyCommand = UpdateSSHPublicKeyCommand;
exports.UpdateServerCertificateCommand = UpdateServerCertificateCommand;
exports.UpdateServiceSpecificCredentialCommand = UpdateServiceSpecificCredentialCommand;
exports.UpdateSigningCertificateCommand = UpdateSigningCertificateCommand;
exports.UpdateUserCommand = UpdateUserCommand;
exports.UploadSSHPublicKeyCommand = UploadSSHPublicKeyCommand;
exports.UploadServerCertificateCommand = UploadServerCertificateCommand;
exports.UploadSigningCertificateCommand = UploadSigningCertificateCommand;
exports.paginateGetAccountAuthorizationDetails = paginateGetAccountAuthorizationDetails;
exports.paginateGetGroup = paginateGetGroup;
exports.paginateListAccessKeys = paginateListAccessKeys;
exports.paginateListAccountAliases = paginateListAccountAliases;
exports.paginateListAttachedGroupPolicies = paginateListAttachedGroupPolicies;
exports.paginateListAttachedRolePolicies = paginateListAttachedRolePolicies;
exports.paginateListAttachedUserPolicies = paginateListAttachedUserPolicies;
exports.paginateListEntitiesForPolicy = paginateListEntitiesForPolicy;
exports.paginateListGroupPolicies = paginateListGroupPolicies;
exports.paginateListGroups = paginateListGroups;
exports.paginateListGroupsForUser = paginateListGroupsForUser;
exports.paginateListInstanceProfileTags = paginateListInstanceProfileTags;
exports.paginateListInstanceProfiles = paginateListInstanceProfiles;
exports.paginateListInstanceProfilesForRole = paginateListInstanceProfilesForRole;
exports.paginateListMFADeviceTags = paginateListMFADeviceTags;
exports.paginateListMFADevices = paginateListMFADevices;
exports.paginateListOpenIDConnectProviderTags = paginateListOpenIDConnectProviderTags;
exports.paginateListPolicies = paginateListPolicies;
exports.paginateListPolicyTags = paginateListPolicyTags;
exports.paginateListPolicyVersions = paginateListPolicyVersions;
exports.paginateListRolePolicies = paginateListRolePolicies;
exports.paginateListRoleTags = paginateListRoleTags;
exports.paginateListRoles = paginateListRoles;
exports.paginateListSAMLProviderTags = paginateListSAMLProviderTags;
exports.paginateListSSHPublicKeys = paginateListSSHPublicKeys;
exports.paginateListServerCertificateTags = paginateListServerCertificateTags;
exports.paginateListServerCertificates = paginateListServerCertificates;
exports.paginateListSigningCertificates = paginateListSigningCertificates;
exports.paginateListUserPolicies = paginateListUserPolicies;
exports.paginateListUserTags = paginateListUserTags;
exports.paginateListUsers = paginateListUsers;
exports.paginateListVirtualMFADevices = paginateListVirtualMFADevices;
exports.paginateSimulateCustomPolicy = paginateSimulateCustomPolicy;
exports.paginateSimulatePrincipalPolicy = paginateSimulatePrincipalPolicy;
exports.waitForInstanceProfileExists = waitForInstanceProfileExists;
exports.waitForPolicyExists = waitForPolicyExists;
exports.waitForRoleExists = waitForRoleExists;
exports.waitForUserExists = waitForUserExists;
exports.waitUntilInstanceProfileExists = waitUntilInstanceProfileExists;
exports.waitUntilPolicyExists = waitUntilPolicyExists;
exports.waitUntilRoleExists = waitUntilRoleExists;
exports.waitUntilUserExists = waitUntilUserExists;
Object.prototype.hasOwnProperty.call(schemas_0, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: schemas_0['__proto__']
    });

Object.keys(schemas_0).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = schemas_0[k];
});
Object.prototype.hasOwnProperty.call(errors, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: errors['__proto__']
    });

Object.keys(errors).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = errors[k];
});
