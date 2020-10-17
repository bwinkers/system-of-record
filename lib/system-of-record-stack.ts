import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';


export class SystemOfRecordStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sorLambda = new lambda.Function(this, 'sorHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,     // execution environment
      code: lambda.Code.fromAsset('lambda'),   // code loaded from "lambda" directory
      handler: 'SystemOfRecordService.handler' // file is "hello", function is "handler"
    });
  }
}
