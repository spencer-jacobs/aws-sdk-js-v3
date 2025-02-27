// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeleteThemeRequest,
  DeleteThemeRequestFilterSensitiveLog,
  DeleteThemeResponse,
  DeleteThemeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteThemeCommand,
  serializeAws_restJson1DeleteThemeCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DeleteThemeCommandInput extends DeleteThemeRequest {}
export interface DeleteThemeCommandOutput extends DeleteThemeResponse, __MetadataBearer {}

/**
 * <p>Deletes a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThemeCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class DeleteThemeCommand extends $Command<
  DeleteThemeCommandInput,
  DeleteThemeCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteThemeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteThemeCommandInput, DeleteThemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteThemeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteThemeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteThemeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteThemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThemeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteThemeCommandOutput> {
    return deserializeAws_restJson1DeleteThemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
