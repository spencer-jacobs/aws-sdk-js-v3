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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  ListTableColumnsRequest,
  ListTableColumnsRequestFilterSensitiveLog,
  ListTableColumnsResult,
  ListTableColumnsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListTableColumnsCommand,
  serializeAws_restJson1ListTableColumnsCommand,
} from "../protocols/Aws_restJson1";

export interface ListTableColumnsCommandInput extends ListTableColumnsRequest {}
export interface ListTableColumnsCommandOutput extends ListTableColumnsResult, __MetadataBearer {}

/**
 * <p>
 *             The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableColumnsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableColumnsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTableColumnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableColumnsCommandInput} for command's `input` shape.
 * @see {@link ListTableColumnsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 */
export class ListTableColumnsCommand extends $Command<
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTableColumnsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTableColumnsCommandInput, ListTableColumnsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "ListTableColumnsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTableColumnsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTableColumnsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTableColumnsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTableColumnsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTableColumnsCommandOutput> {
    return deserializeAws_restJson1ListTableColumnsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
