import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from '@aws-cdk/aws-apigateway'
import * as qldb from '@aws-cdk/aws-qldb'

export class SystemOfRecordStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const sorsLambda = new lambda.Function(this, 'Handler', {
      runtime: lambda.Runtime.NODEJS_12_X,     // execution environment
      code: lambda.Code.fromAsset('lambda'),   // code loaded from "lambda" directory
      handler: 'SystemOfRecordService.handler' // file is "SystemOfRecordService", function is "handler"
    })

    // defines an API Gateway REST API resource backed by our "sorsLambda" function.
    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: sorsLambda
    })
  }
}
