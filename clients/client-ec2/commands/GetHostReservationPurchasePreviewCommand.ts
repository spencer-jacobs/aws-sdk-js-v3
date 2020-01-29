import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  GetHostReservationPurchasePreviewRequest,
  GetHostReservationPurchasePreviewResult
} from "../models/index";
import {
  deserializeAws_ec2GetHostReservationPurchasePreviewCommand,
  serializeAws_ec2GetHostReservationPurchasePreviewCommand
} from "../protocols/Aws_ec2";
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

export type GetHostReservationPurchasePreviewCommandInput = GetHostReservationPurchasePreviewRequest;
export type GetHostReservationPurchasePreviewCommandOutput = GetHostReservationPurchasePreviewResult;

export class GetHostReservationPurchasePreviewCommand extends $Command<
  GetHostReservationPurchasePreviewCommandInput,
  GetHostReservationPurchasePreviewCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostReservationPurchasePreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetHostReservationPurchasePreviewCommandInput,
    GetHostReservationPurchasePreviewCommandOutput
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
    input: GetHostReservationPurchasePreviewCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetHostReservationPurchasePreviewCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetHostReservationPurchasePreviewCommandOutput> {
    return deserializeAws_ec2GetHostReservationPurchasePreviewCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}