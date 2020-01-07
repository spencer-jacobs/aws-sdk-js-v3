import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SecretsManagerClient";
import {
  UpdateSecretVersionStageRequest,
  UpdateSecretVersionStageResponse
} from "../models/index";
import {
  deserializeAws_json1_1UpdateSecretVersionStageCommand,
  serializeAws_json1_1UpdateSecretVersionStageCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type UpdateSecretVersionStageCommandInput = UpdateSecretVersionStageRequest;
export type UpdateSecretVersionStageCommandOutput = UpdateSecretVersionStageResponse;

export class UpdateSecretVersionStageCommand extends $Command<
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecretVersionStageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateSecretVersionStageCommandInput,
    UpdateSecretVersionStageCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecretVersionStageCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSecretVersionStageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateSecretVersionStageCommandOutput> {
    return deserializeAws_json1_1UpdateSecretVersionStageCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}