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

## The main stack file

There primary stack file is in the `/bin` directory of the generated project. It will be named after the CDK project. If you've built the code or are running `npm run watch` then the compiled `.js` will also appear.

```bash
bin
├── system-of-record.d.ts (created as part of compiling the generated file)
├── system-of-record.js (the generated file that needs to be deployed)
└── system-of-record.ts (the file you edit)
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

## Define the API in the main stack file

## View the stack difference with API

## Deploy the stack with API

### Test the  API response

### Log the API responses

### Alert on the API responses

## Create a Lambda 

### Log from Lambda

### Trace Lambda

## Reference Lambda in main stack file

## Connect API and Lambda

## View the stack difference with Lambda

## Deploy the stack with Lambda

## Define the QLDB

## Update QLDB from Lambda

## View the stack difference with QLDB

## Deploy the stack with QLDB referenced




