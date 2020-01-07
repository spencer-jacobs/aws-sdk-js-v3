import {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig
} from "../StorageGatewayClient";
import {
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordOutput
} from "../models/index";
import {
  deserializeAws_json1_1SetLocalConsolePasswordCommand,
  serializeAws_json1_1SetLocalConsolePasswordCommand
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

export type SetLocalConsolePasswordCommandInput = SetLocalConsolePasswordInput;
export type SetLocalConsolePasswordCommandOutput = SetLocalConsolePasswordOutput;

export class SetLocalConsolePasswordCommand extends $Command<
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLocalConsolePasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetLocalConsolePasswordCommandInput,
    SetLocalConsolePasswordCommandOutput
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
    input: SetLocalConsolePasswordCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SetLocalConsolePasswordCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<SetLocalConsolePasswordCommandOutput> {
    return deserializeAws_json1_1SetLocalConsolePasswordCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}