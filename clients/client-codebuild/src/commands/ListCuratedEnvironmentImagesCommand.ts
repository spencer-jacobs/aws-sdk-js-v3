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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListCuratedEnvironmentImagesCommand,
  serializeAws_json1_1ListCuratedEnvironmentImagesCommand,
} from "../protocols/Aws_json1_1";

export interface ListCuratedEnvironmentImagesCommandInput extends ListCuratedEnvironmentImagesInput {}
export interface ListCuratedEnvironmentImagesCommandOutput
  extends ListCuratedEnvironmentImagesOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about Docker images that are managed by CodeBuild.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListCuratedEnvironmentImagesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListCuratedEnvironmentImagesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListCuratedEnvironmentImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCuratedEnvironmentImagesCommandInput} for command's `input` shape.
 * @see {@link ListCuratedEnvironmentImagesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCuratedEnvironmentImagesCommand extends $Command<
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCuratedEnvironmentImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListCuratedEnvironmentImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCuratedEnvironmentImagesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListCuratedEnvironmentImagesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCuratedEnvironmentImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCuratedEnvironmentImagesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCuratedEnvironmentImagesCommandOutput> {
    return deserializeAws_json1_1ListCuratedEnvironmentImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}