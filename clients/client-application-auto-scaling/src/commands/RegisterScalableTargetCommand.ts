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
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import {
  RegisterScalableTargetRequest,
  RegisterScalableTargetRequestFilterSensitiveLog,
  RegisterScalableTargetResponse,
  RegisterScalableTargetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterScalableTargetCommand,
  serializeAws_json1_1RegisterScalableTargetCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterScalableTargetCommandInput extends RegisterScalableTargetRequest {}
export interface RegisterScalableTargetCommandOutput extends RegisterScalableTargetResponse, __MetadataBearer {}

/**
 * <p>Registers or updates a scalable target. </p>
 *          <p>A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable
 *          targets are uniquely identified by the combination of resource ID, scalable dimension, and
 *          namespace. </p>
 *          <p>When you register a new scalable target, you must specify values for minimum and maximum
 *          capacity. Current capacity will be adjusted within the specified range when scaling starts.
 *          Application Auto Scaling scaling policies will not scale capacity to values that are outside of this
 *          range.</p>
 *          <p>After you register a scalable target, you do not need to register it again to use other
 *          Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service
 *          namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can
 *          deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p>
 *          <p>To update a scalable target, specify the parameters that you want to change. Include the
 *          parameters that identify the scalable target: resource ID, scalable dimension, and
 *          namespace. Any parameters that you don't specify are not changed by this update request. </p>
 *          <note>
 *             <p>If you call the <code>RegisterScalableTarget</code> API to update an existing
 *             scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it is below
 *             the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the
 *             scalable target to place it within these bounds, even if you don't include the
 *                <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, RegisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, RegisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link RegisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 */
export class RegisterScalableTargetCommand extends $Command<
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterScalableTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterScalableTargetCommandInput, RegisterScalableTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "RegisterScalableTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterScalableTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterScalableTargetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterScalableTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterScalableTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterScalableTargetCommandOutput> {
    return deserializeAws_json1_1RegisterScalableTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
