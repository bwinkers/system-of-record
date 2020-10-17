
# History of how this was made

## Create directory to use

The directory name should match the name of the repo you will be creating.
The directory name will be used by `cdk init` in naming  the created files.

```bash
mkdir system-of-record
cd system-of-record
```

## Initialize Git

```bash
git init
```

## Initialize CDK app

This will create a CDK app with files named after the directory.
Note: This needs to be done in an empty directory.

```bash
cdk init app --language=typescript
```

## Create Docs

README.md
docs/how-this-was-created.md (this doc)

## Save our work

I created a repo on Github using their web interface. I then pointed my local repo at it and pushed up the changes.

```bash
git remote add origin git@github.com:bwinkers/system-of-record.git
git push -u origin master
```

## The entry point

There primary entry point is in the `/bin` directory of the generated project. It will be named after the CDK project. If you've built the code or are running `npm run watch` then the compiled `.js` will also appear.

```bash
bin
└── system-of-record.ts
```

## The main stack file

All major changes happen through this file. This is the file you will edit to add new functionality.

```bash
lib
└── system-of-record-stack.ts
```

## Generate the initial blank template

```bash
cdk synth > template.yaml
```

## Install the modules we need and save in package.json

```bash
npm install --save \
@aws-cdk/aws-apigateway \
@aws-cdk/aws-lambda \
@aws-cdk/aws-qldb
```

## Create a Lambda

Create a new `lambda` directory at the same level as `lib` and `bin`.

```bash
mkdir lambda
```

Create the Lamba file.

```bash
vi lambda/SystermOfRecordService.ts
```

Add this content to the Lambda file:

```javascript
exports.handler = async function(event) {
console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: "System of Record Service (SoRS)\n"
    };
};
```

### Log from Lambda

@TODO

### Trace Lambda

@TODO

## Reference Lambda in main stack file

We need to include the requried modules and define the Lambda in the stack

### Include Lambda module

```javascript
import * as lambda from '@aws-cdk/aws-lambda';
```

### Define the Lambda construct

```javascript
const sorLambda = new lambda.Function(this, 'sorHandler', {
    runtime: lambda.Runtime.NODEJS_12_X,     // execution environment
    code: lambda.Code.fromAsset('lambda'),   // code loaded from "lambda" directory
    handler: 'SystemOfRecordService.handler' // file is "hello", function is "handler"
});
```

## View the stack difference with Lambda

```bash
cdk diff
```

## Add the API in the main stack file


### Include the API Gateway module

```javascript
import * as apigateway from '@aws-cdk/aws-apigateway';
````

### Define an API Gateway

We will create an API and refer to it as `api` in the rest of this script. I used the follwing information in defining the API.

- Constructs Logical ID: "sor-api"
- API Name: "System of Record Service"
- Description: "This service records events in a secure ledger."

```javascript
const api = new apigateway.RestApi(this, "sor-api", {
    restApiName: "System of Record Service",
    description: "This service records events in a secure ledger."
});
```

### Define the API root for the Gateway

I will attach resources to the root and methods to the resources following good REST practices. CDK does a lot of the heavy lifting to create a consistent framework.

```javascript
api.root.addMethod('ANY');
```

#### Add a RESTful resource to the API

I want REST services provided under the resource name `records`. I also use `records` as the local variable name in this script to make human comprehension easier.

```javascript
var records = api.root.addResource("records");
```

#### Add a POST support to our resource

```javascript
api.root.addMethod("POST", createRecordIntegration);
```

## View the stack difference with API

## Deploy the stack with API

### Log the API responses

### Alert on the API responses

## Test API Response

We have a simple Postman collection that performs a correct POST given the URL of your API Gateway.

```bash
npm install --save-dev  newman
newman <API_URL> system-of-record-ping.json
```

## Define the QLDB

## Update QLDB from Lambda

### Modify Lambda code to update QLDB

### Grant Lambda permissions to read and write QLDB

## View the stack difference with QLDB integrated

## Deploy the stack with QLDB integrated

## Monitor App

### Add API Gateway to dashboard

### Add Lambda to dashboard

### Add QLDB to dashboard

### Create traffic queries
