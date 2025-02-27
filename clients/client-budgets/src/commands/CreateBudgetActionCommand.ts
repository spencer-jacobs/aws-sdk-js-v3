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

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import {
  CreateBudgetActionRequest,
  CreateBudgetActionRequestFilterSensitiveLog,
  CreateBudgetActionResponse,
  CreateBudgetActionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateBudgetActionCommand,
  serializeAws_json1_1CreateBudgetActionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateBudgetActionCommandInput extends CreateBudgetActionRequest {}
export interface CreateBudgetActionCommandOutput extends CreateBudgetActionResponse, __MetadataBearer {}

/**
 * <p>
 *          Creates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new CreateBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 */
export class CreateBudgetActionCommand extends $Command<
  CreateBudgetActionCommandInput,
  CreateBudgetActionCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBudgetActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBudgetActionCommandInput, CreateBudgetActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "CreateBudgetActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBudgetActionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBudgetActionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBudgetActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBudgetActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBudgetActionCommandOutput> {
    return deserializeAws_json1_1CreateBudgetActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
